"use client";

import * as React from "react";
import {
  Building2,
  LayoutDashboard,
  Mail,
  Settings,
  Home,
  Sparkles,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";

const data = {
  navMain: [
    {
      title: "Executive Overview",
      url: "/admin",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Manage Properties",
      url: "/admin/properties",
      icon: Building2,
    },
    {
      title: "Client Inquiries",
      url: "/admin/leads",
      icon: Mail,
    },
  ],
  navSecondary: [
    {
      title: "Platform Settings",
      url: "/admin/settings",
      icon: Settings,
    },
    {
      title: "Back to site",
      url: "/",
      icon: Home,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  const userData = {
    name: user?.fullName || "Admin User",
    email:
      user?.primaryEmailAddress?.emailAddress || "admin@theinvestorslab.in",
    avatar: user?.imageUrl || "",
  };

  return (
    <Sidebar
      variant="inset"
      {...props}
      className="border-r-0 shadow-none bg-white"
    >
      <SidebarHeader className="bg-white pt-4 pb-2 px-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:bg-transparent"
            >
              <a href="/admin" className="flex items-center gap-3 pl-1">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-brand-primary text-white">
                  <Sparkles className="size-4 fill-white" />
                </div>
                <div className="grid flex-1 text-left leading-none">
                  <span className="truncate font-semibold text-foreground tracking-tight text-sm">
                    The Investor Labs
                  </span>
                  <span className="truncate text-xs text-muted-foreground mt-0.5">
                    Admin Console
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-white px-2">
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto pb-4" />
      </SidebarContent>

      <SidebarFooter className="bg-white border-t border-dust-grey/10 p-4">
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
