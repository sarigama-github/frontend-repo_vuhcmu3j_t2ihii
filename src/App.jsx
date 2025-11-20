import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-forest">{title}</h2>
            {subtitle && <p className="text-forest/80 mt-2">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <NavBar />
      <main className="bg-cream">
        <section className="relative overflow-hidden bg-cream">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-20" style={{background:"linear-gradient(135deg,#F7B347,#FFD79A)"}}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sage font-semibold">BenVenturing</p>
              <h1 className="mt-3 text-5xl font-bold tracking-tight text-forest">Freedom • Adventure • Innovation</h1>
              <p className="mt-4 text-lg text-forest/80">A lifestyle brand & creative hub blending faith, travel, and AI.</p>
              {/* Intentionally no buttons under the hero per request */}
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-cream border border-sage/30 shadow-[0_20px_60px_rgba(56,102,77,0.10)] flex items-center justify-center">
                <span className="text-sage">Hero media placeholder</span>
              </div>
            </div>
          </div>
        </section>

        <Section id="why" title="Why Ben Venturing" subtitle="We empower creative nomads to build freedom through entrepreneurship, guided by faith and modern AI.">
          <div className="grid md:grid-cols-3 gap-6">
            {[{title:'Freedom & Travel',text:'Tools and stories for building location-independent lives.'},{title:'AI & Automation',text:'Practical AI workflows to streamline businesses.'},{title:'Community & Courses',text:'Untethered members learn together — courses, workshops, and coaching.'}].map((f)=> (
              <div key={f.title} className="rounded-2xl bg-cream p-6 border border-sage/30 shadow-[0_6px_20px_rgba(56,102,77,0.08)] hover:-translate-y-1 transition">
                <h3 className="font-semibold text-forest">{f.title}</h3>
                <p className="text-forest/80 mt-2">{f.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="cta" title="Start something worth wandering for" subtitle="Consultation, content, or AI automation — let's build it together.">
          <div className="rounded-2xl p-8 text-forest shadow-[0_20px_60px_rgba(56,102,77,0.10)] border border-sage/30 bg-cream">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Book a Call</h3>
                <p className="text-forest/80">Talk through ideas and get a simple plan.</p>
              </div>
              <a href="/contact#book" className="btn btn-accent">Get Started</a>
            </div>
          </div>
        </Section>

        <Section id="insta" title="On Instagram" subtitle="Scroll the latest reels and adventures.">
          <div className="rounded-2xl border border-sage/30 bg-cream p-4">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="min-w-[200px] sm:min-w-[240px] aspect-[9/16] rounded-xl bg-cream border border-sage/30 flex items-center justify-center text-sage snap-start">
                  Reel placeholder
                </div>
              ))}
            </div>
            <div className="text-right mt-4">
              <a href="https://instagram.com/benventuring" target="_blank" className="btn btn-outline">Follow on Instagram</a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}

export default function App() {
  return <HomePage />
}
