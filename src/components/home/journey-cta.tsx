"use client";

import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function JourneyCTA() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-honeydew/50 rounded-[2.5rem] p-10 md:p-16 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-velvet mb-4 block">
                Direct Advisory
              </span>
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-dark-amethyst mb-6 leading-tight tracking-tight">
                Secure your NCR legacy.
              </h2>
              <p className="text-dark-amethyst/70 text-base md:text-lg font-medium leading-relaxed italic">
                &ldquo;Strategic acquisitions require more than a search bar.
                They require a partner who understands the pulse of the elite
                landscape.&rdquo;
              </p>
            </div>

            <div className="shrink-0 group">
              <InteractiveHoverButton
                className="bg-white shadow-soft"
                onClick={() => (window.location.href = "/consultation")}
              >
                Request Consultation
              </InteractiveHoverButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
