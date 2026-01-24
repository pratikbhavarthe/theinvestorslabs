import {
  pgTable,
  text,
  timestamp,
  integer,
  boolean,
  varchar,
  index,
  jsonb,
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
    city: varchar("city", { length: 50 }).notNull(), // Noida or Greater Noida
    sector: text("sector").notNull(),
    price: integer("price").notNull(),
    propertyType: varchar("property_type", { length: 50 }).notNull(), // Flat, Villa, Plot, Commercial
    status: varchar("status", { length: 20 }).notNull().default("Available"), // Available, Sold, Coming Soon
    featured: boolean("featured").notNull().default(false),
    images: text("images").array(), // Array of image URLs
    videoUrl: text("video_url"), // Optional video walkthrough
    address: text("address"),
    unit: varchar("unit", { length: 20 }),
    superArea: varchar("super_area", { length: 50 }),
    floor: varchar("floor", { length: 20 }),
    bathrooms: integer("bathrooms"),
    balconies: integer("balconies"),
    facing: varchar("facing", { length: 50 }),
    parking: integer("parking"),
    view: text("view"),
    scores: text("scores"),
    configuration: varchar("configuration", { length: 50 }), // e.g., "1 BHK", "2 BHK", etc.
    listingType: varchar("listing_type", { length: 20 })
      .notNull()
      .default("Sale"), // Sale, Rent
    furnishing: varchar("furnishing", { length: 20 }), // Semi-Furnished, Fully-Furnished, Unfurnished
    tenantPreference: varchar("tenant_preference", { length: 50 }), // Family, Bachelors, Any
    availableFrom: timestamp("available_from"),
    carpetArea: integer("carpet_area"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ({
    cityIdx: index("city_idx").on(table.city),
    propertyTypeIdx: index("property_type_idx").on(table.propertyType),
    statusIdx: index("status_idx").on(table.status),
    featuredIdx: index("featured_idx").on(table.featured),
    priceIdx: index("price_idx").on(table.price),
    listingTypeIdx: index("listing_type_idx").on(table.listingType),
  }),
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
  }),
);

export const inquiries = pgTable(
  "inquiries",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    type: varchar("type", { length: 50 }).notNull(), // sales, partnership, support, contact
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    details: jsonb("details"), // structured data specific to the type
    message: text("message"),
    status: varchar("status", { length: 20 }).default("new"), // new, contacted, closed
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    typeIdx: index("inquiries_type_idx").on(table.type),
    statusIdx: index("inquiries_status_idx").on(table.status),
    createdAtIdx: index("inquiries_created_at_idx").on(table.createdAt),
  }),
);

export type Property = typeof properties.$inferSelect;
export type NewProperty = typeof properties.$inferInsert;
export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;
