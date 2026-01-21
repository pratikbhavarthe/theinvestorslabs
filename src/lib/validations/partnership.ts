import { z } from "zod";

export const partnershipFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  company: z.string().min(2, "Company name is required"),
  partnershipType: z.enum([
    "agency",
    "payment-processor",
    "cfo",
    "builder",
    "channel-partner",
    "developer",
    "investor",
    "other",
  ]),
  businessSize: z.string().min(1, "Business size is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type PartnershipFormData = z.infer<typeof partnershipFormSchema>;
