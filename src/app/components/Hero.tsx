export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1e2e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-20" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Logo - Four-pointed star sparkle matching brand */}
        <div className="mb-12">
          <svg width="64" height="64" viewBox="0 0 100 100" fill="none" className="sparkle">
            {/* Outer circle - purple */}
            <circle cx="50" cy="50" r="45" stroke="#6625f4" strokeWidth="2" fill="none" />
            {/* Four-pointed star - cyan/white gradient effect */}
            <path 
              d="M50 10 L55 40 L90 50 L55 60 L50 90 L45 60 L10 50 L45 40 Z" 
              fill="#3fd5dd"
            />
            {/* Center dot */}
            <circle cx="50" cy="50" r="8" fill="#6625f4" />
          </svg>
        </div>

        {/* Main headline */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
            <span className="block text-foreground">The only community</span>
            <span className="block text-foreground">you need to stay</span>
            <span className="block shiny-text">at the edge of AI.</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-foreground-muted max-w-2xl mb-8 leading-relaxed">
          Since 2021, 500+ builders, researchers, and curious minds 
          gather here to spot what matters before it hits the mainstream.
        </p>

        {/* Social proof */}
        <p className="text-foreground-muted text-sm mb-12">
          Trusted by founders, engineers, and product leaders
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg hover:bg-accent/90 transition-all glow"
          >
            Join the Club — $99/year
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#inside"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-hover transition-colors"
          >
            See what&apos;s inside
          </a>
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
