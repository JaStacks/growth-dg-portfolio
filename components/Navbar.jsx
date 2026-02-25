"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const tickingRef = useRef(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/jastacks", label: "About" },
  ];

  useEffect(() => {
    const heroHeight = typeof window !== "undefined" ? window.innerHeight : 800;
    const checkScroll = () => {
      setScrolledPastHero(window.scrollY > heroHeight * 0.5);
    };
    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollThreshold = 30;
          if (Math.abs(currentScrollY - lastScrollY.current) < scrollThreshold) {
            tickingRef.current = false;
            return;
          }
          if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
            setIsHeaderVisible(false);
          } else if (currentScrollY < lastScrollY.current || currentScrollY <= 80) {
            setIsHeaderVisible(true);
          }
          lastScrollY.current = currentScrollY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOpaque = scrolledPastHero || pathname !== "/";
  const textClass = isOpaque
    ? "text-dark"
    : "text-[var(--background)]";

  return (
    <header
      className={`fixed left-1/2 top-5 z-50 w-[min(92%,720px)] -translate-x-1/2 transition-all duration-500 ease-out ${
        isHeaderVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-[calc(100%+1.5rem)] opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`relative z-10 flex h-14 items-center justify-between gap-4 rounded-[2rem] border px-6 transition-all duration-300 ${
          isOpaque
            ? "border-[var(--dark)]/15 bg-[var(--background)]/60 shadow-lg backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className={`font-heading text-base font-bold transition hover:-translate-y-px ${textClass}`}
        >
          Growth Design Group
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition hover:-translate-y-px ${
                  isActive ? "text-accent" : `${textClass} hover:opacity-90`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="https://cal.com/jareice-graham-qay95z/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center overflow-hidden rounded-[2rem] px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.03] hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            backgroundColor: "var(--accent)",
            boxShadow: "0 10px 28px rgba(230, 59, 46, 0.25)",
          }}
        >
          Book the ops rescue
        </Link>
      </div>
    </header>
  );
}
