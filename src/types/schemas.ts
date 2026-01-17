import { z } from "zod";

export const propertySchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters").max(200),
  description: z.string().min(50, "Description must be at least 50 characters"),
  city: z.enum(["Noida", "Gurgaon"], {
    message: "Please select a city",
  }),
  sector: z.string().min(1, "Sector is required"),
  price: z.number().positive("Price must be a positive number"),
  propertyType: z.enum(["Flat", "Villa", "Plot", "Commercial"], {
    message: "Please select a property type",
  }),
  status: z.enum(["Available", "Sold", "Coming Soon"]).default("Available"),
  featured: z.boolean().default(false),
  images: z
    .array(z.string().url())
    .min(1, "At least one image is required")
    .max(10),
  videoUrl: z.string().url().optional(),
});

export const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  message: z.string().max(500).optional(),
  propertyId: z.string().optional(),
});

export type PropertyInput = z.infer<typeof propertySchema>;
export type LeadInput = z.infer<typeof leadSchema>;
