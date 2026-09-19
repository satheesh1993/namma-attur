"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function DisclaimerPage() {
  const { language } = useLanguage();

  const isTamil = language === "ta";

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-green-800 text-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            {isTamil ? "பொறுப்புத்துறப்பு" : "Disclaimer"}
          </h1>

          <p className="mt-3 text-green-100">
            {isTamil
              ? "நம்ம ஆத்தூர் இணையதளத்தைப் பயன்படுத்துவதற்கான முக்கிய தகவல்கள்"
              : "Important information about using the Namma Attur website"}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-8">
          
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "1. அதிகாரப்பூர்வ அரசு இணையதளம் அல்ல"
                : "1. Not an Official Government Website"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "நம்ம ஆத்தூர் ஒரு தனியார் சமூக தகவல் இணையதளமாகும். இது எந்தவொரு அரசு துறை, அரசு நிறுவனம் அல்லது உள்ளாட்சி அமைப்பின் அதிகாரப்பூர்வ இணையதளமும் அல்ல."
                : "Namma Attur is an independent community information website. It is not an official website of any Government department, Government organization, or local authority."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "2. தகவல்களின் துல்லியம்"
                : "2. Accuracy of Information"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இந்த இணையதளத்தில் வழங்கப்படும் தகவல்கள் பொதுவான தகவல் மற்றும் சமூக பயன்பாட்டிற்காக வழங்கப்படுகின்றன. தகவல்கள் காலப்போக்கில் மாறக்கூடும். முக்கியமான தகவல்களைப் பயன்படுத்துவதற்கு முன் சம்பந்தப்பட்ட அதிகாரப்பூர்வ ஆதாரத்துடன் சரிபார்க்கவும்."
                : "The information provided on this website is intended for general informational and community purposes. Information may change over time. Users should verify important information with the relevant official source before relying on it."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "3. வேலைவாய்ப்பு தகவல்கள்"
                : "3. Job Information"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "வேலைவாய்ப்பு தொடர்பான தகவல்கள் தகவல் நோக்கத்திற்காக மட்டுமே வழங்கப்படுகின்றன. வேலைக்கு விண்ணப்பிப்பதற்கு முன் நிறுவனத்தின் பெயர், வேலை விவரங்கள், சம்பளம், தொடர்பு விவரங்கள் மற்றும் பிற தகவல்களை சம்பந்தப்பட்ட நிறுவனத்திடம் சரிபார்க்கவும்."
                : "Job-related information is provided for informational purposes only. Before applying for a job, users should verify the company, job details, salary, contact information, and other relevant details directly with the respective organization."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "4. வணிக மற்றும் சேவை தகவல்கள்"
                : "4. Business and Service Information"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "வணிகங்கள் மற்றும் சேவைகள் தொடர்பான தகவல்கள் பயனர்களுக்கு உள்ளூர் தகவல்களை வழங்குவதற்காக வெளியிடப்படுகின்றன. சேவையைப் பெறுவதற்கு முன் வணிகத்தின் விவரங்கள், விலை, நேரம் மற்றும் தொடர்பு தகவல்களை நேரடியாக சரிபார்க்கவும்."
                : "Business and service information is provided to help users discover local information. Users should verify business details, pricing, operating hours, and contact information directly with the respective business before using a service."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "5. அரசு சேவைகள்"
                : "5. Government Services"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "அரசு சேவைகள் தொடர்பான தகவல்கள் வழிகாட்டுதலுக்காக மட்டுமே வழங்கப்படுகின்றன. விண்ணப்பங்கள், கட்டணங்கள், தகுதிகள், ஆவணங்கள் மற்றும் நடைமுறைகள் தொடர்பான தற்போதைய தகவல்களுக்கு சம்பந்தப்பட்ட அதிகாரப்பூர்வ அரசு இணையதளங்களைப் பார்க்கவும்."
                : "Government service information is provided for general guidance only. For current information regarding applications, fees, eligibility, required documents, and procedures, users should refer to the relevant official Government websites."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "6. வெளிப்புற இணையதளங்கள்"
                : "6. External Websites"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இந்த இணையதளத்தில் பிற இணையதளங்களுக்கான இணைப்புகள் இருக்கலாம். அந்த வெளிப்புற இணையதளங்களின் உள்ளடக்கம், பாதுகாப்பு அல்லது செயல்பாட்டிற்கு நம்ம ஆத்தூர் பொறுப்பல்ல."
                : "This website may contain links to external websites. Namma Attur is not responsible for the content, security, availability, or operation of external websites."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "7. பொறுப்பின் வரம்பு"
                : "7. Limitation of Responsibility"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இந்த இணையதளத்தில் உள்ள தகவல்களைப் பயன்படுத்துவதால் ஏற்படும் எந்தவொரு நேரடி அல்லது மறைமுகமான இழப்பு, சேதம் அல்லது முடிவுகளுக்கும் நம்ம ஆத்தூர் பொறுப்பேற்காது."
                : "Namma Attur is not responsible for any direct or indirect loss, damage, or consequences arising from the use of information provided on this website."}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isTamil
                ? "8. தகவல் புதுப்பிப்புகள்"
                : "8. Information Updates"}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {isTamil
                ? "இணையதளத்தில் உள்ள தகவல்களை தேவைக்கேற்ப புதுப்பிக்க முயற்சிப்போம். இருப்பினும், அனைத்து தகவல்களும் எப்போதும் முழுமையாகவும் சமீபத்தியதாகவும் இருக்கும் என்று உத்தரவாதம் அளிக்க முடியாது."
                : "We may update information on the website from time to time. However, we cannot guarantee that all information will always be complete, accurate, or up to date."}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500">
              {isTamil
                ? "கடைசியாக புதுப்பிக்கப்பட்டது: செப்டம்பர் 2026"
                : "Last updated: September 2026"}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}