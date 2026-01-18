import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Support | The Investor Labs",
  description:
    "Get 24/7 support for technical issues, account questions, or property inquiries. Our support team is here to help you.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
