import MetadataTemplate from "@/lib/MetaDataTemplate";
import Link from "next/link";
import QuoteSection from "@/components/utils/QuoteSection";
import CTASection from "@/components/utils/CTASection";
import { BreadcrumbSchema } from "@/components/utils/BreadcrumbSchema";
import { APP_URL } from "@/lib/utils";

export const metadata = MetadataTemplate({
  meta: {
    title: "اتصل بنا | شركة النمره لنقل الأثاث",
    desc: "تواصل مع شركة النمره لنقل الأثاث في الإمارات. نحن متواجدون على مدار الساعة للرد على استفساراتكم وتقديم خدمات النقل بكل احترافية وأمان.",
  },
  canonical: "/اتصل-بنا",
  image: {
    path: "/شركة-النمره-نقل-اثاث-في-دبي.jpg",
    alt: "اتصل بنا | شركة النمره لنقل الأثاث",
  },
});

export default function ContactPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "الرئيسية", url: APP_URL },
          {
            name: "اتصل بنا",
            url: `${APP_URL}/اتصل-بنا`,
          },
        ]}
      />
      {/* Hero / Intro Section */}
      <section
        className="bg-secondary/30 pt-36 pb-16 relative overflow-hidden"
        dir="rtl"
      >
        <div className="absolute top-0 end-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-32 -start-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute top-32 -end-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <span className="text-primary font-bold text-sm uppercase tracking-widest mb-3 block">
            تواصل معنا
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary-foreground mb-6 leading-tight">
            نحن هنا لخدمتك <br className="hidden md:block" />
            <span className="text-primary">على مدار الساعة</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            فريق النمره لخدمات نقل الأثاث في الإمارات مستعد لتلبية كافة
            احتياجاتكم. سواء كنتم تخططون لنقل منزلكم، فيلتكم، أو مكتبكم، يمكنكم
            التواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص يناسب متطلباتكم
            بدقة وأمان تام.
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            بتواصلك معنا، فإنك توافق على{" "}
            <Link
              href="/سياسة-الخصوصية"
              className="text-primary hover:underline"
            >
              سياسة الخصوصية
            </Link>{" "}
            و{" "}
            <Link href="/شروط-الخدمة" className="text-primary hover:underline">
              شروط الخدمة
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <QuoteSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
