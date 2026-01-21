"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/animations/page-transition";
import { NetworkStatus } from "@/components/layout/network-status";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  if (isAdminPage) {
    return (
      <>
        <NetworkStatus />
        {children}
      </>
    );
  }

  return (
    <>
      <NetworkStatus />
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
}
