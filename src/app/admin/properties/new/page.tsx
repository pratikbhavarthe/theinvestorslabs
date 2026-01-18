"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload, X, Loader2 } from "lucide-react";
import {
  propertyFormSchema,
  type PropertyFormData,
} from "@/lib/validations/property";

export default function NewPropertyPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<PropertyFormData>>({
    title: "",
    description: "",
    city: "Noida",
    sector: "",
    price: 0,
    propertyType: "Flat",
    status: "Available",
    featured: false,
    images: [],
    videoUrl: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof PropertyFormData, string>>
  >({});
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev: Partial<PropertyFormData>) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
            ? Number(value)
            : value,
    }));

    if (errors[name as keyof PropertyFormData]) {
      setErrors((prev: Partial<Record<keyof PropertyFormData, string>>) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // TODO: Implement actual image upload with UploadThing
    // For now, create temporary URLs
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setImageUrls((prev: string[]) => [...prev, ...urls]);
    setFormData((prev: Partial<PropertyFormData>) => ({
      ...prev,
      images: [...(prev.images || []), ...urls],
    }));
  };

  const removeImage = (index: number) => {
    setImageUrls((prev: string[]) =>
      prev.filter((_: string, i: number) => i !== index),
    );
    setFormData((prev: Partial<PropertyFormData>) => ({
      ...prev,
      images: prev.images?.filter((_: string, i: number) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = propertyFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof PropertyFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof PropertyFormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (response.ok) {
        router.push("/admin/properties");
      } else {
        alert("Failed to create property");
      }
    } catch (error) {
      console.error("Error creating property:", error);
      alert("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/properties"
          className="rounded-lg p-2 text-dark-amethyst/60 transition-colors hover:bg-honeydew/50 hover:text-indigo-velvet"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-dark-amethyst">
            Add New Property
          </h1>
          <p className="mt-1 text-dark-amethyst/60">
            Create a new property listing
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-dust-grey/20">
          <h2 className="text-lg font-semibold text-dark-amethyst mb-4">
            Basic Information
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Title */}
            <div className="md:col-span-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-dark-amethyst mb-2"
              >
                Property Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full h-12 px-4 rounded-xl border ${
                  errors.title ? "border-red-500" : "border-dust-grey/30"
                } focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20`}
                placeholder="e.g., Luxury 3BHK Apartment in Sector 62"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-dark-amethyst mb-2"
              >
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.description ? "border-red-500" : "border-dust-grey/30"
                } focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20 resize-none`}
                placeholder="Describe the property features, amenities, and highlights..."
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-dark-amethyst mb-2"
              >
                City *
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border border-dust-grey/30 focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20"
              >
                <option value="Noida">Noida</option>
                <option value="Greater Noida">Greater Noida</option>
              </select>
            </div>

            {/* Sector */}
            <div>
              <label
                htmlFor="sector"
                className="block text-sm font-medium text-dark-amethyst mb-2"
              >
                Sector/Locality *
              </label>
              <input
                type="text"
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className={`w-full h-12 px-4 rounded-xl border ${
                  errors.sector ? "border-red-500" : "border-dust-grey/30"
                } focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20`}
                placeholder="e.g., Sector 62"
              />
              {errors.sector && (
                <p className="mt-1 text-sm text-red-500">{errors.sector}</p>
              )}
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-dark-amethyst mb-2"
              >
                Price (₹) *
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className={`w-full h-12 px-4 rounded-xl border ${
                  errors.price ? "border-red-500" : "border-dust-grey/30"
                } focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20`}
                placeholder="50000000"
              />
              {errors.price && (
                <p className="mt-1 text-sm text-red-500">{errors.price}</p>
              )}
            </div>

            {/* Property Type */}
            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium text-dark-amethyst mb-2"
              >
                Property Type *
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border border-dust-grey/30 focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20"
              >
                <option value="Flat">Flat</option>
                <option value="Villa">Villa</option>
                <option value="Plot">Plot</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-dark-amethyst mb-2"
              >
                Status *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border border-dust-grey/30 focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20"
              >
                <option value="Available">Available</option>
                <option value="Sold">Sold</option>
                <option value="Coming Soon">Coming Soon</option>
              </select>
            </div>

            {/* Featured */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-5 w-5 rounded border-dust-grey/30 text-indigo-velvet focus:ring-indigo-velvet"
              />
              <label
                htmlFor="featured"
                className="text-sm font-medium text-dark-amethyst"
              >
                Mark as Featured Property
              </label>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-dust-grey/20">
          <h2 className="text-lg font-semibold text-dark-amethyst mb-4">
            Images *
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-dust-grey/30 rounded-xl cursor-pointer hover:border-indigo-velvet transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="h-8 w-8 text-dust-grey mb-2" />
                  <p className="text-sm text-dark-amethyst/60">
                    Click to upload images
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            {imageUrls.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {imageUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={url}
                      alt={`Property ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                      style={{ width: "100%", height: "128px" }}
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            {errors.images && (
              <p className="text-sm text-red-500">{errors.images}</p>
            )}
          </div>
        </div>

        {/* Video URL */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-dust-grey/20">
          <h2 className="text-lg font-semibold text-dark-amethyst mb-4">
            Video (Optional)
          </h2>
          <div>
            <label
              htmlFor="videoUrl"
              className="block text-sm font-medium text-dark-amethyst mb-2"
            >
              Video URL
            </label>
            <input
              type="url"
              id="videoUrl"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-xl border border-dust-grey/30 focus:border-indigo-velvet focus:outline-none focus:ring-2 focus:ring-indigo-velvet/20"
              placeholder="https://youtube.com/watch?v=..."
            />
            {errors.videoUrl && (
              <p className="mt-1 text-sm text-red-500">{errors.videoUrl}</p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4">
          <Link
            href="/admin/properties"
            className="px-6 py-3 text-sm font-medium text-dark-amethyst transition-colors hover:text-indigo-velvet"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 rounded-xl bg-indigo-velvet px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-dark-amethyst disabled:opacity-50"
          >
            {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
            {isSubmitting ? "Creating..." : "Create Property"}
          </button>
        </div>
      </form>
    </div>
  );
}
