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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
    <div className="min-h-screen bg-white">
      {/* 1. New Hero Section */}
      <section className="relative bg-indigo-velvet pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-dark-amethyst/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-indigo-velvet/90" />
          {/* Abstract Pattern */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Discover Your <br />
            <span className="text-honeydew">Private Canvas.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl font-light leading-relaxed mb-8">
            Curated real estate opportunities in Noida & Greater Noida. Where
            architectural brilliance meets investment precision.
          </p>

          {/* Stats/Tags */}
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-white/10 hover:bg-white/20 text-white border-white/10 px-4 py-2 font-medium">
              {total} Properties Listed
            </Badge>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-honeydew" />
              Verified Listings
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Filter & Grid Section */}
      <section className="py-12 bg-honeydew/20">
        <div className="container">
          {/* Controls Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 border-b border-dark-amethyst/5 pb-8">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-dark-amethyst/40 mb-2">
                <span>Home</span>
                <span>/</span>
                <span>{params.city || "All"}</span>
                <span>/</span>
                <span className="text-indigo-velvet">Results</span>
              </div>
              <h2 className="text-2xl font-bold text-dark-amethyst">
                {params.city && params.city !== "All" ? params.city : "All"}{" "}
                Collections
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <ActiveFilters />
              <SortDropdown />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
            {/* Sidebar Filters - Sticky */}
            <aside className="lg:w-[280px] shrink-0">
              <div className="sticky top-28">
                <FilterSidebar />
              </div>
            </aside>

            {/* Content Grid */}
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
