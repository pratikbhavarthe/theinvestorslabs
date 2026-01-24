import { db } from "./index";
import { properties, leads, inquiries, type NewInquiry } from "./schema";
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
  listingType?: string; // Sale, Rent
  furnishing?: string | string[];
  tenantPreference?: string | string[];
  limit?: number;
  offset?: number;
  search?: string;
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
    listingType,
    furnishing,
    tenantPreference,
    limit = 12,
    offset = 0,
    sort = "relevance",
    search,
  } = filters;

  const conditions = [];

  if (search) {
    const searchLower = `%${search.toLowerCase()}%`;
    conditions.push(
      sql`lower(${properties.title}) LIKE ${searchLower} OR lower(${properties.sector}) LIKE ${searchLower} OR lower(${properties.city}) LIKE ${searchLower}`,
    );
  }

  if (city) {
    if (Array.isArray(city)) {
      conditions.push(sql`${properties.city} IN ${city}`);
    } else {
      conditions.push(eq(properties.city, city));
    }
  }

  if (listingType) {
    conditions.push(eq(properties.listingType, listingType));
  }

  if (propertyType) {
    if (Array.isArray(propertyType)) {
      conditions.push(sql`${properties.propertyType} IN ${propertyType}`);
    } else {
      conditions.push(eq(properties.propertyType, propertyType));
    }
  }

  if (furnishing) {
    if (Array.isArray(furnishing)) {
      conditions.push(sql`${properties.furnishing} IN ${furnishing}`);
    } else {
      conditions.push(eq(properties.furnishing, furnishing));
    }
  }

  if (tenantPreference) {
    if (Array.isArray(tenantPreference)) {
      conditions.push(
        sql`${properties.tenantPreference} IN ${tenantPreference}`,
      );
    } else {
      conditions.push(eq(properties.tenantPreference, tenantPreference));
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
  search?: string;
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
  const { propertyId, limit = 50, offset = 0, search } = filters;

  const conditions = [];
  if (propertyId) conditions.push(eq(leads.propertyId, propertyId));
  if (search) {
    const searchLower = `%${search.toLowerCase()}%`;
    conditions.push(
      sql`lower(${leads.name}) LIKE ${searchLower} OR lower(${leads.email}) LIKE ${searchLower}`,
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

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

// ============================================
// Inquiry Queries
// ============================================

export async function createInquiry(data: NewInquiry) {
  return await db.insert(inquiries).values(data).returning();
}

// ============================================
// Dashboard Queries
// ============================================

export interface InquiryFilters {
  type?: string;
  status?: string;
  limit?: number;
  offset?: number;
  search?: string;
}

export async function getInquiries(filters: InquiryFilters = {}) {
  const { type, status, limit = 50, offset = 0, search } = filters;

  const conditions = [];

  if (type) conditions.push(eq(inquiries.type, type));
  if (status) conditions.push(eq(inquiries.status, status));
  if (search) {
    const searchLower = `%${search.toLowerCase()}%`;
    conditions.push(
      sql`lower(${inquiries.name}) LIKE ${searchLower} OR lower(${inquiries.email}) LIKE ${searchLower}`,
    );
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const [items, totalCount] = await Promise.all([
    db
      .select()
      .from(inquiries)
      .where(whereClause)
      .orderBy(desc(inquiries.createdAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ count: sql<number>`count(*)` })
      .from(inquiries)
      .where(whereClause)
      .then((result) => Number(result[0]?.count ?? 0)),
  ]);

  return {
    items,
    total: totalCount,
    hasMore: offset + items.length < totalCount,
  };
}

export async function getDashboardStats() {
  const [
    totalProperties,
    availableProperties,
    soldProperties,
    totalLeads,
    totalInquiries,
    recentActivity,
    marketValue,
    monthlyStats, // Add this to destructuring
  ] = await Promise.all([
    // 1. Total Properties
    db
      .select({ count: sql<number>`count(*)` })
      .from(properties)
      .then((res) => res[0]?.count ?? 0),

    // 2. Available Properties
    db
      .select({ count: sql<number>`count(*)` })
      .from(properties)
      .where(eq(properties.status, "Available"))
      .then((res) => res[0]?.count ?? 0),

    // 3. Sold Properties
    db
      .select({ count: sql<number>`count(*)` })
      .from(properties)
      .where(eq(properties.status, "Sold"))
      .then((res) => res[0]?.count ?? 0),

    // 4. Total Leads
    db
      .select({ count: sql<number>`count(*)` })
      .from(leads)
      .then((res) => res[0]?.count ?? 0),

    // 5. Total Inquiries
    db
      .select({ count: sql<number>`count(*)` })
      .from(inquiries)
      .then((res) => res[0]?.count ?? 0),

    // 6. Recent Activity (Combined Leads & Inquiries)
    Promise.all([
      db
        .select({
          id: leads.id,
          type: sql<string>`'Lead'`,
          name: leads.name,
          date: leads.createdAt,
          message: leads.message,
        })
        .from(leads)
        .orderBy(desc(leads.createdAt))
        .limit(5),

      db
        .select({
          id: inquiries.id,
          type: inquiries.type,
          name: inquiries.name,
          date: inquiries.createdAt,
          message: inquiries.message,
        })
        .from(inquiries)
        .orderBy(desc(inquiries.createdAt))
        .limit(5),
    ]).then(([leads, inquiries]) => {
      return [...leads, ...inquiries]
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, 5);
    }),

    // 7. Total Asset Value (Sum of price of Available properties)
    db
      .select({ value: sql<number>`sum(${properties.price})` })
      .from(properties)
      .where(eq(properties.status, "Available"))
      .then((res) => res[0]?.value ?? 0),

    // 8. Real Monthly Analytics
    getMonthlyLeadStats(),
  ]);

  return {
    overview: {
      totalProperties,
      activeListings: availableProperties,
      soldProperties,
      totalLeads,
      totalInquiries,
      totalAssetValue: marketValue,
    },
    recentActivity,
    monthlyData: monthlyStats,
  };
}

async function getMonthlyLeadStats() {
  // In a real PostgreSQL environment, we would use `date_trunc`.
  // Since we are using Drizzle/Neon, we can fetch all leads and aggregate in JS for simplicity/compatibility
  // without complex raw SQL for now, assuming modest data volume.

  const allLeads = await db.select({ createdAt: leads.createdAt }).from(leads);
  const allInquiries = await db
    .select({ createdAt: inquiries.createdAt })
    .from(inquiries);

  const monthMap = new Map<
    string,
    { name: string; leads: number; inquiries: number }
  >();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Initialize current year months
  months.forEach((m) => monthMap.set(m, { name: m, leads: 0, inquiries: 0 }));

  const currentYear = new Date().getFullYear();

  allLeads.forEach((l) => {
    if (l.createdAt.getFullYear() === currentYear) {
      const m = months[l.createdAt.getMonth()];
      const entry = monthMap.get(m)!;
      entry.leads++;
    }
  });

  allInquiries.forEach((i) => {
    if (i.createdAt.getFullYear() === currentYear) {
      const m = months[i.createdAt.getMonth()];
      const entry = monthMap.get(m)!;
      entry.inquiries++;
    }
  });

  // Return array sorted by month index
  return Array.from(monthMap.values());
}
