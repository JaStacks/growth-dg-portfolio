"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HeroSection() {
  const { scrollY } = useScroll();

  const yLeft = useTransform(scrollY, [0, 500], [0, -120]);
  const rLeft = useTransform(scrollY, [0, 500], [0, 18]);

  const yRight = useTransform(scrollY, [0, 500], [0, 90]);
  const rRight = useTransform(scrollY, [0, 500], [0, -14]);

  return (
    <section className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen flex items-center justify-center bg-dark text-primary overflow-hidden`}>
      <motion.div 
        style={{ y: yLeft, rotate: rLeft }} 
        className="absolute left-[10%] top-[30%] opacity-20"
      >
        <div className="w-32 h-32 rounded-full bg-accent blur-3xl" />
      </motion.div>

      <motion.div 
        style={{ y: yRight, rotate: rRight }} 
        className="absolute right-[12%] top-[40%] opacity-20"
      >
        <div className="w-40 h-40 rounded-full bg-primary blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-xs font-medium text-primary/70 tracking-wider uppercase">
            Full-Stack Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-primary">
            ShareHeart.io
          </h1>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Real-time video wall platform for communities to collect, curate, and display video testimonies with instant synchronization.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://shareheart.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-accent hover:opacity-90 transition-opacity"
            >
              View Live Site →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

