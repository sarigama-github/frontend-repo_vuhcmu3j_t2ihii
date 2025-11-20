import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Aetherflo() {
  return (
    <>
      <NavBar />
      <main>
        <section className="py-16 bg-cream">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-forest mb-2">Aetherflo</h1>
            <p className="text-forest/80">AI-first websites, voice agents, chatbots, and workflow automation.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {title:'AI Website Design',desc:'Auto-generated pages, conversion-first templates, and adaptive content.'},
                {title:'Voice Agents (VAPI)',desc:'Custom voice agents for booking, lead capture, and FAQs.'},
                {title:'Workflow Automation',desc:'Connect ClickUp, Airtable, Make.com, Slack, and CRMs.'},
                {title:'Chatbots',desc:'Conversational AI that handles support & lead qualification.'},
              ].map((f)=> (
                <div key={f.title} className="rounded-2xl bg-cream p-5 border border-sage/30 shadow-[0_6px_20px_rgba(56,102,77,0.08)]">
                  <h3 className="font-semibold text-forest">{f.title}</h3>
                  <p className="text-forest/80 mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
            <a href="https://aetherflo.example.com" className="inline-flex mt-6 btn btn-forest">Learn More / Visit Aetherflo</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
