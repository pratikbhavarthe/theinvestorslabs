import { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { TrustSignals } from "@/components/home/trust-signals";
import { LeadForm } from "@/components/home/lead-form";
import { getFeaturedProperties } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "The Investor Labs | Premium Real Estate in Noida & Gurgaon",
  description:
    "Discover premium residential and commercial properties in Noida and Gurgaon. Expert guidance, verified listings, and seamless transactions. Find your dream property today.",
  keywords: [
    "real estate",
    "property",
    "Noida",
    "Gurgaon",
    "buy property",
    "sell property",
    "residential",
    "commercial",
  ],
  openGraph: {
    title: "The Investor Labs | Premium Real Estate in Noida & Gurgaon",
    description:
      "Discover premium residential and commercial properties in Noida and Gurgaon.",
    type: "website",
    url: "https://theinvestorlabs.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Investor Labs | Premium Real Estate",
    description: "Discover premium properties in Noida & Gurgaon",
  },
};

export default async function HomePage() {
  // Fetch featured properties server-side
  const featuredPropertiesRaw = await getFeaturedProperties(6);

  // Transform to match component props (handle nullable images)
  const featuredProperties = featuredPropertiesRaw.map((prop) => ({
    ...prop,
    images: prop.images || [],
  }));

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties */}
      {featuredProperties.length > 0 && (
        <FeaturedProperties properties={featuredProperties} />
      )}

      {/* Trust Signals */}
      <TrustSignals />

      {/* Lead Form Section */}
      <section className="section bg-neutral-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Get in touch with our experts today
            </p>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
