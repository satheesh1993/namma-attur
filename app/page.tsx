import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  const menuItems = [
    { icon: "💼", title: "வேலைவாய்ப்புகள்" },
    { icon: "🏪", title: "வணிக அடைவு" },
    { icon: "🏞️", title: "சுற்றுலா" },
    { icon: "🏛️", title: "அரசு சேவைகள்" },
    { icon: "📅", title: "நிகழ்வுகள்" },
    { icon: "🛕", title: "கோவில்கள்" },
    { icon: "🚑", title: "அவசர உதவி" },
    { icon: "🚌", title: "பஸ் நேரங்கள்" },
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      
      {/* Top Bar */}
      <div className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <span>📍 ஆத்தூர் தாலுக்கா, சேலம் மாவட்டம்</span>
          <span>☀️ 33°C</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🏰</div>

            <div>
              <h1 className="text-4xl font-bold text-green-700">
                நம்ம ஆத்தூர்
              </h1>

              <p className="text-gray-500">
                ஆத்தூர் தாலுக்கா தகவல் மையம்
              </p>
            </div>
          </div>

          <button className="bg-green-700 text-white px-5 py-3 rounded-xl hover:bg-green-800">
            + பதிவு செய்யவும்
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-6xl font-bold mb-4">
            நம்ம ஆத்தூர்
          </h2>

          <p className="text-yellow-300 text-xl md:text-3xl mb-8">
            ஆத்தூர் தாலுக்காவின் சுற்றுலா, வேலைவாய்ப்பு,
            வணிகம் மற்றும் மக்கள் சேவைகளுக்கான ஒரே தளம்
          </p>

          <div className="max-w-3xl bg-white rounded-2xl mx-auto p-2 flex shadow-2xl">
            <input
              type="text"
              placeholder="வேலைகள், வணிகம், சுற்றுலா இடங்கள் தேடுங்கள்..."
              className="flex-1 px-5 py-4 text-black outline-none"
            />

            <button className="bg-green-600 text-white px-10 py-4 rounded-xl">
              தேடு
            </button>
          </div>
        </div>
      </section>

      {/* Quick Access Menu */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="p-6 flex flex-col items-center border-r border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>

                <p className="mt-4 text-center text-sm font-medium">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertisement */}
      <section className="max-w-7xl mx-auto px-6 mt-6">
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 text-center text-xl font-semibold">
          📢 Advertisement Banner (Google AdSense)
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="max-w-7xl mx-auto p-6 grid lg:grid-cols-4 gap-6">
        {/* News */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-blue-700 mb-4">
            📰 ஆத்தூர் செய்திகள்
          </h3>

          <ul className="space-y-3">
            <li>ஆத்தூர் அரசு மருத்துவமனை அறிவிப்பு</li>
            <li>நரசிங்கபுரம் பகுதியில் புதிய திட்டம்</li>
            <li>ஆத்தூர் பேருந்து நிலைய மேம்பாடு</li>
          </ul>
        </div>

        {/* Jobs */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-blue-700 mb-4">
            💼 ஆத்தூர் வேலைவாய்ப்புகள்
          </h3>

          <ul className="space-y-3">
            <li>IT Support Engineer</li>
            <li>Sales Executive</li>
            <li>Factory Operator</li>
            <li>Accountant</li>
          </ul>
        </div>

        {/* Business */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-purple-700 mb-4">
            🏪 ஆத்தூர் வணிகங்கள்
          </h3>

          <ul className="space-y-3">
            <li>ABC ஹோட்டல்</li>
            <li>XYZ மருத்துவமனை</li>
            <li>Smart Electronics</li>
          </ul>
        </div>

        {/* Market Prices */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-green-700 mb-4">
            📈 இன்றைய சந்தை விலை
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>தக்காளி</span>
              <span>₹25</span>
            </div>

            <div className="flex justify-between">
              <span>வெங்காயம்</span>
              <span>₹40</span>
            </div>

            <div className="flex justify-between">
              <span>மல்லிகைப்பூ</span>
              <span>₹700</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tourist Places */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            📍 ஆத்தூர் சுற்றுலா தலங்கள்
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-4">
              🏰 ஆத்தூர் கோட்டை
            </div>

            <div className="border rounded-xl p-4">
              ⛰️ கல்வராயன் மலை
            </div>

            <div className="border rounded-xl p-4">
              🌊 வசிஷ்டா நதி
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}

<footer className="bg-gray-900 text-white mt-10">

  <div className="max-w-7xl mx-auto py-10 text-center px-6">

    <h3 className="text-2xl font-bold">
      நம்ம ஆத்தூர்
    </h3>

    <p className="text-gray-400 mt-3">
      ஆத்தூர் தாலுக்கா தகவல் மையம்
    </p>

    <div className="border-t border-gray-700 my-6"></div>

    <p className="text-sm text-gray-400 leading-7 max-w-4xl mx-auto">

      <strong>பொறுப்புத் துறப்பு:</strong> நம்ம ஆத்தூர் என்பது
      ஆத்தூர் தாலுக்காவை பற்றிய தகவல்களை பொதுமக்களுடன்
      பகிர்வதற்காக உருவாக்கப்பட்ட தனியார் சமூக தகவல் தளம்.
      இந்த இணையதளம் எந்த அரசு துறை, அரசு நிறுவனம்,
      உள்ளாட்சி அமைப்பு அல்லது அரசு சார்ந்த அமைப்புகளுடனும்
      தொடர்புடையதல்ல.
      அரசு சேவைகள் மற்றும் அறிவிப்புகள் தொடர்பான தகவல்களுக்கு
      அதிகாரப்பூர்வ அரசு இணையதளங்களைப் பயன்படுத்துமாறு
      பார்வையாளர்கள் கேட்டுக்கொள்ளப்படுகிறார்கள்.

    </p>

    <p className="text-sm text-gray-500 mt-4 max-w-4xl mx-auto">

      <strong>Disclaimer:</strong> Namma Attur is an independent
      community information portal created to share information
      related to Attur Taluk. This website is not affiliated with,
      endorsed by, sponsored by, or operated by any Government
      department, Government agency, or local authority.
      Visitors are advised to verify official information with the
      respective Government websites and offices.

    </p>

    <p className="text-xs text-gray-500 mt-6">
      © 2026 Namma Attur. All Rights Reserved.
    </p>

  </div>

</footer>


    </main>
  );
}
``