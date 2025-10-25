import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 text-center md:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-sky-400" />
          Futuristic digital identity
        </span>
        <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Iridescent identity for a modern web
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-slate-300">
          Secure, verifiable profiles with a holographic touch. Trusted by fintechs and builders to prove identity without friction.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/20 hover:bg-white/90"
          >
            Get started
          </a>
          <a
            href="#features"
            className="rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
