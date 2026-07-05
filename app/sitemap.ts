import { MetadataRoute } from "next";
import { dubaiSubLocations } from "@/lib/dubai-locations-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const APP_URL = process.env.APP_URL || "https://www.alnimramovers.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${APP_URL}`,
      lastModified: "2026-07-05",
      changeFrequency: "weekly",
      images: [`${APP_URL}/شركة-النمره-نقل-اثاث-في-دبي.jpg`],
    },
    {
      url: `${APP_URL}/مناطق-دبي`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/شركة-النمره-نقل-اثاث-في-دبي.jpg`],
    },
    {
      url: `${APP_URL}/من-نحن`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/sepSer/نقل-اثاث-المنزل-في-دبي-شركة-النمره.jpg`],
    },
    {
      url: `${APP_URL}/اتصل-بنا`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/شركة-النمره-نقل-اثاث-في-دبي.jpg`],
    },
    {
      url: `${APP_URL}/خدمات/تخزين-اثاث-في-دبي`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/تخزين-اثاث-في-دبي-مستودع-شركة-النمره.jpg`],
    },
    {
      url: `${APP_URL}/خدمات/تغليف-اثاث-في-دبي`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/تغليف-اثاث-في-دبي-شركة-النمره-نقل-اثاث.jpg`],
    },
    {
      url: `${APP_URL}/خدمات/فك-وتركيب-اثاث-في-دبي`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/فك-وتركيب-اثاث-في-دبي-نجار-شركة-النمره.jpg`],
    },
    {
      url: `${APP_URL}/خدمات/نقل-اثاث-الشقق-في-دبي`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/نقل-اثاث-الشقق-في-دبي-ابراج-شركة-النمره.jpg`],
    },
    {
      url: `${APP_URL}/خدمات/نقل-اثاث-الفلل-في-دبي`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/نقل-اثاث-الفلل-في-دبي-فيلا-النمره-نقل-اثاث.jpg`],
    },
    {
      url: `${APP_URL}/خدمات/نقل-اثاث-المكاتب-في-دبي`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/نقل-اثاث-المكاتب-في-دبي-شركة-النمره.jpg`],
    },
    {
      url: `${APP_URL}/خدمات/نقل-اثاث-المنزل-في-دبي`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/شركة-النمره-نقل-اثاث-في-دبي.jpg`],
    },
    {
      url: `${APP_URL}/خدمات`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}/النمره-نقل-اثاث-خدمة-شاملة-دبي.jpg`],
    },
    {
      url: `${APP_URL}/سياسة-الخصوصية`,
      lastModified: "2026-07-05",
      changeFrequency: "yearly",
      images: [`${APP_URL}/شركة-النمره-نقل-اثاث-في-دبي.jpg`],
    },
    {
      url: `${APP_URL}/شروط-الخدمة`,
      lastModified: "2026-07-05",
      changeFrequency: "yearly",
      images: [`${APP_URL}/شركة-النمره-نقل-اثاث-في-دبي.jpg`],
    },

    {
      url: `${APP_URL}/نقل-أثاث-الشارقة`,
      lastModified: "2026-07-05",
      changeFrequency: "weekly",
      images: [`${APP_URL}/shj/نقل-اثاث-الشارقة-النمره-شركة-نقل.jpg`],
    },
    {
      url: `${APP_URL}/نقل-اثاث-ابوظبي`,
      lastModified: "2026-07-05",
      changeFrequency: "weekly",
      images: [`${APP_URL}/auh/نقل-اثاث-ابوظبي-النمره-شركة-نقل.jpg`],
    },
    {
      url: `${APP_URL}/نقل-اثاث-العين`,
      lastModified: "2026-07-05",
      changeFrequency: "weekly",
      images: [`${APP_URL}/aln/نقل-اثاث-العين-النمره-جبل-حفيت.jpg`],
    },
    {
      url: `${APP_URL}/نقل-اثاث-راس-الخيمة`,
      lastModified: "2026-07-05",
      changeFrequency: "weekly",
      images: [`${APP_URL}/rak/نقل-اثاث-راس-الخيمة-النمره-فك-تغليف-نقل.jpg`],
    },
    {
      url: `${APP_URL}/نقل-اثاث-عجمان`,
      lastModified: "2026-07-05",
      changeFrequency: "weekly",
      images: [`${APP_URL}/ajm/نقل-اثاث-عجمان-النمره-شركة-نقل.jpg`],
    },
    {
      url: `${APP_URL}/نقل-الاثاث-ام-القيوين`,
      lastModified: "2026-07-05",
      changeFrequency: "weekly",
      images: [`${APP_URL}/uaq/نقل-اثاث-ام-القيوين-النمرة-شركة-نقل.jpg`],
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = dubaiSubLocations.map(
    (location) => ({
      url: `${APP_URL}/${location.slug}`,
      lastModified: "2026-07-05",
      changeFrequency: "monthly",
      images: [`${APP_URL}${location.images[0].src}`],
    }),
  );

  return [...staticRoutes, ...dynamicRoutes];
}
