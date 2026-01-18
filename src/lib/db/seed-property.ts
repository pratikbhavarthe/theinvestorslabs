import * as dotenv from "dotenv";
dotenv.config();

import { db } from "./index";
import { properties } from "./schema";

async function seed() {
  console.log("Seeding additional properties...");

  const propertiesData = [
    {
      title: "Nirala Greenshire",
      description:
        "Elegant living in the heart of Sector 2, Greater Noida West. Features modern architecture and premium finishes.",
      city: "Greater Noida",
      sector: "Sector 2, Greater Noida West",
      price: 9100000,
      propertyType: "Flat",
      configuration: "2 BHK",
      status: "Available",
      featured: true,
      address: "Sector 2, Greater Noida West, Uttar Pradesh 201306",
      unit: "1503 (G11)",
      superArea: "1060 sq. ft.",
      floor: "15th Floor",
      bathrooms: 2,
      balconies: 3,
      facing: "Southwest Facing",
      parking: 1,
      view: "Road",
      scores: JSON.stringify({
        sunlight: 8,
        connectivity: 8,
        locality: 7.5,
      }),
    },
    {
      title: "Nirala Estate",
      description:
        "Luxury residential complex in Tech Zone IV, offering a perfect blend of comfort and style.",
      city: "Greater Noida",
      sector: "Tech Zone IV",
      price: 8900000,
      propertyType: "Flat",
      configuration: "2 BHK",
      status: "Available",
      featured: false,
      address:
        "Tech Zone IV, GH-04, Patwari, Greater Noida, Uttar Pradesh 201306",
      unit: "903 (T7)",
      superArea: "955 sq. ft.",
      floor: "9th Floor",
      bathrooms: 2,
      balconies: 3,
      facing: "Northeast Facing",
      parking: 1,
      view: "Road",
      scores: JSON.stringify({
        sunlight: 9,
        connectivity: 8,
        locality: 7.5,
      }),
    },
    {
      title: "Gaur City 2 – 14th Avenue",
      description:
        "A landmark development in Gaur City 2, providing excellent connectivity and lifestyle amenities.",
      city: "Greater Noida",
      sector: "Gaur City 2",
      price: 7300000,
      propertyType: "Flat",
      configuration: "2 BHK",
      status: "Available",
      featured: false,
      address:
        "Gaur City 2, Ghaziabad, Chipyana Khurd Urf Tigri, Uttar Pradesh 201009",
      unit: "1032 (D)",
      superArea: "855 sq. ft.",
      floor: "1st Floor",
      bathrooms: 2,
      balconies: 2,
      facing: "Northwest Facing",
      parking: 1,
      view: "Road",
      scores: JSON.stringify({
        sunlight: 8,
        connectivity: 7,
        locality: 7.5,
      }),
    },
    {
      title: "ABA Cherry County",
      description:
        "Premium residences in Tech Zone 4 with expansive green views and high-end infrastructure.",
      city: "Greater Noida",
      sector: "Tech Zone 4",
      price: 12500000,
      propertyType: "Flat",
      configuration: "3 BHK",
      status: "Available",
      featured: true,
      address:
        "Cherry County Tower-7, Tech Zone IV Bisrakh Jalalpur, Plot no GH 5B, Greater Noida West Link Rd, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201318",
      unit: "707 (A4)",
      superArea: "1206 sq. ft.",
      floor: "7th Floor",
      bathrooms: 2,
      balconies: 3,
      facing: "Southeast Facing",
      parking: 1,
      view: "Road",
      scores: JSON.stringify({
        sunlight: 8,
        connectivity: 7.8,
        locality: 7.5,
      }),
    },
    {
      title: "Nirala Aspire",
      description:
        "Modern living at Nirala Aspire, Sector 16. Designed for those who seek high-performance living spaces.",
      city: "Greater Noida",
      sector: "Sector 16, Noida Extension",
      price: 9800000,
      propertyType: "Flat",
      configuration: "3 BHK",
      status: "Available",
      featured: false,
      address:
        "Plot No. GH-03, Sector 16, Noida Extension, Greater Noida West, Uttar Pradesh",
      unit: "703 (D4)",
      superArea: "1180 sq. ft.",
      floor: "7th Floor",
      bathrooms: 2,
      balconies: 3,
      facing: "South Facing",
      parking: 1,
      view: "Garden",
      scores: JSON.stringify({
        sunlight: 8,
        connectivity: 7.5,
        locality: 7.5,
      }),
    },
    {
      title: "Arihant Ambar",
      description:
        "Beautifully designed apartments in Sector 1, Greater Noida West. A perfect investment for families.",
      city: "Greater Noida",
      sector: "Sector 1, Greater Noida West",
      price: 10100000,
      propertyType: "Flat",
      configuration: "3 BHK",
      status: "Available",
      featured: true,
      address:
        "Plot No GH-16C, Sector 1, Greater Noida West, Greater Noida, Uttar Pradesh 201306",
      unit: "206 (T-D)",
      superArea: "1150 sq. ft.",
      floor: "2nd Floor",
      bathrooms: 2,
      balconies: 3,
      facing: "Southeast Facing",
      parking: 1,
      view: "Road",
      scores: JSON.stringify({
        sunlight: 8,
        connectivity: 8,
        locality: 7.5,
      }),
    },
  ];

  try {
    const insertedItems = await db
      .insert(properties)
      .values(propertiesData)
      .returning();

    console.log(`Successfully seeded ${insertedItems.length} properties.`);
  } catch (error) {
    console.error("Error seeding properties:", error);
    process.exit(1);
  }
}

seed().then(() => {
  console.log("Seeding process finished.");
  process.exit(0);
});
