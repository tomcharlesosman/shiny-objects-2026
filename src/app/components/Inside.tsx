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
    <section id="inside" className="py-32 px-6 border-t border-wood/30 relative">
      {/* Decorative column lines */}
      <div className="absolute top-0 bottom-0 left-[20%] w-px bg-gradient-to-b from-amber/20 via-transparent to-amber/20" />
      <div className="absolute top-0 bottom-0 right-[20%] w-px bg-gradient-to-b from-amber/20 via-transparent to-amber/20" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-12 bg-amber/30" />
          <span className="text-coral/70 font-mono text-xs tracking-[0.3em] uppercase">Capabilities</span>
          <div className="h-px w-12 bg-amber/30" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif text-cream mb-4 text-center">
          What You Receive
        </h2>
        <p className="text-foreground-muted max-w-xl mb-16 text-center mx-auto">
          Everything required to maintain observational advantage.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative"
            >
              {/* Arch frame on hover */}
              <div className="absolute -inset-2 border border-amber/0 group-hover:border-amber/20 rounded-t-[24px] rounded-b-md transition-all duration-300" />
              
              <div className="glass p-6 rounded-t-[20px] rounded-b-sm border-t border-wood group-hover:border-coral/30 transition-all relative overflow-hidden">
                {/* Subtle amber glow on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-amber/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="text-amber/40 font-mono text-xs block mb-3">0{i + 1}</span>
                <h3 className="text-lg font-serif text-cream mb-2">{feature.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
