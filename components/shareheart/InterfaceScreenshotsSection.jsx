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
    offset: ["start center", "end center"]
  });

  // Simple, clean scroll effects like BottomSheet section
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[150vh] py-32 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900"
    >
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
            <div className="text-xs md:text-sm font-medium text-purple-600 dark:text-purple-400 tracking-wider uppercase mb-3">
              Campaign Management
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
              Real-time Video Management
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Comprehensive dashboard for managing collections, reviewing submissions, and curating content with an intuitive interface designed for speed and clarity.
            </p>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-sm">
              <p>
                The management interface provides real-time updates on video submissions, allowing administrators to review, approve, and organize content efficiently.
              </p>
              <p>
                Built with performance in mind, the dashboard handles large volumes of submissions while maintaining a smooth, responsive user experience.
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
            <div className="rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xl">
              <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                </div>
                <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">SubmissionsTabDemo</span>
              </div>
              <div className="p-6">
                <SubmissionsTabDemo />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Split Screen Section
function SplitShowcaseSection() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const { scrollYProgress: leftProgress } = useScroll({
    target: leftRef,
    offset: ["start center", "end center"]
  });

  const { scrollYProgress: rightProgress } = useScroll({
    target: rightRef,
    offset: ["start center", "end center"]
  });

  // Simple, clean scroll effects like BottomSheet section
  const leftTextY = useTransform(leftProgress, [0, 1], [0, 40]);
  const leftContentY = useTransform(leftProgress, [0, 1], [0, -40]);
  const leftOpacity = useTransform(leftProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const rightTextY = useTransform(rightProgress, [0, 1], [0, 40]);
  const rightContentY = useTransform(rightProgress, [0, 1], [0, -40]);
  const rightOpacity = useTransform(rightProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className="relative bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-900">
      <div className="grid md:grid-cols-2">
        {/* Left: Question Generation */}
        <section ref={leftRef} className="relative min-h-[150vh] py-32 bg-zinc-50 dark:bg-black border-r border-zinc-200 dark:border-zinc-900">
          <div className="max-w-2xl mx-auto px-6">
            <div className="sticky top-24">
              <motion.div
                style={{ y: leftTextY, opacity: leftOpacity }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-4 tracking-wider uppercase">
                  AI-Powered Creation
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                  Question Generation
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Intelligent interface for generating engaging prompts using AI. Helps creators craft compelling questions that inspire authentic video testimonies.
                </p>
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-sm">
                  <p>
                    The AI-powered question generator helps creators craft engaging prompts that inspire authentic storytelling.
                  </p>
                  <p>
                    Simply describe your campaign goals, and the system generates relevant questions tailored to your community.
                  </p>
                </div>
              </motion.div>
              <motion.div
                style={{ y: leftContentY, opacity: leftOpacity }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xl">
                  <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                    </div>
                    <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">QuestionGenerationDemo</span>
                  </div>
                  <div className="p-6 max-w-full overflow-hidden">
                    <QuestionGenerationDemo />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Right: Recording Interface */}
        <section ref={rightRef} className="relative min-h-[150vh] py-32 bg-white dark:bg-black">
          <div className="max-w-2xl mx-auto px-6">
            <div className="sticky top-24">
              <motion.div
                style={{ y: rightTextY, opacity: rightOpacity }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-4 tracking-wider uppercase">
                  User Experience
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                  Video Recording
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  Intuitive recording interface that guides users through the testimony capture process. Clean, focused design reduces friction and encourages authentic storytelling.
                </p>
                <div className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300 mb-6">
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
                <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-sm">
                  <p>
                    The recording interface provides a distraction-free environment for capturing authentic video testimonies.
                  </p>
                </div>
              </motion.div>
              <motion.div
                style={{ y: rightContentY, opacity: rightOpacity }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xl max-w-xs md:max-w-sm">
                  <div className="px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                    </div>
                    <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">WebcamCaptureDemo</span>
                  </div>
                  <div className="p-6">
                    <WebcamCaptureDemo />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
