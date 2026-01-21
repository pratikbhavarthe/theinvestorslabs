"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Loader2 } from "lucide-react";
import { ZodIssue } from "zod";
import {
  partnershipFormSchema,
  type PartnershipFormData,
} from "@/lib/validations/partnership";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function PartnershipPage() {
  const [formData, setFormData] = useState<PartnershipFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    partnershipType: "agency", // Default to agency
    businessSize: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof PartnershipFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof PartnershipFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus("idle");

    const result = partnershipFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof PartnershipFormData, string>> =
        {};
      result.error.issues.forEach((error: ZodIssue) => {
        const field = error.path[0] as keyof PartnershipFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact/partnership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          partnershipType: "agency",
          businessSize: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/contact-hero.png"
          alt="Become a Partner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-amethyst/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm md:text-base text-white/80 uppercase tracking-wider mb-4 font-medium">
              PARTNERSHIP PROGRAM
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Grow Together
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Join our partner network and unlock new opportunities in premium
              real estate
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <p className="text-sm text-indigo-velvet uppercase tracking-wider mb-4 font-medium">
                Join Our Network
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-amethyst mb-6 leading-tight">
                Partner with us for mutual growth
              </h2>
              <p className="text-dark-amethyst/70 mb-8 text-lg">
                We&apos;re looking for agencies, payment processors, fractional
                CFOs, and builders to join our partner program and grow
                together.
              </p>

              {/* Partnership Benefits */}
              <div className="space-y-6 pt-8 border-t border-dust-grey/30">
                <div>
                  <h3 className="text-xl font-bold text-dark-amethyst mb-3">
                    Partnership Benefits
                  </h3>
                  <ul className="space-y-2 text-dark-amethyst/70">
                    <li>• Revenue sharing opportunities</li>
                    <li>• Dedicated partner support</li>
                    <li>• Marketing and sales resources</li>
                    <li>• Priority access to new properties</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-dark-amethyst mb-3">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-center">
                      <Phone className="w-5 h-5 text-indigo-velvet shrink-0" />
                      <a
                        href="tel:+918800843413"
                        className="text-dark-amethyst/70 hover:text-indigo-velvet transition-colors"
                      >
                        +91 8800843413
                      </a>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Mail className="w-5 h-5 text-indigo-velvet shrink-0" />
                      <a
                        href="mailto:partnerships@theinvestorslab.in"
                        className="text-dark-amethyst/70 hover:text-indigo-velvet transition-colors"
                      >
                        partnerships@theinvestorslab.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-dust-grey/30 rounded-3xl p-8 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark-amethyst mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full h-12 px-4 rounded-xl border ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-dust-grey/30 focus:ring-indigo-velvet"
                    } focus:outline-none focus:ring-2 transition-all`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-amethyst mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 rounded-xl border ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-dust-grey/30 focus:ring-indigo-velvet"
                      } focus:outline-none focus:ring-2 transition-all`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-dark-amethyst mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 rounded-xl border ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "border-dust-grey/30 focus:ring-indigo-velvet"
                      } focus:outline-none focus:ring-2 transition-all`}
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-dark-amethyst mb-2"
                  >
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full h-12 px-4 rounded-xl border ${
                      errors.company
                        ? "border-red-500 focus:ring-red-500"
                        : "border-dust-grey/30 focus:ring-indigo-velvet"
                    } focus:outline-none focus:ring-2 transition-all`}
                    placeholder="Your company name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Partnership Type and Business Size */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="partnershipType"
                      className="block text-sm font-medium text-dark-amethyst mb-2"
                    >
                      Partnership Type *
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-dust-grey/30 focus:ring-indigo-velvet focus:outline-none focus:ring-2 transition-all"
                    >
                      <option value="agency">Agency</option>
                      <option value="payment-processor">
                        Payment Processor
                      </option>
                      <option value="cfo">Fractional CFO</option>
                      <option value="builder">Builder</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="businessSize"
                      className="block text-sm font-medium text-dark-amethyst mb-2"
                    >
                      Business Size *
                    </label>
                    <input
                      type="text"
                      id="businessSize"
                      name="businessSize"
                      value={formData.businessSize}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 rounded-xl border ${
                        errors.businessSize
                          ? "border-red-500 focus:ring-red-500"
                          : "border-dust-grey/30 focus:ring-indigo-velvet"
                      } focus:outline-none focus:ring-2 transition-all`}
                      placeholder="e.g., 10-50 employees"
                    />
                    {errors.businessSize && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.businessSize}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-amethyst mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-dust-grey/30 focus:ring-indigo-velvet"
                    } focus:outline-none focus:ring-2 transition-all resize-none`}
                    placeholder="Tell us about your business and partnership goals..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                {isSubmitting ? (
                  <button
                    type="submit"
                    disabled
                    className="w-full h-14 bg-indigo-velvet/50 text-white font-medium rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </button>
                ) : (
                  <InteractiveHoverButton
                    type="submit"
                    className="border border-indigo-velvet"
                  >
                    Apply for Partnership
                  </InteractiveHoverButton>
                )}

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-800 text-center">
                      Application submitted! Our partnerships team will review
                      and contact you soon.
                    </p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-800 text-center">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
