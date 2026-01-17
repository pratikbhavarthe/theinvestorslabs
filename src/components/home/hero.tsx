"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const router = useRouter();

  const stats = [
    { label: "Verified Listings", value: "450+" },
    { label: "Happy Families", value: "1.2k+" },
    { label: "Premium Projects", value: "85+" },
  ];

  return (
    <section className="relative bg-[#0f172a] overflow-hidden h-[90vh] min-h-[750px] flex flex-col items-center justify-center">
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
        {/* Radial gradient to pull focus to the center content */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0f172a]/40 to-[#0f172a]/80" />
      </div>

      {/* Content - Centered & Refined */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Headline - Plus Jakarta Sans enforced via class and global styles */}
          <h1
            className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Elevated living for the{" "}
            <span className="italic font-light opacity-90">modern</span> NCR
            elite
          </h1>

          {/* Subheader - Plus Jakarta Sans enforced via style for safety */}
          <p
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium"
            style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
          >
            Smart, strategic real estate guidance across Noida & Gurgaon&apos;s
            most prestigious neighborhoods.
          </p>

          {/* Dual CTAs - Centered */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={() => router.push("/contact")}
              size="lg"
              className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-[#0f172a] h-14 px-10 rounded-full font-bold transition-all shadow-xl text-[1rem]"
            >
              Get a Consultation
            </Button>
            <Button
              onClick={() => router.push("/properties")}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 h-14 px-10 rounded-full font-bold transition-all text-[1rem]"
            >
              Explore Properties
            </Button>
          </div>
        </motion.div>

        {/* Stats Section - Bottom Anchored */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 py-8 border-t border-white/10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span
                className="text-white text-2xl md:text-3xl font-bold mb-1 tracking-tight"
                style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
              >
                {stat.value}
              </span>
              <span className="text-white/50 text-xs md:text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle bottom fade for section continuity */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0f172a] to-transparent pointer-events-none" />
    </section>
  );
}
