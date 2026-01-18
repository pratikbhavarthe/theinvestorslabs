import Link from "next/link";
import { Plus, Search, SlidersHorizontal } from "lucide-react";
import { PropertiesTable } from "@/components/admin/properties-table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: string;
  title: string;
  city: string;
  sector: string;
  price: number;
  propertyType: string;
  status: string;
  featured: boolean;
}

export default async function PropertiesPage() {
  // TODO: Fetch properties from core database layer
  const properties: Property[] = [];

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      {/* Header Section */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight text-dark-amethyst">
            Properties Portfolio
          </h1>
          <p className="text-dark-amethyst/60">
            Overview and management of listed assets across Noida & Greater Noida.
          </p>
        </div>
        <Button
          asChild
          className="bg-indigo-velvet hover:bg-dark-amethyst shadow-lg shadow-indigo-velvet/20"
        >
          <Link href="/admin/properties/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Link>
        </Button>
      </div>

      {/* Stats Overview - Optional for Properties Page, but adds context */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-dust-grey/20 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-dark-amethyst/60">
            Total Listings
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-dark-amethyst">0</h3>
            <Badge
              variant="outline"
              className="text-indigo-velvet border-indigo-velvet/20 bg-indigo-velvet/5"
            >
              Across 2 Cities
            </Badge>
          </div>
        </div>
        <div className="rounded-2xl border border-dust-grey/20 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-dark-amethyst/60">Available</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-dark-amethyst">0</h3>
            <span className="text-xs text-green-600 font-medium">
              Ready for Sale
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-dust-grey/20 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-dark-amethyst/60">
            Sold Assets
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-dark-amethyst">0</h3>
            <span className="text-xs text-dark-amethyst/40 font-medium">
              Last 30 Days
            </span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-dust-grey/20 bg-white p-4 shadow-sm lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dark-amethyst/40" />
          <Input
            placeholder="Search by title, sector or locality..."
            className="border-none bg-honeydew/20 pl-10 focus-visible:ring-indigo-velvet/20 h-11"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Select>
            <SelectTrigger className="w-[140px] border-dust-grey/20 focus:ring-indigo-velvet/20 h-11">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Available">Available</SelectItem>
              <SelectItem value="Sold">Sold</SelectItem>
              <SelectItem value="Coming Soon">Coming Soon</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px] border-dust-grey/20 focus:ring-indigo-velvet/20 h-11">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              <SelectItem value="Noida">Noida</SelectItem>
              <SelectItem value="Greater Noida">Greater Noida</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 border-dust-grey/20 hover:bg-honeydew/20"
          >
            <SlidersHorizontal className="h-4 w-4 text-dark-amethyst" />
          </Button>
        </div>
      </div>

      {/* Properties Table Section */}
      <div className="rounded-2xl border border-dust-grey/20 bg-white shadow-sm transition-all hover:shadow-md">
        <PropertiesTable properties={properties} />
      </div>
    </div>
  );
}
