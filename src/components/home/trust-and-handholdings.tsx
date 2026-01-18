"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  IndianRupee,
  Scale,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const TRUST_DATA = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "All properties are verified and authenticated by our expert team to ensure complete property intelligence.",
    features: ["Authentic Imagery", "Site Verification", "Agent Background"],
  },
  {
    icon: IndianRupee,
    title: "Best Price Ensured",
    description:
      "Strategic negotiation and benchmarking to ensure you secure assets at the most competitive rates.",
    features: ["Price Benchmarking", "Seller Pre-negotiations"],
  },
  {
    icon: Scale,
    title: "Full Legal Assurance",
    description:
      "A dedicated legal layer guarding your acquisitions from diligence to title clearance.",
    features: ["Legal Diligence", "Seller Verifications", "Title Clearance"],
  },
  {
    icon: Sparkles,
    title: "Transparent & Hassle Free",
    description:
      "We handle the complexities of paperwork and logistics so you focus on the vision.",
    features: [
      "Hassle-free visits",
      "Society Paperwork",
      "Registration Paperwork",
    ],
  },
];

export function TrustAndHandholdings() {
  return (
    <section className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-baseline justify-between gap-10 mb-24 border-b border-dark-amethyst/10 pb-12">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-velvet mb-6 block">
              Our Handholdings
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-amethyst leading-[1.1] tracking-tight">
              Trust built on specialized NCR intelligence.
            </h2>
          </div>
          <p className="text-dark-amethyst/60 text-lg md:text-xl font-medium lg:max-w-sm italic">
            &ldquo;Your trusted partner in finding the perfect property. We do
            all the running around for you.&rdquo;
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {TRUST_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col group"
            >
              <div className="w-14 h-14 bg-honeydew rounded-full flex items-center justify-center text-indigo-velvet mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-dark-amethyst mb-4 tracking-tight">
                {item.title}
              </h3>

              <p className="text-dark-amethyst/60 text-sm leading-relaxed mb-8">
                {item.description}
              </p>

              <ul className="space-y-4 pt-8 border-t border-dark-amethyst/5">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-dark-amethyst/70"
                  >
                    <CheckCircle2
                      className="w-3.5 h-3.5 text-indigo-velvet"
                      strokeWidth={2}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
