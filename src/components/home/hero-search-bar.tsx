"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

type SearchType = "buy" | "sell" | "rent";

const CITIES = ["Noida", "Greater Noida"];

export function HeroSearchBar() {
  const [activeType, setActiveType] = useState<SearchType>("buy");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedCity) params.set("city", selectedCity);
    params.set("type", activeType);
    router.push(`/properties?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-4xl">
      {/* Minimal Tab Pills - Responsive */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {(["buy", "sell", "rent"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
              activeType === type
                ? "bg-indigo-velvet text-white"
                : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/90 backdrop-blur-sm"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Sleek Search Bar - Glass Morphism - Responsive */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-4 p-4">
          {/* Location Selector */}
          <div className="flex items-center gap-2 px-4 py-3 border-r border-dust-grey/30 min-w-[140px]">
            <MapPin className="w-5 h-5 text-indigo-velvet shrink-0" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-transparent text-dark-amethyst font-medium text-sm focus:outline-none cursor-pointer w-full"
            >
              <option value="">All Cities</option>
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search by location, society, city..."
            className="flex-1 bg-transparent text-dark-amethyst font-medium placeholder:text-dark-amethyst/40 focus:outline-none text-sm px-2"
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-indigo-velvet hover:bg-dark-amethyst text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 flex items-center gap-2 uppercase tracking-wider text-xs shrink-0"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden p-4 space-y-3">
          {/* Location Selector */}
          <div className="flex items-center gap-2 px-4 py-3 border border-dust-grey/30 rounded-xl">
            <MapPin className="w-5 h-5 text-indigo-velvet shrink-0" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-transparent text-dark-amethyst font-medium text-sm focus:outline-none cursor-pointer w-full"
            >
              <option value="">All Cities</option>
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search by location, society..."
            className="w-full px-4 py-3 border border-dust-grey/30 rounded-xl bg-transparent text-dark-amethyst font-medium placeholder:text-dark-amethyst/40 focus:outline-none text-sm"
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="w-full bg-indigo-velvet hover:bg-dark-amethyst text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wider text-xs"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
