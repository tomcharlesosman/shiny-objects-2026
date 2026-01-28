const features = [
  {
    title: "Daily Intel",
    description: "5-7 curated items every morning. Models, tools, research. Filtered signal.",
  },
  {
    title: "Private Discord",
    description: "Real-time discussions with 500+ members. No noise. All signal.",
  },
  {
    title: "Weekly Calls",
    description: "Deep dives with founders, researchers, those shipping real products.",
  },
  {
    title: "Resource Library",
    description: "Prompts, workflows, tools. Everything we use. Documented.",
  },
  {
    title: "Early Access",
    description: "Beta invites, new tools, exclusive deals. Members first.",
  },
  {
    title: "Member Network",
    description: "Connect with builders, founders, researchers. Next collaborator.",
  },
];

export default function Inside() {
  return (
    <section id="inside" className="py-32 px-6 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-copper font-mono text-xs tracking-wider">CAPABILITIES</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif text-cream mb-4">
          What You Receive
        </h2>
        <p className="text-foreground-muted max-w-xl mb-12">
          Everything required to maintain observational advantage.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass p-6 rounded-2xl border border-wood hover:border-copper/30 transition-all underlight"
            >
              <h3 className="text-lg font-serif text-cream mb-2">{feature.title}</h3>
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
