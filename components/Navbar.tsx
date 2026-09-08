"use client";

import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <span>
            📍 {t.location}
          </span>

          <div className="flex items-center gap-4">
            <span>☀️ {t.weather}</span>

            <LanguageToggle />
          </div>

        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4">

          {/* Logo + Register */}
          <div className="flex justify-between items-center">

            {/* Logo and Website Name */}
            <Link
              href="/"
              className="flex items-center gap-4"
            >
              <div className="text-5xl">
                🏰
              </div>

              <div>
                <h1 className="text-4xl font-bold text-green-700">
                  {t.siteName}
                </h1>

                <p className="text-gray-500">
                  {t.tagline}
                </p>
              </div>
            </Link>

            {/* Register Button */}
            <button className="bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800">
              + {t.register}
            </button>

          </div>

          {/* Navigation Menu */}
          <nav className="mt-5 border-t pt-4">

            <div className="flex flex-wrap justify-center gap-8">

              <Link
                href="/"
                className="font-medium text-gray-700 hover:text-green-700"
              >
                {t.home}
              </Link>

              <Link
                href="/about-attur"
                className="font-medium text-gray-700 hover:text-green-700"
              >
                {t.attur}
              </Link>

              <Link
                href="/tourist-places"
                className="font-medium text-gray-700 hover:text-green-700"
              >
                {t.tourism}
              </Link>

              <Link
                href="/#jobs"
                className="font-medium text-gray-700 hover:text-green-700"
              >
                {t.jobs}
              </Link>

              <Link
                href="/#businesses"
                className="font-medium text-gray-700 hover:text-green-700"
              >
                {t.businesses}
              </Link>

              <Link
                href="/#news"
                className="font-medium text-gray-700 hover:text-green-700"
              >
                {t.news}
              </Link>

              <Link
                href="/#government"
                className="font-medium text-gray-700 hover:text-green-700"
              >
                {t.government}
              </Link>

            </div>

          </nav>

        </div>
      </header>
    </>
  );
}