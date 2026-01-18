import { Suspense } from "react";
import { getProperties } from "@/lib/db/queries";
import { PropertyCard } from "@/components/property/property-card";
import { PropertyLoader } from "@/components/ui/property-loader";
import { Badge } from "@/components/ui/badge";
import {
  FilterSidebar,
  SortDropdown,
} from "@/components/property/filter-panel";

export const metadata = {
  title: "Premium Properties Portfolio | The Investor Labs",
  description:
    "Explore curated high-end residential and commercial assets in Noida and Greater Noida. Fast, transparent, and luxury-first real estate.",
};

interface PropertiesPageProps {
  searchParams: Promise<{
    city?: string;
    config?: string;
    price?: string;
    area?: string;
    status?: string;
    facing?: string;
    sort?: string;
  }>;
}

const PRICE_RANGE_MAP: Record<string, { min: number; max: number }> = {
  "< 1 Cr": { min: 0, max: 10000000 },
  "1-1.5 Cr": { min: 10000000, max: 15000000 },
  "1.5-2 Cr": { min: 15000000, max: 20000000 },
  "2-3 Cr": { min: 20000000, max: 30000000 },
  "> 3 Cr": { min: 30000000, max: 1000000000 },
};

async function PropertiesList({
  searchParams,
}: {
  searchParams: PropertiesPageProps["searchParams"];
}) {
  const params = await searchParams;
  const priceRange = params.price ? PRICE_RANGE_MAP[params.price] : undefined;

  // Transform search params to DB filters
  const { items: properties } = await getProperties({
    city: params.city === "All" ? undefined : params.city,
    configuration: params.config === "All" ? undefined : params.config,
    minPrice: priceRange?.min,
    maxPrice: priceRange?.max,
    status: params.status === "All" ? undefined : params.status || "Available",
    facing: params.facing === "All" ? undefined : params.facing,
    sort: params.sort as "relevance" | "price_asc" | "price_desc" | "recent",
    limit: 50,
  });

  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="rounded-full bg-honeydew p-8 mb-6">
          <Badge
            variant="outline"
            className="text-indigo-velvet border-indigo-velvet/20 font-bold uppercase tracking-widest text-[10px]"
          >
            Portfolio Check
          </Badge>
        </div>
        <h3 className="text-3xl font-bold text-dark-amethyst">
          No Assets Found
        </h3>
        <p className="mt-2 text-dark-amethyst/50 max-w-md mx-auto">
          We are currently updating our portfolio with exclusive new listings in
          Noida & Greater Noida matching these specific criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

import { ActiveFilters } from "@/components/property/active-filters";

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;
  const priceRange = params.price ? PRICE_RANGE_MAP[params.price] : undefined;

  // Re-fetch for header stats (Server Component)
  const { total } = await getProperties({
    city: params.city === "All" ? undefined : params.city,
    configuration: params.config === "All" ? undefined : params.config,
    minPrice: priceRange?.min,
    maxPrice: priceRange?.max,
    status: params.status === "All" ? undefined : params.status || "Available",
    facing: params.facing === "All" ? undefined : params.facing,
    limit: 1,
  });

  const dynamicTitle = `${total} - ${params.config && params.config !== "All" ? params.config : ""} ${params.city && params.city !== "All" ? `Properties in ${params.city}` : "Premium Properties"}`;

  return (
    <div className="min-h-screen bg-[#F4F4F4]/50">
      {/* Search & Breadcrumb Bar */}
      <div className="bg-white border-b border-dust-grey/10 pt-28 pb-4">
        <div className="container">
          <div className="flex flex-wrap items-center gap-4">
            <ActiveFilters />
            <div className="h-8 w-px bg-dust-grey/10 mx-2 hidden md:block" />
            <button className="bg-indigo-velvet text-white px-8 py-2 rounded-md text-[11px] font-bold shadow-lg shadow-indigo-velvet/20">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* Main Experience Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10">
            <div>
              <h1 className="text-xl font-bold text-dark-amethyst tracking-tight">
                {dynamicTitle}
              </h1>
              <div className="flex items-center gap-2 mt-2 text-[11px] font-medium text-dark-amethyst/40 uppercase tracking-widest">
                <span>Home / {params.city || "All"} / Results</span>
              </div>
            </div>
            <SortDropdown />
          </div>

          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
            {/* Sidebar Filters - 25% Width */}
            <aside className="lg:w-[320px] shrink-0 mb-10 lg:mb-0">
              <FilterSidebar />
            </aside>

            {/* Content List - 75% Width */}
            <main className="flex-1">
              <Suspense fallback={<PropertyLoader />}>
                <PropertiesList searchParams={searchParams} />
              </Suspense>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
