import type { Metadata } from "next";
import { APP_URL } from "./utils";

export interface Data {
  meta: {
    title: string;
    desc: string;
  };
  canonical: string;
  image: {
    path: string;
    alt: string;
  };
}

export default function MetadataTemplate(data: Data): Metadata {
  return {
    title: data.meta.title,
    description: data.meta.desc,
    alternates: {
      canonical: `${APP_URL}${data.canonical}`,
    },
    openGraph: {
      url: `${APP_URL}${data.canonical}`,
      title: data.meta.title,
      images: [{ url: `${APP_URL}${data.image.path}`, alt: data.image.alt }],
      description: data.meta.desc,
      type: "website",
      countryName: "United Arab Emairtes",
      emails: ["nimramovers@gmail.com"],
      phoneNumbers: ["+971541767605"],
      siteName: "شركة النمره نقل اثاث",
    },
    twitter: {
      card: "summary_large_image",
      creator: "@alnimramovers",
      title: data.meta.title,
      description: data.meta.desc,
    },
  };
}
