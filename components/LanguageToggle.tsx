"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">

      <button
        onClick={() => setLanguage("ta")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
          language === "ta"
            ? "bg-white text-green-800"
            : "text-white hover:bg-white/20"
        }`}
      >
        தமிழ்
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-md text-sm font-medium transition ${
          language === "en"
            ? "bg-white text-green-800"
            : "text-white hover:bg-white/20"
        }`}
      >
        English
      </button>

    </div>
  );
}