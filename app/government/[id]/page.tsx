"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { governmentServices } from "@/data/government";

export default function GovernmentDetailsPage() {
  const { language } = useLanguage();
  const params = useParams();

  const serviceId = params.id as string;

  const service = governmentServices.find(
    (item) => item.id === serviceId
  );

  // =========================
  // SERVICE NOT FOUND
  // =========================

  if (!service) {
    return (
      <main className="min-h-screen bg-slate-100">

        <Navbar />

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">

          <h1 className="text-2xl sm:text-3xl font-bold text-red-600 leading-tight">
            {language === "ta"
              ? "அரசு சேவை கிடைக்கவில்லை"
              : "Government Service Not Found"}
          </h1>

          <Link
            href="/government"
            className="
              inline-flex
              items-center
              justify-center
              mt-6
              bg-purple-700
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-purple-800
              active:bg-purple-900
              transition
              min-h-[48px]
            "
          >
            {language === "ta"
              ? "அரசு சேவைகளுக்கு திரும்பு"
              : "Back to Government Services"}
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
          SERVICE HEADER
      ========================== */}

      <section className="bg-purple-700 text-white py-8 sm:py-10 md:py-12">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* CATEGORY */}

          <p className="text-purple-200 mb-2 text-sm sm:text-base">
            {service.category[language]}
          </p>

          {/* SERVICE NAME */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {service.name[language]}
          </h1>

        </div>

      </section>

      {/* =========================
          SERVICE CONTENT
      ========================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {/* MAIN CONTENT */}

          <div className="lg:col-span-2">

            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8">

              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl">
                🏛️
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mt-5 mb-4">
                {language === "ta"
                  ? "சேவை பற்றி"
                  : "About the Service"}
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-8">
                {service.description[language]}
              </p>

            </div>

          </div>

          {/* SERVICE DETAILS */}

          <div>

            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6">

              <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-5">
                {language === "ta"
                  ? "சேவை விவரங்கள்"
                  : "Service Details"}
              </h2>

              {/* SERVICE NAME */}

              <div className="mb-5">

                <p className="text-sm text-gray-500">
                  {language === "ta"
                    ? "சேவை"
                    : "Service"}
                </p>

                <p className="font-semibold text-gray-800 mt-1 leading-6">
                  🏛️ {service.name[language]}
                </p>

              </div>

              {/* CATEGORY */}

              <div className="mb-5">

                <p className="text-sm text-gray-500">
                  {language === "ta"
                    ? "வகை"
                    : "Category"}
                </p>

                <p className="font-semibold text-gray-800 mt-1 leading-6">
                  📂 {service.category[language]}
                </p>

              </div>

              {/* DESCRIPTION */}

              <div>

                <p className="text-sm text-gray-500">
                  {language === "ta"
                    ? "விளக்கம்"
                    : "Description"}
                </p>

                <p className="font-semibold text-gray-800 mt-1 leading-7">
                  {service.description[language]}
                </p>

              </div>

            </div>

            {/* BACK LINK */}

            <Link
              href="/government"
              className="
                flex
                items-center
                justify-center
                text-center
                mt-4
                min-h-[48px]
                text-purple-700
                font-medium
                hover:underline
              "
            >
              ←{" "}
              {language === "ta"
                ? "அனைத்து அரசு சேவைகள்"
                : "All Government Services"}
            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}