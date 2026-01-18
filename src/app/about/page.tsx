"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main
      ref={containerRef}
      className="bg-white min-h-screen selection:bg-indigo-velvet selection:text-white"
    >
      {/* 1. Cinematic Editorial Hero */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-end">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/about-hero.png"
            alt="The Investor Labs Vision"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark-amethyst via-dark-amethyst/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-indigo-velvet"></span>
              <span className="text-white/80 uppercase tracking-[0.2em] text-sm font-medium">
                Why The Investor Labs
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9]">
              Smart Investments. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/60">
                Smart Living.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Impact Vision Statement */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-indigo-velvet font-semibold tracking-wide uppercase text-sm mb-4">
                Our Vision
              </p>
              <h2 className="text-4xl font-bold text-dark-amethyst leading-tight">
                Redefining <br /> Real Estate.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-dark-amethyst/90 leading-snug">
                To redefine modern real estate investing by making it{" "}
                <span className="font-medium text-indigo-velvet">
                  accessible
                </span>
                ,{" "}
                <span className="font-medium text-indigo-velvet">
                  transparent
                </span>
                , and{" "}
                <span className="font-medium text-indigo-velvet">
                  profitable
                </span>
                .
              </p>
              <div className="mt-12 grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-lg text-dark-amethyst/70 leading-relaxed">
                    We believe in empowering individuals and businesses to make
                    well-informed investment decisions that stand the test of
                    time.
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Easy access to housing options",
                    "Removing market barriers",
                    "Sustainable opportunities",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-dark-amethyst/80 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-indigo-velvet" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The "Why Us" Bento Grid */}
      <section className="py-24 bg-honeydew/30">
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-6">
              Why Choose Us
            </h2>
            <div className="h-1 w-20 bg-indigo-velvet rounded-full" />
          </div>

          <BentoGrid>
            {/* 1. Smart Investments - Wide */}
            <BentoGridItem
              title="Smart Investments"
              description="Leveraging data and market intelligence to create sustainable, high-return investment opportunities that outperform the market."
              icon={<LineChart className="h-6 w-6 text-indigo-velvet" />}
              className="md:col-span-2"
            />

            {/* 2. Expertise You Can Trust - Regular */}
            <BentoGridItem
              title="Expertise You Can Trust"
              description="Backed by deep market knowledge and real-world experience. We don't guess, we know."
              icon={<ShieldCheck className="h-6 w-6 text-indigo-velvet" />}
              className="md:col-span-1"
            />

            {/* 3. Client-Centric - Regular */}
            <BentoGridItem
              title="Client-Centric"
              description="Your goals define our strategy. Personalized, transparent solutions tailored to your vision."
              icon={<Users className="h-6 w-6 text-indigo-velvet" />}
              className="md:col-span-1"
            />

            {/* 4. Transparent Deals - Wide */}
            <BentoGridItem
              title="Transparent Deals"
              description="No hidden fees, no surprises. Just clear, honest partnerships built on integrity and accountability."
              icon={<Building2 className="h-6 w-6 text-indigo-velvet" />}
              className="md:col-span-2"
            />
          </BentoGrid>
        </div>
      </section>

      {/* 4. "Our Story" - Asymmetrical Layout */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Visual Side */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 aspect-4/5 rounded-4xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/about-investing.jpg"
                  alt="Our Story"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-amethyst/80 to-transparent opacity-60" />

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-3xl font-serif italic mb-2">
                    &quot;Investing with Purpose&quot;
                  </p>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute z-0 top-12 -left-12 w-full h-full border-2 border-indigo-velvet/20 rounded-4xl" />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-indigo-velvet font-medium tracking-wide uppercase text-sm mb-4 block">
                  Our Story
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-dark-amethyst mb-8 leading-tight">
                  Building wealth that stands <br /> the{" "}
                  <span className="text-indigo-velvet italic">
                    test of time.
                  </span>
                </h2>

                <div className="space-y-6 text-lg text-dark-amethyst/70 leading-relaxed dark:text-gray-400">
                  <p>
                    At The Investor Labs, we believe in purposeful investment —
                    one that balances growth, integrity, and long-term
                    sustainability. We blend deep market intelligence with
                    modern strategy to help investors make confident,
                    data-driven decisions.
                  </p>
                  <p>
                    Every project we take on reflects our vision of redefining
                    real estate through clarity and trust. We are removing the
                    barriers to entry, making premium real estate accessible to
                    a new generation of informed investors.
                  </p>
                </div>

                <div className="mt-10 pt-10 border-t border-dust-grey/30">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-4xl font-bold text-indigo-velvet mb-1">
                        200+
                      </p>
                      <p className="text-sm text-dark-amethyst/60 uppercase tracking-wider">
                        Happy Investors
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-indigo-velvet mb-1">
                        Premium
                      </p>
                      <p className="text-sm text-dark-amethyst/60 uppercase tracking-wider">
                        Inventory Only
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Minimalist Community Call to Action */}
      <section className="py-32 bg-dark-amethyst relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-indigo-velvet blur-[100px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-velvet blur-[100px] rounded-full mix-blend-screen" />
        </div>

        <div className="w-full max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Be part of our <br />{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                Growing Community
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of smart investors who trust The Investor Labs.
              Whether you&apos;re buying your dream home or building a
              portfolio, we guide you every step.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/properties"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-dark-amethyst transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:ring-4 hover:ring-white/20"
              >
                <span className="mr-2">Explore Properties</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
