"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export function ActiveFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = searchParams
    ? new URLSearchParams(searchParams.toString())
    : new URLSearchParams();
  const activeFilters: { key: string; value: string; label: string }[] = [];

  // Define which params we want to show as chips
  const filterKeys = ["city", "config", "price", "area", "status", "facing"];

  filterKeys.forEach((key) => {
    const value = params.get(key);
    if (value && value !== "All") {
      activeFilters.push({
        key,
        value,
        label: value,
      });
    }
  });

  const removeFilter = (key: string) => {
    params.delete(key);
    router.push(`/properties?${params.toString()}`);
  };

  if (activeFilters.length === 0) {
    return (
      <div className="flex items-center gap-2">
        <Badge className="bg-honeydew text-dark-amethyst/40 border-dust-grey/10 px-3 py-1.5 rounded-md text-[11px] font-bold shadow-none">
          All Locations
        </Badge>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {activeFilters.map((filter) => (
        <Badge
          key={`${filter.key}-${filter.value}`}
          className="bg-indigo-velvet/5 text-indigo-velvet border-indigo-velvet/10 px-3 py-1.5 rounded-md flex items-center gap-2 text-[11px] font-bold transition-all hover:bg-indigo-velvet/10"
        >
          {filter.label}
          <button
            onClick={() => removeFilter(filter.key)}
            className="hover:text-dark-amethyst transition-colors"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
    </div>
  );
}
