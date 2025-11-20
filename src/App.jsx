import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
            {subtitle && <p className="text-slate-600 mt-2">{subtitle}</p>}
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
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7EFE6,white)]">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-30" style={{background:"linear-gradient(135deg,#9AD3FF,#B3FFED,#EAD7FF)"}}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-teal-700 font-semibold">Ben Venturing</p>
              <h1 className="mt-3 text-5xl font-bold tracking-tight text-navy">Freedom • Adventure • Innovation</h1>
              <p className="mt-4 text-lg text-slate-700">A lifestyle brand & creative hub blending faith, travel, and AI. Founder: Ben Graeff.</p>
              <div className="mt-8 flex gap-3">
                <a href="/untethered" className="px-5 py-3 rounded-full bg-teal-600 text-white hover:bg-teal-700">Explore Untethered</a>
                <a href="/studio" className="px-5 py-3 rounded-full bg-white text-teal-700 border border-teal-200 hover:border-teal-300">See Voyage Studio</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-white/50 border border-teal-100 shadow-[0_20px_60px_rgba(13,43,62,0.10)] flex items-center justify-center">
                <span className="text-slate-500">Hero media placeholder</span>
              </div>
            </div>
          </div>
        </section>

        <Section id="why" title="Why Ben Venturing" subtitle="We empower creative nomads to build freedom through entrepreneurship, guided by faith and modern AI.">
          <div className="grid md:grid-cols-3 gap-6">
            {[{title:'Freedom & Travel',text:'Tools and stories for building location-independent lives.'},{title:'AI & Automation',text:'Practical AI workflows to streamline businesses.'},{title:'Community & Courses',text:'Untethered members learn together — courses, workshops, and coaching.'}].map((f)=> (
              <div key={f.title} className="rounded-2xl bg-white p-6 border border-teal-100 shadow-[0_6px_20px_rgba(13,43,62,0.08)] hover:-translate-y-1 transition">
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                <p className="text-slate-600 mt-2">{f.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="cta" title="Start something worth wandering for" subtitle="Consultation, content, or AI automation — let's build it together.">
          <div className="bg-gradient-to-r from-[#FFD8A8] via-[#FFAC81] to-[#FF7A59] rounded-2xl p-8 text-navy shadow-[0_20px_60px_rgba(13,43,62,0.10)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Book a Call</h3>
                <p className="text-navy/80">Talk through ideas and get a simple plan.</p>
              </div>
              <a href="/contact#book" className="px-5 py-3 rounded-full bg-navy text-white hover:opacity-90">Get Started</a>
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
