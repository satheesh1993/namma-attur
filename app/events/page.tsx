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

      {/* Header */}
      <section className="bg-indigo-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === "ta"
              ? "ஆத்தூர் உள்ளூர் நிகழ்வுகள்"
              : "Attur Local Events"}
          </h1>

          <p className="mt-3 text-lg text-indigo-100">
            {language === "ta"
              ? "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளில் நடைபெறும் நிகழ்வுகள்"
              : "Events happening in Attur and surrounding areas"}
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedEvents.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
                📅
              </div>

              <h2 className="text-xl font-bold text-gray-900 mt-5">
                {event.title[language]}
              </h2>

              <p className="text-sm text-indigo-700 font-medium mt-2">
                {event.category[language]}
              </p>

              <div className="text-gray-600 mt-4 space-y-2">
                <p>
                  📅{" "}
                  {new Date(event.date).toLocaleDateString(
                    language === "ta" ? "ta-IN" : "en-IN"
                  )}
                </p>

                <p>
                  📍 {event.location[language]}
                </p>
              </div>

              <p className="text-gray-600 mt-3 leading-7">
                {event.description[language]}
              </p>

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