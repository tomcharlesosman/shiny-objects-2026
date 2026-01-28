export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 border-t border-border/50 relative">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-copper font-mono text-xs tracking-wider">MEMBERSHIP</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-serif text-cream mb-4">
            $99/year
          </h2>
          <p className="text-foreground-muted font-mono text-xs tracking-wider">
            LESS THAN $2 PER WEEK
          </p>
        </div>

        <div className="glass p-8 rounded-2xl border border-copper/20 mb-8 underlight">
          <h3 className="text-copper font-mono text-xs mb-6 tracking-wider">ACCESS INCLUDES</h3>
          <ul className="space-y-4">
            {[
              "Daily AI intel (5-7 curated items)",
              "Private Discord with 500+ members",
              "Weekly live calls & deep dives",
              "Resource library & workflows",
              "Early access to new tools",
              "Member events & network",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-foreground-muted">
                <span className="text-copper">—</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://discord.gg/your-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-5 bg-copper/10 border border-copper text-copper font-mono text-sm tracking-wider rounded-xl hover:bg-copper/20 transition-all glow-soft"
        >
          Join the Club
        </a>

        {/* Urgency */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs font-mono">
          <span className="w-1.5 h-1.5 bg-copper rounded-full animate-pulse" />
          <span className="text-foreground-muted">
            47 SPOTS REMAINING
          </span>
        </div>

        <p className="mt-4 text-foreground-muted/40 text-xs text-center font-mono">
          30-DAY MONEY-BACK GUARANTEE
        </p>
      </div>
    </section>
  );
}
