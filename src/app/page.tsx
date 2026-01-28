import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Manifesto from "./components/Manifesto";
import Inside from "./components/Inside";
import Members from "./components/Members";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-background noise">
      <Hero />
      <Ticker />
      <Manifesto />
      <Inside />
      <Members />
      <Pricing />
      <FAQ />
      <footer className="border-t border-border py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-foreground-muted text-sm">
            © 2026 Shiny Object Social Club
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="https://x.com/ShinyObjectSC" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-foreground transition-colors">
              X/Twitter
            </a>
            <a href="mailto:hello@shinyobject.club" className="text-foreground-muted hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
