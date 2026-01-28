import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-24 overflow-hidden">
      {/* Soft texture */}
      <div className="absolute inset-0 texture-soft pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber/5 rounded-full blur-3xl" />
      
      {/* Outer frame */}
      <div className="absolute inset-6 border border-wood/20 rounded-[24px] pointer-events-none" />
      <div className="absolute inset-10 border border-copper/10 rounded-[20px] pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* EST Badge */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-copper-dim/40" />
          <span className="text-copper font-mono text-xs tracking-[0.4em] uppercase">
            Est. MMXXI
          </span>
          <div className="h-px w-12 bg-copper-dim/40" />
        </div>

        {/* Logo */}
        <div className="mb-6">
          <div className="p-5 border border-copper/20 rounded-2xl bg-glass">
            <Image 
              src="/logo-sosc.png" 
              alt="Shiny Object Social Club" 
              width={100} 
              height={100}
              className="opacity-60"
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-amber/70 font-mono text-xs tracking-[0.3em] uppercase mb-6">
          The AI Discovery Society
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-[1.1] mb-8">
          <span className="block text-cream">Observe the future.</span>
          <span className="block shiny-text mt-2">Before it arrives.</span>
        </h1>

        {/* Description */}
        <div className="glass max-w-md px-8 py-6 rounded-xl border border-copper/10 mb-10">
          <p className="text-foreground-muted leading-relaxed text-sm">
            500+ builders, researchers, and visionaries. 
            A society for those who see what others cannot.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-3 mb-10 w-full max-w-md">
          {[
            { num: "500+", label: "Members" },
            { num: "MMXXI", label: "Founded" },
            { num: "47", label: "Spots" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 glass py-4 px-2 rounded-lg border border-wood/50">
              <span className="block text-xl font-serif text-cream mb-0.5">{stat.num}</span>
              <span className="text-foreground-muted/50 text-[10px] uppercase tracking-wider font-mono">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber/10 border border-amber/50 text-amber font-mono text-sm tracking-wider rounded-lg hover:bg-amber/20 transition-all"
          >
            Enter the Club — $99/year
            <span>→</span>
          </a>
          <a
            href="#inside"
            className="inline-flex items-center justify-center px-6 py-3.5 border border-wood text-foreground-muted font-mono text-sm tracking-wider rounded-lg hover:border-copper/50 hover:text-foreground transition-colors"
          >
            Discover what&apos;s inside
          </a>
        </div>

      </div>
    </section>
  );
}
