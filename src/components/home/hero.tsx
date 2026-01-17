"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative bg-white overflow-hidden h-[90vh] min-h-[800px] flex flex-col">
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
        <div className="absolute inset-0 bg-linear-to-r from-white/70 via-white/30 to-transparent" />
      </div>

      {/* Content - 12 Column Grid matching Vista layout */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="w-full max-w-[1536px] mx-auto px-10 md:px-20 lg:px-32">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left column - Content anchored to the far left boundary of the container */}
            <div className="col-span-12 lg:col-span-8 xl:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-start text-left"
              >
                {/* Headline - Plus Jakarta Sans, Ultra Large Scale (up to 7.5rem/120px) */}
                <h1 className="font-sans text-[3.5rem] md:text-[5.5rem] lg:text-[7.5rem] font-extrabold text-[#0f172a] mb-12 leading-[0.95] tracking-tighter">
                  A{" "}
                  <span className="italic font-light opacity-80">trusted</span>{" "}
                  real estate partner
                </h1>

                {/* CTA Button - Prominent, anchored to grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button
                    onClick={() => router.push("/properties")}
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white h-16 px-12 rounded-full font-bold transition-all shadow-lg hover:shadow-2xl text-[1.125rem]"
                  >
                    Available Properties →
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Empty space on the right for visual balance like Vista */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
          </div>
        </div>
      </div>

      {/* Subtle bottom fade to create smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-white via-white/40 to-transparent pointer-events-none" />
    </section>
  );
}
