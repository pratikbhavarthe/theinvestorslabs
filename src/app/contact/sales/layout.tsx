import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talk to Sales | The Investor Labs",
  description:
    "Connect with our sales team to discuss pricing, request a demo, or explore enterprise solutions for premium real estate in Noida and Greater Noida.",
};

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
