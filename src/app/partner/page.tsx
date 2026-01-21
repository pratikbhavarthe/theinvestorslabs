import { Metadata } from "next";
import { PartnerContent } from "@/components/partner/partner-content";

export const metadata: Metadata = {
  title: "Partner with Us | The Investor Labs",
  description:
    "Join our exclusive network of channel partners, developers, and investors. Accelerate your growth with The Investor Labs.",
};

export default function PartnerPage() {
  return <PartnerContent />;
}
