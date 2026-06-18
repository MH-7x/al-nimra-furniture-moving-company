import { Button } from "@/components/ui/button";
import imgsrc from "@/public/شركة-النمره-نقل-اثاث-في-دبي.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section id="hero" className=" ">
        <div className="bg-linear-0 from-secondary-foreground/90 via-secondary-foreground/80 md:to-secondary-foreground/40 to-secondary-foreground/60 md:py-32 py-20 md:px-28 px-4 relative overflow-hidden ">
          <h1 className="md:text-5xl text-4xl text-white leading-tight md:text-start text-center">
            شركة نقل اثاث دبي <br />
            <span className="md:text-3xl text-lg text-secondary">
              نقل آمن · تسليم مضمون · أسعار تنافسية
            </span>
          </h1>
          <div className="mt-5 flex flex-col gap-y-2 max-w-4xl md:text-start text-center">
            <p className="text-white/90">
              نقل اثاث دبي يبدأ بقرار واحد صح. في شركة النمره، نحمل أثاثك كما
              نحمل أثاث بيتنا - بعناية، بأمان، وبدون أي ضغوط. منذ أكثر من ١٠
              سنوات وفريقنا ينقل شقق وفلل ومكاتب دبي من أول صندوق لآخر قطعة.
            </p>
            <p className="text-white/90">
              نحن ندرك تماماً أن الانتقال لمكان جديد قد يكون مرهقاً، ولهذا جعلنا
              مهمتنا هي تبسيط هذه العملية بالكامل. نحن لسنا مجرد شركة نقل؛ نحن
              شركاؤك في هذه الرحلة الجديدة.
            </p>
            <p className="text-white/90">
              لا دفعة مقدمة، تأمين شامل على كل القطع، وعرض سعر فوري على
              الواتساب. اتصل بنا أو راسلنا الآن ودعنا نهتم بالباقي.
            </p>
          </div>
          <div className="mt-7 flex gap-3">
            <Button>احصل على عرض سعر عبر واتساب</Button>
            <Button variant={"secondary"}>اتصل بنا الآن</Button>
          </div>
          <Image
            src={imgsrc}
            alt="شركة النمره نقل اثاث في دبي"
            fill
            placeholder="blur"
            loading="eager"
            className="object-cover md:object-top object-top-left -z-10"
          />
        </div>
      </section>
      <section className="w-full bg-muted/60 py-10 ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg">
                {/* ترقيم رقمي أنيق كبديل للأيقونات */}
                <span className="text-primary text-4xl font-bold tracking-tight leading-none shrink-0 select-none opacity-90">
                  {stat.num}
                </span>

                <div className="flex flex-col gap-1.5">
                  {/* العنوان مع علامة التحقق النصية المصممة */}
                  <p className="text-foreground font-bold text-lg flex items-center gap-2">
                    <span className="text-primary text-xl font-extrabold select-none">
                      ✓
                    </span>
                    {stat.title}
                  </p>
                  {/* الوصف التعريفي المساعد */}
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* الجزء العلوي للقسم: العنوان والمقدمة */}
          <div className="max-w-3xl mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 block">
              تميزنا واحترافيتنا
            </span>
            <h2 className="text-secondary-foreground  font-bold mb-6 leading-tight">
              لماذا يختار سكان دبي
              <br /> شركة النمره لنقل أثاثهم؟
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              عندما تبحث عن شركة نقل اثاث دبي، فمن الطبيعي أن تبحث عن الأمان
              والاحترافية. دبي مدينة سريعة الإيقاع، والانتقال فيها يتطلب معرفة
              دقيقة بالشوارع والمباني والقوانين المحلية. إليك ما يميزنا عن غيرنا
              من شركات نقل الاثاث في دبي ويجعلنا الخيار الأول لآلاف العائلات:
            </p>
          </div>

          {/* شبكة عرض الميزات - 6 بطاقات مسطحة وخالية من الحدود والأنيميشن */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, index) => {
              const IconComponent = feat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl flex flex-col items-start gap-5"
                >
                  {/* حاوية الأيقونة بلون خلفية ناعم من ألوان هويتك */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <IconComponent size={24} />
                  </div>

                  {/* النصوص والتفاصيل */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-foreground font-medium text-lg leading-tight">
                      {feat.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* رأس القسم الرئيسي */}
          <div className="max-w-3xl mb-16 md:mb-24">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
              حلول متكاملة تناسب احتياجاتك
            </span>
            <h2 className="text-secondary-foreground font-bold mb-6 leading-tight">
              خدماتنا في نقل الاثاث في دبي
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              سواء كنت تنقل شقة في الكرامة، فيلا في نخلة جميرا، أو مكتباً في
              منطقة DIFC، فلدينا خدمة نقل الاثاث في دبي المناسبة لك. نغطي كل
              أنواع النقل السكني والتجاري بدقة متناهية، ونفهم المتطلبات الخاصة
              لكل نوع من أنواع النقل.
            </p>
          </div>

          {/* القسم الفرعي الأول: الخدمات الأساسية */}
          <div className="mb-20 md:mb-28">
            <div className="flex items-center gap-3 mb-10 border-r-4 border-primary pr-3">
              <h3 className="text-foreground font-bold text-xl md:text-2xl leading-none">
                الخدمات الأساسية
              </h3>
            </div>

            {/* شبكة البطاقات الأساسية ذات نسبة 1:1 للصور */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl flex flex-col gap-5"
                >
                  {/* حاوية الصورة الاحتياطية بنسبة 1:1 ذات طابع هندسي أنيق */}
                  <div className="aspect-4/3 w-full bg-muted/20 rounded-xl relative overflow-hidden ">
                    <Image
                      src={servicesImages[index].fileName}
                      alt={servicesImages[index].altText}
                      fill
                      className="object-cover"
                    />
                    <Button
                      size={"sm"}
                      variant={"secondary"}
                      className="absolute bottom-2 left-2"
                    >
                      اتصل بنال{service.cta}
                    </Button>
                  </div>

                  {/* المحتوى النصي */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-foreground font-medium text-xl leading-snug">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* القسم الفرعي الثاني: خدمات متخصصة واحترافية */}
          <div>
            <div className="flex items-center gap-3 mb-10 border-r-4 border-primary pr-3">
              <h3 className="text-foreground font-bold text-xl md:text-2xl leading-none">
                خدمات متخصصة واحترافية
              </h3>
            </div>

            {/* شبكة متميزة للخدمات المتخصصة بدون صور لخلق تباين بصري جمالي */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-muted/15 p-6 md:p-8 rounded-2xl flex flex-col gap-3"
                >
                  {/* علامة تبويب مميزة للخدمات الدقيقة */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full shrink-0"></span>
                    <h4 className="text-foreground font-medium text-base md:text-lg">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed pr-3.5">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* العمود الأيمن: ترويسة القسم ثابتة عند التمرير (Sticky) في الشاشات الكبيرة */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
                آلية العمل والالتزام
              </span>
              <h2 className=" font-bold mb-5 leading-tight">
                كيف نُنجز نقل أثاثك بأمان تام - ٦ خطوات واضحة
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                الشفافية هي أساس عملنا. إليك الرحلة الممنهجة التي سنخوضها معك
                خطوة بخطوة منذ اللحظة الأولى لضمان تجربة نقل خالية تماماً من
                المتاعب:
              </p>
              <Button className="mt-5">احصل على عرض سعر لنقل الأثاث</Button>
            </div>

            {/* العمود الأيسر: الخطوات المتتابعة المتصلة بخط دليل ناعم */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* الخط الرأسي الدليل */}
                <div className="absolute right-5 top-5 bottom-5 w-[2px] bg-primary/20 z-0" />

                {/* قائمة الخطوات */}
                <div className="flex flex-col gap-1">
                  {steps.map((step, index) => (
                    <div key={index} className="relative pr-14 pb-12 last:pb-0">
                      {/* عقدة رقم الخطوة (Step Node) */}
                      <div className="absolute right-0 top-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10 shadow-sm">
                        {index + 1}
                      </div>

                      {/* محتوى الخطوة */}
                      <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg md:text-xl leading-none">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* ================= الجزء الأول: جدول الأسعار والعوامل المؤثرة ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 ">
            {/* جدول الأسعار */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
                  أسعار عادلة وشفافة
                </span>
                <h2 className="font-bold mb-4 leading-tight">
                  أسعار نقل الاثاث <br className="md:hidden block" /> في دبي
                  2026
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  نحن نؤمن أن الجودة لا تعني بالضرورة أسعاراً خيالية. في شركة
                  النمره، نقدم أفضل توازن بين الخدمة الممتازة والسعر العادل.
                  الأسعار أدناه هي أسعار تقديرية تشمل الفك والتغليف والنقل
                  والتركيب:
                </p>
              </div>

              {/* حاوية الجدول لحماية العرض على شاشات الموبايل */}
              <div className="overflow-x-auto rounded-2xl bg-muted/20 p-1">
                <table className="w-full text-right border-collapse min-w-[550px]">
                  <thead>
                    <tr className="text-foreground font-black text-sm bg-muted/40">
                      <th className="py-4 px-5 rounded-r-xl">نوع الوحدة</th>
                      <th className="py-4 px-5">عدد العمال</th>
                      <th className="py-4 px-5">نوع الشاحنة</th>
                      <th className="py-4 px-5 rounded-l-xl text-left">
                        السعر التقديري (درهم)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm text-muted-foreground font-semibold">
                    {pricingData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-muted-foreground/5 last:border-none hover:bg-background/40 transition-colors duration-200"
                      >
                        <td className="py-4 px-5 text-foreground font-bold">
                          {row.unit}
                        </td>
                        <td className="py-4 px-5">{row.workers}</td>
                        <td className="py-4 px-5">{row.truck}</td>
                        <td
                          className="py-4 px-5 text-primary font-black text-left"
                          dir="ltr"
                        >
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed italic">
                *ملاحظة هامة: الأسعار قد تتأثر ببعد المسافة، توفر المصاعد،
                والحاجة لاستخدام أوناش خارجية. نحن نضمن لك أرخص سعر نقل اثاث في
                دبي مقارنة بمستوى الجودة والتأمين المقدم.
              </p>
            </div>

            {/* العوامل المحددة للتكلفة */}
            <div className="lg:col-span-5 flex flex-col justify-center bg-secondary/25 p-8 rounded-2xl self-start lg:sticky lg:top-28">
              <h3 className="text-foreground font-medium text-lg md:text-xl mb-5">
                العوامل التي تحدد تكلفة نقل الاثاث
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                الكثير من الناس يسألون:{" "}
                <strong className="text-foreground font-medium">
                  &quot;كم تكلفة نقل الاثاث في دبي؟&quot;
                </strong>
                . الحقيقة أن كل عملية نقل فريدة؛ فالمسافة بين الموقع القديم
                والجديد تلعب دوراً، وكذلك عدد الأدوار؛ فنقل أثاث من الطابق
                الأربعين يختلف عن الطابق الأول إذا كان المصعد غير متوفر أو
                ضيقاً. كمية الأثاث والقطع التي تحتاج لفك وتركيب خاص تؤثر أيضاً
                على السعر. مهما كانت التفاصيل، نحن نعطيك سعراً نهائياً قبل
                البدء.
              </p>
              <Button variant={"secondary"} className="mt-5">
                الاتصال بنا للحصول على التسعير
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* عنوان المزايا بتنسيق هادئ وأنيق */}
          <div className="max-w-3xl mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2.5 block">
              مزايا مدمجة مجانية
            </span>
            <h2 className="  font-bold leading-tight mb-3">
              ما يشمله كل نقل مع شركة النمره - بلا استثناء
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              نحن لا نترك شيئاً للصدفة. كل عملية نقل، مهما كانت صغيرة، تتضمن
              قائمة من المزايا القيمة لضمان راحتك الكاملة:
            </p>
          </div>

          {/* شبكة المزايا الـ 8 بتصميم مسطح وبسيط (Borderless & Backgroundless) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex gap-3.5 items-start">
                {/* علامة التحقق النصية الأنيقة بدون أي دوائر أو حشوة إضافية */}
                <span className="text-primary font-black text-xl leading-none select-none mt-0.5 shrink-0">
                  ✓
                </span>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-foreground font-bold text-base leading-snug">
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* العمود الأول: النصوص وقائمة المناطق المنسقة كبطاقات صغيرة */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* الترويسة الفرعية والرئيسية */}
              <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2.5 block">
                  تغطية شاملة وسريعة
                </span>
                <h2 className="font-bold mb-4 leading-tight">
                  مناطق دبي التي نغطيها لنقل الاثاث
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نحن نعرف كل ركن في هذه الإمارة الجميلة. نصل إليك في أي مكان في
                  دبي بسرعة البرق لتنفيذ عملية النقل بكل كفاءة ودقة:
                </p>
              </div>

              {/* سحابة بطاقات التغطية المنسقة */}
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {areas.map((area, idx) => (
                  <span
                    title={`نقل اثاث في ${area}`}
                    key={idx}
                    className="bg-muted/30 text-foreground/85 text-xs font-semibold py-2 px-4 rounded-full inline-block transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* العمود الثاني: عنصر حجز الصورة التخطيطي بنسبة 4:3 */}
            <div className="lg:col-span-5 w-full">
              <div className="aspect-square w-full bg-muted/40 rounded-2xl relative overflow-hidden">
                <Image
                  src={"/فريق-النمره-نقل-اثاث-دبي.jpg"}
                  alt="فريق عمل شركة النمره نقل اثاث بالزي الرسمي أمام شاحنة الشركة في دبي - شركة نقل اثاث احترافية وموثوقة في دبي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 md:gap-16 gap-10 items-center md:mb-0 mb-5">
          <div>
            <h2 className="leading-snug">
              الدليل الاجتماعي - ماذا يقول سكان دبي عن النمره؟
            </h2>
            <p className="text-muted-foreground text-sm my-5 ">
              سمعتنا هي رأسمالنا الحقيقي. نحن شركة نقل اثاث موثوقة في دبي لأننا
              نفي بوعودنا دائماً.
            </p>
            <Button variant={"outline"}>
              ⭐⭐⭐⭐⭐ شاهد تقييمات عملائنا على Google
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                src: "/google-reviews-badge.png",
                alt: "google reviews badge",
              },
              {
                src: "/excellent-service-badge.png",
                alt: "excellent service badge",
              },
              {
                src: "/trip-advior-badge.png",
                alt: "trip advisor badge",
              },
            ].map((badge, i) => (
              <div
                className="aspect-4/3 relative md:h-28 h-18 
                 overflow-hidden"
                key={i}
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <ReviewsSlider reviews={mockReviews} autoPlayInterval={3000} />
      </section>
      <FAQSection title="أسئلة شائعة عن نقل الاثاث في دبي" faqs={HomeFaqs} />
      <section className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
          <div className="flex flex-col   order-2 lg:order-1">
            {}
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-secondary-foreground">
              من نحن -{" "}
              <span className="text-primary relative inline-block">
                شركة النمره
                {/* Decorative underline */}
                <svg
                  className="absolute w-full h-2 -bottom-2 left-0 text-muted "
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 block text-secondary-foreground">
                لنقل الاثاث
              </span>
            </h2>

            {/* Text Content */}
            <div className="space-y-6 leading-relaxed text-muted-foreground">
              <p className="font-medium text-secondary-foreground mb-2 md:text-base text-sm">
                تأسست شركة النمره في قلب دبي، وتحديداً في منطقة القوز. نحن نؤمن
                أن &quot;نقل اثاث دبي&quot; ليس مجرد تحميل صناديق، بل هو فن
                يتطلب الدقة والأمانة.
              </p>

              <p className="md:text-base text-sm">
                نحن فخورون بأننا ساعدنا آلاف العائلات في بدء حياة جديدة بكل
                سعادة وراحة بال. فريقنا المدرب يضمن سلامة ممتلكاتكم في كل خطوة
                من خطوات النقل.
              </p>

              {}
              <div className="bg-muted/30 p-5 rounded-2xl mt-8 mt-5">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    موقعنا الاستراتيجي
                  </h4>
                  <p className=" text-gray-600 leading-snug md:text-base text-sm">
                    موقعنا في القوز الصناعية الثانية يجعلنا في مركز دبي، مما
                    يتيح لنا الوصول السريع لكل الأحياء وتقديم خدمة فورية.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mt-5">
                <Button>تواصل معنا الآن</Button>
                <Button variant={"secondary"}>تواصل معنا على الواتساب</Button>
              </div>
            </div>
          </div>

          {}
          {/* Image Container using Aspect Ratio */}
          <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-100 order-1 lg:order-2 rounded-2xl">
            <Image
              src="/النمره-نقل-اثاث-خدمة-شاملة-دبي.jpg"
              alt="عملية نقل اثاث متكاملة بواسطة فريق وشاحنة شركة النمره في حي سكني بدبي مع أفق المدينة - أفضل شركة نقل اثاث في دبي"
              fill
              className="object-cover"
            />

            {}
            {/* Floating Stats Card */}
            <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 bg-secondary/80 backdrop-blur-md p-4 rounded-2xl shadow-lg z-20 flex items-center gap-4">
              <div className="bg-muted w-10 h-10 flex items-center justify-center rounded-full text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">+1000</div>
                <div className="text-sm font-semibold text-muted-foreground">
                  عائلة سعيدة
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuoteSection />
      <CTASection />
    </main>
  );
}

const stats = [
  {
    num: "01",
    title: "بدون دفعة مقدمة",
    desc: "نبدأ العمل مباشرة بثقة متبادلة وبدون أي التزامات مالية مسبقة.",
  },
  {
    num: "02",
    title: "تأمين شامل",
    desc: "حماية تامة ومضمونة لجميع ممتلكاتكم طوال مراحل الفك والنقل والتركيب.",
  },
  {
    num: "03",
    title: "خدمة 7 أيام",
    desc: "متواجدون على مدار الأسبوع لتلبية متطلباتكم وتسهيل عمليات النقل في أي وقت.",
  },
];

import {
  Banknote,
  ShieldCheck,
  Zap,
  Truck,
  Award,
  HomeIcon,
} from "lucide-react";
import ReviewsSlider from "@/components/utils/ReviewsSlider";
import { FAQSection } from "@/components/utils/FaqsSection";
import { HomeFaqs } from "@/lib/FaqsData";
import QuoteSection from "@/components/utils/QuoteSection";
import CTASection from "@/components/utils/CTASection";
import { servicesImages } from "@/lib/data";
const features = [
  {
    icon: Banknote,
    title: "بدون دفعة مقدمة",
    desc: "نحن نثق في جودة عملنا وفي رضا عملائنا. لهذا السبب، اعتمدنا سياسة فريدة: تدفع فقط بعد تسليم أثاثك سالماً في منزلك الجديد والتأكد من تركيب كل شيء في مكانه. لا مخاطرة ولا ضغوط مالية قبل بدء العمل، مما يمنحك راحة بال تامة.",
  },
  {
    icon: ShieldCheck,
    title: "تأمين شامل وحقيقي",
    desc: "الحوادث واردة رغم كل الحذر، لكن معنا أنت محمي تماماً. نحن نقدم تأميناً شاملاً يغطي كل قطعة أثاث، من أصغر فنجان زجاجي إلى أثقل خزانة ملابس. هذا التأمين يبدأ من لحظة فك أول برغي حتى تركيب آخر قطعة في الموقع الجديد.",
  },
  {
    icon: Zap,
    title: "عرض سعر فوري وشفاف",
    desc: "لا داعي لانتظار أيام أو إجراء زيارات ميدانية طويلة ومعقدة. بفضل خبرتنا، يمكننا إعطاؤك عرض سعر دقيق جداً بمجرد إرسال صور أو فيديو قصير للأثاث عبر واتساب. الرد يكون خلال دقائق، والسعر الذي نعطيه هو السعر الذي تدفعه، بدون أي درهم إضافي.",
  },
  {
    icon: Truck,
    title: "شاحنات مغلقة ومكيفة بالكامل",
    desc: "الجو في دبي متقلب، والحرارة قد تصل لمستويات عالية جداً، ناهيك عن الغبار. شاحناتنا ليست مجرد وسيلة نقل، بل هي صناديق مغلقة ومكيفة مصممة خصيصاً لحماية الأثاث الحساس، والجلود، والأجهزة الإلكترونية من الحرارة والرطوبة والاحتكاك أثناء التنقل.",
  },
  {
    icon: Award,
    title: "فريق خبير يمتد لأكثر من ١٠ سنوات",
    desc: "الخبرة لا تُشترى. فريقنا يتكون من نجارين محترفين وفنيي تغليف وسائقين قضوا سنوات في التعامل مع مختلف أنواع الأثاث، من أطقم الجلوس الفاخرة إلى غرف النوم الإيطالية المعقدة. هم يعرفون كيف يتعاملون مع المصاعد الضيقة، والسلالم الطويلة، والمداخل الصعبة في أبراج دبي.",
  },
  {
    icon: HomeIcon,
    title: 'خدمة شاملة "من الباب للباب"',
    desc: "نحن لا نكتفي بنقل الكراتين. خدمتنا تبدأ بفك الأثاث، وتغليفه بأفضل المواد، ونقله، ثم إعادة تركيبه في المنزل الجديد حسب رغبتك، بل ونقوم بتنظيف المكان من مخلفات التغليف. هدفنا أن تدخل منزلك الجديد وتجده جاهزاً للسكن فوراً.",
  },
];

const coreServices = [
  {
    title: "نقل اثاث المنزل في دبي",
    desc: "نحن متخصصون في تحويل عملية نقل المنزل من كابوس إلى تجربة مريحة. نتولى ترتيب كل شيء، من الملابس إلى أدوات المطبخ الحساسة، مع وضع ملصقات واضحة على كل صندوق لضمان وضعه في الغرفة الصحيحة في منزلك الجديد.",
    cta: "نقل اثاث المنزل",
  },
  {
    title: "نقل اثاث الشقق في دبي",
    desc: "السكن في الأبراج يتطلب مهارة خاصة. فريقنا خبير في التعامل مع قوانين المباني في دبي، وحجز المصاعد، واستخدام الممرات الضيقة دون خدش الجدران أو الأثاث.",
    cta: "نقل اثاث الشقق",
  },
  {
    title: "نقل اثاث الفلل في دبي",
    desc: "الفلل غالباً ما تحتوي على قطع ضخمة وأجهزة ثقيلة ومساحات واسعة. نحن نوفر فرق عمل كبيرة وشاحنات متعددة لضمان انتهاء عملية النقل في يوم واحد مهما كان حجم الفيلا.",
    cta: "نقل اثاث الفلل",
  },
  {
    title: "نقل اثاث المكاتب في دبي",
    desc: "الوقت هو المال في عالم الأعمال. نحن ننظم نقل المكاتب بدقة عسكرية، مع التركيز على حماية أجهزة الكمبيوتر، والملفات الهامة، والأثاث المكتبي، ونقوم بالعمل في عطلات نهاية الأسبوع أو ليلاً لتقليل وقت التوقف عن العمل.",
    cta: "نقل اثاث المكاتب",
  },
  {
    title: "تغليف اثاث في دبي",
    desc: "التغليف هو سر الأمان. نستخدم خمس طبقات من الحماية أحياناً للقطع الثمينة، تشمل البلاستيك الفقاعي، والورق المقوى، والفلين، والأشرطة اللاصقة القوية، لضمان وصول كل شيء كما غادر.",
    cta: "تغليف اثاث",
  },
  {
    title: "فك وتركيب اثاث في دبي",
    desc: "لا تقلق بشأن غرف النوم المعقدة أو خزائن الملابس الكبيرة. نجارونا لديهم الأدوات والخبرة لفك وتركيب كل أنواع الأثاث العالمي والمحلي، بما في ذلك أثاث ايكيا، وهوم سنتر، والقطع المصنعة خصيصاً.",
    cta: "فك وتركيب اثاث",
  },
  {
    title: "تخزين اثاث في دبي",
    desc: "إذا لم يكن منزلك الجديد جاهزاً بعد، أو كنت مسافراً، فنحن نوفر مستودعات تخزين نظيفة، مكيفة، ومؤمنة تماماً. يمكنك استرجاع أثاثك في أي وقت بلمحة بصر.",
    cta: "تخزين اثاث",
  },
];

const specializedServices = [
  {
    title: "نقل البيانو والآلات الحساسة في دبي",
    desc: "البيانو ليس مجرد قطعة أثاث، بل هو آلة موسيقية حساسة وثقيلة جداً. نستخدم أحزمة رفع خاصة ومنصات مبطنة لنقله دون المساس بضبطه الموسيقي أو جهازه الداخلي.",
  },
  {
    title: "نقل الخزن والأجهزة الرياضية",
    desc: "القطع التي تزن مئات الكيلوجرامات تحتاج لمعدات هيدروليكية وفريق قوي. نحن مجهزون بأوناش ورافعات للتعامل مع هذه التحديات بسهولة وأمان.",
  },
  {
    title: "تركيب الستائر واللوحات والنجف",
    desc: "لا تنتهي مهمتنا بوضع الأثاث. نساعدك في تعليق الستائر بدقة، وتثبيت اللوحات على الجدران، وتركيب النجف، ليكون بيتك الجديد مكتملاً جمالياً من اليوم الأول.",
  },
  {
    title: "نقل الاثاث بين الإمارات",
    desc: "هل تنتقل من دبي إلى أبوظبي؟ أو من الشارقة إلى دبي؟ لدينا أسطول جاهز للرحلات الطويلة بين الإمارات، مع ضمان نفس مستوى الحماية والسرعة.",
  },
  {
    title: "خدمة التخلص من الاثاث القديم",
    desc: "أثناء النقل، قد تكتشف قطعاً لم تعد بحاجة إليها. نحن نساعدك في التخلص منها بطرق صديقة للبيئة أو التبرع بها للجهات الخيرية حسب رغبتك.",
  },
  {
    title: "نقل اثاث نفس اليوم في دبي",
    desc: "الحياة مليئة بالمفاجآت. إذا كنت مضطراً للانتقال فوراً بسبب ظروف طارئة، اتصل بنا. لدينا دائماً فريق طوارئ مستعد للتحرك في غضون ساعات قليلة.",
  },
];

const steps = [
  {
    num: "٠١",
    title: "الاستشارة الأولية المجانية",
    desc: "بمجرد تواصلك معنا عبر الهاتف أو واتساب، سنقوم بجمع المعلومات الأساسية. لا نكتفي بالأسئلة العامة، بل نستفسر عن أدق التفاصيل لضمان عدم حدوث أي مفاجآت يوم النقل.",
  },
  {
    num: "٠٢",
    title: "المعاينة الميدانية وعرض السعر",
    desc: "إذا كان حجم النقل كبيراً، يزورك مشرفنا مجاناً. هذه الزيارة تساعدنا في تحديد عدد العمال، نوع الشاحنات، وكمية مواد التغليف المطلوبة بدقة ١٠٠٪.",
  },
  {
    num: "٠٣",
    title: "الفك والتجهيز الاحترافي",
    desc: "في الموعد المحدد، يصل فريقنا ويبدأ فوراً بفك القطع التي تحتاج لذلك. نقوم بتغليف كل قطعة في مكانها قبل تحريكها، ونستخدم صناديق خاصة للملابس المعلقة لضمان عدم تجعدها.",
  },
  {
    num: "٠٤",
    title: "التحميل في سيارات نقل الاثاث",
    desc: "التحميل فن بحد ذاته. يتم وضع القطع الثقيلة في الأسفل، والأخف وزناً في الأعلى، مع استخدام بطانيات حماية بين القطع لمنع الاحتكاك. نستخدم شاحناتنا المغلقة التي تحمي من غبار وشمس دبي الحارقة.",
  },
  {
    num: "٠٥",
    title: "التنفيذ في الموقع الجديد",
    desc: "عند الوصول، نقوم بتفريغ الأثاث بعناية ووضعه في الغرف المخصصة له حسب توجيهاتك. يبدأ النجارون فوراً بإعادة تركيب الغرف، ونقوم بتركيب الأجهزة الكهربائية والتأكد من عملها.",
  },
  {
    num: "٠٦",
    title: "التسليم النهائي والتنظيف",
    desc: "قبل أن نغادر، نطلب منك جولة أخيرة للتأكد من أن كل شيء في مكانه وبحالة ممتازة. نقوم بجمع كل مخلفات التغليف والكراتين الفارغة لنترك منزلك نظيفاً ومرتباً. هنا فقط، يحين وقت الدفع.",
  },
];

const pricingData = [
  {
    unit: "استوديو (Studio)",
    workers: "٢ - ٣ عمال",
    truck: "شاحنة ٣ طن",
    price: "٧٠٠ - ٩٠٠",
  },
  {
    unit: "غرفة نوم وصالة",
    workers: "٣ - ٤ عمال",
    truck: "شاحنة ٣ طن",
    price: "٩٠٠ - ١,٣٠٠",
  },
  {
    unit: "غرفتان وصالة",
    workers: "٤ - ٥ عمال",
    truck: "٢ شاحنة أو أكثر",
    price: "١,٣٠٠ - ١,٨٠٠",
  },
  {
    unit: "٣ غرف نوم وصالة",
    workers: "٥ - ٦ عمال",
    truck: "أسطول مخصص",
    price: "١,٨٠٠ - ٢,٥٠٠",
  },
  {
    unit: "فيلا كاملة",
    workers: "فريق كامل",
    truck: "أسطول شاحنات",
    price: "٢,٥٠٠ - ٥,٠٠٠+",
  },
];

const inclusions = [
  {
    title: "معاينة ميدانية مجانية",
    desc: "لا نكلفك عناء التقدير العشوائي، نحن نأتي إليك لنقدم لك النصيحة الفنية الدقيقة وعرض السعر النهائي مجاناً.",
  },
  {
    title: "تأمين شامل على الاثاث",
    desc: "نحن نتحمل المسؤولية الكاملة عن سلامة منقولاتك، بدءاً من أصغر قطعة زجاجية وحتى أكبر خزائن الأثاث.",
  },
  {
    title: "أفضل خامات التغليف",
    desc: "نستخدم مواد تغليف قوية، وبلاستيك سميك مقاوم للصدمات والخدوش، لضمان وصول أثاثك كأن لم يتحرك.",
  },
  {
    title: "نجارون متخصصون",
    desc: "فريقنا يضم فنيين ونجارين محترفين لديهم الخبرة الكاملة للتعامل مع مختلف أنواع الأثاث المحلي والعالمي.",
  },
  {
    title: "سيارات مجهزة ومكيفة",
    desc: "شاحناتنا مغلقة تماماً ومكيفة لحماية الأثاث والأجهزة الحساسة من حرارة دبي العالية والرطوبة والغبار.",
  },
  {
    title: "دعم فني على مدار الساعة",
    desc: "فريق خدمة العملاء متواجد لمتابعة تفاصيل النقل معك والإجابة على أي استفسارات في أي وقت.",
  },
  {
    title: "تنظيف وترتيب بعد النقل",
    desc: "لا نترك منزلك الجديد في حالة فوضى، نقوم بإعادة تركيب الأثاث وجمع مخلفات التغليف والكراتين الفارغة بالكامل.",
  },
  {
    title: "سياسة بدون دفعة مقدمة",
    desc: "الضمان الأكبر لجودة العمل هو أنك لن تدفع درهماً واحداً إلا بعد اكتمال النقل والتركيب وتأكدك التام من سلامة الأثاث.",
  },
];

const areas = [
  "دبي مارينا",
  "جميرا",
  "البرشاء",
  "ديرة",
  "بر دبي",
  "وسط مدينة دبي",
  "الخليج التجاري",
  "أبراج بحيرات جميرا (JLT)",
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
  "مدينة دبي للانتاج",
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

const mockReviews = [
  {
    text: "تجربة نقل ممتازة ومريحة جداً مع شركة النمرة. التزام دقيق بالمواعيد وفريق عمل محترف وسريع في الفك والتركيب.",
    name: "أحمد المزروعي",
    time: "منذ أسبوع واحد",
  },
  {
    text: "أنصح بالتعامل معهم بشدة. الخدمة كانت متكاملة من الباب للباب ولم يطلبوا درهماً واحداً إلا بعد اكتمال التركيب والتنظيف.",
    name: "فاطمة الهاشمي",
    time: "منذ أسبوعين",
  },
  {
    text: "الشاحنات مغلقة ومكيفة بالفعل وحافظت على الأجهزة الإلكترونية الحساسة من الغبار والحرارة. خدمة خمس نجوم.",
    name: "طارق الخالدي",
    time: "منذ شهر واحد",
  },
];
