import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { ClientLayout } from "@/components/layout/client-layout";
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
  title: "The Investor Labs | Premium Real Estate in Noida & Greater Noida",
  description:
    "Discover premium residential and commercial properties in Noida and Greater Noida. Expert guidance, verified listings, and seamless transactions.",
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
          className={`${plusJakartaSans.className} ${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}
