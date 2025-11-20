import { useEffect, useState } from 'react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const sendLead = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${backend}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, note: message, source: 'chatbot' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('ok')
      setMessage('')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button onClick={() => setOpen(true)} className="rounded-full px-5 py-3 shadow-[0_20px_60px_rgba(13,43,62,0.10)] bg-teal-600 text-white">
          Hey — how can I help you?
        </button>
      )}
      {open && (
        <div className="w-80 rounded-2xl bg-white shadow-2xl border border-teal-100 overflow-hidden">
          <div className="px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white flex items-center justify-between">
            <span className="font-semibold">Untethered Assistant</span>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">✕</button>
          </div>
          <div className="p-4 space-y-3">
            <p className="text-sm text-slate-600">Lead capture only for now. Drop your email and what you need — we’ll follow up.</p>
            <form onSubmit={sendLead} className="space-y-2">
              <input type="email" required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border rounded-md px-3 py-2" />
              <textarea placeholder="What can we build together?" value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full border rounded-md px-3 py-2 h-20" />
              <button type="submit" className="w-full rounded-md bg-teal-600 text-white py-2">
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
              {status === 'ok' && <p className="text-teal-700 text-sm">Thanks! We’ll be in touch.</p>}
              {status === 'error' && <p className="text-red-600 text-sm">Something went wrong.</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
