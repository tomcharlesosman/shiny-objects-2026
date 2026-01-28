export default function Join() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-copper/30" />
          <span className="text-copper font-mono text-xs tracking-[0.3em] uppercase">Join</span>
          <div className="h-px w-12 bg-copper/30" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-serif text-cream mb-4">
          $99/year
        </h1>
        
        <p className="text-foreground-muted font-mono text-xs tracking-wider mb-10">
          LESS THAN $2 PER WEEK
        </p>
        
        <div className="glass p-8 rounded-xl border border-copper/10 mb-8 text-left">
          <h3 className="text-copper font-mono text-xs mb-6 tracking-wider">ACCESS INCLUDES</h3>
          <ul className="space-y-3">
            {[
              "Daily AI intel (5-7 curated items)",
              "Private Discord with 500+ members",
              "Weekly live calls & deep dives",
              "Resource library & workflows",
              "Early access to new tools",
              "Member events & network",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground-muted">
                <span className="text-amber">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <a
          href="https://discord.gg/your-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-background font-mono text-sm tracking-wider rounded-xl hover:bg-amber-bright transition-all shadow-lg shadow-amber/20"
        >
          Enter the Club
          <span>→</span>
        </a>
        
        <p className="mt-6 text-foreground-muted/40 text-xs font-mono">
          30-DAY MONEY-BACK GUARANTEE
        </p>
      </div>
    </main>
  );
}
