export type MediaSlotId =
  | "hero"
  | "about"
  | "g1"
  | "g2"
  | "g3"
  | "g4"
  | "g5"
  | "g6";

export type MediaKind = "image" | "video";

export type MediaAsset = {
  src: string;
  kind: MediaKind;
};

export type SiteCoordinates = {
  lat: number;
  lng: number;
};

export type SiteConfig = {
  brand: string;
  brandShort: string;
  brandTag: string;
  location: string;
  coordinates: SiteCoordinates;
  instagramUrl: string;
  instagramHandle: string;
  /** International WhatsApp number without "+" or spaces, e.g. "569XXXXXXXX" */
  whatsappNumber: string;
  media: Record<MediaSlotId, MediaAsset>;
};

export const siteConfig: SiteConfig = {
  brand: "OPZ AUTO CARE",
  brandShort: "OPZ",
  brandTag: "AUTO CARE",
  location: "Pilares Verdes, Las Cabras, Chile",
  /** OpenStreetMap hamlet node: Pilares Verdes, Las Cabras */
  coordinates: {
    lat: -34.1551509,
    lng: -71.3301631,
  },
  instagramUrl: "https://instagram.com/opzautocare",
  instagramHandle: "@opzautocare",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  media: {
    hero: { src: "/assets/foam.mp4", kind: "video" },
    about: { src: "/assets/full.mp4", kind: "video" },
    g1: { src: "/assets/foam.mp4", kind: "video" },
    g2: { src: "/assets/wheel.mp4", kind: "video" },
    g3: { src: "/assets/panel.mp4", kind: "video" },
    g4: { src: "/assets/steering.mp4", kind: "video" },
    g5: { src: "/assets/dirt.mp4", kind: "video" },
    g6: { src: "/assets/full.mp4", kind: "video" },
  },
};

/** OpenStreetMap embed centered on site coordinates with a geographic marker. */
export const getMapEmbedUrl = (
  { lat, lng }: SiteCoordinates,
  zoomDelta = 0.012,
): string => {
  const west = lng - zoomDelta * 1.35;
  const south = lat - zoomDelta;
  const east = lng + zoomDelta * 1.35;
  const north = lat + zoomDelta;
  const bbox = [west, south, east, north].join(",");
  const marker = `${lat},${lng}`;

  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${encodeURIComponent(marker)}`;
};

/** External maps link for directions. */
export const getMapDirectionsUrl = (
  { lat, lng }: SiteCoordinates,
  label: string,
): string => {
  const query = encodeURIComponent(`${lat},${lng} (${label})`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};
