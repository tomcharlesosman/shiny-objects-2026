"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/timeline", label: "Timeline" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-6 right-6 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo - Left */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 border border-copper/30 rounded-lg flex items-center justify-center">
                <span className="text-copper font-serif text-sm">S</span>
              </div>
            </Link>
          </div>

          {/* Nav Links - Center */}
          <div className="flex justify-center">
            <div className="hidden sm:flex items-center gap-1 bg-glass px-2 py-1.5 rounded-full border border-copper/10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all ${
                    pathname === link.href
                      ? "bg-amber/20 text-amber"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Right */}
          <div className="flex justify-end items-center gap-3">
            <Link
              href="/join"
              className="hidden sm:inline-flex px-4 py-2 bg-amber text-background font-mono text-xs tracking-wider rounded-full hover:bg-amber-bright transition-all"
            >
              Join
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
