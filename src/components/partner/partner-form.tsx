"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { partnershipFormSchema } from "@/lib/validations/partnership";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type PartnershipFormData = z.infer<typeof partnershipFormSchema>;

interface PartnerFormProps {
  selectedRole?: "channel-partner" | "developer" | "investor" | "other" | null;
}

export function PartnerForm({ selectedRole }: PartnerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      company: "",
      message: "",
      partnershipType: "channel-partner", // Default backup
    },
  });

  // Update form value when prop changes
  useEffect(() => {
    if (selectedRole) {
      setValue("partnershipType", selectedRole);
    }
  }, [selectedRole, setValue]);

  async function onSubmit(data: PartnershipFormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact/partnership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      toast.success("Application Received", {
        description: "Welcome to the network. We will contact you shortly.",
      });
      reset();
    } catch {
      toast.error("Submission Failed", {
        description: "Please try again later or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Premium "Flushed" Input Style
  const inputClasses =
    "bg-transparent border-0 border-b border-dark-amethyst/20 rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-indigo-velvet hover:border-dark-amethyst/50 transition-all placeholder:text-dark-amethyst/30 h-auto text-lg";
  const labelClasses =
    "text-xs font-bold uppercase tracking-[0.15em] text-dark-amethyst/50 mb-1";

  return (
    <div className="relative">
      <div className="max-w-xl mx-auto">
        {/* Header removed as it is now handled by the parent layout */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <Label htmlFor="name" className={labelClasses}>
                Full Name
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Your Name"
                className={inputClasses}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className={labelClasses}>
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="name@company.com"
                className={inputClasses}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <Label htmlFor="phone" className={labelClasses}>
                Phone Number
              </Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+91 98765 43210"
                className={inputClasses}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Label htmlFor="city" className={labelClasses}>
                City
              </Label>
              <Input
                id="city"
                {...register("city")}
                placeholder="e.g. Gurgaon"
                className={inputClasses}
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hidden field for partnership type since it's pre-selected */}
            <input type="hidden" {...register("partnershipType")} />

            <div className="md:col-span-2 space-y-1">
              <Label htmlFor="company" className={labelClasses}>
                Company (Optional)
              </Label>
              <Input
                id="company"
                {...register("company")}
                placeholder="Company Name"
                className={inputClasses}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="message" className={labelClasses}>
              Message
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Tell us about yourself..."
              className={cn(inputClasses, "min-h-[100px] resize-none")}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full h-14 bg-dark-amethyst hover:bg-indigo-velvet text-white rounded-none font-bold uppercase tracking-[0.2em] transition-all text-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
