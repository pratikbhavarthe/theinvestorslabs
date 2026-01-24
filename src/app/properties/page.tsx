import { Suspense } from "react";
import { getProperties } from "@/lib/db/queries";
import { PropertyCardHorizontal } from "@/components/property/property-card-horizontal";
import { PropertyLoader } from "@/components/ui/property-loader";
import { Badge } from "@/components/ui/badge";
import { PropertySearchBar } from "@/components/property/property-search-bar";
import { PropertiesFilterBar } from "@/components/property/property-filter-toolbar";
import { PropertySort } from "@/components/property/property-sort";
import { SaveSearchButton } from "@/components/property/save-search-button";
import { MoreFiltersModal } from "@/components/property/more-filters-modal";
import { Button } from "@/components/ui/button";
import { Plus, ShieldCheck } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Properties for Sale/Rent in Noida | The Investor Labs",
  description:
    "Find apartments, flats, villas, and commercial properties in Noida & Greater Noida.",
};

interface PropertiesPageProps {
  searchParams: Promise<{
    city?: string;
    config?: string;
    budget?: string;
    type?: string;
    status?: string;
    mode?: string;
    search?: string;
    sort?: string;
    limit?: string;
  }>;
}

const BUDGET_MAP: Record<string, { min: number; max: number }> = {
  "< 50 Lac": { min: 0, max: 5000000 },
  "50L - 1 Cr": { min: 5000000, max: 10000000 },
  "1 Cr - 2 Cr": { min: 10000000, max: 20000000 },
  "2 Cr - 5 Cr": { min: 20000000, max: 50000000 },
  "> 5 Cr": { min: 50000000, max: 1000000000 },
};

async function PropertiesList({
  searchParams,
}: {
  searchParams: PropertiesPageProps["searchParams"];
}) {
  const params = await searchParams;
  const priceRange = params.budget ? BUDGET_MAP[params.budget] : undefined;

  const { items: properties, total } = await getProperties({
    city: params.city && params.city !== "All" ? params.city : undefined,
    configuration: params.config,
    propertyType: params.type,
    minPrice: priceRange?.min,
    maxPrice: priceRange?.max,
    listingType: params.mode === "rent" ? "Rent" : "Sale",
    search: params.search,
    sort: params.sort as "relevance" | "price_asc" | "price_desc" | "recent",
    limit: 50,
  });

  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-xl border border-cool-gray border-dashed">
        <div className="rounded-full bg-skyline-blue p-6 mb-4">
          <Badge
            variant="outline"
            className="text-realty-blue border-realty-blue/30 font-bold uppercase tracking-widest text-[10px]"
          >
            No Matches
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-ink-navy">No properties found</h3>
        <p className="mt-2 text-slate-gray">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Stronger Results Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-cool-gray">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-deep-estate tracking-tight">
            {params.city || "Properties"}{" "}
            <span className="text-slate-gray font-light text-xl">
              | {total} Results
            </span>
          </h1>
          <p className="text-sm text-slate-gray mt-1 font-medium">
            {params.mode === "rent" ? "Rentals" : "For Sale"} in{" "}
            {params.city || "All Cities"}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {properties.map((property) => (
          <PropertyCardHorizontal key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  return (
    <div className="min-h-screen bg-off-white">
      {/* 1. Unified Sticky Header (Search + Filters) */}
      {/* 1. Unified Sticky Header (Search + Filters + Sort) */}
      <div className="sticky top-0 z-50 bg-white border-b border-cool-gray transition-all md:py-4 py-3">
        <div className="container flex flex-col gap-3">
          {/* Desktop: Single Row | Mobile: Stacked */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6">
            {/* Left: Search Bar */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <PropertySearchBar />
            </div>

            {/* Right: Filters & Sort (Scrollable on Mobile) */}
            <div className="flex-1 flex items-center md:justify-end gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0 px-1">
              <PropertiesFilterBar />
              <MoreFiltersModal />
              <div className="h-6 w-px bg-cool-gray mx-2 shrink-0 hidden md:block" />
              <SaveSearchButton />
              <Suspense
                fallback={
                  <div className="w-[100px] h-10 bg-cool-gray/20 rounded-full animate-pulse" />
                }
              >
                <PropertySort />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main List */}
          <main className="w-full lg:w-[70%]">
            <Suspense fallback={<PropertyLoader />}>
              <PropertiesList searchParams={searchParams} />
            </Suspense>
          </main>

          {/* Sidebar (Sticky) */}
          <aside className="w-full lg:w-[30%] flex flex-col gap-6 sticky top-48">
            {/* CTA Card: Post Property - BRAND COLOR */}
            <div className="bg-white border border-cool-gray rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-skyline-blue rounded-full text-realty-blue">
                  <Plus className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-deep-estate mb-1">
                    Own a Property?
                  </h3>
                  <p className="text-sm text-slate-gray mb-4 leading-relaxed">
                    List it on The Investor Labs and reach verified buyers.
                  </p>
                  <Button className="w-full bg-realty-blue hover:bg-[#1749C9] text-white font-bold rounded-lg h-10 shadow-lg shadow-realty-blue/20">
                    Post Property Free
                  </Button>
                </div>
              </div>
            </div>

            {/* Top Agents */}
            <div className="bg-white border border-cool-gray rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-deep-estate">
                  Premier Agents
                </h3>
                <span className="text-xs font-bold text-realty-blue cursor-pointer hover:underline">
                  View All
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-b border-cool-gray/50 last:border-0 pb-3 last:pb-0"
                  >
                    <div className="w-10 h-10 rounded-full bg-skyline-blue flex items-center justify-center font-bold text-realty-blue text-sm border border-realty-blue/10">
                      SR
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink-navy">
                        Skyline Realtors
                      </h4>
                      <div className="flex items-center gap-1 text-[10px] text-slate-gray font-medium">
                        <ShieldCheck className="h-3 w-3 text-realty-blue" />
                        Verified Partner
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
