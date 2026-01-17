import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Property {
  id: string;
  title: string;
  city: string;
  sector: string;
  price: number;
  propertyType: string;
  images: string[];
  status: string;
}

interface FeaturedPropertiesProps {
  properties: Property[];
}

export function FeaturedProperties({ properties }: FeaturedPropertiesProps) {
  if (properties.length === 0) {
    return null;
  }

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <section className="py-20 md:py-32 bg-[#F9FAFB]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-[2rem] md:text-[2.25rem] font-semibold text-[#111827] mb-4 leading-[1.3]">
            Featured Properties
          </h2>
          <p className="text-[1rem] text-[#6B7280] max-w-2xl mx-auto leading-[1.6]">
            Handpicked premium properties in prime locations
          </p>
        </motion.div>

        {/* Property Grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Link href={`/properties/${property.id}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Card className="group hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300 overflow-hidden h-full border-[#E5E7EB] rounded-xl">
                    {/* Property Image */}
                    <div className="relative h-64 overflow-hidden bg-[#F9FAFB]">
                      {property.images && property.images.length > 0 ? (
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="w-full h-full"
                        >
                          <Image
                            src={property.images[0]}
                            alt={property.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#F9FAFB]">
                          <span className="text-[#6B7280] text-[0.875rem]">
                            No Image
                          </span>
                        </div>
                      )}

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant={
                            property.status === "Available"
                              ? "default"
                              : "secondary"
                          }
                          className={`${
                            property.status === "Available"
                              ? "bg-[#047857] text-white"
                              : "bg-white/90 text-[#111827]"
                          } text-[0.8125rem] font-medium px-3 py-1`}
                        >
                          {property.status}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Property Type */}
                      <div className="text-[0.875rem] text-[#047857] font-semibold mb-2">
                        {property.propertyType}
                      </div>

                      {/* Title */}
                      <h3 className="text-[1.5rem] font-semibold text-[#111827] mb-2 line-clamp-2 group-hover:text-[#0f172a] transition-colors leading-[1.35]">
                        {property.title}
                      </h3>

                      {/* Location */}
                      <p className="text-[0.9375rem] text-[#6B7280] mb-4 flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {property.sector}, {property.city}
                      </p>

                      {/* Price */}
                      <div className="text-[1.375rem] font-semibold text-[#0f172a]">
                        {formatPrice(property.price)}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link href="/properties">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2 h-12 px-8 bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold rounded-xl transition-colors text-[15px]"
            >
              View All Properties
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
