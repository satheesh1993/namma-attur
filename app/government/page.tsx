"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { governmentServices } from "@/data/government";

export default function GovernmentPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      {/* Header */}
      <section className="bg-purple-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === "ta"
              ? "அரசு சேவைகள்"
              : "Government Services"}
          </h1>

          <p className="mt-3 text-lg text-purple-100">
            {language === "ta"
              ? "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளுக்கான முக்கியமான அரசு சேவைகள் மற்றும் தகவல்கள்"
              : "Important government services and information for Attur and surrounding areas"}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governmentServices.map((service) => (
            <Link
              key={service.id}
              href={`/government/${service.id}`}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                🏛️
              </div>

              <h2 className="text-xl font-bold text-gray-900 mt-5">
                {service.name[language]}
              </h2>

              <p className="text-sm text-purple-700 font-medium mt-2">
                {service.category[language]}
              </p>

              <p className="text-gray-600 mt-3 leading-7">
                {service.description[language]}
              </p>

              <div className="mt-5 text-purple-700 font-medium">
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