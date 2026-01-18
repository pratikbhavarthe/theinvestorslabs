"use client";

import { MapPin, Phone, Share2, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Property } from "@/types/property";

interface UnitDetailsCardProps {
  property: Property;
}

export function UnitDetailsCard({ property }: UnitDetailsCardProps) {
  const specs = [
    {
      label: "Unit ID",
      value: property.specs.unitNumber,
      icon: (
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
            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
          />
        </svg>
      ),
    },
    {
      label: "Bedroom",
      value: property.specs.beds,
      icon: (
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      label: "Bathroom",
      value: property.specs.baths,
      icon: (
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
      ),
    },
    {
      label: "Floor",
      value: property.specs.floor,
      icon: (
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"
          />
        </svg>
      ),
    },
  ];

  const scores = [
    {
      label: "Lifestyle",
      score: property.scores.lifestyle,
      icon: <span className="text-[10px]">✨</span>,
      color: "text-indigo-velvet",
    },
    {
      label: "Connectivity",
      score: property.scores.connectivity,
      icon: <span className="text-[10px]">🚗</span>,
      color: "text-indigo-velvet",
    },
    {
      label: "Value",
      score: property.scores.value,
      icon: <span className="text-[10px]">💰</span>,
      color: "text-indigo-velvet",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 md:p-10 border border-dark-amethyst/5 shadow-sm space-y-10 group/card transition-all hover:shadow-md hover:-translate-y-0.5 duration-300">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-semibold text-dark-amethyst tracking-tight">
            {property.title}
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-1.5 text-dark-amethyst/60 text-sm">
            <MapPin className="w-4 h-4 shrink-0 opacity-70" />
            <span className="font-medium">{property.address}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Badge className="bg-honeydew text-dark-amethyst/80 font-bold uppercase tracking-widest text-[9px] px-3 py-1 rounded-full border-dark-amethyst/10 shadow-sm animate-fade-in">
            New Listing
          </Badge>
          <Badge className="bg-indigo-velvet/10 text-indigo-velvet font-bold uppercase tracking-widest text-[9px] px-3 py-1 rounded-full border-indigo-velvet/20 shadow-sm">
            Verified
          </Badge>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start gap-4 py-8 border-y border-dark-amethyst/5">
        <div className="text-3xl md:text-5xl font-bold text-dark-amethyst tracking-tight">
          ₹ {property.pricePrefix || property.price}
        </div>
        <div className="flex items-center gap-3 text-dark-amethyst/60 text-sm font-medium">
          <span>{property.type || property.config}</span>
          <span className="w-1 h-1 rounded-full bg-dark-amethyst/20" />
          <span>{property.size || property.area}</span>
          <span className="w-1 h-1 rounded-full bg-dark-amethyst/20" />
          <span>Ready to Move</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {specs.map((spec, i) => (
          <div
            key={i}
            className="bg-honeydew/30 rounded-2xl p-6 flex flex-col items-center md:items-start gap-4 ring-1 ring-dark-amethyst/5 group/icon hover:ring-dark-amethyst/10 transition-all"
          >
            <div className="flex items-center gap-2 text-dark-amethyst/60 opacity-70 group-hover/icon:opacity-100 transition-opacity">
              <div className="shrink-0">{spec.icon}</div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                {spec.label}
              </span>
            </div>
            <div className="text-dark-amethyst font-semibold text-sm">
              {spec.value}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-4 border-t border-dark-amethyst/5">
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          {scores.map((score) => (
            <div key={score.label} className="flex items-center gap-2">
              <div className="text-dark-amethyst/40">{score.icon}</div>
              <span className="text-xs font-medium text-dark-amethyst/60 capitalize">
                {score.label}
              </span>
              <span className={`text-sm font-bold ${score.color}`}>
                {score.score}/10
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-honeydew rounded-xl p-6 border border-dark-amethyst/10 space-y-4 relative">
        <button className="w-full h-12 bg-indigo-velvet hover:bg-dark-amethyst text-white font-bold rounded-xl transition-all shadow-soft text-[13px] uppercase tracking-wider transform hover:scale-[1.01] active:scale-[0.99]">
          Enquire Now
        </button>
        <button className="group w-full h-12 bg-white border border-dark-amethyst/10 text-dark-amethyst font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/50 transition-all text-[13px] uppercase tracking-wider">
          <Phone className="w-4 h-4 text-indigo-velvet" />
          Call Expert
        </button>

        <div className="flex items-center justify-center gap-4 pt-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-amethyst/10 bg-white shadow-sm hover:border-dark-amethyst/20 hover:shadow-md transition-all group">
            <Share2
              className="w-3.5 h-3.5 text-dark-amethyst/40 group-hover:text-dark-amethyst/60 transition-colors"
              strokeWidth={2.5}
            />
            <span className="text-[11px] font-bold text-dark-amethyst/70 uppercase tracking-wider">
              Share
            </span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-amethyst/10 bg-white shadow-sm hover:border-dark-amethyst/20 hover:shadow-md transition-all group">
            <Heart
              className="w-3.5 h-3.5 text-dark-amethyst/40 group-hover:text-dark-amethyst/60 transition-colors"
              strokeWidth={2.5}
            />
            <span className="text-[11px] font-bold text-dark-amethyst/70 uppercase tracking-wider">
              Save
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
