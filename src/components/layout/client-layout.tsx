"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/animations/page-transition";
import { NetworkStatus } from "@/components/layout/network-status";

import { WishlistProvider } from "@/context/wishlist-context";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  if (isAdminPage) {
    return (
      <WishlistProvider>
        <NetworkStatus />
        {children}
      </WishlistProvider>
    );
  }

  return (
    <WishlistProvider>
      <NetworkStatus />
      <Navbar />
      <main className="pt-20 md:pt-24 min-h-screen bg-off-white">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <WhatsAppFloat />
    </WishlistProvider>
  );
}
