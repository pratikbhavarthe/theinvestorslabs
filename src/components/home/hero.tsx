"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle
            cx="300"
            cy="100"
            r="150"
            fill="currentColor"
            className="text-primary-300"
          />
          <circle
            cx="350"
            cy="250"
            r="100"
            fill="currentColor"
            className="text-secondary-300"
          />
        </svg>
      </div>

      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-6 leading-tight">
              Find Houses, Apartments and Flats in{" "}
              <span className="text-primary-600">Noida & Gurgaon</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              Verified Properties for Verified Tenants
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Location
                  </label>
                  <select
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value as "Noida" | "Gurgaon" | "")
                    }
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
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
                    className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
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
                  <div className="text-2xl font-bold text-primary-600">
                    50k+
                  </div>
                  <div className="text-sm text-neutral-600">
                    Satisfied Renters
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-secondary-600"
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
                  <div className="text-2xl font-bold text-secondary-600">
                    10k+
                  </div>
                  <div className="text-sm text-neutral-600">Apartments</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              <svg viewBox="0 0 500 400" className="w-full h-auto">
                {/* House illustration */}
                <rect
                  x="150"
                  y="150"
                  width="200"
                  height="200"
                  fill="#3b82f6"
                  opacity="0.1"
                  rx="8"
                />
                <rect
                  x="170"
                  y="170"
                  width="160"
                  height="160"
                  fill="#3b82f6"
                  opacity="0.2"
                  rx="8"
                />
                <path
                  d="M250 120 L350 180 L350 330 L150 330 L150 180 Z"
                  fill="#2563eb"
                  opacity="0.3"
                />

                {/* People illustration */}
                <circle cx="200" cy="280" r="20" fill="#f59e0b" />
                <rect
                  x="185"
                  y="300"
                  width="30"
                  height="50"
                  fill="#f59e0b"
                  rx="4"
                />

                <circle cx="250" cy="280" r="20" fill="#10b981" />
                <rect
                  x="235"
                  y="300"
                  width="30"
                  height="50"
                  fill="#10b981"
                  rx="4"
                />

                <circle cx="300" cy="280" r="20" fill="#3b82f6" />
                <rect
                  x="285"
                  y="300"
                  width="30"
                  height="50"
                  fill="#3b82f6"
                  rx="4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
