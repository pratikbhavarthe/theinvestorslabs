"use client";

import { useUser, SignInButton } from "@clerk/nextjs";
import { toast } from "sonner";
import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Share2,
  MapPin,
  BedDouble,
  Move,
  CheckCircle2,
  User,
} from "lucide-react";
import { Property } from "@/lib/db/schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PropertyCardHorizontalProps {
  property: Property;
}

export function PropertyCardHorizontal({
  property,
}: PropertyCardHorizontalProps) {
  const { isSignedIn } = useUser();
  const [isSaved, setIsSaved] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsSaved(!isSaved);
    if (!isSaved) {
      toast.success("Added to Wishlist", {
        description: "Property saved successfully.",
      });
    } else {
      toast.info("Removed from Wishlist");
    }
  };

  const formattedPrice = (property.price / 10000000).toFixed(2) + " Cr";
  const postedDate = new Date(property.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "2-digit",
  });

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl hover:shadow-realty-blue/10 border border-cool-gray overflow-hidden flex flex-col md:flex-row h-auto min-h-[260px] transition-all duration-300 relative">
      {/* 1. Image Section */}
      <div className="relative w-full md:w-[280px] h-64 md:h-auto shrink-0 bg-off-white overflow-hidden self-stretch">
        <Image
          src={
            property.images?.[0] ||
            "https://images.unsplash.com/photo-1600596542815-e3287011efaa?q=80&w=1000"
          }
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-navy/60 via-transparent to-transparent opacity-50" />

        {/* Featured Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {property.featured && (
            <Badge className="bg-muted-amber text-ink-navy border-none px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider shadow-sm flex items-center gap-1">
              Featured
            </Badge>
          )}
        </div>

        {/* Date Bottom */}
        <div className="absolute bottom-0 left-0 w-full bg-deep-estate/80 backdrop-blur-md px-3 py-1.5 flex justify-between items-center text-white/90 z-10">
          <span className="text-[10px] font-medium tracking-wide">
            Posted: {postedDate}
          </span>
          <span className="text-[10px] flex items-center gap-1">
            <User className="h-3 w-3" /> Agent
          </span>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="flex-1 flex flex-col p-5 md:p-6 relative justify-between">
        <div>
          {/* Wishlist/Share - Absolute Top Right */}
          <div className="absolute top-5 right-5 flex gap-2 z-20">
            {isSignedIn ? (
              <button
                onClick={handleWishlistClick}
                className={cn(
                  "p-1.5 rounded-full transition-colors outline-none",
                  isSaved
                    ? "bg-red-50 text-red-600 hover:bg-red-100"
                    : "hover:bg-skyline-blue text-slate-gray hover:text-realty-blue bg-white/80 backdrop-blur-sm",
                )}
                title={isSaved ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart className={cn("h-5 w-5", isSaved && "fill-current")} />
              </button>
            ) : (
              <SignInButton mode="modal">
                <button
                  className="p-1.5 hover:bg-skyline-blue rounded-full text-slate-gray hover:text-realty-blue transition-colors outline-none bg-white/80 backdrop-blur-sm"
                  title="Login to Save"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <Heart className="h-5 w-5" />
                </button>
              </SignInButton>
            )}
            <button
              className="p-1.5 hover:bg-skyline-blue rounded-full text-slate-gray hover:text-realty-blue transition-colors outline-none bg-white/80 backdrop-blur-sm"
              title="Share"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>

          {/* Header */}
          <div className="pr-16 mb-4">
            <h3
              className="text-xl font-bold text-ink-navy group-hover:text-realty-blue transition-colors cursor-pointer leading-tight mb-2"
              title={property.title}
            >
              {property.configuration || property.propertyType} in{" "}
              {property.sector || property.city}
            </h3>
            <p
              className="text-sm text-slate-gray font-medium flex items-start gap-1.5 leading-snug"
              title={`${property.city}, ${property.address || property.sector}`}
            >
              <MapPin className="h-4 w-4 text-slate-gray shrink-0 mt-0.5" />
              <span className="line-clamp-2 md:line-clamp-none">
                {property.city}, {property.address || property.sector}
                {/* Fake longer text for testing if needed, but data comes from property */}
              </span>
            </p>
          </div>

          {/* Specs Row */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 mb-6 text-sm text-ink-navy">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase text-slate-gray font-bold tracking-wider">
                Area
              </span>
              <span className="font-bold flex items-center gap-1.5">
                <Move className="h-3.5 w-3.5 text-realty-blue" />
                {property.superArea || "N/A"}
              </span>
            </div>
            <div className="w-px h-8 bg-cool-gray"></div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase text-slate-gray font-bold tracking-wider">
                Furnishing
              </span>
              <span className="font-bold flex items-center gap-1.5">
                <BedDouble className="h-3.5 w-3.5 text-realty-blue" />
                {property.furnishing || "Unfurnished"}
              </span>
            </div>
            <div className="w-px h-8 bg-cool-gray"></div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase text-slate-gray font-bold tracking-wider">
                Status
              </span>
              <span className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-realty-blue" />
                {property.status}
              </span>
            </div>
          </div>
        </div>

        {/* Footer: Price vs Actions */}
        <div className="mt-auto pt-4 border-t border-cool-gray flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Price */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink-navy">
              ₹{formattedPrice}
            </h2>
            <span className="text-[11px] text-slate-gray font-medium">
              ₹12,500/sqft approx.
            </span>
          </div>

          {/* Actions (Realty Blue System) */}
          <div className="flex gap-3 w-full md:w-auto">
            {/* Secondary: Agent */}
            <Button
              variant="outline"
              className="flex-1 md:flex-none border-realty-blue text-realty-blue hover:bg-skyline-blue font-bold h-11 px-6 rounded-lg transition-all"
            >
              Contact Agent
            </Button>
            {/* Primary: View (or Search/View as per prompt) - wait, prompt says Primary is Search/View, Secondary is Contact.
                  But logically, Contact is 'Primary' for conversion? 
                  The prompt says: "Primary Action (Search / View Details)... Secondary Action (Contact Agent) Border..."
                  Okay, I will follow the visual guide. View Details = Solid Blue. Contact = Border Blue.
              */}
            <Button className="flex-1 md:flex-none bg-realty-blue hover:bg-[#1749C9] text-white font-bold h-11 px-6 rounded-lg shadow-md shadow-realty-blue/20 transition-all">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
