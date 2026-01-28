const tickerItems = [
  "Claude 4 leaked specs",
  "OpenAI o3 release", 
  "Perplexity raised $500M",
  "DeepSeek V3 benchmark",
  "MCP protocol adoption",
  "Cursor 1.0 launch",
  "ElevenLabs new voices",
  "Gemini 2.5 Pro",
  "Midjourney V7 alpha",
  "Runway Gen-4",
];

export default function Ticker() {
  return (
    <div className="border-y border-border bg-background-alt/30 overflow-hidden py-3">
      <div className="flex whitespace-nowrap">
        <div className="marquee flex items-center gap-12 text-xs font-mono text-foreground-muted/40 tracking-widest uppercase">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="text-copper/40">◆</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
        <div className="marquee flex items-center gap-12 text-xs font-mono text-foreground-muted/40 tracking-widest uppercase">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="text-copper/40">◆</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
