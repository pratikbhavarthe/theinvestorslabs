"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations/variants";

export function Introduction() {
  return (
    <section className="section bg-white overflow-hidden py-24 md:py-32">
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-12">
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
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-primary leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              A dedicated property advisor focused on the NCR real estate
              landscape.
            </motion.h2>
          </div>

          {/* Right Column - Deep Dive & Values */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-end">
            <motion.div variants={fadeIn} className="space-y-8">
              <div className="space-y-6">
                <p
                  className="text-lg md:text-xl text-neutral-slate leading-relaxed text-justify"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  The Investor Labs is a specialized real estate advisory firm
                  pursuing premium residential and commercial opportunities in
                  the Noida and Gurgaon markets.
                </p>
                <p
                  className="text-lg md:text-xl text-neutral-slate leading-relaxed text-justify"
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  Founded to bring transparency and strategic depth to property
                  investments, our expertise guides investors and home seekers
                  through every step of their journey—bridging the gap between
                  aspiration and acquisition in the region&apos;s most promising
                  sectors.
                </p>
              </div>

              {/* Core Focus - Small architectural tags */}
              <div className="pt-8 border-t border-border flex flex-wrap gap-4">
                {[
                  "Strategic Advisory",
                  "Premium Listings",
                  "Noida & Gurgaon",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary/50"
                    style={{
                      fontFamily: "var(--font-plus-jakarta), sans-serif",
                    }}
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
