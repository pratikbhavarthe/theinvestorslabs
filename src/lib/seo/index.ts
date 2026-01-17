import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generateSEO({
  title,
  description,
  canonical,
  ogImage = "/og-image.jpg",
  noindex = false,
}: SEOProps): Metadata {
  const siteName = "The Investor Labs";
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    ...(noindex && { robots: "noindex, nofollow" }),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function generatePropertySchema(property: {
  title: string;
  description: string;
  price: number;
  city: string;
  sector: string;
  images: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "INR",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressRegion: property.sector,
      addressCountry: "IN",
    },
    image: property.images,
  };
}
