import { Shield, Zap, Star, CheckCircle } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Verified by design',
    desc: 'Blue-check cryptographic proofs so your users can trust identities instantly.'
  },
  {
    icon: Zap,
    title: 'Fast and seamless',
    desc: 'One-tap onboarding flows that reduce friction across fintech and web apps.'
  },
  {
    icon: Star,
    title: 'Holographic branding',
    desc: 'A stylized, iridescent profile card that feels premium and future-forward.'
  },
  {
    icon: CheckCircle,
    title: 'Privacy-first',
    desc: 'Selective disclosure keeps sensitive data safe while proving what matters.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Everything you need to trust at a glance</h2>
        <p className="mt-3 text-slate-300">
          Bring modern verification to your product with delightful, developer-friendly components.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-500 text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
