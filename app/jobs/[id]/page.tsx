"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { jobs } from "@/data/jobs";

export default function JobDetailsPage() {
  const { language } = useLanguage();
  const params = useParams();

  const jobId = params.id as string;

  const job = jobs.find((item) => item.id === jobId);

  // Job not found
  if (!job) {
    return (
      <main className="min-h-screen bg-slate-100">
        <Navbar />

        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-red-600">
            {language === "ta"
              ? "வேலைவாய்ப்பு கிடைக்கவில்லை"
              : "Job Not Found"}
          </h1>

          <Link
            href="/jobs"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
          >
            {language === "ta"
              ? "வேலைவாய்ப்புகளுக்கு திரும்பு"
              : "Back to Jobs"}
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
          JOB HEADER
      ========================== */}
      <section className="bg-green-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">

          <p className="text-green-100 mb-2">
            {job.company[language]}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            {job.title[language]}
          </h1>

          <p className="mt-4 text-lg">
            📍 {job.location[language]}
          </p>

        </div>
      </section>

      {/* =========================
          JOB CONTENT
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* =========================
              DESCRIPTION
          ========================== */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-2xl shadow-md p-8">

              <h2 className="text-2xl font-bold text-green-700 mb-4">
                {language === "ta"
                  ? "வேலை விவரம்"
                  : "Job Description"}
              </h2>

              <p className="text-gray-700 leading-8">
                {job.description[language]}
              </p>

            </div>

          </div>

          {/* =========================
              JOB DETAILS
          ========================== */}
          <div>

            <div className="bg-white rounded-2xl shadow-md p-6">

              <h2 className="text-xl font-bold text-green-700 mb-5">
                {language === "ta"
                  ? "வேலை விவரங்கள்"
                  : "Job Details"}
              </h2>

              {/* Salary */}
              <div className="mb-5">
                <p className="text-sm text-gray-500">
                  {language === "ta"
                    ? "சம்பளம்"
                    : "Salary"}
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  💰 {job.salary[language]}
                </p>
              </div>

              {/* Job Type */}
              <div className="mb-5">
                <p className="text-sm text-gray-500">
                  {language === "ta"
                    ? "வேலை வகை"
                    : "Job Type"}
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  💼 {job.type[language]}
                </p>
              </div>

              {/* Location */}
              <div className="mb-5">
                <p className="text-sm text-gray-500">
                  {language === "ta"
                    ? "இடம்"
                    : "Location"}
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  📍 {job.location[language]}
                </p>
              </div>

              {/* Posted Date */}
              <div className="mb-6">
                <p className="text-sm text-gray-500">
                  {language === "ta"
                    ? "வெளியிடப்பட்ட தேதி"
                    : "Posted Date"}
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  📅 {job.postedDate}
                </p>
              </div>

              {/* Contact */}
              <a
                href={`tel:${job.contact}`}
                className="
                  block
                  text-center
                  bg-green-700
                  text-white
                  px-5
                  py-3
                  rounded-lg
                  hover:bg-green-800
                  transition
                "
              >
                📞{" "}
                {language === "ta"
                  ? "தொடர்பு கொள்ள"
                  : "Contact"}
              </a>

            </div>

            {/* Back to Jobs */}
            <Link
              href="/jobs"
              className="
                block
                text-center
                mt-4
                text-green-700
                font-medium
                hover:underline
              "
            >
              ←{" "}
              {language === "ta"
                ? "அனைத்து வேலைவாய்ப்புகள்"
                : "All Jobs"}
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}