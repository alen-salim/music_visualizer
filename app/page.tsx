import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-linear-to-b from-primary/20 to-transparent blur-[120px] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New Release v1.0
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none">
            Visualize Your <span className="text-primary">Sound.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Create stunning, professional music visualizers in seconds. No
            editing skills required. Just your track and your creativity.
          </p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 pb-24"></main>
    </div>
  );
}
