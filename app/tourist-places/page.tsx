"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";

export default function TouristPlacesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-slate-100">
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
        <div className="grid md:grid-cols-3 gap-6">

          {/* Attur Fort */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-3">
              🏰 {t.atturFort}
            </h2>

            <p>
              {t.atturFortDescription}
            </p>
          </div>

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