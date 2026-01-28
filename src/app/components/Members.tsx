const memberTypes = [
  { role: "Founders", count: "120+" },
  { role: "Engineers", count: "200+" },
  { role: "Researchers", count: "80+" },
  { role: "Creatives", count: "100+" },
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
    <section className="py-32 px-6 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-copper font-mono text-xs tracking-wider">MEMBERS</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Stats - rounded like elevator buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20">
          {memberTypes.map((type) => (
            <div key={type.role} className="glass p-6 rounded-2xl text-center underlight">
              <span className="block text-3xl font-serif text-cream mb-1">{type.count}</span>
              <span className="text-foreground-muted/60 text-xs uppercase tracking-widest font-mono">{type.role}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.author} className="glass p-6 rounded-2xl border border-copper/20 underlight">
              <p className="text-foreground-muted mb-6 leading-relaxed text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-serif text-cream">{t.author}</p>
                <p className="text-foreground-muted/50 text-xs font-mono">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
