"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import VideoWallHero from "@/components/shareheart/VideoWallHero";
import ShareDialog from "@/components/shareheart/ShareDialog";
import VideoCarousel from "@/components/shareheart/VideoCarousel";
import WebcamCaptureDemo from "@/components/shareheart/WebcamCaptureDemo";
import HeroSection from "@/components/shareheart/HeroSection";
import OverviewSection from "@/components/shareheart/OverviewSection";
import InterfaceScreenshotsSection from "@/components/shareheart/InterfaceScreenshotsSection";
import BottomSheet from "@/components/shareheart/BottomSheet";

const FEATURED_VIDEO_DEMO = [
  {
    id: "carousel-1",
    testimonyName: "Featured Story One",
    tagline: "Curated highlight from our latest collection",
    aspectLabel: "16:9",
    featured: true,
    thumbnail: "/project_images/shareheart/1videocarousel.jpg",
  },
  {
    id: "carousel-2",
    testimonyName: "Featured Story Two",
    tagline: "Inspiration captured during a live session",
    aspectLabel: "16:9",
    featured: true,
    thumbnail: "/project_images/shareheart/2videocarousel.jpg",
  },
  {
    id: "carousel-3",
    testimonyName: "Featured Story Three",
    tagline: "Team favorites from the launch campaign",
    aspectLabel: "16:9",
    featured: true,
    thumbnail: "/project_images/shareheart/videocarousel.jpg",
  },
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ScrollControlledBottomSheetSection = React.forwardRef(({ isOpen }, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const demoCampaign = {
    question: "What's your story?",
    question_response: "I've been working on ShareHeart for the past year, building a platform that helps communities collect and share video testimonies in real-time. It's been an incredible journey learning about real-time synchronization and user experience design.",
    cta_button_text: "Continue to Recording"
  };

  return (
    <section ref={ref} className="relative min-h-[150vh] py-32 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            style={{ y: textY, opacity }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">BottomSheet</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Scroll-controlled bottom sheet that reveals campaign questions and instructions. Opens and closes based on scroll position, creating an immersive storytelling experience.
            </p>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-sm">
              <p>
                The bottom sheet component provides contextual information as users scroll through the page. It dynamically adjusts its position based on scroll progress, creating a smooth, engaging interaction.
              </p>
              <p>
                Designed for mobile-first experiences with drag-to-close functionality and smooth spring animations.
              </p>
            </div>
          </motion.div>
          <motion.div
            style={{ y: contentY, opacity }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-24"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl">
              {/* Mock mobile viewport */}
              <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-950">
                <div className="h-full flex flex-col">
                  {/* Mock header */}
                  <div className="h-12 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <div className="w-32 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
                  </div>
                  
                  {/* Mock content area */}
                  <div className="flex-1 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📱</div>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">Scroll to see bottom sheet</p>
                    </div>
                  </div>

                  {/* Bottom Sheet - Scroll Controlled */}
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: isOpen ? 0 : "85%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 rounded-t-2xl shadow-2xl border-t-4 border-zinc-200 dark:border-zinc-800 max-h-[85%] flex flex-col"
                  >
                    {/* Grab handle */}
                    <div className="flex justify-center pt-3 pb-2">
                      <div className="w-12 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                    </div>

                    {/* Header */}
                    <div className="px-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                      <h2 className="font-bold text-zinc-900 dark:text-zinc-100 text-center text-xl md:text-2xl">
                        {demoCampaign.question}
                      </h2>
                    </div>

                    {/* Scrollable content */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                      <div className="mb-6 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide mb-2">
                          How you might answer
                        </p>
                        <p className="text-zinc-900 dark:text-zinc-100 leading-relaxed text-sm">
                          {demoCampaign.question_response}
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                      <button className="w-full py-3.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
                        {demoCampaign.cta_button_text}
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ScrollControlledBottomSheetSection.displayName = "ScrollControlledBottomSheetSection";

export default function ShareHeartCaseStudy() {
  const bottomSheetRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  // Scroll progress for bottom sheet
  const { scrollYProgress: bottomSheetProgress } = useScroll({
    target: bottomSheetRef,
    offset: ["start center", "end center"]
  });

  // Update bottom sheet open state based on scroll
  useMotionValueEvent(bottomSheetProgress, "change", (latest) => {
    setBottomSheetOpen(latest > 0.3 && latest < 0.8);
  });

  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <main className="w-full text-zinc-900 dark:text-zinc-50 font-sans">
        {/* Hero */}
        <HeroSection />

        {/* Overview with Parallax */}
        <OverviewSection />

        {/* Key Metrics - Scroll Driven */}
        <ScrollDrivenMetrics />

        {/* Interface Screenshots */}
        <InterfaceScreenshotsSection />

        {/* Scroll-Controlled Bottom Sheet */}
        <ScrollControlledBottomSheetSection 
          ref={bottomSheetRef}
          isOpen={bottomSheetOpen}
        />

        {/* Live Components with Scroll-Controlled Carousel */}
        <section className="relative bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Components</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                Interactive components built for real-time experiences
              </p>
            </motion.div>

            <div className="space-y-0">
              {/* VideoWallHero */}
              <ParallaxComponentDemo
                title="VideoWallHero"
                description="Main display wall component that renders testimonies in real-time with Supabase channel synchronization. Handles hundreds of concurrent viewers with sub-200ms latency."
              >
                <VideoWallHero />
              </ParallaxComponentDemo>

              {/* ShareDialog */}
              <ParallaxComponentDemo
                title="ShareDialog"
                description="Modal component for sharing collection links with copy-to-clipboard, QR code generation, and embed code functionality. Supports native share API for mobile devices."
                reversed
              >
                <ShareDialog />
              </ParallaxComponentDemo>

              {/* FeaturedCarousel - Scroll Controlled */}
              <ScrollControlledCarouselDemo 
                carouselIndex={carouselIndex} 
                setCarouselIndex={setCarouselIndex}
              />
            </div>
          </div>
        </section>

        {/* Technical Details - Scroll-Driven */}
        <ScrollDrivenTechnicalSection />

        {/* Reflection - Scroll-Driven */}
        <ScrollDrivenReflectionSection />

        {/* CTA - Scroll-Driven */}
        <ScrollDrivenCTASection />
      </main>
    </div>
  );
}

function ScrollDrivenTechnicalSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.2, 0.2, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[180vh] py-32 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900">
      {/* Subtle overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 bg-purple-500/5 backdrop-blur-sm z-0 pointer-events-none"
      />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Implementation</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Built on a foundation of real-time infrastructure and event-driven architecture.
            </p>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
              <p className="text-sm">
                ShareHeart leverages Supabase's realtime channels to maintain sub-200ms synchronization across hundreds of concurrent viewers. The architecture prioritizes reliability and performance at scale.
              </p>
              <p className="text-sm">
                Node.js workers handle automation workflows, processing video submissions, generating AI prompts, and managing approval queues. This separation of concerns ensures the main application remains responsive.
              </p>
              <p className="text-sm">
                Optimized rendering pipelines and intelligent caching strategies maintain stability under high concurrent load, proving that real-time platforms can be both powerful and performant.
              </p>
            </div>
          </motion.div>
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-24"
          >
            <div className="space-y-8">
              <div className="p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Architecture</h3>
                <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                    <span>Supabase realtime channels for sub-200ms synchronization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                    <span>Node.js workers orchestrate automation workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                    <span>Optimized rendering and caching for stability</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50">Features</h3>
                <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                    <span>AI-assisted collection page generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                    <span>Real-time video submission and processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                    <span>Advanced approval workflows with bulk actions</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ScrollDrivenReflectionSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0.15, 0.15, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[180vh] py-32 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900">
      {/* Subtle overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 backdrop-blur-sm z-0 pointer-events-none"
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reflection</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Lessons learned from building at scale.
            </p>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
              <p className="text-sm">
                Building ShareHeart challenged our understanding of real-time synchronization at scale. Translating community engagement workflows into a technical system required balancing simplicity for end users with the complexity of maintaining state across hundreds of concurrent connections.
              </p>
              <p className="text-sm">
                The project taught us that real-time platforms can be engineered for both reliability and user experience—proving that technical infrastructure and community storytelling can coexist seamlessly.
              </p>
            </div>
          </motion.div>
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="sticky top-24"
          >
            <div className="p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
              <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                <p>
                  Building ShareHeart challenged our understanding of real-time synchronization at scale. Translating community engagement workflows into a technical system required balancing simplicity for end users with the complexity of maintaining state across hundreds of concurrent connections.
                </p>
                <p>
                  The project taught us that real-time platforms can be engineered for both reliability and user experience—proving that technical infrastructure and community storytelling can coexist seamlessly.
                </p>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">
                    "Technical infrastructure and community storytelling can coexist seamlessly."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ScrollDrivenCTASection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.3, 0.6]) }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"
      />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          style={{ y: contentY, opacity, scale }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Experience ShareHeart
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            See how it powers community storytelling in real-time.
          </p>
          <a 
            href="https://shareheart.io" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
          >
            Visit ShareHeart.io →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ScrollDrivenMetrics() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const metrics = [
    { metric: "<200ms", label: "Latency", color: "text-purple-600 dark:text-purple-400" },
    { metric: "100s", label: "Viewers", color: "text-indigo-600 dark:text-indigo-400" },
    { metric: "99.9%", label: "Uptime", color: "text-pink-600 dark:text-pink-400" },
    { metric: "Event", label: "Driven", color: "text-blue-600 dark:text-blue-400" },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Metrics</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Built for scale and reliability
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((item, idx) => {
            const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
            const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
            const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
            
            return (
              <motion.div
                key={idx}
                style={{ y, opacity, scale }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <motion.div 
                  className={`text-4xl md:text-5xl font-bold mb-2 ${item.color}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.metric}
                </motion.div>
                <div className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-medium">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScrollControlledCarouselDemo({ carouselIndex, setCarouselIndex }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });
  
  // Track maximum index reached for forward-only progression
  const maxIndexReachedRef = useRef(0);
  
  // Minimal scroll-driven animations - very subtle
  const textY = useTransform(scrollYProgress, [0, 1], [8, -4]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 1]);
  
  const carouselY = useTransform(scrollYProgress, [0, 1], [-8, 4]);
  const carouselOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 1]);

  // Forward-only progression - each index visited once, no back-and-forth
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine target index based on scroll position with clear boundaries
    let targetIndex = 0;
    if (latest >= 0.5) {
      targetIndex = latest >= 0.85 ? 2 : 1;
    }
    
    // Reset if scrolled back to beginning
    if (latest < 0.2) {
      if (maxIndexReachedRef.current !== 0) {
        maxIndexReachedRef.current = 0;
        setCarouselIndex(0);
      }
      return;
    }
    
    // Only advance forward - track maximum reached
    // This ensures each index is visited exactly once: 0 -> 1 -> 2
    if (targetIndex > maxIndexReachedRef.current) {
      maxIndexReachedRef.current = targetIndex;
      setCarouselIndex(targetIndex);
    }
  });

  return (
    <div ref={sectionRef} className="relative min-h-[85vh] flex items-center py-20 md:py-24 bg-white dark:bg-black">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="space-y-6"
          >
            <div>
              <div className="text-xs md:text-sm font-medium text-purple-600 dark:text-purple-400 mb-3 tracking-wider uppercase">
                Featured Content
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 text-zinc-900 dark:text-zinc-50 leading-tight">
                Featured Stories Carousel
              </h3>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                This is the production carousel from our admin app—built on real customer footage, hover activated controls, and status-aware badges so teams can curate their top stories in seconds.
              </p>
            </div>
            
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex gap-1.5">
                {FEATURED_VIDEO_DEMO.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === carouselIndex
                        ? 'w-8 bg-purple-600 dark:bg-purple-400'
                        : 'w-1.5 bg-zinc-300 dark:bg-zinc-700'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {carouselIndex + 1} / {FEATURED_VIDEO_DEMO.length}
              </span>
            </div>
          </motion.div>
          
          <motion.div
            style={{ 
              y: carouselY, 
              opacity: carouselOpacity
            }}
            className="relative"
          >
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black overflow-hidden shadow-xl">
              <div className="px-4 md:px-6 py-3 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                </div>
                <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">VideoCarousel</span>
              </div>
              <div className="p-4 md:p-6">
                <VideoCarousel
                  videos={FEATURED_VIDEO_DEMO}
                  activeIndex={carouselIndex}
                  onActiveIndexChange={setCarouselIndex}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ParallaxComponentDemo({ title, description, children, reversed = false }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const componentY = useTransform(scrollYProgress, [0, 1], [0, reversed ? 60 : -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reversed ? -40 : 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <div 
      ref={sectionRef}
      className={`relative min-h-[90vh] flex items-center py-24 ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: textY, opacity }}
            initial={{ opacity: 0, x: reversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className={reversed ? 'md:order-1' : ''}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {description}
            </p>
          </motion.div>
          <motion.div
            style={{ y: componentY, opacity }}
            initial={{ opacity: 0, x: reversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className={`relative ${reversed ? 'md:order-2' : ''}`}
          >
            <div className="rounded-xl border-2 border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black overflow-hidden shadow-lg">
              <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                </div>
                <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">{title}</span>
              </div>
              <div className="p-6">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
