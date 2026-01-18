"use client";

import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-amethyst text-white">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        {/* Brand Logo + Social Icons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-indigo-velvet mb-6">
            The Investor Labs
          </h3>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-indigo-velvet transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-indigo-velvet transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-indigo-velvet transition-colors duration-200"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 pb-16 border-b border-white/10">
          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/50 hover:text-indigo-velvet transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-sm text-white/50 hover:text-indigo-velvet transition-colors duration-200"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/50 hover:text-indigo-velvet transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="text-sm text-white/50 hover:text-indigo-velvet transition-colors duration-200"
                >
                  Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/50 hover:text-indigo-velvet transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/50 hover:text-indigo-velvet transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-white/50 hover:text-indigo-velvet transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918800843413"
                  className="text-sm text-white/50 hover:text-indigo-velvet transition-colors duration-200"
                >
                  +91 8800843413
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@theinvestorslab.in"
                  className="text-sm text-white/50 hover:text-indigo-velvet transition-colors duration-200"
                >
                  support@theinvestorslab.in
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-6">
              Office Location
            </h4>
            <p className="text-sm text-white/50 leading-relaxed">
              B-12, Upper Ground Floor,
              <br />
              Tower 4, NX-One,
              <br />
              Techzone 4, Greater Noida
              <br />
              201318
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} The Investors Lab Private Limited. All
            rights reserved.
          </p>

          {/* Watermark */}
          <p className="text-sm text-white/40">
            Designed and Developed by{" "}
            <span className="text-white/60">Linestroke</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
