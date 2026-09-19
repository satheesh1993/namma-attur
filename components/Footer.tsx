"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto py-10 px-6 text-center">

        <h3 className="text-2xl font-bold">
          {language === "ta" ? "நம்ம ஆத்தூர்" : "Namma Attur"}
        </h3>

        <p className="text-gray-400 mt-3">
          {language === "ta"
            ? "ஆத்தூர் தாலுக்கா தகவல் மையம்"
            : "Attur Taluk Information Center"}
        </p>

        <div className="border-t border-gray-700 my-6"></div>

        <p className="text-sm text-gray-400 max-w-4xl mx-auto">
          {language === "ta"
            ? "இது அரசு இணையதளம் அல்ல. ஆத்தூர் தாலுக்கா பற்றிய தகவல்களை பொதுமக்களுடன் பகிர்வதற்காக உருவாக்கப்பட்ட தனியார் தகவல் தளம்."
            : "This is not an official Government website. Namma Attur is an independent information website created to share information about Attur Taluk with the public."}
        </p>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-6 text-sm">

          <Link
            href="/disclaimer"
            className="text-gray-400 hover:text-white transition"
          >
            {language === "ta"
              ? "பொறுப்புத்துறப்பு"
              : "Disclaimer"}
          </Link>

          <span className="text-gray-600">|</span>

          <Link
            href="/privacy-policy"
            className="text-gray-400 hover:text-white transition"
          >
            {language === "ta"
              ? "தனியுரிமைக் கொள்கை"
              : "Privacy Policy"}
          </Link>

        </div>

        <p className="text-xs text-gray-500 mt-6">
          {language === "ta"
            ? "© 2026 நம்ம ஆத்தூர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
            : "© 2026 Namma Attur. All Rights Reserved."}
        </p>

      </div>
    </footer>
  );
}