import MetadataTemplate from "@/lib/MetaDataTemplate";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Check,
  Flag,
  Users,
  Truck,
  Award,
  ShieldCheck,
  Zap,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/utils/FaqsSection";

import { ReviewsSection } from "@/components/utils/ReviewsSection";
import { APP_URL, PHONE_LINK, WHATSAPP_LINK } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/utils/BreadcrumbSchema";

export const metadata = MetadataTemplate({
  meta: {
    title: "من نحن | شركة النمره لنقل الاثاث في دبي",
    desc: "شركة النمره لنقل الاثاث تأسست عام 2016 في دبي على يد عابد حسين. فريق من 20+ ناقل محترف و5 شاحنات مكيّفة. أسعار ثابتة بدون رسوم مخفية. تواصل معنا: 0541767605",
  },
  canonical: "/من-نحن",
  image: {
    path: "/sepSer/نقل-اثاث-المنزل-في-دبي-شركة-النمره.jpg",
    alt: "من نحن | شركة النمره لنقل الاثاث في دبي",
  },
});

const timeline = [
  {
    icon: Flag,
    year: "2016",
    title: "التأسيس",
    desc: "عابد حسين يؤسس شركة النمره لنقل الاثاث في دبي، ببداية متواضعة: شاحنة واحدة وفريق صغير، وفكرة واضحة منذ اليوم الأول - الاثاث يصل سليماً، والسعر واضح من البداية.",
  },
  {
    icon: Users,
    year: "النمو",
    title: "فريق يكبر عاماً بعد عام",
    desc: "مع تراكم الخبرة والثقة، يكبر الفريق ليضم أكثر من 20 ناقلاً محترفاً، كل واحد منهم يعرف كيف يتعامل مع مختلف أنواع الأثاث والتحديات اليومية في شوارع دبي.",
  },
  {
    icon: Truck,
    year: "الأسطول",
    title: "5 شاحنات مغلقة ومكيّفة",
    desc: "استثمرنا في أسطول من الشاحنات المغلقة والمكيّفة التي تحمي الاثاث من حرارة دبي ورطوبتها، وتعمل في شوارع المدينة طوال أيام الأسبوع.",
  },
  {
    icon: Award,
    year: "اليوم",
    title: "10 سنوات و+ من الثقة",
    desc: "بعد عقد كامل في سوق نقل الاثاث والعفش، نخدم النقل السكني والتجاري في دبي وباقي إمارات الدولة. لم نكبر بالإعلانات، بل لأن عملاءنا يرجعون إلينا ويرشّحوننا لغيرهم.",
  },
];

const stats = [
  { icon: Award, num: "10+", label: "سنوات خبرة في دبي" },
  { icon: Users, num: "20+", label: "ناقل محترف" },
  { icon: Truck, num: "5", label: "شاحنات مغلقة ومكيّفة" },
  { icon: Clock, num: "7", label: "أيام عمل في الأسبوع" },
];

const servicesList = [
  "نقل اثاث المنازل والشقق والفلل في دبي",
  "نقل اثاث المكاتب والشركات",
  "فك وتركيب الاثاث بالكامل",
  "تغليف احترافي بمواد عالية الجودة",
  "نقل البيانو والخزنات والأجهزة الثقيلة",
  "تخزين الاثاث في مستودعات مؤمّنة",
  "تركيب الستائر والسجاد",
  "التخلص من الاثاث القديم",
  "نقل الاثاث بين الإمارات",
  "نقل اثاث في نفس اليوم للحالات الطارئة",
];

const dubaiAreas = [
  "دبي مارينا",
  "جميرا",
  "البرشاء",
  "ديرة",
  "بر دبي",
  "وسط مدينة دبي",
  "الخليج التجاري",
  "أبراج بحيرات جميرا (JLT)",
  "JBC",
  "قرية جميرا الدائرية (JVC)",
  "قرية جميرا الثلاثية (JVT)",
  "مردف",
  "القصيص",
  "القرهود",
  "الراشدية",
  "الجداف",
  "الفرجان",
  "موتور سيتي",
  "واحة دبي للسيليكون",
  "دبي هيلز",
  "دبي الجنوب",
  "مدينة دبي للإنتاج",
  "مركز دبي المالي العالمي (DIFC)",
  "القوز",
  "عود ميثاء",
  "منخول",
  "الكرامة",
  "النهضة",
  "الممزر",
  "نخلة جميرا",
  "جميرا غولف إستيتس",
  "ريمرام",
  "ليوان",
  "دبي لاند",
];

