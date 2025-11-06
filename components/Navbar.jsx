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
      className={`fixed top-4 left-1/2 z-50 max-w-3xl rounded-full 
      transition-all duration-500 ease-in-out ${
        isHeaderVisible 
          ? "-translate-x-1/2 translate-y-0 opacity-100 pointer-events-auto" 
          : "-translate-x-1/2 -translate-y-[calc(100%+1rem)] opacity-0 pointer-events-none"
      }`}
      style={{ 
        width: "90%",
        maxWidth: "600px",
        transitionProperty: 'transform, opacity',
      }}
    >
      <div 
        className="flex items-center justify-center h-12 px-5 relative z-10 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 bg-white/90 dark:bg-zinc-900/90 shadow-sm backdrop-blur-xl"
        style={{
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
        }}
      >
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600/15 to-indigo-600/15 dark:from-purple-400/15 dark:to-indigo-400/15 text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}


