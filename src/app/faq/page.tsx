"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        question: "What is The Investor Labs?",
        answer:
          "The Investor Labs is a premium real estate marketplace platform specializing in curated property listings in Noida and Greater Noida. We connect buyers, sellers, and investors with verified properties and provide expert consultation throughout the property transaction process.",
      },
      {
        question: "Which areas do you cover?",
        answer:
          "Currently, we focus exclusively on Noida and Greater Noida (Greater Noida), including all sectors and key localities. Our deep local expertise in these markets allows us to provide superior service and insights to our clients.",
      },
      {
        question:
          "How is The Investor Labs different from other property portals?",
        answer:
          "Unlike generic property portals, we offer a curated selection of verified properties, personalized expert consultation, end-to-end transaction support, and exclusive access to premium listings. Our focus on Noida and Greater Noida allows us to provide unmatched local market expertise.",
      },
      {
        question: "Do I need to create an account to browse properties?",
        answer:
          "No, you can browse all property listings without creating an account. However, creating a free account allows you to save favorite properties, receive personalized recommendations, and get instant updates on new listings matching your preferences.",
      },
    ],
  },
  {
    category: "For Buyers",
    questions: [
      {
        question: "How do I search for properties?",
        answer:
          "Use our advanced search feature on the homepage to filter properties by location (sector/locality), property type (flat, villa, plot, commercial), price range, and amenities. You can also browse featured properties or contact our experts for personalized recommendations.",
      },
      {
        question: "Are all properties verified?",
        answer:
          "Yes, all properties listed on The Investor Labs undergo a verification process. However, we strongly recommend conducting your own due diligence, including legal verification of ownership documents, before making any purchase decision.",
      },
      {
        question: "Can I schedule property visits?",
        answer:
          "Absolutely! Click 'Talk to Expert' on any property listing or call us at +91 8800843413 to schedule site visits. Our team will coordinate with property owners and accompany you during visits to provide expert insights.",
      },
      {
        question: "What services do you provide to buyers?",
        answer:
          "We offer comprehensive buyer services including property search assistance, site visit coordination, market analysis, price negotiation support, legal documentation guidance, home loan assistance, and post-purchase support.",
      },
      {
        question: "Do you charge buyers any fees?",
        answer:
          "Our service fees are transparent and communicated upfront. Fees are typically charged upon successful property transaction. Contact our team for detailed fee structure based on your specific requirements.",
      },
      {
        question: "Can you help with home loans?",
        answer:
          "Yes, we work with leading banks and financial institutions to help you secure competitive home loan rates. Our team can guide you through the loan application process and documentation requirements.",
      },
    ],
  },
  {
    category: "For Sellers & Property Owners",
    questions: [
      {
        question: "How can I list my property on The Investor Labs?",
        answer:
          "Property listings are managed by our admin team to ensure quality and accuracy. Contact us at support@theinvestorslab.in or call +91 8800843413 to discuss listing your property. Our team will guide you through the process.",
      },
      {
        question: "What documents do I need to list my property?",
        answer:
          "You'll need property ownership documents (registry/sale deed), latest property tax receipts, NOC from society/builder (if applicable), property photos, and floor plans. Our team will provide a complete checklist during onboarding.",
      },
      {
        question: "How long does it take to list my property?",
        answer:
          "Once you submit all required documents and information, your property will typically be listed within 24-48 hours after verification. Premium listings can be expedited.",
      },
      {
        question: "What are your service charges for sellers?",
        answer:
          "Our service fees are competitive and based on property value and services required. We offer flexible packages including basic listing, premium featured listings, and full-service transaction support. Contact us for a customized quote.",
      },
      {
        question: "Will you help with property photography?",
        answer:
          "Yes, we can arrange professional property photography and videography for premium listings. High-quality visuals significantly improve property visibility and buyer interest.",
      },
      {
        question: "How do you market my property?",
        answer:
          "We use multi-channel marketing including our website, social media, email campaigns to our buyer database, and partnerships with real estate agents. Premium listings receive additional promotion and featured placement.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        question: "How are your service fees calculated?",
        answer:
          "Service fees are determined based on property value, transaction type, and services rendered. All fees are exclusive of applicable taxes (GST). We provide transparent pricing with no hidden charges.",
      },
      {
        question: "When do I need to pay service fees?",
        answer:
          "Service fees are typically payable upon successful property transaction. For certain premium services, advance payment may be required. Detailed payment terms will be communicated before service commencement.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers (NEFT/RTGS/IMPS), UPI payments, and online payment gateways. All payment details and invoices are provided for your records.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Refund policies vary based on the service package and stage of transaction. Please refer to our Terms and Conditions or contact our team for specific refund policy details applicable to your case.",
      },
    ],
  },
  {
    category: "Legal & Documentation",
    questions: [
      {
        question: "Do you provide legal assistance?",
        answer:
          "Yes, we work with experienced real estate lawyers who can assist with property verification, documentation review, and registration processes. Legal services are available as part of our premium packages or separately.",
      },
      {
        question: "What legal documents should I verify before buying?",
        answer:
          "Essential documents include title deed, encumbrance certificate, property tax receipts, approved building plans, NOC from authorities, and society/builder NOC. Our legal team can help verify all documents.",
      },
      {
        question: "Do you assist with property registration?",
        answer:
          "Yes, we provide complete support for property registration including documentation preparation, stamp duty calculation, and coordination with sub-registrar offices in Noida and Greater Noida.",
      },
      {
        question: "What is your role in the transaction?",
        answer:
          "We act as facilitators connecting buyers and sellers. While we provide comprehensive support and guidance, we are not a party to the actual property transaction. The final agreement is between buyer and seller.",
      },
    ],
  },
  {
    category: "Investment & Market Insights",
    questions: [
      {
        question: "Do you provide investment advice?",
        answer:
          "Yes, our team of real estate experts provides market analysis, investment insights, and property recommendations based on your investment goals. We help you make informed decisions with data-driven market intelligence.",
      },
      {
        question: "Which areas in Noida/Greater Noida are best for investment?",
        answer:
          "Investment potential varies based on your goals (rental yield vs capital appreciation), budget, and timeline. Our experts can provide personalized recommendations based on current market trends and upcoming infrastructure developments.",
      },
      {
        question: "Can you help with rental property management?",
        answer:
          "While our primary focus is property transactions, we can connect you with trusted property management services for rental property management, tenant screening, and maintenance coordination.",
      },
      {
        question: "Do you offer market reports?",
        answer:
          "Yes, we regularly publish market insights, price trends, and investment analysis for Noida and Greater Noida. Subscribe to our newsletter or follow us on social media for the latest updates.",
      },
    ],
  },
  {
    category: "Technical & Support",
    questions: [
      {
        question: "How do I contact customer support?",
        answer:
          "You can reach us via email at support@theinvestorslab.in, call us at +91 8800843413, or use the 'Talk to Expert' button on our website. Our team is available during business hours to assist you.",
      },
      {
        question: "What are your business hours?",
        answer:
          "Our office hours are Monday to Saturday, 10:00 AM to 7:00 PM. For urgent queries, you can leave a message and we'll respond within 24 hours.",
      },
      {
        question: "Do you have a mobile app?",
        answer:
          "Our mobile application is currently under development. In the meantime, our website is fully mobile-responsive and provides an excellent browsing experience on all devices.",
      },
      {
        question: "How do I report an issue or provide feedback?",
        answer:
          "We value your feedback! Please email us at support@theinvestorslab.in with your concerns, suggestions, or issues. We strive to respond to all queries within 24 hours.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we take data security seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your consent. Please review our Privacy Policy for complete details.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/faq-hero.png"
          alt="Frequently Asked Questions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-amethyst/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Find answers to common questions about The Investor Labs and our
              real estate services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="max-w-[900px] mx-auto">
          {faqs.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-amethyst mb-8">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openItems[itemId] || false;

                  return (
                    <div
                      key={itemId}
                      className="border border-dust-grey/30 rounded-2xl overflow-hidden bg-white hover:border-indigo-velvet/30 transition-colors duration-200"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left group"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base md:text-lg font-semibold text-dark-amethyst pr-4 group-hover:text-indigo-velvet transition-colors duration-200">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-indigo-velvet" />
                        </motion.div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 pt-0">
                              <p className="text-base text-dark-amethyst/80 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          {/* Contact CTA */}
          <section className="mt-20">
            <div className="bg-indigo-velvet/10 border-l-4 border-indigo-velvet p-8 rounded-r-2xl">
              <h3 className="text-2xl font-bold text-dark-amethyst mb-3">
                Still have questions?
              </h3>
              <p className="text-base text-dark-amethyst/80 leading-relaxed mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our expert
                team is here to help you with any questions about properties,
                investments, or our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918800843413"
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-velvet text-white font-medium rounded-xl hover:bg-dark-amethyst transition-colors duration-200"
                >
                  Call +91 8800843413
                </a>
                <a
                  href="mailto:support@theinvestorslab.in"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-velvet text-indigo-velvet font-medium rounded-xl hover:bg-indigo-velvet hover:text-white transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
