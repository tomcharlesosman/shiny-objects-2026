import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <footer className="border-t border-border py-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted">
          <p>© 2026 Shiny Object Social Club. Built with curiosity.</p>
        </div>
      </footer>
    </main>
  );
}
