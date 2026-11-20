import { siteConfig } from "@/data/site";

export const buildWhatsAppUrl = (message: string): string => {
  const encoded = encodeURIComponent(message);
  const number = siteConfig.whatsappNumber.trim();

  if (!number) {
    return `https://wa.me/?text=${encoded}`;
  }

  return `https://wa.me/${number}?text=${encoded}`;
};
