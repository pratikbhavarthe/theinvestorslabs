import { z } from "zod";

export const propertyFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  city: z.enum(["Noida", "Greater Noida"]),
  sector: z.string().min(1, "Sector is required"),
  price: z.number().min(1000000, "Price must be at least ₹10 lakhs"),
  propertyType: z.enum(["Flat", "Villa", "Plot", "Commercial"]),
  status: z.enum(["Available", "Sold", "Coming Soon"]).default("Available"),
  featured: z.boolean().default(false),
  images: z.array(z.string().url()).min(1, "At least one image is required"),
  videoUrl: z.string().url().optional().or(z.literal("")),
});

export type PropertyFormData = z.infer<typeof propertyFormSchema>;
