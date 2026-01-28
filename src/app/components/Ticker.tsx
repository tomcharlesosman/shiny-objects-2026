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
    <div className="border-y border-border bg-background-alt overflow-hidden py-4">
      <div className="flex whitespace-nowrap">
        <div className="marquee flex items-center gap-8 text-sm font-mono text-foreground-muted">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="text-accent-secondary">✦</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
        <div className="marquee flex items-center gap-8 text-sm font-mono text-foreground-muted">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="text-accent-secondary">✦</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
