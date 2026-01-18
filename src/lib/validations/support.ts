import { z } from "zod";

export const supportFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  category: z.enum(["technical", "account", "property", "other"]),
  priority: z.enum(["low", "medium", "high"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type SupportFormData = z.infer<typeof supportFormSchema>;
