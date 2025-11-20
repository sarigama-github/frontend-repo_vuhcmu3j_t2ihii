import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <NavBar />
      <main>
        <section className="bg-cream py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-forest mb-2">About BV</h1>
            <p className="text-forest/80">Nomadic founder. Faith-led. Practical with AI.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <div className="grid md:grid-cols-[160px_1fr] gap-4 items-start">
              <div className="text-sage">1999–2006</div>
              <div className="text-forest">Early life in Mongolia & travel.</div>
            </div>
            <div className="grid md:grid-cols-[160px_1fr] gap-4 items-start">
              <div className="text-sage">2006–2014</div>
              <div className="text-forest">Grew up in Indonesia; fluent in Bahasa.</div>
            </div>
            <div className="grid md:grid-cols-[160px_1fr] gap-4 items-start">
              <div className="text-sage">2018</div>
              <div className="text-forest">High school graduate — athletics & leadership.</div>
            </div>
            <div className="grid md:grid-cols-[160px_1fr] gap-4 items-start">
              <div className="text-sage">2022–present</div>
              <div className="text-forest">Building Aetherflo, creative studio, and Untethered community.</div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold text-forest mb-3">Faith-first</h2>
            <p className="text-forest/80 mb-6">Faith shapes the mission behind Ben Venturing — to help others find freedom, purpose, and the resources to build sustainable livelihoods.</p>
            <a href="/contact" className="btn btn-forest">Connect with BV</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
