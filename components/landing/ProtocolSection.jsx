"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const PROTOCOL_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "We map your ops, brand gaps, and product goals into one clear playbook.",
    Animation: GearMotif,
  },
  {
    step: "02",
    title: "Design",
    description: "Brand and UX that stakeholders trust. Systems that scale without chaos.",
    Animation: LaserGrid,
  },
  {
    step: "03",
    title: "Deploy",
    description: "Launch the app and the playbook. You run the system; we keep it sharp.",
    Animation: Waveform,
  },
];

function GearMotif() {
  return (
    <svg className="h-24 w-24 text-accent/40" viewBox="0 0 100 100" fill="none">
      <motion.circle
        cx="50"
        cy="50"
        r="42"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.g
        style={{ transformOrigin: "50px 50px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="47"
            y="8"
            width="6"
            height="18"
            rx="2"
            fill="currentColor"
            style={{ transform: `rotate(${i * 60}deg)` }}
          />
        ))}
      </motion.g>
    </svg>
  );
}

function LaserGrid() {
  return (
    <div className="relative h-24 w-full overflow-hidden rounded-lg bg-[var(--dark)]/10">
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 gap-1 p-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="rounded-sm bg-[var(--dark)]/20"
            style={{ opacity: 0.3 + (i % 5) * 0.1 }}
          />
        ))}
      </div>
      <motion.div
        className="absolute left-0 right-0 h-0.5 bg-accent"
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: false }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
      />
    </div>
  );
}

function Waveform() {
  const path = "M0 50 Q25 20 50 50 T100 50";
  return (
    <svg className="h-24 w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        d={path}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeOpacity="0.5"
        strokeDasharray="200"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: [200, 0, 200] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}

const N = PROTOCOL_STEPS.length;

function scrollProgressToStep(progress) {
  // Map 0–1 scroll progress to step index; equal bands with small overlap
  if (progress < 1 / (N + 1)) return 0;
  if (progress < (N - 1) / N) return 1;
  return 2;
}

export default function ProtocolSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = scrollProgressToStep(latest);
    setActiveIndex(step);
  });

  const item = PROTOCOL_STEPS[activeIndex];
  const Animation = item.Animation;

  return (
    <section className="relative" ref={containerRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <div className="mx-auto w-full max-w-2xl">
          {/* Step indicators */}
          <div className="mb-8 flex justify-center gap-2">
            {PROTOCOL_STEPS.map((step, i) => (
              <div
                key={step.step}
                role="presentation"
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-[var(--dark)]/20"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[3rem] border border-[var(--dark)]/10 bg-[var(--background)] p-8 shadow-xl md:p-12"
            >
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                <div className="flex-shrink-0">
                  <Animation />
                </div>
                <div>
                  <span className="font-mono text-sm text-accent">{item.step}</span>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-[var(--dark)]/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
