import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutAtturPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            ஆத்தூர் பற்றி
          </h1>

          <p className="text-xl">
            சேலம் மாவட்டத்தில் அமைந்துள்ள வரலாற்று மற்றும் இயற்கை வளமிக்க
            ஆத்தூர் தாலுக்கா
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            அறிமுகம்
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            ஆத்தூர் என்பது தமிழ்நாட்டின் சேலம் மாவட்டத்தில் அமைந்துள்ள
            முக்கிய தாலுக்காக்களில் ஒன்றாகும். வரலாற்று சிறப்புமிக்க
            ஆத்தூர் கோட்டை, வசிஷ்டா நதி மற்றும் கல்வராயன் மலைப்பகுதிகளால்
            இப்பகுதி அறியப்படுகிறது.
          </p>

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            புவியியல் அமைப்பு
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            ஆத்தூர் தாலுக்கா சேலம் மாவட்டத்தின் கிழக்குப் பகுதியில்
            அமைந்துள்ளது. விவசாயம், சிறு தொழில்கள் மற்றும் வணிக நடவடிக்கைகள்
            இப்பகுதியின் பொருளாதாரத்திற்கு முக்கிய பங்களிப்பை வழங்குகின்றன.
          </p>

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            முக்கிய பகுதிகள்
          </h2>

          <ul className="list-disc pl-8 space-y-2 mb-8">
            <li>ஆத்தூர்</li>
            <li>நரசிங்கபுரம்</li>
            <li>ஆறகளூர்</li>
            <li>தலைவாசல்</li>
            <li>கங்கவல்லி</li>
            <li>பெத்தநாயக்கன்பாளையம்</li>
          </ul>

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            வரலாற்று முக்கியத்துவம்
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            ஆத்தூர் கோட்டை இப்பகுதியின் முக்கிய வரலாற்றுச் சின்னமாக
            விளங்குகிறது. பல்வேறு ஆட்சிக் காலங்களில் முக்கிய நிர்வாக
            மையமாக ஆத்தூர் இருந்துள்ளது.
          </p>

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            இயற்கை வளங்கள்
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            கல்வராயன் மலை, வசிஷ்டா நதி மற்றும் சுற்றியுள்ள விவசாய நிலங்கள்
            ஆத்தூரின் முக்கிய இயற்கை வளங்களாகும். மாம்பழ சாகுபடிக்கும்
            இந்த பகுதி பிரபலமானது.
          </p>

          <h2 className="text-3xl font-bold text-green-700 mb-4">
            முக்கிய சுற்றுலா தலங்கள்
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="border rounded-xl p-4 hover:bg-green-50">
              🏰 ஆத்தூர் கோட்டை
            </div>

            <div className="border rounded-xl p-4 hover:bg-green-50">
              ⛰️ கல்வராயன் மலை
            </div>

            <div className="border rounded-xl p-4 hover:bg-green-50">
              🌊 வசிஷ்டா நதி
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}