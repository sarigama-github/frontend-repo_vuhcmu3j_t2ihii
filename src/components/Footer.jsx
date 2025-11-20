export default function Footer() {
  return (
    <footer className="mt-16 border-t border-sage/20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-xl bg-forest" />
            <span className="font-semibold text-forest">BenVenturing</span>
          </div>
          <p className="text-sage">Exploration • Entrepreneurship • Faith • AI</p>
        </div>
        <div>
          <h4 className="font-semibold text-forest mb-2">Links</h4>
          <ul className="space-y-2 text-sage">
            <li><a href="/contact" className="hover:text-forest">Contact</a></li>
            <li><a href="#" className="hover:text-forest">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-forest mb-2">Reach me</h4>
          <p className="text-sage">hello@benventuring.com</p>
        </div>
      </div>
      <div className="text-center text-sm text-sage py-4">© {new Date().getFullYear()} BenVenturing</div>
    </footer>
  )
}
