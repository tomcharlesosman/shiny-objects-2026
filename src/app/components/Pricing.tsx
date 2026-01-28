export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent font-mono text-sm mb-4">JOIN THE CLUB</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          $99/year
        </h2>
        <p className="text-foreground-muted text-lg mb-8">
          Less than $2 per week. Full access. Cancel anytime.
        </p>

        <div className="p-8 border border-accent rounded-2xl bg-card text-left mb-8">
          <h3 className="text-lg font-semibold mb-6">What you get:</h3>
          <ul className="space-y-4">
            {[
              "Daily AI intel (5-7 curated items)",
              "Private Discord with 500+ members",
              "Weekly live calls & deep dives",
              "Resource library & workflows",
              "Early access to new tools",
              "Member events & network",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="text-accent">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://discord.gg/your-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-accent text-background text-xl font-bold rounded-xl hover:bg-accent/90 transition-all glow"
        >
          Join Now
          <span>→</span>
        </a>

        {/* Urgency */}
        <div className="mt-8 flex items-center justify-center gap-4 text-sm font-mono">
          <span className="w-2 h-2 bg-accent-warm rounded-full animate-pulse" />
          <span className="text-foreground-muted">
            47 spots left at relaunch pricing
          </span>
        </div>

        <p className="mt-4 text-foreground-muted text-sm">
          30-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
}
