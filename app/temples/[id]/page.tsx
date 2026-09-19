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

  // =========================
  // TEMPLE NOT FOUND
  // =========================

  if (!temple) {
    return (
      <main className="min-h-screen bg-slate-100">

        <Navbar />

        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {language === "ta"
              ? "கோவில் தகவல் கிடைக்கவில்லை"
              : "Temple Not Found"}
          </h1>

          <Link
            href="/temples"
            className="
              inline-flex
              items-center
              justify-center
              mt-6
              bg-orange-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-orange-700
              active:bg-orange-800
              transition
              min-h-[48px]
            "
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

      {/* =========================
          TEMPLE HEADER
      ========================== */}

      <section className="bg-orange-600 text-white py-8 sm:py-10 md:py-12">

        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* CATEGORY */}

          <p className="text-orange-100 text-sm sm:text-base">
            {temple.category[language]}
          </p>

          {/* TEMPLE NAME */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 leading-tight">
            {temple.name[language]}
          </h1>

          {/* LOCATION */}

          <p className="mt-3 text-sm sm:text-base">
            📍 {temple.location[language]}
          </p>

        </div>

      </section>

      {/* =========================
          TEMPLE CONTENT
      ========================== */}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-8">

          {/* ICON */}

          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-3xl">
            🛕
          </div>

          {/* NAME */}

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-5 sm:mt-6 leading-7">
            {temple.name[language]}
          </h2>

          {/* CATEGORY */}

          <p className="text-orange-700 font-medium mt-2">
            {temple.category[language]}
          </p>

          {/* LOCATION */}

          <p className="text-gray-600 mt-2 leading-6">
            📍 {temple.location[language]}
          </p>

          {/* DESCRIPTION */}

          <p className="text-gray-700 text-base sm:text-lg leading-8 mt-5 sm:mt-6">
            {temple.description[language]}
          </p>

          {/* VERIFICATION WARNING */}

          <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-yellow-50 border border-yellow-200 rounded-xl">

            <p className="text-sm sm:text-base text-gray-700 leading-6">
              ⚠️{" "}
              {language === "ta"
                ? "கோவில் நேரம், முகவரி மற்றும் பிற விவரங்களை வெளியிடுவதற்கு முன் சரிபார்க்கவும்."
                : "Please verify temple timings, address and other details before publishing them."}
            </p>

          </div>

          {/* BACK BUTTON */}

          <Link
            href="/temples"
            className="
              flex
              items-center
              justify-center
              w-full
              sm:w-fit
              mt-6
              sm:mt-8
              bg-orange-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-orange-700
              active:bg-orange-800
              transition
              min-h-[48px]
              text-center
            "
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