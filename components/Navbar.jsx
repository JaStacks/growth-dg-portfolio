"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const tickingRef = useRef(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ];

  // Scroll detection for header visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollThreshold = 30;

          // Only update if scroll change is significant
          if (Math.abs(currentScrollY - lastScrollY.current) < scrollThreshold) {
            tickingRef.current = false;
            return;
          }

          // Smooth state updates
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-5 z-50 w-[min(92%,720px)] -translate-x-1/2 transition-all duration-500 ease-in-out ${
        isHeaderVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-[calc(100%+1.5rem)] opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="relative z-10 grid h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 rounded-full border border-black/10 bg-white/90 px-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
        style={{
          backdropFilter: "blur(32px) saturate(220%)",
          WebkitBackdropFilter: "blur(32px) saturate(220%)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold text-white shadow-lg"
            style={{
              background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))",
              boxShadow: "0 16px 40px rgba(37, 99, 255, 0.28)",
            }}
          >
            GD
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base text-brand-ink">Growth Design Group</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.42em]" style={{ color: "var(--brand-ink)", opacity: 0.55 }}>
              Ops • Brand • Apps
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-inner ring-1 ring-black/5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-all"
              >
                <span
                  className={`relative z-10 ${
                    isActive ? "text-brand-blue" : "text-brand-ink/65 group-hover:text-brand-ink"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isActive
                      ? "scale-100 bg-brand-sky shadow-[0_10px_30px_rgba(37,99,255,0.18)]"
                      : "scale-0 bg-brand-sky group-hover:scale-100 group-hover:opacity-80"
                  }`}
                />
                <span
                  className={`absolute bottom-1 left-1/2 h-0.5 w-[60%] -translate-x-1/2 rounded-full transition-opacity duration-300 ${
                    isActive ? "opacity-100 bg-brand-blue" : "opacity-0 group-hover:opacity-80 bg-brand-mint"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex flex-col text-right">
            <span className="text-xs font-semibold uppercase tracking-[0.36em]" style={{ color: "var(--brand-ink)", opacity: 0.6 }}>
              Open slots this month
            </span>
            <span className="font-display text-sm text-brand-blue">03 partnerships</span>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: "var(--brand-blue)",
              boxShadow: "0 14px 34px rgba(37, 99, 255, 0.3)",
            }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-mint)" }} />
            Book the ops call
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-12 top-1/2 -z-10 h-20 rounded-full bg-gradient-to-r from-transparent via-brand-sky/60 to-transparent blur-2xl" />
    </header>
  );
}


