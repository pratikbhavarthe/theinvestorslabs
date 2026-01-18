"use client";

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
      <SidebarGroupLabel className="text-dark-amethyst/30 uppercase text-[10px] font-bold tracking-[0.2em] mb-4 px-4">
        Platform Core
      </SidebarGroupLabel>
      <SidebarMenu className="gap-1">
        {items.map((item) => {
          const isMainActive =
            pathname === item.url ||
            item.items?.some((sub) => pathname === sub.url);

          return (
            <Collapsible key={item.title} asChild defaultOpen={isMainActive}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={cn(
                    "flex items-center gap-3 px-4 py-6 rounded-xl transition-all duration-300",
                    isMainActive
                      ? "bg-dark-amethyst text-white shadow-lg shadow-dark-amethyst/10 font-semibold"
                      : "text-dark-amethyst/70 hover:bg-dark-amethyst/5 hover:text-dark-amethyst",
                  )}
                >
                  <Link href={item.url}>
                    <item.icon
                      className={cn(
                        "size-5 transition-transform duration-300",
                        isMainActive && "scale-110",
                      )}
                    />
                    <span className="tracking-tight">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction
                        className={cn(
                          "right-2 top-1/2 -translate-y-1/2 transition-all duration-300 hover:bg-transparent",
                          isMainActive
                            ? "text-white/50 hover:text-white"
                            : "text-dark-amethyst/20 hover:text-dark-amethyst",
                        )}
                      >
                        <ChevronRight className="size-4" />
                        <span className="sr-only">Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="animate-in slide-in-from-left-1 duration-300">
                      <SidebarMenuSub className="ml-4 border-l border-dark-amethyst/10 pl-4 my-2 gap-1">
                        {item.items?.map((subItem) => {
                          const isSubActive = pathname === subItem.url;
                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                className={cn(
                                  "py-4 rounded-lg transition-all duration-200",
                                  isSubActive
                                    ? "text-indigo-velvet font-bold bg-indigo-velvet/5"
                                    : "text-dark-amethyst/50 hover:text-dark-amethyst hover:bg-dark-amethyst/5",
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
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
