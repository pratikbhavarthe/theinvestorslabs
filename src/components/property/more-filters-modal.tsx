/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function MoreFiltersModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  // Local State for Filters
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLookingFor, setSelectedLookingFor] = useState<string[]>([]);
  const [selectedTenantProps, setSelectedTenantProps] = useState<string[]>([]);
  const [selectedBHKs, setSelectedBHKs] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string[]>([]);
  const [selectedFurnishing, setSelectedFurnishing] = useState<string[]>([]);
  const [selectedCarpetArea, setSelectedCarpetArea] = useState<string[]>([]);
  const [selectedParking, setSelectedParking] = useState<string[]>([]);
  const [selectedManagedBy, setSelectedManagedBy] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    [],
  );

  // Initialize from URL
  useEffect(() => {
    if (open) {
      const getList = (key: string) => {
        const val = searchParams.get(key);
        return val ? val.split(",") : [];
      };

      setSelectedTypes(getList("type"));
      setSelectedLookingFor(getList("lookingFor"));
      setSelectedTenantProps(getList("tenant"));
      setSelectedBHKs(getList("config"));
      setSelectedBudget(getList("budget"));
      setSelectedFurnishing(getList("furnishing"));
      setSelectedCarpetArea(getList("area"));
      setSelectedParking(getList("parking"));
      setSelectedManagedBy(getList("managedBy"));
      setSelectedAvailability(getList("availability"));
    }
  }, [open, searchParams]);

  const toggleSelection = (
    item: string,
    list: string[],
    setList: (l: string[]) => void,
  ) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleApply = () => {
    const params = new URLSearchParams(searchParams.toString());

    const updateParam = (key: string, list: string[]) => {
      if (list.length > 0) params.set(key, list.join(","));
      else params.delete(key);
    };

    updateParam("type", selectedTypes);
    updateParam("lookingFor", selectedLookingFor);
    updateParam("tenant", selectedTenantProps);
    updateParam("config", selectedBHKs);
    updateParam("budget", selectedBudget);
    updateParam("furnishing", selectedFurnishing);
    updateParam("area", selectedCarpetArea);
    updateParam("parking", selectedParking);
    updateParam("managedBy", selectedManagedBy);
    updateParam("availability", selectedAvailability);

    router.push(`/properties?${params.toString()}`);
    setOpen(false);
  };

  const handleClear = () => {
    setSelectedTypes([]);
    setSelectedLookingFor([]);
    setSelectedTenantProps([]);
    setSelectedBHKs([]);
    setSelectedBudget([]);
    setSelectedFurnishing([]);
    setSelectedCarpetArea([]);
    setSelectedParking([]);
    setSelectedManagedBy([]);
    setSelectedAvailability([]);
  };

  // Filter Data Options
  const propertyTypes = [
    "Apartment",
    "Independent House",
    "Co-Living",
    "Villa",
    "Plot",
  ];
  const lookingForOptions = ["House", "Bed", "Room"];
  const tenantOptions = ["Family", "Boys", "Girls"];
  const bhkOptions = [
    "1 RK / Studio",
    "1 BHK",
    "2 BHK",
    "3 BHK",
    "4 BHK",
    "5 BHK",
    "6 BHK",
  ];
  const budgetOptions = [
    "Below 10K",
    "10K - 20K",
    "20K - 30K",
    "30K - 50K",
    "50K - 1L",
    "Above 1L",
  ]; // Adjusted for Rental scope based on screenshot context, or can be Sale
  const furnishingOptions = [
    "Fully Furnished",
    "Semi-Furnished",
    "Unfurnished",
  ];
  const carpetAreaOptions = [
    "Below 500",
    "500 - 1000",
    "1000 - 1500",
    "1500 - 2000",
    "2000 - 3000",
    "Above 3000+",
  ];
  const parkingOptions = ["Two Wheeler", "Four Wheeler"];
  const managedByOptions = ["Owner", "Agent", "Builder"];
  const availabilityOptions = [
    "Immediate",
    "Within 7 Days",
    "Within 15 Days",
    "More than 15 Days",
  ];

  // Helper for Pill Button
  const FilterPill = ({
    label,
    isSelected,
    onClick,
  }: {
    label: string;
    isSelected: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={cn(
        "px-5 py-2.5 rounded-full text-sm font-medium transition-all border shrink-0 flex items-center gap-2",
        isSelected
          ? "bg-realty-blue/10 border-realty-blue text-realty-blue shadow-sm"
          : "bg-white border-gray-200 text-slate-700 hover:border-gray-400 hover:text-black hover:shadow-sm",
      )}
    >
      {isSelected && <Check className="h-3.5 w-3.5" />}
      {label}
    </button>
  );

  const activeCount =
    selectedTypes.length +
    selectedLookingFor.length +
    selectedTenantProps.length +
    selectedBHKs.length +
    selectedBudget.length +
    selectedFurnishing.length +
    selectedCarpetArea.length +
    selectedParking.length +
    selectedManagedBy.length +
    selectedAvailability.length;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "rounded-full h-10 px-5 font-bold text-sm transition-all shrink-0 bg-white text-ink-navy hover:bg-off-white border-cool-gray shadow-none flex items-center gap-2",
            activeCount > 0 &&
              "bg-realty-blue/5 border-realty-blue text-realty-blue",
          )}
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span>Filters</span>
          {activeCount > 0 && (
            <span className="flex items-center justify-center bg-realty-blue text-white text-[10px] w-5 h-5 rounded-full ml-1">
              {activeCount}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="fixed left-0 top-0 translate-x-0 translate-y-0 w-full h-[100dvh] md:left-[50%] md:top-[50%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:h-auto md:max-h-[85vh] p-0 flex flex-col gap-0 rounded-none md:rounded-2xl overflow-hidden border-0 md:border bg-white z-[60]">
        <DialogHeader className="px-4 py-4 md:px-6 md:pb-4 border-b border-gray-100 bg-white shadow-sm z-10 shrink-0 text-left">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg md:text-xl font-bold text-ink-navy">
              Filters
            </DialogTitle>
            <DialogClose className="rounded-full p-1.5 hover:bg-gray-100 transition-colors -mr-2">
              <X className="h-5 w-5 text-slate-500" />
            </DialogClose>
          </div>
          <p className="text-sm text-slate-500 font-normal mt-1">
            Select multiple options to refine your search.
          </p>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 md:space-y-8 bg-white/50">
          {/* Section: Property Basics */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-gray-900">
                Property Type
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {propertyTypes.map((item) => (
                  <FilterPill
                    key={item}
                    label={item}
                    isSelected={selectedTypes.includes(item)}
                    onClick={() =>
                      toggleSelection(item, selectedTypes, setSelectedTypes)
                    }
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-gray-900">
                Looking For
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {lookingForOptions.map((item) => (
                  <FilterPill
                    key={item}
                    label={item}
                    isSelected={selectedLookingFor.includes(item)}
                    onClick={() =>
                      toggleSelection(
                        item,
                        selectedLookingFor,
                        setSelectedLookingFor,
                      )
                    }
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-gray-900">
                Available For
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {tenantOptions.map((item) => (
                  <FilterPill
                    key={item}
                    label={item}
                    isSelected={selectedTenantProps.includes(item)}
                    onClick={() =>
                      toggleSelection(
                        item,
                        selectedTenantProps,
                        setSelectedTenantProps,
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100 w-full" />

          {/* Section: Configuration */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-gray-900">
                BHK Type
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {bhkOptions.map((item) => (
                  <FilterPill
                    key={item}
                    label={item}
                    isSelected={selectedBHKs.includes(item)}
                    onClick={() =>
                      toggleSelection(item, selectedBHKs, setSelectedBHKs)
                    }
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-gray-900">
                Budget
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {budgetOptions.map((item) => (
                  <FilterPill
                    key={item}
                    label={item}
                    isSelected={selectedBudget.includes(item)}
                    onClick={() =>
                      toggleSelection(item, selectedBudget, setSelectedBudget)
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100 w-full" />

          {/* Section: Details */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-gray-900">
                Furnishing Type
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {furnishingOptions.map((item) => (
                  <FilterPill
                    key={item}
                    label={item}
                    isSelected={selectedFurnishing.includes(item)}
                    onClick={() =>
                      toggleSelection(
                        item,
                        selectedFurnishing,
                        setSelectedFurnishing,
                      )
                    }
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-gray-900">
                Carpet Area (sq. ft.)
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {carpetAreaOptions.map((item) => (
                  <FilterPill
                    key={item}
                    label={item}
                    isSelected={selectedCarpetArea.includes(item)}
                    onClick={() =>
                      toggleSelection(
                        item,
                        selectedCarpetArea,
                        setSelectedCarpetArea,
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100 w-full" />

          {/* Section: Amenities & Others */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-gray-900">
                Parking
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {parkingOptions.map((item) => (
                  <FilterPill
                    key={item}
                    label={item}
                    isSelected={selectedParking.includes(item)}
                    onClick={() =>
                      toggleSelection(item, selectedParking, setSelectedParking)
                    }
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-gray-900">
                Availability
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {availabilityOptions.map((item) => (
                  <FilterPill
                    key={item}
                    label={item}
                    isSelected={selectedAvailability.includes(item)}
                    onClick={() =>
                      toggleSelection(
                        item,
                        selectedAvailability,
                        setSelectedAvailability,
                      )
                    }
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-semibold text-gray-900">
                Managed By
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {managedByOptions.map((item) => (
                  <FilterPill
                    key={item}
                    label={item}
                    isSelected={selectedManagedBy.includes(item)}
                    onClick={() =>
                      toggleSelection(
                        item,
                        selectedManagedBy,
                        setSelectedManagedBy,
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Spacer for bottom safe area on mobile if needed */}
          <div className="h-4 md:hidden" />
        </div>

        <DialogFooter className="p-4 border-t border-gray-100 bg-white flex flex-row justify-between items-center gap-4 z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] shrink-0">
          <Button
            variant="ghost"
            onClick={handleClear}
            className="text-slate-600 hover:text-red-500 font-semibold hover:bg-slate-50 flex-1 md:flex-none"
          >
            Clear All
          </Button>
          <Button
            onClick={handleApply}
            className="bg-realty-blue hover:bg-[#1749C9] text-white px-8 h-11 rounded-full font-bold shadow-lg shadow-realty-blue/20 transition-all active:scale-95 flex-[2] md:flex-none"
          >
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
