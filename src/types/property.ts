export interface PropertySpecs {
  baths: number;
  beds: number;
  balcony: number;
  floor: string;
  parking: number;
  facing: string;
  unitNumber?: string; // e.g., "1403 (T02)"
  view?: string; // e.g., "Open View"
}

export interface PropertyScores {
  sunlight: number;
  connectivity: number;
  locality: number;
  lifestyle?: number;
  value?: number;
}

export interface Facility {
  id: string;
  label: string;
  icon?: string;
}

export interface ProximityItem {
  name: string;
  distance: string;
}

export interface ProximityCategory {
  id: string;
  label: string;
  items: ProximityItem[];
}

export interface Property {
  id: string;
  title: string;
  address: string;
  location: string;
  price: string;
  config: string;
  area: string;
  image: string;
  images: string[];
  tag: string;
  hook: string;
  pricePrefix?: string;
  type?: string;
  size?: string;
  specs: PropertySpecs;
  scores: PropertyScores;
  facilities: Facility[];
  amenities?: Facility[];
  description: string;
  societyDescription?: string;
  videoUrl?: string;
  highlights?: string[];
  proximity?: ProximityCategory[];
}
