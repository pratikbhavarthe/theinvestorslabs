"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Loader2 } from "lucide-react";
import { ZodIssue } from "zod";
import {
  supportFormSchema,
  type SupportFormData,
} from "@/lib/validations/support";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function SupportPage() {
  const [formData, setFormData] = useState<SupportFormData>({
    name: "",
    email: "",
    phone: "",
    category: "technical",
    priority: "medium",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof SupportFormData, string>>
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
    if (errors[name as keyof SupportFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus("idle");

    const result = supportFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SupportFormData, string>> = {};
      result.error.issues.forEach((error: ZodIssue) => {
        const field = error.path[0] as keyof SupportFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact/support", {
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
          category: "technical",
          priority: "medium",
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
          alt="Get Support"
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
              GET SUPPORT
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              We&apos;re Here to Help
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              24/7/365 support for all your questions and technical issues
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
                24/7 Support
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-amethyst mb-6 leading-tight">
                How can we assist you today?
              </h2>
              <p className="text-dark-amethyst/70 mb-8 text-lg">
                Our support team is available around the clock to help with
                technical issues, account questions, property inquiries, and
                more.
              </p>

              {/* Contact Information */}
              <div className="space-y-6 pt-8 border-t border-dust-grey/30">
                <div>
                  <h3 className="text-xl font-bold text-dark-amethyst mb-3">
                    Direct Contact
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
                        href="mailto:support@theinvestorslab.in"
                        className="text-dark-amethyst/70 hover:text-indigo-velvet transition-colors"
                      >
                        support@theinvestorslab.in
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-dark-amethyst mb-2">
                    Response Time:
                  </h4>
                  <p className="text-dark-amethyst/70">
                    We typically respond within 24 hours.
                    <br />
                    High priority issues are addressed immediately.
                  </p>
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

                {/* Category and Priority */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-dark-amethyst mb-2"
                    >
                      Issue Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-dust-grey/30 focus:ring-indigo-velvet focus:outline-none focus:ring-2 transition-all"
                    >
                      <option value="technical">Technical Issue</option>
                      <option value="account">Account Question</option>
                      <option value="property">Property Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="priority"
                      className="block text-sm font-medium text-dark-amethyst mb-2"
                    >
                      Priority *
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-dust-grey/30 focus:ring-indigo-velvet focus:outline-none focus:ring-2 transition-all"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
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
                    placeholder="Describe your issue..."
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
                    Submit Request
                  </InteractiveHoverButton>
                )}

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-800 text-center">
                      Support request submitted! We&apos;ll get back to you
                      soon.
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
