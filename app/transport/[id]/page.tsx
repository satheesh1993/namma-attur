"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { transportServices } from "@/data/transport";

export default function TransportDetailsPage() {
  const { language } = useLanguage();
  const params = useParams();

  const service = transportServices.find(
    (item) => item.id === params.id
  );

  // =========================
  // TRANSPORT NOT FOUND
  // =========================

  if (!service) {
    return (
      <main className="min-h-screen bg-slate-100">

        <Navbar />

        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {language === "ta"
              ? "போக்குவரத்து தகவல் கிடைக்கவில்லை"
              : "Transport Information Not Found"}
          </h1>

          <Link
            href="/transport"
            className="
              inline-flex
              items-center
              justify-center
              mt-6
              bg-sky-700
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-sky-800
              active:bg-sky-900
              transition
              min-h-[48px]
            "
          >
            {language === "ta"
              ? "போக்குவரத்து பக்கத்திற்கு திரும்பு"
              : "Back to Transport"}
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
          HEADER
      ========================== */}

      <section className="bg-sky-700 text-white py-8 sm:py-10 md:py-12">

        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* CATEGORY */}

          <p className="text-sky-200 text-sm sm:text-base">
            {service.category[language]}
          </p>

          {/* SERVICE NAME */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 leading-tight">
            {service.name[language]}
          </h1>

        </div>

      </section>

      {/* =========================
          DETAILS
      ========================== */}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-8">

          {/* ICON */}

          <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-3xl">
            🚌
          </div>

          {/* SERVICE NAME */}

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-5 sm:mt-6 leading-7">
            {service.name[language]}
          </h2>

          {/* CATEGORY */}

          <p className="text-sky-700 font-medium mt-2">
            {service.category[language]}
          </p>

          {/* DESCRIPTION */}

          <p className="text-gray-700 text-base sm:text-lg leading-8 mt-5 sm:mt-6">
            {service.description[language]}
          </p>

          {/* VERIFICATION WARNING */}

          <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-yellow-50 border border-yellow-200 rounded-xl">

            <p className="text-sm sm:text-base text-gray-700 leading-6">
              ⚠️{" "}
              {language === "ta"
                ? "பேருந்து நேரங்கள் மற்றும் வழித்தட தகவல்கள் மாறக்கூடும். பயணம் செய்வதற்கு முன் அதிகாரப்பூர்வ போக்குவரத்து தகவலை சரிபார்க்கவும்."
                : "Bus timings and route information may change. Please verify official transport information before travelling."}
            </p>

          </div>

          {/* BACK BUTTON */}

          <Link
            href="/transport"
            className="
              flex
              items-center
              justify-center
              w-full
              sm:w-fit
              mt-6
              sm:mt-8
              bg-sky-700
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-sky-800
              active:bg-sky-900
              transition
              min-h-[48px]
              text-center
            "
          >
            ←{" "}
            {language === "ta"
              ? "போக்குவரத்து பக்கத்திற்கு திரும்பு"
              : "Back to Transport"}
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}