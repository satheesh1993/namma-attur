import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ஆனைவாரி முட்டல் நீர்வீழ்ச்சி | Aanaivari Muttal Waterfalls",
  description:
    "ஆனைவாரி முட்டல் நீர்வீழ்ச்சியின் இயற்கை அழகு, வனப்பகுதி, நடைபாதைகள் மற்றும் புகைப்படங்களை நம்ம ஆத்தூர் இணையதளத்தில் காணுங்கள்.",
  keywords: [
    "Aanaivari Muttal",
    "Aanaivari Muttal Waterfalls",
    "ஆனைவாரி முட்டல்",
    "ஆனைவாரி முட்டல் நீர்வீழ்ச்சி",
    "Attur tourist places",
    "Attur tourism",
    "ஆத்தூர் சுற்றுலா",
  ],
  alternates: {
    canonical:
      "https://www.nammaattur.in/tourist-places/aanaivari-muttal",
  },
  openGraph: {
    title: "ஆனைவாரி முட்டல் நீர்வீழ்ச்சி | Aanaivari Muttal Waterfalls",
    description:
      "ஆனைவாரி முட்டல் நீர்வீழ்ச்சியின் இயற்கை அழகு மற்றும் புகைப்படங்களைப் பாருங்கள்.",
    url: "https://www.nammaattur.in/tourist-places/aanaivari-muttal",
    type: "article",
    siteName: "நம்ம ஆத்தூர் | Namma Attur",
    locale: "ta_IN",
    alternateLocale: ["en_IN"],
    images: [
      {
        url: "https://www.nammaattur.in/images/muttal-images/aanaivari-muttal-entrance-2.jpg",
        width: 1600,
        height: 900,
        alt: "Aanaivari Muttal Waterfalls",
      },
    ],
  },
};

export default function AanaivariMuttalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}