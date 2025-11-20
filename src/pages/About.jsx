import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <NavBar />
      <main>
        <section className="bg-[linear-gradient(180deg,#F7EFE6,white)] py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-navy mb-2">Ben's Story</h1>
            <p className="text-slate-700">Nomadic founder. Faith-led. Practical with AI.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <div className="grid md:grid-cols-[160px_1fr] gap-4 items-start">
              <div className="text-slate-500">1999–2006</div>
              <div>Early life in Mongolia & travel.</div>
            </div>
            <div className="grid md:grid-cols-[160px_1fr] gap-4 items-start">
              <div className="text-slate-500">2006–2014</div>
              <div>Grew up in Indonesia; fluent in Bahasa.</div>
            </div>
            <div className="grid md:grid-cols-[160px_1fr] gap-4 items-start">
              <div className="text-slate-500">2018</div>
              <div>High school graduate — athletics & leadership.</div>
            </div>
            <div className="grid md:grid-cols-[160px_1fr] gap-4 items-start">
              <div className="text-slate-500">2022–present</div>
              <div>Building Aetherflo, creative studio, and Untethered community.</div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-3">Faith-first</h2>
            <p className="text-slate-700 mb-6">Faith shapes the mission behind Ben Venturing — to help others find freedom, purpose, and the resources to build sustainable livelihoods.</p>
            <a href="/contact" className="px-5 py-3 rounded-full bg-teal-600 text-white">Connect with Ben</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
