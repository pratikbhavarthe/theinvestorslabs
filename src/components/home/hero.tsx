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
        <div className="absolute inset-0 bg-linear-to-r from-white/40 via-white/20 to-transparent" />
      </div>

      {/* Content - Proper container structure */}
      <div className="relative z-10 h-full flex items-start pt-32">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Headline - H1: 40-48px, max-width for readability */}
            <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-[#0f172a] mb-8 leading-[1.1] max-w-[20ch]">
              A <span className="italic font-light">trusted</span> real estate
              partner
            </h1>

            {/* CTA Button - Proper spacing from heading (24px = mb-8) */}
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
      </div>

      {/* Subtle bottom fade - smoother gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white via-white/40 to-transparent pointer-events-none" />
    </section>
  );
}
