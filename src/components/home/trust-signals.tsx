import { Card } from "@/components/ui/card";

export function TrustSignals() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Verified Listings",
      description:
        "All properties are verified and authenticated by our expert team",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Best Price Guarantee",
      description: "Competitive pricing with transparent cost breakdown",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Expert Guidance",
      description: "Professional support throughout your property journey",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Secure Transactions",
      description:
        "Safe and transparent property transactions with legal support",
    },
  ];

  return (
    <section className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="container">
        {/* Section Header - H2: 32-36px */}
        <div className="text-center mb-16">
          <h2 className="text-[2rem] md:text-[2.25rem] font-semibold text-dark-amethyst mb-4 leading-[1.3]">
            Trust built on specialized NCR intelligence.
          </h2>
          <p className="text-[1rem] text-dark-amethyst/60 max-w-2xl mx-auto leading-[1.6]">
            Your trusted partner in finding the perfect property
          </p>
        </div>

        {/* Features Grid - 24-32px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="bg-white border-none shadow-soft hover:shadow-2xl transition-all p-8 flex flex-col items-center text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-velvet/10 text-indigo-velvet rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-[1.25rem] font-semibold text-dark-amethyst mb-2 leading-[1.4]">
                {feature.title}
              </h3>
              <p className="text-[0.9375rem] text-dark-amethyst/60 leading-[1.6]">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
