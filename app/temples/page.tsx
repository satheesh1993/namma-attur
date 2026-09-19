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

      {/* =========================
          HEADER
      ========================== */}

      <section className="bg-orange-600 text-white py-8 sm:py-10 md:py-12">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {language === "ta"
              ? "ஆத்தூர் கோவில்கள்"
              : "Temples in Attur"}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-orange-100 leading-7">
            {language === "ta"
              ? "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளில் உள்ள கோவில்கள்"
              : "Temples in Attur and surrounding areas"}
          </p>

        </div>

      </section>

      {/* =========================
          TEMPLE LIST
      ========================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {temples.map((temple) => (

            <Link
              key={temple.id}
              href={`/temples/${temple.id}`}
              className="
                bg-white
                rounded-2xl
                shadow-md
                p-5
                sm:p-6
                hover:shadow-xl
                hover:-translate-y-1
                active:scale-[0.99]
                transition
                min-h-[48px]
              "
            >

              {/* ICON */}

              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                🛕
              </div>

              {/* TEMPLE NAME */}

              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-5 leading-7">
                {temple.name[language]}
              </h2>

              {/* CATEGORY */}

              <p className="text-sm text-orange-700 font-medium mt-2">
                {temple.category[language]}
              </p>

              {/* LOCATION */}

              <p className="text-sm text-gray-500 mt-2 leading-6">
                📍 {temple.location[language]}
              </p>

              {/* DESCRIPTION */}

              <p className="text-gray-600 mt-3 leading-7 text-sm sm:text-base">
                {temple.description[language]}
              </p>

              {/* VIEW DETAILS */}

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