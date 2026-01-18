"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function LeadForm() {
  const router = useRouter();

  return (
    <section className="py-24 md:py-32 bg-dark-amethyst overflow-hidden relative">
      {/* Flickering Grid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="rgb(255, 255, 255)"
        maxOpacity={0.15}
        flickerChance={0.4}
      />

      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-2xl"
        >
          {/* Headline with italic emphasis */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Find your <span className="italic font-light">ideal space</span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed font-medium max-w-xl">
            See what&apos;s available or contact us for personalized assistance
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <InteractiveHoverButton
              className="bg-white text-dark-amethyst"
              onClick={() => router.push("/properties")}
            >
              Available Properties
            </InteractiveHoverButton>

            <button
              onClick={() => router.push("/contact")}
              className="py-4 px-10 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-dark-amethyst transition-all duration-200 uppercase tracking-wider text-sm"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
