"use client";

import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  RefreshCcw,
  MapPin,
  Home,
  IndianRupee,
  Maximize,
  Activity,
  Compass,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Filter States
  const params = searchParams
    ? new URLSearchParams(searchParams.toString())
    : new URLSearchParams();
  const city = params.get("city") || "All";
  const config = params.get("config") || "All";
  const priceRange = params.get("price") || "All";
  const areaRange = params.get("area") || "All";
  const status = params.get("status") || "All";
  const facing = params.get("facing") || "All";

  const updateFilters = (updates: Record<string, string>) => {
    const currentParams = searchParams
      ? new URLSearchParams(searchParams.toString())
      : new URLSearchParams();

    Object.entries(updates).forEach(([key, value]) => {
      if (value === "All") {
        currentParams.delete(key);
      } else {
        currentParams.set(key, value);
      }
    });

    startTransition(() => {
      router.push(`/properties?${currentParams.toString()}`);
    });
  };

  const clearFilters = () => {
    router.push("/properties");
  };

  const activeFilterCount = [
    city,
    config,
    priceRange,
    areaRange,
    status,
    facing,
  ].filter((v) => v !== "All").length;

  return (
    <div
      className={`w-full bg-indigo-velvet border border-white/10 rounded-2xl p-6 sticky top-32 transition-opacity duration-300 ${isPending ? "opacity-50 pointer-events-none" : "opacity-100"}`}
    >
      {/* Sidebar Tabs */}
      {/* Sidebar Tabs */}
      <div className="flex items-center gap-1 border-b border-white/10 mb-8 pb-1">
        <button className="flex-1 py-3 text-[10px] font-bold uppercase tracking-widest text-white border-b-2 border-white">
          Filters{" "}
          <span className="ml-1 text-[8px] bg-white text-indigo-velvet px-1.5 py-0.5 rounded-full">
            {activeFilterCount}
          </span>
        </button>
        <button className="flex-1 py-3 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
          Premium{" "}
          <Badge className="ml-1 bg-white/10 text-white border-none text-[8px] px-1 py-0 shadow-none">
            New
          </Badge>
        </button>
      </div>

      <div className="space-y-10 max-h-[calc(100vh-320px)] overflow-y-auto pr-2 scrollbar-hide">
        {/* BHK Type Grid */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
            BHK Type
          </p>
          <div className="grid grid-cols-3 gap-2">
            {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"].map(
              (val) => (
                <button
                  key={val}
                  onClick={() => updateFilters({ config: val })}
                  className={`py-2 px-1 rounded-md text-[10px] font-bold border transition-all ${
                    config === val
                      ? "bg-white text-indigo-velvet border-white"
                      : "bg-transparent text-white/60 border-white/20 hover:border-white/40"
                  }`}
                >
                  {val}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Price Slider Shorthand */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
              Price Range
            </p>
            <p className="text-[10px] font-bold text-white">₹0 to ₹5 Cr</p>
          </div>
          <div className="relative h-1 w-full bg-white/10 rounded-full">
            <div className="absolute top-0 left-0 w-3/4 h-full bg-white rounded-full" />
            <div className="absolute -top-1.5 left-0 h-4 w-4 bg-indigo-velvet border-2 border-white rounded-full shadow-md" />
            <div className="absolute -top-1.5 left-3/4 h-4 w-4 bg-indigo-velvet border-2 border-white rounded-full shadow-md" />
          </div>
        </div>

        {/* Visit Availability Checkboxes */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
            Availability
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Immediate",
              "Within 15 Days",
              "Within 30 Days",
              "After 30 Days",
            ].map((val) => (
              <label
                key={val}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="availability"
                  className="accent-white h-3.5 w-3.5"
                />
                <span className="text-[11px] font-medium text-white/60 group-hover:text-white">
                  {val}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Preferred Tenants */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
            Preferred Tenants
          </p>
          <div className="grid grid-cols-2 gap-4">
            {["Family", "Company", "Bachelor Male", "Bachelor Female"].map(
              (val) => (
                <label
                  key={val}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="h-4 w-4 border border-white/30 rounded focus-within:border-white">
                    <input
                      type="checkbox"
                      className="opacity-0 absolute h-0 w-0"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-white/60 group-hover:text-white">
                    {val}
                  </span>
                </label>
              ),
            )}
          </div>
        </div>

        {/* Property Type */}
        <div className="space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">
            Property Type
          </p>
          <div className="space-y-3">
            {[
              "Apartment",
              "Independent House/Villa",
              "Gated Community Villa",
            ].map((val) => (
              <label
                key={val}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="h-4 w-4 border border-white/30 rounded focus-within:border-white">
                  <input
                    type="checkbox"
                    className="opacity-0 absolute h-0 w-0"
                  />
                </div>
                <span className="text-[11px] font-medium text-white/60 group-hover:text-white">
                  {val}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Reset Footer */}
      <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 text-[10px] font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest"
        >
          <RefreshCcw className="h-3 w-3" />
          Reset All
        </button>
      </div>
    </div>
  );
}

function FilterSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2.5 text-dark-amethyst/40">
        <div className="p-1.5 bg-honeydew rounded-lg shadow-sm">{icon}</div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams?.get("sort") || "relevance";

  const sortOptions = [
    { label: "NoBroker Rank", value: "relevance" },
    { label: "Price - Low to High", value: "price_asc" },
    { label: "Price - High to Low", value: "price_desc" },
    { label: "Newest Arrivals", value: "recent" },
  ];

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("sort", value);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="relative inline-flex items-center gap-4">
      <span className="text-[10px] font-bold text-dark-amethyst/40 uppercase tracking-[0.25em]">
        Sort By
      </span>
      <div className="relative">
        <select
          value={currentSort}
          onChange={(e) => handleSort(e.target.value)}
          className="bg-white border border-dust-grey/20 rounded-xl px-4 py-2 text-[11px] font-bold text-dark-amethyst focus:outline-none focus:ring-4 focus:ring-indigo-velvet/5 cursor-pointer appearance-none min-w-[180px] shadow-sm hover:border-indigo-velvet/30 transition-all"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3 w-3 text-indigo-velvet pointer-events-none" />
      </div>
    </div>
  );
}
