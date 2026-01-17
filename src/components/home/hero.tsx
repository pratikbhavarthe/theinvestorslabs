"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
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
        {/* Subtler gradient for readability without masking the architectural beauty */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/10 to-transparent" />
      </div>

      {/* Content - Bottom Left Alignment with minimal edge gap for desktop */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-12 md:pb-24">
        {/* Using a larger max-width and smaller desktop padding to bring content closer to edge */}
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-left"
          >
            {/* Headline - Plus Jakarta Sans, Bold, Anchored left */}
            <h1
              className="text-[2.25rem] md:text-[3.50rem] lg:text-[4.25rem] font-bold text-white mb-6 leading-[1.1] tracking-tight"
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

            {/* Interactive CTA - Anchored clearly to the left boundary */}
            <div className="flex items-start">
              <InteractiveHoverButton
                onClick={() => router.push("/properties")}
                className="h-14 px-10 bg-white"
              >
                Available Properties
              </InteractiveHoverButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
