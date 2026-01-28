export const metadata = {
  title: "The Dawn of the Future Greeks — Shiny Object Social Club",
  description: "We are entering the adolescence of technology. Those who learn to wield AI will shape what comes next.",
};

export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 pt-32 pb-16 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-copper/30" />
            <span className="text-copper font-mono text-xs tracking-[0.4em] uppercase">A Meditation</span>
            <div className="h-px w-12 bg-copper/30" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream leading-[1.1] mb-8">
            The Adolescence of<br />
            <span className="shiny-text">Intelligence</span>
          </h1>
          
          <p className="text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are entering a rite of passage both turbulent and inevitable. 
            Humanity is being handed almost unimaginable power. 
            The question is: who will learn to wield it?
          </p>
        </div>
      </section>

      {/* Narrative Content */}
      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-24">
        
        {/* The Transition */}
        <section>
          <p className="text-xl md:text-2xl font-serif text-cream leading-relaxed mb-6">
            There is a scene in Carl Sagan's <em>Contact</em> where the protagonist, selected to meet aliens, 
            is asked what single question she would ask them.
          </p>
          
          <blockquote className="pl-6 border-l-2 border-amber/30 my-8">
            <p className="text-foreground-muted italic text-lg">
              "How did you do it? How did you evolve, how did you survive your technological adolescence 
              without destroying yourself?"
            </p>
          </blockquote>
          
          <p className="text-foreground-muted leading-relaxed">
            This question echoes in my mind because we are living through exactly such an adolescence right now. 
            Not the adolescence of humanity—though that too—but the adolescence of <em>intelligence itself</em>. 
            For the first time in history, we are creating minds that can match and eventually exceed our own. 
            The transition from biological to artificial intelligence is the most significant event since the origin of life.
          </p>
        </section>

        {/* The Opportunity */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber/60 font-mono text-xs tracking-[0.3em] uppercase">I.</span>
            <div className="h-px flex-1 bg-copper/20" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6">
            The Machines of Loving Grace
          </h2>
          
          <p className="text-foreground-muted leading-relaxed mb-6">
            It is easy to focus on the risks. I spend much of my time doing so. But risks are only worth 
            confronting because of what lies on the other side: a world where intelligence is abundant, 
            where the bottlenecks that have constrained human progress for millennia simply dissolve.
          </p>
          
          <p className="text-foreground-muted leading-relaxed mb-6">
            Imagine biology progressing at the speed of software. Cures for diseases discovered not in decades 
            but in days. Climate solutions that actually work. Economic development reaching every corner of 
            the globe. Scientific research conducted not by isolated labs but by millions of AI assistants 
            working in parallel, sharing insights instantaneously.
          </p>
          
          <p className="text-foreground-muted leading-relaxed">
            This is not science fiction. The foundations are being laid now, in research labs and startups 
            and open-source projects. The question is not <em>whether</em> this future arrives, but <em>who</em> 
            will be ready for it when it does.
          </p>
        </section>

        {/* The First Sighting */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber/60 font-mono text-xs tracking-[0.3em] uppercase">II.</span>
            <div className="h-px flex-1 bg-copper/20" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6">
            The First Augurs
          </h2>
          
          <p className="text-foreground-muted leading-relaxed mb-6">
            In the beginning, there was noise. The early internet—a chaos of forums and IRC channels, 
            digital campfires where the first builders gathered to share what they had discovered.
          </p>
          
          <p className="text-foreground-muted leading-relaxed mb-6">
            Among them were those who noticed patterns others missed. They realized that the future leaves 
            traces, that those who learn to read the signs gain advantage not through prediction but through 
            <em>preparation</em>. They began sharing interpretations, not just information.
          </p>
          
          <p className="text-foreground-muted leading-relaxed mb-6">
            That was MMXXI. The birth of Shiny Object Social Club—a small society of those who saw what 
            others could not. We were early to the no-code movement. Early to AI. And now we find ourselves 
            at the threshold of something larger still.
          </p>
          
          <div className="glass p-6 rounded-xl border border-copper/10 my-8">
            <p className="text-cream italic text-center">
              Intelligence is not prediction. It is pattern recognition. 
              The future is not mysterious—it is simply not yet widely observed.
            </p>
          </div>
        </section>

        {/* The Census */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber/60 font-mono text-xs tracking-[0.3em] uppercase">III.</span>
            <div className="h-px flex-1 bg-copper/20" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6">
            The Census
          </h2>
          
          <p className="text-foreground-muted leading-relaxed mb-6">
            Today, 500 of us gather here. We are founders, engineers, researchers, artists—united not by 
            what we do but by <em>how we see</em>. We have learned that the best way to predict the future 
            is to build it. That the best way to understand AI is to use it, daily, for real work.
          </p>
          
          <p className="text-foreground-muted leading-relaxed mb-6">
            We do not predict from the sidelines. We immerse. We build. We share what we learn.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 my-8">
            <div className="text-center p-4">
              <span className="text-3xl font-serif text-amber block mb-2">500+</span>
              <span className="text-foreground-muted text-sm">Citizens</span>
            </div>
            <div className="text-center p-4">
              <span className="text-3xl font-serif text-amber block mb-2">MMXXI</span>
              <span className="text-foreground-muted text-sm">Founded</span>
            </div>
            <div className="text-center p-4">
              <span className="text-3xl font-serif text-amber block mb-2">Daily</span>
              <span className="text-foreground-muted text-sm">Intelligence</span>
            </div>
          </div>
        </section>

        {/* The Three Economies */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-amber/60 font-mono text-xs tracking-[0.3em] uppercase">IV.</span>
            <div className="h-px flex-1 bg-copper/20" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-cream mb-6">
            What We Are Building
          </h2>
          
          <p className="text-foreground-muted leading-relaxed mb-8">
            Most of the internet runs on the Economy of Attention—optimization for engagement, 
            infinite scroll, notifications, FOMO. We reject this.
          </p>
          
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl border border-copper/10">
              <h3 className="font-serif text-cream text-lg mb-2">The Economy of Capability</h3>
              <p className="text-foreground-muted text-sm">
                Skills that compound. Networks that amplify. Knowledge that persists. Tools that multiply.
              </p>
            </div>
            
            <div className="glass p-6 rounded-xl border border-copper/10">
              <h3 className="font-serif text-cream text-lg mb-2">The Economy of Meaning</h3>
              <p className="text-foreground-muted text-sm">
                Ritual over routine. Mastery over consumption. Community over audience. Legacy over metrics.
              </p>
            </div>
          </div>
        </section>

        {/* The Invitation */}
        <section className="text-center py-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-copper/30" />
            <span className="text-amber font-mono text-xs tracking-[0.3em] uppercase">The Invitation</span>
            <div className="h-px w-16 bg-copper/30" />
          </div>
          
          <p className="text-foreground-muted max-w-xl mx-auto mb-8">
            The adolescence of technology will test who we are. But on the other side lies a world 
            we can barely imagine—one of abundance, discovery, and human flourishing amplified by 
            artificial minds.
          </p>
          
          <p className="text-cream font-serif text-xl mb-4">
            We are the Future Greeks.
          </p>
          
          <p className="text-foreground-muted mb-8">
            We build like Daedalus.<br />
            We think like philosophers.<br />
            We gather like citizens.
          </p>
          
          <div className="space-y-2 mb-12">
            <p className="text-amber font-serif text-xl">We are the census.</p>
            <p className="text-amber font-serif text-xl">We read the signs.</p>
            <p className="text-amber font-serif text-xl">We shape the future.</p>
          </div>
          
          <a 
            href="/join"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-background font-mono text-sm tracking-wider rounded-full hover:bg-amber-bright transition-all shadow-lg shadow-amber/20"
          >
            Join the Society
            <span>→</span>
          </a>
          
          <p className="text-copper/60 font-mono text-xs tracking-[0.4em] uppercase mt-12">
            Est. MMXXI
          </p>
        </section>
      </div>
    </main>
  );
}
