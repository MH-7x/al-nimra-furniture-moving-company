import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Clock,
  UserCheck,
  CheckCircle,
  ChevronLeft,
  AlertCircle,
  Star,
  Check,
  Award,
  Truck,
  Phone,
  MessageCircle,
  ArrowLeft,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/utils/FaqsSection";
import CTASection from "@/components/utils/CTASection";
import QuoteSection from "@/components/utils/QuoteSection";
import { ReviewsSection } from "@/components/utils/ReviewsSection";

export const metadata: Metadata = {
  title: "نقل اثاث العين | شركة النمره - أسعار تبدأ من 600 درهم",
  description:
    "شركة النمره نقل اثاث العين - فك وتركيب وتغليف ونقل مع تأمين شامل. معاينة مجانية وعرض سعر فوري. اتصل الآن 054 1767605",
  alternates: {
    canonical: "/نقل-اثاث-العين",
  },
};

const alainFaqs = [
  {
    question: "كم تكلفة نقل اثاث العين؟",
    answer: (
      <div className="space-y-3">
        <p>
          الأسعار تبدأ من 600 درهم لنقل استوديو وتزيد حسب عدد الغرف والطابق والمسافة. تواصل معنا على 054 1767605 للحصول على عرض سعر دقيق بعد المعاينة المجانية. ما فيه رسوم خفية.
        </p>
      </div>
    ),
  },
  {
    question: "كم يستغرق نقل اثاث منزل كامل في العين؟",
    answer: (
      <div className="space-y-3">
        <p>
          الاستوديو والشقة بغرفة واحدة تاخذ 3 إلى 5 ساعات. الشقة بغرفتين أو ثلاث تاخذ 5 إلى 8 ساعات. الفلل الكبيرة قد تحتاج يوم كامل. نعطيك تقدير دقيق للوقت خلال المعاينة.
        </p>
      </div>
    ),
  },
  {
    question: "هل يوجد تأمين على الاثاث أثناء النقل؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. كل قطعة مؤمنة أثناء النقل. في حالة حدوث أي ضرر، المشرف يعالج الموضوع فورا في الموقع، سواء بالإصلاح أو الاستبدال.
        </p>
      </div>
    ),
  },
  {
    question: "هل تقدمون خدمة نقل اثاث من العين إلى دبي أو أبوظبي؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. ننقل بين جميع الإمارات. العين إلى دبي حوالي ساعة ونصف، والعين إلى أبوظبي نفس المدة تقريبا. نفس التأمين ونفس جودة الخدمة.
        </p>
      </div>
    ),
  },
  {
    question: "هل يمكن نقل الاثاث في نفس اليوم؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. نوفر خدمة نقل طارئ في نفس اليوم حسب توفر الفريق. اتصل بدري في اليوم حتى نقدر نرتب لك.
        </p>
      </div>
    ),
  },
  {
    question: "ما هي أفضل فترة لنقل الاثاث في العين؟",
    answer: (
      <div className="space-y-3">
        <p>
          نص الشهر عادة أقل ازدحام وقد تحصل على أسعار أفضل. في الصيف، النقل الصبح بدري هو الأفضل. تجنب آخر الشهر لأن الطلب يكون مرتفع.
        </p>
      </div>
    ),
  },
  {
    question: "هل توفرون خدمة التخزين؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. عندنا وحدات تخزين مكيفة لفترات قصيرة وطويلة. مناسبة للي بين شقتين أو خلال تجديد المنزل.
        </p>
      </div>
    ),
  },
  {
    question: "كيف أحجز نقل اثاث مع شركة النمره؟",
    answer: (
      <div className="space-y-3">
        <p>
          اتصل على 054 1767605 أو أرسل واتساب. نرتب معاينة مجانية أو نعطيك تقدير فوري عبر الصور. بدون أي دفعة مقدمة.
        </p>
      </div>
    ),
  },
  {
    question: "هل فيه خدمة نقل اثاث العين للأثاث الغالي أو التحف؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. عندنا مواد تغليف خاصة للقطع الحساسة مثل التحف والمنحوتات واللوحات الكبيرة والمرايا. المشرف يحدد طريقة التغليف المناسبة لكل قطعة خلال المعاينة.
        </p>
      </div>
    ),
  },
  {
    question: "هل تتعاملون مع أثاث ايكيا؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم وكثير. اثاث ايكيا له طريقة فك وتركيب خاصة، وبعض القطع ما تتحمل الفك أكثر من مرة أو مرتين. عمالنا يعرفون هالشيء ويتعاملون معه بحذر.
        </p>
      </div>
    ),
  },
];

