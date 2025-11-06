"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import WebcamCaptureDemo from "./WebcamCaptureDemo";
import QuestionGenerationDemo from "./QuestionGenerationDemo";
import SubmissionsTabDemo from "./SubmissionsTabDemo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function InterfaceScreenshotsSection() {
  return (
    <section className={`${geistSans.variable} ${geistMono.variable} relative`}>
      {/* Campaign Management Content */}
      <CampaignManagementContentSection />
      
      {/* Split Screen: Question Generation & Recording */}
      <SplitShowcaseSection />
    </section>
  );
}

// Campaign Management Content Section
function CampaignManagementContentSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.25"]
  });

  // Background parallax orbs for depth - smoother, linear movement
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const orb1X = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const orb1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.1, 0.12, 0.1, 0]);
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 1.04]);

  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const orb2X = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const orb2Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.08, 0.1, 0.08, 0]);
  const orb2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.06, 1.02]);

  // Smooth progressive reveal - simplified keyframes for smoother interpolation
  // Header reveals first (0-0.3 scroll progress)
  const headerX = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [-60, 0, 0, 60]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.7, 0.8, 1], [0, 0.5, 1, 1, 0.8, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0.94, 1, 1, 0.98]);

  // Title reveals second (0.15-0.35 scroll progress)
  const titleX = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [-70, 0, 0, 70]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.7, 0.8, 1], [0, 0.4, 1, 1, 0.85, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [0.92, 1, 1, 0.97]);

  // Description reveals third (0.25-0.4 scroll progress)
  const descriptionX = useTransform(scrollYProgress, [0, 0.35, 0.6, 1], [-60, 0, 0, 60]);
  const descriptionOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.65, 0.75, 1], [0, 0.3, 1, 1, 0.8, 0]);

  // Component reveals last (0.35-0.6 scroll progress) - smooth slide up
  const componentY = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.6, 0.8, 1], [100, 50, 0, 0, -20, -35]);
  const componentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1], [0, 0.3, 0.6, 0.9, 1, 0.95, 0.8, 0.6]);
  const componentScale = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.7, 1], [0.88, 0.94, 1, 0.99, 0.96]);
  const componentMaxHeight = useTransform(scrollYProgress, [0, 0.4, 0.5, 1], [0, 0, 2000, 2000]);
  const componentRotate = useTransform(scrollYProgress, [0, 0.5, 0.6, 1], [-1, 0, 0, 0.3]);

  // Container subtle movement - linear
  const containerY = useTransform(scrollYProgress, [0, 1], [15, -10]);

  // Gradient overlay for smooth transition to next section
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.7, 0.85, 1], [0, 0, 0.4, 0.65]);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[220vh] py-24 md:py-32 bg-white dark:bg-black overflow-hidden"
    >
      {/* Background parallax orbs */}
      <motion.div
        style={{
          y: orb1Y,
          x: orb1X,
          opacity: orb1Opacity,
          scale: orb1Scale
        }}
        className="pointer-events-none absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl z-0"
      />
      <motion.div
        style={{
          y: orb2Y,
          x: orb2X,
          opacity: orb2Opacity,
          scale: orb2Scale
        }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500/8 blur-3xl z-0"
      />

      {/* Gradient overlay for transition */}
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black z-20"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          style={{ y: containerY }}
          className="w-full"
        >
          <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 xl:p-12 shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50">
            {/* Header - Reveals first */}
            <motion.div
              style={{ 
                x: headerX, 
                opacity: headerOpacity, 
                scale: headerScale 
              }}
              className="mb-3 md:mb-4 overflow-hidden"
            >
              <div className="text-xs md:text-sm font-medium text-purple-600 dark:text-purple-400 tracking-wider uppercase">
                Campaign Management
              </div>
            </motion.div>

            {/* Title - Reveals second */}
            <motion.h2
              style={{ 
                x: titleX, 
                opacity: titleOpacity, 
                scale: titleScale 
              }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 mb-4 md:mb-6 overflow-hidden"
            >
              Real-time Video
              <br />
              <span className="text-purple-600 dark:text-purple-400">Management</span>
            </motion.h2>

            {/* Description - Reveals third */}
            <motion.p
              style={{ 
                x: descriptionX, 
                opacity: descriptionOpacity 
              }}
              className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 md:mb-8 overflow-hidden"
            >
              Comprehensive dashboard for managing collections, reviewing submissions, and curating content with an intuitive interface designed for speed and clarity.
            </motion.p>
            
            {/* Component Demo - Reveals last with smooth slide up */}
            <motion.div
              style={{
                y: componentY,
                opacity: componentOpacity,
                scale: componentScale,
                maxHeight: componentMaxHeight,
                rotate: componentRotate
              }}
              className="mt-6 md:mt-8 -mx-2 md:-mx-4 lg:-mx-6 xl:-mx-8 overflow-hidden"
            >
              <SubmissionsTabDemo />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Split Screen Section
function SplitShowcaseSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Enhanced parallax effects
  const leftY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const leftScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.99]);
  const rightScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.99, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.75, 0.85, 1], [0, 0.7, 1, 1, 0.7, 0]);

  // Background gradient for smooth transition
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [0.3, 0, 0, 0]);

  return (
    <div ref={sectionRef} className="relative min-h-[100vh] bg-white dark:bg-black overflow-hidden">
      {/* Transition gradient */}
      <motion.div
        style={{ opacity: gradientOpacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent z-10"
      />
      
      <div className="grid md:grid-cols-2 min-h-[100vh] relative z-20">
        {/* Left: Question Generation */}
        <div className="relative overflow-hidden bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center p-6 md:p-8 lg:p-10 xl:p-16">
          <motion.div
            style={{ y: leftY, opacity, scale: leftScale }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="w-full max-w-2xl space-y-6 lg:space-y-7 xl:space-y-8"
          >
            <div>
              <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-4 tracking-wider uppercase">
                AI-Powered Creation
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                Question Generation
              </h3>
              <p className="text-base md:text-lg lg:text-lg xl:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Intelligent interface for generating engaging prompts using AI. Helps creators craft compelling questions that inspire authentic video testimonies.
              </p>
            </div>
            <div className="relative w-full max-w-full overflow-hidden">
              <QuestionGenerationDemo />
            </div>
          </motion.div>
        </div>

        {/* Right: Recording Interface */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center p-6 md:p-8 lg:p-10 xl:p-16">
          <motion.div
            style={{ y: rightY, opacity, scale: rightScale }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="w-full max-w-full space-y-6 lg:space-y-7 xl:space-y-8 flex flex-col items-center"
          >
            <div className="w-full">
              <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-4 tracking-wider uppercase">
                User Experience
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                Video Recording
              </h3>
              <p className="text-base md:text-lg lg:text-lg xl:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Intuitive recording interface that guides users through the testimony capture process. Clean, focused design reduces friction and encourages authentic storytelling.
              </p>
              <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                  <span>Real-time video preview and controls</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                  <span>Guided prompts and instructions</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                  <span>Instant upload and processing</span>
                </div>
              </div>
            </div>
            <div className="relative w-full flex justify-center">
              <div className="w-full max-w-xs md:max-w-sm">
                <WebcamCaptureDemo />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
