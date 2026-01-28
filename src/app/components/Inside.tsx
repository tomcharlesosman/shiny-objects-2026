const features = [
  {
    title: "Daily Intel",
    description: "5-7 curated items every morning. Models, tools, research. No fluff.",
    icon: "📡",
  },
  {
    title: "Private Discord",
    description: "Real-time discussions with 500+ OG members. No noise, all signal.",
    icon: "💬",
  },
  {
    title: "Weekly Calls",
    description: "Deep dives with founders, researchers, and people shipping real products.",
    icon: "🎙️",
  },
  {
    title: "Resource Library",
    description: "Prompts, workflows, tools. Everything we use, documented.",
    icon: "📚",
  },
  {
    title: "Early Access",
    description: "Beta invites, new tools, exclusive deals. Members get first dibs.",
    icon: "⚡",
  },
  {
    title: "Member Network",
    description: "Connect with builders, founders, researchers. Your next collaborator is here.",
    icon: "🤝",
  },
];

export default function Inside() {
  return (
    <section id="inside" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm mb-4">WHAT YOU GET</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Inside the Club
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
            Everything you need to stay ahead of the curve in AI and digital technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
