export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#292524_1px,transparent_1px),linear-gradient(to_bottom,#292524_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top bar */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full border border-accent/20">
            Est. 2021
          </span>
          <span className="px-3 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-mono rounded-full border border-accent-secondary/20">
            500+ Members
          </span>
          <span className="px-3 py-1 bg-accent-warm/10 text-accent-warm text-xs font-mono rounded-full border border-accent-warm/20">
            Relaunch 2026
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
          <span className="block text-foreground">SHINY</span>
          <span className="block shiny-text">OBJECT</span>
          <span className="block text-foreground-muted">CLUB</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-foreground-muted max-w-xl mb-4 leading-relaxed">
          The AI discovery community. 
          See what&apos;s next before everyone else.
        </p>

        <p className="text-foreground-muted max-w-lg mb-12">
          Since 2021, 500+ builders, researchers, and curious minds 
          have gathered here to spot the signal in the noise.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background font-bold text-lg rounded-lg hover:bg-accent/90 transition-all glow"
          >
            Join the Club
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#inside"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-hover transition-colors"
          >
            See what&apos;s inside
          </a>
        </div>

        {/* Urgency */}
        <div className="mt-12 flex items-center gap-4 text-sm font-mono">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-foreground-muted">
            Relaunch pricing: <span className="text-accent line-through">$49</span> $29/month · 47 spots left
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-muted text-xs font-mono">
        <span>Scroll</span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
  );
}
