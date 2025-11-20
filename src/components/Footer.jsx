export default function Footer() {
  return (
    <footer className="mt-16 border-t border-teal-100 bg-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-xl bg-teal-500/90" />
            <span className="font-semibold">Ben Venturing</span>
          </div>
          <p className="text-slate-600">Exploration • Entrepreneurship • Faith • AI</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Studio</h4>
          <ul className="space-y-2 text-slate-600">
            <li><a href="/studio" className="hover:text-teal-700">Services</a></li>
            <li><a href="/portfolio" className="hover:text-teal-700">Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Community</h4>
          <ul className="space-y-2 text-slate-600">
            <li><a href="/untethered" className="hover:text-teal-700">Untethered</a></li>
            <li><a href="/untethered/join" className="hover:text-teal-700">Join</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-2 text-slate-600">
            <li><a href="/contact#book" className="hover:text-teal-700">Book a Call</a></li>
            <li><a href="/contact" className="hover:text-teal-700">Contact Form</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-slate-500 py-4">© {new Date().getFullYear()} Ben Venturing</div>
    </footer>
  )
}
