"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function PropertySearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State
  // State with lazy initialization
  const [mounted, setMounted] = useState(false);

  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof window === "undefined") return "Sale";
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");
    const type = params.get("type");
    const status = params.get("status");

    if (type === "Commercial") return "Commercial";
    if (type === "Plot") return "Plots";
    if (status === "Coming Soon") return "New Projects";
    if (mode === "rent") return "Rent";
    return "Sale";
  });

  const [city, setCity] = useState(() => {
    if (typeof window === "undefined") return "Noida";
    return new URLSearchParams(window.location.search).get("city") || "Noida";
  });

  const [search, setSearch] = useState(() => {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get("search") || "";
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync state with URL params on navigation only if they differ
  useEffect(() => {
    if (!mounted) return;

    const mode = searchParams.get("mode");
    const type = searchParams.get("type");
    const status = searchParams.get("status");

    let newTab = "Sale";
    if (type === "Commercial") newTab = "Commercial";
    else if (type === "Plot") newTab = "Plots";
    else if (status === "Coming Soon") newTab = "New Projects";
    else if (mode === "rent") newTab = "Rent";

    if (activeTab !== newTab) setActiveTab(newTab);

    const cityParam = searchParams.get("city");
    const searchParam = searchParams.get("search");

    if (cityParam && city !== cityParam) setCity(cityParam);
    if (searchParam && search !== searchParam) setSearch(searchParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, mounted]);

  if (!mounted) {
    return (
      <div className="flex flex-col w-full max-w-5xl mx-auto z-20 relative animate-pulse">
        <div className="bg-skyline-blue rounded-full p-2 h-16 w-full opacity-50"></div>
      </div>
    );
  }

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeTab !== "Sale" && activeTab !== "Rent") {
      params.delete("type");
      params.delete("status");
    }
    params.delete("mode");

    switch (activeTab) {
      case "Rent":
        params.set("mode", "rent");
        break;
      case "Sale":
        params.set("mode", "sale");
        break;
      case "New Projects":
        params.set("status", "Coming Soon");
        break;
      case "Commercial":
        params.set("type", "Commercial");
        break;
      case "Plots":
        params.set("type", "Plot");
        break;
    }

    if (city && city !== "All") params.set("city", city);
    else params.delete("city");

    if (search) params.set("search", search);
    else params.delete("search");

    router.push(`/properties?${params.toString()}`);
  };

  // Tabs configuration removed as UI doesn't use it yet (prevents lint error)

  return (
    <div className="flex flex-col w-full md:w-auto relative font-sans z-20">
      {/* Search Capsule */}
      <div className="bg-white p-1.5 rounded-2xl md:rounded-full border border-cool-gray/40 flex flex-col md:flex-row gap-2 md:gap-0 transition-all duration-300 w-full md:min-w-[450px]">
        {/* City Dropdown */}
        <div className="relative flex items-center w-full md:w-[150px] h-10 md:h-12 bg-transparent px-4 md:border-r border-cool-gray/30 group">
          <div className="flex flex-col w-full justify-center">
            <div className="flex items-center">
              <span className="text-ink-navy font-bold text-sm md:text-base whitespace-nowrap">
                {city}
              </span>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="absolute inset-0 opacity-0 cursor-pointer w-full h-full">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-cool-gray shadow-xl bg-white z-[100]">
                  <SelectItem value="Noida">Noida</SelectItem>
                  <SelectItem value="Greater Noida">Greater Noida</SelectItem>
                </SelectContent>
              </Select>
              <ChevronDown className="h-4 w-4 text-slate-gray ml-2" />
            </div>
            <span className="text-[10px] text-slate-gray font-medium hidden md:block">
              City
            </span>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex-1 flex items-center w-full h-10 md:h-12 bg-transparent px-4">
          <div className="flex flex-col w-full justify-center">
            <div className="flex items-center w-full">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Sector, Project..."
                className="w-full border-none outline-none text-sm md:text-base font-medium placeholder:text-slate-gray/60 bg-transparent p-0 text-ink-navy"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <div
                onClick={handleSearch}
                className="cursor-pointer p-2 bg-transparent md:bg-transparent rounded-full md:rounded-none"
              >
                <Search className="h-5 w-5 text-realty-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
