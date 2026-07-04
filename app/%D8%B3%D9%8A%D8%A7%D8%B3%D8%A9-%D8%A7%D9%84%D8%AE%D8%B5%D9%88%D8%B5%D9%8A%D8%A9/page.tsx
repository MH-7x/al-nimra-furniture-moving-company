import MetadataTemplate from "@/lib/MetaDataTemplate";
import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/utils/BreadcrumbSchema";
import { APP_URL } from "@/lib/utils";

export const metadata = MetadataTemplate({
  meta: {
    title: "سياسة الخصوصية | شركة النمره لنقل الأثاث",
    desc: "تعرف على سياسة الخصوصية وكيفية حماية بياناتك الشخصية في شركة النمره لنقل الأثاث.",
  },
  canonical: "/سياسة-الخصوصية",
  image: {
    path: "/شركة-النمره-نقل-اثاث-في-دبي.jpg",
    alt: "سياسة الخصوصية | شركة النمره لنقل الأثاث",
  },
});;

export default function PrivacyPolicyPage() {
  return (
    <main className="py-32 md:py-40 bg-background text-foreground" dir="rtl">
      <BreadcrumbSchema
        items={[
          { name: "الرئيسية", url: APP_URL },
          {
            name: "سياسة الخصوصية",
            url: `${APP_URL}/سياسة-الخصوصية`,
          },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 prose prose-emerald prose-lg">
        <h1 className="text-3xl md:text-5xl font-black text-secondary-foreground mb-6">
          سياسة الخصوصية
        </h1>
        <div className="text-muted-foreground mb-10 space-y-1">
          <p>
            <strong>موقع شركة النمره لنقل الأثاث</strong>
          </p>
          <p>
            <strong>الرابط:</strong> alnimramovers.com
          </p>
          <p>
            <strong>آخر تحديث:</strong> 4 يوليو 2026
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <p className="leading-relaxed">
              نحن في شركة النمره لنقل الأثاث نقدّر خصوصيتك ونلتزم بحماية بياناتك
              الشخصية. توضّح هذه السياسة كيف نجمع معلوماتك ونستخدمها ونحميها عند
              زيارتك لموقعنا الإلكتروني أو تواصلك معنا.
            </p>
            <p className="leading-relaxed mt-4">
              باستخدامك لموقعنا، فإنك توافق على الممارسات الموضّحة في هذه
              السياسة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              1. المعلومات التي نجمعها
            </h2>
            <h3 className="text-xl font-semibold mb-3">
              معلومات تقدّمها لنا مباشرة
            </h3>
            <p className="mb-3">
              عند تواصلك معنا عبر نموذج الاتصال الموجود على الموقع، قد نجمع
              المعلومات التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>اسمك الكامل</li>
              <li>رقم هاتفك</li>
              <li>عنوان بريدك الإلكتروني</li>
              <li>
                تفاصيل طلب النقل مثل الموقع الحالي والوجهة ونوع الأثاث المطلوب
                نقله
              </li>
              <li>أي معلومات إضافية تختار مشاركتها معنا في رسالتك</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">
              معلومات تُجمع تلقائياً
            </h3>
            <p className="mb-3">
              عند زيارتك لموقعنا، قد تُجمع بعض المعلومات تلقائياً من خلال أدوات
              التحليل، وتشمل:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>عنوان بروتوكول الإنترنت (IP) الخاص بك</li>
              <li>نوع المتصفح ونظام التشغيل الذي تستخدمه</li>
              <li>الصفحات التي زرتها على موقعنا ومدة بقائك فيها</li>
              <li>مصدر الزيارة (الموقع أو محرك البحث الذي وصلت منه)</li>
              <li>تاريخ ووقت الزيارة</li>
              <li>نوع الجهاز المستخدم (حاسوب، هاتف، جهاز لوحي)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              2. كيف نستخدم معلوماتك
            </h2>
            <p className="mb-3">
              نستخدم المعلومات التي نجمعها للأغراض التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>الرد على استفساراتك وطلباتك المرسلة عبر نموذج الاتصال</li>
              <li>تقديم عروض أسعار لخدمات النقل</li>
              <li>تحسين تجربتك على الموقع وتطوير محتواه</li>
              <li>
                تحليل حركة الزوار على الموقع لفهم كيفية استخدامه وتحسين أدائه
              </li>
              <li>التواصل معك بخصوص خدماتنا عند الحاجة</li>
              <li>الامتثال للمتطلبات القانونية عند الضرورة</li>
            </ul>
            <p className="leading-relaxed">
              لا نستخدم معلوماتك لأي أغراض تسويقية غير مطلوبة، ولا نرسل لك رسائل
              بريدية دون موافقتك.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              3. خدمات التحليل
            </h2>
            <p className="leading-relaxed mb-4">
              نستخدم خدمة Google Analytics لتحليل حركة الزوار على موقعنا.
              تساعدنا هذه الخدمة في فهم كيفية تفاعل الزوار مع الموقع، مثل
              الصفحات الأكثر زيارة ومتوسط مدة الجلسات.
            </p>
            <p className="leading-relaxed mb-4">
              تجمع Google Analytics بيانات مجهولة الهوية حول استخدام الموقع،
              وتخضع هذه البيانات لسياسة خصوصية Google. يمكنك الاطلاع على سياسة
              خصوصية Google من خلال زيارة: policies.google.com/privacy
            </p>
            <p className="leading-relaxed">
              يمكنك منع Google Analytics من جمع بياناتك عن طريق تثبيت إضافة
              المتصفح المخصصة لذلك من Google.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              4. خدمات الطرف الثالث
            </h2>
            <p className="leading-relaxed mb-4">
              قد يحتوي موقعنا على روابط لمواقع أو خدمات تابعة لأطراف ثالثة. لا
              نتحمل أي مسؤولية عن ممارسات الخصوصية الخاصة بهذه المواقع أو
              الخدمات. ننصحك بمراجعة سياسات الخصوصية لأي موقع خارجي تزوره عبر
              روابط من موقعنا.
            </p>
            <p className="mb-3">الخدمات الخارجية التي قد نستخدمها تشمل:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Google Analytics لتحليل الزيارات</li>
              <li>خدمات الاستضافة لتشغيل الموقع</li>
              <li>خدمات البريد الإلكتروني للتواصل معك</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              5. أمن البيانات
            </h2>
            <p className="leading-relaxed mb-4">
              نتخذ إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير
              المصرّح به أو التغيير أو الإفصاح أو الإتلاف. تشمل هذه الإجراءات:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                استخدام بروتوكول HTTPS لتشفير البيانات المنقولة بين متصفحك
                وموقعنا
              </li>
              <li>
                تقييد الوصول إلى المعلومات الشخصية على الموظفين المخوّلين فقط
              </li>
              <li>مراجعة ممارسات جمع البيانات وتخزينها بشكل دوري</li>
            </ul>
            <p className="leading-relaxed">
              مع ذلك، لا يمكن لأي طريقة نقل عبر الإنترنت أو تخزين إلكتروني أن
              تكون آمنة بنسبة مئة بالمئة. لذلك لا نستطيع ضمان أمن مطلق
              لمعلوماتك، لكننا نبذل قصارى جهدنا لحمايتها.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              6. خصوصية الأطفال
            </h2>
            <p className="leading-relaxed mb-4">
              موقعنا وخدماتنا غير موجّهة للأطفال دون سن 18 عاماً. لا نجمع
              معلومات شخصية عن قصد من الأطفال. إذا علمنا أننا جمعنا معلومات من
              طفل دون السن المذكور، سنتخذ خطوات فورية لحذف هذه المعلومات.
            </p>
            <p className="leading-relaxed">
              إذا كنت والداً أو وصياً وتعتقد أن طفلك قدّم لنا معلومات شخصية،
              يرجى التواصل معنا لنتمكن من اتخاذ الإجراء المناسب.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              7. حقوق المستخدم
            </h2>
            <p className="mb-3">يحق لك فيما يتعلق ببياناتك الشخصية:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                <strong>الاطلاع:</strong> طلب معرفة المعلومات التي نحتفظ بها عنك
              </li>
              <li>
                <strong>التصحيح:</strong> طلب تصحيح أي معلومات غير دقيقة
              </li>
              <li>
                <strong>الحذف:</strong> طلب حذف معلوماتك الشخصية من سجلاتنا
              </li>
              <li>
                <strong>الاعتراض:</strong> الاعتراض على معالجة بياناتك لأغراض
                معينة
              </li>
            </ul>
            <p className="leading-relaxed">
              لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني
              المذكور أدناه. سنرد على طلبك خلال فترة زمنية معقولة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              8. تحديثات السياسة
            </h2>
            <p className="leading-relaxed mb-4">
              قد نحدّث هذه السياسة من وقت لآخر لتعكس التغييرات في ممارساتنا أو
              لأسباب تشغيلية أو قانونية. عند إجراء تغييرات جوهرية، سنحدّث تاريخ
              &quot;آخر تحديث&quot; في أعلى هذه الصفحة.
            </p>
            <p className="leading-relaxed">
              ننصحك بمراجعة هذه السياسة بشكل دوري للاطلاع على أي تحديثات.
              استمرارك في استخدام الموقع بعد نشر التغييرات يعني موافقتك على
              السياسة المحدّثة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              9. تواصل معنا
            </h2>
            <p className="leading-relaxed mb-4">
              إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه أو حول
              كيفية تعاملنا مع بياناتك، يسعدنا تواصلك معنا:
            </p>
            <div className="bg-secondary/20 p-6 rounded-xl space-y-2">
              <p>
                <strong>شركة النمره لنقل الأثاث</strong>
              </p>
              <p>
                <strong>البريد الإلكتروني:</strong>{" "}
                <a
                  href="mailto:nimramovers@gmail.com"
                  className="text-primary hover:underline"
                >
                  nimramovers@gmail.com
                </a>
              </p>
              <p>
                <strong>الموقع الإلكتروني:</strong>{" "}
                <a
                  href="https://alnimramovers.com"
                  className="text-primary hover:underline"
                >
                  alnimramovers.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
