import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & Vision | The Investor Labs",
  description:
    "Discover The Investor Labs - redefining real estate investing in Noida and Greater Noida. Learn about our mission to make property investment accessible, transparent, and profitable through data-driven insights and premium service.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
