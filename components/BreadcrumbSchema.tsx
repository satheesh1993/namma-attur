"use client";

import { useLanguage } from "@/components/LanguageContext";

type BreadcrumbItem = {
  name: {
    ta: string;
    en: string;
  };
  url?: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

export default function BreadcrumbSchema({
  items,
}: BreadcrumbSchemaProps) {
  const { language } = useLanguage();

  const homeName =
    language === "ta" ? "நம்ம ஆத்தூர்" : "Namma Attur";

  const homeUrl = "https://www.nammaattur.in/";

  const allItems = [
    {
      name: homeName,
      url: homeUrl,
    },
    ...items.map((item) => ({
      name: item.name[language],
      url: item.url,
    })),
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => {
      const isLast = index === allItems.length - 1;

      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(isLast
          ? {}
          : {
              item: item.url,
            }),
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}