import Hero from "./components/Hero";
import Heritage from "./components/Heritage";
import Problem from "./components/Problem";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Heritage />
      <Problem />
      <Features />
      <Pricing />
      <FAQ />
      <footer className="border-t border-border py-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted">
          <p>© 2026 Shiny Object Social Club. Built with curiosity since 2021.</p>
        </div>
      </footer>
    </main>
  );
}
