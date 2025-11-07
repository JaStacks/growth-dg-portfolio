"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function OverviewSection() {
  const sectionRef = useRef(null);
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: isMobile ? ["start 0.9", "end 0.1"] : ["start end", "end start"],
    layoutEffect: false
  });

  // Reduced movement on mobile and for reduced motion preference
  const movementMultiplier = prefersReducedMotion ? 0 : (isMobile ? 0.5 : 1);
  
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50 * movementMultiplier]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50 * movementMultiplier]);

  // Screenshots with alternating layout and context
  const screenshots = [
    {
      src: "/project_images/shareheart/campaign_detail_modal_and_video_selection_floating_actions.png?v=2",
      alt: "Campaign detail modal with video selection",
      key: "campaign-detail",
      rotate: -3,
      aspectRatio: "9/16",
      objectFit: "cover",
      title: "Campaign Management",
      description: "Comprehensive interface for managing video campaigns with real-time updates. Organize collections, review submissions, and curate content with intuitive controls designed for speed and clarity.",
      features: [
        "Real-time video submission tracking",
        "Bulk approval workflows",
        "Collection organization tools"
      ]
    },
    {
      src: "/project_images/shareheart/Botttom_sheet_example.png?v=2",
      alt: "Bottom sheet modal",
      key: "bottom-sheet",
      rotate: 2,
      aspectRatio: "9/16",
      objectFit: "cover",
      title: "Contextual Bottom Sheet",
      description: "Adaptive bottom sheet component that provides contextual information and actions. Smooth animations and intuitive interactions guide users through the testimony capture process without disrupting workflow.",
      features: [
        "Smooth slide-up animations",
        "Context-aware content display",
        "Touch and gesture support"
      ]
    },
    {
      src: "/project_images/shareheart/recording_interface_with_script_and_upload support.png?v=2",
      alt: "Recording interface with script and upload support",
      key: "recording-interface",
      rotate: -2,
      aspectRatio: "9/16",
      objectFit: "cover",
      title: "Video Recording Interface",
      description: "Intuitive recording interface that guides users through the testimony capture process. Features script display, real-time preview, and seamless upload functionality for a smooth user experience.",
      features: [
        "Script display and guidance",
        "Real-time video preview",
        "One-click upload and processing"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className={`${geistSans.variable} ${geistMono.variable} relative py-16 sm:py-20 md:py-24 lg:py-32 bg-zinc-50 dark:bg-black border-b border-zinc-200 dark:border-zinc-900 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Text Content */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <motion.div
            style={{ 
              y: textY,
              willChange: prefersReducedMotion ? "auto" : "transform"
            }}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            transition={{ 
              duration: prefersReducedMotion ? 0 : 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              What We Built
            </h2>
            <div className="space-y-4 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p>
                ShareHeart enables organizations to collect video stories from their community through a simple link. The platform handles the entire workflow: AI-assisted collection page generation, real-time video submission, approval workflows, and a synchronized display wall.
              </p>
              <p>
                Built on Supabase realtime channels for low-latency updates, Node.js workers for automation, and optimized rendering pipelines to maintain stability under high concurrent load.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Screenshots - Alternating left/right with rotation */}
        <ScreenshotShowcase screenshots={screenshots} />
      </div>
    </section>
  );
}

// Screenshot showcase with alternating layout and scroll effects
function ScreenshotShowcase({ screenshots }) {
  return (
    <div className="space-y-20 sm:space-y-24 md:space-y-32 lg:space-y-40">
      {screenshots.map((screenshot, index) => (
        <ScreenshotItem key={screenshot.key} screenshot={screenshot} index={index} />
      ))}
    </div>
  );
}

// Individual screenshot item with scroll effects
function ScreenshotItem({ screenshot, index }) {
  const isLeft = index % 2 === 0;
  const itemRef = useRef(null);
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

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: isMobile ? ["start 0.9", "end 0.1"] : ["start end", "end start"],
    layoutEffect: false
  });

  // Reduced movement on mobile and for reduced motion preference
  const movementMultiplier = prefersReducedMotion ? 0 : (isMobile ? 0.4 : 1);
  const rotateMultiplier = prefersReducedMotion ? 0 : (isMobile ? 0.5 : 1);
  
  // Image transforms - moves opposite to text
  const screenshotY = useTransform(scrollYProgress, [0, 1], [0, isLeft ? -50 * movementMultiplier : 50 * movementMultiplier]);
  const screenshotRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [screenshot.rotate * rotateMultiplier, 0, -screenshot.rotate * rotateMultiplier]
  );
  const screenshotOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const screenshotScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  // Text transforms - moves opposite to image for parallax
  const textY = useTransform(scrollYProgress, [0, 1], [0, isLeft ? 40 * movementMultiplier : -40 * movementMultiplier]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={itemRef}
      className={`flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh]`}
    >
      {/* Image */}
      <motion.div
        style={{
          y: screenshotY,
          rotate: screenshotRotate,
          opacity: screenshotOpacity,
          scale: screenshotScale,
          willChange: prefersReducedMotion ? "auto" : "transform"
        }}
        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (isLeft ? -50 : 50) }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.8, 
          ease: [0.4, 0, 0.2, 1]
        }}
        className={`flex-1 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}
      >
        <div className="relative w-full aspect-[9/16] max-w-sm mx-auto md:max-w-md">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-purple-500/20 dark:border-purple-400/10 bg-white dark:bg-zinc-900">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 320px, 400px"
              priority={index === 0}
              unoptimized
            />
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-purple-500/10 dark:bg-purple-400/5 rounded-3xl blur-2xl -z-10" />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
          willChange: prefersReducedMotion ? "auto" : "transform"
        }}
        initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (isLeft ? 50 : -50) }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.8, 
          delay: prefersReducedMotion ? 0 : 0.2, 
          ease: [0.4, 0, 0.2, 1]
        }}
        className={`flex-1 ${isLeft ? 'md:pl-8' : 'md:pr-8'} flex flex-col justify-center`}
      >
        <div className="max-w-lg mx-auto md:mx-0">
          <div className="text-xs md:text-sm font-medium text-purple-600 dark:text-purple-400 mb-3 md:mb-4 tracking-wider uppercase">
            Mobile Interface
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-zinc-900 dark:text-zinc-50 leading-tight">
            {screenshot.title}
          </h3>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 md:mb-8">
            {screenshot.description}
          </p>
          <div className="space-y-3">
            {screenshot.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 0.5, 
                  delay: prefersReducedMotion ? 0 : 0.3 + featureIndex * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="flex items-start gap-3"
              >
                <span className="text-purple-600 dark:text-purple-400 mt-1 font-bold">•</span>
                <span className="text-base text-zinc-700 dark:text-zinc-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
