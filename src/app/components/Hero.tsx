export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#292524_1px,transparent_1px),linear-gradient(to_bottom,#292524_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-20" />
        {/* Gradient orbs - subtle */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-warm/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top bar */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          <span className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20">
            Est. 2021
          </span>
          <span className="px-3 py-1.5 bg-accent-secondary/10 text-accent-secondary text-xs font-mono rounded-full border border-accent-secondary/20">
            500+ Members
          </span>
          <span className="px-3 py-1.5 bg-accent-warm/10 text-accent-warm text-xs font-mono rounded-full border border-accent-warm/20">
            Relaunch 2026
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <p className="text-foreground-muted font-mono text-sm mb-6 tracking-wider">
            THE AI DISCOVERY COMMUNITY
          </p>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-8">
            <span className="block text-foreground">SHINY</span>
            <span className="block shiny-text">OBJECT</span>
            <span className="block text-foreground-muted/50">CLUB</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="max-w-2xl mb-12">
          <p className="text-2xl md:text-3xl text-foreground leading-snug mb-6">
            See the next big thing in AI 
            <span className="text-accent">before</span> everyone else.
          </p>
          <p className="text-foreground-muted text-lg leading-relaxed">
            Since 2021, 500+ builders, researchers, and curious minds 
            gather here to spot what matters before it hits the mainstream.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-background font-bold text-lg rounded-xl hover:bg-accent/90 transition-all glow"
          >
            Join the Club — $99/year
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#inside"
            className="inline-flex items-center justify-center px-10 py-5 border border-border text-foreground font-semibold rounded-xl hover:bg-hover transition-colors"
          >
            See what&apos;s inside
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-8 text-sm font-mono text-foreground-muted border-t border-border pt-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>47 spots left</span>
          </div>
          <div>500+ members</div>
          <div>Daily intel</div>
          <div>Weekly calls</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted text-xs font-mono">
        <span>Scroll</span>
        <div className="w-px h-8 bg-border animate-pulse" />
      </div>
    </section>
  );
}
