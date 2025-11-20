import { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', projectType:'AI/Automation', budget:'', message:'' })
  const [status, setStatus] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${backend}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('ok')
      setForm({ name:'', email:'', projectType:'AI/Automation', budget:'', message:'' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <NavBar />
      <main>
        <section id="book" className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-forest mb-2">Let’s build something</h1>
            <p className="text-forest/80">Consultations, quotes, and partnerships.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4">
            <form onSubmit={submit} className="bg-cream p-6 rounded-2xl border border-sage/30 shadow-[0_6px_20px_rgba(56,102,77,0.08)] space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-sage mb-1">Name</label>
                  <input className="w-full border border-sage/30 bg-cream text-forest rounded-md px-3 py-2" value={form.name} onChange={(e)=>setForm(f=>({...f,name:e.target.value}))} required />
                </div>
                <div>
                  <label className="block text-sm text-sage mb-1">Email</label>
                  <input type="email" className="w-full border border-sage/30 bg-cream text-forest rounded-md px-3 py-2" value={form.email} onChange={(e)=>setForm(f=>({...f,email:e.target.value}))} required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-sage mb-1">Project Type</label>
                  <select className="w-full border border-sage/30 bg-cream text-forest rounded-md px-3 py-2" value={form.projectType} onChange={(e)=>setForm(f=>({...f,projectType:e.target.value}))}>
                    {['AI/Automation','Content','Community','Other'].map(o=> <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-sage mb-1">Budget</label>
                  <input className="w-full border border-sage/30 bg-cream text-forest rounded-md px-3 py-2" value={form.budget} onChange={(e)=>setForm(f=>({...f,budget:e.target.value}))} />
                </div>
              </div>
              <div>
                <label className="block text-sm text-sage mb-1">Message</label>
                <textarea className="w-full border border-sage/30 bg-cream text-forest rounded-md px-3 py-2 h-28" value={form.message} onChange={(e)=>setForm(f=>({...f,message:e.target.value}))} />
              </div>
              <button type="submit" className="btn btn-accent">
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </button>
              {status === 'ok' && <span className="text-forest ml-3">Thanks! We’ll be in touch.</span>}
              {status === 'error' && <span className="text-red-600 ml-3">Something went wrong.</span>}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
