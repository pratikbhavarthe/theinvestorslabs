"use client";

import Link from "next/link";
import {
  Building2,
  Edit2,
  Trash2,
  Eye,
  MoreHorizontal,
  MapPin,
  Tag,
  AlertCircle,
  Clock,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

interface PropertiesTableProps {
  properties: Property[];
  view?: "list" | "grid";
}

export function PropertiesTable({
  properties,
  view = "list",
}: PropertiesTableProps) {
  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-300">
        <div className="rounded-full bg-honeydew p-6 mb-4 shadow-inner">
          <Building2 className="h-12 w-12 text-dust-grey" />
        </div>
        <h3 className="text-xl font-bold text-dark-amethyst">
          No Properties Found
        </h3>
        <p className="mt-2 text-sm text-dark-amethyst/60 max-w-xs">
          Try adjusting your filters or search query to find what you&apos;re
          looking for.
        </p>
        <Button
          asChild
          className="mt-8 bg-indigo-velvet hover:bg-dark-amethyst px-8 py-6 rounded-xl"
        >
          <Link href="/admin/properties/new">Add New Property</Link>
        </Button>
      </div>
    );
  }

  if (view === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-1">
        {properties.map((property) => (
          <div
            key={property.id}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-dust-grey/20 bg-card shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Image Placeholder */}
            <div className="aspect-video w-full bg-muted flex items-center justify-center relative">
              <Building2 className="h-10 w-10 text-muted-foreground/20" />
              {property.featured && (
                <Badge
                  variant="secondary"
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm shadow-sm text-indigo-velvet text-[10px] font-bold"
                >
                  FEATURED
                </Badge>
              )}
              <Badge
                className={`absolute top-3 right-3 border-none shadow-sm ${
                  property.status === "Available"
                    ? "bg-green-500 text-white"
                    : property.status === "Sold"
                      ? "bg-red-500 text-white"
                      : "bg-yellow-500 text-white"
                }`}
              >
                {property.status}
              </Badge>
            </div>

            <div className="flex flex-col gap-3 p-5">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider">
                    {property.propertyType}
                  </p>
                  <span className="font-bold text-foreground">
                    ₹{(property.price / 10000000).toFixed(2)} Cr
                  </span>
                </div>
                <h3 className="mt-1 font-bold text-lg text-foreground line-clamp-1 group-hover:text-brand-primary transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="truncate">
                    {property.city}, {property.sector}
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 h-9"
                  asChild
                >
                  <Link href={`/admin/properties/${property.id}/edit`}>
                    <Edit2 className="h-3.5 w-3.5 mr-2" />
                    Edit
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-muted-foreground"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Table>
      <TableHeader className="bg-muted/50">
        <TableRow className="hover:bg-transparent border-border">
          <TableHead className="w-[300px] py-4 font-semibold text-foreground pl-6">
            Property
          </TableHead>
          <TableHead className="py-4 font-semibold text-foreground">
            Location
          </TableHead>
          <TableHead className="py-4 font-semibold text-foreground">
            Price Point
          </TableHead>
          <TableHead className="py-4 font-semibold text-foreground">
            Status
          </TableHead>
          <TableHead className="text-right py-4 font-semibold text-foreground pr-6">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((property) => (
          <TableRow
            key={property.id}
            className="group hover:bg-muted/50 border-border transition-colors"
          >
            <TableCell className="py-4 pl-6">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground group-hover:text-brand-primary transition-colors text-base">
                    {property.title}
                  </span>
                  {property.featured && (
                    <Badge
                      variant="secondary"
                      className="bg-brand-primary/10 text-brand-primary text-[10px] uppercase font-bold tracking-wider px-1.5 h-5 border-transparent"
                    >
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Tag className="h-3 w-3" />
                  <span className="capitalize">{property.propertyType}</span>
                </div>
              </div>
            </TableCell>
            <TableCell className="py-4">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                <span>
                  {property.city}, {property.sector}
                </span>
              </div>
            </TableCell>
            <TableCell className="py-4">
              <div className="flex items-center gap-1.5">
                <span className="font-medium text-foreground text-sm bg-muted/50 px-2 py-1 rounded-md border border-border/50">
                  ₹{(property.price / 10000000).toFixed(2)} Cr
                </span>
              </div>
            </TableCell>
            <TableCell className="py-4">
              <div className="flex items-center">
                {property.status === "Available" ? (
                  <Badge
                    variant="outline"
                    className="border-green-200 bg-green-50 text-green-700 hover:bg-green-100 px-3 py-0.5 rounded-full flex gap-1.5 w-fit font-normal"
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </span>
                    Available
                  </Badge>
                ) : property.status === "Sold" ? (
                  <Badge
                    variant="secondary"
                    className="bg-red-50 text-red-600 hover:bg-red-100 flex gap-1.5 w-fit font-normal"
                  >
                    <AlertCircle className="h-3 w-3" />
                    Sold
                  </Badge>
                ) : (
                  <Badge
                    variant="secondary"
                    className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 flex gap-1.5 w-fit font-normal"
                  >
                    <Clock className="h-3 w-3" />
                    Soon
                  </Badge>
                )}
              </div>
            </TableCell>
            <TableCell className="text-right py-4 pr-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
                    Action
                  </DropdownMenuLabel>
                  <DropdownMenuItem className="cursor-pointer group">
                    <Eye className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                    <span>View Listing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer group" asChild>
                    <Link href={`/admin/properties/${property.id}/edit`}>
                      <Edit2 className="mr-2 h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                      <span>Edit Details</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 group">
                    <Trash2 className="mr-2 h-4 w-4 text-red-400 group-hover:text-red-600" />
                    <span>Delete Asset</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
