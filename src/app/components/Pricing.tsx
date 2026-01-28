export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-warm font-mono text-sm mb-4">JOIN THE CLUB</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Path
          </h2>
          <p className="text-foreground-muted">
            Invest in your knowledge. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Monthly */}
          <div className="p-8 border border-border rounded-2xl bg-card">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Monthly</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-foreground-muted">/month</span>
              </div>
              <p className="text-foreground-muted text-sm mt-2">
                Full access. Cancel anytime.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Unlimited Discord access",
                "All weekly live calls",
                "Resource library",
                "Member-only channels",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="text-accent">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 border border-border rounded-lg font-semibold hover:bg-hover transition-colors"
            >
              Join Monthly
            </a>
          </div>

          {/* Annual */}
          <div className="relative p-8 border border-accent rounded-2xl bg-card overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 bg-accent text-background text-xs font-mono">
              BEST VALUE
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Annual</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-accent">$290</span>
                <span className="text-foreground-muted">/year</span>
              </div>
              <p className="text-foreground-muted text-sm mt-2">
                2 months free. Lock in 2026 pricing.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Everything in Monthly",
                "Exclusive annual member events",
                "Priority support",
                "Founder pricing locked",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="text-accent">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Join Annual
            </a>
          </div>
        </div>

        {/* Urgency */}
        <div className="mt-12 text-center">
          <p className="text-foreground-muted text-sm">
            <span className="text-accent-warm font-semibold">47 spots left</span> at relaunch pricing.
            <br />
            Price increases to $49/month when spots fill.
          </p>
        </div>
      </div>
    </section>
  );
}
