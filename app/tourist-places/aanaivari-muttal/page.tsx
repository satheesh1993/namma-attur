"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { useLanguage } from "@/components/LanguageContext";

export default function AanaivariMuttalPage() {
  const { language } = useLanguage();

  const isTamil = language === "ta";

  return (
    <main className="min-h-screen bg-slate-100">
      <BreadcrumbSchema
        items={[
          {
            name: {
              ta: "சுற்றுலா இடங்கள்",
              en: "Tourist Places",
            },
            url: "https://www.nammaattur.in/tourist-places",
          },
          {
            name: {
              ta: "ஆனைவாரி முட்டல் நீர்வீழ்ச்சி",
              en: "Aanaivari Muttal Waterfalls",
            },
            url: "https://www.nammaattur.in/tourist-places/aanaivari-muttal",
          },
        ]}
      />

      <Navbar />

      {/* Hero */}
      <section className="bg-green-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <p className="text-green-200 text-sm mb-3">
            {isTamil ? "சுற்றுலா இடங்கள்" : "Tourist Places"}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold">
            {isTamil
              ? "ஆனைவாரி முட்டல் நீர்வீழ்ச்சி"
              : "Aanaivari Muttal Waterfalls"}
          </h1>

          <p className="mt-4 text-lg text-green-100 max-w-3xl">
            {isTamil
              ? "பசுமையான வனப்பகுதி, இயற்கையான நடைபாதைகள் மற்றும் நீர்வீழ்ச்சியுடன் காணப்படும் அழகிய இயற்கை சுற்றுலா இடம்."
              : "A scenic natural destination featuring a waterfall, forest surroundings, and walking trails."}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* Main Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
          <Image
            src="/images/muttal-images/aanaivari-muttal-entrance-2.jpg"
            alt={
              isTamil
                ? "ஆனைவாரி முட்டல் நீர்வீழ்ச்சி நுழைவாயில்"
                : "Entrance to Aanaivari Muttal Waterfalls"
            }
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* About */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            {isTamil ? "ஆனைவாரி முட்டல் பற்றி" : "About Aanaivari Muttal"}
          </h2>

          <p className="text-slate-700 leading-8">
            {isTamil
              ? "ஆனைவாரி முட்டல் நீர்வீழ்ச்சி இயற்கை சூழல், பசுமையான வனப்பகுதி மற்றும் நடைபாதைகளைக் கொண்ட சுற்றுலா இடமாகும். இப்பகுதியின் இயற்கை காட்சிகளையும் நீர்வீழ்ச்சியையும் பார்வையாளர்கள் அனுபவிக்கலாம்."
              : "Aanaivari Muttal Waterfalls is a natural destination surrounded by greenery, forest landscapes, walking trails and a waterfall. Visitors can enjoy the surrounding natural scenery and the waterfall."}
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            {isTamil ? "புகைப்படங்கள்" : "Photo Gallery"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-md bg-white">
              <Image
                src="/images/muttal-images/aanaivari-muttal-waterfall.jpg"
                alt={
                  isTamil
                    ? "ஆனைவாரி முட்டல் நீர்வீழ்ச்சி"
                    : "Aanaivari Muttal Waterfalls"
                }
                width={1600}
                height={900}
                className="w-full h-auto object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-md bg-white">
              <Image
                src="/images/muttal-images/aanaivari-muttal-entrance.jpg"
                alt={
                  isTamil
                    ? "ஆனைவாரி முட்டல் நுழைவாயில்"
                    : "Aanaivari Muttal entrance"
                }
                width={1600}
                height={900}
                className="w-full h-auto object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-md bg-white md:col-span-2">
              <Image
                src="/images/muttal-images/aanaivari-muttal-trail.jpg"
                alt={
                  isTamil
                    ? "ஆனைவாரி முட்டல் நடைபாதை"
                    : "Aanaivari Muttal forest trail"
                }
                width={1600}
                height={900}
                className="w-full h-auto object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="mt-10">
          <Link
            href="/tourist-places"
            className="inline-flex items-center rounded-lg bg-green-700 px-5 py-3 text-white font-medium hover:bg-green-800 transition"
          >
            {isTamil ? "← சுற்றுலா இடங்களுக்குத் திரும்பு" : "← Back to Tourist Places"}
          </Link>
        </div>
      </section>
    </main>
  );
}