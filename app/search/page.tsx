"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { jobs } from "@/data/jobs";
import { businesses } from "@/data/businesses";
import { posts } from "@/data/posts";

export default function SearchPage() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();

  const query = searchParams.get("q") || "";
  const searchText = query.trim().toLowerCase();

  // =========================
  // SEARCH JOBS
  // =========================

  const jobResults = jobs.filter((job) => {
    if (!searchText) return false;

    return (
      job.title.ta.toLowerCase().includes(searchText) ||
      job.title.en.toLowerCase().includes(searchText) ||
      job.company.ta.toLowerCase().includes(searchText) ||
      job.company.en.toLowerCase().includes(searchText) ||
      job.location.ta.toLowerCase().includes(searchText) ||
      job.location.en.toLowerCase().includes(searchText) ||
      job.description.ta.toLowerCase().includes(searchText) ||
      job.description.en.toLowerCase().includes(searchText)
    );
  });

  // =========================
  // SEARCH BUSINESSES
  // =========================

  const businessResults = businesses.filter((business) => {
    if (!searchText) return false;

    return (
      business.name.ta.toLowerCase().includes(searchText) ||
      business.name.en.toLowerCase().includes(searchText) ||
      business.category.ta.toLowerCase().includes(searchText) ||
      business.category.en.toLowerCase().includes(searchText) ||
      business.location.ta.toLowerCase().includes(searchText) ||
      business.location.en.toLowerCase().includes(searchText) ||
      business.description.ta.toLowerCase().includes(searchText) ||
      business.description.en.toLowerCase().includes(searchText)
    );
  });

  // =========================
  // SEARCH NEWS
  // =========================

  const postResults = posts.filter((post) => {
    if (!searchText) return false;

    return (
      post.title.ta.toLowerCase().includes(searchText) ||
      post.title.en.toLowerCase().includes(searchText) ||
      post.category.ta.toLowerCase().includes(searchText) ||
      post.category.en.toLowerCase().includes(searchText) ||
      post.content.ta.toLowerCase().includes(searchText) ||
      post.content.en.toLowerCase().includes(searchText)
    );
  });

  const totalResults =
    jobResults.length +
    businessResults.length +
    postResults.length;

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      {/* =========================
          SEARCH HEADER
      ========================== */}
      <section className="bg-green-700 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-3xl md:text-4xl font-bold">
            {language === "ta"
              ? "தேடல் முடிவுகள்"
              : "Search Results"}
          </h1>

          {query && (
            <p className="mt-3 text-green-100 text-lg">
              {language === "ta"
                ? `"${query}" க்கான தேடல் முடிவுகள்`
                : `Search results for "${query}"`}
            </p>
          )}

        </div>
      </section>

      {/* =========================
          RESULTS
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        {/* NO SEARCH QUERY */}
        {!query && (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <div className="text-5xl mb-4">
              🔍
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              {language === "ta"
                ? "எதை தேட விரும்புகிறீர்கள்?"
                : "What are you looking for?"}
            </h2>

            <p className="text-gray-600 mt-2">
              {language === "ta"
                ? "முகப்பு பக்கத்தில் உள்ள தேடல் பெட்டியை பயன்படுத்தவும்."
                : "Use the search box on the home page to search."}
            </p>

          </div>
        )}

        {/* NO RESULTS */}
        {query && totalResults === 0 && (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <div className="text-5xl mb-4">
              🔍
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              {language === "ta"
                ? "முடிவுகள் எதுவும் கிடைக்கவில்லை"
                : "No results found"}
            </h2>

            <p className="text-gray-600 mt-2">
              {language === "ta"
                ? "வேறு வார்த்தையை பயன்படுத்தி மீண்டும் முயற்சிக்கவும்."
                : "Try searching with a different keyword."}
            </p>

          </div>
        )}

        {/* RESULT COUNT */}
        {query && totalResults > 0 && (
          <p className="text-gray-600 mb-6">
            {language === "ta"
              ? `${totalResults} முடிவுகள் கிடைத்துள்ளன`
              : `${totalResults} results found`}
          </p>
        )}

        {/* =========================
            JOB RESULTS
        ========================== */}
        {jobResults.length > 0 && (
          <section className="mb-10">

            <h2 className="text-2xl font-bold text-green-700 mb-5">
              💼{" "}
              {language === "ta"
                ? "வேலைவாய்ப்புகள்"
                : "Jobs"}
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {jobResults.map((job) => (
                <article
                  key={job.id}
                  className="bg-white rounded-2xl shadow-md p-6"
                >

                  <h3 className="text-xl font-bold text-green-700">
                    {job.title[language]}
                  </h3>

                  <p className="text-gray-700 mt-2">
                    🏢 {job.company[language]}
                  </p>

                  <p className="text-gray-600 mt-1">
                    📍 {job.location[language]}
                  </p>

                  <p className="text-gray-600 mt-3 line-clamp-2">
                    {job.description[language]}
                  </p>

                  <Link
                    href={`/jobs/${job.id}`}
                    className="
                      inline-block
                      mt-4
                      bg-green-700
                      text-white
                      px-5
                      py-2
                      rounded-lg
                      hover:bg-green-800
                    "
                  >
                    {language === "ta"
                      ? "விவரங்கள்"
                      : "View Details"}
                  </Link>

                </article>
              ))}

            </div>

          </section>
        )}

        {/* =========================
            BUSINESS RESULTS
        ========================== */}
        {businessResults.length > 0 && (
          <section className="mb-10">

            <h2 className="text-2xl font-bold text-amber-600 mb-5">
              🏪{" "}
              {language === "ta"
                ? "வணிகங்கள்"
                : "Businesses"}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {businessResults.map((business) => (
                <article
                  key={business.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >

                  <div className="h-40 bg-gray-200">

                    <img
                      src={business.image}
                      alt={business.name[language]}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  <div className="p-5">

                    <span className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-lg text-sm">
                      {business.category[language]}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mt-3">
                      {business.name[language]}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      📍 {business.location[language]}
                    </p>

                    <Link
                      href={`/businesses/${business.id}`}
                      className="
                        inline-block
                        mt-4
                        bg-amber-600
                        text-white
                        px-5
                        py-2
                        rounded-lg
                        hover:bg-amber-700
                      "
                    >
                      {language === "ta"
                        ? "விவரங்கள்"
                        : "View Details"}
                    </Link>

                  </div>

                </article>
              ))}

            </div>

          </section>
        )}

        {/* =========================
            NEWS RESULTS
        ========================== */}
        {postResults.length > 0 && (
          <section className="mb-10">

            <h2 className="text-2xl font-bold text-blue-700 mb-5">
              📰{" "}
              {language === "ta"
                ? "செய்திகள்"
                : "News"}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {postResults.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >

                  <div className="h-40 bg-gray-200">

                    <img
                      src={post.image}
                      alt={post.title[language]}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  <div className="p-5">

                    <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm">
                      {post.category[language]}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mt-3">
                      {post.title[language]}
                    </h3>

                    <p className="text-gray-600 mt-2 line-clamp-2">
                      {post.content[language]}
                    </p>

                    <Link
                      href={`/news/${post.id}`}
                      className="
                        inline-block
                        mt-4
                        bg-blue-700
                        text-white
                        px-5
                        py-2
                        rounded-lg
                        hover:bg-blue-800
                      "
                    >
                      {language === "ta"
                        ? "முழு தகவல்"
                        : "Read More"}
                    </Link>

                  </div>

                </article>
              ))}

            </div>

          </section>
        )}

      </section>

      <Footer />
    </main>
  );
}