export type PhotoSlotId =
  | "hero"
  | "about"
  | "s1"
  | "s2"
  | "s3"
  | "g1"
  | "g2"
  | "g3"
  | "g4"
  | "g5"
  | "g6";

export type SiteConfig = {
  brand: string;
  brandShort: string;
  brandTag: string;
  location: string;
  instagramUrl: string;
  instagramHandle: string;
  /** International WhatsApp number without "+" or spaces, e.g. "569XXXXXXXX" */
  whatsappNumber: string;
  photos: Partial<Record<PhotoSlotId, string>>;
};

export const siteConfig: SiteConfig = {
  brand: "OPZ AUTO CARE",
  brandShort: "OPZ",
  brandTag: "AUTO CARE",
  location: "Pilares Verdes, Las Cabras, Chile",
  instagramUrl: "https://instagram.com/opzautocare",
  instagramHandle: "@opzautocare",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  photos: {
    // hero: "/images/hero.jpg",
  },
};
