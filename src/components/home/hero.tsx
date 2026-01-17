"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative bg-white overflow-hidden h-[85vh] min-h-[700px] flex flex-col">
      {/* Background Image with Subtle Overlay - Matches Reference */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Real estate partner background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Subtle white overlay from left to give text readability without dark masking */}
        <div className="absolute inset-0 bg-linear-to-r from-white/60 via-white/30 to-transparent" />
      </div>

      {/* Content - 12 Column Grid matching Vista layout */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-12 auto-rows-min gap-8">
            {/* Left column - Content spans 12 cols on mobile, 6 on desktop */}
            <div className="col-span-12 lg:col-span-6 xl:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-start text-left"
              >
                {/* Headline - Plus Jakarta Sans, Bold, Large Scale */}
                <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-[#0f172a] mb-10 leading-[1.05] tracking-tight">
                  A{" "}
                  <span className="italic font-light text-[#0f172a]/80">
                    trusted
                  </span>{" "}
                  real estate partner
                </h1>

                {/* CTA Button - Pill shaped, clean, anchored to text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Button
                    onClick={() => router.push("/properties")}
                    size="lg"
                    className="bg-white hover:bg-neutral-50 text-[#0f172a] h-14 px-10 rounded-full font-semibold transition-all shadow-md hover:shadow-xl text-[1rem] border border-[#E5E7EB]"
                  >
                    Available Properties →
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Empty space on the right for visual balance like Vista */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />
          </div>
        </div>
      </div>

      {/* Subtle bottom fade to create smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-white via-white/40 to-transparent pointer-events-none" />
    </section>
  );
}
