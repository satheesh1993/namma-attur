"use client";

import Link from "next/link";
import {
  Home,
  Landmark,
  Mountain,
  BriefcaseBusiness,
  Store,
  Newspaper,
  UsersRound,
} from "lucide-react";

import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    {
      name: t.home,
      href: "/",
      icon: Home,
      color: "text-green-600",
    },
    {
      name: t.attur,
      href: "/about-attur",
      icon: Landmark,
      color: "text-blue-600",
    },
    {
      name: t.tourism,
      href: "/tourist-places",
      icon: Mountain,
      color: "text-emerald-600",
    },
    {
      name: t.jobs,
      href: "/jobs",
      icon: BriefcaseBusiness,
      color: "text-orange-500",
    },
    {
      name: t.businesses,
      href: "/businesses",
      icon: Store,
      color: "text-amber-600",
    },
    {
      name: t.news,
      href: "/news",
      icon: Newspaper,
      color: "text-blue-500",
    },
    {
      name: t.government,
      href: "/#government",
      icon: UsersRound,
      color: "text-purple-600",
    },
  ];

  return (
    <>
      {/* =========================
          TOP BAR
      ========================== */}
      <div className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between gap-3">

          {/* Location */}
          <span className="shrink-0 text-sm md:text-base">
            📍 {t.location}
          </span>

          {/* Disclaimer */}
          <div className="flex-1 min-w-0 flex justify-center">
            <span className="bg-yellow-300 text-gray-900 px-3 md:px-4 py-1 rounded-md text-xs md:text-sm font-semibold text-center shadow-sm">
              {t.headerDisclaimer}
            </span>
          </div>

          {/* Weather + Language */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <span className="text-sm md:text-base">
              ☀️ {t.weather}
            </span>

            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* =========================
          MAIN HEADER
      ========================== */}
      <header className="bg-white shadow overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2">

          <div className="flex items-center gap-3 md:gap-5">

            {/* =========================
                LOGO
            ========================== */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
            >
              {/* Logo */}
              <div className="text-4xl">
                🏰
              </div>

              {/* Website Name */}
              <div>
                <h1
                  className="
                    text-3xl
                    md:text-4xl
                    font-extrabold
                    tracking-tight
                    text-green-700
                    whitespace-nowrap
                    leading-none
                  "
                >
                  {t.siteName}
                </h1>

                <p className="text-sm md:text-base text-gray-500 whitespace-nowrap">
                  {t.tagline}
                </p>
              </div>
            </Link>

            {/* =========================
                NAVIGATION
            ========================== */}
            <nav className="flex-1 min-w-0">
              <div className="flex items-stretch justify-between gap-1 md:gap-2">

                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="
                        group
                        flex-1
                        min-w-0
                        flex
                        flex-col
                        items-center
                        justify-center
                        py-1
                        px-1
                        text-center
                        transition
                      "
                    >
                      {/* Icon */}
                      <Icon
                        size={24}
                        strokeWidth={2}
                        className={`
                          mb-1
                          shrink-0
                          ${item.color}
                          group-hover:scale-110
                          transition-transform
                        `}
                      />

                      {/* Text */}
                      <span
                        className="
                          text-xs
                          font-medium
                          leading-tight
                          text-gray-700
                          group-hover:text-green-700
                          transition-colors
                          break-words
                        "
                      >
                        {item.name}
                      </span>

                      {/* Underline */}
                      <span
                        className="
                          mt-1
                          h-0.5
                          w-0
                          bg-green-700
                          group-hover:w-full
                          transition-all
                        "
                      />
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* =========================
                REGISTER
            ========================== */}
            <button
              className="
                shrink-0
                bg-green-700
                text-white
                px-4
                py-2
                rounded-xl
                hover:bg-green-800
                transition
                text-sm
                md:text-base
                whitespace-nowrap
              "
            >
              + {t.register}
            </button>

          </div>
        </div>
      </header>
    </>
  );
}