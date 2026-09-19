"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { events } from "@/data/events";

export default function EventDetailsPage() {
  const { language } = useLanguage();
  const params = useParams();

  const event = events.find(
    (item) => item.id === params.id
  );

  // =========================
  // EVENT NOT FOUND
  // =========================

  if (!event) {
    return (
      <main className="min-h-screen bg-slate-100">

        <Navbar />

        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {language === "ta"
              ? "நிகழ்வு தகவல் கிடைக்கவில்லை"
              : "Event Not Found"}
          </h1>

          <Link
            href="/events"
            className="
              inline-flex
              items-center
              justify-center
              mt-6
              bg-indigo-700
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-indigo-800
              active:bg-indigo-900
              transition
              min-h-[48px]
            "
          >
            {language === "ta"
              ? "நிகழ்வுகள் பக்கத்திற்கு திரும்பு"
              : "Back to Events"}
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
          EVENT HEADER
      ========================== */}

      <section className="bg-indigo-700 text-white py-8 sm:py-10 md:py-12">

        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* CATEGORY */}

          <p className="text-indigo-200 text-sm sm:text-base">
            {event.category[language]}
          </p>

          {/* EVENT TITLE */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 leading-tight">
            {event.title[language]}
          </h1>

        </div>

      </section>

      {/* =========================
          EVENT DETAILS
      ========================== */}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-8">

          {/* ICON */}

          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-3xl">
            📅
          </div>

          {/* EVENT TITLE */}

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-5 sm:mt-6 leading-7">
            {event.title[language]}
          </h2>

          {/* CATEGORY */}

          <p className="text-indigo-700 font-medium mt-2">
            {event.category[language]}
          </p>

          {/* DATE + LOCATION */}

          <div className="mt-5 sm:mt-6 space-y-3 text-gray-700">

            <p className="text-sm sm:text-base leading-7">
              📅{" "}
              <strong>
                {language === "ta"
                  ? "தேதி"
                  : "Date"}
                :
              </strong>{" "}
              {new Date(event.date).toLocaleDateString(
                language === "ta" ? "ta-IN" : "en-IN"
              )}
            </p>

            <p className="text-sm sm:text-base leading-7">
              📍{" "}
              <strong>
                {language === "ta"
                  ? "இடம்"
                  : "Location"}
                :
              </strong>{" "}
              {event.location[language]}
            </p>

          </div>

          {/* DESCRIPTION */}

          <p className="text-gray-700 text-base sm:text-lg leading-8 mt-5 sm:mt-6">
            {event.description[language]}
          </p>

          {/* VERIFICATION WARNING */}

          <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-yellow-50 border border-yellow-200 rounded-xl">

            <p className="text-sm sm:text-base text-gray-700 leading-6">
              ⚠️{" "}
              {language === "ta"
                ? "நிகழ்வு தேதி, நேரம் மற்றும் இடம் மாறக்கூடும். பங்கேற்பதற்கு முன் நிகழ்வு ஏற்பாட்டாளர்களிடம் தகவலை சரிபார்க்கவும்."
                : "Event dates, times and locations may change. Please verify the information with the event organizer before attending."}
            </p>

          </div>

          {/* BACK BUTTON */}

          <Link
            href="/events"
            className="
              flex
              items-center
              justify-center
              w-full
              sm:w-fit
              mt-6
              sm:mt-8
              bg-indigo-700
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-indigo-800
              active:bg-indigo-900
              transition
              min-h-[48px]
              text-center
            "
          >
            ←{" "}
            {language === "ta"
              ? "நிகழ்வுகள் பக்கத்திற்கு திரும்பு"
              : "Back to Events"}
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}