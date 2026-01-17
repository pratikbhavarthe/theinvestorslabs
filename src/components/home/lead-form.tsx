"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto border-[#E5E7EB] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-[#047857]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-[#047857]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-[1.5rem] font-semibold text-[#111827] mb-2 leading-[1.35]">
            Thank You!
          </h3>
          <p className="text-[0.9375rem] text-[#6B7280] mb-6 leading-[1.6]">
            We've received your inquiry. Our team will contact you shortly.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="border-[#E5E7EB] text-[#111827] h-11 px-6 rounded-xl"
          >
            Submit Another Inquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto border-[#E5E7EB] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <CardHeader className="p-6">
        <CardTitle className="text-[1.5rem] font-semibold text-center text-[#111827] leading-[1.35]">
          Get in Touch
        </CardTitle>
        <p className="text-[0.9375rem] text-[#6B7280] text-center leading-[1.6]">
          Fill out the form below and our team will contact you within 24 hours
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-[0.875rem] font-medium text-[#6B7280] mb-2"
            >
              Full Name *
            </label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="John Doe"
              className="w-full h-11 border-[#E5E7EB] rounded-lg focus:ring-[#0f172a] text-[15px]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[0.875rem] font-medium text-[#6B7280] mb-2"
            >
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="john@example.com"
              className="w-full h-11 border-[#E5E7EB] rounded-lg focus:ring-[#0f172a] text-[15px]"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-[0.875rem] font-medium text-[#6B7280] mb-2"
            >
              Phone Number *
            </label>
            <Input
              id="phone"
              type="tel"
              required
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="9876543210"
              className="w-full h-11 border-[#E5E7EB] rounded-lg focus:ring-[#0f172a] text-[15px]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[0.875rem] font-medium text-[#6B7280] mb-2"
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell us about your requirements..."
              className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f172a] text-[15px] text-[#111827]"
            />
          </div>

          {error && (
            <div className="p-3 bg-[#DC2626]/10 border border-[#DC2626]/20 rounded-lg text-[#DC2626] text-[0.875rem]">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0f172a] hover:bg-[#1e293b] h-12 rounded-xl text-[15px] font-semibold"
            size="lg"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
