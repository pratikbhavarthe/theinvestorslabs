"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Hero() {
  const router = useRouter();
  const [city, setCity] = useState<"Noida" | "Gurgaon" | "">("");

  const handleSearch = () => {
    if (city) {
      router.push(`/properties?city=${city}`);
    } else {
      router.push("/properties");
    }
  };

  return (
    <section className="relative bg-[#0f172a] overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Real estate background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/60" />
      </div>

      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Headline - H1: 40-48px, weight 700 */}
            <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-white mb-6 leading-[1.2]">
              Find Houses, Apartments and Flats in{" "}
              <span className="text-[#C9A227]">Noida & Gurgaon</span>
            </h1>

            {/* Subheadline - Body text: 15-16px */}
            <p className="text-[1rem] text-white/90 mb-8 leading-[1.6]">
              Verified Properties for Verified Tenants
            </p>

            {/* Search Bar - Card with proper padding */}
            <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block text-[0.875rem] font-medium text-[#6B7280] mb-2">
                    Location
                  </label>
                  <select
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value as "Noida" | "Gurgaon" | "")
                    }
                    className="w-full h-11 px-4 rounded-lg border border-[#E5E7EB] text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#0f172a] bg-white text-[15px]"
                  >
                    <option value="">Select City</option>
                    <option value="Noida">Noida</option>
                    <option value="Gurgaon">Gurgaon</option>
                  </select>
                </div>

                <div className="sm:self-end">
                  <Button
                    onClick={handleSearch}
                    size="lg"
                    className="w-full sm:w-auto bg-[#0f172a] hover:bg-[#1e293b] text-white h-12 px-8 rounded-xl font-semibold transition-colors text-[15px]"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats - Using Emerald Green for success indicators */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#047857]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#047857]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50k+</div>
                  <div className="text-[0.875rem] text-white/70">
                    Satisfied Renters
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#047857]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#047857]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10k+</div>
                  <div className="text-[0.875rem] text-white/70">
                    Apartments
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - empty for background image visibility */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
