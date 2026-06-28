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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/utils/FaqsSection";
import CTASection from "@/components/utils/CTASection";
import QuoteSection from "@/components/utils/QuoteSection";
import { ReviewsSection } from "@/components/utils/ReviewsSection";

export const metadata: Metadata = {
  title: "نقل أثاث الشارقة | شركة النمره - 054 1767605",
  description:
    "شركة النمره لنقل اثاث الشارقة – فك وتغليف وتركيب مع تأمين شامل وشاحنات مغلقة. معاينة مجانية وعرض سعر فوري. اتصل الآن!",
  alternates: {
    canonical: "/نقل-أثاث-الشارقة",
  },
};

const sharjahFaqs = [
  {
    question: "كم تكلفة نقل الاثاث في الشارقة؟",
    answer: (
      <div className="space-y-3">
        <p>
          أسعار نقل اثاث الشارقة تعتمد على عدة عوامل رئيسية: حجم السكن وكمية
          الأثاث الفعلية، الطابق ووجود مصعد خدمي أو لا، المسافة بين الموقعين،
          ونوع القطع (هل فيه بيانو أو خزنة أو أثاث أنتيك يحتاج معاملة خاصة).
        </p>
        <p>
          كإرشاد عام: استوديو أو غرفة واحدة يبدأ من 700 درهم، وشقة غرفتين من
          1500 درهم، وشقة ثلاث غرف من 2000 درهم، والفلل تبدأ من 3500 درهم.
          الأسعار تشمل الفك والتغليف والنقل والتركيب والتنظيف بعد النقل.
        </p>
        <p>
          الوقت من الشهر يأثر كمان: نهاية الشهر أغلى بسبب ارتفاع الطلب، ومنتصف
          الشهر أرخص وأسهل في التوفر. أرسل لنا صور أثاثك على الواتساب ونعطيك سعر
          دقيق خلال دقائق — بدون أي التزام من طرفك.
        </p>
      </div>
    ),
  },
  {
    question: "كم يستغرق نقل اثاث شقة في الشارقة؟",
    answer: (
      <div className="space-y-3">
        <p>الوقت يعتمد على حجم الشقة وكمية الأثاث والطابق. كإرشاد عام:</p>
        <ul className="list-disc list-inside space-y-1 pr-2">
          <li>استوديو أو غرفة واحدة: من 3 إلى 4 ساعات</li>
          <li>شقة غرفة أو غرفتين: من 4 إلى 6 ساعات</li>
          <li>شقة 3 غرف أو أكثر: من 6 إلى 8 ساعات</li>
          <li>فيلا أو شقة كبيرة بأثاث كثير: يوم كامل أو أكثر</li>
        </ul>
        <p>
          هالأوقات تشمل الفك والتغليف والنقل والتركيب والتنظيف بعد النقل. الطابق
          المرتفع بدون مصعد خدمي يضيف وقتاً إضافياً. نلتزم بإنهاء النقلة في نفس
          اليوم ما لم يكن الحجم كبير جداً ويتطلب ترتيبات خاصة.
        </p>
      </div>
    ),
  },
  {
    question: "هل يوجد تأمين على الاثاث أثناء النقل؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم، وهذا من أهم الأشياء اللي تفرّقنا عن كثير من شركات نقل اثاث
          الشارقة. كل عملية نقل معنا تشمل{" "}
          <strong>تأمين شامل على كل القطع بدون أي تكلفة إضافية</strong>. مو خيار
          إضافي، مو رسوم منفصلة — مشمول من أول لحظة.
        </p>
        <p>
          التأمين يغطي الأضرار الناتجة عن النقل والتحميل والتفريغ. لو صار أي ضرر
          أثناء النقل، وهالشي نادر جداً بسبب طريقتنا في التغليف والتحميل، نتحمل
          المسؤولية كاملة ونعوّضك — إصلاح أو استبدال.
        </p>
        <p>
          ونوضح لك تفاصيل سياسة التأمين قبل ما نبدأ أي شي عشان تكون مطمئن. كثير
          من الشركات تتهرب من هالموضوع لما تسألهم — إحنا نبدأ فيه نحن قبل ما
          تسأل.
        </p>
      </div>
    ),
  },
  {
    question: "هل توفرون خدمة نقل اثاث من الشارقة إلى دبي؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم، ننقل بين الشارقة ودبي بشكل يومي وهذا من أكثر المسارات طلباً
          عندنا. المسافة تتراوح بين 20 إلى 40 دقيقة حسب الموقع وحالة الطريق.
        </p>
        <p>
          مقرنا الرئيسي في القوز بدبي، فالمسار مألوف جداً لفريقنا. نعرف الطرق
          الأسرع ونجدول الرحلات بعيداً عن أوقات الذروة قدر الإمكان. ننقل من كل
          مناطق الشارقة — النهدة، التعاون، مويلح، القاسمية، وغيرها — إلى أي
          منطقة في دبي والعكس.
        </p>
        <p>
          نفس مستوى الخدمة والتأمين والأسعار اللي نقدمها داخل الشارقة. فك وتركيب
          كامل في الموقعين. لا رسوم إضافية على المسافة بين الإمارتين.
        </p>
      </div>
    ),
  },
  {
    question: "هل تشمل الخدمة فك وتركيب الاثاث؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم، الفك والتركيب مشمولان في كل نقلة بدون أي تكلفة إضافية. ما تحتاج
          تجيب نجار أو فني من برا.
        </p>
        <p>
          نجار متخصص يتولى فك غرف النوم، الخزائن، طاولات الطعام، المكتبات، وكل
          الأثاث الكبير المركّب. يعيد تركيبه في الموقع الجديد ويتأكد إن كل قطعة
          مثبتة صح وآمنة. نتعامل مع أثاث ايكيا بعناية خاصة لأن بعض قطعه ما تتحمل
          فك وتركيب متكرر بدون الأدوات الصح.
        </p>
        <p>
          فني الكهرباء يتولى فصل وتوصيل الأجهزة: الغسالة، الثلاجة، التكييف،
          الغسالة الصحون. ويركّب الستائر والتلفزيونات والشاشات على الجدار. كل شي
          يشتغل في الموقع الجديد قبل ما نمشي.
        </p>
      </div>
    ),
  },
  {
    question: "ما هي أفضل شركة نقل اثاث في الشارقة؟",
    answer: (
      <div className="space-y-3">
        <p>
          السؤال الصح مو &quot;من الأرخص؟&quot; بل &quot;من يعطيني أفضل قيمة
          مقابل السعر مع أقل قدر من المخاطر؟&quot; عند اختيار شركة نقل اثاث
          الشارقة، ركّز على ثلاث نقاط:
        </p>
        <ul className="list-disc list-inside space-y-1 pr-2">
          <li>هل عندهم تأمين فعلي وموثّق على الأثاث — مو مجرد كلام؟</li>
          <li>هل الأسعار واضحة من البداية بدون رسوم مخفية؟</li>
          <li>هل عندهم تقييمات حقيقية من عملاء سابقين تقدر تتحقق منها؟</li>
        </ul>
        <p>
          شركة النمره تلتزم بهالمعايير الثلاثة. تقدر تشوف تقييمات عملائنا على
          خرائط قوقل وتتصل بنا للتأكد بنفسك. الجواب الحقيقي يكون بالتجربة، مو
          بالإعلان.
        </p>
      </div>
    ),
  },
  {
    question: "هل يمكن النقل في نفس اليوم؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم، نوفر خدمة نقل عفش بنفس اليوم وخدمة نقل طارئ حسب توفر الفريق
          والشاحنات. هالخدمة متوفرة كل أيام الأسبوع بما فيها الجمعة والعطل
          الرسمية.
        </p>
        <p>
          لو عندك نقلة عاجلة في الشارقة أو من الشارقة لإمارة ثانية، اتصل أو أرسل
          واتساب في أقرب وقت — كلما بكّرت، كلما زادت احتمالية التوفر. الأفضل
          تتصل في الصباح الباكر عشان نقدر نرتب الفريق والشاحنة المناسبة.
        </p>
        <p>
          ملاحظة: نقلة نفس اليوم تحتاج تقييم سريع للحجم عبر الواتساب (صور
          الأثاث) حتى نتأكد إننا نرسل الفريق الصح والشاحنة المناسبة. هذا يضمن إن
          النقلة تتم بنفس مستوى الجودة حتى في حالات الطوارئ.
        </p>
      </div>
    ),
  },
];

