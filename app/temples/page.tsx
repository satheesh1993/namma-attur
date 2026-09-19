"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { temples } from "@/data/temples";

export default function TemplesPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="bg-orange-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === "ta"
              ? "ஆத்தூர் கோவில்கள்"
              : "Temples in Attur"}
          </h1>

          <p className="mt-3 text-lg text-orange-100">
            {language === "ta"
              ? "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளில் உள்ள கோவில்கள்"
              : "Temples in Attur and surrounding areas"}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temples.map((temple) => (
            <Link
              key={temple.id}
              href={`/temples/${temple.id}`}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                🛕
              </div>

              <h2 className="text-xl font-bold text-gray-900 mt-5">
                {temple.name[language]}
              </h2>

              <p className="text-sm text-orange-700 font-medium mt-2">
                {temple.category[language]}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                📍 {temple.location[language]}
              </p>

              <p className="text-gray-600 mt-3 leading-7">
                {temple.description[language]}
              </p>

              <div className="mt-5 text-orange-700 font-medium">
                {language === "ta"
                  ? "மேலும் தகவல் →"
                  : "View Details →"}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}