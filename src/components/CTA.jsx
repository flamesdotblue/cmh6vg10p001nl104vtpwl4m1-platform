export default function CTA() {
  return (
    <section id="get-started" className="relative z-10 mx-auto max-w-7xl px-4 pb-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-12">
        <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-30 blur-2xl" style={{background:"radial-gradient(800px 200px at 20% 20%, rgba(56,189,248,0.4), transparent), radial-gradient(600px 200px at 80% 50%, rgba(232,121,249,0.35), transparent)"}} />
        <div className="relative">
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">Ready to ship a futuristic identity experience?</h3>
          <p className="mt-2 max-w-2xl text-slate-300">Integrate our React components and Spline-powered visuals in minutes. Delight users and increase trust from day one.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90">Start for free</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">See how it works</a>
          </div>
        </div>
      </div>
    </section>
  );
}
