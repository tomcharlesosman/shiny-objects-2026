const memberTypes = [
  { role: "Founders", count: "120+", roman: "CXX" },
  { role: "Engineers", count: "200+", roman: "CC" },
  { role: "Researchers", count: "80+", roman: "LXXX" },
  { role: "Creatives", count: "100+", roman: "C" },
];

const testimonials = [
  {
    quote: "This community has saved me hundreds of hours of research. I know what's happening before my competitors do.",
    author: "Sarah K.",
    role: "Founder",
  },
  {
    quote: "The signal-to-noise ratio here is incredible. No hype, just what actually matters.",
    author: "Marcus T.",
    role: "ML Engineer",
  },
  {
    quote: "I've been here since 2021. The relaunch with AI focus is exactly what I needed.",
    author: "Jessica L.",
    role: "Product Designer",
  },
];

export default function Members() {
  return (
    <section className="py-32 px-6 border-t border-wood/30 relative">
      {/* Greek key border top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-3 opacity-10">
        <svg viewBox="0 0 200 12" fill="none" className="w-full h-full text-amber">
          <path d="M0 6h10v-6h10v6h10v-6h10v6h10v-6h10v6h10v-6h10v6h10v-6h10v6h10v-6h10v6h10v-6h10v6h10v-6h10v6h10v-6h10v6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-12 bg-amber/30" />
          <span className="text-coral/70 font-mono text-xs tracking-[0.3em] uppercase">Members</span>
          <div className="h-px w-12 bg-amber/30" />
        </div>

        {/* Stats - like plaques on classical columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {memberTypes.map((type) => (
            <div key={type.role} className="relative group">
              {/* Marble plaque effect */}
              <div className="glass p-6 rounded-t-lg rounded-b-sm border border-wood/30 text-center relative overflow-hidden">
                {/* Plaque bevel effect */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-wood/40 to-transparent" />
                
                <span className="text-amber/30 font-mono text-[10px] tracking-widest block mb-1">{type.roman}</span>
                <span className="block text-3xl font-serif text-cream mb-1">{type.count}</span>
                <span className="text-foreground-muted/60 text-xs uppercase tracking-widest font-mono">{type.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - framed like doorways */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="relative">
              {/* Arch frame */}
              <div className="absolute -inset-3 border border-amber/10 rounded-t-[32px] rounded-b-lg" />
              
              <div className="glass p-6 rounded-t-[24px] rounded-b-sm border-t border-amber/20 relative">
                {/* Side sconce lighting effect */}
                <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-amber/30 to-transparent" />
                
                <p className="text-foreground-muted mb-6 leading-relaxed text-sm italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center">
                    <span className="text-amber text-xs font-serif">{t.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-serif text-cream">{t.author}</p>
                    <p className="text-foreground-muted/50 text-xs font-mono">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
