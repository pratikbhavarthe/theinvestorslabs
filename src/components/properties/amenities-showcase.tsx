"use client";

import { Property } from "@/types/property";

interface AmenitiesShowcaseProps {
  property: Property;
}

export function AmenitiesShowcase({ property }: AmenitiesShowcaseProps) {
  return (
    <div className="space-y-16">
      {/* Essential Facilities */}
      <div className="bg-white rounded-3xl p-8 shadow-card border border-dark-amethyst/10 space-y-8">
        <h3 className="text-2xl font-bold text-dark-amethyst">
          Essential Facilities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {property.facilities.map((f) => (
            <div
              key={f.id}
              className="p-6 rounded-2xl bg-indigo-velvet/5 flex items-center gap-5 group hover:bg-indigo-velvet/10 transition-colors border border-transparent hover:border-dark-amethyst/10"
            >
              <div className="w-10 h-10 rounded-xl bg-white text-indigo-velvet flex items-center justify-center shrink-0 shadow-soft group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-xs font-bold text-dark-amethyst uppercase tracking-widest">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      {property.amenities && (
        <div className="bg-white rounded-3xl p-8 shadow-card border border-dark-amethyst/10 space-y-8">
          <h3 className="text-2xl font-bold text-dark-amethyst">Amenities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {property.amenities.map((a) => (
              <div
                key={a.id}
                className="p-6 rounded-2xl bg-indigo-velvet/5 flex items-center gap-5 group hover:bg-indigo-velvet/10 transition-colors border border-transparent hover:border-dark-amethyst/10"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-indigo-velvet flex items-center justify-center shrink-0 shadow-soft group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-xs font-bold text-dark-amethyst uppercase tracking-widest">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
