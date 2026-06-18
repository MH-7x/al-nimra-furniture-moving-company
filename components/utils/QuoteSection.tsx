import { Phone, MapPin, Clock, Send } from "lucide-react";

export default function QuoteSection() {
  const emiratesList = [
    { value: "dubai", label: "دبي (Dubai)" },
    { value: "abu-dhabi", label: "أبو ظبي (Abu Dhabi)" },
    { value: "sharjah", label: "الشارقة (Sharjah)" },
    { value: "ajman", label: "عجمان (Ajman)" },
    { value: "al-ain", label: "العين (Al Ain)" },
    { value: "ras-al-khaimah", label: "رأس الخيمة (Ras Al Khaimah)" },
    { value: "fujairah", label: "الفجيرة (Fujairah)" },
    { value: "umm-al-quwain", label: "أم القيوين (Umm Al Quwain)" },
  ];
  const movingTypes = [
    { value: "apartment", label: "شقة (Apartment)" },
    { value: "villa", label: "فيلا (Villa)" },
    { value: "house", label: "منزل (House)" },
    { value: "office", label: "مكتب (Office)" },
    { value: "inter-emirate", label: "نقل بين الإمارات (Inter-Emirate)" },
    { value: "same-day", label: "نفس اليوم (Same-Day)" },
  ];
  return (
    <section className="py-16 " dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* العمود الأول (يمين): معلومات الاتصال */}
          <div className="flex flex-col gap-8 lg:pl-6">
            {/* العناوين والترويسة */}
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2.5 block">
                احصل على عرض أسعار
              </span>
              <h2 className="text-secondary-foreground font-bold leading-tight">
                احصل على عرض أسعار مخصص لنقل الأثاث
              </h2>
            </div>

            {/* تفاصيل الاتصال (مكالمة، عنوان، توقيت) */}
            <ul className="flex flex-col gap-5 text-sm text-muted-foreground font-semibold">
              {/* الهاتف */}
              <li className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone size={16} />
                </span>
                <a
                  href="tel:+971541767605"
                  dir="ltr"
                  className="hover:text-primary transition-colors text-base text-foreground font-bold"
                >
                  054 1767605
                </a>
              </li>

              {/* العنوان */}
              <li className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={16} />
                </span>
                <address className="not-italic text-sm text-foreground/90 font-medium">
                  46JP+GHP - Al Qouz Ind.second - Al Quoz - Dubai
                </address>
              </li>

              {/* ساعات العمل */}
              <li className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Clock size={16} />
                </span>
                <time className="text-sm text-foreground/90 font-medium">
                  مفتوح 24 ساعة
                </time>
              </li>
            </ul>

            {/* بطاقة تأكيد الاستجابة */}
            <div className="md:aspect-16/6 aspect-video bg-white/20 mt-5 rounded-2xl relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.129495016946!2d55.2364375!3d25.131312499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f695ae368e38d%3A0x15509ada94a683df!2z2LTYsdmD2Kkg2KfZhNmG2YXYsdmHINmG2YLZhCDYp9ir2KfYqyDZgdmKINiv2KjZig!5e0!3m2!1sen!2s!4v1781771462610!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title="شركة النمره نقل اثاث في دبي موقع الملف التجاري على Google Maps"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* العمود الثاني (يسار): بطاقة طلب الأسعار والنموذج */}
          <div className=" bg-secondary/50 p-8 md:p-10 rounded-3xl">
            <h3 className="text-center text-lg mb-5 text-secondary-foreground">
              املأ نموذج طلب عرض الأسعار
            </h3>
            <form className="flex flex-col gap-5">
              {/* السطر الأول: نوع النقل */}
              <div className="flex flex-col gap-1.5">
                <label className="text-foreground font-bold text-xs pr-1">
                  نوع النقل
                </label>
                <select
                  name="moving-type"
                  required
                  className="bg-background text-foreground/85 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                >
                  <option value="">اختر نوع النقل...</option>
                  {movingTypes.map((emirate) => (
                    <option key={emirate.value} value={emirate.value}>
                      {emirate.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* السطر الثاني: من وإلى (حقول اختيار بالتساوي) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-foreground font-bold text-xs pr-1">
                    النقل من
                  </label>
                  <select
                    name="moving-from"
                    required
                    className="bg-background text-foreground/85 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                  >
                    <option value="">اختر مدينة البدء...</option>
                    {emiratesList.map((emirate) => (
                      <option key={emirate.value} value={emirate.value}>
                        {emirate.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-foreground font-bold text-xs pr-1">
                    النقل إلى
                  </label>
                  <select
                    name="moving-to"
                    required
                    className="bg-background text-foreground/85 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                  >
                    <option value="">اختر مدينة الوجهة...</option>
                    {emiratesList.map((emirate) => (
                      <option key={emirate.value} value={emirate.value}>
                        {emirate.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* السطر الثالث: الاسم الكامل */}
              <div className="flex flex-col gap-1.5">
                <label className="text-foreground font-bold text-xs pr-1">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="full-name"
                  required
                  placeholder="اكتب اسمك الكامل هنا..."
                  className="bg-background text-foreground/85 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* السطر الرابع: رقم الهاتف */}
              <div className="flex flex-col gap-1.5">
                <label className="text-foreground font-bold text-xs pr-1">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  dir="ltr"
                  placeholder="05x xxx xxxx"
                  className="bg-background text-foreground/85 rounded-xl px-4 py-3.5 text-sm text-right outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* زر الإرسال والطلب */}
              <button
                type="submit"
                className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-sm py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 mt-2 outline-none cursor-pointer"
              >
                <Send size={16} className="rotate-180" />
                <span>إرسال الطلب الآن</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
