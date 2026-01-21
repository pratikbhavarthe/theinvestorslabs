import { db } from "./index";
import { properties, leads } from "./schema";
import { eq, and, gte, lte, desc, sql } from "drizzle-orm";

// ============================================
// Property Queries
// ============================================

export interface PropertyFilters {
  city?: string | string[];
  propertyType?: string | string[];
  status?: string | string[];
  configuration?: string | string[];
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  featured?: boolean;
  facing?: string | string[];
  limit?: number;
  offset?: number;
  sort?:
    | "relevance"
    | "price_asc"
    | "price_desc"
    | "recent"
    | "rate_asc"
    | "rate_desc";
}

/**
 * Get properties with optional filters and pagination
 */
export async function getProperties(filters: PropertyFilters = {}) {
  const {
    city,
    propertyType,
    status = "Available",
    configuration,
    minPrice,
    maxPrice,
    minArea,
    maxArea,
    featured,
    facing,
    limit = 12,
    offset = 0,
    sort = "relevance",
  } = filters;

  const conditions = [];

  if (city) {
    if (Array.isArray(city)) {
      conditions.push(sql`${properties.city} IN ${city}`);
    } else {
      conditions.push(eq(properties.city, city));
    }
  }

  if (propertyType) {
    if (Array.isArray(propertyType)) {
      conditions.push(sql`${properties.propertyType} IN ${propertyType}`);
    } else {
      conditions.push(eq(properties.propertyType, propertyType));
    }
  }

  if (status) {
    if (Array.isArray(status)) {
      conditions.push(sql`${properties.status} IN ${status}`);
    } else {
      conditions.push(eq(properties.status, status));
    }
  }

  if (configuration) {
    if (Array.isArray(configuration)) {
      conditions.push(sql`${properties.configuration} IN ${configuration}`);
    } else {
      conditions.push(eq(properties.configuration, configuration));
    }
  }

  if (facing) {
    if (Array.isArray(facing)) {
      conditions.push(sql`${properties.facing} IN ${facing}`);
    } else {
      conditions.push(eq(properties.facing, facing));
    }
  }

  if (featured !== undefined)
    conditions.push(eq(properties.featured, featured));

  if (minPrice !== undefined) conditions.push(gte(properties.price, minPrice));
  if (maxPrice !== undefined) conditions.push(lte(properties.price, maxPrice));

  if (minArea !== undefined) {
    // Area filtering temporarily disabled due to schema type mismatch (varchar vs number)
    // conditions.push(gte(properties.superArea, minArea.toString()));
  }
  if (maxArea !== undefined) {
    // conditions.push(lte(properties.superArea, maxArea.toString()));
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  // Sorting logic
  let orderBy;
  switch (sort) {
    case "price_asc":
      orderBy = [desc(properties.featured), properties.price];
      break;
    case "price_desc":
      orderBy = [desc(properties.featured), desc(properties.price)];
      break;
    case "recent":
      orderBy = [desc(properties.featured), desc(properties.createdAt)];
      break;
    case "relevance":
    default:
      orderBy = [desc(properties.featured), desc(properties.createdAt)];
      break;
  }

  const [items, totalCount] = await Promise.all([
    db
      .select()
      .from(properties)
      .where(whereClause)
      .orderBy(...orderBy)
      .limit(limit)
      .offset(offset),
    db
      .select({ count: sql<number>`count(*)` })
      .from(properties)
      .where(whereClause)
      .then((result) => Number(result[0]?.count ?? 0)),
  ]);

  return {
    items,
    total: totalCount,
    hasMore: offset + items.length < totalCount,
  };
}

/**
 * Get a single property by ID
 */
export async function getPropertyById(id: string) {
  const result = await db
    .select()
    .from(properties)
    .where(eq(properties.id, id))
    .limit(1);

  return result[0] ?? null;
}

/**
 * Get featured properties for homepage
 */
export async function getFeaturedProperties(limit = 6) {
  return db
    .select()
    .from(properties)
    .where(
      and(eq(properties.featured, true), eq(properties.status, "Available")),
    )
    .orderBy(desc(properties.createdAt))
    .limit(limit);
}

/**
 * Create a new property (admin only)
 */
export async function createProperty(data: typeof properties.$inferInsert) {
  const result = await db
    .insert(properties)
    .values({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    .returning();

  return result[0];
}

/**
 * Update a property (admin only)
 */
export async function updateProperty(
  id: string,
  data: Partial<typeof properties.$inferInsert>,
) {
  const result = await db
    .update(properties)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(properties.id, id))
    .returning();

  return result[0] ?? null;
}

/**
 * Delete a property (admin only)
 */
export async function deleteProperty(id: string) {
  const result = await db
    .delete(properties)
    .where(eq(properties.id, id))
    .returning();

  return result[0] ?? null;
}

/**
 * Get property count by filters
 */
export async function getPropertyCount(
  filters: Omit<PropertyFilters, "limit" | "offset"> = {},
) {
  const { city, propertyType, status, minPrice, maxPrice, featured, facing } =
    filters;

  const conditions = [];

  if (city) {
    if (Array.isArray(city)) {
      conditions.push(sql`${properties.city} IN ${city}`);
    } else {
      conditions.push(eq(properties.city, city));
    }
  }

  if (propertyType) {
    if (Array.isArray(propertyType)) {
      conditions.push(sql`${properties.propertyType} IN ${propertyType}`);
    } else {
      conditions.push(eq(properties.propertyType, propertyType));
    }
  }

  if (status) {
    if (Array.isArray(status)) {
      conditions.push(sql`${properties.status} IN ${status}`);
    } else {
      conditions.push(eq(properties.status, status));
    }
  }

  if (facing) {
    if (Array.isArray(facing)) {
      conditions.push(sql`${properties.facing} IN ${facing}`);
    } else {
      conditions.push(eq(properties.facing, facing));
    }
  }

  if (featured !== undefined)
    conditions.push(eq(properties.featured, featured));

  if (minPrice !== undefined) conditions.push(gte(properties.price, minPrice));
  if (maxPrice !== undefined) conditions.push(lte(properties.price, maxPrice));

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(properties)
    .where(whereClause);

  return Number(result[0]?.count ?? 0);
}

// ============================================
// Lead Queries
// ============================================

export interface LeadFilters {
  propertyId?: string;
  limit?: number;
  offset?: number;
}

/**
 * Create a new lead
 */
export async function createLead(data: typeof leads.$inferInsert) {
  const result = await db
    .insert(leads)
    .values({
      ...data,
      createdAt: new Date(),
    })
    .returning();

  return result[0];
}

/**
 * Get leads with optional filters (admin only)
 */
export async function getLeads(filters: LeadFilters = {}) {
  const { propertyId, limit = 50, offset = 0 } = filters;

  const whereClause = propertyId ? eq(leads.propertyId, propertyId) : undefined;

  const [items, totalCount] = await Promise.all([
    db
      .select()
      .from(leads)
      .where(whereClause)
      .orderBy(desc(leads.createdAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ count: sql<number>`count(*)` })
      .from(leads)
      .where(whereClause)
      .then((result) => Number(result[0]?.count ?? 0)),
  ]);

  return {
    items,
    total: totalCount,
    hasMore: offset + items.length < totalCount,
  };
}

/**
 * Get lead count
 */
export async function getLeadCount() {
  const result = await db.select({ count: sql<number>`count(*)` }).from(leads);

  return Number(result[0]?.count ?? 0);
}
