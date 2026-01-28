import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-32 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 texture pointer-events-none" />
      
      {/* Nested arch frame background effect */}
      <div className="absolute inset-8 border border-copper-dim/20 pointer-events-none" />
      <div className="absolute inset-12 border border-copper-dim/10 pointer-events-none" />
      
      {/* Central glow - warm like reference */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-copper/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Copper line top */}
        <div className="copper-line mb-16" />
        
        {/* Top badge - like reference lighting */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-12 bg-copper-dim/50" />
          <span className="text-copper font-mono text-xs tracking-[0.4em] uppercase">
            Est. MMXXI
          </span>
          <div className="h-px w-12 bg-copper-dim/50" />
        </div>

        {/* Logo in arch frame */}
        <div className="mb-12 flex justify-center">
          <div className="arch-frame p-8 inline-flex">
            <Image 
              src="/wordmark.png" 
              alt="Shiny Object Social Club" 
              width={280} 
              height={56}
              className="opacity-95"
            />
          </div>
        </div>

        {/* Main headline - nested like reference arches */}
        <div className="mb-12 text-center">
          <p className="text-copper-dim font-mono text-xs tracking-[0.5em] uppercase mb-8">
            The AI Discovery Society
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.1] tracking-tight">
            <span className="block text-marble">Observe the future.</span>
            <span className="block shiny-text mt-4">Before it arrives.</span>
          </h1>
        </div>

        {/* Description with glass panel */}
        <div className="glass max-w-xl mx-auto p-8 rounded-sm mb-12 border-t border-copper/30">
          <p className="text-foreground-muted text-center leading-relaxed">
            500+ builders, researchers, and visionaries. 
            A society for those who see what others cannot.
          </p>
        </div>

        {/* Classical three-column stats - like reference steps */}
        <div className="flex justify-center gap-px bg-border/50 mb-16 max-w-2xl mx-auto">
          {[
            { num: "500+", label: "Members" },
            { num: "MMXXI", label: "Founded" },
            { num: "47", label: "Spots Left" },
          ].map((stat, i) => (
            <div key={i} className="column px-8 py-6 text-center flex-1 bg-background">
              <span className="block text-3xl font-serif text-marble mb-1">{stat.num}</span>
              <span className="text-foreground-muted/60 text-xs uppercase tracking-widest font-mono">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs - copper styling */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-copper/10 border border-copper text-copper font-mono text-sm tracking-wider rounded-sm hover:bg-copper/20 transition-all glow-copper"
          >
            Enter the Club — $99/year
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#inside"
            className="inline-flex items-center justify-center px-10 py-5 border border-stone text-foreground-muted font-mono text-sm tracking-wider rounded-sm hover:border-copper/50 hover:text-foreground transition-colors"
          >
            Discover what&apos;s inside
          </a>
        </div>

        {/* Copper line bottom */}
        <div className="copper-line mt-16" />
        
        {/* Footer text */}
        <p className="mt-8 text-foreground-muted/40 font-mono text-xs text-center tracking-wider">
          ESTABLISHED MMXXI · REACTIVATED MMXXVI
        </p>
      </div>
    </section>
  );
}
