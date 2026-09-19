"use client";

import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { posts } from "@/data/posts";

export default function NewsPage() {
  const { language } = useLanguage();

  // Sort newest posts first
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() -
      new Date(a.publishedDate).getTime()
  );

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      {/* =========================
          NEWS HERO
      ========================== */}

      <section className="bg-blue-700 text-white py-8 sm:py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {language === "ta"
              ? "ஆத்தூர் செய்திகள் மற்றும் தகவல்கள்"
              : "Attur News & Information"}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-blue-100 leading-7">
            {language === "ta"
              ? "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளின் முக்கியமான தகவல்கள்"
              : "Important information from Attur and surrounding areas"}
          </p>

        </div>
      </section>

      {/* =========================
          NEWS LIST
      ========================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {sortedPosts.map((post) => (
            <article
              key={post.id}
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

              <div className="h-44 sm:h-48 bg-gray-200 overflow-hidden">

                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* CONTENT */}

              <div className="p-5 sm:p-6">

                {/* CATEGORY */}

                <span
                  className="
                    inline-block
                    bg-blue-50
                    text-blue-700
                    px-3
                    py-2
                    rounded-lg
                    text-xs
                    sm:text-sm
                    font-medium
                  "
                >
                  {post.category[language]}
                </span>

                {/* TITLE */}

                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-4 leading-7">
                  {post.title[language]}
                </h2>

                {/* CONTENT PREVIEW */}

                <p className="text-gray-600 mt-3 leading-7 line-clamp-3">
                  {post.content[language]}
                </p>

                {/* DATE */}

                <p className="text-gray-500 text-sm mt-4 leading-6">
                  📅{" "}
                  {language === "ta"
                    ? "வெளியிடப்பட்ட தேதி"
                    : "Published"}{" "}
                  : {post.publishedDate}
                </p>

                {/* READ MORE */}

                <Link
                  href={`/news/${post.id}`}
                  className="
                    flex
                    items-center
                    justify-center
                    w-full
                    sm:w-auto
                    mt-5
                    bg-blue-700
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    hover:bg-blue-800
                    active:bg-blue-900
                    transition
                    font-medium
                    text-sm
                    sm:text-base
                    min-h-[48px]
                  "
                >
                  👁️{" "}
                  {language === "ta"
                    ? "முழு தகவல்"
                    : "Read More"}
                </Link>

              </div>

            </article>
          ))}

        </div>

      </section>

      <Footer />
    </main>
  );
}