import { Metadata } from "next";
import { ConsultationContent } from "@/components/consultation/consultation-content";

export const metadata: Metadata = {
  title: "Get Consultation | The Investor Labs",
  description:
    "Request a direct advisory consultation for premium real estate investments in Noida & Greater Noida. Expert guidance for buying, selling, and partnering.",
};

export default function ConsultationPage() {
  return <ConsultationContent />;
}
