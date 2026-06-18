import React from "react";
import { Button } from "../ui/button";

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* البطاقة العائمة العصرية - مجهزة بتأثيرات إضاءة خلفية ناعمة */}
        <div className="relative bg-secondary-foreground text-background rounded-3xl p-8 md:p-12 lg:p-14 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* تأثيرات التوهج اللطيفة في الخلفية لعمق جمالي (دون استخدام أنيميشن) */}
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          {/* محتوى الرسالة والعنوان (7 أعمدة) */}
          <div className="lg:col-span-7 flex flex-col gap-4 relative z-10">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">
              ابدأ اليوم
            </span>
            <h2 className="text-background text-2xl md:text-4xl font-black leading-tight">
              ابدأ رحلتك الجديدة مع النمره اليوم
            </h2>
            <p className="text-background/80 text-xs md:text-sm leading-relaxed max-w-xl">
              لا تدع هم النقل يفسد عليك فرحة المنزل الجديد. فريق النمره هنا
              ليتولى كل التفاصيل بدلاً منك. سواء كنت تبحث عن ارخص شركة نقل اثاث
              في دبي أو كنت تبحث عن الخدمة الأكثر أماناً، نحن هنا.
            </p>
          </div>

          {/* أزرار الاتصال التفاعلية المنسقة (5 أعمدة - محاذية لليسار) */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4 relative z-10 lg:mr-auto lg:max-w-xs">
            <Button>واتساب - احصل على عرض سعر فوري</Button>

            <Button variant={"secondary"} dir="ltr">
              {" "}
              054 1767605 اتصل الآن
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
