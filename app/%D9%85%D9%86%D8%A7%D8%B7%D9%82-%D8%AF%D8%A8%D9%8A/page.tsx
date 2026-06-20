import { Metadata } from "next";
import { dubaiSubLocations } from "@/lib/dubai-locations-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "مناطق خدمات نقل الاثاث في دبي - شركة النمرة",
  description:
    "دليل كامل لجميع مناطق وأحياء دبي التي نغطيها بخدمات نقل الأثاث والفك والتغليف والتركيب الاحترافية. تصفح أسعار وتفاصيل منطقتك الآن.",
  alternates: {
    canonical: "/مناطق-دبي",
  },
};

export default function LocationsPage() {
  return (
    <main className="bg-background text-foreground rtl pb-24" dir="rtl">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-secondary-foreground md:py-28 py-16 md:px-28 px-4 text-center">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
            تغطية شاملة
          </span>
          <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl mb-6">
            مناطق خدماتنا في دبي
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            نوفر خدمات نقل الأثاث الاحترافية وتغليفه وفكه وتركيبه في جميع أحياء
            ومجمعات وأبراج دبي. اختر منطقتك للحصول على تفاصيل الأسعار والمدد
            الزمنية المحددة.
          </p>
        </div>
        <div
          className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ff6b00_1px,transparent_1px)] [background-size:16px_16px]"
          style={{ zIndex: 1 }}
        />
      </section>

      {/* Grid of Locations */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dubaiSubLocations.map((location) => (
            <div
              key={location.slug}
              className="group bg-white rounded-3xl p-8 border border-muted hover:border-primary/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-secondary-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                  {location.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {location.metaDescription}
                </p>
              </div>
              <Button
                asChild
                className="w-full text-base font-bold py-5 bg-muted text-secondary-foreground hover:bg-primary hover:text-white transition-colors duration-300 border-none cursor-pointer"
              >
                <Link href={`/${location.slug}`}>عرض تفاصيل الخدمة</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="bg-muted/30 py-16 px-4 border-t border-b border-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
            هل تحتاج إلى نقل أثاث خارج هذه المناطق؟
          </h2>
          <p className="text-muted-foreground mb-8">
            نتولى نقل الأثاث بين جميع إمارات الدولة على مدار 24 ساعة طوال أيام
            الأسبوع.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base font-bold">
              <Link href="https://wa.me/971541767605">
                تواصل معنا عبر واتساب
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-base font-bold"
            >
              <Link href="/contact">اتصل بنا هاتفياً</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
