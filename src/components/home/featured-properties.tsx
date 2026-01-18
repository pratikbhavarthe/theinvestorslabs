"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

interface Property {
  id: string;
  title: string;
  city: string;
  locality: string;
  pricePrefix: string;
  price?: string;
  type: string;
  images: string[];
}

interface FeaturedPropertiesProps {
  properties: Property[];
}

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  if (properties.length === 0) {
    return null;
  }

  return (
    <section className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-left mb-20 border-b border-dark-amethyst/10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-velvet mb-8 block">
              The Collection
            </span>
            <h2 className="text-[2.75rem] md:text-[3.75rem] font-bold text-dark-amethyst mb-8 leading-[1.1] tracking-tight">
              Featured Opportunities.
            </h2>
            <p className="text-dark-amethyst/70 text-xl leading-relaxed max-w-2xl font-medium opacity-90 italic">
              Handpicked premium properties in prime locations, vetted for
              architectural excellence and strategic value.
            </p>
          </motion.div>
        </div>

        {/* Property Grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Link href={`/properties/${property.id}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-dark-amethyst/5 hover:border-dark-amethyst/10 shadow-soft hover:shadow-2xl transition-all duration-700">
                    {/* Image Stage */}
                    <div className="relative h-72 overflow-hidden bg-dark-amethyst">
                      {property.images?.[0] ? (
                        <Image
                          src={property.images[0]}
                          alt={property.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-dark-amethyst">
                          <span className="text-dark-amethyst/40 text-xs font-bold uppercase tracking-widest">
                            No Preview
                          </span>
                        </div>
                      )}
                      <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                        <Badge className="bg-white/90 backdrop-blur-xl text-dark-amethyst text-[8px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-dark-amethyst/10 shadow-sm">
                          {property.type || "Available"}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Stage */}
                    <div className="p-8">
                      <div className="text-[10px] text-indigo-velvet font-bold uppercase tracking-[0.25em]">
                        {property.city}
                      </div>

                      <h3 className="text-2xl font-bold text-dark-amethyst mb-2 line-clamp-2 group-hover:text-indigo-velvet transition-colors leading-tight tracking-tight">
                        {property.title}
                      </h3>

                      <p className="text-[10px] text-dark-amethyst/60 font-bold uppercase tracking-[0.2em] flex items-center gap-3">
                        <MapPin className="w-3 h-3 text-indigo-velvet" />
                        {property.locality}
                      </p>

                      <div className="pt-8 border-t border-dark-amethyst/10 mt-8">
                        <div className="text-sm font-bold text-dark-amethyst/40 uppercase tracking-widest mb-1">
                          Investment Range
                        </div>
                        <div className="text-2xl font-bold text-dark-amethyst tracking-tighter">
                          {property.pricePrefix || property.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/properties">
            <Button className="inline-flex items-center gap-4 h-18 px-12 bg-indigo-velvet hover:bg-dark-amethyst text-white font-bold uppercase tracking-widest rounded-2xl transition-all text-[10px] shadow-soft">
              Explore Full Collection
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
