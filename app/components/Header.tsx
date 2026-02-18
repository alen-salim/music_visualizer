import { AudioLines } from "lucide-react";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-8 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <AudioLines color="#ffffff" />
          </div>
          <span className="text-xl font-bold tracking-tight">VISUALIZER</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a className="hover:text-primary transition-colors" href="#">
            Templates
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Pricing
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Showcase
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:text-primary transition-colors px-4">
            Log In
          </button>
          <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
            Go Pro
          </button>
        </div>
      </div>
    </nav>
  );
}
