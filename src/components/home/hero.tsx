"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative bg-white overflow-hidden h-[85vh] min-h-[700px] flex flex-col">
      {/* Background Image with Atmospheric Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="NCR Real Estate Advisory"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Subtle atmospheric overlay from left - increased transparency for premium look */}
        <div className="absolute inset-0 bg-linear-to-r from-white/50 via-white/20 to-transparent" />
      </div>

      {/* Content - 12 Column Grid matching high-end NCR advisory layouts */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Left column - Content anchored with vertical rhythm discipline */}
            <div className="col-span-12 lg:col-span-8 xl:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-start text-left"
              >
                {/* Headline - India-focused, advisory, value-driven */}
                <h1 className="font-sans text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-bold text-[#0f172a] mb-10 leading-[1.05] tracking-tight">
                  Smart property{" "}
                  <span className="italic font-light opacity-90 text-[#0f172a]">
                    decisions
                  </span>{" "}
                  for the evolving NCR market
                </h1>

                {/* CTA - Anchored clearly, premium weight */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button
                    onClick={() => router.push("/properties")}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white h-14 px-10 rounded-full font-semibold transition-all shadow-md hover:shadow-xl text-[1rem]"
                  >
                    View Strategic Listings →
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Empty space for visual balance */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
          </div>
        </div>
      </div>

      {/* Atmospheric bottom fade - reduced intensity for cohesion with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white/40 via-white/10 to-transparent pointer-events-none" />
    </section>
  );
}
