"use client";

import { useState } from "react";
import Image from "next/image";
import { Navigation2, MapPin, ShieldCheck } from "lucide-react";
import { Property } from "@/types/property";

interface LocalityHighlightsProps {
  property: Property;
}

export function LocalityHighlights({ property }: LocalityHighlightsProps) {
  const [activeCategory, setActiveCategory] = useState(
    property.proximity?.[0]?.id || "",
  );

  if (!property.proximity || property.proximity.length === 0) return null;

  const currentProximity = property.proximity.find(
    (p) => p.id === activeCategory,
  );

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-dark-amethyst/10 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <h3 className="text-3xl font-bold text-dark-amethyst">
          Locality & Map
        </h3>
      </div>

      {/* Categories Selector */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-honeydew rounded-2xl w-full md:w-fit border border-dark-amethyst/10">
        {property.proximity.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-3 ${
              activeCategory === cat.id
                ? "bg-dark-amethyst text-white shadow-sm"
                : "text-dark-amethyst/60 hover:text-dark-amethyst"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Proximity Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {currentProximity?.items.map((item) => (
          <div
            key={item.name}
            className="p-5 rounded-2xl border border-dark-amethyst/10 bg-white hover:shadow-soft transition-all"
          >
            <div className="text-sm font-bold text-dark-amethyst leading-tight mb-2 h-10 overflow-hidden line-clamp-2">
              {item.name}
            </div>
            <div className="text-dark-amethyst/60 text-xs font-bold uppercase tracking-widest">
              {item.distance}
            </div>
          </div>
        ))}
      </div>

      {/* Map Placeholder/Frame */}
      <div className="relative aspect-video md:aspect-[2.5/1] w-full rounded-3xl overflow-hidden border border-dark-amethyst/10 shadow-inner group text-left">
        <div className="absolute inset-0 bg-dark-amethyst/5 flex items-center justify-center">
          {/* Custom Marker Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-velvet/20 rounded-full scale-[3] animate-pulse" />
            <div className="w-12 h-12 bg-indigo-velvet rounded-full flex items-center justify-center text-white shadow-xl relative z-10">
              <MapPin className="w-6 h-6" />
            </div>
            {/* Info Window Mockup */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl p-4 shadow-2xl border border-dark-amethyst/10 animate-fade-in text-left">
              <div className="aspect-video w-full rounded-lg overflow-hidden relative mb-3">
                <Image
                  src={property.images[0]}
                  fill
                  className="object-cover"
                  alt="Property"
                />
              </div>
              <div className="text-xs font-bold text-dark-amethyst">
                {property.title}
              </div>
              <div className="text-[10px] text-dark-amethyst/60 mt-1 line-clamp-1">
                {property.address}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Ratings Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-dark-amethyst/10">
        <div className="flex items-center justify-between p-6 bg-indigo-velvet/5 rounded-2xl border border-indigo-velvet/10">
          <div className="flex items-center gap-4">
            <Navigation2 className="w-8 h-8 text-indigo-velvet" />
            <span className="font-bold text-sm text-dark-amethyst tracking-tight">
              Connectivity Score
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xl font-bold text-indigo-velvet">7.5</span>
            <span className="text-[10px] font-bold text-indigo-velvet/60 uppercase tracking-widest">
              High Accessibility
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 bg-indigo-velvet/5 rounded-2xl border border-indigo-velvet/10">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-indigo-velvet" />
            <span className="font-bold text-sm text-dark-amethyst tracking-tight">
              Local Vibe Score
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xl font-bold text-indigo-velvet">9.2</span>
            <span className="text-[10px] font-bold text-indigo-velvet/60 uppercase tracking-widest">
              Premium Area
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
