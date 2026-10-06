import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "சுற்றுலா இடங்கள் | Tourist Places in Attur",
  description:
    "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளில் உள்ள சுற்றுலா இடங்கள், இயற்கை அழகு மற்றும் பார்வையிட வேண்டிய இடங்களை நம்ம ஆத்தூர் இணையதளத்தில் காணுங்கள்.",
  keywords: [
    "Attur tourist places",
    "Attur tourism",
    "Tourist Places in Attur",
    "ஆத்தூர் சுற்றுலா",
    "சுற்றுலா இடங்கள்",
    "Aanaivari Muttal",
    "Aanaivari Muttal Waterfalls",
    "ஆனைவாரி முட்டல்",
  ],
  alternates: {
    canonical: "https://www.nammaattur.in/tourist-places",
  },
  openGraph: {
    title: "சுற்றுலா இடங்கள் | Tourist Places in Attur",
    description:
      "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளில் உள்ள சுற்றுலா இடங்கள் மற்றும் இயற்கை அழகுகளைப் பாருங்கள்.",
    url: "https://www.nammaattur.in/tourist-places",
    type: "website",
    siteName: "நம்ம ஆத்தூர் | Namma Attur",
    locale: "ta_IN",
    alternateLocale: ["en_IN"],
  },
};

export default function TouristPlacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}