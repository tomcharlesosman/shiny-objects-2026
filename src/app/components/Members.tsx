const memberTypes = [
  { role: "Founders", count: "120+", code: "TYPE_ALPHA" },
  { role: "Engineers", count: "200+", code: "TYPE_BETA" },
  { role: "Researchers", count: "80+", code: "TYPE_GAMMA" },
  { role: "Creatives", count: "100+", code: "TYPE_DELTA" },
];

const testimonials = [
  {
    quote: "This community has saved me hundreds of hours of research. I know what's happening before my competitors do.",
    author: "Sarah K.",
    role: "Founder",
  },
  {
    quote: "The signal-to-noise ratio here is incredible. No hype, just what actually matters.",
    author: "Marcus T.",
    role: "ML Engineer",
  },
  {
    quote: "I've been here since 2021. The relaunch with AI focus is exactly what I needed.",
    author: "Jessica L.",
    role: "Product Designer",
  },
];

export default function Members() {
  return (
    <section className="py-32 px-6 border-t border-border bg-background-alt/30 relative">
      {/* LED accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-amber/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-amber font-mono text-xs">[ MEMBER_COMPOSITION ]</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-20">
          {memberTypes.map((type) => (
            <div key={type.role} className="column p-6 text-center bg-background">
              <span className="text-amber/40 font-mono text-xs block mb-2">{type.code}</span>
              <span className="block text-3xl font-serif text-marble mb-1">{type.count}</span>
              <span className="text-foreground-muted text-xs uppercase tracking-wider">{type.role}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.author} className="glass p-6 rounded border-l-2 border-amber/30">
              <p className="text-foreground-muted mb-6 leading-relaxed text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-serif text-marble">{t.author}</p>
                <p className="text-foreground-muted/50 text-xs font-mono">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
