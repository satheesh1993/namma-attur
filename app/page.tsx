"use client";

import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/data/translations";

export default function Home() {
const { language } = useLanguage();

const t = translations[language];

  const menuItems = [
    { icon: "💼", title: t.categoryJobs, link: "#jobs" },
    { icon: "🏪", title: t.categoryBusiness, link: "#businesses" },
    { icon: "🏞️", title: t.categoryTourism, link: "#tourism" },
    { icon: "🏛️", title: t.categoryGovernment, link: "#government" },
    { icon: "📅", title: t.categoryEvents, link: "#events" },
    { icon: "🛕", title: t.categoryTemples, link: "#temples" },
    { icon: "🚑", title: t.categoryEmergency, link: "#emergency" },
    { icon: "🚌", title: t.categoryBus, link: "#bus" },
  ];

  return (
    <main className="min-h-screen bg-slate-100">

      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-6">

          <h2 className="text-6xl font-bold mb-4">
            {t.heroTitle}
          </h2>

          <p className="text-yellow-300 text-xl md:text-3xl mb-8">
            {t.heroSubtitle}
          </p>

          <div className="max-w-3xl bg-white rounded-2xl mx-auto p-2 flex shadow-2xl">

            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="flex-1 px-5 py-4 text-black outline-none"
            />

            <button className="bg-green-600 text-white px-10 py-4 rounded-xl">
              {t.search}
            </button>

          </div>
        </div>
      </section>

      {/* Quick Access Menu */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">

        <div className="bg-white rounded-3xl shadow-xl">

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">

            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="p-6 flex flex-col items-center border-r border-gray-100 hover:bg-gray-50 transition"
              >

                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>

                <p className="mt-4 text-center text-sm font-medium">
                  {item.title}
                </p>

              </a>
            ))}

          </div>
        </div>
      </section>

      {/* Advertisement */}
      <section className="max-w-7xl mx-auto px-6 mt-6">

        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 text-center text-xl font-semibold">
          📢 {t.advertisement}
        </div>

      </section>

      {/* Dashboard Cards */}
      <section className="max-w-7xl mx-auto p-6 grid lg:grid-cols-4 gap-6">

        {/* News */}
        <div
          id="news"
          className="bg-white rounded-2xl shadow-lg p-5"
        >

          <h3 className="font-bold text-blue-700 mb-4">
            📰 {t.latestNews}
          </h3>

          <ul className="space-y-3">
            <li>{t.news1}</li>
            <li>{t.news2}</li>
            <li>{t.news3}</li>
          </ul>

        </div>

        {/* Jobs */}
        <div
          id="jobs"
          className="bg-white rounded-2xl shadow-lg p-5"
        >

          <h3 className="font-bold text-blue-700 mb-4">
            💼 {t.latestJobs}
          </h3>

          <ul className="space-y-3">
            <li>{t.job1}</li>
            <li>{t.job2}</li>
            <li>{t.job3}</li>
            <li>{t.job4}</li>
          </ul>

        </div>

        {/* Business */}
        <div
          id="businesses"
          className="bg-white rounded-2xl shadow-lg p-5"
        >

          <h3 className="font-bold text-purple-700 mb-4">
            🏪 {t.featuredBusinesses}
          </h3>

          <ul className="space-y-3">
            <li>{t.business1}</li>
            <li>{t.business2}</li>
            <li>{t.business3}</li>
          </ul>

        </div>

        {/* Market Prices */}
        <div className="bg-white rounded-2xl shadow-lg p-5">

          <h3 className="font-bold text-green-700 mb-4">
            📈 {t.marketPrices}
          </h3>

          <div className="space-y-2">

            <div className="flex justify-between">
              <span>{t.tomato}</span>
              <span>₹25</span>
            </div>

            <div className="flex justify-between">
              <span>{t.onion}</span>
              <span>₹40</span>
            </div>

            <div className="flex justify-between">
              <span>{t.jasmine}</span>
              <span>₹700</span>
            </div>

          </div>
        </div>

      </section>

      {/* Tourist Places */}
      <section
        id="tourism"
        className="max-w-7xl mx-auto px-6 pb-8"
      >

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold text-green-700 mb-6">
            📍 {t.touristPlaces}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-xl p-4">
              🏰 {t.atturFort}
            </div>

            <div className="border rounded-xl p-4">
              ⛰️ {t.kalvarayanHills}
            </div>

            <div className="border rounded-xl p-4">
              🌊 {t.vasistaRiver}
            </div>

          </div>
        </div>
      </section>

      {/* Future Sections
          We will build these later.
          IDs are already prepared for navigation.
      */}

      <div id="government"></div>
      <div id="events"></div>
      <div id="temples"></div>
      <div id="emergency"></div>
      <div id="bus"></div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-10">

        <div className="max-w-7xl mx-auto py-10 text-center px-6">

          <h3 className="text-2xl font-bold">
            {t.siteName}
          </h3>

          <p className="text-gray-400 mt-3">
            {t.tagline}
          </p>

          <div className="border-t border-gray-700 my-6"></div>

          {/* Tamil Disclaimer */}
          <p className="text-sm text-gray-400 leading-7 max-w-4xl mx-auto">

            <strong>{t.disclaimerTitle}</strong>{" "}
            {t.disclaimer}

          </p>

          {/* English Disclaimer */}
          <p className="text-sm text-gray-500 mt-4 max-w-4xl mx-auto">

            <strong>{t.footerDisclaimerTitle}</strong>{" "}
            {t.footerDisclaimer}

          </p>

          <p className="text-xs text-gray-500 mt-6">
            {t.rights}
          </p>

        </div>

      </footer>

    </main>
  );
}