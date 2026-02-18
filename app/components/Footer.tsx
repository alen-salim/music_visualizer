import { AudioLines, Camera, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 grayscale opacity-50">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <AudioLines color="#000000" />
          </div>
          <span className="text-sm font-bold tracking-tight">VISUALIZER</span>
        </div>
        <div className="flex items-center gap-8 text-xs font-medium text-white/40">
          <a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Help Center
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Contact Support
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center cursor-pointer hover:text-primary transition-colors">
            <Globe color="#ffffff" />
          </div>
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center cursor-pointer hover:text-primary transition-colors">
            <Camera color="#ffffff" />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-[10px] text-white/20 uppercase tracking-[0.2em]">
        © 2024 Visualizer Studio Inc. All rights reserved.
      </div>
    </footer>
  );
}
