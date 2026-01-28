export default function Manifesto() {
  return (
    <section className="py-32 px-6 relative">
      {/* Greek key pattern divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-4 opacity-20">
        <svg viewBox="0 0 200 20" fill="none" className="w-full h-full text-amber">
          <path d="M0 10h20v-10h20v10h20v-10h20v10h20v-10h20v10h20v-10h20v10h20" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Problem - framed like an archway */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-amber/30" />
            <span className="text-amber/70 font-mono text-xs tracking-[0.3em] uppercase">The Challenge</span>
            <div className="h-px w-16 bg-amber/30" />
          </div>
          
          {/* Nested arch frame */}
          <div className="relative">
            <div className="absolute -inset-4 border border-wood/20 rounded-t-[40px] rounded-b-lg" />
            <div className="absolute -inset-2 border border-amber/10 rounded-t-[32px] rounded-b-md" />
            <div className="relative glass p-10 rounded-t-[24px] rounded-b-sm border-t border-amber/20">
              <h2 className="text-4xl md:text-5xl font-serif font-normal leading-tight mb-6 text-cream text-center">
                The signal is drowning in noise.
              </h2>
              <p className="text-foreground-muted leading-relaxed text-center max-w-2xl mx-auto">
                Every day, new models emerge. New tools launch. The future arrives faster than you can track it. 
                By the time you hear about it, the opportunity has passed.
              </p>
            </div>
          </div>
        </div>

        {/* Solution - illuminated like entrance */}
        <div className="relative">
          {/* Amber glow behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber/5 rounded-full blur-3xl" />
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-amber" />
            <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase">The Solution</span>
            <div className="h-px w-16 bg-amber" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-normal leading-tight mb-8 text-center">
            <span className="block text-cream">500 minds.</span>
            <span className="block shiny-text mt-3">One signal.</span>
          </h2>
          
          {/* Glass panel with amber border */}
          <div className="glass p-8 rounded-lg border border-amber/30 relative overflow-hidden">
            {/* Side light effect */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber/40 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber/40 to-transparent" />
            
            <p className="text-foreground-muted leading-relaxed mb-6 text-center">
              Since 2021, the Shiny Object Social Club has operated as a gathering of builders, 
              researchers, and those who see around corners.
            </p>
            <div className="flex flex-wrap justify-center gap-3 font-mono text-xs">
              {["Daily Intel", "Private Discord", "Weekly Calls", "Resource Library"].map((tag) => (
                <span key={tag} className="px-4 py-2 border border-wood rounded-md text-foreground-muted bg-background/50">
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
