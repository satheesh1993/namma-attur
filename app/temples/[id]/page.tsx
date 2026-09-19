"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { temples } from "@/data/temples";

export default function TempleDetailsPage() {
  const { language } = useLanguage();
  const params = useParams();

  const temple = temples.find(
    (item) => item.id === params.id
  );

  if (!temple) {
    return (
      <main className="min-h-screen bg-slate-100">
        <Navbar />

        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {language === "ta"
              ? "கோவில் தகவல் கிடைக்கவில்லை"
              : "Temple Not Found"}
          </h1>

          <Link
            href="/temples"
            className="inline-block mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
          >
            {language === "ta"
              ? "கோவில்கள் பக்கத்திற்கு திரும்பு"
              : "Back to Temples"}
          </Link>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="bg-orange-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-orange-100">
            {temple.category[language]}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            {temple.name[language]}
          </h1>

          <p className="mt-3">
            📍 {temple.location[language]}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-3xl">
            🛕
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-6">
            {temple.name[language]}
          </h2>

          <p className="text-orange-700 font-medium mt-2">
            {temple.category[language]}
          </p>

          <p className="text-gray-600 mt-2">
            📍 {temple.location[language]}
          </p>

          <p className="text-gray-700 text-lg leading-8 mt-6">
            {temple.description[language]}
          </p>

          <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p className="text-sm text-gray-700">
              ⚠️{" "}
              {language === "ta"
                ? "கோவில் நேரம், முகவரி மற்றும் பிற விவரங்களை வெளியிடுவதற்கு முன் சரிபார்க்கவும்."
                : "Please verify temple timings, address and other details before publishing them."}
            </p>
          </div>

          <Link
            href="/temples"
            className="inline-block mt-8 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
          >
            ←{" "}
            {language === "ta"
              ? "கோவில்கள் பக்கத்திற்கு திரும்பு"
              : "Back to Temples"}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}