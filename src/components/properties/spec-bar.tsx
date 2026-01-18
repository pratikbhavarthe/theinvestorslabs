"use client";

import { Property } from "@/types/property";

interface SpecBarProps {
  property: Property;
}

export function PropertySpecBar({ property }: SpecBarProps) {
  return (
    <div className="w-full bg-honeydew rounded-3xl p-8 md:p-10 flex flex-wrap lg:flex-nowrap gap-10 lg:gap-0 justify-between items-center shadow-soft border border-dark-amethyst/5">
      {/* Unit ID */}
      <div className="flex-1 min-w-[160px] space-y-1.5 border-l-4 border-indigo-velvet pl-6">
        <span className="text-[10px] md:text-xs font-bold text-dark-amethyst/60 uppercase tracking-[0.2em]">
          Unit {property.specs.unitNumber?.split(" ")[0]}
        </span>
        <p className="text-xl md:text-2xl font-bold text-dark-amethyst tracking-tight">
          {property.specs.unitNumber?.split(" ")[1] ||
            property.specs.unitNumber}
        </p>
      </div>

      <div className="hidden lg:block w-px h-16 bg-dark-amethyst/20" />

      {/* Super Area */}
      <div className="flex-1 min-w-[160px] space-y-1.5 lg:pl-16">
        <span className="text-[10px] md:text-xs font-bold text-dark-amethyst/60 uppercase tracking-[0.2em]">
          Super Area
        </span>
        <p className="text-xl md:text-2xl font-bold text-dark-amethyst tracking-tight">
          {property.area}
        </p>
      </div>

      <div className="hidden lg:block w-px h-16 bg-dark-amethyst/20" />

      {/* Price */}
      <div className="flex-1 min-w-[160px] space-y-1.5 lg:pl-16">
        <span className="text-[10px] md:text-xs font-bold text-dark-amethyst/60 uppercase tracking-[0.2em]">
          Investment Value
        </span>
        <p className="text-2xl md:text-3xl font-bold text-dark-amethyst tracking-tighter">
          {property.price}
        </p>
      </div>
    </div>
  );
}
