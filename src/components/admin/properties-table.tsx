"use client";

import Link from "next/link";
import {
  Building2,
  Edit2,
  Trash2,
  Eye,
  MoreHorizontal,
  MapPin,
  CircleDollarSign,
  Tag,
  CheckCircle2,
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
}

export function PropertiesTable({ properties }: PropertiesTableProps) {
  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-300">
        <div className="rounded-full bg-honeydew p-6 mb-4 shadow-inner">
          <Building2 className="h-12 w-12 text-dust-grey" />
        </div>
        <h3 className="text-xl font-bold text-dark-amethyst">
          Your Portfolio is Empty
        </h3>
        <p className="mt-2 text-sm text-dark-amethyst/60 max-w-xs">
          Start building your presence in Noida and Greater Noida by listing your
          first premium property.
        </p>
        <Button
          asChild
          className="mt-8 bg-indigo-velvet hover:bg-dark-amethyst px-8 py-6 rounded-xl"
        >
          <Link href="/admin/properties/new">Add Your First Property</Link>
        </Button>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader className="bg-honeydew/30">
        <TableRow className="hover:bg-transparent border-dust-grey/20">
          <TableHead className="w-[300px] py-4 font-semibold text-dark-amethyst">
            Property
          </TableHead>
          <TableHead className="py-4 font-semibold text-dark-amethyst">
            Location
          </TableHead>
          <TableHead className="py-4 font-semibold text-dark-amethyst">
            Price Point
          </TableHead>
          <TableHead className="py-4 font-semibold text-dark-amethyst">
            Status
          </TableHead>
          <TableHead className="text-right py-4 font-semibold text-dark-amethyst">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((property) => (
          <TableRow
            key={property.id}
            className="group border-dust-grey/10 transition-colors hover:bg-honeydew/10"
          >
            <TableCell className="py-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-dark-amethyst group-hover:text-indigo-velvet transition-colors">
                    {property.title}
                  </span>
                  {property.featured && (
                    <Badge
                      variant="secondary"
                      className="bg-indigo-velvet/5 text-indigo-velvet text-[10px] uppercase font-bold tracking-wider py-0 px-2 h-5 border-indigo-velvet/10"
                    >
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-dark-amethyst/50">
                  <Tag className="h-3 w-3" />
                  {property.propertyType}
                </div>
              </div>
            </TableCell>
            <TableCell className="py-4">
              <div className="flex items-center gap-2 text-sm text-dark-amethyst/70">
                <MapPin className="h-3.5 w-3.5 text-dust-grey" />
                <span>
                  {property.city}, {property.sector}
                </span>
              </div>
            </TableCell>
            <TableCell className="py-4">
              <div className="flex items-center gap-2">
                <CircleDollarSign className="h-3.5 w-3.5 text-indigo-velvet/60" />
                <span className="font-semibold text-dark-amethyst">
                  ₹{(property.price / 10000000).toFixed(2)} Cr
                </span>
              </div>
            </TableCell>
            <TableCell className="py-4">
              <div className="flex items-center">
                {property.status === "Available" ? (
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none rounded-full px-3 shadow-none flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3" />
                    Available
                  </Badge>
                ) : property.status === "Sold" ? (
                  <Badge className="bg-red-50 text-red-600 hover:bg-red-50 border-none rounded-full px-3 shadow-none flex items-center gap-1.5">
                    <AlertCircle className="h-3 w-3" />
                    Sold
                  </Badge>
                ) : (
                  <Badge className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 border-none rounded-full px-3 shadow-none flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    Soon
                  </Badge>
                )}
              </div>
            </TableCell>
            <TableCell className="text-right py-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 hover:bg-indigo-velvet/10 hover:text-indigo-velvet"
                  >
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-white border-dust-grey/20"
                >
                  <DropdownMenuLabel className="text-dark-amethyst/60 text-xs uppercase tracking-wider font-bold">
                    Options
                  </DropdownMenuLabel>
                  <DropdownMenuItem className="cursor-pointer group">
                    <Eye className="mr-2 h-4 w-4 text-dust-grey group-hover:text-indigo-velvet" />
                    <span className="text-dark-amethyst">View Listing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer group" asChild>
                    <Link href={`/admin/properties/${property.id}/edit`}>
                      <Edit2 className="mr-2 h-4 w-4 text-dust-grey group-hover:text-indigo-velvet" />
                      <span className="text-dark-amethyst">Edit Details</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-dust-grey/10" />
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
