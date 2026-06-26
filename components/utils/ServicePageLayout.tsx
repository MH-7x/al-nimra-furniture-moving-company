import React from "react";
import { FAQSection } from "@/components/utils/FaqsSection";
import CTASection from "@/components/utils/CTASection";
import QuoteSection from "@/components/utils/QuoteSection";
import { ReviewsSection } from "@/components/utils/ReviewsSection";
import Link from "next/link";
import {
  Check,
  Shield,
  Award,
  Sparkles,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  TrendingUp,
  UserCheck,
  Star,
  ArrowLeft,
  ChevronLeft,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface ServicePageData {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle?: string;
  introParagraphs: string[];
  featuresTitle: string;
  features: ServiceFeature[];
  whyChooseUsTitle: string;
  whyChooseUs: string[];
  pricingTitle: string;
  pricingHeaders: string[];
  pricingRows: string[][];
  pricingNotes?: string;
  processTitle?: string;
  processSteps?: ServiceStep[];
  processIntro?: string;
  areasTitle: string;
  areasContent: string;
  faqs: { question: string; answer: string }[];
  internalLinks: { title: string; href: string }[];
  imageName: string;
  imageAlt: string;
  extraContent?: React.ReactNode;
}

interface ServicePageLayoutProps {
  data: ServicePageData;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ data }) => {
  return (
    <main className="text-foreground rtl pb-20" dir="rtl">
      {/* Premium Split Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#114e54] via-[#075056] to-[#08363a] text-white py-16 lg:py-24 px-4 border-b border-white/5">
        {/* Glow Effects */}
        <div className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 rounded-full bg-[#fd5b09]/5 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-white/70 mb-6 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 opacity-50" />
            <Link
              href="/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA"
              className="hover:text-primary transition-colors"
            >
              الخدمات
            </Link>
            <ChevronLeft className="w-3.5 h-3.5 opacity-50" />
            <span className="text-primary font-bold">{data.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Right Side: Text content */}
            <div className="lg:col-span-7 text-right space-y-6">
              {/* Star rating badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/90">
                <span className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </span>
                <span className="font-bold">4.9/5</span>
                <span className="opacity-60">|</span>
                <span>تقييمات موثوقة في دبي</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-black leading-tight text-white tracking-tight">
                {data.heroTitle}
              </h1>

              <p className="text-white/80 mt-5">{data.introParagraphs[0]}</p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button>احصل على عرض سعر واتساب</Button>
                <Button variant={"secondary"}>اتصل الآن</Button>
              </div>
            </div>

            {/* Left Side: Glowing Image Placeholder Card */}
            <div className="lg:col-span-5 bg-white/50 aspect-square rounded-3xl drop-shadow-2xl overflow-hidden">
              <Image
                src={`/sepSer/${data.imageName}`}
                alt={data.imageAlt}
                loading="eager"
                priority
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Highlights Bar (Directly below hero) */}
      <section className="bg-slate-50 border-b border-muted py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {[
              {
                icon: Shield,
                title: "تأمين شامل 100%",
                desc: "حماية كاملة للممتلكات",
              },
              {
                icon: Clock,
                title: "دعم على مدار الساعة",
                desc: "تواصل سريع 24/7",
              },
              {
                icon: UserCheck,
                title: "فريق خبير ومدرب",
                desc: "خبرة تفوق 10 سنوات",
              },
              {
                icon: TrendingUp,
                title: "بدون أي دفعة مقدمة",
                desc: "الدفع عند الرضا التام",
              },
            ].map((prop, i) => {
              const Icon = prop.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 bg-white rounded-2xl border border-muted/50 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-foreground text-xs md:text-sm">
                      {prop.title}
                    </h4>
                    <p className="text-muted-foreground text-[10px] md:text-xs">
                      {prop.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Grid Layout */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Right Side: Main content area (Col 8) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Introduction Text Block */}
              <div className="bg-[#ffece1]/10 border border-[#ffece1]/50 p-6 md:p-8 rounded-3xl space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg relative overflow-hidden">
                <div className="absolute -left-12 -top-12 w-32 h-32 rounded-full bg-primary/5 blur-xl pointer-events-none" />
                {data.introParagraphs.slice(1).map((para, i) => (
                  <p key={i} className="md:text-base text-sm">
                    {para}
                  </p>
                ))}
              </div>

              {/* Mazaaya / Sub-services Feature Grid (Top-Accented Cards) */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#075056] flex items-center gap-3">
                  <span className="w-2.5 h-8 bg-primary rounded-full" />
                  {data.featuresTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.features.map((item, i) => (
                    <div key={i} className="group bg-white p-6 border-b">
                      <h3 className="font-medium text-lg text-secondary-foreground mb-3 flex items-center gap-2 ">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm ">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* EEAT Value Props Grid */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#075056] flex items-center gap-3">
                  <span className="w-2.5 h-8 bg-primary rounded-full" />
                  {data.whyChooseUsTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.whyChooseUs.map((bullet, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 p-5 rounded-2xl border border-muted  flex items-start gap-3.5"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-4 h-4 font-bold" />
                      </span>
                      <p className="text-secondary-foreground font-medium text-base leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Asymmetric Timeline / Process Steps */}
              {data.processTitle && data.processSteps && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-[#075056] flex items-center gap-3">
                    <span className="w-2.5 h-8 bg-primary rounded-full" />
                    {data.processTitle}
                  </h2>
                  {data.processIntro && (
                    <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                      {data.processIntro}
                    </p>
                  )}
                  <div className="space-y-8 relative pr-4">
                    {/* Timeline line */}
                    <div className="absolute right-[21px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-[#114e54]/50 to-muted z-0" />

                    {data.processSteps.map((step, i) => (
                      <div key={i} className="flex gap-6 relative z-10 group">
                        <span className="bg-gradient-to-br from-primary to-[#fd5b09] text-white w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 font-bold shadow-lg shadow-primary/20 group-hover:rotate-6 transition-all border border-white/10 text-lg">
                          {i + 1}
                        </span>
                        <div className="bg-white border border-muted rounded-2xl p-6 shadow-sm group-hover:shadow-md transition-all flex-1">
                          <h3 className="text-secondary-foreground font-bold text-base md:text-lg mb-1.5">
                            {step.title}
                          </h3>
                          {step.desc && (
                            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                              {step.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Injected custom extra structures */}
              {data.extraContent}

              {/* Pricing Section (Interactive & Badge-Highlighted) */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#075056] flex items-center gap-3">
                    <span className="w-2.5 h-8 bg-primary rounded-full" />
                    {data.pricingTitle}
                  </h2>
                  <span className="text-[10px] md:text-xs font-bold border border-primary/20 bg-primary/5 text-primary py-1.5 px-3 rounded-full">
                    محدث لعام 2026
                  </span>
                </div>

                <div className="overflow-x-auto rounded-3xl bg-white border border-muted shadow-sm">
                  <table className="w-full text-right border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#114e54] to-[#075056] text-white font-bold border-b border-muted">
                        {data.pricingHeaders.map((header, idx) => (
                          <th
                            key={idx}
                            className="py-4.5 px-6 text-sm md:text-base first:rounded-tr-3xl last:rounded-tl-3xl"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.pricingRows.map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-muted last:border-0 hover:bg-slate-50/50 transition-colors text-sm md:text-base"
                        >
                          {row.map((cell, cellIdx) => (
                            <td
                              key={cellIdx}
                              className={`py-4.5 px-6 ${
                                cellIdx === 0
                                  ? "font-bold text-secondary-foreground"
                                  : cellIdx === 1
                                    ? "text-primary font-bold"
                                    : "text-muted-foreground"
                              }`}
                            >
                              {cellIdx === 1 && !cell.includes("حسب") ? (
                                <span className="inline-block bg-[#ffece1]/60 text-primary py-1 px-3 rounded-full text-xs md:text-sm font-bold">
                                  {cell}
                                </span>
                              ) : (
                                cell
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {data.pricingNotes && (
                  <div className="bg-slate-50 p-5 rounded-2xl border border-muted mt-4 text-xs md:text-sm text-muted-foreground flex gap-3 items-start">
                    <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{data.pricingNotes}</p>
                  </div>
                )}
              </div>

              {/* Areas Served (Tag-Cloud styling) */}
              <div className="bg-slate-50/60 p-6 md:p-8 rounded-3xl border border-muted space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-[#075056] flex items-center gap-2">
                  <MapPin className="w-5.5 h-5.5 text-primary" />
                  {data.areasTitle}
                </h2>
                <div className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {data.areasContent.includes("دبي مارينا") ? (
                    <div className="space-y-4">
                      <p>
                        نوفر التغطية الشاملة في مختلف أحياء ومناطق دبي الرئيسية:
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {data.areasContent.split("،").map((area, idx) => (
                          <span
                            key={idx}
                            className="bg-white border border-muted hover:border-primary/20 py-1.5 px-3.5 rounded-xl text-xs md:text-sm font-medium text-secondary-foreground transition-all cursor-default"
                          >
                            {area.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p>{data.areasContent}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Left Side: Sticky Interactive Sidebar (Col 4) */}
            <aside className="lg:col-span-4 space-y-8 sticky top-28">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Fast Booking glassmorphic card */}
                <div className="bg-secondary-foreground p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden border border-white/5">
                  <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

                  <h3 className="text-xl font-bold mb-6 border-b text-white border-white/10 pb-4 flex items-center gap-2.5">
                    <Clock className="w-5.5 h-5.5 text-primary" />
                    ركن الحجز السريع
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm mb-6 leading-relaxed">
                    احصل على استشارة مجانية وعرض سعر مكتوب في دقائق معدودة عبر
                    قنوات الاتصال المباشرة للمشرف.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="https://wa.me/971541767605"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-white font-bold h-13 rounded-xl transition-all shadow-lg shadow-primary/25 w-full hover:-translate-y-0.5"
                    >
                      <span>تواصل واتساب فوري</span>
                    </a>
                    <a
                      href="tel:0541767605"
                      className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold h-13 rounded-xl transition-all w-full"
                    >
                      <span>اتصال هاتفي مباشر</span>
                    </a>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                      المشرف متصل حالياً
                    </span>
                    <span>معاينة مجانية تماماً</span>
                  </div>
                </div>

                {/*EEAT trust features */}
                <div className="bg-white p-8 rounded-[2rem] border border-muted shadow-sm space-y-6">
                  <h4 className="font-extrabold text-secondary-foreground text-xs uppercase tracking-wider border-b border-muted pb-3">
                    ضمانات شركة النمره
                  </h4>

                  {[
                    {
                      icon: Shield,
                      title: "تأمين شامل ضد التلف",
                      desc: "في حال حدوث أي كسر أو خدوش غير متوقعة للأثاث، نتحمل المسؤولية والتعويض بالكامل.",
                    },
                    {
                      icon: Award,
                      title: "فريق فني متخصص",
                      desc: "نوظف نجارين محترفين مجهزين بأدوات فك وتركيب متكاملة لمختلف أنواع وماركات الأثاث.",
                    },
                    {
                      icon: UserCheck,
                      title: "شفافية مطلقة بالأسعار",
                      desc: "السعر المتفق عليه قبل النقل هو السعر النهائي دون أي زيادة أو رسوم خفية إطلاقاً.",
                    },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-4">
                        <span className="text-primary bg-[#ffece1]/60 p-2 rounded-xl shrink-0 mt-0.5 shadow-sm">
                          <ItemIcon className="w-5 h-5" />
                        </span>
                        <div>
                          <h5 className="font-bold text-secondary-foreground text-sm mb-1">
                            {item.title}
                          </h5>
                          <p className="text-muted-foreground text-[11px] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection
        title={`الأسئلة الشائعة حول ${data.title}`}
        faqs={data.faqs.map((f) => ({
          question: f.question,
          answer: f.answer,
        }))}
      />

      {/* Social proof */}
      <ReviewsSection />

      {/* Sibling Internal Links Cloud */}
      <section className="py-16 px-4 bg-slate-50/50 border-y border-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-secondary-foreground">
            تصفح باقي خدماتنا في دبي
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.internalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-white border border-muted hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all py-3.5 px-6 rounded-2xl text-sm font-bold shadow-sm"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form and Final CTA */}
      <QuoteSection />
      <CTASection />
    </main>
  );
};

export default ServicePageLayout;
