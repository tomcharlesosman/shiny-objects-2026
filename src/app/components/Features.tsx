const features = [
  {
    title: "Early Access",
    description: "Be the first to know about new AI tools, models, and breakthroughs. We surface what's worth your attention.",
    icon: "⚡",
  },
  {
    title: "Curated Discussions",
    description: "No noise, just signal. Thoughtful conversations with people who actually build and ship.",
    icon: "💬",
  },
  {
    title: "Weekly Deep Dives",
    description: "Live sessions breaking down the week's most important developments in AI and tech.",
    icon: "🔍",
  },
  {
    title: "Resource Library",
    description: "A growing collection of prompts, workflows, tools, and frameworks vetted by the community.",
    icon: "📚",
  },
  {
    title: "Builder Network",
    description: "Connect with founders, engineers, researchers, and creatives pushing boundaries.",
    icon: "🤝",
  },
  {
    title: "Ask Me Anything",
    description: "Direct access to experts. Get your questions answered by people who've been there.",
    icon: "❓",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
            What's Inside
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Everything you need to stay ahead of the curve in AI and digital technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-border hover:border-accent/50 transition-colors group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-mono text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
