import { Metadata } from "next";
import { dubaiSubLocations } from "@/lib/dubai-locations-data";
import SubLocationLayout from "@/components/utils/SubLocationLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return dubaiSubLocations.map((location) => ({
    slug: encodeURIComponent(location.slug),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const location = dubaiSubLocations.find((l) => l.slug === decodedSlug);

  if (!location) {
    return {
      title: "الصفحة غير موجودة",
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `/${location.slug}`,
    },
  };
}

export default async function SubLocationPage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const location = dubaiSubLocations.find((l) => l.slug === decodedSlug);

  if (!location) {
    notFound();
  }

  return <SubLocationLayout data={location} />;
}
