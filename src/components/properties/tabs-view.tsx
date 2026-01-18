"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Property } from "@/types/property";

interface PropertyTabsViewProps {
  property: Property;
}

export function PropertyTabsView({ property }: PropertyTabsViewProps) {
  const [activeTab, setActiveTab] = useState<"home" | "society" | "insights">(
    "home",
  );

  const tabs = [
    {
      id: "home",
      label: "About Home",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: "society",
      label: "About Society",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"
          />
        </svg>
      ),
    },
    {
      id: "insights",
      label: "Tools & Insights",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  const highlights = property.highlights || [
    "RERA Approved",
    "Kids & Elderly friendly",
    "Bank Approved",
    "Full sports facilities",
    "Piped gas & 24/7 water",
  ];

  return (
    <div className="space-y-10">
      {/* Tabs Selector */}
      <div className="flex flex-wrap items-center gap-2 p-2 bg-white rounded-2xl w-full md:w-fit shadow-soft border border-dark-amethyst/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-8 py-3.5 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-3 ${
              activeTab === tab.id
                ? "bg-indigo-velvet text-white shadow-lg"
                : "text-dark-amethyst/60 hover:text-dark-amethyst"
            }`}
          >
            <span className="text-sm">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-dark-amethyst/10">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-dark-amethyst">
                  Why Buy this home?
                </h3>
                <div className="space-y-5">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-indigo-velvet/5 text-indigo-velvet flex items-center justify-center shrink-0 border border-indigo-velvet/10 group-hover:scale-110 transition-transform">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-lg font-medium text-dark-amethyst/80">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8 lg:border-l lg:border-dark-amethyst/10 lg:pl-16">
                <h3 className="text-2xl font-bold text-dark-amethyst">
                  Why buy from us
                </h3>
                <div className="space-y-5">
                  {["Legally Verified", "100% transparent and genuine"].map(
                    (h, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-indigo-velvet/5 text-indigo-velvet flex items-center justify-center shrink-0 border border-indigo-velvet/10 group-hover:scale-110 transition-transform">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-lg font-medium text-dark-amethyst/80">
                          {h}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {(activeTab === "society" || activeTab === "insights") && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-3xl"
            >
              <p className="text-2xl md:text-3xl text-dark-amethyst/80 leading-relaxed font-light italic">
                &quot;
                {activeTab === "society"
                  ? property.societyDescription
                  : "Detailed investment insights and market trends for this locality will be available soon in our premium report."}
                &quot;
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
