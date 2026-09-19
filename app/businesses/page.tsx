"use client";

import { useState } from "react";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { businesses } from "@/data/businesses";

export default function BusinessesPage() {
  const { language } = useLanguage();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // Get unique categories
  const categories = Array.from(
    new Set(
      businesses.map((business) => business.category[language])
    )
  );

  // Get unique locations
  const locations = Array.from(
    new Set(
      businesses.map((business) => business.location[language])
    )
  );

  // Filter businesses
  const filteredBusinesses = businesses.filter((business) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      business.name[language]
        .toLowerCase()
        .includes(searchText) ||
      business.description[language]
        .toLowerCase()
        .includes(searchText);

    const matchesCategory =
      selectedCategory === "all" ||
      business.category[language] === selectedCategory;

    const matchesLocation =
      selectedLocation === "all" ||
      business.location[language] === selectedLocation;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLocation
    );
  });

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      {/* =========================
          BUSINESSES HERO
      ========================== */}
      <section className="bg-amber-600 text-white py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold">
            {language === "ta"
              ? "ஆத்தூர் வணிகங்கள் மற்றும் சேவைகள்"
              : "Attur Businesses & Services"}
          </h1>

          <p className="mt-3 text-lg text-amber-100">
            {language === "ta"
              ? "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளில் உள்ள உள்ளூர் வணிகங்கள் மற்றும் சேவைகளை கண்டறியுங்கள்"
              : "Discover local businesses and services in Attur and surrounding areas"}
          </p>

        </div>
      </section>

      {/* =========================
          SEARCH & FILTERS
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 pt-8">

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-xl font-bold text-gray-800 mb-5">
            {language === "ta"
              ? "வணிகங்களை தேடுங்கள்"
              : "Find a Business"}
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            {/* SEARCH */}
            <div className="md:col-span-1">

              <label className="block text-sm font-medium text-gray-600 mb-2">
                {language === "ta"
                  ? "வணிகத்தை தேடுங்கள்"
                  : "Search Business"}
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={
                  language === "ta"
                    ? "வணிக பெயரை உள்ளிடுங்கள்..."
                    : "Search business..."
                }
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-amber-500
                "
              />

            </div>

            {/* CATEGORY */}
            <div>

              <label className="block text-sm font-medium text-gray-600 mb-2">
                {language === "ta"
                  ? "வகை"
                  : "Category"}
              </label>

              <select
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value)
                }
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-3
                  bg-white
                  outline-none
                  focus:ring-2
                  focus:ring-amber-500
                "
              >
                <option value="all">
                  {language === "ta"
                    ? "அனைத்து வகைகளும்"
                    : "All Categories"}
                </option>

                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                ))}
              </select>

            </div>

            {/* LOCATION */}
            <div>

              <label className="block text-sm font-medium text-gray-600 mb-2">
                {language === "ta"
                  ? "இடம்"
                  : "Location"}
              </label>

              <select
                value={selectedLocation}
                onChange={(e) =>
                  setSelectedLocation(e.target.value)
                }
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-3
                  bg-white
                  outline-none
                  focus:ring-2
                  focus:ring-amber-500
                "
              >
                <option value="all">
                  {language === "ta"
                    ? "அனைத்து இடங்களும்"
                    : "All Locations"}
                </option>

                {locations.map((location) => (
                  <option
                    key={location}
                    value={location}
                  >
                    {location}
                  </option>
                ))}
              </select>

            </div>

          </div>

          {/* RESULT COUNT */}
          <div className="mt-5 text-sm text-gray-600">
            {language === "ta"
              ? `${filteredBusinesses.length} வணிகங்கள் காண்பிக்கப்படுகின்றன`
              : `${filteredBusinesses.length} businesses found`}
          </div>

        </div>

      </section>

      {/* =========================
          BUSINESS LIST
      ========================== */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        {filteredBusinesses.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <div className="text-5xl mb-4">
              🔍
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              {language === "ta"
                ? "வணிகங்கள் எதுவும் கிடைக்கவில்லை"
                : "No businesses found"}
            </h2>

            <p className="text-gray-600 mt-2">
              {language === "ta"
                ? "உங்கள் தேடல் அல்லது வடிகட்டியை மாற்றிப் பார்க்கவும்."
                : "Try changing your search or filters."}
            </p>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredBusinesses.map((business) => (
              <article
                key={business.id}
                className="
                  bg-white
                  rounded-2xl
                  shadow-md
                  overflow-hidden
                  hover:shadow-xl
                  transition
                "
              >

                {/* IMAGE */}
                <div className="h-48 bg-gray-200 overflow-hidden">

                  <img
                    src={business.image}
                    alt={business.name[language]}
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  {/* CATEGORY */}
                  <span
                    className="
                      inline-block
                      bg-amber-50
                      text-amber-700
                      px-3
                      py-1
                      rounded-lg
                      text-sm
                      font-medium
                    "
                  >
                    {business.category[language]}
                  </span>

                  {/* BUSINESS NAME */}
                  <h2 className="text-xl font-bold text-gray-900 mt-4">
                    {business.name[language]}
                  </h2>

                  {/* LOCATION */}
                  <p className="text-gray-600 mt-3">
                    📍 {business.location[language]}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 mt-3 leading-7 line-clamp-3">
                    {business.description[language]}
                  </p>

                  {/* PHONE */}
                  <p className="text-gray-600 text-sm mt-4">
                    📞 {business.phone}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-3 mt-5">

                    <Link
                      href={`/businesses/${business.id}`}
                      className="
                        inline-block
                        bg-amber-600
                        text-white
                        px-5
                        py-2
                        rounded-lg
                        hover:bg-amber-700
                        transition
                      "
                    >
                      👁️{" "}
                      {language === "ta"
                        ? "விவரங்கள்"
                        : "View Details"}
                    </Link>

                    <a
                      href={`tel:${business.phone}`}
                      className="
                        inline-block
                        bg-gray-100
                        text-gray-800
                        px-5
                        py-2
                        rounded-lg
                        hover:bg-gray-200
                        transition
                      "
                    >
                      📞{" "}
                      {language === "ta"
                        ? "அழைக்க"
                        : "Call"}
                    </a>

                  </div>

                </div>

              </article>
            ))}

          </div>
        )}

      </section>

      <Footer />
    </main>
  );
}