const features = [
  {
    title: "Daily Intel",
    description: "5-7 curated items every morning. Models, tools, research. Filtered signal.",
    code: "INTEL_DAILY",
  },
  {
    title: "Private Discord",
    description: "Real-time discussions with 500+ members. No noise. All signal.",
    code: "NETWORK_PRIVATE",
  },
  {
    title: "Weekly Calls",
    description: "Deep dives with founders, researchers, those shipping real products.",
    code: "BRIEFING_WEEKLY",
  },
  {
    title: "Resource Library",
    description: "Prompts, workflows, tools. Everything we use. Documented.",
    code: "ARCHIVE_RESOURCES",
  },
  {
    title: "Early Access",
    description: "Beta invites, new tools, exclusive deals. Members first.",
    code: "ACCESS_PRIORITY",
  },
  {
    title: "Member Network",
    description: "Connect with builders, founders, researchers. Next collaborator.",
    code: "CONNECT_NETWORK",
  },
];

export default function Inside() {
  return (
    <section id="inside" className="py-32 px-6 border-t border-border relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-amber font-mono text-xs">[ CAPABILITIES ]</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif text-marble mb-4">
          System Capabilities
        </h2>
        <p className="text-foreground-muted max-w-xl mb-12">
          Everything required to maintain observational advantage.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.code}
              className="group p-6 rounded border border-steel bg-glass hover:border-amber/30 transition-all"
            >
              <span className="text-amber/40 font-mono text-xs block mb-3">{feature.code}</span>
              <h3 className="text-lg font-serif text-marble mb-2">{feature.title}</h3>
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
