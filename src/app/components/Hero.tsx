export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Urgency pricing bar */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-mono text-sm mb-6">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Relaunch pricing: $29 → $49 · 100 spots left
        </div>
        
        {/* OG badge */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 border border-accent-warm/50 text-accent-warm font-mono text-xs rounded-full">
            Est. 2021 · 500+ OG Members
          </span>
        </div>
        
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="shiny-text">Shiny Object</span>
          <br />
          <span className="text-foreground">Social Club</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
          See the next big thing in AI before everyone else.
        </p>
        
        <p className="text-muted max-w-xl mx-auto mb-12">
          A paid community relaunching in 2026. For builders, researchers, and curious minds 
          discovering what's possible with AI and digital technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://discord.gg/your-invite-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Join the Club — $29/month
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 border border-border font-semibold rounded-lg hover:bg-hover transition-colors"
          >
            See what's inside
          </a>
        </div>
        
        {/* ls-style feature list */}
        <div className="mt-16 font-mono text-sm text-left max-w-md mx-auto">
          <div className="text-muted mb-2">$ ls features/</div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1">
            <span className="text-accent">●</span> Private Discord
            <span className="text-accent">●</span> Daily intel
            <span className="text-accent-warm">◐</span> Weekly calls
            <span className="text-accent-warm">◐</span> Resource library
          </div>
        </div>
      </div>
    </section>
  );
}
