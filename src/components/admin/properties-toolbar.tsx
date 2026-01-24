"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Search, SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function PropertiesToolbar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm lg:flex-row lg:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by title, sector or locality..."
          className="pl-10 h-10 bg-background"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Select
          onValueChange={(val) => handleFilterChange("status", val)}
          defaultValue={searchParams.get("status") || "all"}
        >
          <SelectTrigger className="w-[140px] h-10">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Available">Available</SelectItem>
            <SelectItem value="Sold">Sold</SelectItem>
            <SelectItem value="Coming Soon">Coming Soon</SelectItem>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(val) => handleFilterChange("city", val)}
          defaultValue={searchParams.get("city") || "all"}
        >
          <SelectTrigger className="w-[140px] h-10">
            <SelectValue placeholder="All Cities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cities</SelectItem>
            <SelectItem value="Noida">Noida</SelectItem>
            <SelectItem value="Greater Noida">Greater Noida</SelectItem>
          </SelectContent>
        </Select>

        <div className="bg-muted p-1 rounded-md flex items-center gap-1 border">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8 rounded-sm transition-all",
              !searchParams.get("view") || searchParams.get("view") === "list"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:bg-background/50",
            )}
            onClick={() => handleFilterChange("view", "list")}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8 rounded-sm transition-all",
              searchParams.get("view") === "grid"
                ? "bg-background shadow-sm text-foreground"
                : "text-muted-foreground hover:bg-background/50",
            )}
            onClick={() => handleFilterChange("view", "grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
