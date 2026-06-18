import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/utils/FaqsSection";
import CTASection from "@/components/utils/CTASection";
import QuoteSection from "@/components/utils/QuoteSection";
import { Check } from "lucide-react";
import { ReviewsSection } from "./ReviewsSection";

export interface PricingRow {
  type: string;
  price: string;
  time: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SubLocationData {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  introText: string[];
  areaInsightsTitle: string;
  areaInsightsContent: React.ReactNode;
  buildingTypesTitle: string;
  buildingTypes: { title: string; desc: string }[];
  accessParkingTitle: string;
  accessParkingContent: string;
  timingsTitle: string;
  timings: { destination: string; time: string }[];
  pricingTitle: string;
  pricingRows: PricingRow[];
  servicesTitle: string;
  services: string[];
  howToBookTitle: string;
  howToBookSteps: string[];
  faqs: FAQ[];
  images: { src: string; alt: string; title?: string }[];
  internalLinks: { title: string; href: string }[];
}

interface SubLocationLayoutProps {
  data: SubLocationData;
}

const SubLocationLayout: React.FC<SubLocationLayoutProps> = ({ data }) => {
  return (
    <main className="bg-background text-foreground rtl pb-20" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary-foreground md:py-32 py-20 md:px-48 px-4">
        <div className="relative z-10 max-w-4xl">
          <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
            خدمة نقل احترافية
          </span>
          <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl mb-6">
            {data.heroTitle}
          </h1>
          <p className="text-base text-secondary mb-8">{data.introText[0]}</p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button>احصل على عرض سعر واتساب</Button>
            <Button variant={"secondary"}>اتصل بنا الآن</Button>
          </div>
        </div>
      </section>

      {/* Main Image Placeholder */}
      <section className="max-w-5xl mx-auto px-4 -mt-12 relative z-20">
        <div className="aspect-video w-full bg-muted rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative">
          <Image
            src={data.images[0]?.src || "/النمره-نقل-اثاث-خدمة-شاملة-دبي.jpg"}
            alt={data.heroTitle}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 flex items-end p-4"></div>
        </div>
      </section>

      {/* Intro & Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="space-y-6 mb-16  text-muted-foreground leading-relaxed">
                {data.introText.slice(1).map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-10 text-secondary-foreground flex items-center gap-4">
                <span className="w-2 h-10 bg-primary rounded-full" />
                {data.buildingTypesTitle}
              </h2>
              <div className="grid grid-cols-1 gap-6 mb-16">
                {data.buildingTypes.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white p-8 rounded-2xl border border-muted "
                  >
                    <h3 className="font-medium text-xl mb-3 text-secondary-foreground ">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-10 text-secondary-foreground flex items-center gap-4">
                <span className="w-2 h-10 bg-primary rounded-full" />
                {data.accessParkingTitle}
              </h2>
              <div className="bg-muted/30 p-8 rounded-3xl border border-muted/50 mb-16">
                <p className="text-muted-foreground leading-relaxed italic">
                  &quot;{data.accessParkingContent}&quot;
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-10 text-secondary-foreground flex items-center gap-4">
                <span className="w-2 h-10 bg-primary rounded-full" />
                {data.pricingTitle}
              </h2>
              <div className="overflow-hidden rounded-2xl bg-white border border-muted mb-8 shadow-sm">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-muted/50 text-secondary-foreground font-medium">
                      <th className="py-5 px-6">نوع الوحدة</th>
                      <th className="py-5 px-6">السعر التقديري</th>
                      <th className="py-5 px-6 text-left">مدة العمل</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.pricingRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-muted last:border-0 hover:bg-muted/20 transition-colors"
                      >
                        <td className="py-5 px-6 font-medium text-secondary-foreground">
                          {row.type}
                        </td>
                        <td className="py-5 px-6 text-primary font-medium">
                          {row.price} درهم
                        </td>
                        <td className="py-5 px-6 text-left font-medium text-muted-foreground">
                          {row.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mb-16 pr-2">
                * ملاحظة: السعر النهائي يعتمد على عدد القطع، الطابق، والمسافة
                إلى الوجهة.
              </p>
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-5 space-y-8">
              <div className="lg:sticky lg:top-28">
                <div className="bg-secondary-foreground p-10 rounded-[2.5rem] text-white shadow-2xl mb-8">
                  <h3 className="text-2xl font-medium mb-8 border-b text-white border-white/10 pb-4">
                    {data.timingsTitle}
                  </h3>
                  <div className="space-y-6">
                    {data.timings.map((t, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center group"
                      >
                        <span className="text-white/80 group-hover:text-white transition-colors">
                          {t.destination}
                        </span>
                        <span className="text-primary font-medium">
                          {t.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    className="w-full mt-10 h-12 text-lg font-bold bg-primary hover:bg-primary/90"
                  >
                    احجز موعدك الآن
                  </Button>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-muted shadow-lg">
                  <h3 className="text-2xl font-bold mb-8 text-secondary-foreground border-b border-muted pb-4">
                    {data.howToBookTitle}
                  </h3>
                  <div className="space-y-8 relative">
                    <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-muted z-0" />
                    {data.howToBookSteps.map((step, i) => (
                      <div key={i} className="flex gap-6 relative z-10">
                        <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold shadow-lg shadow-primary/20">
                          {i + 1}
                        </span>
                        <p className="text-secondary-foreground font-medium leading-relaxed pt-1">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Specialized Services Grid */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">{data.servicesTitle}</h2>
            <p className="text-muted-foreground text-lg">
              خدمات متكاملة تغطي كل ما تحتاجه عملية النقل في هذه المنطقة
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl flex flex-col items-center text-center gap-6 shadow-sm border border-muted "
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center ">
                  <Check className="w-8 h-8" />
                </div>
                <span className="font-bold text-lg text-secondary-foreground leading-snug">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title={
          data.faqs.length > 0 ? "الأسئلة الشائعة حول النقل في هذه المنطقة" : ""
        }
        faqs={data.faqs.map((f) => ({
          question: f.question,
          answer: f.answer,
        }))}
      />

      <ReviewsSection />

      {/* Internal Links Cloud */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-secondary-foreground">
            روابط تهمك
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {data.internalLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="bg-white border border-muted hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all py-3 px-8 rounded-2xl text-base font-bold shadow-sm"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
      <CTASection />
    </main>
  );
};

export default SubLocationLayout;
