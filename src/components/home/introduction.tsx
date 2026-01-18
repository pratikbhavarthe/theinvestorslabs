"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations/variants";

export function Introduction() {
  return (
    <section className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24"
        >
          {/* Left Column - Bold Statement */}
          <div className="md:col-span-6 lg:col-span-7">
            <motion.h2
              variants={fadeIn}
              className="text-[2.75rem] md:text-[3.75rem] lg:text-[4.5rem] font-bold text-dark-amethyst leading-[1.05] tracking-tight"
            >
              A specialized property advisor for the NCR investment landscape.
            </motion.h2>
          </div>

          {/* Right Column - Deep Dive & Values */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-end">
            <motion.div variants={fadeIn} className="space-y-10">
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-dark-amethyst/90 leading-relaxed font-light italic">
                  &ldquo;We don&apos;t just sell properties; we curate
                  investment journeys that redefine wealth and architectural
                  legacy in the heart of India&apos;s most promising
                  hubs.&rdquo;
                </p>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-dark-amethyst/70 leading-relaxed text-justify font-medium">
                    Founded to bring transparency and strategic depth to
                    property investments, our expertise guides investors through
                    every step—bridging the gap between aspiration and
                    acquisition in the region&apos;s most promising sectors.
                  </p>
                </div>
              </div>

              {/* Core Focus - Small architectural tags */}
              <div className="pt-10 border-t border-dark-amethyst/20 flex flex-wrap gap-10">
                {[
                  "Strategic Advisory",
                  "Premium Listings",
                  "Verified Assets",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-indigo-velvet"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
