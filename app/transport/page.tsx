"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { transportServices } from "@/data/transport";

export default function TransportPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-100">

      <Navbar />

      {/* =========================
          HEADER
      ========================== */}

      <section className="bg-sky-700 text-white py-8 sm:py-10 md:py-12">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {language === "ta"
              ? "பேருந்து மற்றும் போக்குவரத்து"
              : "Bus & Transport"}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-sky-100 leading-7">
            {language === "ta"
              ? "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளுக்கான போக்குவரத்து தகவல்கள்"
              : "Transport information for Attur and surrounding areas"}
          </p>

        </div>

      </section>

      {/* =========================
          TRANSPORT CARDS
      ========================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {transportServices.map((service) => (

            <Link
              key={service.id}
              href={`/transport/${service.id}`}
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

              <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center text-2xl">
                🚌
              </div>

              {/* SERVICE NAME */}

              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-5 leading-7">
                {service.name[language]}
              </h2>

              {/* CATEGORY */}

              <p className="text-sm text-sky-700 font-medium mt-2">
                {service.category[language]}
              </p>

              {/* DESCRIPTION */}

              <p className="text-gray-600 mt-3 leading-7 text-sm sm:text-base">
                {service.description[language]}
              </p>

              {/* VIEW DETAILS */}

              <div className="mt-5 text-sky-700 font-medium">
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