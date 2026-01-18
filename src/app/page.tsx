import { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Introduction } from "@/components/home/introduction";
import { PropertyQuickActions } from "@/components/home/property-quick-actions";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { JourneyCTA } from "@/components/home/journey-cta";
import { TrustAndHandholdings } from "@/components/home/trust-and-handholdings";
import { FAQ } from "@/components/home/faq";
import { LeadForm } from "@/components/home/lead-form";
import { getFeaturedProperties } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "The Investor Labs | Premium Real Estate in Noida & Greater Noida",
  description:
    "Discover premium residential and commercial properties in Noida and Greater Noida. Expert guidance, verified listings, and seamless transactions. Find your dream property today.",
  keywords: [
    "real estate",
    "property",
    "Noida",
    "Greater Noida",
    "buy property",
    "sell property",
    "residential",
    "commercial",
  ],
  openGraph: {
    title: "The Investor Labs | Premium Real Estate in Noida & Greater Noida",
    description:
      "Discover premium residential and commercial properties in Noida and Greater Noida.",
    type: "website",
    url: "https://theinvestorlabs.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Investor Labs | Premium Real Estate",
    description: "Discover premium properties in Noida & Greater Noida",
  },
};

export default async function HomePage() {
  // Fetch featured properties server-side
  const featuredPropertiesRaw = await getFeaturedProperties(6);

  // Transform to match component props (mapping DB fields to component interface)
  const featuredProperties = featuredPropertiesRaw.map((prop) => ({
    id: prop.id,
    title: prop.title,
    city: prop.city,
    locality: prop.sector, // Map DB sector to locality
    pricePrefix: prop.price.toString(), // Map DB price to pricePrefix
    type: prop.propertyType, // Map DB propertyType to type
    images: prop.images || [],
  }));

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <Introduction />

      {/* Quick Actions Section */}
      <PropertyQuickActions />

      {/* Featured Properties */}
      {featuredProperties.length > 0 && (
        <FeaturedProperties properties={featuredProperties} />
      )}

      {/* Smart CTA Journey */}
      <JourneyCTA />

      {/* Trust & Handholdings Integrated */}
      <TrustAndHandholdings />

      {/* FAQ Section */}
      <FAQ />

      {/* Lead Form Section */}
      <LeadForm />
    </main>
  );
}
