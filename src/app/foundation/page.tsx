export const metadata = {
  title: "The Greco-Futurist Foundation — Shiny Object Social Club",
  description: "A society built on ancient wisdom, future technology.",
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
            <h2 className="font-serif text-2xl text-cream mb-6">The First Sighting</h2>
            
            <div className="space-y-4 text-foreground-muted leading-relaxed">
              <p>
                In the beginning, there was noise. Infinite signal, no pattern. The early internet—chaos without form.
              </p>
              <p>
                Then came the first builders. They gathered in small groups, sharing discoveries in forums and IRC channels. 
                They were the proto-citizens, gathering around digital campfires, telling stories of what they had built.
              </p>
              <p>
                One among them—the First Augur—noticed what others missed: the future leaves traces. Those who learn 
                to read them gain advantage.
              </p>
              <p>
                The First Augur began sharing interpretations, not just information. They built the first census—a small 
                society of those who saw what others could not.
              </p>
              <p>
                That was MMXXI. We are their descendants.
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
                <h3 className="font-serif text-cream mb-2">1. The Economy of Attention (What We Reject)</h3>
                <p className="text-foreground-muted text-sm">Infinite scroll. Notification addiction. FOMO-driven engagement. Vanity metrics.</p>
              </div>
              <div className="pb-4 border-b border-copper/10">
                <h3 className="font-serif text-cream mb-2">2. The Economy of Capability (What We Build)</h3>
                <p className="text-foreground-muted text-sm">Skills that compound. Networks that amplify. Knowledge that persists. Tools that multiply.</p>
              </div>
              <div>
                <h3 className="font-serif text-cream mb-2">3. The Economy of Meaning (What We Cultivate)</h3>
                <p className="text-foreground-muted text-sm">Ritual over routine. Mastery over consumption. Community over audience. Legacy over metrics.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-copper/10">
              <h3 className="font-serif text-cream mb-3">Why $99/year?</h3>
              <p className="text-foreground-muted text-sm mb-4">
                In ancient Athens, citizenship was not free. It came with obligations: military service, jury duty, 
                participation in governance, contribution to the polis.
              </p>
              <p className="text-foreground-muted text-sm">
                Our $99 is the modern equivalent—a small barrier that ensures serious members, skin in the game, 
                and alignment of incentives.
              </p>
            </div>
          </section>

          {/* III. Governance */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">III. Governance</span>
            <h2 className="font-serif text-2xl text-cream mb-6">The Polis Structure</h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
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

            <div className="p-4 bg-amber/5 rounded-lg border border-amber/10">
              <h4 className="text-amber font-mono text-xs tracking-wider uppercase mb-2">Rights of Citizens</h4>
              <ul className="text-foreground-muted text-sm space-y-1">
                <li>• Access to all spaces (Agora, Archive, Forge)</li>
                <li>• Vote in Ekklesia</li>
                <li>• Propose initiatives</li>
                <li>• Leave with dignity (prorated refund)</li>
              </ul>
            </div>
          </section>

          {/* IV. Technology Philosophy */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">IV. Technology Philosophy</span>
            <h2 className="font-serif text-2xl text-cream mb-6">The Stack of the Future Greeks</h2>
            
            <p className="text-foreground-muted mb-6">
              Technology should amplify human capability, not replace human judgment.
            </p>

            <div className="space-y-4">
              {[
                { name: "The Oracle Layer", desc: "AI systems that debate. Citizens query, but verify. 'The oracle can be wrong' is taught on day one." },
                { name: "The Archive Layer", desc: "Everything recorded, searchable, connected. Pattern recognition across time." },
                { name: "The Forge Layer", desc: "Shared compute. Mutual aid model. Open source by default." },
                { name: "The Agora Layer", desc: "Synchronous communication. Presence matters. Quality over quantity." },
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

            <div className="mt-6 pt-6 border-t border-copper/10">
              <h4 className="text-cream font-serif mb-3">What We Don't Build</h4>
              <div className="flex flex-wrap gap-2">
                {["Engagement optimization", "Infinite feeds", "Dark patterns", "Data extraction", "FOMO mechanics"].map((item) => (
                  <span key={item} className="text-[10px] font-mono uppercase tracking-wider text-foreground-muted/50 border border-copper/20 px-2 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* V. Member Lifecycle */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">V. The Member Lifecycle</span>
            <h2 className="font-serif text-2xl text-cream mb-6">The Journey of a Citizen</h2>
            
            <div className="space-y-6">
              {[
                { stage: "Xenos", subtitle: "Guest", desc: "14-day trial. Public spaces only. Experience the signal, observe the culture.", access: "Public spaces" },
                { stage: "Metic", subtitle: "Resident", desc: "Full subscription. Newsletter, public Discord. Consume signal, learn the rituals.", access: "Public channels" },
                { stage: "Polites", subtitle: "Citizen", desc: "Voting rights. All spaces. Contribute signal, shape direction.", access: "All spaces" },
                { stage: "Geron", subtitle: "Elder", desc: "Advisory roles. Lifetime tenure. Preserve wisdom, mentor new citizens.", access: "Ceremonial functions" },
              ].map((item, i) => (
                <div key={item.stage} className="flex gap-4 pb-6 border-b border-copper/10 last:border-0 last:pb-0">
                  <span className="text-copper/40 font-mono text-xs w-8">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-cream font-serif">{item.stage}</span>
                      <span className="text-copper/60 text-xs">({item.subtitle})</span>
                    </div>
                    <p className="text-foreground-muted text-sm mb-1">{item.desc}</p>
                    <span className="text-amber/60 text-xs font-mono">Access: {item.access}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* VI. Brand Architecture */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">VI. Brand Architecture</span>
            <h2 className="font-serif text-2xl text-cream mb-6">The Visual System</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-cream font-serif mb-3">Master Narrative</h4>
                <p className="text-foreground-muted text-sm italic">
                  "Shiny Object Social Club is a society for those who see what others cannot. 
                  We interpret AI developments before they arrive, curating signal from 500+ builders, 
                  researchers, and visionaries."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-cream font-serif text-sm mb-2">Voice</h4>
                  <ul className="text-foreground-muted text-xs space-y-1">
                    <li>• Oracular but practical</li>
                    <li>• Confident but humble</li>
                    <li>• Ancient but immediate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-cream font-serif text-sm mb-2">Tone</h4>
                  <ul className="text-foreground-muted text-xs space-y-1">
                    <li>• Never hype without substance</li>
                    <li>• Never corporate or sterile</li>
                    <li>• Never overly casual</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* VII. Scaling Philosophy */}
          <section className="glass p-8 rounded-xl border border-copper/10">
            <span className="text-amber/60 font-mono text-xs tracking-wider uppercase block mb-4">VII. Scaling Philosophy</span>
            <h2 className="font-serif text-2xl text-cream mb-6">The 500 Rule</h2>
            
            <div className="space-y-4 text-foreground-muted mb-6">
              <p>Target: 500 active citizens. Waitlist for spots 501+.</p>
              <p>New spots only when existing citizens depart.</p>
              <p>This maintains intimacy, signal quality.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 border border-copper/10 rounded-lg">
                <span className="text-cream font-serif text-2xl block">150</span>
                <span className="text-foreground-muted text-xs">Core community</span>
              </div>
              <div className="p-4 border border-amber/20 rounded-lg bg-amber/5">
                <span className="text-amber font-serif text-2xl block">500</span>
                <span className="text-foreground-muted text-xs">Active citizens</span>
              </div>
              <div className="p-4 border border-copper/10 rounded-lg">
                <span className="text-cream font-serif text-2xl block">1500</span>
                <span className="text-foreground-muted text-xs">Extended network</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber/5 rounded-lg border border-amber/10">
              <p className="text-amber text-sm text-center font-serif">
                "Our moat is the census itself."
              </p>
            </div>
          </section>

          {/* VIII. The Manifesto */}
          <section className="text-center py-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-copper/30" />
              <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase">The Manifesto</span>
              <div className="h-px w-16 bg-copper/30" />
            </div>
            
            <div className="space-y-4 text-foreground-muted max-w-xl mx-auto mb-8">
              <p>We are the Future Greeks.</p>
              <p>We believe the past contains wisdom.</p>
              <p>We believe the future is built, not predicted.</p>
              <p>We believe excellence is a habit.</p>
              <p>We believe community amplifies individual capability.</p>
            </div>

            <div className="space-y-2 text-cream font-serif text-lg mb-8">
              <p>We build like Daedalus.</p>
              <p>We compete like athletes.</p>
              <p>We think like philosophers.</p>
              <p>We gather like citizens.</p>
            </div>

            <div className="mb-8">
              <p className="text-foreground-muted italic">
                We reject hype without substance.<br />
                We reject speed without direction.<br />
                We reject growth at all costs.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-amber font-serif text-2xl">We are the census.</p>
              <p className="text-amber font-serif text-2xl">We read the signs.</p>
              <p className="text-amber font-serif text-2xl">We shape the future.</p>
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
