"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function PropertiesFilterBar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.get(key);

    if (!current) {
      params.set(key, value);
    } else {
      const values = current.split(",");
      if (values.includes(value)) {
        const newValues = values.filter((v) => v !== value);
        if (newValues.length === 0) params.delete(key);
        else params.set(key, newValues.join(","));
      } else {
        params.set(key, [...values, value].join(","));
      }
    }
    router.push(`/properties?${params.toString()}`);
  };

  const isSelected = (key: string, value: string) => {
    const current = searchParams.get(key);
    if (!current) return false;
    return current.split(",").includes(value);
  };

  const currentType = searchParams.get("type");
  const currentConfig = searchParams.get("config");
  const currentBudget = searchParams.get("budget");

  const propertyTypes = ["Flat", "Villa", "Plot", "Commercial", "Office Space"];
  const bhkTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];
  const budgetRanges = [
    "< 50 Lac",
    "50L - 1 Cr",
    "1 Cr - 2 Cr",
    "2 Cr - 5 Cr",
    "> 5 Cr",
  ];

  return (
    <div className="flex items-center gap-3">
      {/* Property Type Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "rounded-full h-10 px-5 font-bold text-sm transition-all shrink-0 bg-white text-ink-navy hover:bg-off-white border-cool-gray shadow-none",
              currentType &&
                "bg-skyline-blue text-realty-blue border-realty-blue/20 hover:bg-skyline-blue/80",
            )}
          >
            Property Type
            <ChevronDown
              className={cn(
                "ml-2 h-4 w-4 opacity-70",
                currentType ? "text-realty-blue" : "text-slate-gray",
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-72 p-2 rounded-xl shadow-xl border-cool-gray bg-white mt-2 z-[100]"
        >
          <div className="bg-skyline-blue/30 rounded-lg p-2 mb-2">
            <DropdownMenuLabel className="text-[10px] text-realty-blue font-bold uppercase tracking-widest mb-2 px-1">
              Residential
            </DropdownMenuLabel>
            <div className="grid grid-cols-1 gap-1">
              {propertyTypes.slice(0, 3).map((type) => (
                <DropdownMenuCheckboxItem
                  key={type}
                  checked={isSelected("type", type)}
                  onCheckedChange={() => updateFilter("type", type)}
                  className="rounded-md cursor-pointer py-2 px-3 hover:bg-white data-[highlighted]:bg-white data-[highlighted]:text-realty-blue font-medium text-ink-navy transition-colors"
                >
                  {type === "Flat" ? "Apartment" : type}
                </DropdownMenuCheckboxItem>
              ))}
            </div>
          </div>
          <div className="px-2">
            <DropdownMenuLabel className="text-[10px] text-slate-gray font-bold uppercase tracking-widest mb-2 px-1">
              Commercial
            </DropdownMenuLabel>
            <div className="grid grid-cols-1 gap-1">
              {propertyTypes.slice(3).map((type) => (
                <DropdownMenuCheckboxItem
                  key={type}
                  checked={isSelected("type", type)}
                  onCheckedChange={() => updateFilter("type", type)}
                  className="rounded-md cursor-pointer py-2 px-3 hover:bg-skyline-blue data-[highlighted]:bg-skyline-blue data-[highlighted]:text-realty-blue font-medium text-ink-navy transition-colors"
                >
                  {type}
                </DropdownMenuCheckboxItem>
              ))}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* BHK Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "rounded-full h-10 px-5 font-bold text-sm transition-all shrink-0 bg-white text-ink-navy hover:bg-off-white border-cool-gray shadow-none",
              currentConfig &&
                "bg-skyline-blue text-realty-blue border-realty-blue/20 hover:bg-skyline-blue/80",
            )}
          >
            BHK
            <ChevronDown
              className={cn(
                "ml-2 h-4 w-4 opacity-70",
                currentConfig ? "text-realty-blue" : "text-slate-gray",
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-48 p-2 rounded-xl shadow-xl border-cool-gray bg-white mt-2 z-[100]"
        >
          {bhkTypes.map((bhk) => (
            <DropdownMenuCheckboxItem
              key={bhk}
              checked={isSelected("config", bhk)}
              onCheckedChange={() => updateFilter("config", bhk)}
              className="rounded-md cursor-pointer py-2 px-3 hover:bg-skyline-blue data-[highlighted]:bg-skyline-blue data-[highlighted]:text-realty-blue font-medium text-ink-navy"
            >
              {bhk}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Budget Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "rounded-full h-10 px-5 font-bold text-sm transition-all shrink-0 bg-white text-ink-navy hover:bg-off-white border-cool-gray shadow-none",
              currentBudget &&
                "bg-skyline-blue text-realty-blue border-realty-blue/20 hover:bg-skyline-blue/80",
            )}
          >
            Budget
            <ChevronDown
              className={cn(
                "ml-2 h-4 w-4 opacity-70",
                currentBudget ? "text-realty-blue" : "text-slate-gray",
              )}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-56 p-2 rounded-xl shadow-xl border-cool-gray bg-white mt-2 z-[100]"
        >
          {budgetRanges.map((budget) => (
            <DropdownMenuCheckboxItem
              key={budget}
              checked={isSelected("budget", budget)}
              onCheckedChange={() => updateFilter("budget", budget)}
              className="rounded-md cursor-pointer py-2 px-3 hover:bg-skyline-blue data-[highlighted]:bg-skyline-blue data-[highlighted]:text-realty-blue font-medium text-ink-navy"
            >
              {budget}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Clear Filters */}
      {(currentType || currentConfig || currentBudget) && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push("/properties")}
          className="text-slate-gray hover:text-realty-blue hover:bg-skyline-blue rounded-full h-10 px-4 shrink-0 font-bold"
        >
          <X className="h-4 w-4 mr-1" /> Clear
        </Button>
      )}
    </div>
  );
}
