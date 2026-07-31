import MetadataTemplate from "@/lib/MetaDataTemplate";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  ChevronLeft,
  AlertCircle,
  Star,
  Check,
  Award,
  Phone,
  MessageCircle,
  ArrowLeft,
  MapPin,
  Clock,
  Home,
  Package,
  Truck,
  Calendar,
  Zap,
  Tag,
  Sparkles,
  ClipboardCheck,
  Wrench,
  ThermometerSnowflake,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/utils/FaqsSection";
import QuoteSection from "@/components/utils/QuoteSection";
import { ReviewsSection } from "@/components/utils/ReviewsSection";
import { uaqFaqs } from "@/lib/FaqsData";
import { APP_URL, PHONE_LINK, WHATSAPP_LINK } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/utils/BreadcrumbSchema";

export const metadata = MetadataTemplate({
  meta: {
    title: "نقل الاثاث ام القيوين | النمره - أسعار تبدأ من 400 درهم",
    desc: "شركة النمره لنقل الاثاث في ام القيوين. فك وتغليف وتركيب الاثاث مع تأمين شامل وشاحنات مغلقة. معاينة مجانية وعرض سعر فوري. اتصل الآن 0541767605",
  },
  canonical: "/نقل-الاثاث-ام-القيوين",
  image: {
    path: "/uaq/نقل-اثاث-ام-القيوين-النمرة-شركة-نقل.jpg",
    alt: "نقل الاثاث ام القيوين | النمره - أسعار تبدأ من 400 درهم",
  },
});

