"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { businesses } from "@/data/businesses";

export default function BusinessDetailsPage() {
  const { language } = useLanguage();
  const params = useParams();

  const businessId = params.id as string;

  const business = businesses.find(
    (item) => item.id === businessId
  );

  // Business not found
  if (!business) {
    return (
      <main className="min-h-screen bg-slate-100">

        <Navbar />

        <section className="max-w-6xl mx-auto px-6 py-20 text-center">

          <h1 className="text-3xl font-bold text-red-600">
            {language === "ta"
              ? "வணிகம் கிடைக்கவில்லை"
              : "Business Not Found"}
          </h1>

          <Link
            href="/businesses"
            className="
              inline-block
              mt-6
              bg-amber-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-amber-700
            "
          >
            {language === "ta"
              ? "வணிகங்களுக்கு திரும்பு"
              : "Back to Businesses"}
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
          BUSINESS HEADER
      ========================== */}
      <section className="bg-amber-600 text-white py-12">

        <div className="max-w-6xl mx-auto px-6">

          {/* CATEGORY */}
          <p className="text-amber-100 mb-2">
            {business.category[language]}
          </p>

          {/* BUSINESS NAME */}
          <h1 className="text-4xl md:text-5xl font-bold">
            {business.name[language]}
          </h1>

          {/* LOCATION */}
          <p className="mt-4 text-lg">
            📍 {business.location[language]}
          </p>

        </div>

      </section>

      {/* =========================
          BUSINESS CONTENT
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">

              {/* IMAGE */}
              <div className="h-64 md:h-96 bg-gray-200">

                <img
                  src={business.image}
                  alt={business.name[language]}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* DESCRIPTION */}
              <div className="p-6 md:p-8">

                <h2 className="text-2xl font-bold text-amber-600 mb-4">
                  {language === "ta"
                    ? "வணிகம் பற்றி"
                    : "About the Business"}
                </h2>

                <p className="text-gray-700 leading-8 text-lg">
                  {business.description[language]}
                </p>

              </div>

            </div>

          </div>

          {/* BUSINESS DETAILS */}
          <div>

            <div className="bg-white rounded-2xl shadow-md p-6">

              <h2 className="text-xl font-bold text-amber-600 mb-5">
                {language === "ta"
                  ? "வணிக விவரங்கள்"
                  : "Business Details"}
              </h2>

              {/* CATEGORY */}
              <div className="mb-5">

                <p className="text-sm text-gray-500">
                  {language === "ta"
                    ? "வகை"
                    : "Category"}
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  🏷️ {business.category[language]}
                </p>

              </div>

              {/* LOCATION */}
              <div className="mb-5">

                <p className="text-sm text-gray-500">
                  {language === "ta"
                    ? "இடம்"
                    : "Location"}
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  📍 {business.location[language]}
                </p>

              </div>

              {/* PHONE */}
              <div className="mb-6">

                <p className="text-sm text-gray-500">
                  {language === "ta"
                    ? "தொலைபேசி"
                    : "Phone"}
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  📞 {business.phone}
                </p>

              </div>

              {/* CALL BUTTON */}
              <a
                href={`tel:${business.phone}`}
                className="
                  block
                  text-center
                  bg-amber-600
                  text-white
                  px-5
                  py-3
                  rounded-lg
                  hover:bg-amber-700
                  transition
                "
              >
                📞{" "}
                {language === "ta"
                  ? "தொடர்பு கொள்ள"
                  : "Call Business"}
              </a>

            </div>

            {/* BACK LINK */}
            <Link
              href="/businesses"
              className="
                block
                text-center
                mt-4
                text-amber-700
                font-medium
                hover:underline
              "
            >
              ←{" "}
              {language === "ta"
                ? "அனைத்து வணிகங்கள்"
                : "All Businesses"}
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}