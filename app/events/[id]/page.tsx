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

  if (!event) {
    return (
      <main className="min-h-screen bg-slate-100">
        <Navbar />

        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {language === "ta"
              ? "நிகழ்வு தகவல் கிடைக்கவில்லை"
              : "Event Not Found"}
          </h1>

          <Link
            href="/events"
            className="inline-block mt-6 bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800"
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

      {/* Header */}
      <section className="bg-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-indigo-200">
            {event.category[language]}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            {event.title[language]}
          </h1>
        </div>
      </section>

      {/* Details */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-3xl">
            📅
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-6">
            {event.title[language]}
          </h2>

          <p className="text-indigo-700 font-medium mt-2">
            {event.category[language]}
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p>
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

            <p>
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

          <p className="text-gray-700 text-lg leading-8 mt-6">
            {event.description[language]}
          </p>

          <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p className="text-sm text-gray-700">
              ⚠️{" "}
              {language === "ta"
                ? "நிகழ்வு தேதி, நேரம் மற்றும் இடம் மாறக்கூடும். பங்கேற்பதற்கு முன் நிகழ்வு ஏற்பாட்டாளர்களிடம் தகவலை சரிபார்க்கவும்."
                : "Event dates, times and locations may change. Please verify the information with the event organizer before attending."}
            </p>
          </div>

          <Link
            href="/events"
            className="inline-block mt-8 bg-indigo-700 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition"
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