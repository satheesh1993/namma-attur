"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import { jobs } from "@/data/jobs";
import { businesses } from "@/data/businesses";
import { posts } from "@/data/posts";
import { governmentServices } from "@/data/government";
import { temples } from "@/data/temples";
import { emergencyServices } from "@/data/emergency";
import { transportServices } from "@/data/transport";
import { events } from "@/data/events";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const { language } = useLanguage();

  const query = searchParams.get("q")?.trim() || "";
  const searchText = query.toLowerCase();

  // =========================
  // SEARCH HELPER
  // =========================

  const matchesSearch = (text: string) => {
    return text.toLowerCase().includes(searchText);
  };

  const getScore = (text: string) => {
    const value = text.toLowerCase();

    if (value === searchText) {
      return 3;
    }

    if (value.startsWith(searchText)) {
      return 2;
    }

    if (value.includes(searchText)) {
      return 1;
    }

    return 0;
  };

  // =========================
  // JOBS
  // =========================

  const jobResults = jobs
    .filter((job) => {
      const text = [
        job.title.ta,
        job.title.en,
        job.company.ta,
        job.company.en,
        job.location.ta,
        job.location.en,
        job.description.ta,
        job.description.en,
      ].join(" ");

      return matchesSearch(text);
    })
    .sort((a, b) => {
      const aText = [
        a.title[language],
        a.company[language],
        a.location[language],
      ].join(" ");

      const bText = [
        b.title[language],
        b.company[language],
        b.location[language],
      ].join(" ");

      return getScore(bText) - getScore(aText);
    });

  // =========================
  // BUSINESSES
  // =========================

  const businessResults = businesses
    .filter((business) => {
      const text = [
        business.name.ta,
        business.name.en,
        business.category.ta,
        business.category.en,
        business.location.ta,
        business.location.en,
        business.description.ta,
        business.description.en,
      ].join(" ");

      return matchesSearch(text);
    })
    .sort((a, b) => {
      const aText = [
        a.name[language],
        a.category[language],
        a.location[language],
      ].join(" ");

      const bText = [
        b.name[language],
        b.category[language],
        b.location[language],
      ].join(" ");

      return getScore(bText) - getScore(aText);
    });

  // =========================
  // NEWS
  // =========================

  const newsResults = posts
    .filter((post) => {
      const text = [
        post.title.ta,
        post.title.en,
        post.category.ta,
        post.category.en,
        post.content.ta,
        post.content.en,
      ].join(" ");

      return matchesSearch(text);
    })
    .sort((a, b) => {
      const aText = [
        a.title[language],
        a.category[language],
      ].join(" ");

      const bText = [
        b.title[language],
        b.category[language],
      ].join(" ");

      return getScore(bText) - getScore(aText);
    });

  // =========================
  // GOVERNMENT
  // =========================

  const governmentResults = governmentServices
    .filter((service) => {
      const text = [
        service.name.ta,
        service.name.en,
        service.category.ta,
        service.category.en,
        service.description.ta,
        service.description.en,
      ].join(" ");

      return matchesSearch(text);
    })
    .sort((a, b) => {
      const aText = [
        a.name[language],
        a.category[language],
      ].join(" ");

      const bText = [
        b.name[language],
        b.category[language],
      ].join(" ");

      return getScore(bText) - getScore(aText);
    });

  // =========================
  // TEMPLES
  // =========================

  const templeResults = temples
    .filter((temple) => {
      const text = [
        temple.name.ta,
        temple.name.en,
        temple.location.ta,
        temple.location.en,
        temple.category.ta,
        temple.category.en,
        temple.description.ta,
        temple.description.en,
      ].join(" ");

      return matchesSearch(text);
    })
    .sort((a, b) => {
      const aText = [
        a.name[language],
        a.category[language],
        a.location[language],
      ].join(" ");

      const bText = [
        b.name[language],
        b.category[language],
        b.location[language],
      ].join(" ");

      return getScore(bText) - getScore(aText);
    });

  // =========================
  // EMERGENCY
  // =========================

  const emergencyResults = emergencyServices
    .filter((service) => {
      const text = [
        service.name.ta,
        service.name.en,
        service.category.ta,
        service.category.en,
        service.description.ta,
        service.description.en,
        service.phone,
      ].join(" ");

      return matchesSearch(text);
    })
    .sort((a, b) => {
      const aText = [
        a.name[language],
        a.category[language],
        a.phone,
      ].join(" ");

      const bText = [
        b.name[language],
        b.category[language],
        b.phone,
      ].join(" ");

      return getScore(bText) - getScore(aText);
    });

  // =========================
  // TRANSPORT
  // =========================

  const transportResults = transportServices
    .filter((service) => {
      const text = [
        service.name.ta,
        service.name.en,
        service.category.ta,
        service.category.en,
        service.description.ta,
        service.description.en,
      ].join(" ");

      return matchesSearch(text);
    })
    .sort((a, b) => {
      const aText = [
        a.name[language],
        a.category[language],
      ].join(" ");

      const bText = [
        b.name[language],
        b.category[language],
      ].join(" ");

      return getScore(bText) - getScore(aText);
    });

  // =========================
  // EVENTS
  // =========================

  const eventResults = events
    .filter((event) => {
      const text = [
        event.title.ta,
        event.title.en,
        event.category.ta,
        event.category.en,
        event.location.ta,
        event.location.en,
        event.description.ta,
        event.description.en,
        event.date,
      ].join(" ");

      return matchesSearch(text);
    })
    .sort((a, b) => {
      const aText = [
        a.title[language],
        a.category[language],
        a.location[language],
      ].join(" ");

      const bText = [
        b.title[language],
        b.category[language],
        b.location[language],
      ].join(" ");

      return getScore(bText) - getScore(aText);
    });

  const totalResults =
    jobResults.length +
    businessResults.length +
    newsResults.length +
    governmentResults.length +
    templeResults.length +
    emergencyResults.length +
    transportResults.length +
    eventResults.length;

  // =========================
  // MINIMUM SEARCH LENGTH
  // =========================

  const isTooShort =
    query.length > 0 && query.length < 2;

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      {/* HEADER */}

      <section className="bg-green-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            {language === "ta"
              ? "தேடல்"
              : "Search"}
          </h1>

          <p className="mt-3 text-lg text-green-100">
            {query
              ? language === "ta"
                ? `"${query}" க்கான தேடல் முடிவுகள்`
                : `Search results for "${query}"`
              : language === "ta"
                ? "ஆத்தூர் தகவல்களை தேடுங்கள்"
                : "Search Namma Attur information"}
          </p>
        </div>
      </section>

      {/* RESULTS */}

      <section className="max-w-6xl mx-auto px-6 py-10">

        {/* NO QUERY */}

        {!query ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <div className="text-5xl mb-4">
              🔎
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              {language === "ta"
                ? "தேடல் சொல்லை உள்ளிடவும்"
                : "Enter a search term"}
            </h2>

            <p className="text-gray-600 mt-3">
              {language === "ta"
                ? "குறைந்தது 2 எழுத்துக்களை உள்ளிட்டு தேடவும்."
                : "Enter at least 2 characters to search."}
            </p>
          </div>

        /* TOO SHORT */

        ) : isTooShort ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <div className="text-5xl mb-4">
              🔎
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              {language === "ta"
                ? "மேலும் எழுத்துக்களை உள்ளிடவும்"
                : "Enter more characters"}
            </h2>

            <p className="text-gray-600 mt-3">
              {language === "ta"
                ? "தேடுவதற்கு குறைந்தது 2 எழுத்துக்களை உள்ளிடவும்."
                : "Please enter at least 2 characters to search."}
            </p>
          </div>

        /* NO RESULTS */

        ) : totalResults === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <div className="text-5xl mb-4">
              😕
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              {language === "ta"
                ? "தேடல் முடிவுகள் இல்லை"
                : "No results found"}
            </h2>

            <p className="text-gray-600 mt-3">
              {language === "ta"
                ? `"${query}" என்பதற்கு எந்த தகவலும் கிடைக்கவில்லை.`
                : `No information was found for "${query}".`}
            </p>
          </div>

        /* RESULTS */

        ) : (
          <div className="space-y-10">

            {/* RESULT COUNT */}

            <div className="bg-white rounded-xl shadow-sm p-4">
              <p className="text-gray-700">
                🔎{" "}
                <strong>{totalResults}</strong>{" "}
                {language === "ta"
                  ? "முடிவுகள் கிடைத்துள்ளன"
                  : "results found"}
              </p>
            </div>

            {/* JOBS */}

            {jobResults.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-green-700 mb-4">
                  💼{" "}
                  {language === "ta"
                    ? "வேலைவாய்ப்புகள்"
                    : "Jobs"}
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {jobResults.map((job) => (
                    <Link
                      key={job.id}
                      href={`/jobs/${job.id}`}
                      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {job.title[language]}
                      </h3>

                      <p className="text-gray-600 mt-2">
                        🏢 {job.company[language]}
                      </p>

                      <p className="text-gray-500 mt-1">
                        📍 {job.location[language]}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* BUSINESSES */}

            {businessResults.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-purple-700 mb-4">
                  🏪{" "}
                  {language === "ta"
                    ? "வணிகங்கள்"
                    : "Businesses"}
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {businessResults.map((business) => (
                    <Link
                      key={business.id}
                      href={`/businesses/${business.id}`}
                      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {business.name[language]}
                      </h3>

                      <p className="text-purple-700 mt-2">
                        🏷️ {business.category[language]}
                      </p>

                      <p className="text-gray-500 mt-1">
                        📍 {business.location[language]}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* NEWS */}

            {newsResults.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-blue-700 mb-4">
                  📰{" "}
                  {language === "ta"
                    ? "செய்திகள்"
                    : "News"}
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {newsResults.map((post) => (
                    <Link
                      key={post.id}
                      href={`/news/${post.id}`}
                      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                    >
                      <p className="text-sm text-blue-700 font-medium">
                        {post.category[language]}
                      </p>

                      <h3 className="text-xl font-bold text-gray-900 mt-2">
                        {post.title[language]}
                      </h3>

                      <p className="text-gray-600 mt-3 line-clamp-3">
                        {post.content[language]}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* GOVERNMENT */}

            {governmentResults.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-purple-700 mb-4">
                  🏛️{" "}
                  {language === "ta"
                    ? "அரசு சேவைகள்"
                    : "Government Services"}
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {governmentResults.map((service) => (
                    <Link
                      key={service.id}
                      href={`/government/${service.id}`}
                      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.name[language]}
                      </h3>

                      <p className="text-purple-700 mt-2">
                        🏷️ {service.category[language]}
                      </p>

                      <p className="text-gray-600 mt-3">
                        {service.description[language]}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* TEMPLES */}

            {templeResults.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  🛕{" "}
                  {language === "ta"
                    ? "கோவில்கள்"
                    : "Temples"}
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {templeResults.map((temple) => (
                    <Link
                      key={temple.id}
                      href={`/temples/${temple.id}`}
                      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {temple.name[language]}
                      </h3>

                      <p className="text-orange-600 mt-2">
                        🏷️ {temple.category[language]}
                      </p>

                      <p className="text-gray-500 mt-1">
                        📍 {temple.location[language]}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* EMERGENCY */}

            {emergencyResults.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-red-700 mb-4">
                  🚑{" "}
                  {language === "ta"
                    ? "அவசர சேவைகள்"
                    : "Emergency Services"}
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {emergencyResults.map((service) => (
                    <Link
                      key={service.id}
                      href="/emergency"
                      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.name[language]}
                      </h3>

                      <p className="text-red-700 mt-2">
                        📞 {service.phone}
                      </p>

                      <p className="text-gray-600 mt-3">
                        {service.description[language]}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* TRANSPORT */}

            {transportResults.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-sky-700 mb-4">
                  🚌{" "}
                  {language === "ta"
                    ? "போக்குவரத்து"
                    : "Transport"}
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {transportResults.map((service) => (
                    <Link
                      key={service.id}
                      href={`/transport/${service.id}`}
                      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.name[language]}
                      </h3>

                      <p className="text-sky-700 mt-2">
                        🏷️ {service.category[language]}
                      </p>

                      <p className="text-gray-600 mt-3">
                        {service.description[language]}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* EVENTS */}

            {eventResults.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">
                  📅{" "}
                  {language === "ta"
                    ? "நிகழ்வுகள்"
                    : "Events"}
                </h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {eventResults.map((event) => (
                    <Link
                      key={event.id}
                      href={`/events/${event.id}`}
                      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        {event.title[language]}
                      </h3>

                      <p className="text-indigo-700 mt-2">
                        🏷️ {event.category[language]}
                      </p>

                      <p className="text-gray-500 mt-1">
                        📍 {event.location[language]}
                      </p>

                      <p className="text-gray-500 mt-1">
                        📅 {event.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}