const emirates = [
  { name: "أبوظبي", href: "/نقل-اثاث-ابوظبي" },
  { name: "الشارقة", href: "/نقل-أثاث-الشارقة" },
  { name: "عجمان", href: "/نقل-اثاث-عجمان" },
  { name: "العين", href: "/نقل-اثاث-العين" },
  { name: "رأس الخيمة", href: "/نقل-اثاث-راس-الخيمة" },
  { name: "الفجيرة", href: null },
  { name: "أم القيوين", href: "/نقل-الاثاث-ام-القيوين" },
];

const aboutFaqs = [
  {
    question: "منذ متى تعمل شركة النمره في نقل الاثاث؟",
    answer: (
      <p>
        تأسست الشركة عام 2016 في دبي على يد عابد حسين. أي أكثر من 10 سنوات في
        نقل الاثاث والعفش داخل دبي وباقي الإمارات.
      </p>
    ),
  },
  {
    question: "هل يوجد تأمين على الاثاث أثناء النقل؟",
    answer: (
      <p>
        نعم. كل عملية نقل مشمولة بتأمين شامل. إذا تعرضت أي قطعة لضرر أثناء
        النقل، نتحمل المسؤولية الكاملة.
      </p>
    ),
  },
  {
    question: "هل تعملون خارج دبي؟",
    answer: (
      <p>
        نعم. نقدم خدمات نقل الاثاث في جميع إمارات الدولة: أبوظبي، الشارقة،
        عجمان، العين، رأس الخيمة، الفجيرة، وأم القيوين.
      </p>
    ),
  },
  {
    question: "هل تطلبون دفعة مقدمة؟",
    answer: <p>لا. الدفع يكون بعد إتمام عملية النقل بالكامل.</p>,
  },
  {
    question: "كيف أحصل على عرض سعر لنقل الاثاث؟",
    answer: (
      <p>
        تواصل معنا عبر واتساب على الرقم{" "}
        <a
          href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
          dir="ltr"
          className="text-primary font-bold hover:underline"
        >
          0541767605
        </a>{" "}
        أو اطلب معاينة ميدانية مجانية. نرد بعرض سعر فوري.
      </p>
    ),
  },
  {
    question: "هل تتوفر خدمة نقل الاثاث في نفس اليوم؟",
    answer: (
      <p>
        نعم، نوفر خدمة نقل اثاث طارئ في نفس اليوم حسب التوفر. تواصل معنا مبكراً
        لضمان الحجز.
      </p>
    ),
  },
  {
    question: "ما الفرق بين المعاينة الميدانية والتقدير عبر الإنترنت؟",
    answer: (
      <p>
        في المعاينة الميدانية نزور موقعك ونحدد التكلفة بدقة بعد معاينة الاثاث
        والمبنى. التقدير عبر الإنترنت يتم عبر واتساب بناءً على صور ومعلومات
        تقدمها أنت. في الحالتين، السعر الذي نذكره هو السعر النهائي.
      </p>
    ),
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl" className="text-foreground pb-20">
      <BreadcrumbSchema
        items={[
          { name: "الرئيسية", url: APP_URL },
          {
            name: "من نحن",
            url: `${APP_URL}/من-نحن`,
          },
        ]}
      />
      {/* ══════════════════════════════════════════
          HERO — split editorial layout
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <nav
            aria-label="مسار التنقل"
            className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8 font-medium"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3 h-3 opacity-40" />
            <span className="text-foreground font-semibold">من نحن</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-primary font-bold text-xs uppercase tracking-widest border-s-2 border-primary ps-3 w-fit">
                قصة شركة النمره
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                من نحن
              </h1>
              <div className="flex flex-col gap-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  أسّس عابد حسين شركة النمره لنقل الاثاث في دبي عام 2016. بدأ
                  بشاحنة واحدة وفريق صغير، وبفكرة واحدة: الاثاث يصل سليماً،
                  والسعر واضح من البداية.
                </p>
                <p>
                  بعد 10 سنوات في سوق نقل الاثاث والعفش في دبي، أصبح الفريق يضم
                  أكثر من 20 ناقلاً محترفاً، ونشغّل 5 شاحنات مغلقة ومكيّفة تعمل
                  في شوارع دبي طوال الأسبوع. نتعامل مع النقل السكني والتجاري
                  داخل دبي وفي باقي إمارات الدولة، من الشقق والفلل إلى المكاتب
                  والشركات.
                </p>
                <p>
                  لم نكبر لأننا أنفقنا على الإعلانات. كبرنا لأن العملاء يرجعون
                  إلينا ويرشّحوننا لغيرهم. وهذا بحد ذاته أصدق دليل على جودة ما
                  نقدمه.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 transform transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/sepSer/نقل-اثاث-المنزل-في-دبي-شركة-النمره.jpg"
                  alt="فريق وشاحنة شركة النمره لنقل الاثاث في دبي"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
                <div className="absolute bottom-6 start-6 end-6  text-start">
                  <p className="font-bold text-lg mb-1 text-white!">
                    أكثر من ١٠ سنوات خبرة
                  </p>
                  <p className="text-white/80 text-sm">
                    في خدمة سكان دبي والإمارات
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -start-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -end-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════ */}
      <section className="bg-secondary-foreground text-background py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <Icon className="w-6 h-6 text-primary" />
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {s.num}
                  </p>
                  <p className="text-background/70 text-xs md:text-sm font-medium">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TIMELINE — alternating story
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
              رحلتنا
            </span>
            <h2 className="font-bold leading-tight">
              مسيرة عابد حسين وشركة النمره
            </h2>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="hidden md:block absolute start-1/2 top-2 bottom-2 w-px bg-primary/20 translate-x-1/2"
            />
            <ol className="flex flex-col gap-10 md:gap-4">
              {timeline.map((item, idx) => {
                const Icon = item.icon;
                const isEven = idx % 2 === 0;
                return (
                  <li
                    key={item.title}
                    className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center relative"
                  >
                    <div
                      aria-hidden
                      className="hidden md:flex absolute start-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground items-center justify-center z-10 shrink-0"
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div
                      className={
                        isEven ? "md:order-1 md:pe-14" : "md:order-2 md:ps-14"
                      }
                    >
                      <div className="bg-muted/30 rounded-2xl p-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2 md:hidden">
                          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4" />
                          </span>
                        </div>
                        <span className="text-primary font-bold text-xs uppercase tracking-widest">
                          {item.year}
                        </span>
                        <h3 className="font-bold text-lg leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className={isEven ? "md:order-2" : "md:order-1"} />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING TRANSPARENCY
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/النمره-نقل-اثاث-خدمة-شاملة-دبي.jpg"
                  alt="معاينة ميدانية وتقييم تكلفة نقل الاثاث"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-5">
              <span className="text-primary font-bold text-xs uppercase tracking-widest w-fit border-s-2 border-primary ps-3">
                الشفافية أولاً
              </span>
              <h2 className="font-bold leading-tight">
                أسعار واضحة من البداية
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  أكثر سؤال يصلنا: &quot;كم ستكون التكلفة النهائية فعلاً؟&quot;
                </p>
                <p>
                  الجواب بسيط: السعر الذي نذكره في عرض الأسعار هو نفسه الذي يظهر
                  في الفاتورة. لا رسوم مخفية عند التحميل أو التوصيل، ولا دفعة
                  مقدمة.
                </p>
                <p>
                  أسعارنا تنافسية مقارنةً بشركات النقل الأخرى في دبي. فريقنا
                  يعمل بكفاءة ونتجنب المصاريف غير الضرورية، وهذا ينعكس مباشرة
                  على ما يدفعه العميل.
                </p>
              </div>

              {/* Two paths to a quote */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="bg-muted/30 rounded-2xl p-5 flex flex-col gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-sm">معاينة ميدانية مجانية</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    نزور موقعك ونحدّد التكلفة في المكان مباشرة.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-2xl p-5 flex flex-col gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-sm">تقدير فوري عبر واتساب</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    أرسل صور أثاثك واحصل على سعر نهائي سريع.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAST, SKILLED TEAM
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-primary font-bold text-xs uppercase tracking-widest w-fit border-s-2 border-primary ps-3">
                خبرة يومية
              </span>
              <h2 className="font-bold leading-tight">فريق سريع يعرف شغله</h2>
              <div className="flex flex-col gap-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  فريقنا يستطيع فك وتغليف اثاث شقة كاملة خلال ساعات قليلة. هذه
                  السرعة جاءت من 10 سنوات عمل يومي في نقل الاثاث داخل دبي
                  وخارجها. كل ناقل في الفريق يعرف كيف يتعامل مع القطع المختلفة:
                  الخزائن الكبيرة، الطاولات الزجاجية، الأجهزة الكهربائية، وحتى
                  القطع التي تحتاج عناية خاصة كالبيانو والخزنات.
                </p>
                <p>
                  شاحناتنا مغلقة ومكيّفة. الاثاث لا يتعرض لحرارة دبي ولا
                  لرطوبتها أثناء النقل، حتى في عز الصيف.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src="/فريق-النمره-نقل-اثاث-دبي.jpg"
                  alt="فريق النمره أثناء تغليف ونقل الاثاث بحرفية"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES CHECKLIST
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
              خدماتنا الشاملة
            </span>
            <h2 className="font-bold leading-tight">
              خدمات نقل الاثاث التي نقدمها
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4">
              نتولى عملية النقل من أولها لآخرها: الفك، التغليف، التحميل، النقل،
              التركيب في المكان الجديد، ثم التنظيف بعد الانتهاء. هذه الخدمات
              تشمل:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-10">
            {servicesList.map((service) => (
              <div key={service} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-foreground/90 text-sm md:text-base font-medium">
                  {service}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-secondary/40 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
            <p className="text-secondary-foreground text-sm md:text-base font-medium leading-relaxed">
              كل عملية نقل مشمولة بتأمين كامل على جميع القطع المنقولة. نعمل 7
              أيام في الأسبوع.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DUBAI COVERAGE
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
              تغطية شاملة
            </span>
            <h2 className="font-bold leading-tight mb-4">
              المناطق التي نخدمها في دبي
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              مقرّنا في القوز الصناعية الثانية في دبي، ونغطي معظم مناطق المدينة:
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-2.5">
            {dubaiAreas.map((area) => (
              <span
                key={area}
                title={`نقل اثاث في ${area}`}
                className="bg-white text-foreground/85 text-xs font-semibold py-2 px-4 rounded-full inline-block transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          UAE-WIDE
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
              خارج دبي
            </span>
            <h2 className="font-bold leading-tight mb-4">
              نقل اثاث في جميع الإمارات
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              خدماتنا تمتد لتشمل جميع إمارات الدولة: أبوظبي، الشارقة، عجمان،
              العين، رأس الخيمة، الفجيرة، وأم القيوين.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {emirates.map((emirate) =>
              emirate.href ? (
                <Link
                  key={emirate.name}
                  href={emirate.href}
                  className="group bg-muted/30 hover:bg-primary/10 rounded-2xl p-5 flex flex-col items-center gap-2 text-center transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground/90 group-hover:text-primary text-sm font-bold transition-colors">
                    {emirate.name}
                  </span>
                </Link>
              ) : (
                <div
                  key={emirate.name}
                  className="bg-muted/30 rounded-2xl p-5 flex flex-col items-center gap-2 text-center"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground/90 text-sm font-bold">
                    {emirate.name}
                  </span>
                </div>
              ),
            )}
          </div>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl">
            سواء كنت تنتقل بين طابقين في نفس المبنى أو تنتقل لإمارة أخرى، فريق
            النمره يتولى التفاصيل من أول صندوق حتى آخر قطعة.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURE BANNER IMAGE
      ══════════════════════════════════════════ */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/نقل-اثاث-جميع-الامارات-النمره.jpg"
              alt="خدمات النمره لنقل الأثاث في جميع الإمارات"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT BANNER
      ══════════════════════════════════════════ */}

      <ReviewsSection />
      <FAQSection
        title="أسئلة شائعة عن شركة النمره لنقل الاثاث"
        faqs={aboutFaqs}
      />
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-3">
              <span className="inline-flex items-center gap-1.5 text-primary-foreground/80 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                تواصل معنا الآن
              </span>
              <h2 className="text-primary-foreground font-bold text-2xl md:text-3xl leading-tight">
                جاهزون نساعدك في نقلتك القادمة
              </h2>
              <address className="not-italic text-primary-foreground/90 text-sm md:text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                القوز الصناعية الثانية، القوز، دبي
              </address>
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJjeNo41ppXz4R34OmlNqaUBU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary-foreground/90 text-sm font-semibold hover:underline w-fit"
              >
                موقعنا على خرائط جوجل
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-primary-foreground/80 text-xs mt-2">
                بتواصلك معنا، فإنك توافق على{" "}
                <Link href="/سياسة-الخصوصية" className="hover:underline">
                  سياسة الخصوصية
                </Link>{" "}
                و{" "}
                <Link href="/شروط-الخدمة" className="hover:underline">
                  شروط الخدمة
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-7 font-bold gap-2"
                asChild
              >
                <a
                  href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  واتساب: 0541767605
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 font-bold gap-2 border-2 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href={PHONE_LINK} dir="ltr">
                  <Phone className="w-4 h-4" />
                  اتصل بنا الآن
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
