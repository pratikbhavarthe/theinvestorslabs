import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | The Investor Labs",
  description:
    "Find answers to common questions about The Investor Labs real estate marketplace, property buying, selling, investments, and our services in Noida and Greater Noida.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
