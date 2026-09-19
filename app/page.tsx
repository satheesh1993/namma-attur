"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";

import { jobs } from "@/data/jobs";
import { posts } from "@/data/posts";
import { businesses } from "@/data/businesses";

export default function Home() {
  const { language } = useLanguage();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const t = translations[language];

  // =========================
  // SEARCH
  // =========================

  const handleSearch = () => {
    const query = searchQuery.trim();

    if (!query) {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  // =========================
  // LATEST NEWS
  // =========================

  const latestPosts = [...posts]
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
    )
    .slice(0, 3);

  // =========================
  // LATEST JOBS
  // =========================

  const latestJobs = [...jobs]
    .sort(
      (a, b) =>
        new Date(b.postedDate).getTime() -
        new Date(a.postedDate).getTime()
    )
    .slice(0, 4);

  // =========================
  // FEATURED BUSINESSES
  // =========================

  const featuredBusinesses = businesses.slice(0, 3);

  // =========================
  // QUICK ACCESS MENU
  // =========================

  const menuItems = [
    {
      icon: "💼",
      title: t.categoryJobs,
      link: "/jobs",
    },
    {
      icon: "🏪",
      title: t.categoryBusiness,
      link: "/businesses",
    },
    {
      icon: "🏞️",
      title: t.categoryTourism,
      link: "/tourist-places",
    },
    {
      icon: "🏛️",
      title: t.categoryGovernment,
      link: "/government",
    },
    {
      icon: "📅",
      title: t.categoryEvents,
      link: "/events",
    },
    {
      icon: "🛕",
      title: t.categoryTemples,
      link: "/temples",
    },
    {
      icon: "🚑",
      title: t.categoryEmergency,
      link: "/emergency",
    },
    {
      icon: "🚌",
      title: t.categoryBus,
      link: "/transport",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================== */}

      <section
        className="relative h-[430px] sm:h-[460px] md:h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero/attur-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
            {t.heroTitle}
          </h2>

          <p className="text-yellow-300 text-base sm:text-xl md:text-3xl mb-6 md:mb-8 leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* SEARCH */}

          <div className="max-w-3xl bg-white rounded-2xl mx-auto p-2 flex flex-col sm:flex-row shadow-2xl gap-2 sm:gap-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder={t.searchPlaceholder}
              className="
                flex-1
                min-w-0
                px-4
                py-3
                sm:py-3
                rounded-lg
                sm:rounded-l-lg
                sm:rounded-r-none
                border
                border-gray-300
                bg-white
                text-gray-900
                placeholder:text-gray-500
                outline-none
                focus:ring-2
                focus:ring-green-500
                text-sm
                sm:text-base
              "
            />

            <button
              onClick={handleSearch}
              className="
                bg-green-700
                text-white
                px-6
                py-3
                rounded-lg
                sm:rounded-l-none
                sm:rounded-r-lg
                hover:bg-green-800
                transition
                font-medium
                text-sm
                sm:text-base
                min-h-[48px]
              "
            >
              🔍 {t.search}
            </button>
          </div>
        </div>
      </section>

      {/* =========================
          QUICK ACCESS MENU
      ========================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
            {menuItems.map((item) => {
              return (
                <Link
                  key={item.title}
                  href={item.link}
                  className="
                    p-4
                    sm:p-5
                    md:p-6
                    min-h-[145px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-gray-100
                    hover:bg-gray-50
                    active:bg-gray-100
                    transition
                    cursor-pointer
                  "
                >
                  <div
                    className="
                      w-14
                      h-14
                      sm:w-16
                      sm:h-16
                      rounded-full
                      bg-gray-100
                      flex
                      items-center
                      justify-center
                      text-2xl
                      sm:text-3xl
                    "
                  >
                    {item.icon}
                  </div>

                  <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm font-medium leading-tight">
                    {item.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          ADVERTISEMENT
      ========================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 text-center text-base sm:text-xl font-semibold">
          📢 {t.advertisement}
        </div>
      </section>

      {/* =========================
          DASHBOARD CARDS
      ========================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {/* =========================
            LATEST NEWS
        ========================== */}

        <div
          id="news"
          className="bg-white rounded-2xl shadow-lg p-5"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="font-bold text-blue-700">
              📰 {t.latestNews}
            </h3>

            <button
              onClick={() => router.push("/news")}
              className="text-sm text-blue-600 hover:underline whitespace-nowrap"
            >
              {language === "ta" ? "அனைத்தும்" : "View All"}
            </button>
          </div>

          <div className="space-y-4">
            {latestPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => router.push(`/news/${post.id}`)}
                className="
                  block
                  w-full
                  text-left
                  border-b
                  border-gray-100
                  pb-3
                  last:border-0
                  hover:bg-blue-50
                  active:bg-blue-100
                  rounded-lg
                  p-2
                  transition
                "
              >
                <p className="font-medium text-gray-800 leading-6">
                  {post.title[language]}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  📅 {post.publishedDate}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* =========================
            LATEST JOBS
        ========================== */}

        <div
          id="jobs"
          className="bg-white rounded-2xl shadow-lg p-5"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="font-bold text-green-700">
              💼 {t.latestJobs}
            </h3>

            <button
              onClick={() => router.push("/jobs")}
              className="text-sm text-green-600 hover:underline whitespace-nowrap"
            >
              {language === "ta" ? "அனைத்தும்" : "View All"}
            </button>
          </div>

          <div className="space-y-4">
            {latestJobs.map((job) => (
              <button
                key={job.id}
                onClick={() => router.push(`/jobs/${job.id}`)}
                className="
                  block
                  w-full
                  text-left
                  border-b
                  border-gray-100
                  pb-3
                  last:border-0
                  hover:bg-green-50
                  active:bg-green-100
                  rounded-lg
                  p-2
                  transition
                "
              >
                <p className="font-medium text-gray-800 leading-6">
                  {job.title[language]}
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  🏢 {job.company[language]}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  📍 {job.location[language]}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* =========================
            FEATURED BUSINESSES
        ========================== */}

        <div
          id="businesses"
          className="bg-white rounded-2xl shadow-lg p-5"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <h3 className="font-bold text-purple-700">
              🏪 {t.featuredBusinesses}
            </h3>

            <button
              onClick={() => router.push("/businesses")}
              className="text-sm text-purple-600 hover:underline whitespace-nowrap"
            >
              {language === "ta" ? "அனைத்தும்" : "View All"}
            </button>
          </div>

          <div className="space-y-4">
            {featuredBusinesses.map((business) => (
              <button
                key={business.id}
                onClick={() =>
                  router.push(`/businesses/${business.id}`)
                }
                className="
                  block
                  w-full
                  text-left
                  border-b
                  border-gray-100
                  pb-3
                  last:border-0
                  hover:bg-purple-50
                  active:bg-purple-100
                  rounded-lg
                  p-2
                  transition
                "
              >
                <p className="font-medium text-gray-800 leading-6">
                  {business.name[language]}
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  🏷️ {business.category[language]}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  📍 {business.location[language]}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* =========================
            MARKET PRICES
        ========================== */}

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-green-700 mb-4">
            📈 {t.marketPrices}
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between gap-4">
              <span>{t.tomato}</span>
              <span className="font-medium">₹25</span>
            </div>

            <div className="flex justify-between gap-4">
              <span>{t.onion}</span>
              <span className="font-medium">₹40</span>
            </div>

            <div className="flex justify-between gap-4">
              <span>{t.jasmine}</span>
              <span className="font-medium">₹700</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TOURIST PLACES
      ========================== */}

      <section
        id="tourism"
        className="max-w-7xl mx-auto px-4 sm:px-6 pb-8"
      >
        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-5 sm:mb-6">
            📍 {t.touristPlaces}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="border rounded-xl p-4 hover:shadow-md transition">
              🏰 {t.atturFort}
            </div>

            <div className="border rounded-xl p-4 hover:shadow-md transition">
              ⛰️ {t.kalvarayanHills}
            </div>

            <div className="border rounded-xl p-4 hover:shadow-md transition">
              🌊 {t.vasistaRiver}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}

     
    </main>
  );
}