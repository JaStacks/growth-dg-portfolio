"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/jastacks", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="rounded-t-[4rem] bg-dark px-6 pt-16 pb-8 sm:px-8">
      <div className="noise-overlay rounded-t-[4rem]" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-16">
          <div>
            <p className="font-heading text-xl font-bold text-[var(--background)]">
              Growth Design Group
            </p>
            <p className="mt-2 font-mono text-sm text-[var(--background)]/70">
              Ops • Brand • Apps
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[var(--background)]/80">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              System Operational
            </div>
          </div>
          <nav className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--background)]/60">
              Navigate
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--background)]/90 transition hover:-translate-y-px hover:text-[var(--background)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--background)]/60">
              Legal
            </span>
            <Link
              href="/privacy"
              className="text-[var(--background)]/70 transition hover:text-[var(--background)]"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[var(--background)]/70 transition hover:text-[var(--background)]"
            >
              Terms
            </Link>
          </div>
        </div>
        <p className="mt-12 border-t border-[var(--background)]/20 pt-8 font-mono text-xs text-[var(--background)]/50">
          © {new Date().getFullYear()} Growth Design Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
