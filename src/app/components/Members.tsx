const memberTypes = [
  { role: "Founders", count: "120+", icon: "🚀" },
  { role: "Engineers", count: "200+", icon: "⚙️" },
  { role: "Researchers", count: "80+", icon: "🔬" },
  { role: "Creatives", count: "100+", icon: "✨" },
];

const testimonials = [
  {
    quote: "This community has saved me hundreds of hours of research. I know what's happening before my competitors do.",
    author: "Sarah K.",
    role: "Founder, AI Startup",
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
    <section className="py-32 px-6 border-t border-border bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-secondary font-mono text-sm mb-4">THE MEMBERS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who&apos;s Here
          </h2>
        </div>

        {/* Member stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {memberTypes.map((type) => (
            <div key={type.role} className="text-center p-6 border border-border rounded-xl bg-background">
              <div className="text-3xl mb-2">{type.icon}</div>
              <div className="text-3xl font-bold text-accent">{type.count}</div>
              <div className="text-foreground-muted text-sm">{type.role}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="p-6 border border-border rounded-xl bg-background">
              <p className="text-foreground-muted mb-6 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{t.author}</p>
                <p className="text-foreground-muted text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
