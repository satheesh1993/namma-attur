"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { events } from "@/data/events";

export default function EventsPage() {
  const { language } = useLanguage();

  const sortedEvents = [...events].sort(
    (a, b) =>
      new Date(a.date).getTime() -
      new Date(b.date).getTime()
  );

  return (
    <main className="min-h-screen bg-slate-100">

      <Navbar />

      {/* =========================
          HEADER
      ========================== */}

      <section className="bg-indigo-700 text-white py-8 sm:py-10 md:py-12">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {language === "ta"
              ? "ஆத்தூர் உள்ளூர் நிகழ்வுகள்"
              : "Attur Local Events"}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-indigo-100 leading-7">
            {language === "ta"
              ? "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளில் நடைபெறும் நிகழ்வுகள்"
              : "Events happening in Attur and surrounding areas"}
          </p>

        </div>

      </section>

      {/* =========================
          EVENTS
      ========================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {sortedEvents.map((event) => (

            <Link
              key={event.id}
              href={`/events/${event.id}`}
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

              <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                📅
              </div>

              {/* EVENT TITLE */}

              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-5 leading-7">
                {event.title[language]}
              </h2>

              {/* CATEGORY */}

              <p className="text-sm text-indigo-700 font-medium mt-2">
                {event.category[language]}
              </p>

              {/* DATE + LOCATION */}

              <div className="text-gray-600 mt-4 space-y-2 text-sm sm:text-base">

                <p className="leading-6">
                  📅{" "}
                  {new Date(event.date).toLocaleDateString(
                    language === "ta" ? "ta-IN" : "en-IN"
                  )}
                </p>

                <p className="leading-6">
                  📍 {event.location[language]}
                </p>

              </div>

              {/* DESCRIPTION */}

              <p className="text-gray-600 mt-3 leading-7 text-sm sm:text-base">
                {event.description[language]}
              </p>

              {/* VIEW DETAILS */}

              <div className="mt-5 text-indigo-700 font-medium">
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