import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Manifesto from "./components/Manifesto";
import Inside from "./components/Inside";
import Members from "./components/Members";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Ticker />
      <Manifesto />
      <Inside />
      <Members />
      <Pricing />
      <FAQ />
      <footer className="border-t border-border py-16 px-6 relative">
        {/* LED accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-amber/30 to-transparent" />
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-foreground-muted/30 text-xs font-mono tracking-wider">
          <div>© MMXXVI SHINY OBJECT SOCIAL CLUB</div>
          <div className="flex items-center gap-8">
            <a href="https://x.com/ShinyObjectSC" target="_blank" rel="noopener noreferrer" className="hover:text-amber transition-colors">
              X/TWITTER
            </a>
            <a href="mailto:hello@shinyobject.club" className="hover:text-amber transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