export default function SharjahMovingPage() {
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
              نقل أثاث الشارقة
            </span>
          </nav>

          {/* Orange eyebrow + star rating */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-primary font-bold text-xs uppercase tracking-widest border-r-2 border-primary pr-3">
              شركة النمره · الشارقة
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
            نقل أثاث{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">الشارقة</span>
              <span
                aria-hidden
                className="absolute bottom-1 right-0 left-0 h-3 bg-primary/10 -skew-x-3 rounded-sm z-0"
              />
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            تبحث عن شركة نقل أثاث الشارقة تقدر تعتمد عليها؟ شركة النمره تخدم
            سكان الشارقة من أكثر من
            <strong className="text-foreground">10 سنوات</strong> في نقل الاثاث
            السكني والتجاري. فك، تغليف احترافي بمواد عالية الجودة، نقل بشاحنات
            مغلقة ومكيّفة، وتركيب كامل في موقعك الجديد.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Button size="lg" className="h-12 px-7 font-bold gap-2" asChild>
              <a
                href="https://wa.me/971541767605"
                target="_blank"
                rel="noopener noreferrer"
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
              <a href="tel:0541767605" dir="ltr">
                <Phone className="w-4 h-4" />
                054 1767605
              </a>
            </Button>
          </div>

          {/* 4 promise pills */}
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
              src="/shj/نقل-اثاث-الشارقة-النمره-شركة-نقل.jpg"
              alt="شركة النمره نقل اثاث في الشارقة - شاحنة نقل أثاث أمام فيلا مع فريق عمل محترف"
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
              { num: "+10", label: "سنوات خبرة في الشارقة" },
              { num: "+5,000", label: "نقلة ناجحة" },
              { num: "40+", label: "فرد بالفريق" },
              { num: "12", label: "شاحنة مغلقة ومكيّفة" },
            ].map((s) => (
              <div key={s.num}>
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
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            كل عملية نقل اثاث في الشارقة معنا تشمل{" "}
            <strong className="text-foreground">تأمين شامل على كل القطع</strong>{" "}
            بدون أي تكلفة إضافية. ومعاينة مجانية قبل النقل لتحديد السعر بدقة. ما
            نطلب أي دفعة مقدمة، وما في رسوم خفية. تبي عرض سعر فوري؟ أرسل تفاصيل
            نقلتك وصور الأثاث على الواتساب أو اتصل على{" "}
            <a
              href="tel:0541767605"
              dir="ltr"
              className="text-primary font-bold hover:underline"
            >
              054 1767605
            </a>
            .
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
            <h2 className="text-2xl md:text-3xl font-bold  mb-4">
              خدمات نقل اثاث في الشارقة لكل نوع نقلة
            </h2>
            <p className="text-muted-foreground max-w-4xl text-sm md:text-base leading-relaxed">
              ما في نقلة تشبه الثانية. شقة في النهدة غير فيلا في مويلح غير مكتب
              في المنطقة الصناعية. كل موقع له تحدياته، وكل عميل له احتياجات
              مختلفة. ولهذا السبب ما نقدم خدمة واحدة ثابتة لكل الناس.
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm md:text-base leading-relaxed mt-2">
              فريقنا يبدأ بتقييم احتياجك الفعلي. نسأل عن نوع السكن، عدد الغرف،
              الطابق، نوع الأثاث، والمسافة بين الموقعين. وبناءً على ذلك نحدد عدد
              العمال والشاحنات ومواد التغليف المطلوبة. الهدف إن كل نقلة تتم
              بالطريقة اللي تناسبها، مو بطريقة موحدة للجميع.
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm md:text-base leading-relaxed mt-2">
              نقل اثاث الشارقة معنا يشمل خدمات متكاملة: نقل الشقق والفلل
              والمكاتب، مع فك وتغليف وتركيب لكل أنواع الأثاث. وكل خدمة لها
              فريقها المتخصص والأدوات المناسبة لها. النجار يتعامل مع الأثاث
              الخشبي وأثاث ايكيا. فني الكهرباء يتولى الأجهزة الكهربائية
              والتكييفات. وفريق التغليف يحمي كل قطعة بالمواد المناسبة لنوعها
              وحجمها.
            </p>
            <p className="text-muted-foreground max-w-4xl text-sm md:text-base leading-relaxed mt-2">
              لو كنت تنقل داخل الشارقة أو من الشارقة لإمارة ثانية، نفس الفريق
              ونفس العناية. الفرق بس في المسافة.
            </p>
          </div>

          <div className="space-y-6">
            {/* Service 1 — شقق | image right */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <div className="inline-flex items-center gap-2 mb-5">
                  <h3 className="font-medium text-xl text-secondary-foreground">
                    نقل اثاث الشقق في الشارقة
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  نقل اثاث الشقق في الشارقة له تحدياته. كثير من الأبراج السكنية
                  فيها مصاعد صغيرة ما تتسع للقطع الكبيرة مثل الكنب والخزائن.
                  الممرات ضيقة وتحتاج مناورة دقيقة لتمرير الأثاث بدون خدوش على
                  الجدران. ومواقف السيارات أمام المباني محدودة ولازم تنسّق مع
                  الإدارة. فريقنا يتعامل مع هالمواقف بشكل يومي ويعرف كيف يتصرف
                  في كل مبنى.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  قبل يوم النقل، ننسّق مع إدارة المبنى لحجز المصعد الخدمي وتحديد
                  أوقات التحميل المسموحة. نستخدم أغطية حماية للجدران والأبواب
                  والأرضيات. لو شقتك في طابق مرتفع بدون مصعد خدمي مناسب، عندنا
                  أونش رفع اثاث يحل الموضوع بأمان. ونتعامل مع شقق النهدة والمجاز
                  والقاسمية والتعاون وأبو شغارة والرميلة بشكل مستمر.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نفرّق في التعامل بين الاستوديو والشقة الكبيرة. الاستوديو ممكن
                  ينقله فريق من 3 أشخاص بشاحنة متوسطة خلال 3 ساعات. أما شقة 3
                  غرف في طابق مرتفع تحتاج 5 أشخاص على الأقل. كل نقلة نقيّمها
                  بشكل منفصل عشان ما تدفع أكثر من حاجتك الفعلية.
                </p>
                <Link
                  href="/خدمات/نقل-اثاث-الشقق-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تعرف على خدمة نقل اثاث الشقق
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              {/* 4:3 image */}
              <div className="aspect-[4/3] md:aspect-auto relative order-1 md:order-2 min-h-[220px]">
                <Image
                  src="/shj/نقل-اثاث-شقق-الشارقة-النمره.jpg"
                  alt="نقل أثاث الشقق في الشارقة - فريق النمره ينقل أثاث من شقة سكنية"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 2 — فلل | image left */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              {/* 4:3 placeholder */}
              <div className="aspect-[4/3] md:aspect-auto relative min-h-[220px]">
                <Image
                  src="/shj/نقل-اثاث-فلل-الشارقة-النمره.jpg"
                  alt="نقل أثاث الفلل في الشارقة - عمال النمره يحملون أثاث من فيلا فاخرة"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-5">
                  <h3 className="font-medium text-xl text-secondary-foreground">
                    نقل اثاث الفلل في الشارقة
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  نقل اثاث الفلل يحتاج ترتيبات مختلفة عن الشقق. القطع أكبر حجماً
                  وأثقل وزناً. في طوابق متعددة لازم تنقل منها وإليها. وغالباً
                  يكون في أثاث حديقة خارجي وأجهزة ثقيلة مثل الخزنات وطاولات
                  البلياردو وأحياناً البيانو. هالقطع ما تنقل بالطريقة العادية
                  وتحتاج معدات خاصة.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نوفر أونش رفع للقطع اللي ما تمر من الباب أو السلالم. نستخدم
                  بطانيات حماية سميكة ومخصصة لكل نوع سطح. الأثاث الجلدي يُغلّف
                  بطريقة تحميه من الاحتكاك، والخشب يُحمى من الرطوبة والحرارة.
                  نقل اثاث الشارقة في مناطق الفلل مثل الرحمانية والقرائن والحيرة
                  ومويلح والناصرية والبطائح يتم بعناية كاملة.
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
                <div className="inline-flex items-center gap-2 mb-5">
                  <h3 className="font-medium text-xl text-secondary-foreground">
                    نقل اثاث المكاتب والشركات في الشارقة
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  نقل مكتب أو شركة يختلف لأن كل يوم تأخير يكلّف الشركة فلوس
                  وإنتاجية ضائعة. لهذا نجدول نقل المكاتب في عطلة نهاية الأسبوع
                  أو بعد ساعات العمل عشان الموظفين يرجعون الأحد يلاقون كل شي
                  جاهز ومرتب في مكانه.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  نتعامل بعناية خاصة مع أجهزة الكمبيوتر والشاشات والطابعات
                  والسيرفرات وأجهزة الشبكات. نوثّق ترتيب الكابلات والتوصيلات قبل
                  الفصل ونعيد توصيلها في الموقع الجديد بنفس الطريقة. كل جهاز
                  يُغلّف بشكل منفصل ويُنقل في صناديق مبطّنة مضادة للصدمات.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نغطي نقل اثاث المكاتب في المنطقة الحرة بالشارقة والمنطقة
                  الصناعية ووسط المدينة والصجعة وميدان الذهب.
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
                  src="/shj/نقل-اثاث-مكاتب-شركات-الشارقة-النمره.jpg"
                  alt="نقل أثاث المكاتب والشركات في الشارقة - فريق النمره ينقل أثاث مكتبي"
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
                    src="/shj/فك-تغليف-تركيب-اثاث-الشارقة-النمره.jpg"
                    alt="خدمة فك وتغليف وتركيب الأثاث في الشارقة - فريق النمره يغلف ويفكك الأثاث باحترافية"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-5">
                    <h3 className="font-medium text-xl text-secondary-foreground">
                      فك وتغليف وتركيب الاثاث
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    التغليف هو اللي يحمي أثاثك فعلياً أثناء نقل الاثاث. نستخدم
                    مواد تغليف احترافية: بلاستيك فقاعي للقطع الهشة مثل المرايا
                    والزجاج، ستريتش فيلم للأسطح الخشبية والجلدية، كراتين مقوّاة
                    بأحجام مختلفة، وصناديق خاصة للملابس المعلقة.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    كل كرتون يتم ترقيمه وتسجيل محتوياته في قائمة. هالنظام يخلي
                    ترتيب الأثاث في البيت الجديد أسرع بكثير. تعرف وين كل شي بدون
                    ما تفتح كل الكراتين.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    نجار متخصص يفك الأثاث قبل النقل ويعيد تركيبه. نتعامل مع أثاث
                    ايكيا اللي يحتاج عناية خاصة عند الفك. وفني الكهرباء يتولى
                    فصل وتوصيل الغسالات والثلاجات والتكييفات وتركيب الستائر
                    والتلفزيونات.
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
          WHY CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#18232a] text-white mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              الفرق الحقيقي
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              لماذا تختار شركة النمره لنقل اثاث الشارقة؟
            </h2>
            <p className="text-white/70 max-w-2xl text-sm md:text-base leading-relaxed">
              شركات نقل الاثاث في الشارقة كثيرة. وصراحة، أغلبها تقول نفس الكلام
              تقريباً: &quot;فريق محترف&quot;، &quot;أسعار منافسة&quot;،
              &quot;خبرة طويلة&quot;. طيب، وش الفرق الحقيقي بينها؟
            </p>
            <p className="text-white/70 max-w-2xl text-sm md:text-base leading-relaxed mt-3">
              الفرق عندنا مو في الكلام، في أشياء محددة نلتزم فيها وتقدر تتأكد
              منها:
            </p>
          </div>

          {/* 3 bold promises */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden mb-10">
            {[
              {
                icon: Shield,
                title: "تأمين شامل على كل قطعة",
                desc: "مو مجرد كلمة نكتبها. لو صار أي ضرر أثناء النقل، نتحمل المسؤولية كاملة ونعوّضك. كثير من شركات نقل الاثاث في الشارقة ما توضّح سياسة التأمين. إحنا نوضحها لك قبل ما نبدأ أي شي.",
              },
              {
                icon: Truck,
                title: "شاحنات مغلقة ومكيّفة",
                desc: "حرارة الشارقة في الصيف تتجاوز 45 درجة مئوية. الأثاث الخشبي يتمدد وينكمش مع الحرارة، والجلد يتلف مع الرطوبة. شاحناتنا مغلقة بالكامل ومكيّفة.",
              },
              {
                icon: Award,
                title: "بدون دفعة مقدمة",
                desc: "ما نطلب أي مبلغ إلا بعد ما تنتهي النقلة بالكامل وتتأكد إن كل شي وصل بحالة ممتازة. الدفع فقط عند رضاك التام.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/5 p-8 flex flex-col gap-4">
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

          {/* Additional bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "معاينة مجانية في الموقع أو عرض سعر فوري عبر الواتساب",
              "تنظيف شامل بعد النقل لكلا الموقعين",
              "خدمة متوفرة 7 أيام في الأسبوع بما في ذلك أيام العطل",
              "السعر اللي نقوله من البداية هو السعر النهائي — بدون مفاجآت",
              "أكثر من 5,000 عملية نقل ناجحة في 10 سنوات",
              "أسطول من 12 شاحنة مغلقة ومكيّفة مع سائقين يعرفون الشارقة",
            ].map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/5 rounded-2xl px-4 py-3.5"
              >
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  {b}
                </p>
              </div>
            ))}
          </div>

          <p className="text-white/50 text-sm mt-8 border-t border-white/10 pt-6 leading-relaxed max-w-2xl">
            لو تسأل &quot;ما هي أفضل شركة نقل اثاث الشارقة؟&quot; الجواب ما يكون
            بالكلام بل بالتجربة. تقدر تشوف تقييمات عملائنا على خرائط قوقل وتحكم
            بنفسك. أو اتصل وجرّب بنفسك:{" "}
            <a
              href="tel:0541767605"
              dir="ltr"
              className="text-primary font-bold hover:underline"
            >
              054 1767605
            </a>
          </p>
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
              كيف تتم عملية نقل الاثاث في الشارقة؟
            </h2>
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
              كثير ناس تتوتر من موضوع نقل الاثاث لأنها ما تعرف وش بيصير بالضبط
              ومتى ومين المسؤول عن وش. عملية نقل اثاث في الشارقة معنا واضحة من
              أول خطوة لآخر خطوة. هنا نشرح كل مرحلة بالترتيب:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "التواصل والمعاينة",
                desc: "تتصل أو ترسل على الواتساب. نسألك عن حجم النقلة، نوع السكن، الطابق، الموقع الحالي والجديد. لو النقلة كبيرة (فيلا أو مكتب مثلاً)، نرسل مندوب يعاين مجاناً ويعطيك عرض سعر دقيق. لو النقلة بسيطة، نقدر نعطيك سعر عبر الواتساب بناءً على الصور.",
              },
              {
                title: "عرض السعر",
                desc: "نعطيك سعر واضح يشمل كل شي: الفك، التغليف، النقل، التركيب، والتنظيف بعد النقل. السعر ما يتغير يوم النقل إلا لو أضفت أثاث ما كان موجود وقت المعاينة.",
              },
              {
                title: "الفك والتغليف",
                desc: "يوم النقل، يوصل الفريق في الموعد المحدد. النجار يبدأ بفك الأثاث الكبير. فريق التغليف يلف كل قطعة بالمواد المناسبة ويرقّم الكراتين ويسجل محتوياتها.",
              },
              {
                title: "التحميل والنقل",
                desc: "نحمّل بعناية ونرتب القطع داخل الشاحنة بطريقة تمنع أي حركة أثناء الطريق. نستخدم أحزمة تثبيت وفواصل بين القطع. الشاحنة مغلقة ومكيّفة.",
              },
              {
                title: "التفريغ والتركيب",
                desc: "في الموقع الجديد، ننزّل كل شي ونوزع الكراتين حسب الغرف. النجار يركّب الأثاث في أماكنه. فني الكهرباء يوصل الغسالة والثلاجة والتكييف ويركّب الستائر والتلفزيون.",
              },
              {
                title: "التنظيف والتسليم",
                desc: "ننظف الموقع القديم والجديد من بقايا مواد التغليف والكراتين والغبار. نمر معك غرفة بغرفة ونتأكد إن كل قطعة في مكانها وكل جهاز يشتغل. وبعدها بس تدفع.",
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
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING TABLE
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4  border-y border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
                شفافية كاملة
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-5">
                أسعار نقل الاثاث في الشارقة
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                &quot;كم يكلّف نقل الأثاث في الشارقة؟&quot; هذا من أكثر الأسئلة
                اللي نسمعها يومياً. والجواب الصريح إن أسعار نقل اثاث الشارقة
                تعتمد على عدة عوامل، وما في سعر ثابت يناسب الجميع. لكن على عكس
                كثير من شركات نقل اثاث في الشارقة، نفضّل نعطيك فكرة واضحة عن
                الأسعار بدل ما نقول &quot;اتصل واسأل&quot; بس.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                العوامل اللي تأثر على السعر: حجم الشقة أو الفيلا، الكمية الفعلية
                للأثاث، الطابق ووجود مصعد خدمي أو لا، المسافة بين الموقعين،
                مستوى التغليف المطلوب، ووجود قطع خاصة مثل البيانو أو الخزنة.
                كمان الوقت من الشهر يأثر على أسعار نقل اثاث الشارقة: نهاية الشهر
                أغلى لأن الطلب يكون مرتفع، ومنتصف الشهر أرخص وأسهل من ناحية
                التوفر. النقل في أيام الأسبوع عادةً أوفر من عطلة نهاية الأسبوع.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                لكن عشان تاخذ فكرة عامة عن أسعار نقل اثاث في الشارقة:
              </p>
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-sm text-secondary-foreground font-medium">
                💡 عشان تحصل على أرخص سعر: انقل في منتصف الشهر وتجنب أيام الذروة
                آخر الشهر.
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl bg-white border border-muted shadow-sm mb-4">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="py-4 px-5 text-sm font-bold text-secondary-foreground">
                        نوع السكن
                      </th>
                      <th className="py-4 px-5 text-sm font-bold text-secondary-foreground">
                        السعر يبدأ من
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["استوديو أو غرفة واحدة", "700 درهم"],
                      ["شقة غرفتين", "1500 درهم"],
                      ["شقة ثلاث غرف", "2000 درهم"],
                      ["فيلا", "3500 درهم"],
                      ["مكتب", "حسب المساحة"],
                    ].map(([type, price], idx) => (
                      <tr
                        key={idx}
                        className="border-b border-muted last:border-0 hover:bg-slate-50 transition-colors"
                      >
                        <td className="py-4 px-5 text-sm font-semibold text-secondary-foreground">
                          {type}
                        </td>
                        <td className="py-4 px-5">
                          {price !== "حسب المساحة" ? (
                            <span className="text-primary font-bold text-sm">
                              {price}
                            </span>
                          ) : (
                            <span className="text-muted-foreground text-sm">
                              {price}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  هالأسعار تقريبية وتختلف حسب الكمية والمسافة ومتطلبات التغليف
                  الخاصة. الأسعار تشمل فك وتركيب الأثاث والتغليف والنقل
                  والتنظيف.
                </p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                ما نبي تفاجأ بتكاليف إضافية. لهذا نفضّل نعاين أو نشوف صور قبل ما
                نعطي سعر نهائي. أرسل لنا صور أثاثك على الواتساب وبنرد عليك بعرض
                سعر خلال دقائق. أو اتصل على 054 1767605 ونحسبها معك مباشرة. عشان
                تحصل على أرخص سعر نقل اثاث في الشارقة، انقل في منتصف الشهر وتجنب
                أيام الذروة آخر الشهر.
              </p>
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
              المناطق التي نغطيها في الشارقة
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              نخدم كل مناطق إمارة الشارقة بدون استثناء. فريقنا يعرف شوارع
              المدينة وأحيائها، ويتعامل مع متطلبات كل منطقة بشكل يومي.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "النهدة",
              "المجاز",
              "القاسمية",
              "الخان",
              "مويلح",
              "التعاون",
              "أبو شغارة",
              "الناصرية",
              "الممزر",
              "المنطقة الصناعية",
              "البطائح",
              "الرميلة",
              "العزرة",
              "الصجعة",
              "اليرموك",
              "النخيلات",
              "الشارقة القديمة",
              "الجادة",
              "القرائن",
              "الحيرة",
              "الرحمانية",
              "المنطقة الحرة",
              "ميدان الذهب",
            ].map((area) => (
              <span
                key={area}
                className="bg-white border border-muted hover:border-primary/40 hover:text-primary transition-colors py-2 px-4 rounded-xl text-xs md:text-sm font-medium text-secondary-foreground cursor-default"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed border-t border-muted pt-6 max-w-3xl">
            نعرف التحديات الخاصة بكل منطقة. أبراج التعاون مثلاً فيها ضغط على
            المصاعد وقت الذروة، والقاسمية فيها شوارع مزدحمة تحتاج توقيت مناسب.
            مويلح فيها فلل جديدة بمداخل واسعة، لكن المنطقة الصناعية تحتاج شاحنات
            كبيرة ومعدات مختلفة. النهدة منطقة مشتركة بين الشارقة ودبي وفيها
            كثافة سكانية عالية.{" "}
            <strong className="text-foreground">
              لو منطقتك مو مذكورة في القائمة، اتصل وتأكد — على الأغلب نغطيها.
            </strong>
          </p>
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
              نقل اثاث من الشارقة إلى الإمارات الأخرى
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              خدمة نقل أثاث الشارقة عندنا ما تقتصر على النقل داخل الإمارة. كثير
              من عملائنا ينتقلون من الشارقة لإمارة ثانية أو العكس. نغطي
              هالمسارات بشكل يومي بنفس مستوى الخدمة والتأمين والأسعار. فك وتركيب
              كامل في الموقعين.
            </p>
          </div>

          <div className="space-y-4">
            {/* Dubai */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-3xl border border-muted overflow-hidden">
              <div className="md:col-span-2 bg-primary flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <Truck className="w-8 h-8 mx-auto mb-1" />
                  <span className="text-xs font-bold">20–40 د</span>
                </div>
              </div>
              <div className="md:col-span-10 p-7">
                <h3 className="font-bold text-lg text-secondary-foreground mb-2">
                  نقل اثاث الشارقة دبي
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  هالمسار هو الأكثر طلباً عندنا. المسافة بين الشارقة ودبي تتراوح
                  بين 20 إلى 40 دقيقة حسب الموقع وحالة الطريق. نعرف الطرق الأسرع
                  ونجدول الرحلات بعيد عن أوقات الذروة قدر الإمكان. نقل اثاث
                  الشارقة دبي يتم بنفس الأسعار والخدمة المعتادة. مقرنا في دبي
                  أصلاً، فالمسار مألوف لنا جداً. ننقل من كل مناطق الشارقة إلى أي
                  منطقة في دبي والعكس.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  نقل اثاث دبي <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Ajman */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-3xl border border-muted overflow-hidden">
              <div className="md:col-span-2 bg-secondary flex items-center justify-center p-6">
                <div className="text-center text-secondary-foreground">
                  <Truck className="w-8 h-8 mx-auto mb-1" />
                  <span className="text-xs font-bold">15–25 د</span>
                </div>
              </div>
              <div className="md:col-span-10 p-7">
                <h3 className="font-bold text-lg text-secondary-foreground mb-2">
                  نقل اثاث الشارقة عجمان
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  الشارقة وعجمان إمارتين متجاورتين والمسافة بينهم قصيرة. في بعض
                  المناطق الحدودية، الموضوع يشبه النقل داخل نفس المدينة. نقل
                  اثاث الشارقة عجمان يتم بنفس اليوم في أغلب الحالات. لو تنتقل من
                  القاسمية للنعيمية مثلاً، ما يحتاج أكثر من ساعة على الطريق. نفس
                  الخدمة والعناية والتأمين. ونفس فريق فك وتركيب الأثاث.
                </p>
              </div>
            </div>

            {/* Other emirates */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-3xl border border-muted overflow-hidden">
              <div className="md:col-span-2 bg-slate-100 flex items-center justify-center p-6">
                <div className="text-center text-muted-foreground">
                  <Truck className="w-8 h-8 mx-auto mb-1" />
                  <span className="text-xs font-bold">1.5–3 س</span>
                </div>
              </div>
              <div className="md:col-span-10 p-7">
                <h3 className="font-bold text-lg text-secondary-foreground mb-2">
                  نقل اثاث إلى باقي الإمارات
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  ننقل من الشارقة إلى كل إمارات الدولة: أبوظبي، رأس الخيمة،
                  الفجيرة، أم القيوين، والعين. المسافة من الشارقة إلى أبوظبي
                  حوالي ساعة ونصف، ونجدول هالنقلات بحيث يوصل الفريق بدري ويخلص
                  في نفس اليوم. أما رأس الخيمة والفجيرة فالمسافة أطول وأحياناً
                  تحتاج تنسيق مختلف. نستخدم شاحنات مغلقة ومكيّفة للمسافات
                  الطويلة ونوفر تأمين شامل يغطي كامل الطريق. نقل اثاث بين
                  الإمارات من تخصصاتنا.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "نقل اثاث دبي", href: "/" },
                    { label: "نقل اثاث أبوظبي", href: "#" },
                    { label: "نقل اثاث رأس الخيمة", href: "#" },
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
              نصائح قبل نقل الاثاث في الشارقة
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              بعد أكثر من 10 سنوات في نقل الأثاث، شفنا نفس الأخطاء تتكرر عند
              العملاء. هذي نصائح من واقع تجربتنا اليومية تساعدك تخلي نقلتك أسهل
              وأقل تكلفة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 divide-y md:divide-y-0 border border-muted rounded-3xl overflow-hidden bg-white">
            {[
              {
                title: "احجز قبل النقلة بأسبوع على الأقل",
                desc: "الحجز المتأخر يقلل خياراتك. نهاية الشهر هي الفترة الأكثر ازدحاماً لأن أغلب عقود الإيجار تنتهي في هالوقت. لو تقدر تنقل في منتصف الشهر، الأسعار أفضل والتوفر أكثر. وبعض شركات نقل اثاث في الشارقة ترفع الأسعار آخر الشهر بسبب الطلب العالي.",
              },
              {
                title: "تخلّص من الأشياء اللي ما تحتاجها",
                desc: "كل قطعة زيادة تكلّف في التغليف والنقل. قبل ما تحجز، مر على أغراضك وقرر وش تبي تاخذ ووش تبي تتخلص منه. لو عندك أثاث قديم تبي ترميه، نوفر خدمة التخلص من الاثاث القديم ونوصله لمراكز إعادة التدوير أو نتبرع فيه لو حالته كويسة.",
              },
              {
                title: "صوّر توصيلات الأجهزة الإلكترونية قبل فصلها",
                desc: "التلفزيون، الرسيفر، جهاز الألعاب، الراوتر، نظام الصوت. صورة سريعة بجوالك توفر عليك وقت كثير يوم التركيب في البيت الجديد. كثير ناس تنسى هالخطوة وبعدين تقضي ساعات تحاول تعرف أي سلك يروح وين.",
              },
              {
                title: "جمّع الأوراق المهمة والمجوهرات في حقيبة معك",
                desc: "جوازات السفر، الهويات، شهادات الميلاد، المجوهرات الثمينة، والنقود. ما ننصح تحطها مع باقي الأثاث حتى لو كل نقلة عندنا فيها تأمين شامل.",
              },
              {
                title: "نسّق مع إدارة المبنى مسبقاً",
                desc: "بعض أبراج الشارقة تطلب حجز المصعد الخدمي مسبقاً وتحديد وقت محدد للنقل. تأكد من هالشي قبل يوم النقل بيومين على الأقل. في مناطق مثل التعاون والنهدة والمجاز، المباني عادةً تكون صارمة في هالموضوع.",
              },
              {
                title: "لو تنقل في الصيف، حدد موعد الصباح الباكر",
                desc: "الحرارة في الشارقة تأثر على سرعة العمل وراحة الفريق. نقل اثاث في الشارقة من الساعة 6 أو 7 صباحاً أفضل من الظهر بكثير. وبعض المواد مثل الشمع والبلاستيك تتأثر بالحرارة العالية.",
              },
              {
                title: "رتّب أغراض المطبخ أول شي",
                desc: "المطبخ عادةً أكثر مكان فيه قطع صغيرة وهشة. ابدأ بتجهيزه قبل باقي الغرف بيوم أو يومين عشان يوم النقل يكون كل شي جاهز.",
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
          STORAGE
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-y border-muted">
        <div className="max-w-6xl mx-auto">
          {/* 16:9 storage image */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden relative mb-10">
            <Image
              src="/shj/تخزين-اثاث-الشارقة-النمره-مستودع.jpg"
              alt="تخزين أثاث في الشارقة - مستودعات النمره الآمنة لتخزين الأثاث"
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
                تخزين اثاث في الشارقة
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                أحياناً ما يكون البيت الجديد جاهز بعد، أو تبي تسافر فترة وتحتاج
                مكان آمن لأثاثك. أو ممكن تكون تجدد شقتك وتحتاج تخزّن الأثاث
                مؤقتاً لحين انتهاء أعمال الصيانة أو التجديد.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                نوفر خدمة تخزين اثاث في مستودعات مكيّفة ومؤمنة بكاميرات مراقبة
                على مدار الساعة. المستودعات محمية من الرطوبة والغبار والحرارة،
                وهالشي ضروري في مناخ الشارقة خصوصاً في الصيف لأن درجات الحرارة
                ممكن توصل 50 مئوية.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                تقدر تخزّن لأيام أو أسابيع أو شهور حسب حاجتك. وما في حد أدنى
                لمدة التخزين. عملاء كثيرين يستخدمون هالخدمة وقت التنقل بين شقتين
                أو وقت تجديد البيت.
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
                  desc: "بكاميرات مراقبة 24/7 ومحمية من الرطوبة والحرارة والغبار.",
                },
                {
                  icon: CheckCircle,
                  title: "تغليف قبل التخزين",
                  desc: "كل القطع تُغلّف بمواد حماية وتُرتّب بطريقة تمنع أي ضغط أو تلف. ما نكدّس الأثاث فوق بعض.",
                },
                {
                  icon: UserCheck,
                  title: "زيارة المستودع متاحة",
                  desc: "تقدر تزور وتتأكد من حالة أثاثك في أي وقت خلال ساعات العمل.",
                },
                {
                  icon: Clock,
                  title: "بدون حد أدنى للمدة",
                  desc: "أيام أو أسابيع أو شهور — تحدد المدة اللي تناسبك. التخزين متاح للأثاث المنزلي والمكتبي والأجهزة الكهربائية.",
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
          FINAL CTA BLOCK (inline — before FAQs)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border-2 border-dashed border-primary/20 bg-primary/3 p-10 md:p-14 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
              ابدأ الآن
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              احصل على عرض سعر مجاني لنقل اثاثك في الشارقة
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              سواء تبي نقل عفش الشارقة لشقة جديدة، أو تنقل مكتبك لموقع ثاني، أو
              تخطط للانتقال من الشارقة لإمارة ثانية، أرسل لنا التفاصيل ونرد عليك
              بعرض سعر خلال دقائق. نقل عفش أو نقل اثاث، العملية واحدة عندنا
              والعناية نفسها.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button size="lg" className="h-13 px-8 font-bold gap-2" asChild>
                <a
                  href="https://wa.me/971541767605"
                  target="_blank"
                  rel="noopener noreferrer"
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
                <a href="tel:0541767605" dir="ltr">
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
        title="أسئلة شائعة حول نقل الاثاث في الشارقة"
        subtitle="إجابات واضحة على أكثر الأسئلة شيوعاً حول نقل الأثاث في الشارقة"
        faqs={sharjahFaqs}
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
