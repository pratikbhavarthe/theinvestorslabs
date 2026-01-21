import { Metadata } from "next";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Societies | The Investor Labs",
  description: "Explore premium residential societies and communities.",
};

export default function SocietiesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-velvet/10 mb-6">
            <Building2 className="w-6 h-6 text-indigo-velvet" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-amethyst mb-4">
            Premier Societies
          </h1>
          <p className="text-xl text-dark-amethyst/60">
            Explore the most exclusive communities and residential addresses in
            our network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Society Cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group rounded-2xl border border-dark-amethyst/10 overflow-hidden hover:border-indigo-velvet/50 transition-all hover:shadow-lg"
            >
              <div className="bg-honeydew h-48 w-full flex items-center justify-center">
                <span className="text-dark-amethyst/20 font-bold uppercase tracking-widest">
                  Society Image
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-amethyst mb-2">
                  Society Name {i}
                </h3>
                <p className="text-sm text-dark-amethyst/50">
                  Sector 62, Gurgaon
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
