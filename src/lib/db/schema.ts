import {
  pgTable,
  text,
  timestamp,
  integer,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const properties = pgTable("properties", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text("title").notNull(),
  description: text("description").notNull(),
  city: varchar("city", { length: 50 }).notNull(), // Noida or Gurgaon
  sector: text("sector").notNull(),
  price: integer("price").notNull(),
  propertyType: varchar("property_type", { length: 50 }).notNull(), // Flat, Villa, Plot, Commercial
  status: varchar("status", { length: 20 }).notNull().default("Available"), // Available, Sold, Coming Soon
  featured: boolean("featured").notNull().default(false),
  images: text("images").array(), // Array of image URLs
  videoUrl: text("video_url"), // Optional video walkthrough
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const leads = pgTable("leads", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message"),
  propertyId: text("property_id").references(() => properties.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
