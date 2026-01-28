import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(102,37,244,0.15),transparent)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top nav area */}
        <div className="flex items-center justify-between mb-20">
          <Image 
            src="/logo.png" 
            alt="Shiny Object" 
            width={48} 
            height={48}
            className="opacity-90"
          />
          <div className="flex items-center gap-2 text-sm font-mono text-foreground-muted">
            <span className="w-2 h-2 bg-accent-secondary rounded-full animate-pulse" />
            <span>Est. 2021</span>
          </div>
        </div>

        {/* Wordmark */}
        <div className="mb-12">
          <Image 
            src="/wordmark.png" 
            alt="Shiny Object Social Club" 
            width={400} 
            height={80}
            className="opacity-95 max-w-full h-auto"
          />
        </div>

        {/* Main headline - editorial style */}
        <div className="max-w-4xl mb-12">
          <p className="text-accent-secondary font-mono text-sm tracking-widest uppercase mb-6">
            The AI Discovery Community
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            The only community you need to stay{" "}
            <span className="text-accent">at the edge of AI.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-xl text-foreground-muted max-w-2xl mb-8 leading-relaxed">
          500+ builders, researchers, and curious minds. 
          Spotting what matters before it hits the mainstream.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-8 text-sm font-mono text-foreground-muted mb-12 border-t border-border pt-8">
          <div>
            <span className="text-foreground text-2xl font-bold">500+</span>
            <span className="block">Members</span>
          </div>
          <div>
            <span className="text-foreground text-2xl font-bold">2021</span>
            <span className="block">Established</span>
          </div>
          <div>
            <span className="text-foreground text-2xl font-bold">Daily</span>
            <span className="block">Intel</span>
          </div>
          <div className="ml-auto">
            <span className="text-accent-secondary">47 spots left</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-white font-bold text-lg rounded-lg hover:bg-accent/90 transition-all"
            style={{ boxShadow: '0 0 60px -15px rgba(102, 37, 244, 0.5)' }}
          >
            Join the Club — $99/year
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#inside"
            className="inline-flex items-center justify-center px-10 py-5 border border-border text-foreground font-semibold rounded-lg hover:bg-hover transition-colors"
          >
            Explore what&apos;s inside
          </a>
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
