"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  const isTamil = language === "ta";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-800 text-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            {isTamil ? "தனியுரிமைக் கொள்கை" : "Privacy Policy"}
          </h1>

          <p className="mt-3 text-green-100">
            {isTamil
              ? "நம்ம ஆத்தூர் இணையதளம் உங்கள் தகவல்களை எவ்வாறு கையாள்கிறது"
              : "How Namma Attur handles information related to website visitors"}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-8">

          {/* 1 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "1. அறிமுகம்"
                : "1. Introduction"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "நம்ம ஆத்தூர் ஒரு தனியார் சமூக தகவல் இணையதளமாகும். இந்த தனியுரிமைக் கொள்கை, இணையதளத்தைப் பார்வையிடும்போது தகவல்கள் எவ்வாறு கையாளப்படலாம் என்பதை விளக்குகிறது."
                : "Namma Attur is an independent community information website. This Privacy Policy explains how information may be handled when you visit and use this website."}
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "2. தற்போது சேகரிக்கப்படும் தகவல்கள்"
                : "2. Information We Currently Collect"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "தற்போதைய நிலவரப்படி, நம்ம ஆத்தூர் இணையதளத்தில் பயனர்கள் கணக்கு உருவாக்குதல் அல்லது தனிப்பட்ட தகவல்களை கட்டாயமாக சமர்ப்பித்தல் போன்ற அம்சங்கள் இல்லை. இணையதளத்தின் பொதுவான பயன்பாட்டிற்கு தனிப்பட்ட தகவல்கள் தேவையில்லை."
                : "At the current stage, Namma Attur does not require users to create an account or submit personal information simply to browse the website. Personal information is not required for normal use of the website."}
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "3. தானாக உருவாகக்கூடிய தொழில்நுட்ப தகவல்கள்"
                : "3. Technical Information"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இணையதளத்தை அணுகும்போது, உலாவி வகை, சாதன வகை, IP முகவரி மற்றும் இணையதளத்தை அணுகிய நேரம் போன்ற சில தொழில்நுட்ப தகவல்கள் இணைய சேவையகங்கள் அல்லது ஹோஸ்டிங் சேவைகள் மூலம் பதிவு செய்யப்படலாம்."
                : "When you access a website, certain technical information such as browser type, device information, IP address, and access time may be recorded by web servers or hosting services."}
            </p>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இந்த தகவல்கள் இணையதளத்தின் பாதுகாப்பு, செயல்திறன் மற்றும் தொழில்நுட்ப செயல்பாட்டிற்காக பயன்படுத்தப்படலாம்."
                : "Such information may be used for website security, performance, troubleshooting, and technical operation."}
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "4. குக்கீகள்"
                : "4. Cookies"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "தற்போதைய இணையதளத்தின் சில செயல்பாடுகள் தேவையான தொழில்நுட்ப சேமிப்பகத்தை அல்லது குக்கீகளை பயன்படுத்தக்கூடும். எதிர்காலத்தில் பகுப்பாய்வு அல்லது விளம்பர சேவைகள் சேர்க்கப்பட்டால், அவை கூடுதல் குக்கீகள் அல்லது இதே போன்ற தொழில்நுட்பங்களை பயன்படுத்தக்கூடும்."
                : "Certain features of the website may use necessary browser storage or cookies. If analytics or advertising services are added in the future, those services may use additional cookies or similar technologies."}
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "5. மூன்றாம் தரப்பு சேவைகள்"
                : "5. Third-Party Services"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "எதிர்காலத்தில் Google Analytics, Google AdSense அல்லது பிற மூன்றாம் தரப்பு சேவைகள் இணையதளத்தில் சேர்க்கப்படலாம். அத்தகைய சேவைகள் தங்களது சொந்த தனியுரிமைக் கொள்கைகளின்படி தகவல்களை சேகரிக்கலாம் அல்லது பயன்படுத்தலாம்."
                : "Third-party services such as analytics or advertising services may be added in the future. Such services may collect or use information according to their own privacy policies."}
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "6. வெளிப்புற இணையதள இணைப்புகள்"
                : "6. External Website Links"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "நம்ம ஆத்தூர் இணையதளத்தில் பிற இணையதளங்களுக்கான இணைப்புகள் இருக்கலாம். அந்த இணையதளங்களின் தனியுரிமை நடைமுறைகளுக்கு நம்ம ஆத்தூர் பொறுப்பல்ல. அந்த இணையதளங்களின் தனியுரிமைக் கொள்கைகளை தனியாகப் பார்க்கவும்."
                : "Namma Attur may contain links to external websites. We are not responsible for the privacy practices of those websites. Users should review the privacy policies of external websites separately."}
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "7. குழந்தைகளின் தனியுரிமை"
                : "7. Children's Privacy"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இந்த இணையதளம் பொதுவான தகவல்களை வழங்குவதற்காக உருவாக்கப்பட்டுள்ளது. குழந்தைகளிடமிருந்து தனிப்பட்ட தகவல்களை அறிந்தே சேகரிக்கும் நோக்கம் தற்போது இல்லை."
                : "This website is intended to provide general information. We do not currently intend to knowingly collect personal information from children."}
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "8. தனியுரிமைக் கொள்கையில் மாற்றங்கள்"
                : "8. Changes to This Privacy Policy"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இணையதளத்தின் அம்சங்கள் அல்லது சேவைகள் மாறும்போது இந்த தனியுரிமைக் கொள்கையும் புதுப்பிக்கப்படலாம். புதுப்பிக்கப்பட்ட பதிப்பு இந்தப் பக்கத்தில் வெளியிடப்படும்."
                : "This Privacy Policy may be updated when the website's features or services change. Updated versions will be published on this page."}
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "9. தொடர்பு"
                : "9. Contact"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "தனியுரிமை தொடர்பான கேள்விகள் அல்லது கவலைகள் இருந்தால், எதிர்காலத்தில் இணையதளத்தில் வழங்கப்படும் தொடர்பு வழிமுறைகளைப் பயன்படுத்தலாம்."
                : "If you have questions or concerns about privacy, you may use the contact method provided on the website when available."}
            </p>
          </div>

          {/* Last updated */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500">
              {isTamil
                ? "கடைசியாக புதுப்பிக்கப்பட்டது: அக்டோபர் 2026"
                : "Last updated: October 2026"}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}