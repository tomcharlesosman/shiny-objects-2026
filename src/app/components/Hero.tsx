import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-32 overflow-hidden">
      {/* LED grid background */}
      <div className="absolute inset-0 grid-led" />
      
      {/* Vertical LED columns - like illuminated Greek columns */}
      <div className="absolute inset-0 flex justify-around opacity-30">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-amber/20 to-transparent" />
        ))}
      </div>
      
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* LED line top */}
        <div className="led-line mb-12" />
        
        {/* Status indicator - like LED display */}
        <div className="flex items-center gap-3 mb-12 font-mono text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 border border-amber/30 rounded bg-amber/5">
            <span className="w-1.5 h-1.5 bg-amber rounded-full animate-pulse" />
            <span className="text-amber">SYSTEM ACTIVE</span>
          </div>
          <span className="text-foreground-muted">MMXXI→MMXXVI</span>
        </div>

        {/* Logo with LED border */}
        <div className="mb-12 inline-flex items-center gap-4 p-4 border border-amber/20 rounded bg-glass">
          <Image 
            src="/wordmark.png" 
            alt="Shiny Object Social Club" 
            width={240} 
            height={48}
            className="opacity-95"
          />
        </div>

        {/* Main headline - monumental */}
        <div className="mb-12">
          <p className="text-amber/60 font-mono text-xs tracking-[0.5em] uppercase mb-6">
            The AI Discovery Protocol
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.95] tracking-tight">
            <span className="block text-marble">Observe</span>
            <span className="block text-marble">the future.</span>
            <span className="block shiny-text mt-2">Before it arrives.</span>
          </h1>
        </div>

        {/* Description with glass panel */}
        <div className="glass max-w-2xl p-6 rounded-lg mb-12 border-l-2 border-amber">
          <p className="text-foreground-muted text-lg leading-relaxed">
            500+ builders, researchers, and visionaries. 
            A society for those who see what others cannot.
          </p>
        </div>

        {/* Classical three-column stats */}
        <div className="grid grid-cols-3 gap-px bg-border mb-12 max-w-2xl">
          <div className="column p-6 text-center">
            <span className="block text-3xl font-serif text-marble mb-1">500+</span>
            <span className="text-foreground-muted text-xs font-mono uppercase tracking-wider">Members</span>
          </div>
          <div className="column p-6 text-center">
            <span className="block text-3xl font-serif text-marble mb-1">MMXXI</span>
            <span className="text-foreground-muted text-xs font-mono uppercase tracking-wider">Founded</span>
          </div>
          <div className="column p-6 text-center">
            <span className="block text-3xl font-serif text-amber mb-1">47</span>
            <span className="text-foreground-muted text-xs font-mono uppercase tracking-wider">Spots Left</span>
          </div>
        </div>

        {/* CTAs with LED styling */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-amber/10 border border-amber text-amber font-mono text-sm tracking-wider rounded hover:bg-amber/20 transition-all glow-led"
          >
            [ INITIATE_MEMBERSHIP ]
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#inside"
            className="inline-flex items-center justify-center px-10 py-5 border border-steel text-foreground-muted font-mono text-sm tracking-wider rounded hover:border-foreground/30 hover:text-foreground transition-colors"
          >
            [ ACCESS_INTELLIGENCE ]
          </a>
        </div>

        {/* LED line bottom */}
        <div className="led-line mt-16" />
        
        {/* Footer text */}
        <p className="mt-6 text-foreground-muted/50 font-mono text-xs text-center">
          ESTABLISHED MMXXI · REACTIVATED MMXXVI
        </p>
      </div>
    </section>
  );
}
