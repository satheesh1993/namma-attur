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

  if (!service) {
    return (
      <main className="min-h-screen bg-slate-100">
        <Navbar />

        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {language === "ta"
              ? "போக்குவரத்து தகவல் கிடைக்கவில்லை"
              : "Transport Information Not Found"}
          </h1>

          <Link
            href="/transport"
            className="inline-block mt-6 bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-sky-800"
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

      {/* Header */}
      <section className="bg-sky-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sky-200">
            {service.category[language]}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            {service.name[language]}
          </h1>
        </div>
      </section>

      {/* Details */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-3xl">
            🚌
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-6">
            {service.name[language]}
          </h2>

          <p className="text-sky-700 font-medium mt-2">
            {service.category[language]}
          </p>

          <p className="text-gray-700 text-lg leading-8 mt-6">
            {service.description[language]}
          </p>

          <div className="mt-8 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p className="text-sm text-gray-700">
              ⚠️{" "}
              {language === "ta"
                ? "பேருந்து நேரங்கள் மற்றும் வழித்தட தகவல்கள் மாறக்கூடும். பயணம் செய்வதற்கு முன் அதிகாரப்பூர்வ போக்குவரத்து தகவலை சரிபார்க்கவும்."
                : "Bus timings and route information may change. Please verify official transport information before travelling."}
            </p>
          </div>

          <Link
            href="/transport"
            className="inline-block mt-8 bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-sky-800 transition"
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