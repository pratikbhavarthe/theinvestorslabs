"use client";

import * as React from "react";
import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-widest px-3 mb-2">
        Platform Core
      </SidebarGroupLabel>
      <SidebarMenu className="space-y-1">
        {items.map((item) => {
          return (
            <NavMainItem key={item.title} item={item} pathname={pathname} />
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavMainItem({
  item,
  pathname,
}: {
  item: {
    title: string;
    url: string;
    icon: LucideIcon;
    items?: { title: string; url: string }[];
  };
  pathname: string;
}) {
  const isMainActive =
    pathname === item.url || item.items?.some((sub) => pathname === sub.url);

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isMainActive) setIsOpen(true);
  }, [isMainActive]);

  return (
    <Collapsible
      asChild
      open={isOpen}
      onOpenChange={setIsOpen}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          tooltip={item.title}
          className={cn(
            "h-10 px-3 transition-all duration-200 rounded-lg group mx-1",
            isMainActive
              ? "bg-white text-indigo-950 font-semibold shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] ring-1 ring-slate-200"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
          )}
        >
          <Link href={item.url}>
            <div
              className={cn(
                "flex items-center justify-center h-6 w-6 rounded-md mr-3 transition-colors",
                isMainActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "bg-transparent text-slate-400 group-hover:text-slate-600",
              )}
            >
              <item.icon className="h-4 w-4" />
            </div>
            <span className="text-sm">{item.title}</span>
          </Link>
        </SidebarMenuButton>
        {item.items?.length ? (
          <>
            <CollapsibleTrigger asChild>
              <SidebarMenuAction className="hover:bg-slate-200 hover:text-slate-900 text-slate-400 right-2">
                <ChevronRight className="h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                <span className="sr-only">Toggle</span>
              </SidebarMenuAction>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub className="ml-[calc(1.5rem+3px)] border-l border-slate-200 pl-4 my-1 space-y-0.5">
                {item.items?.map((subItem) => {
                  const isSubActive = pathname === subItem.url;
                  return (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        className={cn(
                          "h-9 rounded-md transition-colors text-sm",
                          isSubActive
                            ? "text-indigo-700 font-medium bg-indigo-50"
                            : "text-slate-500 hover:text-slate-900 hover:bg-slate-50",
                        )}
                      >
                        <Link href={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </>
        ) : null}
      </SidebarMenuItem>
    </Collapsible>
  );
}
