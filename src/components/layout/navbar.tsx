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
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#0f172a] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IL</span>
            </div>
            <span className="text-xl font-bold text-[#111827] hidden sm:block">
              The Investor Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#6B7280] hover:text-[#0f172a] font-medium transition-colors text-[15px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#6B7280] hover:text-[#0f172a]"
                >
                  Login
                </Button>
              </SignInButton>
              <Link href="/properties">
                <Button
                  size="sm"
                  className="bg-[#0f172a] hover:bg-[#1e293b] text-white h-11 px-6 rounded-xl"
                >
                  Explore Properties
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/admin">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#6B7280] hover:text-[#0f172a]"
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
          <div className="md:hidden py-4 border-t border-[#E5E7EB]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#6B7280] hover:text-[#0f172a] font-medium py-2 text-[15px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant="outline"
                      className="w-full border-[#E5E7EB] text-[#111827]"
                    >
                      Login
                    </Button>
                  </SignInButton>
                  <Link
                    href="/properties"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white h-11">
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
                      className="w-full border-[#E5E7EB] text-[#111827]"
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
