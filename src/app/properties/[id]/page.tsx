"use client";

import { use } from "react";
import Link from "next/link";
import { ALL_PROPERTIES } from "@/lib/data/properties";
import { notFound } from "next/navigation";
import { PropertyGallery } from "@/components/properties/gallery";
import { UnitDetailsCard } from "@/components/properties/unit-details-card";
import { PropertyTabsView } from "@/components/properties/tabs-view";
import { AmenitiesShowcase } from "@/components/properties/amenities-showcase";
import { LocalityHighlights } from "@/components/properties/locality-highlights";

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const property = ALL_PROPERTIES.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-32 font-sans">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        {/* Navigation & Breadcrumbs */}
        <div className="mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-blackish-indigo/40 hover:text-blackish-indigo transition-colors group w-fit"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Back to Gallery
            </span>
          </Link>
        </div>

        <div className="space-y-12">
          {/* 1. Gallery Section */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <PropertyGallery
              images={property.images}
              title={property.title}
              videoUrl={property.videoUrl}
            />
          </div>

          {/* 2. Master Info Card (Reference Layout) */}
          <UnitDetailsCard property={property} />

          {/* 3. Additional Details */}
          <div className="space-y-12">
            <PropertyTabsView property={property} />
            <AmenitiesShowcase property={property} />
            <LocalityHighlights property={property} />
          </div>
        </div>
      </div>
    </main>
  );
}
