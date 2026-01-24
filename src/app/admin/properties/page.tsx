import Link from "next/link";
import { Plus } from "lucide-react";
import { PropertiesTable } from "@/components/admin/properties-table";
import { PropertiesToolbar } from "@/components/admin/properties-toolbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProperties, getPropertyCount } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    search?: string;
    city?: string;
    status?: string;
    sort?: string;
    view?: string;
  }>;
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const [{ items: properties }, totalCount, availableCount, soldCount] =
    await Promise.all([
      getProperties({
        limit: 100,
        search: params.search,
        city: params.city,
        status: params.status,
        sort: (params.sort as any) || "recent",
      }),
      getPropertyCount(),
      getPropertyCount({ status: "Available" }),
      getPropertyCount({ status: "Sold" }),
    ]);

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header Section */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Manage Properties
          </h1>
          <p className="text-muted-foreground">
            Overview and management of listed assets across your portfolio.
          </p>
        </div>
        <Button
          asChild
          className="bg-brand-primary hover:bg-brand-primary/90 text-white shadow-md"
        >
          <Link href="/admin/properties/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Link>
        </Button>
      </div>

      {/* Stats Overview - Keeping Global Context */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">
            Total Listings
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-foreground">{totalCount}</h3>
            <Badge
              variant="outline"
              className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary"
            >
              Portfolio Size
            </Badge>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">Available</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-foreground">
              {availableCount}
            </h3>
            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
              Ready for Sale
            </span>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">
            Sold Assets
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-foreground">{soldCount}</h3>
            <span className="text-xs text-muted-foreground font-medium">
              Lifetime Sales
            </span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <PropertiesToolbar />

      {/* Properties Table Section */}
      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <PropertiesTable
          properties={properties}
          view={(params.view as "list" | "grid") || "list"}
        />
      </div>
    </div>
  );
}
