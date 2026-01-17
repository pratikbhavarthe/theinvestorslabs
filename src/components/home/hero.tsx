"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative bg-white overflow-hidden h-[80vh] min-h-[600px] flex flex-col">
      {/* Background Image with Sophisticated Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="NCR Real Estate Strategic Guidance"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Subtle, airy white overlay from left for high-end readability */}
        <div className="absolute inset-0 bg-linear-to-r from-white/60 via-white/20 to-transparent" />
      </div>

      {/* Content - 12 Column Grid - Reduced scale for elegance */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            {/* Left column - Content anchored with breathing room */}
            <div className="col-span-12 md:col-span-10 lg:col-span-8 xl:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-start text-left"
              >
                {/* Headline - Punchy, India-focused, restored to elegant scale */}
                <h1 className="font-sans text-[2.75rem] md:text-[3.5rem] lg:text-[4.50rem] font-bold text-[#0f172a] mb-8 leading-[1.1] tracking-tight">
                  Strategic guidance for{" "}
                  <span className="italic font-light text-[#0f172a]/70">
                    Noida & Gurgaon
                  </span>{" "}
                  real estate
                </h1>

                {/* CTA - Anchored clearly, premium weight */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button
                    onClick={() => router.push("/properties")}
                    size="lg"
                    className="bg-[#0f172a] hover:bg-[#1e293b] text-white h-14 px-10 rounded-full font-semibold transition-all shadow-md hover:shadow-xl text-[1rem]"
                  >
                    View Available Properties →
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right column - Visual balance space */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-6" />
          </div>
        </div>
      </div>

      {/* Atmospheric bottom fade - very subtle transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
