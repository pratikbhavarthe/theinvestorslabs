"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative bg-[#0f172a] overflow-hidden h-[85vh] min-h-[600px] flex flex-col">
      {/* Background Image with Dark Professional Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Premium Real Estate NCR"
          fill
          className="object-cover opacity-60"
          priority
          quality={100}
        />
        {/* Dark overlay for readability, especially at the bottom where text will sit */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent" />
      </div>

      {/* Content - Bottom Left Alignment */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-12 md:pb-20">
        <div className="container px-6 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-left"
          >
            {/* Headline - Plus Jakarta Sans, Refined Scale & Weight */}
            <h1
              className="text-[2.25rem] md:text-[3.25rem] lg:text-[4rem] font-bold text-white mb-6 leading-[1.15] tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Elevated living for the modern NCR elite
            </h1>

            {/* Subheader - Professional & Readable */}
            <p
              className="text-white/80 text-base md:text-lg max-w-2xl mb-10 font-medium leading-relaxed"
              style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
            >
              Smart, strategic real estate guidance across Noida &
              Gurgaon&apos;s most prestigious neighborhoods.
            </p>

            {/* Single CTA - Matches request */}
            <div className="flex items-start">
              <Button
                onClick={() => router.push("/properties")}
                size="lg"
                className="bg-white hover:bg-neutral-100 text-[#0f172a] h-14 px-10 rounded-full font-bold transition-all shadow-xl text-[1rem]"
              >
                Available Properties →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
