"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { jobs } from "@/data/jobs";

export default function JobsPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      {/* =========================
          JOBS HERO
      ========================== */}

      <section className="bg-green-700 text-white py-8 sm:py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {language === "ta"
              ? "ஆத்தூர் வேலைவாய்ப்புகள்"
              : "Attur Jobs"}
          </h1>

          <p className="mt-3 text-base sm:text-lg leading-7 text-green-50">
            {language === "ta"
              ? "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளில் உள்ள வேலைவாய்ப்புகளை கண்டறியுங்கள்"
              : "Find job opportunities in Attur and surrounding areas"}
          </p>

        </div>
      </section>

      {/* =========================
          JOB LIST
      ========================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

          {jobs.map((job) => (
            <div
              key={job.id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                p-5
                sm:p-6
                hover:shadow-xl
                transition
              "
            >

              {/* Job Title */}

              <h2 className="text-xl sm:text-2xl font-bold text-green-700 leading-snug">
                {job.title[language]}
              </h2>

              {/* Company */}

              <p className="text-gray-700 mt-3 font-medium leading-6">
                🏢 {job.company[language]}
              </p>

              {/* Location */}

              <p className="text-gray-600 mt-2 leading-6">
                📍 {job.location[language]}
              </p>

              {/* Description */}

              <p className="text-gray-600 mt-4 leading-7">
                {job.description[language]}
              </p>

              {/* Salary + Job Type */}

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">

                <span className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm">
                  💰 {job.salary[language]}
                </span>

                <span className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm">
                  💼 {job.type[language]}
                </span>

              </div>

              {/* Posted Date */}

              <p className="text-gray-500 text-sm mt-4 leading-6">
                📅{" "}
                {language === "ta"
                  ? "வெளியிடப்பட்ட தேதி"
                  : "Posted"}{" "}
                : {job.postedDate}
              </p>

              {/* =========================
                  ACTION BUTTONS
              ========================== */}

              <div className="flex flex-col sm:flex-row gap-3 mt-5">

                {/* View Details */}

                <Link
                  href={`/jobs/${job.id}`}
                  className="
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
                    bg-green-700
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    hover:bg-green-800
                    active:bg-green-900
                    transition
                    text-sm
                    sm:text-base
                    font-medium
                  "
                >
                  👁️{" "}
                  {language === "ta"
                    ? "விவரங்கள்"
                    : "View Details"}
                </Link>

                {/* Contact */}

                <a
                  href={`tel:${job.contact}`}
                  className="
                    w-full
                    sm:w-auto
                    inline-flex
                    items-center
                    justify-center
                    bg-gray-100
                    text-gray-800
                    px-5
                    py-3
                    rounded-lg
                    hover:bg-gray-200
                    active:bg-gray-300
                    transition
                    text-sm
                    sm:text-base
                    font-medium
                  "
                >
                  📞{" "}
                  {language === "ta"
                    ? "தொடர்பு கொள்ள"
                    : "Contact"}
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </main>
  );
}