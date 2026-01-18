import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | The Investor Labs",
  description:
    "Get in touch with The Investor Labs. Contact our sales team, support, or visit our office in Noida/Greater Noida. We're here to help with all your real estate investment needs.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
