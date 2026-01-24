"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { XCircle } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // navLinks moved here to simpler structure without nested services
  const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About Us" },
    { href: "/partner", label: "Partner" },
    { href: "/contact", label: "Contact Us" },
  ].map((link, index) => ({ ...link, id: index }));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-16 w-[180px]">
              <Image
                src="/logo-removebg-preview.png"
                alt="The Investor Labs"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-dark font-extrabold uppercase tracking-widest transition-all hover:text-primary text-[12px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <SignedOut>
              <Link
                href="/sign-in"
                className="text-dark font-extrabold uppercase tracking-widest text-[12px] hover:text-primary"
              >
                Sign In
              </Link>
              <Link href="/consultation">
                <InteractiveHoverButton className="bg-white text-primary border border-primary">
                  Talk to Expert
                </InteractiveHoverButton>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/admin">
                <Button
                  variant="ghost"
                  className="text-dark-amethyst/60 hover:text-indigo-velvet font-bold uppercase tracking-[0.2em] text-[10px]"
                >
                  Dashboard
                </Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface-muted transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XCircle className="w-6 h-6 text-dark-amethyst" />
            ) : (
              <div className="flex flex-col gap-1.5 items-end">
                <div className="w-6 h-0.5 bg-dark-amethyst rounded-full" />
                <div className="w-4 h-0.5 bg-dark-amethyst rounded-full" />
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-4 overflow-y-auto">
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-2xl font-bold text-dark-amethyst"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-8">
                <SignedOut>
                  <Link href="/sign-in">
                    <Button className="w-full" variant="outline">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/consultation">
                    <Button className="w-full">Talk to Expert</Button>
                  </Link>
                </SignedOut>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
