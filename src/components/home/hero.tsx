"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative bg-white overflow-hidden h-[85vh] min-h-[600px]">
      {/* Background Image with Subtle Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Real estate background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
      </div>

      {/* Content - Using container class with proper padding */}
      <div className="container relative z-10 h-full flex items-center">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Headline - H1: 40-48px per ruleset */}
          <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-[#0f172a] mb-6 leading-[1.1]">
            A <span className="italic font-light">trusted</span> real estate
            partner
          </h1>

          {/* CTA Button - 44-48px height per ruleset */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              onClick={() => router.push("/properties")}
              size="lg"
              className="bg-white hover:bg-[#F9FAFB] text-[#0f172a] h-12 px-8 rounded-full font-medium transition-all shadow-md hover:shadow-lg text-[0.9375rem] border border-[#E5E7EB]"
            >
              Available Properties →
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle bottom fade - reduced opacity */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
    </section>
  );
}
