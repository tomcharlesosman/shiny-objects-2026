export default function Problem() {
  const problems = [
    "AI news moves faster than you can track",
    "Hype drowns out signal",
    "Tools launch daily, which ones matter?",
    "No time to research everything",
    "Missing breakthroughs until too late",
    "Siloed in your own bubble",
  ];

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-8 text-center">
          AI moves fast.
          <br />
          <span className="text-accent">You can't catch everything.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {problems.map((problem) => (
            <div
              key={problem}
              className="flex items-center gap-3 p-4 rounded-lg border border-border/50"
            >
              <span className="text-accent-warm font-mono">×</span>
              <span className="text-muted">{problem}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-4">
            What if you had <span className="font-semibold">500 curious minds</span> filtering the noise?
          </p>
          <p className="text-muted">
            A community that spots the signal before it hits mainstream.
          </p>
        </div>
      </div>
    </section>
  );
}
