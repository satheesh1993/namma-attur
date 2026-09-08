"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";

export default function AboutAtturPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            {t.aboutAtturTitle}
          </h1>

          <p className="text-xl">
            {t.aboutAtturSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          {/* Introduction */}
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            {t.aboutIntroductionTitle}
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            {t.aboutIntroduction}
          </p>

          {/* Geography */}
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            {t.aboutGeographyTitle}
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            {t.aboutGeography}
          </p>

          {/* Important Areas */}
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            {t.aboutImportantAreasTitle}
          </h2>

          <ul className="list-disc pl-8 space-y-2 mb-8">
            <li>{t.attur}</li>
            <li>{t.narasingapuram}</li>
            <li>{t.arakalur}</li>
            <li>{t.thalaivasal}</li>
            <li>{t.gangavalli}</li>
            <li>{t.pethanaickenpalayam}</li>
          </ul>

          {/* Historical Significance */}
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            {t.aboutHistoricalTitle}
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            {t.aboutHistorical}
          </p>

          {/* Natural Resources */}
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            {t.aboutNaturalResourcesTitle}
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            {t.aboutNaturalResources}
          </p>

          {/* Tourist Places */}
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            {t.aboutTouristPlacesTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="border rounded-xl p-4 hover:bg-green-50">
              🏰 {t.atturFort}
            </div>

            <div className="border rounded-xl p-4 hover:bg-green-50">
              ⛰️ {t.kalvarayanHills}
            </div>

            <div className="border rounded-xl p-4 hover:bg-green-50">
              🌊 {t.vasistaRiver}
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}