"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export function AdminBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Map segments to readable names
  const segmentNameMap: Record<string, string> = {
    admin: "Admin",
    properties: "Manage Properties",
    leads: "Client Inquiries",
    new: "Create New",
    edit: "Edit Details",
    settings: "Platform Settings",
  };

  const breadcrumbs = segments.map((segment, index) => {
    const isLast = index === segments.length - 1;
    const href = "/" + segments.slice(0, index + 1).join("/");
    const name = segmentNameMap[segment] || segment;

    return (
      <React.Fragment key={href}>
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage className="capitalize">{name}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={href} className="capitalize">
              {name}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </React.Fragment>
    );
  });

  // If we are just at /admin, show Dashboard
  const isDashboard = pathname === "/admin";

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-background">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          {isDashboard ? (
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            breadcrumbs
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
