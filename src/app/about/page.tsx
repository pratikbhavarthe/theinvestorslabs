"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-indigo-velvet selection:text-white">
      {/* 1. Hero Section - Dark Amethyst Base (Premium, Regal) */}
      <section className="relative min-h-[80vh] flex items-center bg-dark-amethyst overflow-hidden">
        {/* Background Overlay/Image */}
        {/* Background Overlay - Subtle Gradient */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16 pt-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/80 mb-8 backdrop-blur-sm">
              Our Philosophy
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Wealth built on <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/50">
                true intelligence.
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/70 font-medium leading-relaxed max-w-2xl">
              We don&apos;t just sell properties. We engineer portfolios. <br />
              Bridging the gap between aspiration and acquisition in NCR&apos;s
              most premium micro-markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Vision & Mission - Editorial Style */}
      <section className="py-24 md:py-32 lg:py-40 bg-white relative">
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-indigo-velvet font-bold uppercase tracking-[0.2em] text-xs mb-6 block"
              >
                The Vision
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-amethyst mb-8 leading-tight"
              >
                Redefining the <br />
                <span className="italic font-medium text-dark-amethyst/60">
                  art of acquisition.
                </span>
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="space-y-6 text-lg md:text-xl text-dark-amethyst/70 leading-relaxed max-w-3xl mx-auto"
              >
                <p>
                  The real estate landscape is noisy. We exist to be the signal.
                  At The Investor Labs, we believe that every square foot
                  purchased should be a stepping stone to generational wealth.
                </p>
                <p>
                  Our mission is simple: To provide the same level of analytical
                  rigor, legal diligence, and market foresight to individual
                  investors that institutional funds demand.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 pt-12 border-t border-dust-grey/30 grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto"
              >
                <div>
                  <h3 className="text-2xl font-bold text-dark-amethyst mb-2">
                    Since 2024
                  </h3>
                  <p className="text-sm text-dark-amethyst/60 uppercase tracking-wider">
                    Establishing Trust
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark-amethyst mb-2">
                    ₹500 Cr+
                  </h3>
                  <p className="text-sm text-dark-amethyst/60 uppercase tracking-wider">
                    Inventory Curated
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us - Architectural Grid (Replacing Bento) */}
      <section className="py-24 md:py-32 bg-honeydew/40">
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-indigo-velvet font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark-amethyst leading-tight">
              Precision over volume. <br />
              Excellence over speed.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Data-Driven ROI",
                desc: "We analyze micro-market trends to identify assets with highest appreciation potential.",
              },
              {
                icon: ShieldCheck,
                title: "Legal Fortification",
                desc: "Every property undergoes a rigourous 3-tier legal check before it reaches you.",
              },
              {
                icon: Users,
                title: "Network Access",
                desc: "Unlock off-market deals and pre-launch pricing through our deep industry ties.",
              },
              {
                icon: Building2,
                title: "End-to-End Service",
                desc: "From selection to registration, we handle the friction so you enjoy the asset.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group bg-white p-8 md:p-10 rounded-2xl border border-transparent hover:border-indigo-velvet/20 hover:shadow-lg transition-all duration-500 ease-out"
              >
                <div className="w-12 h-12 bg-honeydew rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 text-indigo-velvet">
                  <item.icon strokeWidth={1.5} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark-amethyst mb-4">
                  {item.title}
                </h3>
                <p className="text-dark-amethyst/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Founders / Team Section */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-indigo-velvet font-bold uppercase tracking-[0.2em] text-xs mb-6 block">
                The Leadership
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-dark-amethyst mb-8 leading-tight">
                Guided by <br /> Values
              </h2>
              <p className="text-lg text-dark-amethyst/70 mb-12 leading-relaxed max-w-2xl mx-auto">
                &quot;We built The Investor Labs on a single premise: Trust is
                the ultimate currency in real estate. Our team comprises
                industry veterans, legal experts, and financial analysts
                dedicated to protecting and growing your capital.&quot;
              </p>

              <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12">
                {[
                  "10+ Years of Combined Experience",
                  "Expertise in NCR Micro-markets",
                  "Customer-First Approach",
                ].map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-dark-amethyst/80 font-medium text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-velvet" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-block">
                <InteractiveHoverButton className="border border-indigo-velvet">
                  Meet the Team
                </InteractiveHoverButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section - Dark Amethyst */}
      <section className="py-32 bg-dark-amethyst relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <DotPattern
            className={cn(
              "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
              "text-white/20",
            )}
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to invest <br /> with clarity?
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Join the exclusive circle of investors who have chosen
              transparency and performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/consultation">
                <button className="h-14 px-10 rounded-full bg-white text-dark-amethyst font-bold text-sm uppercase tracking-widest hover:bg-honeydew transition-colors duration-300">
                  Start Consultation
                </button>
              </Link>
              <Link href="/properties">
                <button className="h-14 px-10 rounded-full border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 flex items-center gap-2">
                  View Properties <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
