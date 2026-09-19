"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { posts } from "@/data/posts";

export default function NewsDetailsPage() {
  const { language } = useLanguage();
  const params = useParams();

  const postId = params.id as string;

  const post = posts.find((item) => item.id === postId);

  // Post not found
  if (!post) {
    return (
      <main className="min-h-screen bg-slate-100">

        <Navbar />

        <section className="max-w-6xl mx-auto px-6 py-20 text-center">

          <h1 className="text-3xl font-bold text-red-600">
            {language === "ta"
              ? "தகவல் கிடைக்கவில்லை"
              : "Post Not Found"}
          </h1>

          <Link
            href="/news"
            className="
              inline-block
              mt-6
              bg-blue-700
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-blue-800
            "
          >
            {language === "ta"
              ? "செய்திகளுக்கு திரும்பு"
              : "Back to News"}
          </Link>

        </section>

        <Footer />

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <Navbar />

      {/* =========================
          POST HEADER
      ========================== */}
      <section className="bg-blue-700 text-white py-12">

        <div className="max-w-6xl mx-auto px-6">

          {/* CATEGORY */}
          <span className="text-blue-100">
            {post.category[language]}
          </span>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            {post.title[language]}
          </h1>

          {/* DATE */}
          <p className="mt-4 text-blue-100">
            📅{" "}
            {language === "ta"
              ? "வெளியிடப்பட்ட தேதி"
              : "Published Date"}{" "}
            : {post.publishedDate}
          </p>

        </div>

      </section>

      {/* =========================
          POST CONTENT
      ========================== */}
      <section className="max-w-4xl mx-auto px-6 py-10">

        <article className="bg-white rounded-2xl shadow-md overflow-hidden">

          {/* IMAGE */}
          <div className="h-64 md:h-96 bg-gray-200">

            <img
              src={post.image}
              alt={post.title[language]}
              className="w-full h-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-10">

            <p className="text-gray-700 text-lg leading-9">
              {post.content[language]}
            </p>

          </div>

        </article>

        {/* BACK BUTTON */}
        <Link
          href="/news"
          className="
            inline-block
            mt-6
            text-blue-700
            font-medium
            hover:underline
          "
        >
          ←{" "}
          {language === "ta"
            ? "அனைத்து செய்திகளும்"
            : "All News"}
        </Link>

      </section>

      <Footer />

    </main>
  );
}