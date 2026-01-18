"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

type SearchType = "buy" | "sell" | "rent";

const CITIES = ["Noida", "Greater Noida"];

export function PropertySearchBar() {
  const [activeType, setActiveType] = useState<SearchType>("buy");
  const [selectedCity, setSelectedCity] = useState<string>("City");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    // Build search params
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedCity !== "City") params.set("city", selectedCity);
    params.set("type", activeType);

    // Navigate to properties page with search params
    router.push(`/properties?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tab Switcher */}
      <div className="flex items-center gap-1 mb-6">
        {(["buy", "sell", "rent"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-t-xl ${
              activeType === type
                ? "bg-white text-indigo-velvet border-b-2 border-indigo-velvet"
                : "bg-transparent text-dark-amethyst/60 hover:text-indigo-velvet"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Location Dropdown */}
          <div className="md:col-span-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-dark-amethyst/60 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-amethyst/40" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-dust-grey rounded-xl text-dark-amethyst font-medium focus:outline-none focus:border-indigo-velvet transition-colors duration-200 bg-white cursor-pointer"
              >
                <option value="City">City</option>
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Input */}
          <div className="md:col-span-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-dark-amethyst/60 mb-2">
              Search
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search by location, society, city..."
              className="w-full px-4 py-3 border-2 border-dust-grey rounded-xl text-dark-amethyst font-medium placeholder:text-dark-amethyst/40 focus:outline-none focus:border-indigo-velvet transition-colors duration-200"
            />
          </div>

          {/* Search Button */}
          <div className="md:col-span-3 flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-indigo-velvet hover:bg-dark-amethyst text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
