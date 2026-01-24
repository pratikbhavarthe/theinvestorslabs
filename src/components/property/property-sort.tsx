"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PropertySort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "relevance";

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "relevance") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="flex items-center">
      <Select value={currentSort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-auto h-10 px-5 rounded-full text-sm font-bold text-ink-navy bg-white hover:bg-off-white border-cool-gray shadow-none focus:ring-1 focus:ring-realty-blue transition-all gap-2">
          <span className="mr-1">Sort</span>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white border-cool-gray z-[100] shadow-xl rounded-xl">
          <SelectItem
            value="relevance"
            className="cursor-pointer font-medium py-2.5 text-ink-navy focus:bg-skyline-blue focus:text-realty-blue transition-colors"
          >
            Relevance
          </SelectItem>
          <SelectItem
            value="price_asc"
            className="cursor-pointer font-medium py-2.5 text-ink-navy focus:bg-skyline-blue focus:text-realty-blue transition-colors"
          >
            Price: Low to High
          </SelectItem>
          <SelectItem
            value="price_desc"
            className="cursor-pointer font-medium py-2.5 text-ink-navy focus:bg-skyline-blue focus:text-realty-blue transition-colors"
          >
            Price: High to Low
          </SelectItem>
          <SelectItem
            value="recent"
            className="cursor-pointer font-medium py-2.5 text-ink-navy focus:bg-skyline-blue focus:text-realty-blue transition-colors"
          >
            Newest
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
