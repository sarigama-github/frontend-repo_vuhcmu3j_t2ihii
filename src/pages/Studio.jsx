import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Studio() {
  return (
    <>
      <NavBar />
      <main>
        <section className="bg-[linear-gradient(180deg,#F7EFE6,white)] py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-navy mb-2">Voyage Studio</h1>
            <p className="text-slate-700">UGC, photography, reels, 3D renderings, and drone fly-throughs — priced transparently.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            {[
              {name:'Photography',desc:'Brand lifestyle photography, editorial, and product shoots.',price:'USD 600/day'},
              {name:'Short-form Reels',desc:'30–60 second UGC & promotional reels with on-site editing.',price:'USD 450/clip'},
              {name:'Mid-form Video',desc:'2–8 minute promo/brand videos.',price:'USD 1,200/project'},
              {name:'Drone Flythroughs',desc:'Cinematic drone video and mapping for properties.',price:'USD 600/flight'},
              {name:'3D Location Renderings',desc:'Architectural 3D renders and walkthroughs.',price:'USD 900/render'},
              {name:'Packages',desc:'Combined packages for content & visuals with discounted rates.',price:'USD 1,800'},
            ].map((s)=> (
              <div key={s.name} className="rounded-2xl bg-white p-6 border border-teal-100 shadow-[0_6px_20px_rgba(13,43,62,0.08)]">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-slate-900">{s.name}</h3>
                  <div className="text-teal-700 text-sm">Starting {s.price}</div>
                </div>
                <p className="text-slate-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-5xl mx-auto px-4 mt-8 text-right">
            <a href="/contact#quote" className="inline-flex px-5 py-3 rounded-full bg-navy text-white">Request a Quote</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
