export const MainSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": "https://alnimramovers.com/#business",
      name: "شركة النمره نقل اثاث في دبي",
      alternateName: [
        "Al Nimra Movers",
        "Al Nimra Furniture Moving Company",
        "شركة النمرة لنقل الأثاث",
      ],
      description:
        "شركة النمره نقل اثاث هي شركة نقل محترفة و افضل شركة نقل الاثاث في دبي ، ولديها خبرة تزيد عن 10 سنوات في خدمات نقل. نقوم بأعمال النقل السكني والتجاري في دبي وباقي إمارات الدولة، ونتعامل مع سكان الشقق وأصحاب الفلل والشركات على حد سواء",
      url: "https://alnimramovers.com/",
      logo: {
        "@id": "https://alnimramovers.com/#logo",
      },
      image: [
        "https://alnimramovers.com/فريق-النمره-نقل-اثاث-دبي.jpg",
        "https://alnimramovers.com/النمره-نقل-اثاث-خدمة-شاملة-دبي.jpg",
        "https://alnimramovers.com/شركة-النمره-نقل-اثاث-في-دبي.jpg",
      ],
      telephone: "+971541767605",
      email: "nimramovers@gmail.com",
      priceRange: "AED 700 – AED 5000+",
      currenciesAccepted: "AED",
      paymentAccepted: "Cash, Bank Transfer, Credit Card",
      foundingDate: "2015",
      slogan: "نقل آمن · تسليم مضمون · أسعار تنافسية",
      knowsLanguage: ["ar", "en"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "46JP+GHP, Al Qouz Industrial Second",
        addressLocality: "Al Quoz",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.1313125,
        longitude: 55.2364375,
      },
      hasMap:
        "https://www.google.com/maps/place/?q=place_id:ChIJjeNo41ppXz4R34OmlNqaUBU",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        {
          "@type": "City",
          name: "Dubai",
          sameAs: "https://en.wikipedia.org/wiki/Dubai",
        },
        {
          "@type": "City",
          name: "Abu Dhabi",
          sameAs: "https://en.wikipedia.org/wiki/Abu_Dhabi",
        },
        {
          "@type": "City",
          name: "Sharjah",
          sameAs: "https://en.wikipedia.org/wiki/Sharjah",
        },
        {
          "@type": "City",
          name: "Ajman",
          sameAs: "https://en.wikipedia.org/wiki/Ajman",
        },
        {
          "@type": "City",
          name: "Al Ain",
          sameAs: "https://en.wikipedia.org/wiki/Al_Ain",
        },
        {
          "@type": "City",
          name: "Ras Al Khaimah",
          sameAs: "https://en.wikipedia.org/wiki/Ras_Al_Khaimah",
        },
        {
          "@type": "City",
          name: "Umm Al Quwain",
          sameAs: "https://en.wikipedia.org/wiki/Umm_Al_Quwain",
        },
        {
          "@type": "City",
          name: "Fujairah",
          sameAs: "https://en.wikipedia.org/wiki/Fujairah",
        },
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 25.1313125,
          longitude: 55.2364375,
        },
        geoRadius: "150000",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971541767605",
          contactType: "customer service",
          availableLanguage: ["Arabic", "English"],
          areaServed: "AE",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        },
        {
          "@type": "ContactPoint",
          telephone: "+971541767605",
          contactType: "sales",
          contactOption: "TollFree",
          availableLanguage: ["Arabic", "English"],
        },
      ],
      sameAs: [
        "https://www.google.com/maps/place/?q=place_id:ChIJjeNo41ppXz4R34OmlNqaUBU",
        "https://www.facebook.com/alnimramovers",
        "https://www.instagram.com/alnimramovers",
        "https://www.linkedin.com/company/al-nimra-movers",
        "https://www.pinterest.com/alnimramovers",
        "https://twitter.com/alnimramovers",
      ],
      hasOfferCatalog: {
        "@id": "https://alnimramovers.com/#offercatalog",
      },
      makesOffer: [
        {
          "@type": "Offer",
          name: "نقل اثاث بدون دفعة مقدمة",
          description:
            "ادفع فقط بعد تسليم أثاثك سالماً في المنزل الجديد والتأكد من تركيب كل شيء.",
        },
        {
          "@type": "Offer",
          name: "تأمين شامل على جميع القطع",
          description:
            "تأمين كامل من لحظة فك أول برغي حتى تركيب آخر قطعة في الموقع الجديد.",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "1",
        bestRating: "5",
        worstRating: "1",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://alnimramovers.com/#organization",
      name: "شركة النمره نقل اثاث في دبي",
      alternateName: "Al Nimra Movers",
      url: "https://alnimramovers.com/",
      logo: {
        "@id": "https://alnimramovers.com/#logo",
      },
      image: [
        "https://alnimramovers.com/فريق-النمره-نقل-اثاث-دبي.jpg",
        "https://alnimramovers.com/النمره-نقل-اثاث-خدمة-شاملة-دبي.jpg",
        "https://alnimramovers.com/شركة-النمره-نقل-اثاث-في-دبي.jpg",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "46JP+GHP, Al Qouz Industrial Second",
        addressLocality: "Al Quoz",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      email: "nimramovers@gmail.com",
      telephone: "+971541767605",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971541767605",
        contactType: "customer service",
        availableLanguage: ["Arabic", "English"],
        areaServed: "AE",
      },
      foundingDate: "2015",
      areaServed: "AE",
      sameAs: [
        "https://www.google.com/maps/place/?q=place_id:ChIJjeNo41ppXz4R34OmlNqaUBU",
        "https://www.facebook.com/alnimramovers",
        "https://www.instagram.com/alnimramovers",
        "https://www.linkedin.com/company/al-nimra-movers",
        "https://www.pinterest.com/alnimramovers",
        "https://twitter.com/alnimramovers",
      ],
    },

    {
      "@type": "ImageObject",
      "@id": "https://alnimramovers.com/#logo",
      url: "https://alnimramovers.com/logo-1.svg",
      contentUrl: "https://alnimramovers.com/logo-1.svg",
      caption: "شركة النمره نقل اثاث في دبي - الشعار الرسمي",
      width: 512,
      height: 512,
    },

    {
      "@type": "WebSite",
      "@id": "https://alnimramovers.com/#website",
      url: "https://alnimramovers.com",
      name: "شركة النمره نقل اثاث في دبي",
      description:
        "أفضل شركة نقل اثاث في دبي - خدمة 24/7 بتأمين شامل وبدون دفعة مقدمة",
      publisher: {
        "@id": "https://alnimramovers.com/#organization",
      },
      inLanguage: "ar-AE",
    },

    {
      "@type": "WebPage",
      "@id": "https://alnimramovers.com/#webpage",
      url: "https://alnimramovers.com",
      name: "نقل اثاث دبي | شركة النمره - بدون دفعة مقدمة وتأمين شامل",
      description:
        "شركة النمره نقل اثاث هي شركة نقل محترفة و افضل شركة نقل الاثاث في دبي ، ولديها خبرة تزيد عن 10 سنوات في خدمات نقل. نقوم بأعمال النقل السكني والتجاري في دبي وباقي إمارات الدولة، ونتعامل مع سكان الشقق وأصحاب الفلل والشركات على حد سواء",
      isPartOf: {
        "@id": "https://alnimramovers.com/#website",
      },
      about: {
        "@id": "https://alnimramovers.com/#business",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://alnimramovers.com/شركة-النمره-نقل-اثاث-في-دبي.jpg",
      },
      inLanguage: "ar-AE",
    },

    {
      "@type": "OfferCatalog",
      "@id": "https://alnimramovers.com/#offercatalog",
      name: "خدمات نقل الاثاث في دبي",
      itemListElement: [
        {
          "@type": "Offer",
          name: "نقل اثاث المنزل في دبي",
          url: "https://alnimramovers.com/خدمات/نقل-اثاث-المنزل-في-دبي",
          priceCurrency: "AED",
          price: "700",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "AED",
            minPrice: "700",
            maxPrice: "5000",
            valueAddedTaxIncluded: true,
          },
          itemOffered: {
            "@type": "Service",
            "@id":
              "https://alnimramovers.com/خدمات/نقل-اثاث-المنزل-في-دبي#service",
            name: "نقل اثاث المنزل في دبي",
            serviceType: "Home Furniture Moving",
            description:
              "خدمة نقل شاملة للمنازل تشمل التغليف والفك والنقل وإعادة التركيب في الموقع الجديد بدبي.",
            areaServed: { "@type": "City", name: "Dubai" },
            provider: { "@id": "https://alnimramovers.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "نقل اثاث الشقق في دبي",
          url: "https://alnimramovers.com/خدمات/نقل-اثاث-الشقق-في-دبي",
          priceCurrency: "AED",
          price: "900",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "AED",
            minPrice: "900",
            maxPrice: "1800",
          },
          itemOffered: {
            "@type": "Service",
            name: "نقل اثاث الشقق في دبي",
            serviceType: "Apartment Moving",
            description:
              "نقل اثاث الشقق في الأبراج السكنية بدبي مع الخبرة في التعامل مع قوانين المباني وحجز المصاعد.",
            areaServed: { "@type": "City", name: "Dubai" },
            provider: { "@id": "https://alnimramovers.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "نقل اثاث الفلل في دبي",
          url: "https://alnimramovers.com/خدمات/نقل-اثاث-الفلل-في-دبي",
          priceCurrency: "AED",
          price: "2500",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "AED",
            minPrice: "2500",
            maxPrice: "5000",
          },
          itemOffered: {
            "@type": "Service",
            name: "نقل اثاث الفلل في دبي",
            serviceType: "Villa Moving",
            description:
              "نقل فلل كاملة في دبي بفرق عمل كبيرة وأسطول شاحنات لإنجاز النقل في يوم واحد.",
            areaServed: { "@type": "City", name: "Dubai" },
            provider: { "@id": "https://alnimramovers.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "نقل اثاث المكاتب في دبي",
          url: "https://alnimramovers.com/خدمات/نقل-اثاث-المكاتب-في-دبي",
          priceCurrency: "AED",
          price: "1500",
          itemOffered: {
            "@type": "Service",
            name: "نقل اثاث المكاتب في دبي",
            serviceType: "Office Moving",
            description:
              "نقل مكاتب الشركات في دبي بدقة عسكرية وحماية أجهزة الكمبيوتر والملفات، مع العمل في العطلات لتقليل توقف الأعمال.",
            areaServed: { "@type": "City", name: "Dubai" },
            provider: { "@id": "https://alnimramovers.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "تغليف اثاث في دبي",
          url: "https://alnimramovers.com/خدمات/تغليف-اثاث-في-دبي",
          priceCurrency: "AED",
          itemOffered: {
            "@type": "Service",
            name: "تغليف اثاث في دبي",
            serviceType: "Furniture Packing",
            description:
              "خدمة تغليف احترافية بخمس طبقات حماية تشمل البلاستيك الفقاعي والورق المقوى والفلين للقطع الثمينة.",
            areaServed: { "@type": "City", name: "Dubai" },
            provider: { "@id": "https://alnimramovers.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "فك وتركيب اثاث في دبي",
          url: "https://alnimramovers.com/خدمات/فك-وتركيب-اثاث-في-دبي",
          priceCurrency: "AED",
          itemOffered: {
            "@type": "Service",
            name: "فك وتركيب اثاث في دبي",
            serviceType: "Furniture Assembly and Disassembly",
            description:
              "نجارون محترفون لفك وتركيب جميع أنواع الأثاث بما في ذلك ايكيا وهوم سنتر والقطع المصنعة خصيصاً.",
            areaServed: { "@type": "City", name: "Dubai" },
            provider: { "@id": "https://alnimramovers.com/#business" },
          },
        },
        {
          "@type": "Offer",
          name: "تخزين اثاث في دبي",
          url: "https://alnimramovers.com/خدمات/تخزين-اثاث-في-دبي",
          priceCurrency: "AED",
          itemOffered: {
            "@type": "Service",
            name: "تخزين اثاث في دبي",
            serviceType: "Furniture Storage",
            description:
              "مستودعات تخزين نظيفة ومكيفة ومؤمنة في دبي مع إمكانية استرجاع الأثاث في أي وقت.",
            areaServed: { "@type": "City", name: "Dubai" },
            provider: { "@id": "https://alnimramovers.com/#business" },
          },
        },
      ],
    },
  ],
};
export const servicesItems = [
  {
    name: "نقل اثاث المنزل في دبي",
    href: "/خدمات/نقل-اثاث-المنزل-في-دبي",
  },
  {
    name: "نقل اثاث الشقق في دبي",
    href: "/خدمات/نقل-اثاث-الشقق-في-دبي",
  },
  {
    name: "نقل اثاث الفلل في دبي",
    href: "/خدمات/نقل-اثاث-الفلل-في-دبي",
  },
  {
    name: "نقل اثاث المكاتب في دبي",
    href: "/خدمات/نقل-اثاث-المكاتب-في-دبي",
  },
  {
    name: "تغليف اثاث في دبي",
    href: "/خدمات/تغليف-اثاث-في-دبي",
  },
  {
    name: "فك وتركيب اثاث في دبي",
    href: "/خدمات/فك-وتركيب-اثاث-في-دبي",
  },
  {
    name: "تخزين اثاث في دبي",
    href: "/خدمات/تخزين-اثاث-في-دبي",
  },
];

export const specializedServices = [
  {
    name: "نقل البيانو في دبي",
    href: "/خدمات",
  },
  {
    name: "نقل الخزنة والأجهزة الثقيلة في دبي",
    href: "/خدمات",
  },
  {
    name: "تركيب الستائر والسجاد في دبي",
    href: "/خدمات",
  },
  {
    name: "نقل الاثاث بين الإمارات",
    href: "/خدمات",
  },
  {
    name: "التخلص من الاثاث القديم في دبي",
    href: "/خدمات",
  },
  {
    name: "نقل اثاث نفس اليوم في دبي",
    href: "/خدمات",
  },
];

export const locationsItems = [
  {
    name: "نقل اثاث ابوظبي",
    href: "/نقل-اثاث-ابوظبي",
  },
  {
    name: "نقل اثاث الشارقة",
    href: "/نقل-أثاث-الشارقة",
  },
  {
    name: "نقل اثاث عجمان",
    href: "/نقل-اثاث-عجمان",
  },
  {
    name: "نقل اثاث راس الخيمة",
    href: "/نقل-اثاث-راس-الخيمة",
  },
  {
    name: "نقل اثاث العين",
    href: "/نقل-اثاث-العين",
  },
  {
    name: "نقل الاثاث ام القيوين",
    href: "/نقل-الاثاث-ام-القيوين",
  },
];

export const dubaiSubLocationsItems = [
  {
    name: "نقل اثاث دبي مارينا",
    href: "/نقل-اثاث-دبي-مارينا",
  },
  {
    name: "نقل اثاث وسط مدينة دبي",
    href: "/نقل-اثاث-وسط-مدينة-دبي",
  },
  {
    name: "نقل اثاث ابراج بحيرات جميرا",
    href: "/نقل-اثاث-ابراج-بحيرات-جميرا",
  },
  {
    name: "نقل اثاث الخليج التجاري",
    href: "/نقل-اثاث-الخليج-التجاري",
  },
  {
    name: "نقل اثاث قرية جميرا الدائرية",
    href: "/نقل-اثاث-قرية-جميرا-الدائرية",
  },
  {
    name: "نقل اثاث نخلة جميرا",
    href: "/نقل-اثاث-نخلة-جميرا",
  },
  {
    name: "نقل اثاث البرشاء",
    href: "/نقل-اثاث-البرشاء",
  },
  {
    name: "نقل اثاث ديرة",
    href: "/نقل-اثاث-ديرة",
  },
  {
    name: "نقل اثاث بر دبي",
    href: "/نقل-اثاث-بر-دبي",
  },
  {
    name: "نقل اثاث جميرا",
    href: "/نقل-اثاث-جميرا",
  },
  {
    name: "عرض جميع المناطق",
    href: "/مناطق-دبي",
  },
];

export const servicesImages = [
  {
    fileName: "/ser/نقل-اثاث-المنزل-دبي-النمره.jpg",
    altText: "عمال ينقلون أريكة من منزل في دبي",
  },
  {
    fileName: "/ser/نقل-اثاث-شقق-ابراج-دبي-النمره.jpg",
    altText:
      "فريق النمره نقل اثاث ينقل خزانة عبر ممر برج سكني في دبي مارينا - خدمة نقل اثاث الشقق والأبراج في دبي",
  },
  {
    fileName: "/ser/نقل-اثاث-فلل-دبي-النمره.jpg",
    altText:
      "عملية نقل اثاث فيلا فاخرة في دبي بواسطة فريق وشاحنة شركة النمره نقل اثاث - خدمة نقل فلل احترافية",
  },
  {
    fileName: "/ser/نقل-اثاث-مكاتب-شركات-دبي-النمره.jpg",
    altText:
      "فريق النمره نقل اثاث ينقل مكتب عبر بهو مبنى تجاري حديث في دبي - خدمة نقل مكاتب وشركات احترافية",
  },
  {
    fileName: "/ser/تغليف-اثاث-احترافي-دبي-النمره.jpg",
    altText: "عامل يغلف قطعة أثاث ببلاستيك فقاعي لحمايتها",
  },
  {
    fileName: "/ser/فك-تركيب-اثاث-دبي-النمره.jpg",
    altText: "نجار يركب خزانة ملابس في دبي",
  },
  {
    fileName: "/ser/تخزين-اثاث-مستودعات-دبي-النمره.jpg",
    altText: "مستودع تخزين أثاث مكيف ومرتب في دبي",
  },
  {
    fileName: "/ser/نقل-بيانو-آلات-حساسة-دبي-النمره.jpg",
    altText:
      "فريق النمره المتخصص ينقل بيانو كبير بأحزمة رفع خاصة ومنصات مبطنة في دبي - خدمة نقل بيانو وآلات حساسة",
  },
  {
    fileName: "/ser/نقل-خزن-اجهزة-رياضية-ثقيلة-دبي-النمره.jpg",
    altText:
      "عمال شركة النمره ينقلون خزنة ثقيلة باستخدام رافعة هيدروليكية احترافية في دبي - خدمة نقل أجهزة ثقيلة وخزن",
  },
  {
    fileName: "/ser/تركيب-ستائر-نجف-لوحات-دبي-النمره.jpg",
    altText:
      "عامل شركة النمره يركب نجفة كريستال في شقة بدبي مع ستائر ولوحات مركبة - خدمة تركيب ستائر ولوحات ونجف",
  },
  {
    fileName: "/ser/نقل-اثاث-بين-الامارات-دبي-ابوظبي-النمره.jpg",
    altText:
      "شاحنة النمره نقل اثاث على طريق الإمارات السريع مع أفق دبي في الخلفية - خدمة نقل اثاث بين إمارات الدولة",
  },
  {
    fileName: "/ser/تخلص-اثاث-قديم-اعادة-تدوير-دبي-النمره.jpg",
    altText:
      "عمال النمره يحملون أثاث قديم بطريقة منظمة للتخلص منه بشكل صديق للبيئة في دبي - خدمة التخلص من الاثاث القديم",
  },
  {
    fileName: "/ser/نقل-اثاث-نفس-اليوم-طوارئ-دبي-النمره.jpg",
    altText:
      "فريق طوارئ النمره نقل اثاث يحمّل شاحنة بسرعة أمام مبنى في دبي مع برج خليفة في الخلفية - خدمة نقل اثاث نفس اليوم",
  },
];
