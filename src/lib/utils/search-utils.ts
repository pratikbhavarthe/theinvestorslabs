import Fuse from "fuse.js";
import { Property } from "@/types/property";

/**
 * Fuzzy search utility for properties
 * Searches across: title, locality, sector, address, city
 */
export function searchProperties(
  properties: Property[],
  query: string,
): Property[] {
  if (!query || query.trim() === "") {
    return properties;
  }

  const fuse = new Fuse(properties, {
    keys: [
      { name: "title", weight: 0.3 },
      { name: "locality", weight: 0.25 },
      { name: "sector", weight: 0.2 },
      { name: "address", weight: 0.15 },
      { name: "city", weight: 0.1 },
    ],
    threshold: 0.4, // Lower = more strict matching
    includeScore: true,
    minMatchCharLength: 2,
  });

  const results = fuse.search(query);
  return results.map((result) => result.item);
}

/**
 * Filter properties by transaction type
 */
export function filterByType(
  properties: Property[],
  type: "buy" | "sell" | "rent",
): Property[] {
  // For now, we'll return all properties as the current data doesn't have type distinction
  // This can be extended when the Property type includes a transaction type field
  return properties;
}
