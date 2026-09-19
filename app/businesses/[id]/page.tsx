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

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">

          <h1 className="text-2xl sm:text-3xl font-bold text-red-600 leading-tight">
            {language === "ta"
              ? "வணிகம் கிடைக்கவில்லை"
              : "Business Not Found"}
          </h1>

          <Link
            href="/businesses"
            className="
              inline-flex
              items-center
              justify-center
              mt-6
              bg-amber-600
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-amber-700
              active:bg-amber-800
              transition
              min-h-[48px]
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

      <section className="bg-amber-600 text-white py-8 sm:py-10 md:py-12">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* CATEGORY */}

          <p className="text-amber-100 mb-2 text-sm sm:text-base">
            {business.category[language]}
          </p>

          {/* BUSINESS NAME */}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {business.name[language]}
          </h1>

          {/* LOCATION */}

          <p className="mt-3 sm:mt-4 text-base sm:text-lg">
            📍 {business.location[language]}
          </p>

        </div>

      </section>

      {/* =========================
          BUSINESS CONTENT
      ========================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

          {/* MAIN CONTENT */}

          <div className="lg:col-span-2">

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">

              {/* IMAGE */}

              <div className="h-56 sm:h-72 md:h-96 bg-gray-200">

                <img
                  src={business.image}
                  alt={business.name[language]}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* DESCRIPTION */}

              <div className="p-5 sm:p-6 md:p-8">

                <h2 className="text-xl sm:text-2xl font-bold text-amber-600 mb-4">
                  {language === "ta"
                    ? "வணிகம் பற்றி"
                    : "About the Business"}
                </h2>

                <p className="text-gray-700 leading-8 text-base sm:text-lg">
                  {business.description[language]}
                </p>

              </div>

            </div>

          </div>

          {/* BUSINESS DETAILS */}

          <div>

            <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6">

              <h2 className="text-lg sm:text-xl font-bold text-amber-600 mb-5">
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

                <p className="font-semibold text-gray-800 mt-1 leading-6">
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

                <p className="font-semibold text-gray-800 mt-1 leading-6">
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

                <p className="font-semibold text-gray-800 mt-1 leading-6">
                  📞 {business.phone}
                </p>

              </div>

              {/* CALL BUTTON */}

              <a
                href={`tel:${business.phone}`}
                className="
                  flex
                  items-center
                  justify-center
                  w-full
                  text-center
                  bg-amber-600
                  text-white
                  px-5
                  py-3
                  rounded-lg
                  hover:bg-amber-700
                  active:bg-amber-800
                  transition
                  min-h-[48px]
                  font-medium
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
                flex
                items-center
                justify-center
                text-center
                mt-4
                min-h-[48px]
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