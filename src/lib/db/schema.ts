import {
  pgTable,
  text,
  timestamp,
  integer,
  boolean,
  varchar,
  index,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const properties = pgTable(
  "properties",
  {
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
  },
  (table) => ({
    cityIdx: index("city_idx").on(table.city),
    propertyTypeIdx: index("property_type_idx").on(table.propertyType),
    statusIdx: index("status_idx").on(table.status),
    featuredIdx: index("featured_idx").on(table.featured),
    priceIdx: index("price_idx").on(table.price),
  })
);

export const leads = pgTable(
  "leads",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    message: text("message"),
    propertyId: text("property_id").references(() => properties.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    propertyIdIdx: index("property_id_idx").on(table.propertyId),
    createdAtIdx: index("created_at_idx").on(table.createdAt),
  })
);
