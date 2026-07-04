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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/utils/FaqsSection";
import QuoteSection from "@/components/utils/QuoteSection";
import { ReviewsSection } from "@/components/utils/ReviewsSection";
import { ajmanFaqs } from "@/lib/FaqsData";
import { APP_URL, PHONE_LINK, WHATSAPP_LINK } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/utils/BreadcrumbSchema";

export const metadata = MetadataTemplate({
  meta: {
    title: "نقل اثاث عجمان | النمره نقل اثاث - فك تغليف نقل وتركيب",
    desc: "نقل اثاث عجمان مع النمرة نقل اثاث. فك وتغليف وتركيب بأيدي فريق محترف وشاحنات مغلقة. أسعار واضحة بدون رسوم خفية. احصل على عرض سعر مجاني اليوم!",
  },
  canonical: "/نقل-اثاث-عجمان",
  image: {
    path: "/ajm/نقل-اثاث-عجمان-النمره-شركة-نقل.jpg",
    alt: "نقل اثاث عجمان | النمره نقل اثاث - فك تغليف نقل وتركيب",
  },
});;

export default function AjmanMovingPage() {
  return (
    <main dir="rtl" className="text-foreground pb-20">
      <BreadcrumbSchema
        items={[
          { name: "الرئيسية", url: APP_URL },
          {
            name: "نقل اثاث عجمان",
            url: `${APP_URL}/نقل-اثاث-عجمان`,
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
            <span className="text-foreground font-semibold">
              نقل اثاث عجمان
            </span>
          </nav>

          {/* Orange eyebrow + star rating */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="text-primary font-bold text-xs uppercase tracking-widest border-s-2 border-primary ps-3">
              النمره نقل اثاث · عجمان
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
              <span className="relative z-10 text-primary">عجمان</span>
              <span
                aria-hidden
                className="absolute bottom-1 start-0 end-0 h-3 bg-primary/10 -skew-x-3 rounded-sm z-0"
              />
            </span>
            <span className="text-2xl block mt-5">
              خدمة فك وتغليف ونقل وتركيب من النمره لنقل الأثاث
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-8">
            <strong>نقل اثاث عجمان</strong> مع النمره نقل اثاث يعني إنك تسلّم
            أغراضك لفريق يعرف شوارع عجمان وبناياتها ومناطقها من سنين. نحن شركة
            نقل اثاث في عجمان نشتغل بفريق ثابت وشاحنات مغلقة ومواد تغليف نجيبها
            معنا. ما نطلب منك تشتري كرتون واحد. كل شي من الفك والتغليف لين
            التركيب في بيتك الجديد على حسابنا.
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
              src="/ajm/نقل-اثاث-عجمان-النمره-شركة-نقل.jpg"
              alt="النمره  نقل اثاث في عجمان - شاحنة نقل أثاث مع فريق عمل محترف"
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
              { num: "+10", label: "سنوات خبرة في عجمان" },
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
            لو تنقل داخل عجمان — من النعيمية للراشدية أو من شقة برج لفيلا في
            الجرف — أو تنقل من عجمان لدبي أو الشارقة، نغطي كل هالمسارات. عجمان
            إمارة فيها حركة سكنية نشطة: عقود إيجار تتجدد كل سنة، عائلات تكبر
            وتحتاج بيت أوسع، وموظفين ينتقلون بين الإمارات. كل هالحركة يعني إن
            نقل الاثاث في عجمان شغل يومي عندنا مو موسمي.
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
          WHY CHOOSE US (لماذا تختار النمره نقل اثاث  لنقل اثاث في عجمان؟)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-[#18232a] text-white mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              الفرق الحقيقي
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              لماذا تختار النمره نقل اثاث في عجمان؟
            </h2>
            <p className="text-white/70 max-w-4xl text-sm md:text-base leading-relaxed">
              في عجمان شركات نقل كثيرة. بعضها يشتغل بعمالة يومية ويختفي بعد
              النقل لو صار أي مشكلة. وبعضها يعطيك سعر رخيص بالتليفون وبعدين يطلع
              رسوم إضافية يوم النقل. الفرق بيننا واضح من أول مكالمة — نقول لك كل
              شي مقدماً ونلتزم فيه.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: Award,
                title: "شركة مرخصة بخبرة سنوات في إمارة عجمان",
                desc: "النمره نقل اثاث  شركة نقل اثاث عجمان مرخصة ومسجلة في دائرة التنمية الاقتصادية. خبرتنا في الإمارة تعني إننا نعرف وين الشوارع ضيقة، وين المصاعد صغيرة، وشو الأوراق اللي تحتاجها قبل النقل. نعرف إن بنايات النعيمية القديمة ما فيها مصعد خدمة، ونعرف إن مدينة الإمارات تطلب حجز مصعد قبل 48 ساعة. هالمعرفة توفر عليك وقت ومشاكل يوم النقل.",
              },
              {
                icon: UserCheck,
                title: "فريق عمل مدرب من النمره نقل اثاث  – مو عمالة يومية",
                desc: "الفريق اللي يجيك موظف عندنا ومدرب على شغل النقل. مو عمالة يومية نجمعها من الشارع صبح النقل. نفس الشباب اللي يسوون المعاينة هم اللي ينقلون أغراضك. يعرفون كيف يتعاملون مع الخشب والزجاج والأجهزة، ويعرفون كيف يحملون من الدرج لو ما فيه مصعد. والأهم إنهم يعرفون يتعاملون معك باحترام — يدخلون بيتك بلباس نظيف ويسألون قبل ما يحركون أي شي.",
              },
              {
                icon: CheckCircle,
                title: "أسعار واضحة بدون رسوم خفية",
                desc: "أسعار نقل اثاث عجمان عندنا واضحة من البداية. الرقم اللي نقوله لك في العرض هو نفسه اللي تدفعه يوم النقل بالضبط. ما فيه رسم وقود يطلع فجأة، ولا فك سراير بفلوس زيادة، ولا كراتين محسوبة عليك، ولا رسم طوابق إضافي ما كنت تتوقعه. الشي الوحيد اللي يغير السعر هو لو ضفت أغراض أو خدمات ما كانت في العرض الأول — وحتى في هالحالة نقول لك السعر الإضافي قبل ما نبدأ.",
              },
              {
                icon: Shield,
                title: "تأمين شامل على الاثاث أثناء النقل",
                desc: "كل نقلة عندنا فيها تأمين نقل أساسي يغطي الأضرار اللي ممكن تصير وقت الفك والتغليف والحمل والنقل. يعني لو صار أي ضرر، نكتبه بتقرير الشغل وانت حاضر قبل ما الفريق يطلع. ما ننتظر أيام ولا نتهرب ولا نقول ما كان عندنا. ولو عندك قطع غالية مثل ثريات أو رخام أو لوحات أو أجهزة إلكترونية ثمينة، نرتب لك تأمين إضافي بمبلغ بسيط قبل النقل يغطي القيمة الكاملة.",
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
              خدمات نقل اثاث اللي نقدمها في عجمان
            </h2>
            <p className="text-muted-foreground max-w-4xl text-sm md:text-base leading-relaxed">
              سواء تسميه نقل اثاث أو نقل عفش عجمان، عندنا فريق ومعدات لكل نوع
              نقل. من استوديو صغير لين فيلا كبيرة، ومن شقة برج لين مكتب في
              المنطقة الحرة. كل نوع نقل له متطلبات مختلفة في عدد العمال وحجم
              الشاحنة ونوع مواد التغليف. عشان كذا نسوي معاينة قبل كل نقلة — ما
              نقدر نعطيك سعر دقيق أو خطة صحيحة بدون ما نشوف أغراضك أول.
            </p>
          </div>

          <div className="space-y-6">
            {/* Service 1 — شقق | image right */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث الشقق في عجمان
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  نقل اثاث شقق عجمان هو أكثر شغلنا. الشقق في النعيمية والراشدية
                  والكورنيش عادة تخلص في نفس اليوم — من الصبح لين الظهر أو
                  العصر. نحجز مصعد الخدمة لو البرج يطلبه. ولو البناية قديمة وما
                  فيها مصعد، الفريق يحمل بالدرج بحذر وكل قطعة تكون مغلفة قبل ما
                  تتحرك.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نتعامل مع كل الأحجام: استوديو، غرفة وصالة، غرفتين وصالة، وشقق
                  أكبر. كل نقلة لها عدد عمال وشاحنة تناسبها. الاستوديو يحتاج 3
                  عمال وشاحنة صغيرة. الشقة الكبيرة ممكن تحتاج 5 عمال وشاحنتين لو
                  الاثاث كثير.
                </p>
                <Link
                  href="/خدمات/نقل-اثاث-الشقق-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تفاصيل خدمة نقل الشقق <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              <div className="aspect-4/3 relative order-1 md:order-2 ">
                <Image
                  src="/ajm/نقل-اثاث-شقق-عجمان-النمره.jpg"
                  alt="نقل أثاث الشقق في عجمان - فريق النمره موفرز"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Service 2 — فلل | image left */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-muted">
              <div className="aspect-4/3  relative ">
                <Image
                  src="/ajm/نقل-اثاث-فلل-عجمان-النمره.jpg"
                  alt="نقل أثاث الفلل في عجمان - فريق النمره موفرز"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  نقل اثاث الفلل في عجمان
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  نقل اثاث فلل عجمان يحتاج فريق أكبر ووقت أطول. فلل الجرف
                  والمويهات والروضة فيها أثاث ثقيل ودواليب مدمجة وغرف كثيرة.
                  نرسل فريق مناسب ونخطط ليوم كامل أو أكثر على حسب حجم الفيلا.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  نفك السراير والكباتات المدمجة ونرقم القطع عشان نركبها صح في
                  البيت الجديد. ونفرش الأرضيات في البيتين عشان نحمي البلاط
                  والرخام من خدوش الحمل. الحدائق الخارجية لو فيها أثاث — طاولات
                  وكراسي ومظلات — نغلفها ونشيلها بعد. ولو عندك جاكوزي خارجي أو
                  معدات مسبح، نرتب نقلها لحالها.
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
                  نقل اثاث المكاتب والشركات في عجمان
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  نقل اثاث مكاتب عجمان نسويه في الويك إند عادة عشان دوامكم ما
                  يتوقف. نتعامل مع الشاشات والكمبيوترات والملفات بترتيب وتسمية
                  واضحة. كل صندوق نكتب عليه محتواه والغرفة اللي يروح لها.
                  المكاتب التنفيذية والكراسي الكبيرة نفكها عشان تدخل المصعد بدون
                  مشاكل.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  السيرفرات والمعدات الحساسة نتعامل معها بعناية خاصة — نغلفها
                  بإسفنج مضاد للكهرباء الساكنة ونحملها بأيدينا مو بالعربة.
                  الطابعات الكبيرة والماكينات نثبتها بأحزمة داخل الشاحنة. ولو
                  المكتب في المنطقة الحرة بعجمان، نخلص تصريح الدخول والخروج قبل
                  الموعد عشان الشاحنة ما توقف عند البوابة.
                </p>
                <Link
                  href="/خدمات/نقل-اثاث-المكاتب-في-دبي"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                >
                  تفاصيل خدمة نقل المكاتب <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
              <div className="aspect-4/3 relative order-1 md:order-2 ">
                <Image
                  src="/ajm/نقل-اثاث-مكاتب-شركات-عجمان-النمره.jpg"
                  alt="نقل أثاث المكاتب والشركات في عجمان - النمره موفرز"
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
                شركة تغليف ونقل اثاث عجمان تبدأ من مواد التغليف. نجيب كل شي
                معنا: بطانيات مبطنة للخشب، فيلم تمدد للكنب والمراتب، كراتين جدار
                مزدوج للأشياء الثقيلة، وصناديق دواليب للملابس المعلقة. القطع
                الحساسة مثل الزجاج والرخام لها صناديق خشبية مخصصة.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                ما نلف كل شي بنفس الطريقة. كل قطعة لها مادة تناسبها. الشاشات
                نحيطها بإسفنج من كل جهة وبعدين ندخلها في كرتون محكم. الثريات
                نفكها ونحط كل قطعة زجاج بورق فقاعي لحالها. طاولات الزجاج ننزل
                الزجاج ونلفه ونحطه بصندوق خشبي واقف مو مستلقي. كل هالتفاصيل تفرق
                في النتيجة.
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
              <div className="aspect-video  relative ">
                <Image
                  src="/ajm/فك-تغليف-تركيب-اثاث-عجمان-النمره.jpg"
                  alt="نجار شركة النمره موفرز يفك الاثاث في عجمان"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  خدمة فك وتركيب الاثاث
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  فك وتركيب اثاث عجمان يسويه نجار محترف من فريقنا. يتعامل مع كل
                  أنواع الاثاث — من غرف النوم والكباتات لين اثاث ايكيا اللي
                  يحتاج دقة في التركيب. نستخدم نظام ترقيم: كل قطعة تتفكك ناخذ
                  لها رقم عشان نركبها بنفس الترتيب في بيتك الجديد. البراغي
                  والمفصلات نحطها في أكياس مرقمة عشان ما نضيع شي.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  الكباتات المدمجة (بيلت إن) تحتاج عناية خاصة لأنها مثبتة في
                  الحيطان. النجار يعرف يفكها بدون ما يخرب الجدار، ويركبها في
                  البيت الجديد على حسب مقاسات الغرفة. لو المقاسات مختلفة، يقول
                  لك من البداية شو الخيارات.
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
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <article className=" rounded-3xl overflow-hidden border border-muted">
                <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                    تخزين الاثاث في مستودعات آمنة
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    لو بيتك الجديد ما جهز أو مسافر لفترة، نوفر تخزين اثاث عجمان
                    في مستودعات مكيفة ونظيفة. نسوي جرد لكل قطعة وننظمها على
                    باليتات بعيد عن الأرض. عندنا خيارات تخزين قصير وطويل المدى.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    وميزة إن مخازن عجمان أرخص من دبي. حتى ناس ساكنين بدبي يخزنون
                    عندنا لأن السعر أوفر بنسبة ملحوظة. نعطيك مفتاح وحدة التخزين
                    ورقم تعريف الجرد، وتقدر تزور أغراضك أو تطلب توصيلها بأي وقت.
                  </p>
                  <Link
                    href="/خدمات/تخزين-اثاث-في-دبي"
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:gap-2.5 transition-all"
                  >
                    تفاصيل خدمات التخزين <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </article>

              {/* Service 7 — نفس اليوم */}
              <article className="rounded-3xl overflow-hidden border border-muted p-8 md:p-10 bg-slate-50">
                <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                  خدمة نقل اثاث في نفس اليوم
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                  وضعك طاري وتبا تنقل اليوم؟ اتصل فينا وقول لنا موقعك وحجم
                  أغراضك. لو عندنا فريق فاضي، نأكد لك خلال الساعة. النقلة
                  الطارية تحتاج ترتيب أسرع بس تاخذ نفس الجودة ونفس التغليف.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  هالخدمة مطلوبة كثير من اللي يشترون اثاث جديد ويبون ينقلونه من
                  المعرض لبيتهم، أو اللي يحصلون شقة فجأة ولازم ينقلون قبل ما
                  تروح. نقل اثاث عجمان في نفس اليوم ممكن لو النقلة صغيرة أو
                  متوسطة والمسافة قصيرة.
                </p>
              </article>
            </div>

            {/* Service 8 — القطع الخاصة */}
            <article className="rounded-3xl overflow-hidden border border-muted p-8 md:p-10 bg-white">
              <h3 className="font-medium text-xl text-secondary-foreground mb-4">
                نقل الأثاث الحساس والقطع الخاصة
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                بعض القطع تحتاج معاملة خاصة ما ينفع معها التغليف العادي. البيانو
                مثلاً ثقيل وحساس — يحتاج أربعة أشخاص وعربة متخصصة ولف بالبطانيات
                من كل جهة. طاولات البلياردو نفككها لأجزاء ونحمل الرخامة لحالها
                بصندوق خشبي. الثريات الكريستال نفكها كاملة ونحط كل قطعة زجاج
                بورقها في صندوق منفصل.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                الأحواض والنباتات الكبيرة لها ترتيب خاص — ننقلها واقفة بدون
                ميلان وبتثبيت محكم داخل الشاحنة. الخزنات الحديدية ثقيلة جداً
                وتحتاج عربة متخصصة وحزام رفع. ولو عندك مقتنيات فنية أو لوحات
                كبيرة، نجهز لها صناديق خشبية بمقاس مخصص ونحط بينها وبين الصندوق
                طبقات إسفنج. هالقطع نحسبها لحالها في العرض عشان نعطيك سعر عادل
                ودقيق.
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
              أسعار نقل اثاث في عجمان 2026
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              كثير من الناس يسألون عن أسعار نقل اثاث عجمان قبل ما يتواصلون معنا.
              وهذا شي طبيعي — تبا تعرف المبلغ التقريبي قبل ما تلتزم. أسعار نقل
              اثاث عجمان من أوفر الأسعار في الإمارات. الاستوديو يبدأ من حوالي
              500 درهم، والشقة غرفتين عادة بين 1,000 و 1,800 درهم، والفيلا على
              حسب حجمها وعدد غرفها.
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
                      <th className="py-3.5 px-5">السعر التقريبي</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-muted text-muted-foreground">
                    {[
                      {
                        type: "استوديو",
                        trucks: "1",
                        crew: "3-4",
                        price: "من 500 درهم",
                      },
                      {
                        type: "غرفة وصالة",
                        trucks: "1",
                        crew: "4",
                        price: "من 800 درهم",
                      },
                      {
                        type: "غرفتين وصالة",
                        trucks: "1-2",
                        crew: "4-5",
                        price: "من 1,000 درهم",
                      },
                      {
                        type: "3 غرف وصالة",
                        trucks: "2",
                        crew: "5-7",
                        price: "من 1,500 درهم",
                      },
                      {
                        type: "فيلا غرفتين",
                        trucks: "2",
                        crew: "5-7",
                        price: "من 1,800 درهم",
                      },
                      {
                        type: "فيلا 3 غرف",
                        trucks: "2-3",
                        crew: "7-9",
                        price: "من 2,500 درهم",
                      },
                      {
                        type: "فيلا كبيرة 4+ غرف",
                        trucks: "3+",
                        crew: "8-12",
                        price: "من 3,500 درهم وزيادة",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-4 px-5 font-semibold text-secondary-foreground">
                          {row.type}
                        </td>
                        <td className="py-4 px-5">{row.trucks}</td>
                        <td className="py-4 px-5">{row.crew}</td>
                        <td className="py-4 px-5 text-primary font-bold">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  *السعر النهائي يعتمد على كمية الاثاث والطابق ووضع المصعد
                  والمسافة. تواصل معنا وعطنا تفاصيل بيتك ونرجعك بسعر دقيق خلال
                  الساعة. المعاينة مجانية سواء بالزيارة أو بفيديو كول.*
                </p>
              </div>
            </div>

            {/* Quick Quote Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-muted shadow-sm flex flex-col justify-between h-full min-h-[300px]">
              <div>
                <h3 className="font-bold text-lg text-secondary-foreground mb-3">
                  احصل على تسعير فوري
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  أرسل لنا صور أو فيديو قصير للأثاث عبر واتساب، وسيقوم منسق
                  النقل لدينا بتقدير التكلفة الإجمالية وإرسال عرض سعر رسمي دقيق
                  وثابت خلال ساعة واحدة فقط!
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-xs text-secondary-foreground font-semibold">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>معاينة مجانية بالفيديو كول</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-secondary-foreground font-semibold">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>بدون أي رسوم إضافية مخفية</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-secondary-foreground font-semibold">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>ما نطلب عربون أو دفعة مقدمة</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Button className="w-full font-bold gap-2" asChild>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    واتساب — سعر سريع
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full font-bold gap-2 border-2"
                  asChild
                >
                  <a href={PHONE_LINK} dir="ltr">
                    <Phone className="w-4 h-4" />
                    0541767605
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Cards: 4 Detailed Pricing Factor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-muted pt-10">
            {/* Card 1: What affects pricing */}
            <div className="bg-white rounded-3xl p-6 border border-muted shadow-sm">
              <h3 className="font-bold text-secondary-foreground text-sm mb-3 text-primary flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                شو اللي يأثر على سعر نقل الاثاث في عجمان؟
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3">
                الطابق العالي بدون مصعد يزيد السعر لأن الفريق يحتاج وقت وجهد
                أكثر. كمية الاثاث تحدد عدد الشاحنات والعمال. المسافة بين البيت
                القديم والجديد تأثر — النقل داخل عجمان أوفر من النقل لدبي.
                والقطع اللي تحتاج صندوق خشبي مثل الرخام والثريات لها تكلفة
                إضافية.
              </p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                وقت النقل يأثر بعد. آخر أسبوع من الشهر هو الأزحم لأن عقود
                الإيجار في عجمان تنتهي نهاية الشهر وكل الناس تنقل في نفس الفترة.
                والصيف طلبه عالي لأن ناس كثيرة تغير سكنها قبل بداية السنة
                الدراسية. لو تقدر تنقل وسط الشهر في يوم عمل عادي — الأحد أو
                الثلاثاء مثلاً — غالباً تطلع بسعر أقل وفريق يوصلك بدري.
              </p>
            </div>

            {/* Card 2: Why Ajman is cheaper */}
            <div className="bg-white rounded-3xl p-6 border border-muted shadow-sm">
              <h3 className="font-bold text-secondary-foreground text-sm mb-3 text-primary flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                ليش نقل اثاث عجمان أرخص من دبي؟
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3">
                نقل اثاث عجمان رخيص مقارنة بدبي بفرق حوالي 15 لين 25 بالمية
                للنقلة المعادلة. السبب بسيط: تكاليف التشغيل في عجمان أقل.
                إيجارات المستودعات والمواقف أرخص من دبي بكثير، والتصاريح البلدية
                أقل تعقيد ورسومها أخف. المنطقة الصناعية في عجمان أوفر من القوز
                أو الرقة في دبي. كل هالتوفير ينعكس على سعر النقلة.
              </p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                الجودة نفسها — نفس الفريق ونفس المعدات ونفس مواد التغليف — بس
                السعر يعكس فرق تكاليف الإمارة. هالشي يخلي ناس كثيرة من دبي
                يخزنون في عجمان أو ينقلون سكنهم لها عشان يوفرون في الإيجار
                والمعيشة. وفيه ناس تنقل من دبي لعجمان لأن الإيجارات أوفر بكثير
                والمسافة للشغل بدبي ما تاخذ أكثر من نص ساعة عن طريق شارع
                الاتحاد.
              </p>
            </div>

            {/* Card 3: Comparing companies */}
            <div className="bg-white rounded-3xl p-6 border border-muted shadow-sm">
              <h3 className="font-bold text-secondary-foreground text-sm mb-3 text-primary flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                كيف تقارن بين شركات نقل اثاث في عجمان؟
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3">
                قبل ما تختار شركة نقل اثاث عجمان، اسأل هالأسئلة: هل السعر يشمل
                الفك والتركيب ولا لحاله؟ هل الكراتين ومواد التغليف على حسابك ولا
                على حساب الشركة? هل الشاحنة مغلقة ولا بيك أب مفتوح؟ هل فيه تأمين
                على الاثاث؟ وهل الفريق موظف عند الشركة ولا عمالة يومية؟
              </p>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                الفرق بين شركة وشركة مو بس في السعر. شركة تعطيك سعر 400 درهم
                بدون تغليف ولا تأمين ممكن تكلفك أكثر من شركة تعطيك 800 درهم بكل
                شي. لأن الضرر اللي يصير بسبب التغليف السيء يكلف أكثر من الفرق في
                السعر.
              </p>
            </div>

            {/* Card 4: What is included */}
            <div className="bg-white rounded-3xl p-6 border border-muted shadow-sm">
              <h3 className="font-bold text-secondary-foreground text-sm mb-3 text-primary flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" />
                شو يشمله عرض السعر؟
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3">
                عرض سعر نقل اثاث عجمان عندنا يشمل كل شي تحتاجه من الألف إلى
                الياء:
              </p>
              <ul className="text-muted-foreground text-xs md:text-sm space-y-1.5 list-disc list-inside mb-3 leading-relaxed">
                <li>فك وتركيب السراير والدواليب</li>
                <li>تغليف كامل للقطع المنجدة والخشبية</li>
                <li>فرش أرضيات البيتين</li>
                <li>صناديق دواليب للملابس المعلقة</li>
                <li>تنسيق حجز مصعد الخدمة</li>
                <li>تأمين نقل أساسي</li>
              </ul>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                البيانو، طاولات البلياردو، النباتات الكبيرة، والأحواض ما تدخل في
                السعر العادي لأنها تحتاج معاملة خاصة ومعدات مختلفة. لو عندك شي
                من هذا، قول لنا من البداية ونعطيك سعره لحاله في العرض.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESS — 5 steps grid
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              خطوة بخطوة
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              كيف يتم نقل اثاث في عجمان خطوة بخطوة؟
            </h2>
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
              أكثر شي يقلق الناس وقت النقل هو إنهم ما يعرفون شو بيصير بالضبط.
              متى يجي الفريق؟ كم ياخذون وقت؟ مين يفك ومين يركب؟ شو المفروض أسويه
              أنا وشو على الشركة؟ عشان ما يكون شي غامض، هذي الخطوات من البداية
              للنهاية بالتفصيل:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "الخطوة 1 – التواصل والمعاينة المجانية",
                desc: "اتصل فينا أو ارسل على الواتساب. نسوي معاينة مجانية — إما بزيارة سريعة أو بفيديو كول على الواتساب. نشوف كمية الاثاث، نوعه (خشب، مودرن، كلاسيكي)، وضع الشارع والمواقف، وهل فيه مصعد ولا لا. المعاينة بالفيديو تكفي لأغلب الشقق — تمشي بالكاميرا وتورينا كل غرفة. على أساس المعاينة نحدد حجم الفريق والشاحنة ونعرف شو المواد اللي نحتاجها بالضبط.",
              },
              {
                title: "الخطوة 2 – عرض السعر والتأكيد",
                desc: "بعد المعاينة نرسل لك عرض سعر ثابت وواضح خلال ساعة على الواتساب. العرض يوضح كل شي: عدد العمال، عدد الشاحنات، الخدمات المشمولة، والسعر النهائي. لو وافقت، نحجز لك الموعد. ونأكد لك الموعد بمكالمة من منسق النقل ليلة قبل يوم النقل عشان تكون متأكد إن كل شي جاهز وما فيه تغييرات.",
              },
              {
                title: "الخطوة 3 – التغليف والفك في يوم النقل",
                desc: "الفريق يوصل في الوقت المتفق عليه ويبدأون بحماية الأرضيات والممرات أول شي. بعدين يبدأون بتغليف القطع غرفة بغرفة — يبدأون من الغرف اللي ما تستخدمها كثير ويخلون المطبخ والحمام للآخر. الاثاث اللي يحتاج فك — مثل السراير والدواليب — يفكونه ويرقمون قطعه ويحطون البراغي في أكياس مرقمة. يفرشون الأرضيات في الممرات وعند الأبواب عشان الحمل ما يخدش شي.",
              },
              {
                title: "الخطوة 4 – التحميل والنقل بشاحنات مغلقة",
                desc: "بعد التغليف والفك، يحملون الاثاث في شاحنات مغلقة. كل قطعة تتثبت بأحزمة عشان ما تتحرك وقت السير. القطع الثقيلة تنزل أول والخفيفة فوق. الشاحنة المغلقة تحمي أغراضك من الشمس والغبار والرطوبة — مهمة خصوصاً في صيف عجمان اللي ممكن تكسر فيه الحرارة 45 درجة. ما نستخدم بيك أب مفتوح لنقل الاثاث.",
              },
              {
                title: "الخطوة 5 – التفريغ والتركيب والترتيب",
                desc: "في البيت الجديد، الفريق ينزل الاثاث ويركبه في أماكنه. النجار يجمع السراير والدواليب اللي تفككت. نوصل الغسالة والثلاجة في أماكنها ونتأكد إنها مستوية. بعد ما يخلصون، تمشي معهم وتتأكد إن كل شي تمام. لو صار أي ضرر، يكتبونه بالتقرير وانت حاضر — مو بعد أيام. الفريق ما يمشي إلا بعد ما توقّع على تقرير الاستلام.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-muted p-6 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-primary/10 absolute top-4 end-4 leading-none select-none">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-secondary-foreground text-sm mb-3 mt-6">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MATERIALS USED
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-y border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              مواد التغليف الاحترافية التي نستخدمها
            </h2>
            <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              تغليف الاثاث الصح يبدأ من اختيار المادة الصح لكل قطعة. أغلب الضرر
              اللي يصير وقت نقل الاثاث يكون بسبب تغليف ضعيف أو مواد رخيصة أو
              تغليف كل شي بنفس الطريقة بدون تفريق.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "بطانيات مبطنة",
                desc: "نلف فيها الاثاث الخشبي والأجهزة الكهربائية. تمنع الخدوش وتحمي الأسطح.",
              },
              {
                title: "فيلم تمدد",
                desc: "نلف فيه الكنب والمراتب. يحافظ على القماش نظيف ويمنع الغبار والرطوبة.",
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
                desc: "كراتين مموجة لحماية زوايا الاثاث وإطارات الأبواب وقت الحمل.",
              },
              {
                title: "صناديق خشبية مخصصة",
                desc: "للقطع اللي تستاهل حماية إضافية: الرخام، الثريات، اللوحات الكبيرة، والزجاج.",
              },
              {
                title: "إسفنج وفلين",
                desc: "للشاشات والإلكترونيات. نحيطها من كل جهة عشان تتحمل أي اهتزاز وقت النقل.",
              },
              {
                title: "شريط تسمية ملون",
                desc: "نستخدم ألوان مختلفة لكل غرفة. الأحمر للمطبخ، الأزرق لغرفة النوم، الأخضر للصالة. هالنظام يسرّع التفريغ لأن الفريق يعرف كل صندوق وين يروح بدون ما يسأل.",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-muted shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-secondary-foreground text-sm mb-2">
                  {m.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed text-center max-w-3xl mx-auto">
            كل هالمواد نجيبها معنا يوم النقل. ما يلزمك تشتري ولا تحضر شي. حتى
            الكراتين الفاضية نشيلها معنا بعد ما تخلص تفتح أغراضك.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AREAS COVERED
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              المناطق التي نغطيها في عجمان
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl">
              نقل اثاث في عجمان يختلف من منطقة لمنطقة. بعض المناطق فيها أبراج
              عالية تحتاج حجز مصعد قبل أيام، وبعضها شوارعها ضيقة تحتاج شاحنة
              أصغر من العادي. معرفتنا بكل منطقة في عجمان تخلينا نجهز الشاحنة
              والفريق الصح من البداية بدون تأخيرات.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-muted bg-white mb-8">
            <table className="w-full text-start border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-muted bg-slate-50 text-secondary-foreground font-semibold">
                  <th className="py-3.5 px-5">المنطقة</th>
                  <th className="py-3.5 px-5">نوع السكن الغالب</th>
                  <th className="py-3.5 px-5">ملاحظة نقل مهمة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muted text-muted-foreground">
                {[
                  {
                    area: "النعيمية",
                    type: "شقق وأبراج",
                    note: "شوارع مزدحمة، حجز مصعد الخدمة ضروري",
                  },
                  {
                    area: "الراشدية",
                    type: "شقق وأبراج",
                    note: "قريبة من الكورنيش، مواقف محدودة",
                  },
                  {
                    area: "الكورنيش",
                    type: "أبراج عالية",
                    note: "حجز مصعد خدمة قبل أيام",
                  },
                  {
                    area: "الجرف",
                    type: "فلل وبيوت",
                    note: "يوم كامل وفريق أكبر",
                  },
                  {
                    area: "المويهات",
                    type: "فلل",
                    note: "شوارع واسعة ودخول سهل",
                  },
                  {
                    area: "الروضة",
                    type: "فلل وشقق",
                    note: "مناطق عائلية هادئة",
                  },
                  { area: "الزهراء", type: "شقق وفلل", note: "نشطة بالإيجار" },
                  {
                    area: "الحميدية",
                    type: "بيوت وفلل",
                    note: "شوارع داخلية ضيقة — شاحنة 3 طن",
                  },
                  {
                    area: "مدينة الإمارات",
                    type: "أبراج سكنية (عجمان ون)",
                    note: "مواعيد المصعد تخلص بسرعة",
                  },
                  { area: "البستان", type: "شقق", note: "منطقة سكنية مكتظة" },
                  {
                    area: "الرميلة",
                    type: "شقق وبيوت",
                    note: "قريبة من السوق القديم",
                  },
                  {
                    area: "المنطقة الحرة",
                    type: "مكاتب ومستودعات",
                    note: "تصريح منطقة حرة مطلوب",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-4 px-5 font-semibold text-secondary-foreground">
                      {row.area}
                    </td>
                    <td className="py-4 px-5">{row.type}</td>
                    <td className="py-4 px-5 text-primary font-medium">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-4xl">
            لو منطقتك مو في الجدول، أكيد نوصلها. نغطي كل مناطق عجمان بما فيها
            المناطق الجديدة مثل الزاهية والياسمين والعالية. سواء تنقل من شقة
            لشقة في نفس المنطقة أو من طرف عجمان للطرف الثاني، نعرف الطرق ونعرف
            وين الزحمة ومتى نتفاداها. هالمعرفة المحلية توفر وقت وتمنع تأخيرات
            يوم النقل.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INTER-EMIRATE
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              نقل اثاث بين عجمان والإمارات الأخرى
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
              كثير من عملائنا ينقلون بين عجمان وإمارة ثانية — خصوصاً دبي
              والشارقة. عجمان موقعها بين الشارقة ورأس الخيمة، وقريبة من دبي،
              فالنقل بين الإمارات شغل يومي عندنا.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-3xl p-8 border border-muted shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl text-secondary-foreground mb-4">
                  نقل اثاث من عجمان الى دبي
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  نقل اثاث من عجمان الى دبي من أكثر الطلبات عندنا. ناس كثيرة
                  تنقل من عجمان لمناطق دبي مثل الورقاء والقصيص والنهدة وديرة وبر
                  دبي. الطريق يكون عن طريق شارع الاتحاد (E11) أو طريق الإمارات
                  (E311). في أوقات الذروة صباحاً ومساءً فيه قيود على الشاحنات
                  الثقيلة على بعض الطرق، فنرتب وقت الخروج عشان نتفادى التأخير.
                  رسوم سالك محسوبة في العرض من البداية. ما نفاجئك بمبلغ إضافي
                  بعد النقل. أغلب النقلات من عجمان لدبي تخلص في نفس اليوم — حتى
                  الشقق الكبيرة.
                </p>
              </div>
              <Link
                href="/"
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
              >
                تصفح فرع دبي <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-muted shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl text-secondary-foreground mb-4">
                  نقل اثاث من عجمان الى الشارقة
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  نقل اثاث بين عجمان والشارقة هو أقرب وأرخص نقل بين إمارتين.
                  الحدود مشتركة والمسافة قصيرة — بعض المناطق في عجمان أقرب
                  لمناطق الشارقة من مناطق عجمان نفسها. عادة يكون مثل نقل محلي بس
                  بشوية وقت طريق زيادة. كثير من عملائنا ينقلون بين النعيمية
                  ومنطقة الناحية أو المجاز في الشارقة — المسافة أقل من 15 دقيقة.
                  ما فيه رسوم سالك بين عجمان والشارقة فالسعر يكون قريب من النقل
                  المحلي.
                </p>
              </div>
              <Link
                href="/نقل-أثاث-الشارقة"
                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
              >
                تصفح فرع الشارقة <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-muted shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl text-secondary-foreground mb-4">
                  نقل اثاث الى أبوظبي والعين وباقي الإمارات
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  النقل لأبوظبي والعين يحتاج تخطيط أكثر لأن المسافة أطول —
                  ساعتين تقريباً بالشاحنة. لو الاثاث كثير، ممكن نحتاج رحلتين أو
                  يومين. عشان كذا نخطط للنقلات البعيدة من قبل ونرتب الجدول.
                  الفجيرة ورأس الخيمة وأم القيوين نوصلها بعد. كل رسوم الطريق
                  والسالك محسوبة في السعر الثابت، وما يطلع شي يوم النقل. نسوي
                  نفس الشغل: نفس التغليف، نفس الفريق، نفس الحرص على أغراضك.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/نقل-اثاث-ابوظبي"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  فرع أبوظبي <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
                <span className="text-muted-foreground/30">|</span>
                <Link
                  href="/نقل-اثاث-العين"
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  فرع العين <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
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
          CHALLENGES
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              تحديات نقل الاثاث في عجمان وكيف نتغلب عليها
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              نقل اثاث في عجمان له تحديات خاصة ما تلقاها بنفس الشكل في إمارات
              ثانية. بعد سنين من الشغل في عجمان، تعلمنا نتعامل مع كل تحدي بطريقة
              عملية:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted-foreground">
            {[
              {
                title: "شوارع عجمان القديمة الضيقة",
                desc: "مناطق مثل النعيمية القديمة والحميدية فيها شوارع داخلية ضيقة ما تدخلها الشاحنة الكبيرة. البنايات القديمة بعضها ما فيها مواقف أصلاً والشارع يكون مشغول بسيارات السكان. نستخدم شاحنات مغلقة 3 طن تدخل هالشوارع وتوصل لباب البناية. ولو الشارع ضيق أكثر، نركن الشاحنة في أقرب مكان ونسوي نقل مكوكي بعربة يد. كل قطعة تكون مغلفة بالكامل قبل ما تطلع من الباب — فما فيه احتكاك ولا خدش حتى لو الباب ضيق.",
              },
              {
                title: "النقل في صيف عجمان — الحرارة والرطوبة",
                desc: "صيف عجمان حار ورطب. عجمان على البحر، والرطوبة تأثر على الخشب والإلكترونيات أكثر من الحرارة لحالها. الخشب يتمدد بالرطوبة، والإلكترونيات ممكن يتكثف عليها ماي من الداخل لو انتقلت من مكان مكيف لحرارة الشارع. بيك أب مفتوح في الصيف ممكن يخرب أغراضك حتى لو المسافة قصيرة. عشان كذا كل أغراضك تنتقل جوّا شاحنة مغلقة محمية من الشمس والرطوبة. والاثاث الجلدي نغطيه ببطانيات إضافية لأن الجلد يتأثر بالحرارة العالية. نبدأ التحميل قبل 9 الصبح أو بعد 4 العصر. قانون العمل الإماراتي يمنع الشغل تحت الشمس بين 12:30 و 3 العصر في الصيف، فنرتب الجدول حول هالوقت. وقت الاستراحة نستغله في ترتيب الاثاث داخل الشاحنة وتجهيز القطع للمرحلة اللي بعدها.",
              },
              {
                title: "حجز المصعد في الأبراج والبنايات القديمة بدون مصعد",
                desc: "أبراج الكورنيش ومدينة الإمارات (عجمان ون) فيها مصاعد خدمة بمواعيد محددة. لازم تحجز قبل النقل بأيام لأن مواعيد نهاية الأسبوع تخلص بسرعة. نساعدك في التنسيق مع إدارة المبنى. والبنايات القديمة بدون مصعد؟ نخطط لحمل يدوي ونضيف وقت. الفريق متعود على هالشي ويحمل بحذر من درجة لدرجة — كل قطعة مغلفة. نرسل عدد عمال أكثر في هالحالة عشان الشغل يخلص بنفس الوقت ومن غير ما أحد يتعب ويخطي.",
              },
              {
                title: "نقل المنطقة الحرة بعجمان",
                desc: "نقل المكاتب والمستودعات من المنطقة الحرة بعجمان يحتاج تخليص من هيئة المنطقة الحرة. نجهز الرخصة التجارية ورسالة تخويل المركبة قبل الموعد. الشاحنة تدخل وتطلع من البوابة بدون تعطيل. لو شركتك في المنطقة الحرة وتبا تنقل لمكتب ثاني داخلها أو خارجها، نرتب كل الأوراق — ما تحتاج تتعامل مع البوابة بنفسك.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border border-muted shadow-sm"
              >
                <h3 className="font-bold text-lg text-secondary-foreground mb-3">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CHECKLISTS — BEFORE & AFTER
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              دليل الانتقال في عجمان — قبل وبعد النقل
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              قائمة عملية تساعدك تجهز لنقلتك بدون ما تنسى شي مهم. نقل الاثاث مو
              بس شيل وحط — فيه أوراق وحسابات وتنسيق لازم تسويه:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-muted shadow-sm">
              <h3 className="font-bold text-secondary-foreground text-sm mb-4 border-b border-muted pb-2 text-primary">
                قبل النقل بأسبوعين
              </h3>
              <ul className="text-xs text-muted-foreground space-y-2.5 leading-relaxed">
                <li>✓ احجز شركة نقل اثاث عجمان وأكد الموعد</li>
                <li>
                  ✓ بلّغ صاحب البيت واحصل على شهادة عدم ممانعة (NOC) لو يطلبها
                </li>
                <li>
                  ✓ ابدأ تحزم الأغراض الشخصية اللي ما تستخدمها — كتب، ملابس
                  موسمية، تحف
                </li>
                <li>
                  ✓ صوّر توصيلات الأجهزة الإلكترونية (تلفزيون، رسيفر) عشان تعرف
                  تركبها في البيت الجديد
                </li>
                <li>
                  ✓ تخلص من الأغراض اللي ما تبيها. كل ما قل الاثاث، قل السعر
                  ووقت النقل
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-muted shadow-sm">
              <h3 className="font-bold text-secondary-foreground text-sm mb-4 border-b border-muted pb-2 text-primary">
                قبل النقل بـ 3 أيام
              </h3>
              <ul className="text-xs text-muted-foreground space-y-2.5 leading-relaxed">
                <li>✓ سكّر حساب فيوا (FEWA) وسدد الفاتورة النهائية</li>
                <li>✓ احجز مصعد الخدمة في البنايتين (القديمة والجديدة)</li>
                <li>✓ أكد الموعد مع شركة نقل اثاث عجمان اللي حجزت معها</li>
                <li>
                  ✓ افصل الغسالة والثلاجة قبل النقل بساعتين على الأقل وفرّغ
                  الثلاجة
                </li>
                <li>
                  ✓ حط الأوراق المهمة والمجوهرات والأدوية في شنطة لحالها بسيارتك
                  الخاصة
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-muted shadow-sm">
              <h3 className="font-bold text-secondary-foreground text-sm mb-4 border-b border-muted pb-2 text-primary">
                يوم النقل
              </h3>
              <ul className="text-xs text-muted-foreground space-y-2.5 leading-relaxed">
                <li>✓ فضّي الممرات وتأكد إن الطريق واضح للفريق</li>
                <li>
                  ✓ كون حاضر عشان توجه الفريق وين يحطون الأغراض في البيت الجديد
                </li>
                <li>
                  ✓ سوِّ جولة أخيرة في البيت القديم وتأكد ما نسيت شي في الخزانات
                </li>
                <li>
                  ✓ لو صار أي ضرر، وقّع تقرير الشغل قبل ما الفريق يطلع وهو مكتوب
                </li>
                <li>✓ خذ قراءة عداد الكهرباء والماي الأخيرة وصورها</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-muted shadow-sm">
              <h3 className="font-bold text-secondary-foreground text-sm mb-4 border-b border-muted pb-2 text-primary">
                بعد النقل
              </h3>
              <ul className="text-xs text-muted-foreground space-y-2.5 leading-relaxed">
                <li>✓ فعّل حساب فيوا الجديد في بيتك الجديد (أونلاين)</li>
                <li>
                  ✓ حدّث عنوانك في عقد الإيجار (توثيق/بلدية عجمان) خلال 30 يوم
                </li>
                <li>✓ ابدأ بفتح الأغراض الأساسية أول: سراير، مطبخ، حمام</li>
                <li>
                  ✓ رتب موعد تركيب الستاير والتلفزيون لو الفريق ما لحق يسويها
                  يوم النقل
                </li>
                <li>✓ حدّث عنوانك في الهوية الإماراتية لو تغيرت الإمارة</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQS (utility component)
      ══════════════════════════════════════════ */}
      <FAQSection
        title="الأسئلة الشائعة عن نقل اثاث عجمان"
        subtitle="إجابات واضحة على أكثر الأسئلة شيوعاً حول خدمات نقل الأثاث في عجمان"
        faqs={ajmanFaqs}
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
          FINAL CTA BLOCK (inline — before FAQs)
      ══════════════════════════════════════════ */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border-2 border-dashed border-primary/20 bg-primary/3 p-10 md:p-14 text-center">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
              احجز الآن
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              احجز نقل اثاثك في عجمان مع النمره نقل اثاث
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 max-w-3xl mx-auto">
              جاهز تنقل؟ تواصل معنا بالطريقة اللي تناسبك. ما نطلب عربون. عرض
              السعر مجاني. ولو ما عجبك السعر، ما نضغط عليك. نبا تنقل معنا لأن
              الخدمة عجبتك مو لأنك ملزوم.
            </p>
            <div className="text-xs md:text-sm text-secondary-foreground/80 space-y-2 mb-8 max-w-md mx-auto border-y border-muted py-4">
              <p>
                📍 <strong>العنوان:</strong> القوز الصناعية الثانية، دبي (نخدم
                جميع الإمارات بما فيها عجمان)
              </p>
              <p>
                🕒 <strong>أوقات العمل:</strong> 7 أيام في الأسبوع
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button size="lg" className="h-13 px-8 font-bold gap-2" asChild>
                <a
                  href={WHATSAPP_LINK}
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
                <a href={PHONE_LINK} dir="ltr" id="cta-phone-bottom">
                  <Phone className="w-5 h-5" />
                  0541767605
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-muted-foreground">
              <span>✓ المعاينة مجانية بالفيديو</span>
              <span>✓ ما نطلب دفعة مقدمة</span>
              <span>✓ الخدمة متوفرة كل أيام الأسبوع</span>
              <span>✓ نرسل مندوب في نفس اليوم</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
