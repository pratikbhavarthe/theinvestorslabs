"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Maximize2,
  Layers,
  Compass,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import { Property } from "@/lib/db/schema";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice = (property.price / 10000000).toFixed(2);
  const areaValue = property.superArea?.split(" ")[0] || "--";
  const areaUnit = property.superArea?.split(" ")[1] || "sqft";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white border border-dust-grey/15 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-velvet/5 transition-all duration-500 flex flex-col"
    >
      {/* 1. Header Spec Bar - High Density */}
      <div className="grid grid-cols-3 divide-x divide-dust-grey/10 border-b border-dust-grey/10">
        <div className="px-6 py-4 flex flex-col items-center">
          <p className="text-[10px] font-bold text-dark-amethyst/30 uppercase tracking-widest mb-1">
            Price
          </p>
          <p className="text-xl font-bold text-dark-amethyst tracking-tighter">
            ₹{formattedPrice} Cr
          </p>
        </div>
        <div className="px-6 py-4 flex flex-col items-center">
          <p className="text-[10px] font-bold text-dark-amethyst/30 uppercase tracking-widest mb-1">
            Super Area
          </p>
          <p className="text-xl font-bold text-dark-amethyst tracking-tighter">
            {areaValue}{" "}
            <span className="text-xs font-medium text-dark-amethyst/50">
              {areaUnit}
            </span>
          </p>
        </div>
        <div className="px-6 py-4 flex flex-col items-center">
          <p className="text-[10px] font-bold text-dark-amethyst/30 uppercase tracking-widest mb-1">
            Facing
          </p>
          <div className="flex items-center gap-2">
            <Compass className="h-3.5 w-3.5 text-indigo-velvet" />
            <p className="text-sm font-bold text-dark-amethyst">
              {property.facing || "--"}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Middle Section - Split Layout */}
      <div className="flex flex-col md:flex-row h-auto md:h-[240px]">
        {/* Image Container */}
        <div className="relative w-full md:w-[320px] h-[200px] md:h-full overflow-hidden shrink-0 border-r border-dust-grey/5">
          <Image
            src={
              property.images?.[0] ||
              "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000"
            }
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark-amethyst/20 via-transparent to-transparent opacity-60" />

          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {property.featured && (
              <Badge className="bg-indigo-velvet text-white border-none py-1 px-3 rounded-md font-bold tracking-widest text-[8px] uppercase shadow-lg">
                Featured
              </Badge>
            )}
            <Badge className="bg-white/95 backdrop-blur-md text-dark-amethyst border-none py-1 px-3 rounded-md font-bold tracking-widest text-[8px] uppercase shadow-md">
              {property.status}
            </Badge>
          </div>

          <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[9px] font-bold">
            {property.images?.length || 0}+ Photos
          </div>
        </div>

        {/* Content & Detail Grid */}
        <div className="flex-1 p-6 flex flex-col justify-between overflow-hidden">
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-dark-amethyst tracking-tight group-hover:text-indigo-velvet transition-colors line-clamp-1">
                {property.configuration || property.propertyType}{" "}
                {property.propertyType} for Sale in {property.sector},{" "}
                {property.city}
              </h3>
              <div className="flex items-center gap-2 text-dark-amethyst/40 text-[9px] font-bold uppercase tracking-widest">
                <MapPin className="h-2.5 w-2.5" />
                <span>
                  {property.sector}, {property.city}
                </span>
              </div>
            </div>

            {/* NoBroker Detail Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-dust-grey/5">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-honeydew rounded-lg">
                  <Maximize2 className="h-3.5 w-3.5 text-indigo-velvet" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-dark-amethyst/30 uppercase tracking-widest">
                    Config
                  </p>
                  <p className="text-sm font-bold text-dark-amethyst">
                    {property.configuration || "--"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-honeydew rounded-lg">
                  <Layers className="h-3.5 w-3.5 text-indigo-velvet" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-dark-amethyst/30 uppercase tracking-widest">
                    Floor
                  </p>
                  <p className="text-sm font-bold text-dark-amethyst">
                    {property.floor || "--"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-honeydew rounded-lg">
                  <Compass className="h-3.5 w-3.5 text-indigo-velvet" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-dark-amethyst/30 uppercase tracking-widest">
                    Facing
                  </p>
                  <p className="text-sm font-bold text-dark-amethyst">
                    {property.facing || "--"}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-honeydew rounded-lg">
                  <ArrowUpRight className="h-3.5 w-3.5 text-indigo-velvet" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-dark-amethyst/30 uppercase tracking-widest">
                    Status
                  </p>
                  <p className="text-sm font-bold text-dark-amethyst">
                    {property.status || "--"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Footer Action Bar */}
      <div className="bg-honeydew/10 border-t border-dust-grey/10 px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-dark-amethyst/50 italic max-w-md line-clamp-1">
          {property.description}
        </p>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-indigo-velvet/20 text-indigo-velvet py-2.5 px-6 rounded-xl font-bold text-xs hover:bg-indigo-velvet/5 transition-all">
            <Phone className="h-3.5 w-3.5" />
            Contact Expert
          </button>
          <Link
            href={`/properties/${property.id}`}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-indigo-velvet text-white py-2.5 px-8 rounded-xl font-bold text-xs shadow-lg shadow-indigo-velvet/10 hover:shadow-indigo-velvet/20 transition-all"
          >
            Get Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
