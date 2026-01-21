"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { PartnerForm } from "@/components/partner/partner-form";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Role = "channel-partner" | "developer" | "investor";

export function PartnerContent() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT PANEL: Sticky Brand Promise */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 xl:p-20 bg-indigo-velvet text-white h-screen sticky top-0 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20">
          <DotPattern
            width={32}
            height={32}
            cx={1}
            cy={1}
            cr={1}
            className="text-white/20"
          />
        </div>

        {/* Top: Logo / Brand */}
        <div className="z-10">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6">
            <div className="w-1.5 h-1.5 bg-honeydew rounded-full" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
            The Investor Labs
          </span>
        </div>

        {/* Center: Main Statement */}
        <div className="z-10 max-w-xl">
          <h1 className="text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            Collaborate <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-honeydew to-white">
              with Excellence.
            </span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed font-light">
            We are building the definitive real estate ecosystem in NCR. A
            private network for those who demand precision, speed, and trust.
          </p>
        </div>

        {/* Bottom: Segmentation */}
        <div className="z-10 flex gap-8 text-sm font-medium text-white/40 uppercase tracking-widest">
          <span>For Agents</span>
          <span>For Developers</span>
          <span>For Investors</span>
        </div>
      </div>

      {/* RIGHT PANEL: scrollable Interface */}
      <div className="flex flex-col justify-center min-h-screen bg-white p-6 md:p-12 xl:p-24 overflow-y-auto">
        <div className="max-w-xl mx-auto w-full py-12 lg:py-0">
          {/* Mobile Header (Visible only on small screens) */}
          <div className="lg:hidden mb-12">
            <h1 className="text-4xl font-bold text-dark-amethyst mb-4">
              Partner <br /> with Excellence.
            </h1>
            <p className="text-dark-amethyst/60">Select your role to begin.</p>
          </div>

          <div className="space-y-12">
            {/* 1. Role Selection List */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-dark-amethyst/40 mb-6">
                Select your profile
              </h2>
              <div className="space-y-2">
                <RoleItem
                  label="Channel Partner"
                  role="channel-partner"
                  selected={selectedRole === "channel-partner"}
                  onClick={handleRoleSelect}
                  isRecommended
                />
                <RoleItem
                  label="Real Estate Developer"
                  role="developer"
                  selected={selectedRole === "developer"}
                  onClick={handleRoleSelect}
                />
                <RoleItem
                  label="Institutional Investor"
                  role="investor"
                  selected={selectedRole === "investor"}
                  onClick={handleRoleSelect}
                />
              </div>
            </section>

            {/* 2. Contextual Benefits (Animated) */}
            <AnimatePresence mode="wait">
              {selectedRole && (
                <motion.section
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-honeydew/30 rounded-2xl p-8 border border-dark-amethyst/5"
                >
                  <h3 className="text-lg font-bold text-dark-amethyst mb-4">
                    {selectedRole === "channel-partner" &&
                      "Why Top Agents Join Us"}
                    {selectedRole === "developer" &&
                      "Developer Partnership Benefits"}
                    {selectedRole === "investor" && "Investor Advantages"}
                  </h3>
                  <ul className="space-y-3">
                    {selectedRole === "channel-partner" && (
                      <>
                        <BenefitItem text="Industry-leading commission structures (up to 30% higher)." />
                        <BenefitItem text="Access to pre-launch inventory before market release." />
                        <BenefitItem text="Guaranteed payout timelines within 48 hours of disbursement." />
                      </>
                    )}
                    {selectedRole === "developer" && (
                      <>
                        <BenefitItem text="Rapid sales velocity through our vetted partner network." />
                        <BenefitItem text="Strategic brand positioning for premium projects." />
                        <BenefitItem text="End-to-end mandate management." />
                      </>
                    )}
                    {selectedRole === "investor" && (
                      <>
                        <BenefitItem text="Curated high-yield assets with legal due diligence." />
                        <BenefitItem text="Data-driven market entry and exit strategies." />
                        <BenefitItem text="Exclusive bulk-deal opportunities." />
                      </>
                    )}
                  </ul>
                </motion.section>
              )}
            </AnimatePresence>

            {/* 3. The Form */}
            <AnimatePresence>
              {selectedRole && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="pt-8 border-t border-dark-amethyst/10">
                    <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-dark-amethyst/40 mb-8">
                      Complete Application
                    </h2>
                    <PartnerForm selectedRole={selectedRole} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 4. Have Inventory CTA */}
            <section className="pt-8">
              <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-honeydew via-white to-white border border-indigo-velvet/10 p-8">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-dark-amethyst mb-2">
                    Have An Inventory?
                  </h3>
                  <p className="text-dark-amethyst/60 mb-6 text-sm leading-relaxed max-w-sm">
                    &quot;Let us help you sell faster with our ultra-exclusive
                    network.&quot;
                  </p>
                  <button className="bg-indigo-velvet text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-dark-amethyst transition-colors">
                    List with Us
                  </button>
                </div>
                {/* Decorative Circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-velvet/5 rounded-full blur-3xl" />
              </div>
            </section>

            {/* 5. FAQs */}
            <section className="pt-8 pb-20">
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-dark-amethyst/40 mb-8">
                Common Queries
              </h2>
              <div className="space-y-4">
                <FAQItem
                  question="What are the prerequisites for joining as a Channel Partner?"
                  answer="We look for a track record of high-value transactions and a commitment to ethical practices. RERA registration is mandatory."
                />
                <FAQItem
                  question="How are commissions structured and paid?"
                  answer="Our partners enjoy significantly higher slabs than market standard. Payouts are processed within 48 hours of client disbursement, guaranteed."
                />
                <FAQItem
                  question="Do you provide marketing collateral for projects?"
                  answer="Yes. You receive white-labeled, high-definition assets (renders, videos, brochures) for all our exclusive mandates."
                />
                <FAQItem
                  question="Is there an onboarding fee?"
                  answer="Membership to The Investor Labs network is by invitation or application only. There is no joining fee, but strict performance metrics apply."
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleItem({
  label,
  role,
  selected,
  onClick,
  isRecommended,
}: {
  label: string;
  role: Role;
  selected: boolean;
  onClick: (r: Role) => void;
  isRecommended?: boolean;
}) {
  return (
    <button
      onClick={() => onClick(role)}
      className={cn(
        "w-full text-left py-6 px-6 relative rounded-xl transition-all duration-300 border flex items-center justify-between group",
        selected
          ? "bg-dark-amethyst text-white border-dark-amethyst shadow-lg"
          : "bg-white border-dark-amethyst/10 text-dark-amethyst hover:border-indigo-velvet/50 hover:bg-honeydew/20",
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-3 h-3 rounded-full transition-colors",
            selected
              ? "bg-indigo-velvet"
              : "bg-dark-amethyst/20 group-hover:bg-indigo-velvet/50",
          )}
        />
        <span className="text-xl font-medium tracking-tight">{label}</span>
        {isRecommended && !selected && (
          <span className="ml-2 text-[10px] font-bold uppercase tracking-wider bg-indigo-velvet/10 text-indigo-velvet px-2 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      <ArrowRight
        className={cn(
          "w-5 h-5 transition-transform duration-300",
          selected
            ? "text-white translate-x-0"
            : "text-dark-amethyst/30 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0",
        )}
      />
    </button>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-dark-amethyst/70 text-sm leading-relaxed">
      <CheckCircle2 className="w-5 h-5 text-indigo-velvet shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dark-amethyst/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 text-left flex justify-between items-center group"
      >
        <span className="font-medium text-dark-amethyst group-hover:text-indigo-velvet transition-colors">
          {question}
        </span>
        <span
          className={cn(
            "text-xl font-light text-indigo-velvet transition-transform duration-300",
            isOpen ? "rotate-45" : "rotate-0",
          )}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-dark-amethyst/60 pb-6 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
