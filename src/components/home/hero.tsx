"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Find Your Dream Property in{" "}
            <span className="text-accent-400">Noida & Gurgaon</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Discover premium residential and commercial properties. Expert
            guidance, trusted listings, and seamless transactions.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <select
                value={city}
                onChange={(e) =>
                  setCity(e.target.value as "Noida" | "Gurgaon" | "")
                }
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Cities</option>
                <option value="Noida">Noida</option>
                <option value="Gurgaon">Gurgaon</option>
              </select>

              <Button
                onClick={handleSearch}
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Search Properties
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-400">
                500+
              </div>
              <div className="text-sm md:text-base text-primary-200 mt-1">
                Properties
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-400">
                1000+
              </div>
              <div className="text-sm md:text-base text-primary-200 mt-1">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent-400">
                15+
              </div>
              <div className="text-sm md:text-base text-primary-200 mt-1">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
