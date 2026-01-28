export default function About() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-copper/30" />
          <span className="text-copper font-mono text-xs tracking-[0.3em] uppercase">About</span>
          <div className="h-px w-12 bg-copper/30" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-cream text-center mb-8">
          The Society
        </h1>
        
        <div className="glass p-8 rounded-xl border border-copper/10 space-y-6">
          <p className="text-foreground-muted leading-relaxed">
            Founded in 2021, Shiny Object Social Club began as a gathering of curious minds 
            exploring the frontiers of digital technology. What started as informal conversations 
            between builders, researchers, and visionaries evolved into something more deliberate.
          </p>
          
          <p className="text-foreground-muted leading-relaxed">
            In 2026, we refocused. AI had become the single most consequential technology of our 
            lifetime, and the pace of change accelerated beyond what any individual could track alone. 
            We doubled down on our mission: spot what matters before it hits the mainstream.
          </p>
          
          <p className="text-foreground-muted leading-relaxed">
            Today, 500+ members gather here daily. We are founders, engineers, researchers, and 
            creatives united by one trait: we see around corners.
          </p>
        </div>
      </div>
    </main>
  );
}
