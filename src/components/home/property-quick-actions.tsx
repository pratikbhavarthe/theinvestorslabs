/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  GREATER_NOIDA_PROPERTIES,
  NOIDA_PROPERTIES,
} from "@/lib/data/properties";

export function PropertyQuickActions() {
  const [activeTab, setActiveTab] = useState<"Greater Noida" | "Noida">(
    "Greater Noida",
  );
  const router = useRouter();

  const properties =
    activeTab === "Greater Noida" ? GREATER_NOIDA_PROPERTIES : NOIDA_PROPERTIES;

  return (
    <section className="bg-dust-grey py-32 md:py-48 overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header - Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 border-b border-dark-amethyst/10 pb-12">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-velvet mb-8 block">
              Investment Core
            </span>
            <h2 className="text-[2.75rem] md:text-[3.75rem] font-bold text-dark-amethyst mb-8 leading-[1.1] tracking-tight">
              The NCR Elite Selection
            </h2>
            <p className="text-dark-amethyst/70 text-xl leading-relaxed max-w-2xl font-medium opacity-90 italic">
              Explore specialized opportunities curated for high-growth NCR
              micro-markets.
            </p>
          </div>

          {/* Minimalist Tab Switcher */}
          <div className="flex items-center gap-16 pb-1">
            {(["Greater Noida", "Noida"] as const).map((city) => (
              <button
                key={city}
                onClick={() => setActiveTab(city)}
                className="relative py-2 group cursor-pointer border-none bg-transparent"
              >
                <span
                  className={`text-sm font-bold tracking-[0.3em] uppercase transition-all duration-500 ${
                    activeTab === city
                      ? "text-dark-amethyst scale-110"
                      : "text-dark-amethyst/40 hover:text-indigo-velvet"
                  }`}
                >
                  {city}
                </span>
                {activeTab === city && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute -bottom-px left-0 right-0 h-[3px] bg-indigo-velvet"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-12 lg:gap-x-20"
            >
              {properties.map((property: any, idx: number) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                  className="group cursor-pointer flex flex-col"
                  onClick={() => router.push(`/properties/${property.id}`)}
                >
                  <div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl transition-all duration-700 mb-10">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-2000 ease-out group-hover:scale-105"
                    />

                    <div className="absolute top-8 left-8">
                      <span className="bg-white/90 backdrop-blur-xl px-4 py-1.5 rounded-full text-[8px] font-bold text-dark-amethyst uppercase tracking-[0.3em] shadow-sm border border-white/20">
                        {property.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-8 left-8 text-white">
                      <span className="text-2xl font-bold tracking-tighter drop-shadow-md">
                        {property.price}
                      </span>
                    </div>
                  </div>

                  <div className="px-4">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="h-px w-8 bg-indigo-velvet" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-velvet">
                        {property.config}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-dark-amethyst mb-3 leading-tight tracking-tight group-hover:text-indigo-velvet transition-colors duration-500">
                      {property.title}
                    </h3>

                    <div className="flex items-start gap-2 mb-6 text-dark-amethyst/80">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-[10px] font-bold uppercase tracking-widest leading-relaxed line-clamp-1">
                        {property.address}
                      </span>
                    </div>

                    <p className="text-dark-amethyst text-xs leading-relaxed mb-8 font-medium h-12 line-clamp-2 italic">
                      &quot;{property.hook}&quot;
                    </p>

                    <div className="flex flex-col gap-6 pt-6 border-t border-dark-amethyst/10">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-dark-amethyst">
                          {property.area}
                        </span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5 opacity-60">
                            <span className="text-[10px] font-bold text-dark-amethyst">
                              {property.specs.baths}
                            </span>
                            <span className="text-[8px] font-medium text-dark-amethyst/60 uppercase tracking-tighter">
                              Baths
                            </span>
                          </div>
                          <div className="h-3 w-px bg-dark-amethyst/20" />
                          <div className="flex items-center gap-1.5 opacity-60">
                            <span className="text-[10px] font-bold text-dark-amethyst">
                              {property.specs.floor}
                            </span>
                            <span className="text-[8px] font-medium text-dark-amethyst/60 uppercase tracking-tighter">
                              Floor
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Button - Smart Integration */}
        <div className="mt-28 flex flex-col items-center">
          <InteractiveHoverButton
            className="bg-white"
            onClick={() => router.push("/properties")}
          >
            Explore {activeTab} Portfolio
          </InteractiveHoverButton>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-dark-amethyst/40"
          >
            Discover over 20+ premium listings
          </motion.p>
        </div>
      </div>
    </section>
  );
}
