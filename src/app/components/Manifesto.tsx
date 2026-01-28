export default function Manifesto() {
  return (
    <section className="py-32 px-6 relative">
      {/* LED accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-amber/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto">
        {/* Problem */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-amber font-mono text-xs">[ WARNING ]</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-normal leading-tight mb-8 text-marble">
            The signal is drowning in noise.
          </h2>
          <div className="glass p-6 rounded border-l-2 border-amber/50">
            <p className="text-foreground-muted text-lg leading-relaxed">
              Every day, new models emerge. New tools launch. The future arrives faster than you can track it. 
              By the time you hear about it, the opportunity has passed.
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-amber font-mono text-xs">[ SOLUTION ]</span>
            <div className="flex-1 h-px bg-amber/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-normal leading-tight mb-8">
            <span className="text-marble">500 minds.</span>
            <br />
            <span className="shiny-text">One signal.</span>
          </h2>
          <div className="glass p-8 rounded-lg border border-amber/20">
            <p className="text-foreground-muted text-lg leading-relaxed mb-6">
              Since 2021, the Shiny Object Social Club has operated as a gathering of builders, 
              researchers, and those who see around corners.
            </p>
            <div className="flex flex-wrap gap-3 font-mono text-xs">
              {["Daily Intel", "Private Discord", "Weekly Calls", "Resource Library"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 border border-steel rounded text-foreground-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