export default function AlAinMovingPage() {
  return (
    <main dir="rtl" className="text-foreground pb-20">
      {/* ══════════════════════════════════════════
          HERO — white editorial, orange-led
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden px-4 pt-12 pb-0">
        <div className="relative max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="مسار التنقل"
            className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8 font-medium"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <ChevronLeft className="w-3 h-3 opacity-40" />
            <span className="text-foreground font-semibold">
              نقل اثاث العين
            </span>
          </nav>

          {/* Orange eyebrow + star rating */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-primary font-bold text-xs uppercase tracking-widest border-r-2 border-primary pr-3">
              شركة النمره · العين
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </span>
              4.9 / 5 على خرائط قوقل
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-3xl">
            نقل اثاث{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">العين</span>
              <span
                aria-hidden
                className="absolute bottom-1 right-0 left-0 h-3 bg-primary/10 -skew-x-3 rounded-sm z-0"
              />
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            تحتاج نقل اثاث العين وما تعرف من وين تبدأ؟ شركة النمره تقدم خدمات نقل اثاث في العين بخبرة أكثر من 10 سنوات في السوق الإماراتي. فريقنا يتولى كل شيء من أول لحظة: الفك، التغليف، النقل، والتركيب في المكان الجديد. نغطي جميع مناطق العين من الهيلي والجيمي إلى المقام وزاخر والفوعة. أرسل رسالة واتساب على الرقم 054 1767605 واحصل على عرض سعر خلال دقائق. بدون دفعة مقدمة، وبدون رسوم مخفية.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Button size="lg" className="h-12 px-7 font-bold gap-2" asChild>
              <a
                href="https://wa.me/971541767605"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-hero"
              >
                <MessageCircle className="w-4 h-4" />
                عرض سعر فوري واتساب
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 font-bold gap-2 border-2"
              asChild
            >
              <a href="tel:0541767605" dir="ltr" id="cta-phone-hero">
                <Phone className="w-4 h-4" />
                054 1767605
              </a>
            </Button>
          </div>

          {/* 5 promise pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              "تأمين شامل مجاناً",
              "بدون دفعة مقدمة",
              "معاينة مجانية",
              "بدون رسوم خفية",
              "خدمة 7 أيام",
            ].map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1.5 text-xs font-semibold border border-muted bg-white px-3 py-1.5 rounded-full text-secondary-foreground"
              >
                <Check className="w-3 h-3 text-primary" />
                {p}
              </span>
            ))}
          </div>

          {/* Hero image — 16:9 */}
          <div className="w-full aspect-video rounded-t-3xl overflow-hidden relative border-x border-t border-muted">
            <Image
              src="/aln/نقل-اثاث-العين-النمره-شركة-نقل.jpg"
              alt="شركة النمره نقل اثاث في العين - شاحنة نقل أثاث أمام فيلا مع فريق عمل محترف"
              fill
              className="object-cover"
              loading="eager"
              priority
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════ */}
      <section className="bg-[#fd5b09] text-white py-5 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "+10", label: "سنوات خبرة في العين" },
              { num: "+5,000", label: "نقلة ناجحة" },
              { num: "40+", label: "فرد بالفريق" },
              { num: "12", label: "شاحنة مغلقة ومكيّفة" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl text-white font-black">
                  {s.num}
                </p>
                <p className="text-white/80 text-xs md:text-sm mt-0.5 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTRO PARAGRAPH
      ══════════════════════════════════════════ */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            نقل اثاث العين له تحدياته الخاصة. المدينة حارة معظم أشهر السنة، والمسافات بين الأحياء طويلة، وبعض المناطق السكنية فيها فلل كبيرة تحتاج تجهيزات مختلفة عن الشقق. عشان كذا، اللي يدور على شركة نقل اثاث في العين يحتاج شركة تعرف المدينة وتفهم طبيعة الاثاث والمباني فيها.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US (لماذا تختار شركة النمره لنقل اثاث العين؟)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#18232a] text-white mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              الفرق الحقيقي
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              لماذا تختار شركة النمره لنقل اثاث العين؟
            </h2>
            <p className="text-white/70 max-w-4xl text-sm md:text-base leading-relaxed">
              إذا سألت أي شخص جرب نقل اثاث العين عن أكبر مشكلة واجهها، غالبا الجواب يكون واحد من ثلاث: أسعار تتغير يوم النقل، أثاث يوصل مخدوش أو مكسور، أو شركة ما تجي في الموعد. عندنا الموضوع مختلف لأنك ما تدفع إلا بعد ما نخلص الشغل وتكون راضي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Clock,
                title: "خبرة تتجاوز 10 سنوات",
                desc: "عندنا خبرة فعلية في نقل الاثاث تتجاوز 10 سنوات. يعني تعاملنا مع كل أنواع الاثاث: إيطالي، صيني، ايكيا، تفصيل محلي، وحتى الاثاث الفاخر الثقيل. كل نوع له طريقة فك وتغليف مختلفة، وفريقنا يعرف الفرق.",
              },
              {
                icon: Shield,
                title: "تأمين كامل",
                desc: "التأمين عندنا يغطي كل قطعة أثناء النقل. مش مجرد كلام. إذا صار أي ضرر، المشرف يحل الموضوع في نفس المكان، سواء بالإصلاح أو الاستبدال. هذا التزام مكتوب في عقد الخدمة.",
              },
              {
                icon: Truck,
                title: "شاحنات مغلقة ومكيفة",
                desc: "شاحناتنا مغلقة ومكيفة. هذا مهم بالذات في العين لأن درجات الحرارة في الصيف توصل 48 درجة. الحرارة تأثر على الخشب والجلد والأجهزة الالكترونية. الشاحنات المفتوحة أو البيك أب ما توفر حماية كافية.",
              },
              {
                icon: UserCheck,
                title: "معاينة مجانية",
                desc: "المعاينة مجانية. يجي المشرف يشوف الاثاث، يقيم حجم الشغل، ويعطيك عرض سعر فوري بدون أي التزام. أو إذا ما عندك وقت، أرسل صور عبر الواتساب ونعطيك تقدير مبدئي. متاحين 7 أيام في الأسبوع من الساعة 7 صباحا حتى 9 مساءً.",
              },
              {
                icon: CheckCircle,
                title: "تنظيف المكان القديم والجديد",
                desc: "شيء ثاني يميزنا: بعد ما نخلص النقل، الفريق ينظف المكان القديم والجديد. ما نترك كراتين فارغة أو بقايا تغليف وراءنا. هالشيء يوفر عليك وقت وجهد خصوصا إذا كنت تسلم شقتك القديمة لصاحب العقار وتحتاج تكون نظيفة.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/5 p-8 rounded-3xl flex flex-col gap-4">
                  <span className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-bold text-white text-base">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES — alternating layout
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-14">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              خدماتنا
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              خدمات نقل اثاث في العين التي نقدمها
            </h2>
          </div>

          <div className="space-y-6">
            {/* Service 1 — شقق | image right */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث المنازل والشقق في العين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  سواء عندك استوديو صغير أو شقة 3 غرف، نتعامل مع كل حجم. الفريق يجي في الموعد، يفك الاثاث، يغلف كل قطعة، وينقل كل شيء إلى الشقة الجديدة. بعد التوصيل، النجار يركب الاثاث ويتأكد إن كل شيء في مكانه.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  كثير من عملاءنا في العين يسكنون in شقق مفروشة جزئيا ويحتاجون ينقلون أغراضهم الشخصية مع بعض قطع الاثاث. نتعامل مع هالحالات بمرونة وما نفرض باقة ثابتة. عندنا عاملات سيدات متوفرات لمن يحتاج مساعدة في تغليف الملابس والأغراض الشخصية.
                </p>
                <Link
                  href="/خدمات/نقل-اثاث-الشقق-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تعرف على خدمة نقل اثاث الشقق
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              {/* Image */}
              <div className="aspect-[4/3] md:aspect-auto relative order-1 md:order-2 min-h-[220px]">
                <Image
                  src="/aln/نقل-اثاث-شقق-العين-النمره.jpg"
                  alt="نقل أثاث الشقق في العين - فريق النمره ينقل أثاث من شقة سكنية"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 2 — فلل | image left */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              {/* Image */}
              <div className="aspect-[4/3] md:aspect-auto relative min-h-[220px]">
                <Image
                  src="/aln/نقل-اثاث-فلل-العين-النمره.jpg"
                  alt="نقل أثاث الفلل في العين - عمال النمره يحملون أثاث من فيلا فاخرة"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث الفلل في العين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  نقل اثاث الفلل في العين يختلف عن الشقق. الاثاث أكبر وأثقل، والأدوار أكثر، وعادة فيه حديقة ومطبخ كبير ومجلس منفصل. عندنا معدات خاصة للقطع الثقيلة مثل الخزائن الكبيرة وطاولات الطعام الرخامية والكنب العريض اللي ما يمر من الباب بسهولة. إذا عندك بيانو أو خزنة، عندنا فريق متخصص يتعامل معها بأدوات رفع مخصصة.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  أغلب فلل العين في مناطق مثل الهيلي والمقام وزاخر فيها مواقف واسعة للشاحنات، وهذا يسهل عملية التحميل. لكن بعض الفلل القديمة في الجيمي والخبيصي الشوارع فيها أضيق. فريقنا يعرف هالتفاصيل ويجهز حسب الموقع. الفلل تاخذ عادة يوم كامل حسب عدد الغرف، ونعطيك جدول زمني واضح قبل ما نبدأ.
                </p>
                <Link
                  href="/خدمات/نقل-اثاث-الفلل-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تعرف على خدمة نقل اثاث الفلل
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* Service 3 — مكاتب | image right */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث المكاتب في العين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نقل المكتب يختلف عن نقل المنزل. فيه أجهزة كمبيوتر وخوادم وطابعات ومستندات مهمة ما تقدر تخسرها. فريقنا مدرب على التعامل مع معدات تكنولوجيا المعلومات وتغليفها بالفوم المضاد للصدمات. نقدر ننقل مكتبك في عطلة نهاية الأسبوع أو بعد ساعات الدوام حتى ما يتأثر عملك ولا يتوقف يوم واحد. نرقم كل صندوق ونكتب عليه اسم القسم حتى يسهل الترتيب في المكتب الجديد. شركات ومكاتب العين في منطقة السوق وشارع خليفة ومنطقة الصناعية كلها ضمن نطاق خدمتنا.
                </p>
                <Link
                  href="/خدمات/نقل-اثاث-المكاتب-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تعرف على خدمة نقل اثاث المكاتب
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              <div className="aspect-[4/3] md:aspect-auto relative order-1 md:order-2 min-h-[220px]">
                <Image
                  src="/aln/نقل-اثاث-مكاتب-شركات-العين-النمره.jpg"
                  alt="نقل أثاث المكاتب والشركات في العين - فريق النمره ينقل أثاث مكتبي"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 4 — فك وتركيب | image left */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="aspect-[4/3] md:aspect-auto relative min-h-[220px]">
                <Image
                  src="/aln/فك-تغليف-تركيب-اثاث-العين-النمره.jpg"
                  alt="خدمة فك وتغليف وتركيب الأثاث في العين - نجار شركة النمره"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  فك وتركيب الاثاث
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  النجارين عندنا يتعاملون مع كل أنواع الاثاث. سواء كان اثاث ايكيا أو تفصيل خاص أو إيطالي فاخر، يفكونه بدون أي ضرر ويركبونه في المكان الجديد كما كان. اثاث ايكيا بالذات يحتاج حذر لأن البراغي لو انكسرت ما تنفع تتركب مرة ثانية. عمالنا عندهم خبرة طويلة في هالنوع ويعرفون ترتيب الفك والتركيب.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نقوم أيضا بتركيب الستائر والسجاد وتعليق التلفزيونات على الجدران. إذا عندك ثريا كبيرة أو رفوف جدارية، الفريق يتولاها. هالخدمات متضمنة في سعر نقل اثاث العين ولا تحتاج تدفع مبلغ إضافي عليها إلا في حالات خاصة مثل تركيب المطبخ الكامل.
                </p>
                <Link
                  href="/خدمات/فك-وتركيب-اثاث-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  خدمة فك وتركيب الاثاث <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* Service 5 — التغليف - إيش نستخدم وليش */}
            <article className="rounded-3xl overflow-hidden border border-muted p-8 md:p-10 bg-slate-50">
              <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                التغليف - إيش نستخدم وليش
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                كل غرض له مادة تغليف مختلفة. البابل راب (غلاف الفقاعات) للأشياء الهشة مثل الزجاج والمرايا والصحون. الفيلم المطاط لتثبيت أبواب الخزائن والأدراج. بطانيات القماش للأثاث الخشبي لمنع الخدوش. الكراتين القوية (5 طبقات) للملابس وأدوات المطبخ والكتب. والألواح الحرارية توضع بين القطع داخل الشاحنة لحماية إضافية أثناء النقل.
              </p>
              <Link
                href="/خدمات/تغليف-اثاث-في-دبي"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline"
              >
                خدمة تغليف الاثاث <ArrowLeft className="w-4 h-4" />
              </Link>
            </article>

            {/* Service 6 — تخزين اثاث في العين */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  تخزين اثاث في العين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  أحيانا تحتاج مكان تخزن فيه أثاثك لفترة. ربما بين شقتين، أو خلال تجديد المنزل، أو لأنك مسافر لشهرين وما تبي تدفع إيجار فاضي. نوفر وحدات تخزين مكيفة وآمنة لفترات قصيرة وطويلة. أغراضك تبقى بحالتها لحد ما تجهز مكانك الجديد. كثير من اللي يطلبون نقل اثاث العين يحتاجون تخزين مؤقت لأسبوع أو أسبوعين بين تسليم الشقة القديمة واستلام الجديدة.
                </p>
                <Link
                  href="/خدمات/تخزين-اثاث-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تعرف على خدمة تخزين الاثاث
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              {/* Image */}
              <div className="aspect-[4/3] md:aspect-auto relative order-1 md:order-2 min-h-[220px]">
                <Image
                  src="/aln/تخزين-اثاث-العين-النمره-مستودع.jpg"
                  alt="تخزين أثاث في العين - مستودعات النمره الآمنة لتخزين الأثاث"
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING TABLE
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 border-y border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
                شفافية كاملة
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-5">
                أسعار نقل اثاث العين
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                واحد من أكثر الأسئلة اللي نسمعها: كم تكلفة نقل اثاث العين؟ الجواب يعتمد على حجم الاثاث والمسافة والطابق وعدد القطع الخاصة. لكن حتى نعطيك فكرة واضحة، هذا جدول تقريبي مبني على أسعار خدماتنا:
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                <strong>ملاحظة:</strong> الأسعار تتغير حسب عدد الطوابق، توفر المصعد، نوع الاثاث، والمسافة بين الموقعين. أرسل لنا رسالة واتساب أو اتصل على 054 1767605 للحصول على سعر دقيق بعد المعاينة المجانية. ما فيه رسوم خفية.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                أسعار نقل اثاث العين بشكل عام أقل من أسعار دبي وأبوظبي لأن تكلفة المعيشة في المدينة أقل. لكن النقل بين الإمارات (مثلا من العين إلى دبي) يضيف تكلفة المسافة والوقود. ننصح دايما بالمعاينة المجانية لأنها تعطيك السعر الحقيقي بدون مفاجآت يوم النقل.
              </p>
              
              <div className="space-y-2 mt-4 text-sm text-muted-foreground bg-slate-50 p-5 rounded-2xl border border-muted">
                <p className="font-semibold text-secondary-foreground">أشياء تأثر على السعر:</p>
                <ul className="list-disc list-inside space-y-1.5">
                  <li>الطابق: الطوابق العالية بدون مصعد تحتاج عمال أكثر</li>
                  <li>القطع الخاصة: البيانو أو الخزنة لها تكلفة إضافية</li>
                  <li>المسافة: نقل داخل العين أرخص من النقل بين الإمارات</li>
                  <li>الوقت: النقل في نهاية الشهر عادة يكون أكثر طلبا</li>
                  <li>التغليف: إذا عندك أغراض هشة كثيرة مثل التحف والمرايا الكبيرة، التغليف ياخذ وقت ومواد أكثر</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-x-auto rounded-2xl border border-muted bg-white">
                <table className="w-full text-right border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-muted bg-slate-50 text-secondary-foreground font-semibold">
                      <th className="py-3.5 px-5">نوع النقل</th>
                      <th className="py-3.5 px-5">عدد العمال</th>
                      <th className="py-3.5 px-5">عدد الشاحنات</th>
                      <th className="py-3.5 px-5">السعر التقريبي</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted text-muted-foreground">
                    {[
                      { type: "استوديو", crew: "3-4", trucks: "1", price: "600 - 1,000 درهم" },
                      { type: "غرفة وصالة", crew: "4", trucks: "1", price: "800 - 1,200 درهم" },
                      { type: "غرفتين وصالة", crew: "4-5", trucks: "1-2", price: "1,000 - 1,700 درهم" },
                      { type: "فيلا غرفتين", crew: "4-6", trucks: "1-2", price: "1,200 - 1,800 درهم" },
                      { type: "فيلا 3 غرف", crew: "6-7", trucks: "1-2", price: "1,800 - 2,500 درهم" },
                      { type: "فيلا 4-5 غرف", crew: "7-10", trucks: "2-3", price: "2,500 - 4,000 درهم" },
                      { type: "نقل مكتب صغير", crew: "4-5", trucks: "1", price: "1,000 - 1,500 درهم" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-5 font-semibold text-secondary-foreground">
                          {row.type}
                        </td>
                        <td className="py-4 px-5">{row.crew}</td>
                        <td className="py-4 px-5">{row.trucks}</td>
                        <td className="py-4 px-5 text-primary font-bold">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  الأسعار نهائية ولا توجد بها رسوم إضافية مخفية. ننصحك بالمعاينة المجانية أو إرسال تفاصيل الأثاث عبر الواتساب.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS — 6 steps grid
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              خطوة بخطوة
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              كيف تتم عملية نقل الاثاث مع شركة النمره؟
            </h2>
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
              واحد من الأسباب اللي تخلي الناس يترددون في نقل اثاث العين هو إنهم ما يعرفون إيش بيصير بالضبط. عندنا العملية واضحة ومرتبة من أول اتصال لحد ما تستلم بيتك الجديد:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "1. التواصل والمعاينة المجانية",
                desc: "تتصل أو ترسل واتساب. يجي المشرف لموقعك، يشوف الاثاث والأغراض، ويعطيك عرض سعر مباشر. إذا كنت مشغول، أرسل صور وفيديو ونعطيك تقدير مبدئي عن بعد.",
              },
              {
                title: "2. الاتفاق وتحديد الموعد",
                desc: "بعد ما توافق على السعر، نحدد اليوم والوقت اللي يناسبك. ما نطلب أي دفعة مقدمة.",
              },
              {
                title: "3. الفك والتغليف",
                desc: "الفريق يوصل في الموعد المحدد. النجارين يفكون الاثاث. فريق التغليف يلف كل قطعة بالمواد المناسبة. الأشياء الهشة تاخذ عناية إضافية.",
              },
              {
                title: "4. التحميل والنقل",
                desc: "كل شيء يتحمل في الشاحنة المغلقة بترتيب معين. القطع الثقيلة في الأسفل، الهشة في مكان آمن. المشرف يتابع التحميل شخصيا.",
              },
              {
                title: "5. التفريغ والتركيب",
                desc: "في المكان الجديد، الفريق ينزل كل شيء ويبدأ تركيب الاثاث. غرفة بغرفة، كل شيء يرجع مثل ما كان. تركيب الستائر وتعليق التلفزيون إذا طلبت.",
              },
              {
                title: "6. التسليم والدفع",
                desc: "تتأكد إن كل شيء تمام. بعدها يتم الدفع. إذا فيه أي ملاحظة، المشرف يحلها قبل ما يمشي الفريق.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-muted p-6 relative"
              >
                <span className="text-5xl font-black text-primary/10 absolute top-4 left-4 leading-none select-none">
                  {i + 1}
                </span>
                <h3 className="font-bold text-secondary-foreground text-sm mb-2 mt-6">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-muted pt-6 space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-4xl">
              هالخطوات تنطبق على كل أنواع النقل: شقة صغيرة، فيلا كبيرة، أو مكتب. الفرق الوحيد هو عدد العمال وحجم الشاحنات. العملية نفسها ما تتغير لأنها مبنية على سنوات من التجربة في نقل اثاث العين وباقي الإمارات.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AREAS — tag cloud
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              تغطية شاملة
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              المناطق التي نخدمها في العين
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              نقدم خدمات نقل اثاث العين في جميع مناطقها بدون استثناء. فريقنا يعرف شوارع المدينة ومداخل المجمعات السكنية وأماكن وقوف الشاحنات.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "الهيلي",
              "الجيمي",
              "المقام",
              "زاخر",
              "الفوعة",
              "المسعودي",
              "اليحر",
              "القطارة",
              "التوية",
              "السلامات",
              "المطاوعة",
              "العامرية",
              "مزيد",
              "الطوية",
              "الخبيصي",
              "مدينة خليفة أ",
              "الظاهرة",
              "المنامة",
              "المعترض",
              "البطين",
              "الجاهلي",
              "المربع",
              "العين الفايضة",
            ].map((area) => (
              <span
                key={area}
                className="bg-white border border-muted hover:border-primary/40 hover:text-primary transition-colors py-2 px-4 rounded-xl text-xs md:text-sm font-medium text-secondary-foreground cursor-default"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground border-t border-muted pt-6">
            <div className="space-y-4">
              <p>
                لكل منطقة في العين خصوصيتها. بعض المناطق فيها فلل كبيرة تحتاج شاحنات أكبر مثل الهيلي والمقام. ومناطق مثل الجيمي والخبيصي فيها شقق أكثر ومباني متعددة الطوابق. فريقنا يعرف أماكن مواقف الشاحنات وأوقات الذروة في كل منطقة.
              </p>
              <p>
                منطقة زاخر مثلا فيها مجمعات سكنية حكومية كبيرة، والنقل فيها يحتاج تنسيق مسبق مع إدارة المجمع. منطقة الفوعة والمسعودي فيها فلل واسعة وعادة الشاحنة توقف قريب من الباب. المناطق الصناعية مثل منطقة الهيلي الصناعية نتعامل معها لنقل المكاتب والمستودعات.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-secondary-foreground text-base">
                إذا كنت ساكن في منطقة ما ذكرناها، تواصل معنا. نغطي كل العين بلا استثناء.
              </p>
            </div>
          </div>

          {/* Sub-section: نقل اثاث بين الإمارات */}
          <div className="mt-12 border-t border-muted pt-10">
            <h3 className="text-xl font-bold mb-4">نقل اثاث بين الإمارات</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-3xl">
              إذا كنت تنتقل من العين إلى إمارة ثانية، نغطي هذه المسارات بشكل يومي ونوفر نفس مستوى التأمين والجودة. الشاحنات مغلقة ومكيفة وتحمي أثاثك على الطرق السريعة الطويلة:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                { route: "العين ← دبي", dist: "حوالي 150 كم", time: "ساعة ونصف تقريبا" },
                { route: "العين ← أبوظبي", dist: "حوالي 160 كم", time: "ساعة ونصف تقريبا" },
                { route: "العين ← الشارقة", dist: "حوالي 180 كم", time: "ساعتين تقريبا" },
              ].map((p, i) => (
                <div key={i} className="bg-white border border-muted rounded-3xl p-6 flex flex-col justify-between shadow-sm">
                  <div>
                    <h4 className="font-bold text-base text-secondary-foreground mb-2">
                      {p.route}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      المسافة: {p.dist} · الوقت: {p.time}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={p.route.includes("دبي") ? "/" : p.route.includes("الشارقة") ? "/نقل-أثاث-الشارقة" : "/نقل-اثاث-ابوظبي"}
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      تصفح فرع الإمارات الأخرى <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              الخدمة والتأمين نفس الشيء سواء كان النقل داخل العين أو بين الإمارات. كثير من عملاءنا ينقلون من العين إلى دبي بسبب تغيير العمل، أو من دبي إلى العين للسكن بأسعار أقل. في كلا الاتجاهين، نوفر نفس مستوى نقل اثاث العين اللي اعتدت عليه.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUOTE SECTION (utility component)
      ══════════════════════════════════════════ */}
      <QuoteSection />

      {/* ══════════════════════════════════════════
          TIPS
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              من تجربتنا
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              نصائح قبل نقل اثاثك في العين
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              من واقع تجربتنا في نقل عفش العين على مدار سنوات، هذي أشياء تسهل عليك عملية النقل وتوفر عليك وقت ومال:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 divide-y md:divide-y-0 border border-muted rounded-3xl overflow-hidden bg-white">
            {[
              {
                title: "ابدأ التخطيط من بدري",
                desc: "حاول تتواصل مع شركة النقل قبل أسبوعين على الأقل. نهاية الشهر وبداية الصيف فترات مزدحمة، والحجز المبكر يضمن لك الموعد اللي يناسبك.",
              },
              {
                title: "تخلص من اللي ما تحتاجه",
                desc: "كل ما قل عدد القطع، قل السعر. إذا عندك أثاث قديم تبي تتخلص منه، نقدر نساعدك في ذلك.",
              },
              {
                title: "الأغراض الشخصية خذها معك",
                desc: "المستندات المهمة، المجوهرات، الأدوية، والأشياء الثمينة الصغيرة. خليها معك في سيارتك.",
              },
              {
                title: "بلّغ إدارة المبنى",
                desc: "أحجز المصعد وبلّغ الأمن. بعض المباني تطلب إذن مسبق لدخول الشاحنات.",
              },
              {
                title: "اختر الوقت الصح",
                desc: "في الصيف، النقل الصبح بدري أفضل بكثير. تجنب فترة الظهيرة لأن الحرارة تأثر على الاثاث وعلى أداء فريق العمل.",
              },
              {
                title: "صوّر أثاثك قبل النقل",
                desc: "التوثيق بالصور يحمي حقك وحق شركة النقل. صور كل قطعة من زاويتين على الأقل، خصوصا الاثاث الغالي أو اللي عليه خدوش قديمة. هالشيء يمنع أي سوء فهم بعد النقل.",
              },
              {
                title: "جهز قائمة بالأغراض",
                desc: "اكتب كل شيء عندك. غرفة بغرفة. هالقائمة تساعد شركة النقل تعطيك سعر أدق وتساعدك تتأكد إن كل شيء وصل.",
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 md:p-7 border-b md:border-b border-muted last:border-b-0 md:[&:nth-child(odd)]:border-l"
              >
                <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-xs font-black mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-secondary-foreground text-sm mb-1.5">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SUMMER MOVING
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-y border-muted">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4 text-center">
            نقل الاثاث في العين خلال الصيف
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            العين من أحر المدن في الإمارات. في يوليو وأغسطس، الحرارة توصل 48 إلى 50 درجة. هذا يأثر على الاثاث أكثر مما يتوقع الناس.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            الخشب يتمدد ويتقوس في الحرارة العالية. الجلد يتشقق. الأجهزة الالكترونية ترتفع حرارتها. حتى المواد اللاصقة في بعض قطع الاثاث ممكن تضعف.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            عشان كذا نستخدم شاحنات مغلقة ومكيفة. الاثاث يبقى في بيئة معتدلة طوال الرحلة. ونضع ألواح حرارية عازلة بين القطع داخل الشاحنة.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            في الصيف، ننصح بالنقل في الفترة من 6 صباحا إلى 11 صباحا. الحرارة تكون أقل، والفريق يشتغل بكفاءة أعلى.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            العواصف الرملية أيضا شيء نتعامل معه في العين. الشاحنات المغلقة تحمي أثاثك من الرمل والغبار اللي ممكن يخدش الأسطح أو يدخل في الأجهزة الالكترونية.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            إذا كنت تخطط لـ نقل اثاث العين في شهر يونيو أو يوليو أو أغسطس، احجز قبل أسبوعين على الأقل. هالفترة فيها طلب عالي لأن كثير من عقود الإيجار تنتهي مع نهاية العام الدراسي. الحجز المبكر يضمن لك الموعد والسعر.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            شيء ما يفكرون فيه كثير: حتى الأجهزة الالكترونية مثل التلفزيونات وأجهزة الكمبيوتر تتأثر بالحرارة. إذا تركت تلفزيون 65 بوصة في بيك أب مفتوح تحت الشمس ساعة، الشاشة ممكن تتضرر من الداخل. الشاحنة المكيفة تحل هالمشكلة تماما.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW TO CHOOSE A COMPANY
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              كيف تختار شركة نقل اثاث في العين؟
            </h2>
            <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              إذا كتبت &quot;نقل اثاث العين&quot; في قوقل، بتطلع لك عشرات الشركات. بعضها ممتاز وبعضها ما يستاهل. الفرق بينهم مش دايما واضح من الإعلان. هذي معايير تساعدك تختار صح:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "التراخيص", desc: "تأكد إن الشركة مسجلة ومرخصة لنقل الاثاث. الشركات غير المرخصة ما عندها التزام قانوني تجاهك إذا صار ضرر." },
              { title: "التأمين", desc: "اسأل عن تفاصيل التأمين. إيش يغطي بالضبط؟ هل التعويض يكون بالإصلاح أو الاستبدال؟ خذ الجواب مكتوب." },
              { title: "المعاينة المجانية", desc: "الشركة المحترفة ما تعطيك سعر من غير ما تشوف الاثاث. إذا شركة أعطتك سعر بالتلفون بدون ما تجي تشوف، توقع مفاجآت." },
              { title: "حالة الشاحنات", desc: "الشاحنات المغلقة هي المعيار. البيك أب المفتوح مناسب لنقل قطعة أو قطعتين، لكن مش لنقل بيت كامل." },
              { title: "آراء العملاء", desc: "شوف التقييمات على قوقل. اقرأ التعليقات السلبية بالذات لأنها تعطيك صورة حقيقية عن مشاكل الشركة." },
              { title: "سياسة الدفع", desc: "الشركة اللي تطلب دفعة مقدمة كبيرة قبل ما تبدأ الشغل، فكر مرتين. في شركة النمره، الدفع يكون بعد الانتهاء من كل شيء وبعد ما تتأكد إن أثاثك سليم." },
              { title: "اسأل عن المعدات", desc: "الشركة اللي تنقل بيت كامل ببيك أب مفتوح وبدون مواد تغليف، النتيجة معروفة. اسأل عن نوع الشاحنات ومواد التغليف قبل ما توافق." },
              { title: "خذ أكثر من عرض سعر", desc: "تواصل مع 3 شركات نقل اثاث في العين على الأعل وقارن. مش بس السعر، قارن إيش يشمل السعر. بعض الشركات تعطيك سعر رخيص لكن التغليف والتركيب والنظافة كلها إضافية. اسأل: هل السعر يشمل الفك والتركيب والتغليف والنقل والتنظيف؟ عندنا في شركة النمره الجواب نعم على كل هالأشياء." },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-muted shadow-sm hover:shadow-md transition-shadow">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-4 font-bold text-xs">
                  {i + 1}
                </span>
                <h3 className="font-bold text-secondary-foreground text-sm mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMMON ERRORS
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              أخطاء شائعة في نقل اثاث العين وكيف تتجنبها
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              من خلال شغلنا في نقل الاثاث بالعين، شفنا أخطاء كثير يقع فيها الناس وتكلفهم فلوس أو اثاث. خلني أذكر لك أكثرها تكرار:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "الاعتماد على عمال بدون شركة", desc: "بعض الناس يجيبون عمال من الشارع ويستأجرون بيك أب. السعر يطلع أرخص فعلا، لكن ما فيه تأمين، ما فيه مسؤولية، وإذا انكسر شيء ما تقدر ترجع لأحد. شفنا حالات كثيرة الناس تتصل فينا بعد ما جربت هالطريقة وخسرت قطع أثاث غالية." },
              { title: "النقل بدون تغليف", desc: "حتى لو المسافة قصيرة، الاثاث يتحرك داخل الشاحنة ويصطدم ببعض. خدش واحد على طاولة خشبية يكلف إصلاحه أكثر من تكلفة التغليف كله." },
              { title: "ما يفحصون الاثاث قبل وبعد", desc: "لازم تصور كل قطعة قبل النقل وتفحصها بعد التوصيل. هالشيء يحميك ويحمي الشركة." },
              { title: "ينقلون في وقت الذروة بدون حجز مسبق", desc: "آخر الشهر وبداية الصيف هي أكثر فترات الطلب على نقل الاثاث في العين. إذا ما حجزت قبل أسبوع أو أسبوعين، ممكن ما تلاقي موعد مناسب أو تدفع أكثر." },
              { title: "ينسون يبلغون المبنى", desc: "المصعد محجوز، الأمن ما يسمح بدخول الشاحنة، والنتيجة تأخير ساعات. اتصل بإدارة المبنى قبل يوم النقل بيومين على الأقل." },
            ].map((e, i) => (
              <div key={i} className="bg-white border border-muted rounded-3xl p-6 shadow-sm hover:border-primary/20 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-secondary-foreground text-sm mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary shrink-0" />
                    {e.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA BLOCK (inline — before FAQs)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border-2 border-dashed border-primary/20 bg-primary/3 p-10 md:p-14 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
              احجز الآن
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              احجز نقل اثاث العين الآن
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 max-w-3xl mx-auto">
              تبي تنقل قريب؟ سواء كنت تنقل داخل العين أو من العين لإمارة ثانية، كلمنا واحصل على سعرك خلال دقائق. نقلنا أثاث أكثر من ألف عائلة في العين. أثاثك يوصل سليم والسعر هو نفس اللي اتفقنا عليه من البداية.
            </p>
            <div className="text-xs md:text-sm text-secondary-foreground/80 space-y-2 mb-8 max-w-md mx-auto border-y border-muted py-4">
              <p>📍 <strong>العنوان:</strong> القوز الصناعية الثانية، دبي (نخدم جميع الإمارات بما فيها العين)</p>
              <p>🕒 <strong>أوقات العمل:</strong> 7 أيام في الأسبوع</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button size="lg" className="h-13 px-8 font-bold gap-2" asChild>
                <a
                  href="https://wa.me/971541767605"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-whatsapp-bottom"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب — أرسل رسالة الآن
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 font-bold border-2 gap-2"
                asChild
              >
                <a href="tel:0541767605" dir="ltr" id="cta-phone-bottom">
                  <Phone className="w-5 h-5" />
                  054 1767605
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-muted-foreground">
              <span>✓ المعاينة مجانية</span>
              <span>✓ ما نطلب دفعة مقدمة</span>
              <span>✓ الخدمة متوفرة كل أيام الأسبوع</span>
              <span>✓ نرسل مندوب في نفس اليوم</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQS (utility component)
      ══════════════════════════════════════════ */}
      <FAQSection
        title="أسئلة شائعة عن نقل اثاث العين"
        subtitle="إجابات واضحة على أكثر الأسئلة شيوعاً حول خدمات نقل الأثاث بالعين"
        faqs={alainFaqs}
      />

      {/* ══════════════════════════════════════════
          REVIEWS (utility component)
      ══════════════════════════════════════════ */}
      <ReviewsSection />

      {/* ══════════════════════════════════════════
          INTERNAL LINKS
      ══════════════════════════════════════════ */}
      <section className="py-12 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-5 text-center">
            تصفح خدماتنا ومواقعنا
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { title: "نقل اثاث الشقق", href: "/خدمات/نقل-اثاث-الشقق-في-دبي" },
              { title: "نقل اثاث الفلل", href: "/خدمات/نقل-اثاث-الفلل-في-دبي" },
              {
                title: "نقل اثاث المكاتب",
                href: "/خدمات/نقل-اثاث-المكاتب-في-دبي",
              },
              { title: "تغليف اثاث", href: "/خدمات/تغليف-اثاث-في-دبي" },
              { title: "فك وتركيب اثاث", href: "/خدمات/فك-وتركيب-اثاث-في-دبي" },
              { title: "تخزين اثاث", href: "/خدمات/تخزين-اثاث-في-دبي" },
              {
                title: "نقل اثاث المنزل في دبي",
                href: "/خدمات/نقل-اثاث-المنزل-في-دبي",
              },
              { title: "مناطق دبي", href: "/مناطق-دبي" },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-white border border-muted hover:border-primary/40 hover:text-primary transition-all py-2.5 px-5 rounded-xl text-sm font-semibold text-secondary-foreground"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA SECTION (utility component)
      ══════════════════════════════════════════ */}
      <CTASection />
    </main>
  );
}
