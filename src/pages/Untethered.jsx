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
        <section className="py-16 bg-[linear-gradient(180deg,#F7EFE6,white)]">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-navy mb-2">Untethered</h1>
            <p className="text-slate-700">A faith-minded community for creators & digital nomads. Courses, cohorts, and resources.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
            {courses.map((c)=> (
              <div key={c.id} className="rounded-2xl bg-white p-6 border border-teal-100 shadow-[0_6px_20px_rgba(13,43,62,0.08)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">{c.title}</h3>
                    <p className="text-slate-600 mt-1">{c.description}</p>
                  </div>
                  <div className="text-teal-700 whitespace-nowrap">{c.price}</div>
                </div>
                <div className="mt-4 space-y-2">
                  {c.modules?.map((m)=> (
                    <div key={m.id} className="rounded-lg border border-teal-100 p-3">
                      <div className="font-medium text-slate-800">{m.title}</div>
                      <div className="text-slate-600 text-sm">{m.lessons?.length || 0} lessons</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-8 text-center">
            <a href="/untethered/join" className="inline-flex px-5 py-3 rounded-full bg-teal-600 text-white">Get Started</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
