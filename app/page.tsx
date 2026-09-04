export default function Home() {
  return (
    <main>
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            நம்ம ஆத்தூர்
          </h1>

          <p className="text-xl">
            ஆத்தூர் மற்றும் சேலம் மாவட்டத்தின் முழுமையான தகவல் தளம்
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-2">
              💼 வேலைவாய்ப்புகள்
            </h2>

            <p>
              உள்ளூர் மற்றும் அரசு வேலைகள்
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-2">
              🏪 வணிக அடைவு
            </h2>

            <p>
              உள்ளூர் வணிகங்களின் பட்டியல்
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-2">
              🏞️ சுற்றுலாத் தலங்கள்
            </h2>

            <p>
              ஆத்தூரின் முக்கிய இடங்கள்
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}