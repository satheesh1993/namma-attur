import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TouristPlacesPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="bg-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            சுற்றுலா தலங்கள்
          </h1>

          <p className="mt-3">
            ஆத்தூர் தாலுக்காவின் முக்கிய சுற்றுலா இடங்கள்
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-3">
              🏰 ஆத்தூர் கோட்டை
            </h2>

            <p>
              ஆத்தூரின் வரலாற்று சிறப்புமிக்க கோட்டை.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-3">
              ⛰️ கல்வராயன் மலை
            </h2>

            <p>
              இயற்கை எழில் நிறைந்த மலைப்பகுதி.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-3">
              🌊 வசிஷ்டா நதி
            </h2>

            <p>
              ஆத்தூர் பகுதியின் முக்கிய நதி.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}