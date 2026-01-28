import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-32 overflow-hidden">
      {/* Soft texture */}
      <div className="absolute inset-0 texture-soft pointer-events-none" />
      
      {/* Ambient under-lighting glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-copper/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-champagne/3 rounded-full blur-3xl" />
      
      {/* Portal frame - like elevator doorway */}
      <div className="absolute inset-8 border border-wood/20 rounded-[32px] pointer-events-none" />
      <div className="absolute inset-12 border border-copper/10 rounded-[28px] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Copper line top */}
        <div className="copper-line mb-16" />
        
        {/* Badge - warm like elevator controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-copper-dim/40" />
          <span className="text-copper font-mono text-xs tracking-[0.4em] uppercase">
            Est. MMXXI
          </span>
          <div className="h-px w-16 bg-copper-dim/40" />
        </div>

        {/* Logo in rounded arch frame - elevator style */}
        <div className="mb-12 flex justify-center">
          <div className="arch-rounded p-10 inline-flex bg-glass underlight">
            <Image 
              src="/wordmark.png" 
              alt="Shiny Object Social Club" 
              width={300} 
              height={60}
              className="opacity-95"
            />
          </div>
        </div>

        {/* Main headline - centered like elevator panel */}
        <div className="mb-10 text-center">
          <p className="text-copper-dim font-mono text-xs tracking-[0.5em] uppercase mb-6">
            The AI Discovery Society
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-[1.15] tracking-tight">
            <span className="block text-cream">Observe the future.</span>
            <span className="block shiny-text mt-3">Before it arrives.</span>
          </h1>
        </div>

        {/* Description - glass panel like elevator interior */}
        <div className="glass max-w-lg mx-auto p-8 rounded-2xl mb-10 underlight">
          <p className="text-foreground-muted text-center leading-relaxed">
            500+ builders, researchers, and visionaries. 
            A society for those who see what others cannot.
          </p>
        </div>

        {/* Stats - like elevator floor buttons */}
        <div className="flex justify-center gap-2 mb-12 max-w-lg mx-auto">
          {[
            { num: "500+", label: "Members" },
            { num: "MMXXI", label: "Founded" },
            { num: "47", label: "Spots" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 glass p-5 rounded-xl text-center underlight">
              <span className="block text-2xl font-serif text-cream mb-1">{stat.num}</span>
              <span className="text-foreground-muted/60 text-xs uppercase tracking-wider font-mono">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs - soft rounded like elevator buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-copper/10 border border-copper text-copper font-mono text-sm tracking-wider rounded-xl hover:bg-copper/20 transition-all glow-soft"
          >
            Enter the Club — $99/year
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#inside"
            className="inline-flex items-center justify-center px-8 py-4 border border-wood text-foreground-muted font-mono text-sm tracking-wider rounded-xl hover:border-copper/50 hover:text-foreground transition-colors"
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
