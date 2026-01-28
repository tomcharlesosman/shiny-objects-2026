export const metadata = {
  title: "The Greco-Futurist Foundation — Shiny Object Social Club",
  description: "A company built on ancient wisdom, future technology.",
};

export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-copper/30" />
          <span className="text-copper font-mono text-xs tracking-[0.3em] uppercase">Manifesto</span>
          <div className="h-px w-12 bg-copper/30" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-cream text-center mb-4">
          The Greco-Futurist Foundation
        </h1>
        
        <p className="text-foreground-muted text-center max-w-xl mx-auto mb-16">
          A society built on ancient wisdom, future technology.
        </p>

        {/* Sections */}
        <div className="space-y-16">
          {/* I. The Cosmology */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">I. The Cosmology</span>
            <h2 className="font-serif text-2xl text-cream mb-6">Creation Myth</h2>
            
            <div className="space-y-4 text-foreground-muted leading-relaxed">
              <p>
                In the beginning, there was noise. Infinite signal, no pattern. The early internet—chaos without form.
              </p>
              <p>
                Then came the first builders. They gathered in small groups, sharing discoveries in forums and IRC channels. 
                They were the proto-citizens, gathering around digital campfires.
              </p>
              <p>
                One among them—the First Augur—noticed what others missed: the future leaves traces. Those who learn 
                to read them gain advantage.
              </p>
            </div>

            <blockquote className="mt-6 pl-6 border-l-2 border-amber/30 italic text-cream/80">
              Intelligence is not prediction. It is pattern recognition. The future is not mysterious—it is simply not yet widely observed.
            </blockquote>
          </section>

          {/* II. Economic Philosophy */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">II. Economic Philosophy</span>
            <h2 className="font-serif text-2xl text-cream mb-6">The Three Economies</h2>
            
            <div className="space-y-6">
              <div className="pb-4 border-b border-copper/10">
                <h3 className="font-serif text-cream mb-2">1. The Economy of Attention (Rejected)</h3>
                <p className="text-foreground-muted text-sm">Infinite scroll. Notification addiction. FOMO-driven engagement. Vanity metrics.</p>
              </div>
              <div className="pb-4 border-b border-copper/10">
                <h3 className="font-serif text-cream mb-2">2. The Economy of Capability (Built)</h3>
                <p className="text-foreground-muted text-sm">Skills that compound. Networks that amplify. Knowledge that persists. Tools that multiply.</p>
              </div>
              <div>
                <h3 className="font-serif text-cream mb-2">3. The Economy of Meaning (Cultivated)</h3>
                <p className="text-foreground-muted text-sm">Ritual over routine. Mastery over consumption. Community over audience. Legacy over metrics.</p>
              </div>
            </div>
          </section>

          {/* III. Governance */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">III. Governance</span>
            <h2 className="font-serif text-2xl text-cream mb-6">The Polis Structure</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "The Ekklesia", desc: "All citizens gather monthly. One person, one vote." },
                { title: "The Boule", desc: "Rotating council of 50. Propose agenda. 3-month terms." },
                { title: "The Archons", desc: "Company leadership. Appointed by Ekklesia. 1-year terms." },
                { title: "The Strategoi", desc: "Functional leaders. Elected by expertise." },
              ].map((item) => (
                <div key={item.title} className="p-4 border border-copper/10 rounded-lg">
                  <h3 className="font-serif text-cream text-sm mb-1">{item.title}</h3>
                  <p className="text-foreground-muted text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* IV. Technology Philosophy */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">IV. Technology</span>
            <h2 className="font-serif text-2xl text-cream mb-6">The Stack</h2>
            
            <p className="text-foreground-muted mb-6">
              Technology should amplify human capability, not replace human judgment.
            </p>

            <div className="space-y-4">
              {[
                { name: "The Oracle Layer", desc: "AI systems that debate. Citizens query, but verify." },
                { name: "The Archive Layer", desc: "Everything recorded, searchable, connected." },
                { name: "The Forge Layer", desc: "Shared compute. Mutual aid model." },
                { name: "The Agora Layer", desc: "Synchronous communication. Presence matters." },
              ].map((layer) => (
                <div key={layer.name} className="flex items-start gap-3">
                  <span className="text-amber/40 text-xs mt-1">—</span>
                  <div>
                    <span className="text-cream font-serif text-sm">{layer.name}</span>
                    <span className="text-foreground-muted text-sm ml-2">{layer.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* V. Member Lifecycle */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">V. Membership</span>
            <h2 className="font-serif text-2xl text-cream mb-6">The Journey</h2>
            
            <div className="space-y-4">
              {[
                { stage: "Xenos", desc: "Guest. 14-day trial. Public spaces only." },
                { stage: "Metic", desc: "Resident. Full subscription. Public channels." },
                { stage: "Polites", desc: "Citizen. Voting rights. All spaces." },
                { stage: "Geron", desc: "Elder. Advisory roles. Lifetime tenure." },
              ].map((item, i) => (
                <div key={item.stage} className="flex items-center gap-4">
                  <span className="text-copper/40 font-mono text-xs w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-cream font-serif w-24">{item.stage}</span>
                  <span className="text-foreground-muted text-sm">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* VI. Scaling */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">VI. Scaling</span>
            <h2 className="font-serif text-2xl text-cream mb-6">The 500 Rule</h2>
            
            <div className="space-y-4 text-foreground-muted">
              <p>Target: 500 active citizens. Waitlist for spots 501+.</p>
              <p>New spots only when existing citizens depart.</p>
              <p>This maintains intimacy, signal quality.</p>
            </div>

            <div className="mt-6 p-4 bg-amber/5 rounded-lg border border-amber/10">
              <p className="text-amber text-sm text-center">
                Our moat is the census itself.
              </p>
            </div>
          </section>

          {/* VII. The Manifesto */}
          <section className="text-center py-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-copper/30" />
              <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase">Manifesto</span>
              <div className="h-px w-16 bg-copper/30" />
            </div>
            
            <div className="space-y-4 text-foreground-muted max-w-xl mx-auto mb-8">
              <p>We are the Future Greeks.</p>
              <p>We believe the past contains wisdom.</p>
              <p>We believe the future is built, not predicted.</p>
              <p>We believe excellence is a habit.</p>
              <p>We believe community amplifies individual capability.</p>
            </div>

            <div className="space-y-2 text-cream font-serif text-lg">
              <p>We build like Daedalus.</p>
              <p>We compete like athletes.</p>
              <p>We think like philosophers.</p>
              <p>We gather like citizens.</p>
            </div>

            <div className="mt-12">
              <p className="text-amber font-serif text-xl">We are the census.</p>
              <p className="text-amber font-serif text-xl">We read the signs.</p>
              <p className="text-amber font-serif text-xl">We shape the future.</p>
            </div>

            <div className="mt-12 text-copper/60 font-mono text-xs tracking-[0.4em] uppercase">
              Est. MMXXI
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
