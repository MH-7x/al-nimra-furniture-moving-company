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
  Truck,
  Phone,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/utils/FaqsSection";
import CTASection from "@/components/utils/CTASection";
import QuoteSection from "@/components/utils/QuoteSection";
import { ReviewsSection } from "@/components/utils/ReviewsSection";

export const metadata: Metadata = {
  title: "نقل اثاث ابوظبي | شركة النمره - 054 1767605",
  description:
    "شركة النمره لنقل اثاث ابوظبي – فك وتغليف وتركيب مع تأمين شامل وشاحنات مغلقة ومكيفة. معاينة مجانية وعرض سعر فوري. اتصل الآن!",
  alternates: {
    canonical: "/نقل-اثاث-ابوظبي",
  },
};

const auhFaqs = [
  {
    question: "كم تكلفة نقل اثاث في ابوظبي؟",
    answer: (
      <div className="space-y-3">
        <p>
          التكلفة تعتمد على حجم الشقة أو الفيلا والمسافة والطابق والخدمات
          المطلوبة. كبداية، استوديو يبدأ من حوالي 800 درهم، وشقة غرفتين وصالة من
          حوالي 1,400 درهم، والفلل تبدأ من 2,000 درهم وتزيد حسب الحجم. هذي
          الأسعار تشمل الفك والتغليف والنقل والتركيب والتأمين. للحصول على سعر
          دقيق لحالتك، تواصل معنا لترتيب معاينة مجانية أو أرسل صور وتفاصيل عبر
          واتساب.
        </p>
      </div>
    ),
  },
  {
    question: "ما هي افضل شركة نقل اثاث في ابوظبي؟",
    answer: (
      <div className="space-y-3">
        <p>
          أفضل شركة نقل أثاث أبوظبي هي اللي تجمع بين الترخيص الرسمي والتأمين
          الفعلي وشفافية الأسعار وتقييمات عملاء إيجابية على Google. قبل ما
          تختار، اطلب وثيقة التأمين واسأل عن سياسة التعويض. شركة النمره مرخصة
          ومؤمّنة وبخبرة تتجاوز 10 سنوات في نقل اثاث ابوظبي ودبي وباقي الإمارات.
          شوف تقييماتنا واحكم بنفسك.
        </p>
      </div>
    ),
  },
  {
    question: "هل يوجد تأمين على الاثاث أثناء النقل؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. كل عملية نقل اثاث ابوظبي مع شركة النمره تشمل تأمين شامل على جميع
          القطع بدون استثناء. أي ضرر يحصل أثناء الفك أو التغليف أو النقل أو
          التركيب مغطى بالكامل. لو انكسرت مرآة أو تخدش سطح طاولة أو تعطل جهاز
          بسبب النقل، التأمين يغطي التعويض. هذا التأمين جزء أساسي من الخدمة
          ومشمول في السعر بدون أي مبلغ إضافي. قبل ما تختار أي شركة نقل، اسأل عن
          وثيقة التأمين واطلب تشوفها.
        </p>
      </div>
    ),
  },
  {
    question: "كم يستغرق نقل اثاث شقة في ابوظبي؟",
    answer: (
      <div className="space-y-3">
        <p>
          الوقت يعتمد على حجم الشقة ومحتوياتها وعدد الطوابق ونوع المبنى. استوديو
          أو غرفة وصالة يأخذ من 3 إلى 5 ساعات شاملة الفك والتغليف والنقل
          والتركيب. شقة غرفتين أو ثلاث غرف تأخذ من 5 إلى 8 ساعات. الفلل الكبيرة
          ممكن تأخذ يوم كامل حسب الحجم وعدد الطوابق وكمية الأثاث. لو المبنى ما
          فيه مصعد خدمة أو الشقة في دور عالي، الوقت يزيد شوية. نحدد لك الوقت
          المتوقع بدقة بعد المعاينة.
        </p>
      </div>
    ),
  },
  {
    question: "هل تقدمون خدمة نقل اثاث من ابوظبي الى دبي؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم، وهذا أكثر خط نقل نشتغل عليه لأن مقرنا في دبي. المسافة بين ابوظبي
          ودبي حوالي 130 كيلومتر ونغطيها يومياً بنفس مستوى الخدمة والتأمين. كذلك
          ننقل اثاث للشارقة وعجمان والعين ورأس الخيمة والفجيرة وأم القيوين.
        </p>
      </div>
    ),
  },
  {
    question: "هل يمكن نقل الاثاث في نفس اليوم في ابوظبي؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم، حسب التوفر وحجم النقل. لو النقل صغير مثل استوديو أو غرفة وصالة،
          غالباً نقدر نرتب خلال ساعات قليلة من الطلب. النقل الأكبر يحتاج تنسيق
          أكثر لكن نحاول نوفر أقرب موعد ممكن. تواصل معنا عبر واتساب على 054
          1767605 للطلبات العاجلة. نعطي أولوية لحالات النقل الطارئ مثل الإخلاء
          المفاجئ أو انتهاء عقد الإيجار بشكل مبكر.
        </p>
      </div>
    ),
  },
  {
    question: "ما هي مواد التغليف المستخدمة لحماية الاثاث؟",
    answer: (
      <div className="space-y-3">
        <p>
          نستخدم كراتين مقوّاة بسماكات مختلفة، غلاف فقاعات، بلاستيك مقوى للأسطح
          الحساسة، بطانيات حماية سميكة، شرائط تثبيت، وصناديق مخصصة للزجاج
          والأجهزة الإلكترونية والثريات. كل مادة مختارة لتناسب نوع القطعة اللي
          تحميها. القطع الخشبية الثمينة نغلفها بطبقتين: بطانية ناعمة ملاصقة
          للسطح ثم غلاف خارجي مقوى. ما نستخدم مواد رخيصة أو معاد تدويرها لأنها
          ما توفر الحماية الكافية خصوصاً في حرارة ابوظبي.
        </p>
      </div>
    ),
  },
  {
    question: "هل تخدمون مناطق مصفح والرويس؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم، وبشكل منتظم. نقدم خدمات نقل اثاث مصفح في المنطقة الصناعية بكل
          أقسامها، ونقل اثاث الرويس في المنطقة الغربية بشاحنات مخصصة للمسافات
          الطويلة. نغطي كل مناطق إمارة ابوظبي بدون استثناء، من وسط المدينة إلى
          أبعد نقطة في المنطقة الغربية.
        </p>
      </div>
    ),
  },
];

