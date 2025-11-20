import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Portfolio() {
  const [items, setItems] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${backend}/api/portfolio`).then(r=>r.json()).then(d=>{
      setItems(d.items || [])
    }).catch(()=>{})
  }, [])

  return (
    <>
      <NavBar />
      <main>
        <section className="py-16 bg-[linear-gradient(180deg,#F7EFE6,white)]">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-navy mb-2">Portfolio — Photography & Video</h1>
            <p className="text-slate-700">Selected client work with case studies, outcomes, and media.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it)=> (
              <div key={it.id} className="rounded-2xl bg-white p-5 border border-teal-100 shadow-[0_6px_20px_rgba(13,43,62,0.08)]">
                <div className="aspect-video rounded-xl bg-slate-100 mb-3" />
                <div className="text-sm text-slate-500">{it.category}</div>
                <h3 className="font-semibold text-slate-900">{it.title}</h3>
                {it.metrics && (
                  <div className="text-teal-700 text-sm mt-1">
                    {Object.entries(it.metrics).map(([k,v])=> (<span key={k} className="mr-2">{v}</span>))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
