import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Partner | The Investor Labs",
  description:
    "Join our partner program for agencies, payment processors, fractional CFOs, and builders. Grow your business with premium real estate opportunities.",
};

export default function PartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
