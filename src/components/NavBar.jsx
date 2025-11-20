import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Ben', href: '/about' },
  { label: 'Voyage Studio', href: '/studio' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Aetherflo', href: '/aetherflo' },
  { label: 'Untethered (Community)', href: '/untethered' },
  { label: 'Contact', href: '/contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-teal-500/90 shadow-[0_6px_20px_rgba(14,165,163,0.35)]" />
          <span className="font-semibold text-navy-900">Ben Venturing</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-600 hover:text-teal-700 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="/untethered/join" className="px-4 py-2 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors">
            Join Untethered
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-teal-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="/untethered/join" className="mt-2 px-4 py-2 rounded-full bg-teal-600 text-white text-center">Join Untethered</a>
          </div>
        </div>
      )}
    </header>
  )
}
