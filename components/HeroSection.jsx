"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduced movement ranges on mobile for smoother performance
  const scrollRange = isMobile ? [0, 300] : [0, 500];
  const movementMultiplier = prefersReducedMotion ? 0 : (isMobile ? 0.5 : 1);

  const yLeft = useTransform(scrollY, scrollRange, [0, -120 * movementMultiplier]);
  const rLeft = useTransform(scrollY, scrollRange, [0, 18 * movementMultiplier]);

  const yRight = useTransform(scrollY, scrollRange, [0, 90 * movementMultiplier]);
  const rRight = useTransform(scrollY, scrollRange, [0, -14 * movementMultiplier]);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white flex items-center justify-center">
      <motion.div 
        style={{ 
          y: yLeft, 
          rotate: rLeft,
          willChange: "transform"
        }} 
        className="absolute left-[10%] top-[30%] opacity-20 hidden md:block"
      >
        <Image src="/globe.svg" alt="Decoration left" width={96} height={96} />
      </motion.div>

      <motion.div 
        style={{ 
          y: yRight, 
          rotate: rRight,
          willChange: "transform"
        }} 
        className="absolute right-[12%] top-[40%] opacity-20 hidden md:block"
      >
        <Image src="/window.svg" alt="Decoration right" width={96} height={96} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
            Building Digital Experiences
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-300 mb-3 md:mb-4">
            Modern Web Applications
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
        >
          Creating scalable web applications with modern technologies. 
          Specializing in real-time systems, user experience design, and full-stack development.
        </motion.p>
      </motion.div>
    </section>
  );
}


