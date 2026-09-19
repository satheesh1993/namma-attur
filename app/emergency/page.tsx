"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { emergencyServices } from "@/data/emergency";

export default function EmergencyPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="bg-red-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === "ta"
              ? "அவசர உதவி"
              : "Emergency Services"}
          </h1>

          <p className="mt-3 text-lg text-red-100">
            {language === "ta"
              ? "அவசர காலங்களில் தேவையான முக்கியமான தொடர்பு தகவல்கள்"
              : "Important emergency contact information"}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
          <p className="text-red-800 font-medium">
            ⚠️{" "}
            {language === "ta"
              ? "அவசரநிலையில் உடனடியாக சம்பந்தப்பட்ட அவசர சேவையை தொடர்பு கொள்ளவும்."
              : "In an emergency, contact the appropriate emergency service immediately."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-2xl">
                🚑
              </div>

              <h2 className="text-xl font-bold text-gray-900 mt-5">
                {service.name[language]}
              </h2>

              <p className="text-sm text-red-700 font-medium mt-2">
                {service.category[language]}
              </p>

              <p className="text-gray-600 mt-3 leading-7">
                {service.description[language]}
              </p>

              <a
                href={`tel:${service.phone}`}
                className="block mt-5 bg-red-700 text-white text-center px-5 py-3 rounded-lg font-semibold hover:bg-red-800 transition"
              >
                📞 {language === "ta" ? "அழைக்க" : "Call"}{" "}
                {service.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            ←{" "}
            {language === "ta"
              ? "முகப்பு பக்கத்திற்கு திரும்பு"
              : "Back to Home"}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}