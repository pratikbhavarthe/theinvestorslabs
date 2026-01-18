"use client";

import { Button } from "@/components/ui/button";
import { Phone, Calendar, Share2, Heart, User } from "lucide-react";
import { Property } from "@/types/property";

interface StickyContactCardProps {
  property: Property;
}

export function StickyContactCard({ property }: StickyContactCardProps) {
  return (
    <div className="sticky top-32 space-y-6">
      <div className="bg-white rounded-3xl p-8 shadow-card border border-dark-amethyst/10 space-y-8">
        {/* Price & Primary Status */}
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-indigo-velvet uppercase tracking-widest bg-indigo-velvet/10 px-3 py-1 rounded-full w-fit">
              Investment Range
            </span>
            <div className="text-2xl font-bold text-dark-amethyst tracking-tight">
              ₹ {property.pricePrefix || property.price}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-dark-amethyst/10">
            <div>
              <span className="text-[10px] font-bold text-dark-amethyst/60 uppercase tracking-wider">
                Configuration
              </span>
              <div className="text-sm font-bold text-dark-amethyst">
                {property.type || property.config}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-dark-amethyst/60 uppercase tracking-wider">
                Area
              </span>
              <div className="text-sm font-bold text-dark-amethyst">
                {property.size || property.area}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Schedule Visit
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Save
          </Button>
        </div>

        <div className="flex items-center gap-3 p-4 bg-indigo-velvet/10 rounded-xl">
          <User className="w-5 h-5 text-indigo-velvet" />
          <div className="flex-1">
            <div className="text-[10px] font-bold text-indigo-velvet uppercase tracking-wider">
              Need Expert Advice?
            </div>
            <div className="text-[9px] text-indigo-velvet/60 uppercase tracking-widest">
              Connect with our property advisors
            </div>
          </div>
          <Button size="sm" className="bg-indigo-velvet text-white">
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
}
