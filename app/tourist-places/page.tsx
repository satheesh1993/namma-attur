"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Link from "next/link";

export default function TouristPlacesPage() {
  const { language } = useLanguage();
  const t = translations[language];

return (
  <main className="min-h-screen bg-slate-100">

    <BreadcrumbSchema
      items={[
        {
          name: {
            ta: "சுற்றுலா இடங்கள்",
            en: "Tourist Places",
          },
          url: "https://www.nammaattur.in/tourist-places",
        },
      ]}
    />

    <Navbar />

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            {t.touristPlaces}
          </h1>

          <p className="mt-3">
            {t.touristPlacesSubtitle}
          </p>
        </div>
      </section>

      {/* Tourist Places */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Attur Fort */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-3">
              🏰 {t.atturFort}
            </h2>

            <p>
              {t.atturFortDescription}
            </p>
          </div>

          {/* Aanaivari Muttal Waterfalls */}
<Link
  href="/tourist-places/aanaivari-muttal"
  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
>
  <img
    src="/images/muttal-images/aanaivari-muttal-entrance-2.jpg"
    alt={
      language === "ta"
        ? "ஆனைவாரி முட்டல் நீர்வீழ்ச்சி"
        : "Aanaivari Muttal Waterfalls"
    }
    className="w-full h-56 object-cover"
  />

  <div className="p-6">
    <h2 className="text-2xl font-bold mb-3">
      💦{" "}
      {language === "ta"
        ? "ஆனைவாரி முட்டல் நீர்வீழ்ச்சி"
        : "Aanaivari Muttal Waterfalls"}
    </h2>

    <p>
      {language === "ta"
        ? "பசுமையான வனப்பகுதி, நடைபாதைகள் மற்றும் நீர்வீழ்ச்சியுடன் காணப்படும் அழகிய இயற்கை சுற்றுலா இடம்."
        : "A scenic natural destination featuring a waterfall, forest surroundings and walking trails."}
    </p>

    <p className="mt-4 text-green-700 font-medium">
      {language === "ta"
        ? "மேலும் பார்க்க →"
        : "View details →"}
    </p>
  </div>
</Link>

          {/* Kalvarayan Hills */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-3">
              ⛰️ {t.kalvarayanHills}
            </h2>

            <p>
              {t.kalvarayanHillsDescription}
            </p>
          </div>

          {/* Vasista River */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-3">
              🌊 {t.vasistaRiver}
            </h2>

            <p>
              {t.vasistaRiverDescription}
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}