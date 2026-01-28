export default function Manifesto() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Problem statement */}
        <div className="mb-24">
          <p className="text-accent font-mono text-sm mb-4">THE PROBLEM</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            AI moves faster than you can track.
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-foreground-muted">
            <p>Every day, new models drop. New tools launch. New research emerges. The signal gets buried in hype.</p>
            <p>You&apos;re either ahead of the curve or behind it. There is no middle ground.</p>
          </div>
        </div>

        {/* Solution */}
        <div className="border border-border rounded-2xl p-8 md:p-12 bg-card">
          <p className="text-accent-secondary font-mono text-sm mb-4">THE SOLUTION</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            500 curious minds. 
            <br />
            One signal.
          </h2>
          <p className="text-foreground-muted text-lg leading-relaxed mb-8">
            Since 2021, the Shiny Object Social Club has been where builders, researchers, 
            and future-minded people gather to spot what matters before it hits the mainstream.
          </p>
          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <span className="px-4 py-2 bg-background rounded-lg border border-border">
              Daily intel
            </span>
            <span className="px-4 py-2 bg-background rounded-lg border border-border">
              Weekly calls
            </span>
            <span className="px-4 py-2 bg-background rounded-lg border border-border">
              Private Discord
            </span>
            <span className="px-4 py-2 bg-background rounded-lg border border-border">
              Resource library
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
