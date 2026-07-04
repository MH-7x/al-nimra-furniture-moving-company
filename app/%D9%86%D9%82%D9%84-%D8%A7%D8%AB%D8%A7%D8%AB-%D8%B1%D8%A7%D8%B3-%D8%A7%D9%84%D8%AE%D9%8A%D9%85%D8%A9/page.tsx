import MetadataTemplate from "@/lib/MetaDataTemplate";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  UserCheck,
  CheckCircle,
  ChevronLeft,
  AlertCircle,
  Star,
  Check,
  Award,
  Phone,
  MessageCircle,
  ArrowLeft,
  Info,
  MapPin,
  Clock,
  Home,
  Wrench,
  Package,
  Truck,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/utils/FaqsSection";
import CTASection from "@/components/utils/CTASection";
import QuoteSection from "@/components/utils/QuoteSection";
import { ReviewsSection } from "@/components/utils/ReviewsSection";
import { APP_URL, PHONE_LINK, WHATSAPP_LINK } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/utils/BreadcrumbSchema";

export const metadata = MetadataTemplate({
  meta: {
    title: "نقل اثاث راس الخيمة |  النمرة نقل اثاث - فك تغليف نقل وتركيب",
    desc: "شركة نقل اثاث راس الخيمة مع  النمرة نقل اثاث. فك وتغليف ونقل وتركيب بشاحنات مغلقة وفريق محترف. أسعار ثابتة بدون رسوم خفية. احصل على عرض سعر مجاني الحين!",
  },
  canonical: "/نقل-اثاث-راس-الخيمة",
  image: {
    path: "/rak/نقل-اثاث-راس-الخيمة-النمره-فك-تغليف-نقل.jpg",
    alt: "نقل اثاث راس الخيمة |  النمرة نقل اثاث - فك تغليف نقل وتركيب",
  },
});;

const rakFaqs = [
  {
    question: "كم تكلفة نقل اثاث في راس الخيمة؟",
    answer: (
      <div className="space-y-3">
        <p>
          تكلفة نقل اثاث راس الخيمة تبدأ من حوالي 500 درهم للاستوديو وتوصل 2500
          درهم وأكثر للفلل الكبيرة. السعر يعتمد على حجم الاثاث، الطابق، وضع
          المصعد، والمسافة بين البيتين. تواصل معنا ونعطيك سعر دقيق بعد ما نعرف
          تفاصيل بيتك.
        </p>
      </div>
    ),
  },
  {
    question: "شركة نقل اثاث راس الخيمة — كيف أختار الأفضل؟",
    answer: (
      <div className="space-y-3">
        <p>
          تأكد إن الشركة مرخصة، السعر يشمل الفك والتركيب والتغليف، الشاحنة مغلقة
          مو بيك أب مفتوح، فيه تأمين على الاثاث، والفريق موظف عند الشركة مو
          عمالة يومية. شركة تعطيك سعر رخيص بدون تغليف ولا تأمين ممكن تكلفك أكثر
          على المدى القصير لأن الضرر اللي يصير يكلف أضعاف.
        </p>
      </div>
    ),
  },
  {
    question: "هل السعر اللي تعطوني نهائي ولا تطلع رسوم خفية؟",
    answer: (
      <div className="space-y-3">
        <p>
          السعر نهائي وثابت. ما فيه رسم وقود ولا فك سراير ولا كراتين تطلع يوم
          النقل. الشي الوحيد اللي يغير السعر هو لو ضفت أغراض أو خدمات ما كانت
          بالعرض.
        </p>
      </div>
    ),
  },
  {
    question: "هل تقدمون خدمة فك وتركيب الاثاث؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. عندنا نجار محترف يتعامل مع كل أنواع الاثاث — غرف نوم، كباتات،
          طاولات، واثاث ايكيا. نفك كل قطعة ونرقم أجزاءها ونركبها في بيتك الجديد
          بنفس الشكل. الأجهزة الكهربائية مثل المكيفات والغسالات يتعامل معها فني
          مختص.
        </p>
      </div>
    ),
  },
  {
    question: "هل تنقلون من راس الخيمة الى دبي والشارقة؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. النقل بين راس الخيمة وباقي الإمارات من أكثر شغلنا. رسوم سالك
          والطريق محسوبة في العرض من البداية. دبي حوالي 100 كيلو والشارقة حوالي
          80 كيلو. أغلب النقلات تخلص في نفس اليوم.
        </p>
      </div>
    ),
  },
  {
    question: "قبل كم يوم لازم أحجز موعد النقل؟",
    answer: (
      <div className="space-y-3">
        <p>
          احجز قبل 3 لين 5 أيام عشان تضمن الفريق والموعد المناسب. لو ناقل آخر
          الشهر، احجز قبل أسبوعين لأن الطلب عالي. مواعيد الصيف تنحجز أسرع.
        </p>
      </div>
    ),
  },
  {
    question: "هل تنقلون في نفس اليوم؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم لو عندنا فريق متوفر. قول لنا موقعك وحجم أغراضك ونأكد لك خلال
          الساعة. النقلة الطارية تاخذ نفس التغليف والجودة.
        </p>
      </div>
    ),
  },
  {
    question: "كيف تحمون اثاثي من الحرارة والرطوبة في راس الخيمة؟",
    answer: (
      <div className="space-y-3">
        <p>
          راس الخيمة إمارة ساحلية والرطوبة عالية أغلب السنة. نستخدم شاحنات مغلقة
          دايماً — بدون استثناء. ما ننقل بالبيك أب المفتوح. الخشب نغلفه ببطانيات
          مبطنة، والإلكترونيات بإسفنج وفلين. ونبدأ بدري الصبح أو بعد العصر عشان
          نتفادى أعلى درجات الحرارة.
        </p>
      </div>
    ),
  },
  {
    question: "شو يصير لو انكسرت قطعة وقت النقل؟",
    answer: (
      <div className="space-y-3">
        <p>
          لو انكسرت أو تخربت قطعة، نكتبها بتقرير الشغل وانت حاضر قبل ما الفريق
          يمشي. كل نقلة فيها تأمين نقل أساسي يغطي الضرر. ولو عندك قطع غالية،
          نرتب تأمين إضافي قبل النقل.
        </p>
      </div>
    ),
  },
  {
    question: "هل لازم أسكر حساب SEWA قبل النقل؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. راس الخيمة تستخدم SEWA (هيئة كهرباء ومياه الشارقة ورأس الخيمة) مو
          FEWA ولا DEWA. سدد الفاتورة الأخيرة وخذ رسالة تخليص قبل ما تسلم البيت.
          تفعيل الحساب الجديد ياخذ يوم لين يومين عمل.
        </p>
      </div>
    ),
  },
  {
    question: "هل تقدرون تنقلون الاثاث من المناطق الجبلية في راس الخيمة؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. مناطق مثل دفتا وشعم والرمس شمال الإمارة فيها طرق جبلية ومنحدرات.
          السائقين عندنا عندهم خبرة في هالمسارات ونثبت الحمولة بشكل إضافي ونحسب
          وقت أطول في الجدول.
        </p>
      </div>
    ),
  },
  {
    question: "هل توفرون كراتين ومواد تغليف؟",
    answer: (
      <div className="space-y-3">
        <p>
          نعم. نجيب كل شي معنا: كراتين بجدار مزدوج، فيلم تمدد، بطانيات مبطنة،
          صناديق دواليب، واقيات حواف، وصناديق خشبية للقطع الحساسة. ما يلزمك
          تشتري ولا كرتون.
        </p>
      </div>
    ),
  },
];

