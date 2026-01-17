import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/animations/page-transition";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Investor Labs",
  description: "Real estate marketplace for Noida and Gurgaon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <PageTransition>{children}</PageTransition>
        </body>
      </html>
    </ClerkProvider>
  );
}
