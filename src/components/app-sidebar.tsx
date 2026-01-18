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
      title: "Portfolio Management",
      url: "/admin/properties",
      icon: Building2,
      items: [
        {
          title: "Asset Inventory",
          url: "/admin/properties",
        },
        {
          title: "New Acquisition",
          url: "/admin/properties/new",
        },
      ],
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
      title: "Public Marketplace",
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
    <Sidebar variant="inset" {...props} className="border-r-0 shadow-none">
      <SidebarHeader className="bg-[#ADA8B6] pt-6 pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:bg-dark-amethyst/5 transition-all"
            >
              <a href="/admin" className="flex items-center gap-3">
                <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-dark-amethyst text-white shadow-lg shadow-dark-amethyst/20">
                  <Sparkles className="size-5 fill-honeydew" />
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-bold text-dark-amethyst tracking-tight text-base">
                    The Investor Labs
                  </span>
                  <span className="truncate text-[10px] uppercase font-bold tracking-widest text-dark-amethyst/50">
                    Administrator
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-[#ADA8B6] px-2">
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto pb-4" />
      </SidebarContent>

      <SidebarFooter className="bg-[#ADA8B6] border-t border-dark-amethyst/5 p-4">
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
