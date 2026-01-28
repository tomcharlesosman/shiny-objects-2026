import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-6 left-6 right-6 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <Link 
            href="https://tomosman.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground-muted/40 font-mono text-[10px] tracking-wider hover:text-copper transition-colors"
          >
            A project by Tom Osman
          </Link>
        </div>
      </div>
    </footer>
  );
}
