import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FAQSection } from "@/components/utils/FaqsSection";
import CTASection from "@/components/utils/CTASection";
import QuoteSection from "@/components/utils/QuoteSection";
import { ReviewsSection } from "@/components/utils/ReviewsSection";
import {
  Home,
  Building2,
  Hotel,
  Briefcase,
  Boxes,
  Wrench,
  Warehouse,
  Music,
  ShieldAlert,
  Scissors,
  Truck,
  Trash2,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "خدمات نقل اثاث في دبي | شركة النمره — 13 خدمة احترافية",
  description:
    "خدمات نقل اثاث متكاملة في دبي: شقق، فلل، مكاتب، تغليف، فك وتركيب، تخزين. خبرة +10 سنوات، تأمين شامل، عرض سعر فوري. اتصل: 054 1767605",
  alternates: {
    canonical: "/خدمات",
  },
};

export default function ServicesHubPage() {
  const mainServices = [
    {
      title: "نقل اثاث المنزل في دبي",
      desc: "خدمة شاملة لنقل اثاث المنازل بكافة أحجامها، تبدأ بالمعاينة وتنتهي بترتيب الاثاث في المنزل الجديد. تشمل التغليف، الفك، النقل، التركيب، والتنظيف بعد الانتهاء.",
      href: "/خدمات/نقل-اثاث-المنزل-في-دبي",
      icon: Home,
    },
    {
      title: "نقل اثاث الشقق في دبي",
      desc: "الأنسب لسكان الشقق في أبراج دبي مارينا، JLT، الخليج التجاري، وغيرها. نتعامل مع قيود المباني (حجز المصعد، أوقات النقل، تصاريح الإدارة) بشكل احترافي.",
      href: "/خدمات/نقل-اثاث-الشقق-في-دبي",
      icon: Building2,
    },
    {
      title: "نقل اثاث الفلل في دبي",
      desc: "حلول مخصصة لأصحاب الفلل في الجميرا، دبي هيلز، نخلة جميرا، ودبي لاند. فريق أكبر، شاحنات أكبر، ونجارون متخصصون لفك غرف النوم الكبيرة والمطابخ.",
      href: "/خدمات/نقل-اثاث-الفلل-في-دبي",
      icon: Hotel,
    },
    {
      title: "نقل اثاث المكاتب في دبي",
      desc: "نقل اثاث الشركات والمكاتب مع تعطيل أدنى للعمل. نتولى نقل المكاتب، الكراسي، الخزائن، أجهزة الحاسوب، الملفات، والمعدات المكتبية بأمان.",
      href: "/خدمات/نقل-اثاث-المكاتب-في-دبي",
      icon: Briefcase,
    },
    {
      title: "تغليف الاثاث في دبي",
      desc: "خدمة تغليف منفصلة أو ضمن باقة النقل، باستخدام بلاستيك فقاعي، فوم، أغطية بطانية، صناديق كرتون مقواة، وأشرطة لاصقة عالية الجودة.",
      href: "/خدمات/تغليف-اثاث-في-دبي",
      icon: Boxes,
    },
    {
      title: "فك وتركيب الاثاث في دبي",
      desc: "نجارون متخصصون لفك غرف النوم، الخزائن، المطابخ، طاولات الطعام، وغيرها، وإعادة تركيبها بنفس الكفاءة في الموقع الجديد.",
      href: "/خدمات/فك-وتركيب-اثاث-في-دبي",
      icon: Wrench,
    },
    {
      title: "تخزين الاثاث في دبي",
      desc: "مستودعات مكيّفة ومراقبة على مدار الساعة، مع خيارات تخزين قصيرة وطويلة المدى، وخدمة استلام وتسليم من باب المنزل.",
      href: "/خدمات/تخزين-اثاث-في-دبي",
      icon: Warehouse,
    },
  ];

  const specializedServices = [
    {
      title: "نقل البيانو في دبي",
      desc: "حماية خاصة للآلات الموسيقية الثقيلة والحساسة.",
      icon: Music,
    },
    {
      title: "نقل الخزنة والأجهزة الثقيلة في دبي",
      desc: "معدات رفع للقطع التي تتجاوز 100 كجم.",
      icon: ShieldAlert,
    },
    {
      title: "تركيب الستائر والسجاد في دبي",
      desc: "خدمة مكمّلة بعد الانتقال لتنظيم بيتك الجديد.",
      icon: Scissors,
    },
    {
      title: "نقل الاثاث بين الإمارات",
      desc: "من دبي إلى أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، أم القيوين، والعين.",
      icon: Truck,
    },
    {
      title: "التخلص من الاثاث القديم في دبي",
      desc: "التخلص الآمن والمسؤول من الأثاث غير المرغوب فيه.",
      icon: Trash2,
    },
    {
      title: "نقل اثاث نفس اليوم في دبي",
      desc: "حلول طارئة عند الحاجة لنقل سريع خلال ساعات.",
      icon: Zap,
    },
  ];

  const whyChooseUs = [
    {
      title: "تواصل سريع عبر الواتساب",
      desc: "رد خلال دقائق، وعرض سعر فوري دون مماطلة.",
    },
    {
      title: "معاينة مجانية وعرض سعر دون التزام",
      desc: "في الموقع أو أونلاين مجاناً بالكامل.",
    },
    {
      title: "بدون دفعة مقدمة",
      desc: "تدفع فقط بعد تنفيذ الخدمة بنجاح.",
    },
    {
      title: "تأمين شامل",
      desc: "حماية على كل قطعة ننقلها ضد التلف أو الفقدان.",
    },
    {
      title: "شاحنات مغلقة ومكيّفة",
      desc: "حماية للأثاث من حرارة الصيف والغبار والأمطار.",
    },
    {
      title: "فريق بخبرة +10 سنوات",
      desc: "نجارون وعمال مدربون للتعامل مع مختلف العقبات والارتفاعات.",
    },
    {
      title: "خدمة 7 أيام في الأسبوع",
      desc: "مستعدون للنقل طوال الوقت، حتى في العطل الرسمية.",
    },
    {
      title: "شفافية كاملة في التسعير",
      desc: "لا توجد رسوم خفية، السعر المتفق عليه هو ما تدفعه.",
    },
  ];

  const pricingHeaders = ["الخدمة", "النطاق التقريبي"];
  const pricingRows = [
    ["نقل استوديو", "750 – 1,200 درهم"],
    ["نقل شقة غرفة وصالة", "1,200 – 1,750 درهم"],
    ["نقل شقة غرفتين وصالة", "1,800 – 2,500 درهم"],
    ["نقل شقة 3 غرف وصالة", "2,250 – 3,500 درهم"],
    ["نقل فيلا (3 غرف +)", "4,000 – 6,500 درهم"],
    ["نقل مكتب صغير", "من 800 درهم"],
    ["تغليف منفصل", "150 – 600 درهم"],
    ["فك وتركيب اثاث", "100 – 500 درهم"],
    ["تخزين شهري", "من 500 درهم"],
  ];

  const faqs = [
    {
      question: "كم تكلفة نقل الاثاث في دبي؟",
      answer: "يتراوح السعر بين 750 درهم لشقة استوديو و6,500 درهم لفيلا كبيرة. السعر النهائي يعتمد على حجم الأثاث، عدد الغرف، الخدمات الإضافية، والمسافة.",
    },
    {
      question: "هل تقدمون عرض سعر مجاني؟",
      answer: "نعم. نقدّم معاينة مجانية في الموقع أو عرض سعر فوري عبر الواتساب بناءً على وصفك للأثاث والمسافة، دون أي التزام.",
    },
    {
      question: "هل لديكم تأمين على الأثاث؟",
      answer: "نعم، كل عملية نقل مغطاة بتأمين شامل ضد التلف. في حال أي ضرر، نتحمل المسؤولية الكاملة.",
    },
    {
      question: "هل تنقلون اثاث بين الإمارات؟",
      answer: "نعم، نقدّم خدمة نقل الاثاث بين دبي وكافة إمارات الدولة، بما فيها أبوظبي، الشارقة، العين، وعجمان.",
    },
    {
      question: "كم تستغرق عملية نقل الاثاث؟",
      answer: "شقة استوديو: 4-6 ساعات. شقة كبيرة: 6-10 ساعات. فيلا: يوم كامل أو أكثر. نلتزم بالموعد المتفق عليه.",
    },
    {
      question: "هل أحتاج لدفع مقدم؟",
      answer: "لا. تدفع فقط بعد إتمام الخدمة بنجاح ورضاك التام عن النتيجة.",
    },
  ];

  return (
    <main className="bg-background text-foreground rtl pb-20 animate-fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#114e54] to-[#075056] text-white py-20 md:py-28 px-4">
        {/* Gradients */}
        <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto text-center md:text-right">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-white/80 mb-6 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-primary font-bold">الخدمات</span>
          </nav>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            دليل الخدمات الشامل
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
            خدمات نقل اثاث في دبي
          </h1>

          <p className="text-base md:text-xl text-white/85 max-w-3xl mb-8 leading-relaxed">
            تقدّم شركة النمره خدمات نقل اثاث في دبي بثلاث عشرة خدمة متكاملة تغطي كل سيناريو ممكن للنقل، من شقة استوديو إلى فيلا متعددة الطوابق، ومن مكتب صغير إلى مقر شركة كامل.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://wa.me/971541767605"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold text-sm md:text-base py-4 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all"
            >
              عرض سعر فوري عبر الواتساب
            </a>
            <a
              href="tel:0541767605"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm md:text-base py-4 px-8 rounded-xl border border-white/20 transition-all"
            >
              اتصل بنا: 054 1767605
            </a>
          </div>
        </div>
      </section>

      {/* Intro & Main Image Placeholder */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Image placeholder */}
          <div className="lg:col-span-6 aspect-video lg:aspect-auto bg-gradient-to-br from-[#ffece1]/30 via-slate-100 to-[#114e54]/5 rounded-3xl overflow-hidden shadow-xl border-4 border-white flex flex-col items-center justify-center p-8 text-center relative select-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#ffece1] flex items-center justify-center text-primary mb-3 shadow-sm">
              <Sparkles className="w-7 h-7" />
            </div>
            <p className="text-secondary-foreground font-black text-lg mb-1">
              [معاينة صورة دليل الخدمات: Hub Page]
            </p>
            <p className="text-muted-foreground text-xs mb-3">
              الاسم المقترح: <code className="bg-slate-100 px-2 py-0.5 rounded text-primary">naql-athath-services-dubai.jpg</code>
            </p>
            <span className="text-xs text-primary font-bold border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">
              نسبة العرض إلى الارتفاع 16:9 / 4:3 (placeholder)
            </span>
          </div>

          {/* Core Hub Introduction */}
          <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-3xl border border-muted shadow-sm flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#075056]">
              اثاثك يصل بنفس الحالة التي غادر بها
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base space-y-4">
              نحن شركة نقل اثاث مرخصة في دبي بخبرة تتجاوز عشر سنوات، ونقدّم عرض سعر فوري عبر الواتساب أو بمعاينة ميدانية مجانية، دون أي دفعة مقدمة.
              <br />
              <br />
              لتحقيق غايتنا، نستخدم شاحنات مغلقة ومكيّفة، ومواد تغليف عالية الجودة تتحمل حرارة دبي ورطوبتها، وفريقاً مدرباً على فك وتركيب جميع أنواع الأثاث. كل خدماتنا مغطاة بتأمين شامل، وتتوفر 7 أيام في الأسبوع.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#075056]">
              خدمات نقل الاثاث الأساسية
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              تشمل خدمات النقل السكني والتجاري والخدمات التكميلية الأساسية في دبي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-3xl border border-muted hover:border-primary/30 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline mt-auto self-start"
                  >
                    <span>تفاصيل الخدمة</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20 px-4 bg-slate-50/60 border-y border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#075056]">
              خدمات النقل المتخصصة
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              بعض عمليات النقل تحتاج فريقاً ومعدات مختلفة، ونحن جاهزون تماماً لتلبيتها
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-muted hover:border-primary/20 hover:shadow-sm transition-all flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ffece1] text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-secondary-foreground mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#075056]">
              لماذا تختار شركة النمره؟
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              نحن لسنا شركة نقل اثاث عادية في دبي. إليك ما يميّزنا ويضمن سلامة أثاثك بالكامل:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-muted flex flex-col gap-3.5 hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-foreground text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-20 px-4 bg-slate-50/60 border-y border-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#075056] text-center">
            أسعار خدمات نقل الاثاث في دبي
          </h2>
          <p className="text-muted-foreground text-center text-sm md:text-base mb-10 max-w-2xl mx-auto">
            الأسعار تختلف حسب حجم الأثاث، نوع العقار، المسافة، والخدمات المطلوبة. للتخطيط الأولي:
          </p>

          <div className="overflow-x-auto rounded-2xl bg-white border border-muted shadow-sm">
            <table className="w-full text-right border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-50 text-secondary-foreground font-bold border-b border-muted">
                  {pricingHeaders.map((header, idx) => (
                    <th key={idx} className="py-4 px-6 text-sm md:text-base">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-muted last:border-0 hover:bg-slate-50/50 transition-colors text-sm md:text-base"
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className={`py-4 px-6 ${
                          cellIdx === 0
                            ? "font-bold text-secondary-foreground"
                            : "text-primary font-bold"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#ffece1]/30 p-5 rounded-2xl border border-[#ffece1] mt-6 text-xs md:text-sm text-secondary-foreground flex gap-3 items-start">
            <span className="text-primary mt-0.5 font-bold">ℹ</span>
            <p className="leading-relaxed">
              هذه النطاقات تقريبية. للحصول على <strong>عرض سعر دقيق</strong>، تواصل معنا مباشرة عبر الواتساب على <strong>054 1767605</strong> ونرسل لك تقديراً في نفس اليوم.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-[#075056]">
            المناطق التي نخدمها
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-8">
            نغطي معظم مناطق دبي الرئيسية: دبي مارينا، الجميرا، البرشاء، ديرة، بر دبي، وسط مدينة دبي، الخليج التجاري، أبراج بحيرات جميرا (JLT)، قرية جميرا الدائرية (JVC)، قرية جميرا الثلاثية (JVT)، مردف، القصيص، القرهود، الراشدية، الجداف، الفرجان، موتور سيتي، واحة دبي للسيليكون، دبي هيلز، دبي الجنوب، مدينة دبي للإنتاج، DIFC، القوز، عود ميثاء، منخول، الكرامة، النهضة، الممزر، نخلة جميرا، جميرا غولف إستيتس، ريمرام، ليوان، ودبي لاند.
          </p>
          <p className="text-secondary-foreground font-semibold text-sm md:text-base border border-dashed border-primary/20 bg-primary/5 py-4 px-6 rounded-2xl inline-block">
            كما تصل خدماتنا إلى باقي إمارات الدولة: <strong>أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، أم القيوين، والعين</strong>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="أسئلة شائعة عن خدمات نقل الاثاث"
        faqs={faqs}
      />

      {/* Reviews, Quote and CTA Sections */}
      <ReviewsSection />
      <QuoteSection />
      <CTASection />
    </main>
  );
}
