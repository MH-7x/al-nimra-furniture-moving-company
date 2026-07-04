import MetadataTemplate from "@/lib/MetaDataTemplate";

import { BreadcrumbSchema } from "@/components/utils/BreadcrumbSchema";
import { APP_URL } from "@/lib/utils";

export const metadata = MetadataTemplate({
  meta: {
    title: "شروط الخدمة | شركة النمره لنقل الأثاث",
    desc: "اقرأ شروط الخدمة لاستخدام موقع شركة النمره لنقل الأثاث.",
  },
  canonical: "/شروط-الخدمة",
  image: {
    path: "/شركة-النمره-نقل-اثاث-في-دبي.jpg",
    alt: "شروط الخدمة | شركة النمره لنقل الأثاث",
  },
});

export default function TermsAndConditionsPage() {
  return (
    <main className="py-32 md:py-40 bg-background text-foreground" dir="rtl">
      <BreadcrumbSchema
        items={[
          { name: "الرئيسية", url: APP_URL },
          {
            name: "شروط الخدمة",
            url: `${APP_URL}/شروط-الخدمة`,
          },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 prose prose-emerald prose-lg">
        <h1 className="text-3xl md:text-5xl font-black text-secondary-foreground mb-6">
          الشروط والأحكام
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
              مرحباً بك في موقع شركة النمره لنقل الأثاث. يرجى قراءة هذه الشروط
              والأحكام بعناية قبل استخدام الموقع. باستخدامك لهذا الموقع، فإنك
              توافق على الالتزام بهذه الشروط والأحكام بالكامل. إذا كنت لا توافق
              على أي جزء منها، يرجى عدم استخدام الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              1. قبول الشروط
            </h2>
            <p className="leading-relaxed mb-4">
              بدخولك إلى موقع alnimramovers.com أو استخدامك لأي من صفحاته أو
              خدماته، فإنك تقرّ بأنك قد قرأت هذه الشروط والأحكام وفهمتها ووافقت
              على الالتزام بها. تسري هذه الشروط على جميع زوار الموقع ومستخدميه.
            </p>
            <p className="leading-relaxed">
              إذا كنت تستخدم الموقع نيابة عن شركة أو جهة، فإنك تقرّ بأنك مخوّل
              بقبول هذه الشروط نيابة عنها.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              2. قواعد استخدام الموقع
            </h2>
            <p className="leading-relaxed mb-4">
              يُتاح لك استخدام هذا الموقع للأغراض المشروعة فقط وبما يتوافق مع
              هذه الشروط. يقدّم الموقع معلومات عن خدمات شركة النمره لنقل الأثاث،
              بما في ذلك:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>نقل الأثاث المنزلي والمكتبي</li>
              <li>خدمات التغليف والتعبئة</li>
              <li>خدمات التخزين</li>
              <li>النقل التجاري</li>
              <li>فك وتركيب الأثاث</li>
            </ul>
            <p className="leading-relaxed">
              المعلومات المعروضة على الموقع هي لأغراض إعلامية عامة وقد تتغير دون
              إشعار مسبق. الأسعار والتفاصيل المذكورة على الموقع تقريبية وقد
              تختلف بناءً على تفاصيل كل طلب. للحصول على عرض سعر دقيق، يرجى
              التواصل معنا مباشرة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              3. الملكية الفكرية
            </h2>
            <p className="leading-relaxed mb-4">
              جميع المحتويات المعروضة على هذا الموقع محمية بحقوق الملكية
              الفكرية، وتشمل على سبيل المثال لا الحصر:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>النصوص والمقالات والأوصاف</li>
              <li>الصور والرسومات والتصاميم</li>
              <li>الشعارات والعلامات التجارية</li>
              <li>تصميم الموقع وهيكله البرمجي</li>
            </ul>
            <p className="leading-relaxed mb-4">
              هذه المحتويات مملوكة لشركة النمره لنقل الأثاث أو مرخّصة لها. لا
              يُسمح بنسخ أو إعادة إنتاج أو توزيع أو تعديل أي جزء من محتوى الموقع
              دون الحصول على إذن كتابي مسبق منّا.
            </p>
            <p className="leading-relaxed">
              يُسمح لك بعرض محتوى الموقع وطباعته للاستخدام الشخصي غير التجاري
              فقط.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              4. مسؤوليات المستخدم
            </h2>
            <p className="leading-relaxed mb-4">
              عند استخدامك للموقع، فإنك تتعهد بما يلي:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                تقديم معلومات صحيحة ودقيقة عند التواصل معنا عبر نموذج الاتصال
              </li>
              <li>عدم استخدام الموقع لأي غرض غير قانوني أو غير مصرّح به</li>
              <li>عدم محاولة الوصول إلى أجزاء محظورة من الموقع أو أنظمته</li>
              <li>عدم نقل أي فيروسات أو برمجيات ضارة عبر الموقع</li>
              <li>احترام حقوق الملكية الفكرية الخاصة بالموقع</li>
              <li>عدم انتحال هوية أي شخص أو جهة عند استخدام الموقع</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              5. الأنشطة المحظورة
            </h2>
            <p className="leading-relaxed mb-4">
              يُحظر عليك عند استخدام الموقع القيام بأي مما يلي:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                استخدام الموقع بطريقة تضر بأدائه أو تعطّل خدماته أو تؤثر على
                تجربة المستخدمين الآخرين
              </li>
              <li>جمع أو حصد بيانات المستخدمين أو معلوماتهم دون إذن</li>
              <li>
                استخدام برامج آلية أو روبوتات للوصول إلى الموقع أو جمع محتواه
              </li>
              <li>
                محاولة اختراق أنظمة الموقع أو الوصول غير المصرّح به إلى خوادمه
              </li>
              <li>نشر محتوى مسيء أو تشهيري أو غير قانوني عبر نماذج الاتصال</li>
              <li>استخدام الموقع للترويج لمنتجات أو خدمات منافسة</li>
              <li>إعادة تأطير الموقع أو عرضه ضمن مواقع أخرى دون إذن</li>
            </ul>
            <p className="leading-relaxed">
              أي انتهاك لهذه القواعد قد يؤدي إلى حظر وصولك إلى الموقع واتخاذ
              الإجراءات القانونية المناسبة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              6. روابط الطرف الثالث
            </h2>
            <p className="leading-relaxed mb-4">
              قد يحتوي موقعنا على روابط لمواقع إلكترونية تابعة لأطراف ثالثة. هذه
              الروابط مقدّمة لراحتك فقط ولا تعني أننا نؤيد أو نتحمل مسؤولية
              محتوى هذه المواقع أو ممارساتها.
            </p>
            <p className="leading-relaxed">
              لا نتحكم في محتوى المواقع الخارجية ولا نتحمل أي مسؤولية عن أي ضرر
              أو خسارة قد تنتج عن استخدامك لها. ننصحك بمراجعة شروط الاستخدام
              وسياسات الخصوصية لأي موقع خارجي قبل استخدامه.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              7. إخلاء المسؤولية
            </h2>
            <p className="leading-relaxed mb-4">
              يُقدّم هذا الموقع ومحتواه &quot;كما هو&quot; و&quot;حسب
              التوفر&quot; دون أي ضمانات من أي نوع، صريحة كانت أو ضمنية.
            </p>
            <p className="leading-relaxed mb-4">لا نضمن أن:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>الموقع سيعمل دون انقطاع أو أخطاء في جميع الأوقات</li>
              <li>
                المعلومات المعروضة على الموقع دقيقة أو كاملة أو محدّثة في كل
                لحظة
              </li>
              <li>الموقع خالٍ من الفيروسات أو المكونات الضارة</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              8. حدود المسؤولية
            </h2>
            <p className="leading-relaxed mb-4">
              إلى أقصى حد يسمح به القانون، لا تتحمل شركة النمره لنقل الأثاث أو
              مديروها أو موظفوها أي مسؤولية عن:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية ناتجة عن
                استخدامك للموقع أو عدم قدرتك على استخدامه
              </li>
              <li>أي خسارة في البيانات أو الأرباح ناتجة عن استخدام الموقع</li>
              <li>
                أي أضرار ناتجة عن الاعتماد على المعلومات المقدّمة على الموقع
              </li>
              <li>
                أي أضرار ناتجة عن الوصول غير المصرّح به إلى خوادمنا أو أي
                معلومات شخصية مخزّنة فيها
              </li>
            </ul>
            <p className="leading-relaxed">
              هذا الإخلاء من المسؤولية لا يؤثر على حقوقك القانونية التي لا يجوز
              استبعادها بموجب القانون المعمول به.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              9. خدمات النقل
            </h2>
            <p className="leading-relaxed">
              الشروط المتعلقة بخدمات النقل الفعلية (الأسعار، المواعيد، التأمين،
              المسؤولية عن الأضرار أثناء النقل) تخضع لاتفاقية خدمة منفصلة يتم
              الاتفاق عليها بين الطرفين قبل بدء عملية النقل. هذه الشروط والأحكام
              تحكم استخدامك للموقع الإلكتروني فقط.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              10. تعديل الشروط
            </h2>
            <p className="leading-relaxed mb-4">
              نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر أي
              تعديلات على هذه الصفحة مع تحديث تاريخ &quot;آخر تحديث&quot;.
            </p>
            <p className="leading-relaxed mb-4">
              استمرارك في استخدام الموقع بعد نشر التعديلات يعني موافقتك على
              الشروط المعدّلة. إذا كنت لا توافق على التعديلات، يرجى التوقف عن
              استخدام الموقع.
            </p>
            <p className="leading-relaxed">
              ننصحك بمراجعة هذه الصفحة بشكل دوري للاطلاع على أي تحديثات.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              11. القانون الواجب التطبيق
            </h2>
            <p className="leading-relaxed">
              تخضع هذه الشروط والأحكام وتُفسّر وفقاً لقوانين دولة الإمارات
              العربية المتحدة. أي نزاع ينشأ عن هذه الشروط أو يتعلق بها يخضع
              للاختصاص القضائي للمحاكم المختصة في دولة الإمارات العربية المتحدة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
              12. تواصل معنا
            </h2>
            <p className="leading-relaxed mb-4">
              إذا كانت لديك أي أسئلة أو استفسارات حول هذه الشروط والأحكام،
              يسعدنا تواصلك معنا:
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
