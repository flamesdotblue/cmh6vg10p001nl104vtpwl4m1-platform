import { Rocket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-sky-500 to-fuchsia-500">
            <Rocket className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight">HoloID</span>
        </a>
        <nav className="flex items-center gap-2">
          <a href="#features" className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-white">Features</a>
          <a href="#get-started" className="rounded-md bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-white/90">Get Started</a>
          <button className="ml-1 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
}
