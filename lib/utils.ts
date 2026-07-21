import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_LINK =
  "https://wa.me/+971541767605?text=Hello!%20I%20Need%20Moving%20services.";
export const PHONE_LINK = "tel:+971541767605";
export const APP_URL = process.env.APP_URL || "https://alnimramovers.com";

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
