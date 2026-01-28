const plans = [
  {
    name: "Monthly",
    price: "$29",
    period: "/month",
    description: "Full access. Cancel anytime.",
    features: [
      "Unlimited Discord access",
      "All weekly live calls",
      "Resource library",
      "Member-only channels",
      "Direct expert access",
    ],
    cta: "Join Monthly",
    popular: false,
  },
  {
    name: "Annual",
    price: "$290",
    period: "/year",
    description: "2 months free. Best value.",
    features: [
      "Everything in Monthly",
      "Exclusive annual member events",
      "Early access to new features",
      "Priority support",
      "Member recognition",
    ],
    cta: "Join Annual",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 border-t border-border bg-hover/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4">
            Join the Club
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Invest in your knowledge. Cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-accent text-white text-sm font-mono rounded-full">
                    Best Value
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="font-mono text-lg font-semibold mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <p className="text-muted text-sm mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://discord.gg/your-invite-link"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "border border-border hover:bg-hover"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
