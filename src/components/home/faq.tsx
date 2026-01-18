"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question:
      "What benefits does The Investor Labs offer compared to regular portals?",
    answer:
      "Strategic acquisitions require more than a search bar. We provide specialized NCR intelligence, best price benchmarking, and end-to-end handholding that regular listing portals don't offer. Our platform is built for high-conversion real estate investment, not just generic browsing.",
  },
  {
    question: "How do you ensure the legal safety of the properties?",
    answer:
      "Our dedicated legal team performs thorough diligence, including seller verification and title clearance, ensuring that every transaction is 100% secure and transparent. We eliminate the risk associated with non-authenticated listings.",
  },
  {
    question: "Does The Investor Labs help with the actual paperwork?",
    answer:
      "Yes. We manage all society paperwork and government registration formalities, making the entire acquisition process completely hassle-free for our clients. We do the running around so you don't have to.",
  },
  {
    question: "How are the properties selected for the 'Elite Selection'?",
    answer:
      "Our 'Elite Selection' is handpicked based on strategic location, investment potential, and architectural excellence. We only feature properties that meet our stringent standards for luxury and performance in Noida and Greater Noida.",
  },
  {
    question: "Which areas do you specialize in?",
    answer:
      "Currently, we focus on the high-performance corridors of Noida and Greater Noida, providing deep-pulse intelligence on the most exclusive residential and commercial assets in these regions.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-dark-amethyst/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg md:text-xl font-semibold text-dark-amethyst group-hover:text-indigo-velvet transition-colors duration-200">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-dark-amethyst/40 group-hover:text-indigo-velvet transition-colors duration-200"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-dark-amethyst/70 leading-relaxed text-base md:text-lg max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-amethyst mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-dark-amethyst/60 text-lg md:text-xl max-w-2xl mx-auto italic">
            &ldquo;Find answers to common questions about securing your
            investment with The Investor Labs.&rdquo;
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
