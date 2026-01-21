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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-velvet/10 transition-all duration-500 border border-t-0 border-x-0 border-b-4 border-b-transparent hover:border-b-indigo-velvet flex flex-col h-full"
    >
      {/* 1. Image Area (Large & Immersive) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={
            property.images?.[0] ||
            "https://images.unsplash.com/photo-1600596542815-e3287011efaa?q=80&w=1000"
          }
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />

        <div className="absolute top-4 left-4 flex gap-2">
          {property.featured && (
            <Badge className="bg-indigo-velvet text-white border-none px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
              Featured
            </Badge>
          )}
          <Badge className="bg-white/90 backdrop-blur-sm text-dark-amethyst border-none px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
            {property.status}
          </Badge>
        </div>

        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-1">
            {property.city}
          </p>
          <h3 className="text-xl font-bold leading-tight">
            ₹{formattedPrice} Cr
          </h3>
        </div>
      </div>

      {/* 2. Details Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-dark-amethyst line-clamp-2 mb-4 group-hover:text-indigo-velvet transition-colors">
          {property.title}
        </h3>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 pb-6 border-b border-dashed border-dark-amethyst/10 mb-6">
          <div className="text-center">
            <p className="text-[10px] text-dark-amethyst/40 font-bold uppercase tracking-wider mb-1">
              Config
            </p>
            <p className="font-bold text-dark-amethyst">
              {property.configuration || "--"}
            </p>
          </div>
          <div className="text-center border-x border-dark-amethyst/10">
            <p className="text-[10px] text-dark-amethyst/40 font-bold uppercase tracking-wider mb-1">
              Area
            </p>
            <p className="font-bold text-dark-amethyst">
              {property.superArea || "--"}
            </p>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-dark-amethyst/40 font-bold uppercase tracking-wider mb-1">
              Type
            </p>
            <p className="font-bold text-dark-amethyst">
              {property.propertyType}
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mt-auto">
          <Link
            href={`/properties/${property.id}`}
            className="flex items-center justify-between w-full group/btn"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-velvet group-hover/btn:mr-2 transition-all">
              View Details
            </span>
            <span className="bg-indigo-velvet/10 p-2 rounded-full group-hover/btn:bg-indigo-velvet text-indigo-velvet group-hover/btn:text-white transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
