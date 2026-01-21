import { Metadata } from "next";
import { notFound } from "next/navigation";

type ServiceSlug =
  | "key-management"
  | "property-management"
  | "renting-solution"
  | "rent-agreement";

const SERVICES: Record<ServiceSlug, { title: string; description: string }> = {
  "key-management": {
    title: "Key Management",
    description:
      "Secure and reliable key holding services for your peace of mind.",
  },
  "property-management": {
    title: "Property Management",
    description:
      "End-to-end property care, maintenance, and tenant management.",
  },
  "renting-solution": {
    title: "Renting Solution",
    description: "Hassle-free renting experience for both owners and tenants.",
  },
  "rent-agreement": {
    title: "Rent Agreement",
    description:
      "Drafting and registration of legally compliant rent agreements.",
  },
};

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug as ServiceSlug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | The Investor Labs`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-honeydew/20 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-dark-amethyst/5">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-amethyst mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-dark-amethyst/70 mb-12 leading-relaxed">
            {service.description}
          </p>

          <div className="bg-indigo-velvet/5 rounded-2xl p-8 border border-indigo-velvet/10">
            <h3 className="text-lg font-bold text-dark-amethyst mb-4">
              Service Details
            </h3>
            <p className="text-dark-amethyst/60">
              Detailed information about our {service.title} service will be
              available here shortly. Please contact us for immediate
              assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({
    slug,
  }));
}
