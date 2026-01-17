"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-[#E5E7EB]/50 transition-all duration-300">
      {/* Navbar container matches Hero's wider constraint for vertical alignment */}
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-[#0f172a] rounded-xl flex items-center justify-center text-white font-bold text-xl">
              IL
            </div>
            <span className="text-xl font-bold text-[#111827] hidden sm:block tracking-tight">
              The Investor Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-10 flex-1 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#6B7280] hover:text-[#0f172a] font-medium transition-all text-[15px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="text-[#6B7280] hover:text-[#0f172a] font-medium"
                >
                  Login
                </Button>
              </SignInButton>
              <Link href="/properties">
                <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white h-11 px-6 rounded-xl font-semibold shadow-sm transition-all whitespace-nowrap">
                  Explore Properties
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/admin">
                <Button
                  variant="ghost"
                  className="text-[#6B7280] hover:text-[#0f172a] font-medium"
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
            className="md:hidden p-2 rounded-lg hover:bg-[#F9FAFB] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-[#111827]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-[#111827]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#E5E7EB]">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#6B7280] hover:text-[#0f172a] font-medium text-[16px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-[#E5E7EB] flex flex-col gap-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant="outline"
                      className="w-full border-[#E5E7EB] text-[#111827] h-12 rounded-xl"
                    >
                      Login
                    </Button>
                  </SignInButton>
                  <Link
                    href="/properties"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white h-12 rounded-xl">
                      Explore Properties
                    </Button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link
                    href="/admin"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-[#E5E7EB] text-[#111827] h-12 rounded-xl"
                    >
                      Dashboard
                    </Button>
                  </Link>
                  <div className="flex justify-center pt-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
