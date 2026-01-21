"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  consultationFormSchema,
  type ConsultationFormData,
} from "@/lib/validations/consultation";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function ConsultationContent() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interestType: undefined,
      budgetRange: "",
      message: "",
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      // Format the rich consultation data into a detailed message for the standard leads API
      const formattedMessage = `[CONSULTATION REQUEST]
Interest Type: ${data.interestType.toUpperCase()}
Budget Range: ${data.budgetRange}

Details:
${data.message}`;

      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: formattedMessage,
        // No propertyId as this is a general consultation
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Section - Direct Advisory */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-dark-amethyst overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/60 mb-6 block">
              Direct Advisory
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Secure your NCR legacy.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl italic">
              “Strategic acquisitions require more than a search bar. They
              require a partner who understands the pulse of the elite
              landscape.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left Content - Value Prop */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-dark-amethyst mb-6">
                  Expert Guidance, <br />
                  Tailored Strategies.
                </h3>
                <p className="text-dark-amethyst/70 mb-8 leading-relaxed">
                  Whether you are looking to acquire a premium asset, divest a
                  property, or explore high-yield partnership opportunities, our
                  advisory team provides the data-backed insights you need.
                </p>

                <div className="space-y-6 pt-8 border-t border-dust-grey/30">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-velvet/5 flex items-center justify-center shrink-0">
                      <span className="text-indigo-velvet font-bold text-sm">
                        1
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-amethyst mb-1">
                        Market Analysis
                      </h4>
                      <p className="text-sm text-dark-amethyst/60">
                        Deep dive into micro-market trends and price
                        appreciation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-velvet/5 flex items-center justify-center shrink-0">
                      <span className="text-indigo-velvet font-bold text-sm">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-amethyst mb-1">
                        Legal Due Diligence
                      </h4>
                      <p className="text-sm text-dark-amethyst/60">
                        Complete verification of title, approvals, and
                        compliance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-velvet/5 flex items-center justify-center shrink-0">
                      <span className="text-indigo-velvet font-bold text-sm">
                        3
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-amethyst mb-1">
                        Negotiation & Closure
                      </h4>
                      <p className="text-sm text-dark-amethyst/60">
                        Expert representation to secure the best terms.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - The Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-4xl p-8 md:p-12"
              >
                {submitStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-amethyst mb-4">
                      Request Received
                    </h3>
                    <p className="text-dark-amethyst/70 max-w-md">
                      Thank you for trusting us. Our advisory team will review
                      your requirements and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="mt-8 text-indigo-velvet font-bold text-sm uppercase tracking-widest hover:underline"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-dark-amethyst">
                          Full Name
                        </label>
                        <input
                          {...form.register("name")}
                          className="w-full h-12 border-b border-dust-grey bg-transparent px-0 text-dark-amethyst placeholder:text-dark-amethyst/30 focus:border-indigo-velvet focus:outline-none transition-colors"
                          placeholder="Ex. John Doe"
                        />
                        {form.formState.errors.name && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {form.formState.errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-dark-amethyst">
                          Phone Number
                        </label>
                        <input
                          {...form.register("phone")}
                          className="w-full h-12 border-b border-dust-grey bg-transparent px-0 text-dark-amethyst placeholder:text-dark-amethyst/30 focus:border-indigo-velvet focus:outline-none transition-colors"
                          placeholder="+91 98765 43210"
                        />
                        {form.formState.errors.phone && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {form.formState.errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-dark-amethyst">
                        Email Address
                      </label>
                      <input
                        {...form.register("email")}
                        className="w-full h-12 border-b border-dust-grey bg-transparent px-0 text-dark-amethyst placeholder:text-dark-amethyst/30 focus:border-indigo-velvet focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                      {form.formState.errors.email && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Interest Type */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-dark-amethyst">
                          I am interested to
                        </label>
                        <select
                          {...form.register("interestType")}
                          className="w-full h-12 border-b border-dust-grey bg-transparent px-0 text-dark-amethyst placeholder:text-dark-amethyst/30 focus:border-indigo-velvet focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="buy">Buy a Property</option>
                          <option value="sell">Sell a Property</option>
                          <option value="invest">Invest for ROI</option>
                          <option value="partner">Partner with Us</option>
                        </select>
                        {form.formState.errors.interestType && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {form.formState.errors.interestType.message}
                          </p>
                        )}
                      </div>

                      {/* Budget Range */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-dark-amethyst">
                          Investment Range
                        </label>
                        <select
                          {...form.register("budgetRange")}
                          className="w-full h-12 border-b border-dust-grey bg-transparent px-0 text-dark-amethyst placeholder:text-dark-amethyst/30 focus:border-indigo-velvet focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="" disabled>
                            Select range
                          </option>
                          <option value="Under 1 Cr">Under ₹1 Cr</option>
                          <option value="1 Cr - 2 Cr">₹1 Cr - ₹2 Cr</option>
                          <option value="2 Cr - 5 Cr">₹2 Cr - ₹5 Cr</option>
                          <option value="5 Cr+">₹5 Cr+</option>
                        </select>
                        {form.formState.errors.budgetRange && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {form.formState.errors.budgetRange.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-dark-amethyst">
                        Specific Requirements
                      </label>
                      <textarea
                        {...form.register("message")}
                        rows={4}
                        className="w-full py-3 border-b border-dust-grey bg-transparent px-0 text-dark-amethyst placeholder:text-dark-amethyst/30 focus:border-indigo-velvet focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your preferences (location, size, timeline)..."
                      />
                      {form.formState.errors.message && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-6">
                      {submitStatus === "error" && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Something went wrong. Please check your connection and
                          try again.
                        </div>
                      )}

                      <InteractiveHoverButton
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="w-fit mx-auto px-12 justify-center border border-indigo-velvet"
                      >
                        {form.formState.isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          "Request Consultation"
                        )}
                      </InteractiveHoverButton>
                      <p className="text-center text-[10px] text-dark-amethyst/40 mt-4 uppercase tracking-wider">
                        Your information is kept strictly confidential.
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
