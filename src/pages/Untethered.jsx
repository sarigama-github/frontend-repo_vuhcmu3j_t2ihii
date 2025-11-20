import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Untethered() {
  const [courses, setCourses] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${backend}/api/courses`).then(r=>r.json()).then(d=>{
      setCourses(d.items || [])
    }).catch(()=>{})
  }, [])

  return (
    <>
      <NavBar />
      <main>
        <section className="py-16 bg-cream">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-forest mb-2">Untethered</h1>
            <p className="text-forest/80">A faith-minded community for creators & digital nomads. Courses, cohorts, and resources.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
            {courses.map((c)=> (
              <div key={c.id} className="rounded-2xl bg-cream p-6 border border-sage/30 shadow-[0_6px_20px_rgba(56,102,77,0.08)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-forest">{c.title}</h3>
                    <p className="text-forest/80 mt-1">{c.description}</p>
                  </div>
                  <div className="text-sage whitespace-nowrap">{c.price}</div>
                </div>
                <div className="mt-4 space-y-2">
                  {c.modules?.map((m)=> (
                    <div key={m.id} className="rounded-lg border border-sage/30 p-3 bg-cream">
                      <div className="font-medium text-forest">{m.title}</div>
                      <div className="text-forest/80 text-sm">{m.lessons?.length || 0} lessons</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-8 text-center">
            <a href="/untethered/join" className="btn btn-forest">Get Started</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
