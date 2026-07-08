import { Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { dubaiSubLocations } from "@/lib/dubai-locations-data";
import SubLocationLayout from "@/components/utils/SubLocationLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const location = dubaiSubLocations.find((l) => l.slug === decodedSlug);

  if (!location) {
    return {
      title: "الصفحة غير موجودة",
    };
  } else {
    return MetadataTemplate({
      meta: {
        title: location.metaTitle,
        desc: location.metaDescription,
      },
      canonical: `/${location.slug}`,
      image: {
        path: location.images[0].src,
        alt: location.images[0].alt,
      },
    });
  }
}

export default async function SubLocationPage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const location = dubaiSubLocations.find((l) => l.slug === decodedSlug);

  if (!location) {
    notFound();
  } else return <SubLocationLayout data={location} />;
}
