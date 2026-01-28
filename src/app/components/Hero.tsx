import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-32 overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Top ornament */}
        <div className="flex items-center gap-4 mb-16">
          <div className="ornament" />
          <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase">
            Est. MMXXI
          </span>
          <div className="ornament" />
        </div>

        {/* Logo mark - classical column-inspired */}
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-16 border border-stone-dark/50 flex flex-col justify-between py-2 px-3">
            <div className="w-full h-px bg-amber/50" />
            <div className="w-full h-px bg-stone-dark/30" />
            <div className="w-full h-px bg-stone-dark/30" />
            <div className="w-full h-px bg-stone-dark/30" />
            <div className="w-full h-px bg-amber/50" />
          </div>
          <Image 
            src="/wordmark.png" 
            alt="Shiny Object Social Club" 
            width={300} 
            height={60}
            className="opacity-90 max-w-[280px] h-auto"
          />
        </div>

        {/* Main headline - monumental */}
        <div className="mb-12 border-l border-amber/30 pl-8">
          <p className="text-stone-dark font-mono text-xs tracking-[0.4em] uppercase mb-6">
            The AI Discovery Community
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
            <span className="block text-foreground">The only</span>
            <span className="block text-foreground">community</span>
            <span className="block shiny-text font-normal">at the edge.</span>
          </h1>
        </div>

        {/* Classical three-column layout */}
        <div className="grid grid-cols-3 gap-8 mb-12 border-t border-border pt-8">
          <div className="pillar px-4">
            <span className="block text-3xl font-light text-foreground mb-1">500+</span>
            <span className="text-foreground-muted text-xs uppercase tracking-wider">Members</span>
          </div>
          <div className="pillar px-4">
            <span className="block text-3xl font-light text-foreground mb-1">MMXXI</span>
            <span className="text-foreground-muted text-xs uppercase tracking-wider">Founded</span>
          </div>
          <div className="pillar px-4">
            <span className="block text-3xl font-light text-foreground mb-1">Daily</span>
            <span className="text-foreground-muted text-xs uppercase tracking-wider">Intel</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-amber text-background font-semibold text-lg tracking-wide rounded-sm hover:bg-amber-glow transition-all glow"
          >
            Enter the Club — $99/year
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#inside"
            className="inline-flex items-center justify-center px-10 py-5 border border-stone-dark/50 text-foreground font-medium tracking-wide rounded-sm hover:border-amber/50 hover:bg-hover/50 transition-colors"
          >
            Discover what&apos;s inside
          </a>
        </div>

        {/* Bottom ornament */}
        <div className="mt-16 flex items-center gap-4">
          <div className="ornament" />
          <span className="text-foreground-muted font-mono text-xs">
            47 invitations remaining
          </span>
          <div className="ornament" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted text-xs font-mono">
        <span>↓</span>
      </div>
    </section>
  );
}
