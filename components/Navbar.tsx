"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Landmark,
  Mountain,
  BriefcaseBusiness,
  Store,
  Newspaper,
  UsersRound,
  Menu,
  X,
} from "lucide-react";

import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      href: "/government",
      icon: UsersRound,
      color: "text-purple-600",
    },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* TOP INFORMATION BAR */}
      <div className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            
            {/* Location */}
            <span className="text-sm md:text-base">
              📍 {t.location}
            </span>

            {/* Disclaimer */}
            <div className="flex-1 flex justify-center w-full md:w-auto">
              <span className="bg-yellow-300 text-gray-900 px-3 md:px-4 py-1 rounded-md text-xs md:text-sm font-semibold text-center shadow-sm">
                {t.headerDisclaimer}
              </span>
            </div>

            {/* Weather + Language */}
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-sm md:text-base">
                ☀️ {t.weather}
              </span>

              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* DESKTOP / MOBILE HEADER ROW */}
          <div className="flex items-center justify-between gap-3 py-3">

            {/* LOGO */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 md:gap-3 min-w-0"
            >
              <div className="text-3xl md:text-4xl shrink-0">
                🏰
              </div>

              <div className="min-w-0">
                <h1 className="text-xl md:text-3xl font-bold text-green-700 truncate">
                  {t.siteName}
                </h1>

                <p className="text-xs md:text-sm text-gray-500 truncate">
                  {t.tagline}
                </p>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex flex-1 min-w-0">
              <div className="flex items-stretch justify-between gap-1 md:gap-2 w-full">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex-1 min-w-0 flex flex-col items-center justify-center py-1 px-1 text-center transition"
                    >
                      <Icon
                        size={24}
                        strokeWidth={2}
                        className={`mb-1 shrink-0 ${item.color} group-hover:scale-110 transition-transform`}
                      />

                      <span className="text-xs font-medium leading-tight text-gray-700 group-hover:text-green-700 transition-colors break-words">
                        {item.name}
                      </span>

                      <span className="mt-1 h-0.5 w-0 bg-green-700 group-hover:w-full transition-all" />
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* DESKTOP REGISTER */}
            <button className="hidden lg:block shrink-0 bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition text-sm md:text-base whitespace-nowrap">
              + {t.register}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden shrink-0 p-2 rounded-lg text-green-700 hover:bg-green-50 transition"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>

          {/* MOBILE NAVIGATION */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-3">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-green-50 transition"
                    >
                      <Icon
                        size={22}
                        strokeWidth={2}
                        className={item.color}
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}

                {/* MOBILE REGISTER */}
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="mt-2 w-full bg-green-700 text-white px-4 py-3 rounded-xl hover:bg-green-800 transition text-sm font-medium"
                >
                  + {t.register}
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}