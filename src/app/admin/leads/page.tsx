import { Mail, Phone, MessageSquare, Building2 } from "lucide-react";
import { getLeads, getInquiries } from "@/lib/db/queries";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LeadsToolbar } from "@/components/admin/leads-toolbar";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    search?: string;
    type?: string;
    status?: string;
  }>;
}

export default async function LeadsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const search = params.search;
  const type = params.type;
  const status = params.status;

  // Conditional Data Fetching
  let leads: any[] = [];
  let inquiries: any[] = [];

  const shouldFetchLeads = !type || type === "all" || type === "property";
  const shouldFetchInquiries = !type || type === "all" || type !== "property";

  const results = await Promise.all([
    shouldFetchLeads
      ? getLeads({ limit: 50, search })
      : Promise.resolve({ items: [] }),
    shouldFetchInquiries
      ? getInquiries({
          limit: 50,
          search,
          type: type !== "all" ? type : undefined,
          status,
        })
      : Promise.resolve({ items: [] }),
  ]);

  leads = results[0].items;
  inquiries = results[1].items;

  // Normalize and combine data
  const normalizedLeads = leads.map((lead) => ({
    id: lead.id,
    type: "Property Lead",
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    message: lead.message,
    status: "New", // Leads table default
    date: lead.createdAt,
    source: "Property Page",
  }));

  const normalizedInquiries = inquiries.map((inq) => ({
    id: inq.id,
    type: inq.type,
    name: inq.name,
    email: inq.email,
    phone: inq.phone,
    message: inq.message,
    status: inq.status || "New",
    date: inq.createdAt,
    source: "Contact Form",
  }));

  const allItems = [...normalizedLeads, ...normalizedInquiries].sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
  );

  return (
    <div className="flex flex-1 flex-col gap-8 p-8 bg-background min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Client Inquiries
          </h1>
          <p className="mt-2 text-muted-foreground">
            Manage your property leads and direct messages in one place.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-card px-3 py-1.5 rounded-full border border-border shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            <span className="text-xs font-semibold text-foreground">
              {allItems.length} Active Messages
            </span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <LeadsToolbar />

      {/* Leads Table Card */}
      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden flex flex-col">
        {allItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="rounded-full bg-muted p-6 mb-6">
              <Mail className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              No inquiries found
            </h3>
            <p className="mt-2 text-muted-foreground max-w-sm">
              Try adjusting your filters or search query.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/50 border-b border-border">
                <TableRow className="hover:bg-transparent border-none">
                  <TableHead className="w-[300px] py-4 font-bold text-muted-foreground uppercase text-xs tracking-wider pl-6">
                    User Details
                  </TableHead>
                  <TableHead className="py-4 font-bold text-muted-foreground uppercase text-xs tracking-wider">
                    Inquiry Type
                  </TableHead>
                  <TableHead className="py-4 font-bold text-muted-foreground uppercase text-xs tracking-wider">
                    Message
                  </TableHead>
                  <TableHead className="py-4 font-bold text-muted-foreground uppercase text-xs tracking-wider">
                    Date
                  </TableHead>
                  <TableHead className="py-4 font-bold text-muted-foreground uppercase text-xs tracking-wider text-right pr-6">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allItems.map((item) => (
                  <TableRow
                    key={`${item.type}-${item.id}`}
                    className="hover:bg-muted/40 border-b border-border last:border-0 group transition-colors"
                  >
                    <TableCell className="py-4 pl-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9 border border-border">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-brand-primary/10 text-brand-primary font-bold text-xs">
                            {item.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground text-sm group-hover:text-brand-primary transition-colors">
                            {item.name}
                          </span>
                          <div className="flex flex-col gap-0.5 mt-0.5">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Mail className="h-3 w-3" />
                              <span className="truncate max-w-[160px]">
                                {item.email}
                              </span>
                            </div>
                            {item.phone && (
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Phone className="h-3 w-3" />
                                <span>{item.phone}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        variant="secondary"
                        className={`font-semibold border-none px-2.5 py-1 rounded-md text-[11px] uppercase ${
                          item.type === "Property Lead"
                            ? "bg-indigo-velvet/10 text-indigo-velvet"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {item.type === "Property Lead" ? (
                          <Building2 className="h-3 w-3 mr-1.5" />
                        ) : (
                          <MessageSquare className="h-3 w-3 mr-1.5 opacity-60" />
                        )}
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4 max-w-[400px]">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-foreground/80 line-clamp-2 leading-relaxed">
                          {item.message || "No message provided"}
                        </p>
                        {item.source === "Property Page" && (
                          <span className="text-[10px] uppercase font-bold text-brand-primary/60 tracking-wider">
                            Via Property Listing
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-medium text-foreground">
                          {item.date.toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.date.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 pr-6 text-right">
                      <Badge
                        variant="outline"
                        className={`
                                border-border px-3 py-0.5 capitalize
                                ${item.status === "New" ? "bg-green-500/10 text-green-600 border-green-500/20" : "text-muted-foreground"}
                            `}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
