  import type { Metadata } from "next";
  import { LanguageProvider } from "@/components/LanguageContext";
  import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";
  import Footer from "@/components/Footer";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: {
      default: "நம்ம ஆத்தூர் | Namma Attur",
      template: "%s | நம்ம ஆத்தூர்",
    },

    description:
      "நம்ம ஆத்தூர் - ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளுக்கான உள்ளூர் தகவல்கள், வேலைவாய்ப்புகள், வணிகங்கள், சுற்றுலா, அரசு சேவைகள், கோவில்கள், நிகழ்வுகள் மற்றும் முக்கிய தகவல்கள்.",

    keywords: [
      "Namma Attur",
      "நம்ம ஆத்தூர்",
      "Attur",
      "ஆத்தூர்",
      "Attur Salem",
      "Attur jobs",
      "Attur businesses",
      "Attur tourism",
      "Attur temples",
      "Attur government services",
      "Attur events",
    ],

    authors: [
      {
        name: "Namma Attur",
      },
    ],

    creator: "Namma Attur",
    publisher: "Namma Attur",

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: "நம்ம ஆத்தூர் | Namma Attur",
      description:
        "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளுக்கான உள்ளூர் தகவல்கள், வேலைவாய்ப்புகள், வணிகங்கள், சுற்றுலா மற்றும் முக்கிய சேவைகள்.",
      type: "website",
      locale: "ta_IN",
      alternateLocale: ["en_IN"],
      siteName: "நம்ம ஆத்தூர் | Namma Attur",
    },

    twitter: {
      card: "summary_large_image",
      title: "நம்ம ஆத்தூர் | Namma Attur",
      description:
        "ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகளுக்கான உள்ளூர் தகவல்கள் மற்றும் சேவைகள்.",
    },
  };

  export default function RootLayout({
    children,
  }: LayoutProps<"/">) {
    return (
      <html
        lang="ta"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
      </html>
    );
  }