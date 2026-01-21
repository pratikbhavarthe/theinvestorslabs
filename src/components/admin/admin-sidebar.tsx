"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Building2, Mail, Settings } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Properties", href: "/admin/properties", icon: Building2 },
  { name: "Leads", href: "/admin/leads", icon: Mail },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-[#ADA8B6] text-dark-amethyst">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-dark-amethyst/10 px-6">
        <Link href="/admin" className="flex items-center gap-2">
          <Building2 className="h-8 w-8 text-indigo-velvet" />
          <span className="text-xl font-bold text-dark-amethyst">
            Admin Panel
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-indigo-velvet text-white"
                  : "text-dark-amethyst/70 hover:bg-dark-amethyst/10 hover:text-dark-amethyst",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="border-t border-dark-amethyst/10 p-4">
        <div className="flex items-center gap-3">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
            }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-dark-amethyst truncate">
              Admin User
            </p>
            <p className="text-xs text-dark-amethyst/60">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