export default function UmmAlQuwainMovingPage() {
  return (
    <main dir="rtl" className="text-foreground pb-20">
      <BreadcrumbSchema
        items={[
          { name: "الرئيسية", url: APP_URL },
          {
            name: "نقل اثاث ام القيوين",
            url: `${APP_URL}/نقل-الاثاث-ام-القيوين`,
          },
        ]}
      />
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
            <Link
              href="/خدمات"
              className="hover:text-primary transition-colors"
            >
              خدماتنا
            </Link>
            <ChevronLeft className="w-3 h-3 opacity-40" />
            <span className="text-foreground font-semibold">
              نقل الاثاث ام القيوين
            </span>
          </nav>

          {/* Orange eyebrow + star rating */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-primary font-bold text-xs uppercase tracking-widest border-s-2 border-primary ps-3">
              النمرة موفرز · أم القيوين
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
          <h1 className="loc-heading">
            نقل الاثاث ام القيوين{" "}
            <span className="loc-sub-leading">– شركة النمره لنقل الأثاث</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            تبحث عن خدمات النقل و <strong>نقل الاثاث ام القيوين</strong> التي تقدر تعتمد
            عليها؟ شركة النمره تقدم خدمات عالية الجودة تخدم سكان ام القيوين بخبرة تزيد عن 10
            سنوات في نقل اثاث الشقق والفلل والمكاتب. فريقنا يتعامل مع كل قطعة
            أثاث وكأنها ملكه، ويستخدم شاحنات مغلقة ومكيّفة ومواد تغليف تحمي
            أغراضك فعلاً. كل شحنة عندنا مغطاة بتأمين شامل،
            والدفع ما يكون إلا بعد ما تستلم أثاثك سليم في مكانه الجديد.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Button
              whatsappBtn
              size="lg"
              className="h-12 px-7 font-bold gap-2"
              id="cta-whatsapp-hero"
            >
              <MessageCircle className="w-4 h-4" />
              عرض سعر فوري واتساب
            </Button>
            <Button
              callBtn
              size="lg"
              variant="outline"
              className="h-12 px-7 font-bold gap-2 border-2"
              dir="ltr"
              id="cta-phone-hero"
            >
              <Phone className="w-4 h-4" />
              0541767605
            </Button>
          </div>

          {/* promise pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              "تأمين شامل",
              "بدون دفعة مقدمة",
              "لا رسوم خفية",
              "شاحنات مغلقة ومكيّفة",
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
              src="/uaq/نقل-اثاث-ام-القيوين-النمرة-شركة-نقل.jpg"
              alt="النمرة موفرز يحملون اثاث مغلف في شاحنة مغلقة في منطقة سكنية في ام القيوين"
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
              { num: "+10", label: "سنوات خبرة في نقل الاثاث" },
              { num: "0", label: "درهم دفعة مقدمة" },
              { num: "100%", label: "تغطية تأمينية شاملة" },
              { num: "24/7", label: "دعم وخدمة متواصلة" },
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
            تتميز النمرة بتقديم أفضل عمليات نقل اثاث في ام القيوين لتكون تجربتك معنا سلسة ومريحة بدون ما تشيل هم أي شي. من أول
            صندوق لآخر قطعة، نتكفل بكل التفاصيل. سواء كنت تنقل داخل الإمارة أو
            تنتقل من ام القيوين لإمارة ثانية، نوصلك ونركب لك كل شي في مكانه. لو
            تبي عرض سعر، أرسل لنا رسالة واتساب على الرقم{" "}
            <strong>0541767605</strong> ونرد عليك خلال دقائق بسعر واضح وبدون أي
            رسوم مخفية.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#18232a] text-white mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              مميزاتنا
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              لماذا تختار شركة النمره لنقل الاثاث في ام القيوين؟
            </h2>
            <p className="text-white/70 max-w-4xl text-sm md:text-base leading-relaxed">
              في شركات نقل كثيرة في السوق، وكلهم يقولون نفس الكلام: &quot;نحن
              الأفضل&quot;. لكن الفرق الحقيقي يبان في التفاصيل وفي تجربة العميل
              الفعلية. وهذي التفاصيل اللي تميّز شركة النمره كواحدة من افضل شركات
              نقل الاثاث في ام القيوين:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "بدون دفعة مقدمة",
                desc: "ما نطلب منك ولا درهم قبل النقل. تدفع بعد ما نخلص الشغل كامل وتتأكد إن كل شي وصل سليم. هالشي يعطيك راحة بال ويثبت لك إننا واثقين من خدمتنا.",
              },
              {
                icon: Shield,
                title: "تأمين شامل على كل قطعة",
                desc: "الحوادث نادرة عندنا، لكن لو صار أي شي، التأمين يغطيه بالكامل. مو كلام نظري، عقد تأمين فعلي.",
              },
              {
                icon: ThermometerSnowflake,
                title: "شاحنات مغلقة ومكيّفة",
                desc: "حرارة الإمارات ما ترحم، خصوصاً في الصيف. شاحناتنا مغلقة بالكامل ومكيّفة، فأثاثك محمي من الشمس والغبار والرطوبة أثناء النقل.",
              },
              {
                icon: Tag,
                title: "لا رسوم خفية",
                desc: "السعر اللي نعطيك إياه في البداية هو نفس السعر اللي تدفعه في النهاية. ما عندنا رسوم إضافية مفاجئة.",
              },
              {
                icon: Zap,
                title: "عرض سعر فوري عبر الواتساب",
                desc: "أرسل لنا صور أثاثك أو وصف بسيط، ونرد عليك بعرض سعر خلال دقائق. ما تحتاج تنتظر أيام.",
              },
              {
                icon: Sparkles,
                title: "تنظيف بعد النقل",
                desc: "بعد ما نخلص التركيب في مكانك الجديد، ننظف المكان ونسلمك إياه جاهز. هالخدمة معظم شركات النقل ما تقدمها.",
              },
              {
                icon: Calendar,
                title: "خدمة 7 أيام في الأسبوع",
                desc: "متوفرين كل أيام الأسبوع بما فيها أيام الجمعة والعطل. تقدر تحجز موعدك في أي يوم يناسبك.",
              },
              {
                icon: Award,
                title: "خبرة تزيد عن 10 سنوات",
                desc: "مو شركة جديدة تتعلم على حسابك. فريقنا نقل آلاف الشحنات في مختلف إمارات الدولة ويعرف التحديات اللي تواجه كل نوع أثاث وكل نوع مبنى.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 p-6 rounded-3xl flex flex-col gap-4 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
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
          SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-14 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              خدماتنا
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              خدمات نقل الاثاث في ام القيوين
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              سواء كنت تنقل شقة صغيرة أو فيلا كبيرة أو مكتب كامل، خدمات نقل اثاث
              ام القيوين اللي نقدمها تغطي كل اللي تحتاجه. من أول ما نوصل بيتك
              القديم إلى ما تستقر في مكانك الجديد، كل شي علينا. وكل خدمة ممكن
              تطلبها لحالها أو ضمن باقة نقل كاملة.
            </p>
          </div>

          <div className="space-y-6">
            {/* Service 1 — شقق | image right */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث المنازل والشقق في ام القيوين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  أغلب عمليات نقل اثاث المنازل في ام القيوين تكون داخل المباني
                  السكنية المنخفضة أو بين شقق في مناطق مثل السلامة والرأس
                  والرملة. بعض هالمباني ما فيها مصاعد، وبعضها أدراجها ضيقة.
                  فريقنا معتاد على هالتحديات ويعرف كيف يتعامل معها.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نوفر عمال مدربين على حمل الأثاث بطريقة صحيحة حتى في الأدراج
                  الضيقة، مع تغليف كامل لكل قطعة قبل ما تطلع من الباب. الشقة
                  غرفة واحدة ما تاخذ أكثر من 3-4 ساعات عادة، والشقق الأكبر من
                  5-7 ساعات حسب كمية الأثاث. نحرص نخلص في الوقت اللي اتفقنا عليه
                  عشان ما نأثر على جدولك ومواعيدك. لو عندك أطفال صغار أو حيوانات
                  أليفة، نراعي هالشي ونتعامل بهدوء وسرعة في نفس الوقت.
                </p>
                <Link
                  href="/خدمات/نقل-اثاث-الشقق-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تفاصيل خدمة نقل الشقق <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              <div className="aspect-[4/3] md:aspect-auto relative order-1 md:order-2 min-h-[220px]">
                <Image
                  src="/uaq/نقل-اثاث-شقق-ام-القيوين-النمرة.jpg"
                  alt="نقل أثاث الشقق في ام القيوين - فريق النمرة"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 2 — فلل | image left */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="aspect-[4/3] md:aspect-auto relative min-h-[220px]">
                <Image
                  src="/uaq/نقل-اثاث-فلل-ام-القيوين-النمرة.jpg"
                  alt="نقل أثاث الفلل في ام القيوين - النمرة موفرز"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث الفلل في ام القيوين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  نقل اثاث الفلل يختلف عن نقل الشقق. الفلل فيها قطع أثاث أكبر
                  وأثقل: ثريات، رخام، خزائن ضخمة، أثاث حدائق، وأحياناً قطع حساسة
                  مثل التحف والأعمال الفنية.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  في مناطق مثل السلامة والحديثة والبلدة القديمة في ام القيوين
                  توجد فلل كثيرة بأحجام مختلفة. نتعامل مع كل فيلا حسب طبيعتها.
                  نسوي معاينة مجانية قبل يوم النقل عشان نحدد عدد العمال
                  والشاحنات ومواد التغليف المطلوبة بدقة، فما يكون في مفاجآت يوم
                  النقل.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  لو فيلتك فيها حوش كبير بأثاث خارجي مثل جلسات حديقة أو مظلات أو
                  ألعاب أطفال كبيرة، نتعامل معها نفس ما نتعامل مع الأثاث
                  الداخلي: فك وتغليف ونقل آمن. وبالنسبة للفلل اللي فيها طابقين
                  أو ثلاث، نوفر عدد عمال كافي عشان النقل ما يتأخر.
                </p>
                <Link
                  href="/خدمات/نقل-اثاث-الفلل-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تفاصيل خدمة نقل الفلل <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* Service 3 — مكاتب | image right */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث المكاتب والشركات في ام القيوين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  نقل المكاتب يحتاج تخطيط أكثر لأن أي تأخير يعني خسارة في العمل.
                  عشان كذا ننفذ نقل اثاث المكاتب في ام القيوين عادة في عطلة
                  نهاية الأسبوع أو بعد ساعات الدوام، عشان ما نأثر على سير العمل.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نتعامل مع أجهزة الكمبيوتر والطابعات وخزائن الملفات وطاولات
                  الاجتماعات بعناية. كل جهاز إلكتروني يتغلف بشكل منفصل بمواد
                  مضادة للصدمات. لو مكتبك في المنطقة الصناعية بام القيوين أو في
                  المنطقة التجارية، نوصلك ونركب لك كل شي. ننسق معك خطة نقل مسبقة
                  تشمل ترتيب القطع في المكتب الجديد عشان يوم الأحد تفتح أبوابك
                  والمكتب جاهز للعمل.
                </p>
                <Link
                  href="/خدمات/نقل-اثاث-المكاتب-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تفاصيل خدمة نقل المكاتب <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              <div className="aspect-[4/3] md:aspect-auto relative order-1 md:order-2 min-h-[220px]">
                <Image
                  src="/uaq/نقل-اثاث-مكاتب-شركات-ام-القيوين-النمرة.jpg"
                  alt="نقل أثاث المكاتب والشركات في ام القيوين - النمرة موفرز"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 4 — فك وتركيب | image left */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="aspect-[4/3] md:aspect-auto relative min-h-[220px]">
                <Image
                  src="/uaq/فك-تغليف-تركيب-اثاث-ام-القيوين-النمرة.jpg"
                  alt="نجار شركة النمرة موفرز يفك الاثاث في ام القيوين"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  فك وتركيب الأثاث في ام القيوين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  كل عملية نقل تشمل فك وتركيب الأثاث بدون أي تكلفة إضافية. معنا
                  نجارين متخصصين يتعاملون مع غرف النوم وخزائن الملابس والمطابخ
                  وأثاث ايكيا وغيره.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  الفك يتم بعناية مع ترقيم كل قطعة ومسمار حتى ما يضيع شي أثناء
                  النقل. وفي المكان الجديد، يرجع الأثاث مثل ما كان بالضبط. لو
                  عندك أثاث قديم أو حساس، فريقنا يعرف كيف يتعامل معه بدون ما
                  يتضرر.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  خدمة فك وتركيب اثاث ام القيوين من النمره تشمل كل أنواع الأثاث:
                  غرف نوم كاملة، خزائن حائط، مطابخ مفصّلة، طاولات طعام كبيرة،
                  وحتى أثاث ايكيا اللي يحتاج دقة في التعامل مع البراغي والقطع
                  الصغيرة.
                </p>
                <Link
                  href="/خدمات/فك-وتركيب-اثاث-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تصفح خدمة فك وتركيب الاثاث <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* Service 5 & 6 — التغليف والأجهزة الكهربائية */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="rounded-3xl overflow-hidden border border-muted p-8 bg-slate-50">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  تغليف وتعبئة الأثاث في ام القيوين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  تعد مرحلة نقل وتغليف الأثاث الخطوة الأساسية التي تحمي منقولاتك فعلياً أثناء الانتقال. نستخدم
                  مواد تغليف اثاث احترافية تشمل:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-4">
                  <li>بلاستيك فقاعي للقطع الزجاجية والحساسة</li>
                  <li>ستريتش فيلم للأجهزة الكهربائية والشاشات</li>
                  <li>كراتين مقواة بأحجام مختلفة</li>
                  <li>بطانيات حماية للأثاث الخشبي</li>
                  <li>فلين زوايا لحماية الأطراف والزوايا</li>
                </ul>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  القطع الزجاجية والمرايا والتلفزيونات تاخذ عناية خاصة. نغلفها
                  بطبقات متعددة ونثبتها في الشاحنة بأحزمة حتى ما تتحرك أثناء
                  الطريق. الملابس تنقل في كراتين أو أكياس خاصة، وأدوات المطبخ كل
                  قطعة تتغلف لحالها عشان ما تنكسر. فريقنا يعرف إن التغليف الجيد
                  هو اللي يفرق بين نقل ناجح ونقل فيه مشاكل.
                </p>
                <Link
                  href="/خدمات/تغليف-اثاث-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline"
                >
                  تصفح خدمة تغليف الاثاث <ArrowLeft className="w-4 h-4" />
                </Link>
              </article>

              <article className="rounded-3xl overflow-hidden border border-muted p-8 bg-slate-50">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4 flex items-center gap-2">
                  <ThermometerSnowflake className="w-5 h-5 text-primary" />
                  تغليف الأجهزة الكهربائية والإلكترونيات
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  الأجهزة الكهربائية مثل الثلاجات والغسالات والمكيفات المتنقلة
                  تحتاج تعامل خاص أثناء النقل. نقوم بتفريغ الثلاجة وتنظيفها قبل
                  النقل وتثبيت الأرفف الداخلية. الغسالات نفصلها ونثبت الحلة عشان
                  ما تتحرك في الطريق. أما الشاشات والتلفزيونات الكبيرة، نغلفها
                  بطبقات من الفوم والبلاستيك الفقاعي ونحطها في كراتين مخصصة
                  بحجمها.
                </p>
              </article>
            </div>

            {/* Service 7 — تخزين الاثاث | image right */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  تخزين الأثاث في ام القيوين
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  أحياناً تحتاج تخزن أثاثك لفترة، سواء لأن بيتك الجديد ما جهز
                  بعد أو لأنك مسافر أو تجدد بيتك. نوفر خدمة تخزين اثاث في
                  مستودعات آمنة ومراقبة بالكاميرات على مدار الساعة.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  المستودعات جافة ونظيفة، وأثاثك يكون مغلف ومحمي طول فترة
                  التخزين. تقدر تخزن لأسبوع أو لسنة، حسب ما تحتاج. وتقدر تسترجع
                  أغراضك في أي وقت بتنسيق مسبق بسيط. هالخدمة مفيدة خصوصاً للناس
                  اللي يجددون بيوتهم في ام القيوين ويحتاجون مكان آمن لأثاثهم لين
                  ما تخلص الأعمال.
                </p>
                <Link
                  href="/خدمات/تخزين-اثاث-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تفاصيل خدمات التخزين <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              <div className="aspect-[4/3] md:aspect-auto relative order-1 md:order-2 min-h-[220px]">
                <Image
                  src="/uaq/تخزين-اثاث-ام-القيوين-النمرة-مستودع.jpg"
                  alt="مستودع تخزين أثاث النمرة موفرز في ام القيوين"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 8 — نفس اليوم */}
            <article className="rounded-3xl overflow-hidden border border-muted p-8 md:p-10 bg-slate-50">
              <h3 className="font-medium text-xl text-secondary-foreground mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                نقل عفش ام القيوين في نفس اليوم
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                أحياناً تحتاج تنقل بشكل طارئ. انتهى عقد الإيجار فجأة أو حصلت
                فرصة سكن أفضل وما تبي تفوتها. نوفر نقل عفش ام القيوين في نفس
                اليوم حسب التوفر. اتصل بنا بأسرع وقت ممكن وننسق معك جدول فوري.
                الأولوية دائماً إن النقل يتم بأمان حتى لو كان سريع.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTER-EMIRATE MOVING
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              نقل خارجي
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              نقل الاثاث من ام القيوين الى الإمارات الأخرى
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              كثير من سكان ام القيوين ينتقلون إلى إمارات ثانية لأسباب عمل أو
              دراسة أو تغيير سكن. لو تبحث عن نقل اثاث في ام القيوين مع توصيل
              لإمارة ثانية، شركة النمره تنقل اثاثك من ام القيوين إلى أي مكان في
              الدولة. نستخدم شاحنات كبيرة عشان ننقل كل أثاثك برحلة واحدة كلما
              أمكن، وهذا يقلل التكلفة ويختصر الوقت.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "الى عجمان",
                desc: "المسافة حوالي 20 كم فقط. أقرب إمارة ويتم النقل عادة خلال نصف يوم.",
                link: "/نقل-اثاث-عجمان",
              },
              {
                title: "الى الشارقة",
                desc: "حوالي 40 كم. نقل مريح يتم خلال يوم عمل واحد مع التغليف والتركيب الكامل.",
                link: "/نقل-أثاث-الشارقة",
              },
              {
                title: "الى رأس الخيمة",
                desc: "حوالي 50 كم شمالاً. طريق سريع مباشر ونقل سلس.",
                link: "/نقل-اثاث-راس-الخيمة",
              },
              {
                title: "الى دبي",
                desc: "حوالي 70 كم. من أكثر المسارات طلباً. ننسق مواعيد النقل لتجنب ازدحام شوارع دبي.",
                link: "/",
              },
              {
                title: "الى العين",
                desc: "نقل سلس إلى مدينة العين. نوفر شاحنات مجهزة للرحلات الطويلة لضمان وصول الأثاث بأمان تام.",
                link: "/نقل-اثاث-العين",
              },
              {
                title: "الى أبوظبي",
                desc: "حوالي 200 كم. يحتاج تخطيط مسبق ونستخدم شاحنات كبيرة لتقليل عدد الرحلات.",
                link: "/نقل-اثاث-ابوظبي",
              },
            ].map((emirate, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-muted shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg text-secondary-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  نقل اثاث من ام القيوين {emirate.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {emirate.desc}
                </p>
                {emirate.link && (
                  <Link
                    href={emirate.link}
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline mt-auto"
                  >
                    تصفح الفرع <ArrowLeft className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center bg-white p-6 rounded-2xl border border-muted shadow-sm max-w-4xl mx-auto">
            <p className="text-muted-foreground text-sm leading-relaxed">
              كل عمليات النقل بين الإمارات تشمل نفس مستوى التغليف والتأمين والفك
              والتركيب اللي نقدمه في نقل اثاث ام القيوين المحلي. ما نفرق في
              مستوى الخدمة سواء كان النقل داخل الإمارة أو خارجها. لو تبي تعرف
              تكلفة النقل بين إمارتين بالتحديد، أرسل لنا تفاصيل أثاثك والوجهة
              وعطنا خبر ونرد عليك بسعر شامل خلال ساعة.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white border-t border-muted">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              اسعار النقل 2026
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              اسعار نقل الاثاث في ام القيوين
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              من أكثر الأسئلة اللي نسمعها: &quot;كم يكلف نقل الاثاث في ام
              القيوين؟&quot; الجواب يعتمد على عدة عوامل، لكن هنا فكرة عامة عن
              اسعار نقل الاثاث لتساعدك في التخطيط:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Table */}
            <div className="lg:col-span-7 space-y-4">
              <div className="overflow-x-auto rounded-2xl border border-muted bg-white shadow-sm">
                <table className="w-full text-start border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-muted bg-slate-50/80 text-secondary-foreground font-semibold">
                      <th className="py-3.5 px-5">نوع النقل</th>
                      <th className="py-3.5 px-5">السعر التقريبي</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted text-muted-foreground">
                    {[
                      {
                        type: "استوديو أو غرفة واحدة",
                        price: "يبدأ من 400 درهم",
                      },
                      { type: "شقة غرفتين", price: "يبدأ من 800 درهم" },
                      { type: "شقة 3 غرف", price: "يبدأ من 1,200 درهم" },
                      { type: "فيلا صغيرة", price: "يبدأ من 2,000 درهم" },
                      { type: "مكتب صغير", price: "يبدأ من 600 درهم" },
                      {
                        type: "نقل بين الإمارات",
                        price: "حسب المسافة وحجم الأثاث",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-3 px-5 font-medium text-secondary-foreground">
                          {row.type}
                        </td>
                        <td className="py-3 px-5 font-semibold text-primary">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground/70 px-2 mt-4">
                الأسعار المذكورة تقريبية وقابلة للتغيير حسب الموسم والظروف
                الخاصة بكل عملية نقل. للحصول على سعر دقيق لحالتك، تواصل معنا على
                الواتساب <strong>0541767605</strong> وأرسل لنا تفاصيل أثاثك مع
                صور لو أمكن. نرد عليك بعرض سعر شامل خلال دقائق. المعاينة
                المجانية أو التقدير أونلاين متوفرين دائماً ومن غير أي التزام من
                طرفك.
              </p>
            </div>

            {/* Quick Quote Callout (Factors) */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-muted shadow-sm">
              <h3 className="font-bold text-lg text-secondary-foreground mb-4">
                ايش يأثر على تكلفة نقل الاثاث في ام القيوين؟
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                  <div>
                    <strong className="text-secondary-foreground block mb-1">
                      كمية الأثاث:
                    </strong>
                    كل ما زاد الأثاث، زاد عدد العمال والشاحنات المطلوبة.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                  <div>
                    <strong className="text-secondary-foreground block mb-1">
                      الطابق:
                    </strong>
                    النقل من أدوار عالية بدون مصعد يحتاج جهد ووقت أكثر.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                  <div>
                    <strong className="text-secondary-foreground block mb-1">
                      المسافة:
                    </strong>
                    النقل داخل ام القيوين أرخص من النقل إلى إمارة ثانية.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                  <div>
                    <strong className="text-secondary-foreground block mb-1">
                      خدمات إضافية:
                    </strong>
                    التغليف الكامل وفك وتركيب الأثاث المعقد يزيد التكلفة قليلاً.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                  <div>
                    <strong className="text-secondary-foreground block mb-1">
                      التوقيت:
                    </strong>
                    بداية ونهاية الشهر تكون أوقات ذروة للنقل.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AREAS COVERED
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              تغطية واسعة
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              المناطق التي نخدمها في ام القيوين
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              نغطي جميع مناطق ام القيوين بدون استثناء. فريقنا يعرف شوارع الإمارة
              ومبانيها ومداخلها، وهذا يوفر وقت كثير يوم النقل. من المناطق اللي
              نخدمها بشكل متكرر:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                name: "الرأس",
                desc: "منطقة سكنية قديمة فيها شقق ومباني، بعضها بأدراج ضيقة نعرف نتعامل معها.",
              },
              {
                name: "السلامة",
                desc: "فيها فلل كثيرة ومساحات واسعة، من أكثر المناطق اللي ننقل فيها.",
              },
              { name: "الحمرة", desc: "منطقة سكنية هادئة قريبة من الكورنيش." },
              { name: "الرملة", desc: "مزيج من الشقق والفلل." },
              { name: "الروضة", desc: "منطقة سكنية جديدة نسبياً." },
              { name: "الخور", desc: "قريبة من خور ام القيوين ومناظرها حلوة." },
              { name: "الحديثة", desc: "فلل وبيوت عربية تقليدية." },
              { name: "الميدان", desc: "وسط المدينة." },
              {
                name: "البلدة القديمة",
                desc: "شوارع أضيق تحتاج تنسيق مسبق لوقوف الشاحنات.",
              },
              { name: "المنطقة الصناعية", desc: "مكاتب ومستودعات وشركات." },
              { name: "أم القيوين مارينا", desc: "شقق ومباني حديثة." },
              {
                name: "الدار البيضاء والرقة والحوية",
                desc: "مناطق سكنية نخدمها بانتظام.",
              },
            ].map((area, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl border border-muted shadow-sm"
              >
                <h3 className="font-bold text-base text-secondary-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {area.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground text-center bg-white p-4 rounded-xl border border-muted shadow-sm">
            لو منطقتك مو مذكورة هنا، لا تشيل هم. نقل الاثاث ام القيوين مع النمره
            يغطي كل زاوية في الإمارة. فقط أرسل لنا موقعك ونكون عندك.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS (خطوات نقل الاثاث)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              خطوات النقل
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              خطوات نقل الاثاث مع شركة النمره في ام القيوين
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              نبي نوضح لك بالضبط كيف تمشي عملية نقل الاثاث في ام القيوين معنا من
              البداية للنهاية، عشان ما يكون في أي غموض وتعرف بالضبط ايش بيصير في
              كل مرحلة:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "التواصل والاستفسار",
                desc: "اتصل أو أرسل رسالة واتساب على 0541767605. اشرح لنا وضعك ببساطة: وين ساكن حالياً، وين بتنتقل، وكم تقريباً حجم أثاثك.",
                icon: Phone,
              },
              {
                step: "2",
                title: "المعاينة أو التقدير عن بعد",
                desc: "إذا تبي، نجي نشوف أثاثك بأنفسنا مجاناً ونعطيك عرض سعر في الموقع. أو أرسل لنا صور وفيديو عبر الواتساب ونعطيك تقدير دقيق.",
                icon: CheckCircle,
              },
              {
                step: "3",
                title: "عرض السعر",
                desc: "نعطيك سعر واضح يشمل كل شي: فك، تغليف، نقل، تركيب، تنظيف. لا رسوم خفية ولا مفاجآت.",
                icon: MessageCircle,
              },
              {
                step: "4",
                title: "التغليف والفك",
                desc: "يوم النقل، يوصل الفريق في الوقت المتفق عليه. نبدأ بفك الأثاث الكبير وتغليف كل قطعة بمواد مناسبة.",
                icon: Wrench,
              },
              {
                step: "5",
                title: "التحميل والنقل",
                desc: "نحمّل الأثاث في شاحنات مغلقة ومكيّفة. كل شي يتثبت بأحزمة حتى ما يتحرك أثناء السير.",
                icon: Truck,
              },
              {
                step: "6",
                title: "التفريغ والتركيب",
                desc: "في المكان الجديد، نفرّغ الأثاث ونركبه في مكانه. غرف النوم، الخزائن، المطابخ، كل شي يرجع مثل ما كان.",
                icon: Home,
              },
              {
                step: "7",
                title: "التنظيف والتسليم",
                desc: "ننظف المكان الجديد من بقايا الكراتين ومواد التغليف ونشيل كل الأوساخ ونسلمك المكان جاهز للسكن أو العمل.",
                icon: Sparkles,
              },
              {
                step: "8",
                title: "الدفع",
                desc: "بعد ما تتأكد إن كل شي تمام وكل قطعة في مكانها، تدفع. بسيطة وبدون ضغط.",
                icon: ClipboardCheck,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-muted shadow-sm flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 bg-white border-2 border-primary rounded-xl flex items-center justify-center text-primary font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-2 text-secondary-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TIPS (نصائح مهمة قبل نقل الاثاث في ام القيوين)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              نصائح مهمة قبل نقل الاثاث في ام القيوين
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              من واقع خبرتنا في نقل مئات البيوت والمكاتب في ام القيوين على مدار
              السنوات الماضية، هذي أهم النصائح اللي ننصحك فيها عشان يمر يوم
              النقل بسلاسة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "اختر التوقيت الصح",
                desc: "بداية الشهر ونهايته أوقات ذروة للنقل في ام القيوين لأن عقود الإيجار تنتهي وتبدأ. لو تقدر تنقل في منتصف الشهر أو خلال أيام الأسبوع، الأسعار تكون أقل والتوفر أسهل. وتجنب ساعات الظهيرة في الصيف.",
              },
              {
                title: "تخلص من اللي ما تحتاجه",
                desc: "قبل النقل، راجع أغراضك وتخلص من الأشياء اللي ما تستخدمها. كل ما قلّ الأثاث، قلّت التكلفة وسرعت عملية النقل.",
              },
              {
                title: "صوّر أثاثك قبل النقل",
                desc: "خذ صور لأثاثك قبل ما يتفك ويتغلف من كل الزوايا. هذا يساعدك ويساعد النجارين يرجعون كل شي مكانه بالضبط.",
              },
              {
                title: "تأكد من الرخصة والتأمين",
                desc: "قبل ما تتعاقد مع أي شركة نقل اثاث، اسأل عن الرخصة التجارية وبوليصة التأمين. شركة بدون تأمين = مخاطرة بأثاثك.",
              },
              {
                title: "جهّز ممر واضح",
                desc: "تأكد إن الممرات والأبواب في بيتك القديم والجديد مفتوحة وواضحة. هذا يسرّع الشغل كثير.",
              },
              {
                title: "احتفظ بالمهم معك",
                desc: "المستندات، المجوهرات، النقود، الجوازات – لا تحطها مع الأثاث. خذها معك شخصياً.",
              },
              {
                title: "احجز مبكر",
                desc: "خصوصاً في الصيف وبداية السنة الدراسية، شركات نقل الاثاث في ام القيوين تكون مشغولة. الحجز قبل أسبوع على الأقل يضمن لك التاريخ اللي تبيه.",
              },
              {
                title: "نسّق مع المبنى الجديد",
                desc: "قبل يوم النقل، تأكد من إدارة المبنى الجديد إنهم يسمحون بالنقل في اليوم والوقت اللي حددته.",
              },
              {
                title: "اسأل عن كل التفاصيل",
                desc: "تأكد من شمولية السعر لفك، تغليف، نقل، وتركيب. مع النمره، السعر شامل من البداية.",
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-muted shadow-sm flex gap-4"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base text-secondary-foreground mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW TO CHOOSE (كيف تختار افضل شركة)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white border-t border-muted">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              كيف تختار افضل شركة نقل اثاث في ام القيوين؟
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              اختيار شركة نقل اثاث ام القيوين المناسبة يفرق كثير في تجربة النقل.
              قبل ما تتعاقد مع أي شركة، تأكد من هالنقاط: أولاً، اطلب رخصة تجارية
              سارية المفعول. ثانياً، اسأل عن بوليصة التأمين وايش تغطي بالضبط.
              ثالثاً، اطلب عرض سعر مكتوب يشمل كل الخدمات بالتفصيل. رابعاً، اسأل
              عن نوع الشاحنات المستخدمة ومواد التغليف. وأخيراً، شوف تقييمات
              العملاء السابقين على خرائط قوقل.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4">
              الشركة اللي ترفض تعطيك عرض سعر واضح أو ما عندها تأمين، ابتعد عنها
              حتى لو سعرها أرخص. التوفير البسيط في سعر النقل ما يساوي شي مقارنة
              بخسارة قطعة أثاث غالية أو تلف جهاز إلكتروني.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-muted shadow-sm">
            <h3 className="text-xl font-bold text-secondary-foreground mb-6 text-center">
              لماذا نقل الاثاث في ام القيوين يحتاج شركة متخصصة؟
            </h3>
            <p className="text-muted-foreground text-sm text-center mb-6">
              بعض الناس يفكرون ينقلون أثاثهم بأنفسهم أو يستأجرون عمال عشوائيين.
              هالشي ممكن يوفر شوي في البداية لكنه يكلف أكثر على المدى الطويل.
              وهنا السبب:
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "حرارة ام القيوين",
                  desc: "في الصيف، درجات الحرارة توصل 50 درجة مئوية. الأثاث الخشبي يتأثر بالحرارة المباشرة، والجلد يتشقق، والإلكترونيات ممكن تتضرر. الشاحنات المغلقة والمكيّفة تحل هالمشكلة بالكامل. نقل بسيارة مفتوحة أو بيك أب في هالحرارة مخاطرة حقيقية.",
                },
                {
                  title: "المباني القديمة",
                  desc: "منطقة البلدة القديمة والرأس فيها مباني أدراجها ضيقة ومداخلها محدودة. العمال غير المدربين ممكن يخدشون الجدران أو يكسرون قطع أثاث أثناء المناورة. فريقنا يعرف هالمباني ويعرف كيف يمرّر الأثاث بأمان.",
                },
                {
                  title: "الأثاث الكبير في الفلل",
                  desc: "فلل ام القيوين فيها قطع ضخمة مثل خزائن المرايا الكبيرة والطاولات الرخامية. هالقطع ما ينفع تنقلها بأي طريقة، تحتاج معدات ومهارة.",
                },
                {
                  title: "الحماية القانونية",
                  desc: "لما تتعامل مع شركة نقل اثاث في ام القيوين مرخصة ومؤمنة، عندك حق قانوني لو صار أي ضرر. لما تتعامل مع عمال عشوائيين، ما عندك أي ضمان.",
                },
                {
                  title: "ضمان التوقيت",
                  desc: "شركة نقل اثاث ام القيوين محترفة تلتزم بالموعد المتفق عليه. العمال العشوائيين ممكن يتأخرون ساعات أو ما يجون أصلاً، وأنت تنتظر والعقد ينتهي.",
                },
              ].map((reason, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start bg-white p-4 rounded-xl border border-muted shadow-sm"
                >
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <AlertCircle className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="font-bold text-secondary-foreground mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center border-t border-muted pt-6">
              <p className="text-sm font-semibold text-secondary-foreground">
                باختصار، نقل اثاث ام القيوين مع شركة متخصصة مثل النمره يوفر عليك
                وقت ومال ويحمي أثاثك. ولهذا السبب، كثير من سكان الإمارة يعتبرون
                النمره افضل شركة نقل اثاث يقدرون يعتمدون عليها في ام القيوين.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQS & REVIEWS
      ══════════════════════════════════════════ */}
      <FAQSection
        faqs={uaqFaqs}
        title="أسئلة متكررة عن نقل الاثاث في ام القيوين"
        subtitle="إجابات سريعة على أهم استفساراتكم بخصوص خدمات نقل الأثاث في ام القيوين"
      />

      <ReviewsSection />
      {/* ══════════════════════════════════════════
          QUOTE SECTION
      ══════════════════════════════════════════ */}
      <QuoteSection />

      {/* ══════════════════════════════════════════
          CONTACT (تواصل معنا لنقل اثاثك في ام القيوين)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-primary/5 border-t border-primary/10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-foreground">
            تواصل معنا لنقل اثاثك في ام القيوين
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
            جاهز تنقل أثاثك في ام القيوين؟ أو عندك أسئلة تبي إجابتها قبل ما
            تقرر؟ تواصل معنا بالطريقة اللي تناسبك.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              whatsappBtn
              size="lg"
              className="h-14 px-8 font-bold gap-2 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              راسلنا على واتساب
            </Button>
            <Button
              callBtn
              size="lg"
              variant="outline"
              className="h-14 px-8 font-bold gap-2 text-base bg-white"
              dir="ltr"
            >
              <Phone className="w-5 h-5" />
              0541767605
            </Button>
          </div>
          <p className="text-secondary-foreground font-bold text-lg mb-2">
            نقل آمن · تسليم مضمون · أسعار تنافسية
          </p>
          <p className="text-muted-foreground text-sm">
            شركة النمره لنقل الأثاث – خدمة نقل الاثاث ام القيوين اللي تقدر تعتمد
            عليها.
          </p>
        </div>
      </section>
    </main>
  );
}
