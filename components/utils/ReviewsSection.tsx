import Image from "next/image";
import ReviewsSlider from "./ReviewsSlider";
import { Button } from "../ui/button";

export function ReviewsSection() {
  return (
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
  );
}

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
