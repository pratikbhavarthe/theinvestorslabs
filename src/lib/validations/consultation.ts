import { z } from "zod";

export const consultationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s()]*$/, "Invalid phone number format"),
  interestType: z.enum(["buy", "sell", "invest", "partner"]),
  budgetRange: z.string().min(1, "Please select an investment range"),
  message: z
    .string()
    .min(10, "Please provide some details about your requirements")
    .max(1000, "Message must not exceed 1000 characters"),
});

export type ConsultationFormData = z.infer<typeof consultationFormSchema>;
