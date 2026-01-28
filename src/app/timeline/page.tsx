const timelineEvents = [
  {
    year: "2021",
    month: "Nov",
    title: "Shiny Object Social Club Founded",
    description: "A community of curious minds gathers to explore what's next in digital technology.",
    category: "Community",
  },
  {
    year: "2022",
    month: "Nov",
    title: "ChatGPT Launches",
    description: "OpenAI releases ChatGPT, bringing conversational AI to the mainstream. The world shifts.",
    category: "AI",
  },
  {
    year: "2023",
    month: "Mar",
    title: "GPT-4 Released",
    description: "Multimodal capabilities, better reasoning, and the first taste of truly capable AI.",
    category: "AI",
  },
  {
    year: "2023",
    month: "Jul",
    title: "Claude 2 Debuts",
    description: "Anthropic's Claude brings longer context and constitutional AI to the forefront.",
    category: "AI",
  },
  {
    year: "2024",
    month: "Feb",
    title: "Sora Announced",
    description: "OpenAI reveals text-to-video AI. The line between real and generated blurs further.",
    category: "AI",
  },
  {
    year: "2024",
    month: "Jun",
    title: "Claude 3.5 Sonnet",
    description: "Coding capabilities leap forward. AI becomes a genuine pair programmer.",
    category: "AI",
  },
  {
    year: "2025",
    month: "Jan",
    title: "DeepSeek R1",
    description: "Chinese open-source reasoning model challenges assumptions about AI dominance.",
    category: "AI",
  },
  {
    year: "2025",
    month: "May",
    title: "o3 Prototype",
    description: "OpenAI demonstrates superhuman reasoning on ARC-AGI benchmark.",
    category: "AI",
  },
  {
    year: "2026",
    month: "Jan",
    title: "SOSC Relaunches",
    description: "Refocused on AI discovery. 500+ members strong, looking ahead.",
    category: "Community",
  },
];

export default function Timeline() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-copper/30" />
          <span className="text-copper font-mono text-xs tracking-[0.3em] uppercase">History</span>
          <div className="h-px w-12 bg-copper/30" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">
          The Timeline
        </h1>
        <p className="text-foreground-muted max-w-lg mx-auto">
          Key moments in AI and our community's journey. The past that shaped what's next.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/30 to-transparent" />

        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-start gap-6 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Year marker */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-amber rounded-full border-2 border-background z-10" />
            
            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
            }`}>
              {/* Date */}
              <div className={`flex items-center gap-2 mb-2 ${
                index % 2 === 0 ? "md:justify-end" : ""
              }`}>
                <span className="text-amber font-mono text-sm">{event.year}</span>
                <span className="text-foreground-muted/50 font-mono text-xs">{event.month}</span>
              </div>
              
              {/* Card */}
              <div className="glass p-5 rounded-xl border border-copper/10 hover:border-copper/20 transition-colors">
                <span className="text-copper/60 font-mono text-[10px] tracking-wider uppercase block mb-2">
                  {event.category}
                </span>
                <h3 className="font-serif text-cream text-lg mb-2">{event.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
