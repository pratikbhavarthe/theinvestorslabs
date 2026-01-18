"use client";

import { HeroSearchBar } from "@/components/home/hero-search-bar";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-dark-amethyst overflow-hidden h-screen min-h-[600px] flex flex-col">
      {/* Background Image with Dark Professional Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Premium Real Estate NCR"
          fill
          className="object-cover opacity-70"
          priority
          quality={100}
        />
        {/* Softer gradient for readability using brand colors */}
        <div className="absolute inset-0 bg-linear-to-t from-dark-amethyst/40 via-dark-amethyst/10 to-transparent" />
      </div>

      {/* Content - Bottom Left Alignment with minimal edge gap for desktop */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-12 md:pb-24">
        {/* Using a larger max-width and smaller desktop padding to bring content closer to edge */}
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-left mb-10"
          >
            {/* Headline - Primary Dark / Text */}
            <h1 className="text-[2.25rem] md:text-[3.50rem] lg:text-[4.25rem] font-bold text-white mb-6 leading-[1.1] tracking-tight font-sans">
              Elevated living for the modern NCR elite
            </h1>

            {/* Subheader - Professional & Readable */}
            <p className="text-white/80 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
              Smart, strategic real estate guidance across Noida & Greater
              Noida&apos;s most prestigious neighborhoods.
            </p>
          </motion.div>

          {/* Sleek Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <HeroSearchBar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
