import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About BV', href: '/about' },
  { label: 'Voyage Studio', href: '/studio' },
  { label: 'Ether Flow', href: '/aetherflo' },
  { label: 'Untethered', href: '/untethered' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b" style={{background:'#F6F3ED', borderColor:'#E4E0D9'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl" style={{background:'#38664D'}} />
          <span className="font-semibold" style={{color:'#38664D'}}>BenVenturing</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors" style={{color:'#5E7E6A'}}>
              {item.label}
            </a>
          ))}
          <a href="/contact" className="px-4 py-2 rounded-full text-white transition-colors" style={{background:'#F7B347'}}>
            Let’s touch base
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu" style={{color:'#38664D'}}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{background:'#F6F3ED', borderColor:'#E4E0D9'}}>
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-2" style={{color:'#5E7E6A'}}>
                {item.label}
              </a>
            ))}
            <a href="/contact" className="mt-2 px-4 py-2 rounded-full text-center text-white" style={{background:'#F7B347'}}>Let’s touch base</a>
          </div>
        </div>
      )}
    </header>
  )
}