export default function AbuDhabiMovingPage() {
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
              نقل اثاث ابوظبي
            </span>
          </nav>

          {/* Orange eyebrow + star rating */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-primary font-bold text-xs uppercase tracking-widest border-r-2 border-primary pr-3">
              شركة النمره · ابوظبي
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
              <span className="relative z-10 text-primary">ابوظبي</span>
              <span
                aria-hidden
                className="absolute bottom-1 right-0 left-0 h-3 bg-primary/10 -skew-x-3 rounded-sm z-0"
              />
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            تبحث عن خدمة نقل اثاث ابوظبي تضمن وصول كل قطعة من أثاثك كما هي؟ هذا
            بالضبط ما نفعله في شركة النمره. على مدار أكثر من 10 سنوات، تولينا
            آلاف عمليات نقل الأثاث في ابوظبي وبقية الإمارات، من شقق الاستوديو
            الصغيرة إلى الفلل الكبيرة والمكاتب التجارية. مقرنا الرئيسي في دبي،
            لكن فريقنا في أبوظبي يعمل يومياً في كل أحياء المدينة وضواحيها.
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
              src="/auh/نقل-اثاث-ابوظبي-النمره-شركة-نقل.jpg"
              alt="شركة النمره نقل اثاث في ابوظبي - شاحنة نقل أثاث أمام فيلا مع فريق عمل محترف"
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
              { num: "+10", label: "سنوات خبرة في ابوظبي" },
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
            النقل في أبوظبي له تحدياته الخاصة. الحرارة العالية تأثر على الأثاث،
            والمباني لها متطلبات مختلفة من تصاريح وحجز مصاعد، والمسافات بين
            المناطق كبيرة. نحن شركة نقل اثاث ابوظبي نتولى كل هذه التفاصيل عنك:
            فك وتركيب، تغليف احترافي، نقل بشاحنات مغلقة ومكيّفة، وتخزين عند
            الحاجة. وسواء تسميها نقل أثاث أو نقل عفش ابوظبي، الخدمة واحدة
            والنتيجة واحدة: أثاثك يوصل سليم.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            كل عملية نقل مؤمّنة بالكامل وبدون أي دفعة مقدمة. اتصل على{" "}
            <a
              href="tel:0541767605"
              dir="ltr"
              className="text-primary font-bold hover:underline"
            >
              054 1767605
            </a>{" "}
            أو أرسل رسالة واتساب واحصل على عرض سعر خلال دقائق.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            سوق نقل الاثاث في أبوظبي فيه شركات كثيرة، بعضها مرخص ومحترف وبعضها
            عبارة عن بيك اب وعمال يومية بدون تأمين ولا ضمانات. الفرق بين النوعين
            يظهر لما تنكسر قطعة أثاث غالية أو يتأخر النقل نص يوم. من البداية،
            قررنا إن كل عملية نقل اثاث نقوم بها في ابوظبي تكون بنفس المعايير
            اللي نطبقها في دبي: تأمين كامل، مواد تغليف عالية الجودة، شاحنات
            مكيّفة، وفريق ثابت ومدرب. هذا القرار هو اللي خلانا نبني سمعة قوية في
            ابوظبي رغم إن مقرنا في دبي. عملاؤنا في أبوظبي يرجعون لنا مرة بعد مرة
            ويحولون أصحابهم وزملاءهم علينا لأنهم جربوا الفرق بأنفسهم.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES — alternating layout
      ══════════════════════════════════════════ */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-14">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              خدماتنا
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              خدمات نقل اثاث ابوظبي التي نقدمها
            </h2>
            <p className="text-muted-foreground max-w-4xl text-sm md:text-base leading-relaxed">
              نقدم في ابوظبي نفس الخدمات اللي بنينا عليها سمعتنا في دبي على مدار
              أكثر من عشر سنوات. كل خدمة من هذي الخدمات متاحة بشكل مستقل أو كجزء
              من عملية نقل كاملة، حسب احتياجك. يعني لو تحتاج فقط تغليف بدون نقل،
              أو فك وتركيب بدون شاحنة، نقدر نرتبها لك.{" "}
              <Link href="/" className="text-primary font-bold hover:underline">
                الصفحة الرئيسية لخدماتنا
              </Link>
              .
            </p>
          </div>

          <div className="space-y-6">
            {/* Service 1 — شقق | image right */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث المنازل والشقق في ابوظبي
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  ننقل اثاث الشقق بكل أحجامها، من الاستوديو إلى الشقق العائلية
                  الكبيرة. النقل السكني هو أكثر نوع نتعامل معه في ابوظبي لأن
                  حركة الإيجارات نشيطة على مدار السنة. في مناطق مثل الخالدية
                  والمشرف والكورنيش وجزيرة الريم، كثير من المباني تطلب تصريح نقل
                  أو حجز مصعد خدمة مسبق أو لها ساعات محددة يُسمح فيها بالنقل.
                  بعض الأبراج في جزيرة الريم مثلاً تمنع النقل خلال ساعات الذروة
                  الصباحية والمسائية. نحن نعرف هذه المتطلبات من كثرة تعاملنا مع
                  هذه المباني، ونساعدك في تجهيز كل شيء قبل يوم النقل حتى ما يصير
                  أي تأخير أو مشاكل مع إدارة المبنى. كمان بعض العملاء يحتاجون
                  نقل اثاث ابوظبي داخل نفس المبنى من شقة لشقة أو من دور لدور،
                  وهذا أبسط وأسرع وأرخص من النقل بين مبنيين لأنه ما يحتاج شاحنة.
                  نوفر هالخدمة أيضاً بفريق وأدوات فك وتركيب فقط.
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
                  src="/auh/نقل-اثاث-شقق-ابوظبي-النمره.jpg"
                  alt="نقل أثاث الشقق في ابوظبي - فريق النمره ينقل أثاث من شقة سكنية"
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
                  src="/auh/نقل-اثاث-فلل-ابوظبي-النمره.jpg"
                  alt="نقل أثاث الفلل في ابوظبي - عمال النمره يحملون أثاث من فيلا فاخرة"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث الفلل في ابوظبي
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  الفلل فيها تحديات مختلفة عن الشقق: أثاث أكبر حجماً وأثقل
                  وزناً، قطع حدائق وأثاث خارجي، وأحياناً قطع خاصة مثل طاولات
                  البلياردو أو أجهزة الجيم المنزلي. نتعامل مع نقل اثاث الفلل في
                  مدينة خليفة ومدينة محمد بن زايد ومدينة شخبوط بشكل يومي
                  تقريباً. ندخل المجمعات السكنية بتنسيق مسبق مع الإدارة، ونوفر
                  شاحنات بأحجام مناسبة للقطع الكبيرة التي ما تدخل الشاحنات
                  العادية. بعض الفلل في أبوظبي فيها أثاث مخصص حسب الطلب يحتاج
                  اهتمام زائد أثناء الفك والنقل، وفريقنا عنده خبرة بهالنوع من
                  القطع. كذلك ننقل أثاث الحديقة والمسبح مثل طاولات الخشب
                  الخارجية والشمسيات والبربكيو والأراجيح، وهذي أشياء كثير من
                  الشركات ترفض تنقلها أو تنقلها بدون تغليف مناسب. نحن نتعامل مع
                  كل قطعة من قطع الفيلا سواء كانت داخلية أو خارجية بنفس مستوى
                  العناية.
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
                  نقل اثاث المكاتب والشركات في ابوظبي
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نقل المكاتب يحتاج تخطيط مختلف لأن كل ساعة توقف تكلّف الشركة
                  فلوس وإنتاجية. في أبو ظبي عندنا عملاء من شركات في جزيرة
                  المارية وأبراج الاتحاد ومنطقة المطار والمناطق الحرة، وكل موقع
                  له تحدياته من حيث مواقف الشاحنات وتصاريح الدخول. ننقل أجهزة
                  الكمبيوتر والسيرفرات وأنظمة الأرشيف والأثاث المكتبي بترتيب
                  مدروس يضمن أقل فترة تعطّل ممكنة. كل جهاز يُرقّم ويُوثّق موقعه
                  قبل الفك حتى يرجع لنفس مكانه بالضبط. وعادةً نجدول نقل الاثاث
                  المكتبي والتجاري في عطلات نهاية الأسبوع أو بعد ساعات الدوام
                  حتى ما يتأثر سير العمل ولا يخسر الموظفين يوم إنتاجية. بعض
                  الشركات تحتاج تنقل لمقر أكبر أو تنتقل لمنطقة حرة جديدة، وهذي
                  العمليات أعقد من نقل شقة لأنها تشمل أرشيف ومعدات حساسة وأثاث
                  مكتبي بكميات كبيرة. ننسق مع إدارة الشركة خطة نقل مفصلة تحدد
                  أولويات النقل: الأجهزة أولاً ثم الأثاث ثم الملفات والمستندات.
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
                  src="/auh/نقل-اثاث-مكاتب-شركات-ابوظبي-النمره.jpg"
                  alt="نقل أثاث المكاتب والشركات في ابوظبي - فريق النمره ينقل أثاث مكتبي"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 4 — فك وتغليف | full-width */}
            <article className="rounded-3xl overflow-hidden border border-muted">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto relative min-h-[220px]">
                  <Image
                    src="/auh/فك-تغليف-تركيب-اثاث-ابوظبي-النمره.jpg"
                    alt="خدمة فك وتغليف وتركيب الأثاث في ابوظبي - فريق النمره يغلف ويفكك الأثاث باحترافية"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                    فك وتركيب وتغليف الاثاث في ابوظبي
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    خدمة{" "}
                    <Link
                      href="/فك-وتركيب-اثاث-في-دبي"
                      className="text-primary hover:underline"
                    >
                      فك وتركيب اثاث
                    </Link>{" "}
                    ابوظبي من أكثر الخدمات اللي يطلبها العملاء لأن الأثاث الحديث
                    مش سهل يتفكك بدون أدوات مخصصة. بعض العملاء يحتاجون فك وتركيب
                    بس بدون نقل، مثلاً لما يشترون أثاث جديد ويبغون ينزلون القديم
                    من مكانه أو لما يبغون يرتبون غرفة ثانية في نفس البيت. فريقنا
                    يفك كل قطعة بعناية باستخدام العدة المناسبة لكل نوع، ويغلفها
                    بمواد تحمي من الصدمات والخدوش: كراتين مقوّاة، غلاف فقاعات،
                    بلاستيك مقوى، بطانيات حماية، وصناديق مخصصة للزجاج
                    والإلكترونيات. عند الوصول للمكان الجديد, نعيد تركيب كل شيء
                    في مكانه بالضبط. القطع الحساسة مثل الثريات والتحف والشاشات
                    الكبيرة تحصل على تغليف مضاعف وصناديق خشبية عند الحاجة.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/خدمات/تغليف-اثاث-في-دبي"
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                    >
                      خدمة تغليف الاثاث <ArrowLeft className="w-4 h-4" />
                    </Link>
                    <span className="text-muted-foreground/30">|</span>
                    <Link
                      href="/خدمات/فك-وتركيب-اثاث-في-دبي"
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                    >
                      خدمة فك وتركيب الاثاث <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US (لماذا تختار شركة النمره لنقل اثاث في ابوظبي؟)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#18232a] text-white mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              الفرق الحقيقي
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              لماذا تختار شركة النمره لنقل اثاث في ابوظبي؟
            </h2>
            <p className="text-white/70 max-w-4xl text-sm md:text-base leading-relaxed">
              السؤال الأول عند أي عملية نقل: مين أضمن شركة؟ في سوق ابوظبي
              تحديداً، كثير من شركات النقل تقدم وعود كبيرة وتنفيذ ضعيف. عندنا
              عملاء جاؤنا بعد تجارب سيئة مع شركات ثانية: أثاث مكسور، تأخير ساعات
              عن الموعد، رسوم إضافية ما كانت في الاتفاق. واحد من عملائنا نقل
              فيلا في مدينة خليفة مع شركة رخيصة قبل ما يعرفنا، وانتهى بطاولة
              سفرة مكسورة الأرجل وكنب مخدوش والشركة رفضت تعوّضه لأن ما عندها
              تأمين أصلاً. الفرق مع النمره يظهر في التفاصيل.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Clock,
                title: "خبرة تتجاوز 10 سنوات",
                desc: "عندنا خبرة تتجاوز 10 سنوات في التعامل مع كل أنواع المباني في أبوظبي، من الأبراج السكنية في جزيرة الريم إلى فلل مدينة خليفة والمجمعات السكنية في بني ياس. هذه الخبرة تعني إننا نعرف مسبقاً ما يحتاجه كل نوع نقل قبل ما نوصل الموقع.",
              },
              {
                icon: Shield,
                title: "كل قطعة ننقلها مؤمّنة بالكامل",
                desc: "كل قطعة ننقلها مؤمّنة بالكامل. تأمين فعلي يغطي أي ضرر أثناء النقل، مش مجرد وعد شفهي. لو انكسرت قطعة زجاج أو تخربش أثاث خشبي أثناء النقل، التأمين يعوّضك. وهذا فرق كبير بيننا وبين شركات تشتغل بدون أي تغطية تأمينية.",
              },
              {
                icon: Truck,
                title: "شاحناتنا مغلقة ومكيّفة",
                desc: "شاحناتنا مغلقة ومكيّفة، وهذا ضروري في ابوظبي حيث الحرارة تتجاوز 45 درجة صيفاً. الحرارة تأثر على الخشب فيتمدد ويتشقق، والجلد يجف ويتلف، والإلكترونيات تتضرر من الحرارة المباشرة. شاحناتنا تحمي أثاثك من كل هذا طوال الرحلة.",
              },
              {
                icon: UserCheck,
                title: "معاينة مجانية وبدون دفعة مقدمة",
                desc: "نقدم معاينة مجانية في الموقع مع عرض سعر فوري. أو إذا تفضل السرعة، أرسل صور عبر واتساب ونعطيك تقدير دقيق خلال دقائق. وأهم نقطة: بدون أي دفعة مقدمة. تدفع بعد ما تتأكد إن كل شيء وصل سليم وتركّب في مكانه.",
              },
              {
                icon: CheckCircle,
                title: "وننظف المكان بعد النقل",
                desc: "وننظف المكان بعد النقل. هذا شيء ما تلاقيه عند أغلب شركات نقل الأثاث في ابوظبي. نشيل كل مخلفات التغليف ونرتب المكان قبل ما نمشي. خدمتنا متاحة 7 أيام في الأسبوع بما فيها العطلات الرسمية.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 p-8 rounded-3xl flex flex-col gap-4"
                >
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

          <div className="space-y-6 border-t border-white/10 pt-8">
            <p className="text-white/70 text-sm leading-relaxed max-w-4xl">
              ميزة إضافية لعملائنا في ابوظبي إن مقرنا في دبي، يعني عندنا مخزون
              كبير من مواد التغليف والمعدات متوفر دائماً ونقدر نوفر فرق عمل
              إضافية بسرعة لو احتجنا. بعض شركات النقل الصغيرة في ابوظبي عندها
              شاحنة أو شاحنتين فقط ولو صار عندها حجوزات كثيرة في نفس اليوم تتأخر
              أو تلغي. نحن ما عندنا هالمشكلة لأن أسطولنا أكبر ونقدر نخصص
              الشاحنات والعمال حسب حجم الطلب يومياً.
            </p>

            <p className="text-white/50 text-sm border-t border-white/10 pt-6 leading-relaxed max-w-2xl">
              هل تبحث عن افضل شركة نقل اثاث في ابوظبي؟ جرّب النمره واحكم بنفسك.
              اتصل بنا:{" "}
              <a
                href="tel:0541767605"
                dir="ltr"
                className="text-primary font-bold hover:underline"
              >
                054 1767605
              </a>
            </p>
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
              كثير من الناس اللي يتواصلون معنا لأول مرة يسألون: كيف تمشي عملية
              نقل الاثاث بالضبط؟ ومتى تنتهي؟ وشو المطلوب مني كعميل؟ عندنا ست
              خطوات واضحة نمشي عليها في كل عملية نقل سواء في ابوظبي أو بين
              الإمارات:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "1. التواصل وطلب عرض السعر",
                desc: "اتصل على 054 1767605 أو أرسل واتساب أو عبّي نموذج الموقع. نعطيك عرض سعر أولي فوري بناءً على المعلومات اللي توفرها، أو نرتب معاينة مجانية في الموقع إذا تفضل دقة أكبر في التسعير.",
              },
              {
                title: "2. المعاينة وتحديد الاحتياجات",
                desc: "فريقنا يزور موقعك، يحصي كل القطع واحدة واحدة، يحدد اللي يحتاج عناية خاصة مثل الزجاجيات والتحف والأجهزة الكبيرة، ويعطيك سعر نهائي ثابت ومكتوب. بدون مفاجآت يوم النقل وبدون تكاليف إضافية تظهر لاحقاً.",
              },
              {
                title: "3. الفك والتغليف",
                desc: "يوم النقل، الفريق يوصل في الموعد المحدد بكامل المعدات ومواد التغليف ويبدأ بفك الأثاث وتغليف كل قطعة بمواد مناسبة لنوعها. الزجاج في صناديق مخصصة بطبقات حماية، الإلكترونيات بغلاف فقاعات وكراتين مقوّاة، والأثاث الخشبي ببطانيات حماية وشرائط تثبيت. كل صندوق يُرقّم ويُكتب عليه محتواه والغرفة اللي يروح لها لتسهيل الترتيب في المكان الجديد. البراغي والمسامير نحطها في أكياس مرقمة ونلصقها بالقطعة نفسها حتى ما تضيع.",
              },
              {
                title: "4. التحميل والنقل",
                desc: "نحمّل بترتيب مدروس داخل شاحنات مغلقة ومكيّفة، القطع الثقيلة في الأسفل والخفيفة فوقها مع تثبيت محكم. نخطط المسار مسبقاً لتجنب الازدحام وتقليل وقت الرحلة، خصوصاً في أوقات الذروة على شوارع ابوظبي.",
              },
              {
                title: "5. التفريغ والتركيب",
                desc: "عند الوصول للمكان الجديد، نفرّغ بعناية حسب أرقام الصناديق ونعيد تركيب كل قطعة في المكان اللي تحدده. غرف النوم، المطبخ، غرفة الجلوس - كل شيء يرجع مركّب وجاهز للاستخدام. ما نترك أي قطعة بدون تركيب.",
              },
              {
                title: "6. التنظيف والتسليم",
                desc: "ننظف المكان الجديد بعد ما نخلص. نشيل كراتين التغليف والمواد المستخدمة ونرتب المكان. بعدها نعمل جولة أخيرة معك للتأكد إن كل قطعة في مكانها وبحالتها. الدفع بعد رضاك الكامل.",
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
              معظم عملائنا يقولون إن أكثر شيء ريّحهم هو إنهم ما احتاجوا يتابعون
              شيء بأنفسهم. من لحظة التواصل الأولى، نتولى كل التفاصيل: التنسيق مع
              إدارة المبنى القديم والجديد، ترتيب مواقف الشاحنات، حجز المصعد،
              وحتى التعامل مع حراسة البوابة في المجمعات السكنية. كل اللي عليك هو
              إنك تكون موجود يوم النقل لتوجيه الفريق أين يحط كل قطعة في بيتك
              الجديد.
            </p>

            <div className="bg-primary/5 rounded-2xl border border-primary/10 p-5 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-semibold text-secondary-foreground">
                تحتاج نقل اثاث في أبوظبي؟ اتصل الآن واحجز معاينة مجانية.
              </span>
              <Button size="sm" asChild>
                <a href="tel:0541767605" dir="ltr">
                  054 1767605
                </a>
              </Button>
            </div>
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
                اسعار نقل الاثاث في ابوظبي
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                أكثر سؤال نسمعه من عملائنا: كم تكلفة نقل اثاث ابوظبي؟ الإجابة
                المباشرة: يعتمد على حجم النقل والمسافة والطابق والخدمات
                المطلوبة. كل عملية نقل مختلفة عن غيرها ولا يمكن تحديد سعر دقيق
                بدون معرفة التفاصيل. لكن هذي أسعار تقريبية تعطيك فكرة واقعية عن
                تكلفة نقل الاثاث في ابوظبي:
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                هذي أسعار تقديرية وتتغير حسب عدة عوامل: المسافة بين الموقعين،
                حجم وكمية الأثاث، وجود مصعد أو الحاجة لاستخدام سلالم، نوع
                التغليف المطلوب، والطابق (الأدوار العليا تكلف أكثر بسبب الجهد
                والوقت الإضافي). أي خدمات إضافية مثل التخزين المؤقت أو التنظيف
                العميق تحسب بشكل منفصل ونوضحها لك مسبقاً.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                الأسعار أعلاه تشمل الفك والتغليف والنقل والتركيب والتأمين
                الكامل. ما نطلب رسوم مفاجئة يوم النقل على مواد التغليف أو
                استخدام المصعد أو المسافة الإضافية. كل شيء محسوب في عرض السعر من
                البداية. لكن فيه بعض الخدمات اللي تُحسب بشكل منفصل ونوضحها لك
                قبل الموافقة: التخزين المؤقت في مستودعاتنا، نقل القطع الثقيلة
                جداً مثل البيانو أو الخزنات، التنظيف العميق بعد النقل، ونقل
                النباتات الكبيرة أو أحواض السمك. هذه الخدمات مش مشمولة في السعر
                الأساسي لأنها تحتاج معدات أو ترتيبات إضافية.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                اسعار شركات نقل الاثاث في ابوظبي تتفاوت كثير بين شركة وثانية.
                نصيحة من واقع تعاملنا مع آلاف العملاء: لا تختار أرخص شركة نقل
                اثاث وتكتفي بالسعر المنخفض. السعر الرخيص غالباً يعني تغليف ضعيف
                أو شاحنات مفتوحة أو عمالة غير مدربة وتأمين غير موجود. اختار شركة
                تعطيك سعر ثابت بعد معاينة فعلية وتشمل التأمين ضمن السعر. الفرق
                في السعر بين الشركة الرخيصة والشركة المحترفة عادةً أقل بكثير من
                تكلفة إصلاح قطعة أثاث واحدة تتضرر أثناء النقل.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                طرق الدفع مرنة: كاش عند التسليم أو تحويل بنكي. ما نطلب أي دفعة
                مقدمة قبل يوم النقل. تدفع بعد ما تتأكد إن كل شيء وصل وتركّب
                بالشكل الصحيح.
              </p>
              <div className="bg-primary/5 rounded-2xl border border-primary/10 p-5 flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm font-semibold text-secondary-foreground">
                  اتصل الآن للحصول على عرض سعر دقيق مجاناً.
                </span>
                <Button size="sm" asChild>
                  <a
                    href="https://wa.me/971541767605"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    عرض سعر واتساب
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-x-auto rounded-2xl border border-muted bg-white">
                <table className="w-full text-right border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-muted bg-slate-50 text-secondary-foreground font-semibold">
                      <th className="py-3.5 px-5">حجم النقل</th>
                      <th className="py-3.5 px-5">عدد السيارات</th>
                      <th className="py-3.5 px-5">عدد العمال</th>
                      <th className="py-3.5 px-5">السعر التقريبي</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted text-muted-foreground">
                    {[
                      {
                        size: "استوديو",
                        cars: "1",
                        crew: "3-4",
                        price: "يبدأ من 800 درهم",
                      },
                      {
                        size: "غرفة وصالة",
                        cars: "1",
                        crew: "4-5",
                        price: "يبدأ من 1,100 درهم",
                      },
                      {
                        size: "غرفتين وصالة",
                        cars: "1-2",
                        crew: "5-7",
                        price: "يبدأ من 1,400 درهم",
                      },
                      {
                        size: "3 غرف وصالة",
                        cars: "2",
                        crew: "6-8",
                        price: "يبدأ من 1,800 درهم",
                      },
                      {
                        size: "4 غرف وصالة",
                        cars: "2-3",
                        crew: "8-10",
                        price: "يبدأ من 2,300 درهم",
                      },
                      {
                        size: "فيلا (3 غرف)",
                        cars: "2-3",
                        crew: "6-8",
                        price: "يبدأ من 2,000 درهم",
                      },
                      {
                        size: "فيلا (4+ غرف)",
                        cars: "3+",
                        crew: "8-10",
                        price: "يبدأ من 2,800 درهم",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-4 px-5 font-semibold text-secondary-foreground">
                          {row.size}
                        </td>
                        <td className="py-4 px-5">{row.cars}</td>
                        <td className="py-4 px-5">{row.crew}</td>
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
                  هالأسعار تقريبية وتتغير حسب التفاصيل والمسافة ومتطلبات التغليف
                  والجهد. الأسعار شاملة الفك والتغليف والنقل والتركيب والتأمين.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AREAS — tag cloud
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              تغطية شاملة
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              المناطق التي نخدمها في ابوظبي
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              نغطي كل مناطق إمارة أبوظبي بدون استثناء. فريقنا يعرف خصوصيات كل
              منطقة من حيث مواقف الشاحنات ومداخل المباني وأوقات النقل المسموحة
              وحتى أنواع المصاعد المتوفرة في الأبراج الرئيسية.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "الخالدية",
              "المشرف",
              "الكورنيش",
              "المرور",
              "المنهل",
              "البطين",
              "شارع الدفاع",
              "الوحدة",
              "الزعاب",
              "آل نهيان",
              "الدانة",
              "الظفرة",
              "النادي السياحي",
              "مدينة محمد بن زايد",
              "مدينة خليفة أ",
              "مدينة خليفة ب",
              "مدينة شخبوط",
              "بني ياس",
              "الشامخة",
              "الرحبة",
              "الباهية",
              "الشهامة",
              "الفلاح",
              "مدينة زايد",
              "الريف",
              "الغدير",
              "السمحة",
              "جزيرة الريم",
              "جزيرة السعديات",
              "جزيرة ياس",
              "شاطئ الراحة",
              "الحديريات",
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
                <strong>وسط المدينة:</strong> في وسط مدينة ابوظبي نخدم الخالدية
                والمشرف والكورنيش والمرور والمنهل والبطين وشارع الدفاع والوحدة
                والزعاب وآل نهيان والدانة والظفرة والنادي السياحي. هذه المناطق
                فيها أبراج سكنية بمتطلبات نقل محددة، ونعرف كل واحد منها.
              </p>
              <p>
                <strong>المناطق الخارجية:</strong> في المناطق السكنية الخارجية
                نغطي مدينة محمد بن زايد ومدينة خليفة (أ وب) ومدينة شخبوط وبني
                ياس والشامخة والرحبة والباهية والشهامة والفلاح ومدينة زايد
                والريف والغدير والسمحة. أغلب هذه المناطق فيها فلل ومجمعات سكنية
                تحتاج تنسيق خاص مع حراسة البوابة للدخول والتحميل، ونتولى هذا
                التنسيق عنك.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <strong>الجزر والمشاريع الجديدة:</strong> في الجزر والمشاريع
                الجديدة نخدم جزيرة الريم وجزيرة السعديات وجزيرة ياس وشاطئ الراحة
                والحديريات. الجسور والمداخل في هذه الجزر لها قواعد خاصة
                بالشاحنات الكبيرة من حيث الأوزان والأوقات المسموحة، ونتعامل معها
                بشكل يومي ونعرف أي مدخل نستخدم وأي وقت نتجنب.
              </p>
              <p>
                <strong>توقيت النقل وتحديات المناطق:</strong> توقيت النقل يفرق
                حسب المنطقة. في وسط ابوظبي والمناطق القريبة من الكورنيش، النقل
                الصباحي الباكر أو بعد العصر أفضل لتجنب ازدحام الشوارع ومواقف
                المباني. في المناطق الخارجية مثل مدينة محمد بن زايد وبني ياس،
                الوقت أكثر مرونة لأن الشوارع أوسع والمواقف متوفرة. فريقنا ينصحك
                بأفضل وقت للنقل حسب منطقتك لما تحجز المعاينة.
              </p>
              <p className="font-semibold text-secondary-foreground">
                منطقتك مش مذكورة في القائمة؟ اتصل وتأكد، الغالب إننا نغطيها.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SUB-LOCATIONS (Mussafah & Ruwais)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              تغطية خاصة ومناطق صناعية
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              خدمات نقل مصفح والرويس
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              نقدم خدمات مخصصة للمناطق ذات الطبيعة الصناعية والتنقلات البعيدة
              خارج مدينة أبوظبي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-muted shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl text-secondary-foreground mb-4">
                  نقل اثاث مصفح – خدمة متخصصة للمنطقة الصناعية
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  مصفح منطقة لها طبيعة خاصة تختلف عن باقي مناطق ابوظبي. فيها سكن
                  عمال ومستودعات ومكاتب صناعية وورش ومعارض، والشوارع والمداخل
                  مختلفة عن وسط المدينة. نقل اثاث مصفح يحتاج شاحنات تناسب
                  الشوارع الصناعية الواسعة وفريق يعرف تخطيط المنطقة وأماكن
                  التحميل والتفريغ فيها.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  نتعامل مع نقل اثاث في مصفح بشكل منتظم ولأغراض مختلفة: نقل سكن
                  عمال بين المباني، نقل مكاتب شركات صناعية، ونقل معدات ومحتويات
                  بين مستودعات. كذلك ننقل أثاث الشقق السكنية في مصفح الشعبية
                  ومصفح التجارية. كثير من سكان مصفح ينتقلون منها لمناطق سكنية
                  ثانية في ابوظبي مثل مدينة محمد بن زايد أو الشامخة والعكس،
                  ونقدر نوفر لهم سعر مناسب لأن المسافة قصيرة والعمل سريع. فريقنا
                  يعرف نقاط الدخول والخروج ومواعيد الازدحام في كل أقسام المنطقة
                  الصناعية، وهذا يوفر وقت ويقلل من تكلفة النقل.
                </p>
              </div>
              <p className="text-primary font-semibold text-sm">
                إذا كنت في مصفح وتحتاج نقل اثاث، تواصل معنا وسنرتب لك موعد يناسب
                طبيعة المنطقة.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-muted shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl text-secondary-foreground mb-4">
                  نقل اثاث الرويس – تغطية شاملة خارج المدينة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  الرويس تبعد حوالي 240 كيلومتر عن مدينة ابو ظبي، وأغلب سكانها
                  يعملون في قطاع النفط والغاز مع أدنوك والشركات المقاولة.
                  التنقلات الوظيفية من وإلى الرويس شائعة، سواء للموظفين اللي
                  ينتقلون للعمل هناك أو اللي يرجعون لمدينة ابوظبي أو دبي بعد
                  انتهاء عقودهم. نقل اثاث الرويس يحتاج تخطيط مختلف لأن المسافة
                  طويلة والأثاث يقضي ساعات على طريق صحراوي حار.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  نستخدم شاحنات مغلقة ومكيّفة مخصصة للمسافات الطويلة، ونثبّت كل
                  قطعة بأحزمة وشرائط تمنع أي حركة أو احتكاك خلال الرحلة. الطريق
                  بين أبوظبي والرويس صحراوي والحرارة فيه أعلى من المدينة، عشان
                  كذا التكييف داخل الشاحنة مهم جداً لحماية الأثاث خصوصاً القطع
                  الخشبية والجلدية. تقديم خدمة نقل اثاث الرويس بشكل منتظم لموظفي
                  أدنوك والمقاولين في المنطقة الغربية. نعرف متطلبات السكن
                  والمجمعات هناك ونرتب كل شيء مسبقاً حتى يوصل الأثاث جاهز
                  للتركيب والاستخدام من أول يوم. بعض عملائنا في الرويس يحتاجون
                  ننقل لهم من دبي مباشرة مش من ابوظبي، ونرتب هالشيء أيضاً.
                  المسافة أطول لكن الخدمة والتأمين نفسهم.
                </p>
              </div>
              <p className="text-primary font-semibold text-sm">
                تغطية شاملة وموثوقة للمنطقة الغربية وأدنوك للمجمعات السكنية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTER-EMIRATE
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 border-y border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              نقل بين الإمارات
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              نقل اثاث من ابوظبي الى دبي والإمارات الأخرى
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              أكثر خط نقل مطلوب عندنا هو نقل اثاث من ابوظبي الى دبي والعكس.
              المسافة حوالي 130 كيلومتر على شارع الشيخ زايد ونغطيها يومياً. بما
              إن مقرنا الرئيسي في دبي، التنسيق بين الطرفين يصير أسهل وأسرع من أي
              شركة ثانية. نستلم من ابوظبي الصبح ونسلّم في دبي نفس اليوم، أو
              العكس. ونعرف أوقات الازدحام على طريق ابوظبي دبي، خصوصاً أيام الأحد
              صباحاً والخميس عصراً، فنختار المواعيد اللي تضمن وصول سريع وآمن.
            </p>
          </div>

          <div className="space-y-4">
            {/* Dubai */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-3xl border border-muted overflow-hidden">
              <div className="md:col-span-2 bg-primary flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <Truck className="w-8 h-8 mx-auto mb-1" />
                  <span className="text-xs font-bold">1.5–2 س</span>
                </div>
              </div>
              <div className="md:col-span-10 p-7">
                <h3 className="font-bold text-lg text-secondary-foreground mb-2">
                  نقل اثاث من ابوظبي الى دبي والعكس
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  كثير من عملائنا ينتقلون بين ابوظبي ودبي بسبب تغيير الوظيفة أو
                  انتهاء عقد الإيجار أو البحث عن إيجار أقل. بعضهم ينتقل من
                  ابوظبي لدبي عشان يكون أقرب لمكان عمله الجديد، وبعضهم يرجع
                  لابوظبي بعد سنوات في دبي. الخط بين المدينتين من أنشط خطوط نقل
                  الاثاث في الإمارات، ونحن من أكثر الشركات نشاطاً عليه بحكم
                  وجودنا في الطرفين. الأسعار بين المدينتين تعتمد على حجم النقل،
                  لكنها تشمل نفس التغليف والتأمين والخدمة الكاملة.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  نقل اثاث دبي <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Other emirates */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-3xl border border-muted overflow-hidden">
              <div className="md:col-span-2 bg-secondary flex items-center justify-center p-6">
                <div className="text-center text-secondary-foreground">
                  <Truck className="w-8 h-8 mx-auto mb-1" />
                  <span className="text-xs font-bold">مستمر</span>
                </div>
              </div>
              <div className="md:col-span-10 p-7">
                <h3 className="font-bold text-lg text-secondary-foreground mb-2">
                  نقل اثاث من ابوظبي إلى باقي الإمارات
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  ننقل أيضاً بين كل الإمارات:{" "}
                  <Link
                    href="/نقل-أثاث-الشارقة"
                    className="text-primary hover:underline"
                  >
                    الشارقة
                  </Link>
                  ،{" "}
                  <Link
                    href="/نقل-اثاث-عجمان"
                    className="text-primary hover:underline"
                  >
                    عجمان
                  </Link>
                  ،{" "}
                  <Link
                    href="/نقل-اثاث-العين"
                    className="text-primary hover:underline"
                  >
                    العين
                  </Link>
                  ،{" "}
                  <Link
                    href="/نقل-اثاث-راس-الخيمة"
                    className="text-primary hover:underline"
                  >
                    رأس الخيمة
                  </Link>
                  ، الفجيرة، وأم القيوين.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  خط ابوظبي للعين مطلوب كثير أيضاً بسبب قرب المسافة (حوالي 160
                  كيلومتر) والتنقلات الجامعية والوظيفية بين المدينتين. طلاب
                  جامعة الإمارات وموظفين الهيئات الحكومية في العين من أكثر
                  عملائنا على هذا الخط. كل عملية نقل اثاث بين الإمارات تشمل نفس
                  مستوى التغليف والتأمين والشاحنات المغلقة اللي نستخدمها داخل
                  المدينة الواحدة.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "نقل اثاث الشارقة", href: "/نقل-أثاث-الشارقة" },
                    { label: "نقل اثاث دبي", href: "/" },
                    { label: "نقل اثاث العين", href: "/نقل-اثاث-العين" },
                  ].map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="text-primary text-xs font-bold border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
              نصائح مهمة قبل نقل اثاثك في ابوظبي
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              من واقع تجربتنا في آلاف عمليات نقل الاثاث في ابوظبي، هذي النقاط
              اللي تفرق فعلاً بين نقل يمر بسلاسة ونقل يتحول لتجربة مرهقة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 divide-y md:divide-y-0 border border-muted rounded-3xl overflow-hidden bg-white">
            {[
              {
                title: "احجز مبكراً إذا كنت تنقل في الصيف",
                desc: "الفترة من يونيو إلى سبتمبر هي موسم الذروة في ابوظبي بسبب تجديد عقود الإيجار وتنقلات الموظفين وانتهاء السنة الدراسية. شركات النقل تكون مشغولة والمواعيد محدودة. الحجز قبل أسبوع إلى أسبوعين يضمن لك الموعد اللي يناسبك ويجنبك ضغط اللحظة الأخيرة.",
              },
              {
                title: "تحقق من متطلبات مبناك قبل يوم النقل",
                desc: "كثير من مباني أبوظبي تطلب شهادة عدم ممانعة (NOC) من المالك أو حجز مصعد خدمة أو لها ساعات محددة مسموح فيها بالنقل. بعض المباني تمنع النقل بعد الساعة 8 مساءً وبعضها يطلب إيداع تأمين على المناطق المشتركة. تواصل مع إدارة المبنى القديم والجديد قبل الموعد بيومين على الأقل حتى ما تتفاجأ بمنع الدخول يوم النقل.",
              },
              {
                title: "احمِ أثاثك من حرارة أبو ظبي",
                desc: "في الصيف الحرارة تتجاوز 45 درجة مئوية، والخشب يتمدد والجلد يتشقق والإلكترونيات تتأثر. أصرّ على شاحنات مغلقة ومكيّفة. نحن في النمره نوفرها تلقائياً مع كل عملية نقل.",
              },
              {
                title: "أفرغ الخزائن والأدراج قبل وصول الفريق",
                desc: "الخزائن الممتلئة أثقل وأصعب في النقل وأكثر عرضة للكسر. فرّغها في أكياس أو صناديق منفصلة. هذا يوفر وقت العمال ويقلل التكلفة ويحمي أغراضك الصغيرة من الضياع.",
              },
              {
                title: "احتفظ بالوثائق المهمة والأشياء الثمينة معك شخصياً",
                desc: "جوازات السفر، الهوية الإماراتية، عقود الإيجار، المستندات المالية، المجوهرات، والأموال النقدية لا تضعها في صناديق النقل أبداً. خذها معك في سيارتك الخاصة.",
              },
              {
                title: "صوّر أثاثك قبل الفك",
                desc: "التقط صور لكل قطعة وهي مركّبة ولكل جهاز إلكتروني بتوصيلاته. هذي الصور تسهّل إعادة التركيب في المكان الجديد وتكون مرجع لو حصل أي خلاف. كثير من عملائنا اللي اتبعوا هالنصيحة وفّروا على أنفسهم ساعات من التركيب.",
              },
              {
                title: "قارن بين ثلاث شركات نقل اثاث على الأقل قبل ما تقرر",
                desc: "خذ عرض سعر من كل واحدة بعد معاينة فعلية مش بالتلفون فقط. قارن السعر الإجمالي مع الخدمات المشمولة: هل يشمل التغليف؟ هل يشمل الفك والتركيب؟ هل فيه تأمين؟ الشركة اللي تعطيك سعر شامل بعد ما تشوف الأثاث بعينها أوثق من شركة ترمي لك رقم بالتليفون بدون ما تعرف عندك كم قطعة.",
              },
              {
                title: "رتّب أولويات التفريغ في المكان الجديد",
                desc: "حدد مع فريق النقل أي غرفة تتركّب أولاً. عادةً غرفة النوم والمطبخ أهم شيء أول يوم لأنك تحتاج تنام وتطبخ. باقي الغرف تقدر ترتبها على مهلك في الأيام اللي بعدها.",
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

          <div className="mt-8 bg-primary/5 rounded-2xl border border-primary/10 p-5 flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm font-semibold text-secondary-foreground">
              جاهز تبدأ عملية نقل اثاث ابوظبي؟ اتصل الآن واحجز معاينة مجانية.
            </span>
            <Button size="sm" asChild>
              <a href="tel:0541767605" dir="ltr">
                054 1767605
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STORAGE
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-y border-muted">
        <div className="max-w-6xl mx-auto">
          {/* Image */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden relative mb-10">
            <Image
              src="/auh/تخزين-اثاث-ابوظبي-النمره-مستودع.jpg"
              alt="تخزين أثاث في ابوظبي - مستودعات النمره الآمنة لتخزين الأثاث"
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
                حل مؤقت أو طويل المدى
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-5">
                تخزين الاثاث في ابوظبي
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                تحتاج مكان تخزّن فيه أثاثك مؤقتاً؟ سواء بسبب تجديد البيت أو فترة
                بين عقدين إيجار أو سفر طويل، نوفر تخزين اثاث ابوظبي في مستودعات
                مكيّفة لفترات قصيرة وطويلة.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                بعض عملائنا يخزنون لأسبوع أو أسبوعين بين تسليم الشقة القديمة
                واستلام الجديدة، وبعضهم يخزن لأشهر أثناء السفر أو تجديد المنزل.
                نغلف كل قطعة قبل التخزين ونتأكد إن المستودع بدرجة حرارة ثابتة
                حتى ما يتأثر أثاثك بالرطوبة أو الحرارة. تقدر تسترجع أثاثك في أي
                وقت بتنسيق مسبق معنا وننقله لعنوانك الجديد.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a
                    href="https://wa.me/971541767605"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    استفسر عن التخزين
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/خدمات/تخزين-اثاث-في-دبي">خدمة تخزين الاثاث</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: Shield,
                  title: "مستودعات مكيّفة ومؤمّنة",
                  desc: "مستودعات مكيّفة وتحت درجة حرارة ورطوبة ثابتة لحماية الأثاث 24/7.",
                },
                {
                  icon: CheckCircle,
                  title: "تغليف قبل التخزين",
                  desc: "نغلف كل قطعة قبل التخزين لحمايتها من الرطوبة أو الحرارة والغبار.",
                },
                {
                  icon: UserCheck,
                  title: "فترات قصيرة وطويلة",
                  desc: "تخزين مرن لأيام، أسبوع، أسبوعين أو لأشهر حسب سفرك أو صيانة منزلك.",
                },
                {
                  icon: Clock,
                  title: "مرونة كاملة في الاسترجاع",
                  desc: "تسترجع أثاثك في أي وقت بتنسيق مسبق معنا وننقله لعنوانك الجديد مع فريق الفك والتركيب.",
                },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-muted"
                  >
                    <span className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="font-bold text-secondary-foreground text-sm mb-0.5">
                        {f.title}
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT DISTINGUISHES US (أفضل شركات نقل الاثاث في ابوظبي – ما الذي يميّز النمره؟)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              الريادة والجودة
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              أفضل شركات نقل الاثاث في ابوظبي – ما الذي يميّز النمره؟
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-4xl">
              إذا كتبت &quot;افضل شركات نقل الاثاث في ابوظبي&quot; في Google،
              بتطلع لك عشرات النتائج وكل شركة تقول إنها الأفضل. بدل ما نقول نفس
              الكلام، خلنا نحكي عن المعايير اللي المفروض تسأل عنها قبل ما تختار
              أي شركة نقل أثاث في أبوظبي، وكيف تقيّم بنفسك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "الترخيص والتأمين",
                desc: "الترخيص والتأمين هم أول شيء تتأكد منه. النمره مرخصة من دائرة التنمية الاقتصادية ومؤمّنة بالكامل. التأمين يغطي أي ضرر يحصل أثناء النقل ونقدر نوريك وثيقة التأمين قبل ما توافق. كثير من الشركات تدّعي إنها مؤمّنة لكن لو طلبت منهم وثيقة التأمين ما يقدرون يوفرونها. وفيه فرق بين التأمين الشامل والتأمين الجزئي: بعض الشركات تأمينها يغطي فقط الضرر الكلي ومش الخدوش أو الكسر البسيط. تأميننا يغطي كل شيء من أصغر خدش لأكبر كسر.",
              },
              {
                icon: Star,
                title: "تقييمات العملاء",
                desc: (
                  <>
                    تقييمات العملاء على Google مؤشر صادق لأن العميل يكتبها بعد
                    التجربة. شوف{" "}
                    <a
                      href="https://www.google.com/maps/place/?q=place_id:ChIJjeNo41ppXz4R34OmlNqaUBU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-bold hover:underline"
                    >
                      تقييماتنا
                    </a>{" "}
                    واقرأ تجارب عملاء حقيقيين تعاملوا معنا في نقل اثاث ابوظبي
                    قبل ما تقرر.
                  </>
                ),
              },
              {
                icon: CheckCircle,
                title: "شفافية الأسعار",
                desc: 'شفافية الأسعار تريحك من البداية. السعر اللي نعطيك إياه بعد المعاينة هو السعر النهائي. ما في رسوم خفية ولا زيادات يوم النقل ولا مصاريف "إضافية" تظهر فجأة. وما ناخذ دفعة مقدمة.',
              },
              {
                icon: Truck,
                title: "جودة المواد والمعدات",
                desc: "جودة المواد والمعدات تحمي أثاثك فعلياً. كراتين مقوّاة، غلاف فقاعات سميك، بطانيات حماية، شاحنات مغلقة ومكيّفة. الفرق واضح بين شركة تستخدم هذي المواد وشركة تنقل بأكياس بلاستيك وبيك اب مفتوح تحت الشمس.",
              },
              {
                icon: UserCheck,
                title: "فريق عمل مدرب ومحترف",
                desc: "فريقنا موظفين دائمين مدربين على فك وتركيب كل أنواع الأثاث، من غرف النوم التركية إلى المطابخ الألمانية إلى خزائن الملابس المدمجة. مش عمال يومية يتغيرون مع كل عملية ولا يعرفون الفرق بين أنواع الأثاث. هذا يفرق كثير لأن العامل اللي يعرف نوع الأثاث يفكه بسرعة وبدون أخطاء، بينما عامل ما عنده خبرة ممكن يكسر مسمار أو يخلع لولب بطريقة غلط ويخرب القطعة كلها.",
              },
              {
                icon: Clock,
                title: "خدمة ما بعد النقل والتنظيف",
                desc: "وآخر شيء يميّزنا عن باقي شركات نقل الاثاث في ابوظبي: خدمة ما بعد النقل. ننظف المكان الجديد بعد النقل، نشيل كل مخلفات التغليف والكراتين والبلاستيك، ونتأكد إن كل شيء مرتب ومركّب قبل ما نغادر. لو اكتشفت أي مشكلة بعد النقل بيوم أو يومين مثل باب خزانة مش مضبوط أو درج ثقيل، تقدر تتواصل معنا ونرسل حد يصلحها بدون تكلفة إضافية. أغلب الشركات تسلّم وتمشي ولا ترد على تليفونك بعدها، لكن نحن نعتبر إن الشغل ما خلص إلا لما العميل يكون راضي تماماً عن كل قطعة في بيته الجديد.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 border border-muted flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-bold text-secondary-foreground text-base">
                    {item.title}
                  </h3>
                  <div className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              );
            })}
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
              ابدأ الآن
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              احصل على عرض سعر مجاني لنقل اثاثك في ابوظبي
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-3xl mx-auto">
              جاهز لنقل اثاثك في ابوظبي؟ تواصل مع شركة النمره الآن واحصل على عرض
              سعر مجاني خلال دقائق. سواء كنت تنقل شقة صغيرة في الخالدية أو فيلا
              كبيرة في مدينة خليفة أو مكتب تجاري في جزيرة المارية، فريقنا جاهز
              يتولى كل شيء من أول اتصال حتى آخر قطعة تتركب في مكانها الجديد.
              معاينة مجانية في الموقع أو تقدير فوري عبر واتساب. اتصل على 054
              1767605 أو أرسل رسالة عبر واتساب وخلنا نتكفل بكل شيء. نقل آمن ·
              تسليم مضمون · أسعار تنافسية.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button size="lg" className="h-13 px-8 font-bold gap-2" asChild>
                <a
                  href="https://wa.me/971541767605"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-whatsapp-bottom"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب — عرض سعر فوري
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
        title="الأسئلة الشائعة حول نقل اثاث في ابوظبي"
        subtitle="إجابات واضحة على أكثر الأسئلة شيوعاً حول نقل الأثاث في ابوظبي"
        faqs={auhFaqs}
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
