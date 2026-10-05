"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function TermsAndConditionsPage() {
  const { language } = useLanguage();

  const isTamil = language === "ta";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-green-800 text-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            {isTamil
              ? "விதிமுறைகள் மற்றும் நிபந்தனைகள்"
              : "Terms & Conditions"}
          </h1>

          <p className="mt-3 text-green-100">
            {isTamil
              ? "நம்ம ஆத்தூர் இணையதளத்தைப் பயன்படுத்துவதற்கான விதிமுறைகள்"
              : "Terms governing the use of the Namma Attur website"}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-8">

          {/* 1 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil ? "1. அறிமுகம்" : "1. Introduction"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "நம்ம ஆத்தூர் ஒரு தனியார் சமூக தகவல் இணையதளமாகும். இந்த இணையதளத்தைப் பயன்படுத்துவதன் மூலம், இந்த விதிமுறைகள் மற்றும் நிபந்தனைகளுக்கு நீங்கள் உடன்படுகிறீர்கள்."
                : "Namma Attur is an independent community information website. By accessing or using this website, you agree to these Terms & Conditions."}
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "2. இணையதளத்தின் பயன்பாடு"
                : "2. Use of the Website"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இந்த இணையதளம் ஆத்தூர் மற்றும் சுற்றியுள்ள பகுதிகள் தொடர்பான பொதுவான தகவல்களை வழங்குவதற்காக உருவாக்கப்பட்டுள்ளது. இணையதளத்தை சட்டப்பூர்வமான நோக்கங்களுக்காக மட்டுமே பயன்படுத்த வேண்டும்."
                : "This website is intended to provide general information about Attur and surrounding areas. You agree to use the website only for lawful purposes."}
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "3. தகவல்களின் துல்லியம்"
                : "3. Accuracy of Information"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இணையதளத்தில் வழங்கப்படும் தகவல்கள் பொதுவான தகவல் நோக்கத்திற்காக மட்டுமே வழங்கப்படுகின்றன. தகவல்கள் மாறக்கூடும். முக்கியமான தகவல்களைப் பயன்படுத்துவதற்கு முன் சம்பந்தப்பட்ட அதிகாரப்பூர்வ ஆதாரங்களில் சரிபார்க்க வேண்டும்."
                : "Information provided on this website is for general informational purposes only. Information may change over time. Important information should be verified with the relevant official source before relying on it."}
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "4. அரசு இணையதளம் அல்ல"
                : "4. Not an Official Government Website"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "நம்ம ஆத்தூர் எந்தவொரு அரசு துறை, அரசு நிறுவனம் அல்லது உள்ளாட்சி அமைப்பின் அதிகாரப்பூர்வ இணையதளமும் அல்ல."
                : "Namma Attur is not an official website of any Government department, Government organization, or local authority."}
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "5. வேலைவாய்ப்பு தகவல்கள்"
                : "5. Job Listings"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "வேலைவாய்ப்பு தகவல்கள் தகவல் நோக்கத்திற்காக மட்டுமே வழங்கப்படுகின்றன. வேலைக்கு விண்ணப்பிப்பதற்கு முன் வேலை மற்றும் நிறுவன விவரங்களை நேரடியாக சரிபார்க்க வேண்டும்."
                : "Job listings are provided for informational purposes only. Users should independently verify job and company details before applying."}
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "6. வணிக தகவல்கள்"
                : "6. Business Listings"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "வணிகங்கள் மற்றும் சேவைகள் பற்றிய தகவல்கள் பொதுமக்களின் தகவல் பயன்பாட்டிற்காக வழங்கப்படுகின்றன. எந்தவொரு வணிகத்தையும் பயன்படுத்துவதற்கு முன் அதன் விவரங்களை சரிபார்க்க வேண்டும்."
                : "Business and service listings are provided for informational purposes. Users should verify business information before purchasing products or services."}
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "7. பயனர் சமர்ப்பிக்கும் தகவல்கள்"
                : "7. User-Submitted Information"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "எதிர்காலத்தில் பயனர்கள் வணிகங்கள், வேலைவாய்ப்புகள், செய்திகள் அல்லது நிகழ்வுகள் தொடர்பான தகவல்களை சமர்ப்பிக்கும் வசதி வழங்கப்படலாம். அத்தகைய தகவல்கள் வெளியிடப்படுவதற்கு முன் சரிபார்ப்பு அல்லது நிர்வாக மதிப்பாய்வுக்கு உட்படுத்தப்படலாம்."
                : "In the future, users may be allowed to submit information about businesses, jobs, news, or events. Such information may be reviewed or verified before publication."}
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "8. அறிவுசார் சொத்து"
                : "8. Intellectual Property"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இணையதளத்தின் வடிவமைப்பு, உரை, லோகோ மற்றும் பிற அசல் உள்ளடக்கங்கள் தொடர்புடைய உரிமைகளால் பாதுகாக்கப்படலாம். அனுமதியின்றி உள்ளடக்கத்தை நகலெடுத்து வணிக நோக்கத்திற்காக பயன்படுத்தக்கூடாது."
                : "The website design, original text, logo, and other original content may be protected by applicable intellectual property rights. Content should not be copied or commercially reused without appropriate permission."}
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "9. வெளிப்புற இணைப்புகள்"
                : "9. External Links"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இந்த இணையதளத்தில் வெளிப்புற இணையதளங்களுக்கான இணைப்புகள் இருக்கலாம். அந்த இணையதளங்களின் உள்ளடக்கம் அல்லது செயல்பாட்டிற்கு நம்ம ஆத்தூர் பொறுப்பல்ல."
                : "The website may contain links to external websites. Namma Attur is not responsible for the content, availability, or operation of external websites."}
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "10. பொறுப்பின் வரம்பு"
                : "10. Limitation of Liability"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இந்த இணையதளத்தைப் பயன்படுத்துவதால் ஏற்படும் நேரடி அல்லது மறைமுகமான இழப்பு, சேதம் அல்லது பாதிப்புகளுக்கு நம்ம ஆத்தூர் பொறுப்பேற்காது."
                : "Namma Attur is not responsible for any direct or indirect loss, damage, or consequences arising from the use of this website or its information."}
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "11. விதிமுறைகளில் மாற்றங்கள்"
                : "11. Changes to These Terms"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இந்த விதிமுறைகள் தேவைக்கேற்ப மாற்றப்படலாம். மாற்றப்பட்ட விதிமுறைகள் இந்தப் பக்கத்தில் வெளியிடப்படும்."
                : "These Terms & Conditions may be updated from time to time. Updated terms will be published on this page."}
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