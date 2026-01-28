export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 border-t border-wood/30 relative">
      {/* Central glowing line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber/50 to-transparent" />
      
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-amber/30" />
          <span className="text-amber/70 font-mono text-xs tracking-[0.3em] uppercase">Membership</span>
          <div className="h-px w-12 bg-amber/30" />
        </div>

        {/* Main price - illuminated like entrance */}
        <div className="text-center mb-12 relative">
          {/* Glow behind price */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-amber/5 rounded-full blur-3xl" />
          
          <div className="relative">
            <span className="text-amber/40 font-mono text-xs tracking-widest block mb-2">ANNUAL MEMBERSHIP</span>
            <h2 className="text-6xl md:text-8xl font-serif text-cream mb-4">
              $99
            </h2>
            <p className="text-foreground-muted font-mono text-xs tracking-wider">
              LESS THAN $2 PER WEEK
            </p>
          </div>
        </div>

        {/* Features - in a framed panel like doorway */}
        <div className="relative mb-8">
          {/* Outer arch frame */}
          <div className="absolute -inset-4 border border-wood/20 rounded-t-[40px] rounded-b-lg" />
          <div className="absolute -inset-2 border border-amber/10 rounded-t-[32px] rounded-b-md" />
          
          <div className="glass p-8 rounded-t-[24px] rounded-b-sm border-t border-amber/20 relative">
            <h3 className="text-amber/70 font-mono text-xs mb-8 tracking-wider text-center">ACCESS INCLUDES</h3>
            <ul className="space-y-4 max-w-md mx-auto">
              {[
                "Daily AI intel (5-7 curated items)",
                "Private Discord with 500+ members",
                "Weekly live calls & deep dives",
                "Resource library & workflows",
                "Early access to new tools",
                "Member events & network",
              ].map((f) => (
                <li key={f} className="flex items-center gap-4 text-foreground-muted">
                  <span className="w-1.5 h-1.5 bg-amber/60 rounded-full" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA - like an illuminated doorway */}
        <div className="relative">
          <a
            href="https://discord.gg/your-invite-link"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-6 bg-amber/10 border border-amber text-amber font-mono text-sm tracking-[0.2em] rounded-t-lg rounded-b-sm hover:bg-amber/20 transition-all relative overflow-hidden group"
          >
            {/* Animated glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative">ENTER THE CLUB</span>
          </a>
        </div>

        {/* Urgency - like a door sign */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-2 h-2 bg-amber rounded-full animate-pulse" />
          <span className="text-foreground-muted/70 font-mono text-xs tracking-wider">
            47 INVITATIONS REMAINING
          </span>
        </div>

        <p className="mt-6 text-foreground-muted/40 text-xs text-center font-mono tracking-wider">
          30-DAY SATISFACTION GUARANTEE
        </p>
      </div>
    </section>
  );
}