export default function RasAlKhaimahMovingPage() {
  return (
    <main dir="rtl" className="text-foreground pb-20">
      <BreadcrumbSchema
        items={[
          { name: "الرئيسية", url: APP_URL },
          {
            name: "نقل اثاث راس الخيمة",
            url: `${APP_URL}/نقل-اثاث-راس-الخيمة`,
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
              نقل اثاث راس الخيمة
            </span>
          </nav>

          {/* Orange eyebrow + star rating */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-primary font-bold text-xs uppercase tracking-widest border-s-2 border-primary ps-3">
              النمرة نقل اثاث · رأس الخيمة
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
              <span className="relative z-10 text-primary">راس الخيمة</span>
              <span
                aria-hidden
                className="absolute bottom-1 start-0 end-0 h-3 bg-primary/10 -skew-x-3 rounded-sm z-0"
              />
            </span>{" "}
            <span className="text-2xl block mt-5">
              – فك وتغليف ونقل وتركيب من النمرة نقل اثاث
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            <strong>نقل اثاث راس الخيمة</strong> مع النمرة نقل اثاث يعني فريق
            يعرف مناطق الإمارة من النخيل لين شعم. نحن شركة نقل اثاث راس الخيمة
            نشتغل بفريق ثابت وشاحنات مغلقة ومواد تغليف نجيبها معنا. ما نطلب منك
            تشتري كرتون واحد. كل شي من الفك والتغليف لين التركيب في بيتك الجديد
            على حسابنا.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Button size="lg" className="h-12 px-7 font-bold gap-2" asChild>
              <a
                href={WHATSAPP_LINK}
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
              <a href={PHONE_LINK} dir="ltr" id="cta-phone-hero">
                <Phone className="w-4 h-4" />
                0541767605
              </a>
            </Button>
          </div>

          {/* 5 promise pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              "تأمين شامل مجاناً",
              "بدون عربون مسبق",
              "معاينة مجانية بالفيديو",
              "بدون رسوم خفية",
              "شاحنات مغلقة ومكيفة",
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
              src="/rak/نقل-اثاث-راس-الخيمة-النمره-فك-تغليف-نقل.jpg"
              alt=" النمرة نقل اثاث يحملون اثاث مغلف في شاحنة مغلقة في منطقة سكنية في راس الخيمة"
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
              { num: "+10", label: "سنوات خبرة في راس الخيمة" },
              { num: "+5,000", label: "نقلة ناجحة بالإمارات" },
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
            لو تنقل داخل راس الخيمة — من شقة في النخيل لفيلا في الحمرا أو من
            تاون هاوس في الجزيرة الحمراء لشقة في جزيرة المرجان — أو تنقل من راس
            الخيمة لدبي والشارقة، نغطي كل هالمسارات. نقل اثاث في راس الخيمة شغل
            يومي عندنا مو موسمي. عقود إيجار تتجدد، عائلات تكبر وتبا بيت أوسع،
            وموظفين ينتقلون من وإلى المنطقة الحرة. كل هالحركة يعني إن فريقنا
            دايم على الأرض في راس الخيمة.
          </p>
          <div className="bg-primary/5 rounded-2xl border border-primary/10 p-5 flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm font-semibold text-secondary-foreground">
              تبا تعرف سعر نقلتك؟ تواصل معنا وراح يوصلك عرض سعر واضح خلال
              الساعة.
            </span>
            <Button size="sm" asChild>
              <a href={PHONE_LINK} dir="ltr">
                0541767605
              </a>
            </Button>
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
              لماذا تختار النمرة نقل اثاث لنقل اثاث في راس الخيمة؟
            </h2>
            <p className="text-white/70 max-w-4xl text-sm md:text-base leading-relaxed">
              في راس الخيمة شركات نقل كثيرة. بعضها يشتغل بعمالة يومية ويختفي بعد
              النقل لو صار أي مشكلة. وبعضها ينسخ محتوى صفحة أبوظبي ويحطه على
              صفحة راس الخيمة بدون ما يعرف شي عن الإمارة. الفرق بيننا واضح من
              أول مكالمة — نحن فعلاً نشتغل في راس الخيمة ونعرف شوارعها وبناياتها
              ومجتمعاتها المسوّرة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: Award,
                title: "شركة مرخصة بخبرة فعلية في إمارة رأس الخيمة",
                desc: " النمرة نقل اثاث شركة نقل اثاث راس الخيمة مرخصة ومسجلة. خبرتنا في الإمارة تعني إننا نعرف إن قرية الحمرا تطلب تصريح دخول مسبق للشاحنات، وإن جزيرة المرجان فيها مسار واحد للدخول والخروج فلازم ننسق مع أمن الجزيرة، وإن بنايات النخيل القديمة شوارعها ضيقة تحتاج شاحنة 3 طن. هالمعرفة توفر عليك وقت ومشاكل يوم النقل.",
              },
              {
                icon: UserCheck,
                title: "فريق عمل مدرب من  النمرة نقل اثاث — مو عمالة يومية",
                desc: "الفريق اللي يجيك موظف عندنا ومدرب على شغل النقل. مو عمالة يومية نجمعها من الشارع صبح النقل. نفس الشباب اللي يسوون المعاينة هم اللي ينقلون أغراضك. يعرفون كيف يتعاملون مع الخشب والزجاج والأجهزة، ويعرفون كيف يحملون من الدرج لو ما فيه مصعد. والأهم إنهم يتعاملون معك باحترام — يدخلون بيتك بلباس نظيف ويسألون قبل ما يحركون أي شي.",
              },
              {
                icon: CheckCircle,
                title: "أسعار واضحة بدون رسوم خفية",
                desc: "أسعار نقل اثاث راس الخيمة عندنا واضحة من البداية. الرقم اللي نقوله لك في العرض هو نفسه اللي تدفعه يوم النقل بالضبط. ما فيه رسم وقود يطلع فجأة، ولا فك سراير بفلوس زيادة، ولا كراتين محسوبة عليك. الشي الوحيد اللي يغير السعر هو لو ضفت أغراض أو خدمات ما كانت في العرض الأول — وحتى في هالحالة نقول لك السعر الإضافي قبل ما نبدأ.",
              },
              {
                icon: Shield,
                title: "تأمين شامل على الاثاث أثناء النقل",
                desc: "كل نقلة عندنا فيها تأمين نقل أساسي يغطي الأضرار اللي ممكن تصير وقت الفك والتغليف والحمل والنقل. يعني لو صار أي ضرر، نكتبه بتقرير الشغل وانت حاضر قبل ما الفريق يطلع. ما ننتظر أيام ولا نتهرب. ولو عندك قطع غالية مثل ثريات أو رخام أو أجهزة ثمينة، نرتب لك تأمين إضافي قبل النقل يغطي القيمة الكاملة.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 p-8 rounded-3xl flex flex-col gap-4"
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
          <div className="mb-14">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              تغطية الخدمات
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              خدمات نقل اثاث اللي نقدمها في راس الخيمة
            </h2>
            <p className="text-muted-foreground max-w-4xl text-sm md:text-base leading-relaxed">
              سواء تسميه نقل اثاث أو نقل عفش راس الخيمة، عندنا فريق ومعدات لكل
              نوع نقل. من استوديو صغير لين فيلا في الحمرا، ومن شقة برج في جزيرة
              المرجان لين مكتب في المنطقة الحرة RAKEZ. كل نوع نقل له متطلبات
              مختلفة، عشان كذا نسوي معاينة قبل كل نقلة.
            </p>
          </div>

          <div className="space-y-6">
            {/* Service 1 — شقق | image right */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث الشقق والاستوديوهات في راس الخيمة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  نقل اثاث شقق راس الخيمة هو أكثر شغلنا. الشقق في النخيل والجويس
                  والمعيرد عادة تخلص في نفس اليوم. نحجز مصعد الخدمة لو البرج
                  يطلبه. ولو البناية قديمة في النخيل وما فيها مصعد، الفريق يحمل
                  بالدرج بحذر وكل قطعة تكون مغلفة قبل ما تتحرك.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  الأبراج في جزيرة المرجان والجزيرة الحمراء لها خصوصية — بعضها
                  يطلب حجز مصعد قبل 48 ساعة وتنسيق مع أمن المبنى. نتكفل بكل
                  هالترتيبات عنك.
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
                  src="/rak/نقل-اثاث-شقق-راس-الخيمة-النمرة.jpg"
                  alt="نقل أثاث الشقق في راس الخيمة - فريق  النمرة "
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 2 — فلل | image left */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="aspect-[4/3] md:aspect-auto relative min-h-[220px]">
                <Image
                  src="/rak/نقل-اثاث-فلل-راس-الخيمة-النمرة.jpg"
                  alt="نقل أثاث الفلل في راس الخيمة - فريق  النمرة "
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث الفلل في راس الخيمة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  نقل اثاث فلل راس الخيمة يحتاج فريق أكبر ووقت أطول. فلل الحمرا
                  والجزيرة الحمراء وخور خوير والظيث فيها أثاث ثقيل ودواليب مدمجة
                  وغرف كثيرة. نرسل فريق مناسب ونخطط ليوم كامل أو أكثر على حسب
                  حجم الفيلا.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نفك السراير والكباتات المدمجة ونرقم القطع عشان نركبها صح في
                  البيت الجديد. ونفرش الأرضيات في البيتين عشان نحمي البلاط
                  والرخام من خدوش الحمل. الفلل في المجتمعات المسوّرة مثل قرية
                  الحمرا وخور خوير تحتاج تصريح دخول مسبق للشاحنات — نرتب هالشي
                  من قبل عشان الفريق ما يقف عند البوابة.
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
                  نقل اثاث المكاتب والشركات في راس الخيمة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  نقل اثاث مكاتب راس الخيمة نسويه في الويك إند عادة عشان دوامكم
                  ما يتوقف. نتعامل مع الشاشات والكمبيوترات والملفات بترتيب
                  وتسمية واضحة. كل صندوق نكتب عليه محتواه والغرفة اللي يروح لها.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  السيرفرات والمعدات الحساسة نغلفها بإسفنج مضاد للكهرباء
                  الساكنة. ولو المكتب في المنطقة الحرة RAKEZ، نخلص تصريح الدخول
                  والخروج ورسالة تخويل المركبة قبل الموعد عشان الشاحنة تدخل
                  البوابة بدون تعطيل.
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
                  src="/rak/نقل-اثاث-مكاتب-شركات-راس-الخيمة-النمرة.jpg"
                  alt="نقل أثاث المكاتب والشركات في راس الخيمة -  النمرة نقل اثاث "
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 4 — التغليف الاحترافي */}
            <article className="rounded-3xl overflow-hidden border border-muted p-8 md:p-10 bg-slate-50">
              <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                خدمة التغليف الاحترافي
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                شركة تغليف ونقل اثاث راس الخيمة تبدأ من مواد التغليف. نجيب كل شي
                معنا: بطانيات مبطنة للخشب، فيلم تمدد للكنب والمراتب، كراتين جدار
                مزدوج للأشياء الثقيلة، وصناديق دواليب للملابس المعلقة. القطع
                الحساسة مثل الزجاج والرخام لها صناديق خشبية مخصصة.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                ما نلف كل شي بنفس الطريقة. كل قطعة لها مادة تناسبها. الشاشات
                نحيطها بإسفنج من كل جهة وبعدين ندخلها في كرتون محكم. الثريات
                نفكها ونحط كل قطعة زجاج بورق فقاعي لحالها. طاولات الزجاج ننزل
                الزجاج ونلفه ونحطه بصندوق خشبي واقف مو مستلقي.
              </p>
              <Link
                href="/خدمات/تغليف-اثاث-في-دبي"
                className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline"
              >
                تصفح خدمة تغليف الاثاث <ArrowLeft className="w-4 h-4" />
              </Link>
            </article>

            {/* Service 5 — فك وتركيب | image left */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="aspect-[4/3] md:aspect-auto relative min-h-[220px]">
                <Image
                  src="/rak/فك-تغليف-تركيب-اثاث-راس-الخيمة-النمرة.jpg"
                  alt="نجار شركة  النمرة نقل اثاث  يفك الاثاث في راس الخيمة"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  خدمة فك وتركيب الاثاث
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  فك وتركيب اثاث راس الخيمة يسويه نجار محترف من فريقنا. يتعامل
                  مع كل أنواع الاثاث — من غرف النوم والكباتات لين اثاث ايكيا
                  اللي يحتاج دقة في التركيب. نستخدم نظام ترقيم: كل قطعة تتفكك
                  ناخذ لها رقم عشان نركبها بنفس الترتيب. البراغي والمفصلات نحطها
                  في أكياس مرقمة عشان ما نضيع شي.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  الكباتات المدمجة تحتاج عناية خاصة لأنها مثبتة في الحيطان.
                  النجار يعرف يفكها بدون ما يخرب الجدار، ويركبها في البيت الجديد
                  على حسب مقاسات الغرفة.
                </p>
                <Link
                  href="/خدمات/فك-وتركيب-اثاث-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تصفح خدمة فك وتركيب الاثاث <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* Service 6 — تخزين الاثاث */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  تخزين الاثاث في مستودعات آمنة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  لو بيتك الجديد ما جهز أو مسافر لفترة، نوفر تخزين اثاث راس
                  الخيمة في مستودعات مكيفة ونظيفة. التكييف مهم في راس الخيمة لأن
                  الرطوبة الساحلية تأثر على الخشب والأقمشة لو تخزنت بدون تحكم
                  بالحرارة. نسوي جرد لكل قطعة وننظمها على باليتات بعيد عن الأرض.
                  عندنا خيارات تخزين قصير وطويل المدى.
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
                  src="/rak/تخزين-اثاث-راس-الخيمة-النمرة-مستودع.jpg"
                  alt="مستودع تخزين أثاث  النمرة نقل اثاث  في راس الخيمة"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 7 — نفس اليوم */}
            <article className="rounded-3xl overflow-hidden border border-muted p-8 md:p-10 bg-slate-50">
              <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                خدمة نقل اثاث في نفس اليوم
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                وضعك طاري وتبا تنقل اليوم؟ اتصل فينا وقول لنا موقعك وحجم أغراضك.
                لو عندنا فريق فاضي، نأكد لك خلال الساعة. نقل اثاث نفس اليوم راس
                الخيمة ممكن لو النقلة صغيرة أو متوسطة والمسافة قصيرة. النقلة
                الطارية تحتاج ترتيب أسرع بس تاخذ نفس الجودة ونفس التغليف.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 border-y border-muted bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              اسعار النقل 2026
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              أسعار نقل اثاث في راس الخيمة 2026
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              كثير من الناس يسألون عن أسعار نقل اثاث راس الخيمة قبل ما يتواصلون
              معنا. وهذا شي طبيعي — تبا تعرف المبلغ التقريبي قبل ما تلتزم. أسعار
              نقل اثاث في راس الخيمة من أوفر الأسعار في الإمارات. الاستوديو يبدأ
              من حوالي 500 درهم، والشقة غرفتين عادة بين 1,000 و 1,800 درهم،
              والفيلا على حسب حجمها وعدد غرفها.
            </p>
          </div>

          {/* Grid: Table on left, Callout Card on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            {/* Table */}
            <div className="lg:col-span-8 space-y-4">
              <div className="overflow-x-auto rounded-2xl border border-muted bg-white shadow-sm">
                <table className="w-full text-start border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-muted bg-slate-50/80 text-secondary-foreground font-semibold">
                      <th className="py-3.5 px-5">نوع السكن</th>
                      <th className="py-3.5 px-5">عدد الشاحنات</th>
                      <th className="py-3.5 px-5">عدد العمال</th>
                      <th className="py-3.5 px-5">السعر التقريبي (درهم)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted text-muted-foreground">
                    {[
                      {
                        type: "استوديو",
                        trucks: "1",
                        crew: "3-4",
                        price: "من 500",
                      },
                      {
                        type: "غرفة وصالة",
                        trucks: "1",
                        crew: "4",
                        price: "من 800",
                      },
                      {
                        type: "غرفتين وصالة",
                        trucks: "1-2",
                        crew: "4-5",
                        price: "من 1,000",
                      },
                      {
                        type: "3 غرف وصالة",
                        trucks: "2",
                        crew: "5-7",
                        price: "من 1,500",
                      },
                      {
                        type: "فيلا غرفتين",
                        trucks: "2",
                        crew: "5-7",
                        price: "من 1,800",
                      },
                      {
                        type: "فيلا 3 غرف",
                        trucks: "2-3",
                        crew: "7-9",
                        price: "من 2,500",
                      },
                      {
                        type: "فيلا كبيرة 4+ غرف",
                        trucks: "3+",
                        crew: "8-12",
                        price: "من 3,500 وزيادة",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-3 px-5 font-medium text-secondary-foreground">
                          {row.type}
                        </td>
                        <td className="py-3 px-5">{row.trucks}</td>
                        <td className="py-3 px-5">{row.crew}</td>
                        <td className="py-3 px-5 font-semibold text-primary">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground/70 px-2">
                *السعر النهائي يعتمد على كمية الاثاث والطابق ووضع المصعد
                والمسافة. تواصل معنا وعطنا تفاصيل بيتك ونرجعك بسعر دقيق خلال
                الساعة. المعاينة مجانية سواء بالزيارة أو بفيديو كول.
              </p>
            </div>

            {/* Quick Quote Callout */}
            <div className="lg:col-span-4 bg-foreground text-white rounded-2xl p-6 shadow-md ">
              <div className="relative z-10">
                <h3 className="font-bold text-white text-lg mb-4">
                  عرض السعر يشمل:
                </h3>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 opacity-90" />
                    <span>فك وتركيب السراير والدواليب</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 opacity-90" />
                    <span>تغليف كامل للقطع المنجدة والخشبية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 opacity-90" />
                    <span>فرش أرضيات البيتين</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 opacity-90" />
                    <span>صناديق دواليب للملابس المعلقة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 opacity-90" />
                    <span>تنسيق حجز مصعد الخدمة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 opacity-90" />
                    <span>تأمين نقل أساسي</span>
                  </li>
                </ul>
                <Button
                  variant="secondary"
                  className="w-full font-bold h-11"
                  asChild
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    أرسل تفاصيل بيتك للتسعير
                  </a>
                </Button>
                <p className="text-white/70 text-xs mt-4">
                  البيانو، طاولات البلياردو، والقطع الخاصة ما تدخل في السعر
                  العادي لأنها تحتاج معاملة خاصة ومعدات مختلفة. لو عندك شي من
                  هذا، قول لنا من البداية ونعطيك سعره لحاله في العرض.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Factors Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div className="bg-white p-6 rounded-2xl border border-muted shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Info className="w-4 h-4" />
                </span>
                <h3 className="font-bold text-base text-secondary-foreground">
                  شو اللي يأثر على سعر نقل الاثاث في راس الخيمة؟
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                السعر ما ياي من فراغ. في أشياء ترفعه شوي وأشياء تنزله: الطابق
                العالي بدون مصعد يزيد السعر لأن الفريق يحتاج وقت وجهد أكثر. كمية
                الاثاث تحدد عدد الشاحنات والعمال. المسافة بين البيت القديم
                والجديد تأثر — النقل داخل راس الخيمة أوفر من النقل لدبي. والقطع
                اللي تحتاج صندوق خشبي مثل الرخام والثريات لها تكلفة إضافية. وقت
                النقل يأثر بعد. آخر أسبوع من الشهر هو الأزحم لأن عقود الإيجار
                تنتهي نهاية الشهر وكل الناس تنقل في نفس الفترة. والصيف طلبه عالي
                بسبب تجديد العقود وحركة الموظفين. لو تقدر تنقل وسط الشهر في يوم
                عمل عادي — غالباً تطلع بسعر أقل وفريق يوصلك بدري.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-muted shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <AlertCircle className="w-4 h-4" />
                </span>
                <h3 className="font-bold text-base text-secondary-foreground">
                  ليش أسعار نقل اثاث راس الخيمة أقل من دبي؟
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                نقل اثاث راس الخيمة رخيص مقارنة بدبي بفرق حوالي 20 لين 30 بالمية
                للنقلة المعادلة. السبب بسيط: تكاليف التشغيل في راس الخيمة أقل
                بكثير. إيجارات المستودعات والمواقف أرخص من دبي، والتصاريح
                البلدية أقل تعقيد ورسومها أخف. الازدحام المروري أقل فوقت النقل
                أقصر. كل هالتوفير ينعكس على سعر النقلة. الجودة نفسها — نفس
                الفريق ونفس المعدات ونفس مواد التغليف — بس السعر يعكس فرق تكاليف
                الإمارة. هالشي يخلي ناس كثيرة من دبي ينقلون سكنهم لراس الخيمة
                عشان يوفرون في الإيجار والمعيشة. المسافة للشغل بدبي ما تاخذ أكثر
                من ساعة وربع عن طريق طريق الإمارات.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS (كيف يتم نقل اثاث في راس الخيمة خطوة بخطوة؟)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              خطوات النقل
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              كيف يتم نقل اثاث في راس الخيمة خطوة بخطوة؟
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              أكثر شي يقلق الناس وقت النقل هو إنهم ما يعرفون شو بيصير بالضبط.
              متى يجي الفريق؟ كم ياخذون وقت؟ مين يفك ومين يركب؟ عشان ما يكون شي
              غامض، هذي الخطوات بالتفصيل:
            </p>
          </div>

          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-[45px] end-0 start-0 h-0.5 bg-muted z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "التواصل والمعاينة المجانية",
                  desc: "اتصل فينا أو ارسل على الواتساب. نسوي معاينة مجانية — إما بزيارة سريعة أو بفيديو كول. نشوف كمية الاثاث، نوعه، وضع الشارع والمواقف، وهل فيه مصعد ولا لا. لو بيتك في مجتمع مسوّر مثل الحمرا أو خور خوير أو جزيرة المرجان، نسأل عن متطلبات الدخول من البداية عشان ما يصير تعطيل يوم النقل.",
                  icon: Phone,
                },
                {
                  step: "02",
                  title: "عرض السعر والتأكيد",
                  desc: "بعد المعاينة نرسل لك عرض سعر ثابت وواضح خلال ساعة على الواتساب. العرض يوضح كل شي: عدد العمال، عدد الشاحنات، الخدمات المشمولة، والسعر النهائي. لو وافقت، نحجز لك الموعد ونأكد الليلة اللي قبل يوم النقل عشان تكون متأكد إن كل شي جاهز.",
                  icon: MessageCircle,
                },
                {
                  step: "03",
                  title: "التغليف والفك في يوم النقل",
                  desc: "الفريق يوصل في الوقت المتفق عليه — في راس الخيمة ننصح بالبداية قبل 9 الصبح خصوصاً في الصيف عشان الحرارة. يبدأون بحماية الأرضيات والممرات أول شي. بعدين يغلفون ويفكون غرفة بغرفة. كل قطعة تتفكك ترقم وبراغيها تنحط في كيس مرقم.",
                  icon: Package,
                },
                {
                  step: "04",
                  title: "التحميل والنقل بشاحنات مغلقة",
                  desc: "بعد التغليف والفك، يحملون الاثاث في شاحنات مغلقة. كل قطعة تتثبت بأحزمة عشان ما تتحرك وقت السير. الشاحنة المغلقة ضرورية في راس الخيمة — الرطوبة الساحلية والحرارة ممكن تأثر على الخشب والأقمشة حتى لو المسافة قصيرة. ما نستخدم بيك أب مفتوح لنقل الاثاث أبداً.",
                  icon: Truck,
                },
                {
                  step: "05",
                  title: "التفريغ والتركيب والترتيب",
                  desc: "في البيت الجديد، الفريق ينزل الاثاث ويركبه في أماكنه. النجار يجمع كل شي تفكك. بعد ما يخلصون، تمشي معهم وتتأكد إن كل شي تمام. لو صار أي ضرر، يكتبونه بالتقرير وانت حاضر. الفريق ما يمشي إلا بعد ما توقّع على تقرير الاستلام.",
                  icon: Home,
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white border-[3px] border-primary rounded-full flex items-center justify-center mb-5 shadow-sm">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-base mb-3 text-secondary-foreground">
                    <span className="text-primary me-1 block text-sm mb-1">
                      الخطوة {item.step}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PACKING MATERIALS (مواد التغليف الاحترافية اللي نستخدمها)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              جودة التغليف
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              مواد التغليف الاحترافية اللي نستخدمها
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              تغليف الاثاث الصح يبدأ من اختيار المادة الصح لكل قطعة. أغلب الضرر
              اللي يصير وقت نقل الاثاث يكون بسبب تغليف ضعيف أو مواد رخيصة أو
              تغليف كل شي بنفس الطريقة. عندنا نوع تغليف مختلف لكل نوع قطعة:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "بطانيات مبطنة",
                desc: "نلف فيها الاثاث الخشبي والأجهزة الكهربائية. تمنع الخدوش وتحمي الأسطح.",
              },
              {
                title: "فيلم تمدد",
                desc: "نلف فيه الكنب والمراتب. يحافظ على القماش نظيف ويمنع الغبار والرطوبة. مهم في راس الخيمة لأن الرطوبة عالية.",
              },
              {
                title: "كراتين بجدار مزدوج",
                desc: "للأشياء الثقيلة اللي تحتاج حماية أكثر. أقوى من الكراتين العادية.",
              },
              {
                title: "صناديق دواليب",
                desc: "صناديق طويلة فيها عمود. نعلق عليها ملابسك المعلقة مباشرة بدون ما تتكسر أو تتجعد.",
              },
              {
                title: "واقيات حواف",
                desc: "كرتون مموج لحماية زوايا الاثاث وإطارات الأبواب وقت الحمل.",
              },
              {
                title: "صناديق خشبية مخصصة",
                desc: "للقطع اللي تحتاج حماية إضافية: الرخام، الثريات، اللوحات الكبيرة.",
              },
              {
                title: "إسفنج وفلين",
                desc: "للشاشات والإلكترونيات. نحيطها من كل جهة عشان تتحمل أي اهتزاز.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-muted shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 mb-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-base">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm font-semibold text-secondary-foreground">
              كل هالمواد نجيبها معنا يوم النقل. ما يلزمك تشتري ولا تحضر شي.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AREAS COVERED
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              تغطية واسعة
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              المناطق اللي نغطيها في راس الخيمة
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              نقل اثاث في راس الخيمة يختلف من منطقة لمنطقة. بعض المناطق فيها
              مجتمعات مسوّرة تحتاج تصريح دخول، وبعضها شوارعها ضيقة في البلدة
              القديمة، وبعضها في مناطق جبلية شمال الإمارة. معرفتنا بكل منطقة
              تخلينا نجهز الشاحنة والفريق الصح من البداية. هذا جدول بأبرز
              المناطق:
            </p>
          </div>

          <div className="overflow-x-auto border border-muted rounded-2xl shadow-sm">
            <table className="w-full text-start text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-muted">
                  <th className="py-3 px-5 font-semibold text-secondary-foreground">
                    المنطقة
                  </th>
                  <th className="py-3 px-5 font-semibold text-secondary-foreground">
                    نوع السكن الغالب
                  </th>
                  <th className="py-3 px-5 font-semibold text-secondary-foreground">
                    ملاحظة نقل مهمة
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted text-muted-foreground">
                {[
                  {
                    area: "النخيل",
                    type: "شقق وأبراج قديمة",
                    note: "شوارع ضيقة في البلدة القديمة — شاحنة 3 طن مناسبة",
                  },
                  {
                    area: "الحمرا / قرية الحمرا",
                    type: "فلل فاخرة",
                    note: "مجتمع مسوّر — تصريح دخول مسبق مطلوب",
                  },
                  {
                    area: "الجزيرة الحمراء",
                    type: "فلل وتاون هاوس",
                    note: "منطقة سياحية، حجز مصعد والبوابة ضروري",
                  },
                  {
                    area: "جزيرة المرجان",
                    type: "شقق وفنادق",
                    note: "جزيرة اصطناعية — مسار واحد للدخول/الخروج",
                  },
                  {
                    area: "الظيث الشمالي",
                    type: "فلل سكنية",
                    note: "منطقة عائلية، شوارع واسعة",
                  },
                  {
                    area: "الظيث الجنوبي",
                    type: "فلل",
                    note: "وصول سهل للشاحنات الكبيرة",
                  },
                  {
                    area: "الجويس",
                    type: "شقق ومباني",
                    note: "قريبة من المنطقة الصناعية",
                  },
                  {
                    area: "المعيرد",
                    type: "شقق وفلل",
                    note: "منطقة وسطية، وصول سريع",
                  },
                  {
                    area: "السير",
                    type: "شقق",
                    note: "قريبة من السوق القديم",
                  },
                  {
                    area: "الخزام",
                    type: "شقق",
                    note: "منطقة سكنية مزدحمة",
                  },
                  {
                    area: "الرمس",
                    type: "فلل وبيوت",
                    note: "شمال الإمارة — مسافة إضافية",
                  },
                  {
                    area: "شعم",
                    type: "بيوت",
                    note: "أقصى الشمال — تحتاج تخطيط مسبق",
                  },
                  {
                    area: "دفتا",
                    type: "فلل وبيوت",
                    note: "منطقة جبلية — طرق ضيقة ومنحدرة",
                  },
                  {
                    area: "خور خوير",
                    type: "فلل فاخرة",
                    note: "مجتمع مسوّر، حجز مسبق",
                  },
                  {
                    area: "الحمرانية",
                    type: "بيوت وفلل",
                    note: "منطقة واسعة، وصول مريح",
                  },
                  {
                    area: "المنطقة الحرة RAKEZ",
                    type: "مكاتب ومستودعات",
                    note: "تصريح المنطقة الحرة ورخصة الشاحنة مطلوبين",
                  },
                  {
                    area: "ميناء صقر",
                    type: "مستودعات وتجاري",
                    note: "منطقة صناعية — شاحنات كبيرة مسموحة",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-5 font-medium text-secondary-foreground">
                      {row.area}
                    </td>
                    <td className="py-3 px-5">{row.type}</td>
                    <td className="py-3 px-5">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            لو منطقتك مو في الجدول، أكيد نوصلها. نغطي كل مناطق رأس الخيمة من شعم
            شمالاً لحد الحمرانية جنوباً. سواء تنقل من شقة لشقة في نفس المنطقة أو
            من طرف الإمارة للطرف الثاني، نعرف الطرق ونعرف وين المشاكل وكيف
            نتفاداها.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTER-EMIRATE MOVING
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              نقل اثاث بين راس الخيمة والإمارات الأخرى
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              كثير من عملائنا ينقلون بين راس الخيمة وإمارة ثانية — خصوصاً دبي
              والشارقة. النقل بين الإمارات له تفاصيل في الطرق والرسوم والتوقيت
              نرتبها لك من البداية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-muted shadow-sm">
              <h3 className="font-bold text-lg text-secondary-foreground mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                الى دبي
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                نقل اثاث من راس الخيمة الى{" "}
                <Link href="/" className="text-primary hover:underline">
                  دبي
                </Link>{" "}
                من أكثر الطلبات عندنا. الطريق يكون عن طريق طريق الإمارات (E311)
                أو شارع الشيخ محمد بن زايد (E611). المسافة حوالي 100 كيلو وتاخذ
                ساعة لين ساعة ونص بالشاحنة. رسوم سالك محسوبة في العرض من البداية
                — عندك 2 لين 3 بوابات سالك في الطريق. في أوقات الذروة فيه قيود
                على الشاحنات الثقيلة على بعض الطرق، فنرتب وقت الخروج عشان نتفادى
                التأخير. أغلب النقلات تخلص في نفس اليوم للشقق.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-muted shadow-sm">
              <h3 className="font-bold text-lg text-secondary-foreground mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                الى الشارقة وعجمان
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                المسافة أقصر — حوالي 80 كيلو إلى{" "}
                <Link
                  href="/نقل-أثاث-الشارقة"
                  className="text-primary hover:underline"
                >
                  الشارقة
                </Link>{" "}
                و{" "}
                <Link
                  href="/نقل-اثاث-عجمان"
                  className="text-primary hover:underline"
                >
                  عجمان
                </Link>{" "}
                — والسعر أوفر. عادة يخلص في نفس اليوم بدون مشاكل. الطريق عن طريق
                E311. نقل عادي وسلس.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-muted shadow-sm">
              <h3 className="font-bold text-lg text-secondary-foreground mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                الى أبوظبي والعين والفجيرة
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <Link
                  href="/نقل-اثاث-ابوظبي"
                  className="text-primary hover:underline"
                >
                  أبوظبي
                </Link>{" "}
                حوالي 220 كيلو وممكن يحتاج يومين لو الاثاث كثير.{" "}
                <Link
                  href="/نقل-اثاث-العين"
                  className="text-primary hover:underline"
                >
                  العين
                </Link>{" "}
                حوالي 200 كيلو عن طريق E611. الفجيرة هي أقرب إمارة لراس الخيمة —
                حوالي 45 كيلو بس، فالنقل سريع ويخلص في ساعات. كل رسوم الطريق
                والسالك محسوبة في السعر الثابت. نفس الفريق ونفس التغليف ونفس
                الحرص مهما كانت المسافة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CHALLENGES
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              تحديات نقل الاثاث في راس الخيمة وكيف نتغلب عليها
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              راس الخيمة إمارة فيها تنوع جغرافي ما تلقاه في باقي الإمارات — ساحل
              وجبال وبلدة قديمة ومناطق حرة ومجتمعات سياحية. كل هالتنوع يخلق
              تحديات مختلفة وقت النقل. بعد سنين من الشغل في راس الخيمة، تعلمنا
              نتعامل مع كل وحدة بطريقة عملية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "حرارة ورطوبة ساحل راس الخيمة",
                desc: "راس الخيمة على الخليج العربي. الرطوبة عالية أغلب السنة خصوصاً في الصيف. الخشب يتمدد بالرطوبة، والإلكترونيات ممكن يتكثف عليها ماي من الداخل لو انتقلت من مكان مكيف لحرارة الشارع. بيك أب مفتوح في هالجو ممكن يخرب أغراضك حتى لو المسافة 5 دقائق. عشان كذا نستخدم شاحنات مغلقة دايماً — بدون استثناء. نبدأ التحميل قبل 9 الصبح أو بعد 4 العصر. قانون العمل الإماراتي يمنع الشغل تحت الشمس بين 12:30 و 3 العصر في الصيف (يونيو لسبتمبر)، فنرتب الجدول حول هالوقت.",
              },
              {
                title: "الشوارع الضيقة في البلدة القديمة",
                desc: "مناطق مثل النخيل القديمة والسير فيها شوارع داخلية ضيقة ما تدخلها الشاحنة الكبيرة. نستخدم شاحنات 3 طن تدخل هالشوارع وتوصل لباب البناية. ولو الشارع ضيق أكثر، نركن الشاحنة في أقرب مكان ونسوي نقل مكوكي. كل قطعة تكون مغلفة بالكامل قبل ما تطلع من الباب.",
              },
              {
                title: "الفلل في المجتمعات المسوّرة",
                desc: "راس الخيمة فيها مجتمعات سكنية مسوّرة كثيرة — قرية الحمرا، خور خوير، جزيرة المرجان. كل وحدة عندها قوانين دخول خاصة: حجز مسبق مع إدارة المجتمع، تصريح شاحنة، حجز منطقة التحميل، وأحياناً أوقات محددة مسموح فيها النقل. نتكفل بكل هالتنسيقات قبل يوم النقل عشان الفريق يدخل ويشتغل بدون تعطيل.",
              },
              {
                title: "نقل المكاتب في المنطقة الحرة RAKEZ",
                desc: "المنطقة الحرة RAKEZ عندها إجراءات بوابة دخول محددة. تحتاج الرخصة التجارية ورسالة تخويل المركبة قبل الموعد. نجهز كل الأوراق — ما تحتاج تتعامل مع البوابة بنفسك. ننصح بالنقل في الويك إند عشان دوام الشركة ما يتأثر.",
              },
              {
                title: "المناطق الجبلية شمال راس الخيمة",
                desc: "شمال راس الخيمة فيه مناطق جبلية مثل دفتا وشعم والرمس. الطرق هناك أضيق وفيها منحدرات. السائقين عندنا عندهم خبرة في هالطرق ويعرفون يثبتون الحمولة بشكل إضافي للمنعطفات والمنحدرات. نحسب وقت إضافي لهالمناطق في الجدول عشان ما نستعجل.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-muted shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 mb-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-base">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MOVING GUIDE (دليل الانتقال)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              دليل الانتقال في راس الخيمة — قبل وبعد النقل
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              هذا شي ما تلقاه عند أغلب شركات نقل اثاث راس الخيمة: قائمة عملية
              تساعدك تجهز لنقلتك بدون ما تنسى شي مهم. نقل الاثاث مو بس شيل وحط —
              فيه أوراق وحسابات وتنسيق لازم تسويه.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-muted shadow-sm">
              <h3 className="font-bold text-lg text-secondary-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                قبل النقل بأسبوعين
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>احجز شركة نقل اثاث راس الخيمة وأكد الموعد</li>
                <li>
                  بلّغ صاحب البيت واحصل على شهادة عدم ممانعة (NOC) لو يطلبها
                </li>
                <li>
                  ابدأ تحزم الأغراض الشخصية اللي ما تستخدمها — كتب، ملابس
                  موسمية، تحف
                </li>
                <li>
                  صوّر توصيلات الأجهزة الإلكترونية عشان تعرف تركبها في البيت
                  الجديد
                </li>
                <li>بلّغ مدرسة عيالك وشغلك بتغيير العنوان</li>
                <li>
                  تخلص من الأغراض اللي ما تبيها — كل ما قل الاثاث، قل السعر ووقت
                  النقل
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-muted shadow-sm">
              <h3 className="font-bold text-lg text-secondary-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                قبل النقل بـ 3 أيام
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>
                  سكّر حساب SEWA وسدد الفاتورة النهائية. راس الخيمة تستخدم هيئة
                  كهرباء ومياه الشارقة ورأس الخيمة (SEWA)، مو FEWA ولا DEWA{" "}
                  <a
                    href="https://www.sewa.gov.ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    (هيئة كهرباء ومياه الشارقة ورأس الخيمة)
                  </a>
                </li>
                <li>احجز مصعد الخدمة في البنايتين لو تنقل من برج لبرج</li>
                <li>أكد الموعد مع شركة النقل</li>
                <li>
                  افصل الغسالة والثلاجة قبل النقل بساعتين وفرّغ الثلاجة من الأكل
                </li>
                <li>
                  حط الأوراق المهمة والمجوهرات والفلوس والأدوية في شنطة لحالها —
                  هذي تاخذها معك بسيارتك مو مع الشاحنة
                </li>
                <li>
                  لو ساكن في مجتمع مسوّر، أكد تصريح الشاحنة مع إدارة المجتمع
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-muted shadow-sm">
              <h3 className="font-bold text-lg text-secondary-foreground mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                يوم النقل
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>فضّي الممرات وتأكد إن الطريق واضح للفريق</li>
                <li>
                  كون حاضر عشان توجه الفريق وين يحطون الأغراض في البيت الجديد
                </li>
                <li>
                  سوِّ جولة أخيرة في البيت القديم — تأكد ما نسيت شي في الخزانات
                  والأدراج والبلكونة والمخزن
                </li>
                <li>لو صار أي ضرر، وقّع تقرير الشغل قبل ما الفريق يطلع</li>
                <li>خذ قراءة عداد الكهرباء والماي الأخيرة وصورها</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-muted shadow-sm">
              <h3 className="font-bold text-lg text-secondary-foreground mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-primary" />
                بعد النقل
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>
                  فعّل حساب SEWA الجديد في بيتك الجديد — تقدر تسويها أونلاين من
                  موقع SEWA أو من المكتب
                </li>
                <li>
                  حدّث عنوانك في عقد الإيجار (توثيق/إيجاري) — بلدية رأس الخيمة
                  تطلب هالشي خلال 30 يوم
                </li>
                <li>
                  ابدأ بفتح الأغراض الأساسية أول: سراير، مطبخ، حمام — الباقي
                  ممكن ينتظر
                </li>
                <li>لو صار أي ضرر، بلّغ خلال 24 ساعة عشان نتعامل معه</li>
                <li>حدّث عنوانك في الهوية الإماراتية لو تغيرت الإمارة</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQS & REVIEWS
      ══════════════════════════════════════════ */}
      <FAQSection
        faqs={rakFaqs}
        title="الأسئلة الشائعة عن نقل اثاث راس الخيمة"
        subtitle="إجابات سريعة على أهم استفساراتكم بخصوص خدمات نقل الأثاث في راس الخيمة"
      />

      <ReviewsSection />

      {/* ══════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════ */}
      <CTASection />

      {/* ══════════════════════════════════════════
          QUOTE SECTION
      ══════════════════════════════════════════ */}
      <QuoteSection />
    </main>
  );
}
