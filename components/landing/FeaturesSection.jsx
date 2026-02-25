"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const SHUFFLER_LABELS = ["Run the system", "Own the playbook", "Scale without chaos"];
const TYPEWRITER_MESSAGES = [
  "Brand alignment: verified.",
  "Ops pipeline: active.",
  "Launch sequence: ready.",
  "Stakeholders: notified.",
];
const SCHEDULER_LABEL = "Ship on schedule";

function DiagnosticShuffler() {
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const t = setInterval(() => {
      setOrder((prev) => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-32 w-full">
      {order.map((idx, i) => (
        <motion.div
          key={idx}
          layout
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute left-0 right-0 rounded-xl border border-[var(--dark)]/10 bg-[var(--background)] px-4 py-3 shadow-sm"
          style={{
            top: `${i * 12}px`,
            zIndex: order.indexOf(idx),
          }}
        >
          <span className="font-mono text-sm text-dark">{SHUFFLER_LABELS[idx]}</span>
        </motion.div>
      ))}
    </div>
  );
}

function TelemetryTypewriter() {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const msg = TYPEWRITER_MESSAGES[index];

  useEffect(() => {
    if (charIndex < msg.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 60);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setCharIndex(0);
      setIndex((i) => (i + 1) % TYPEWRITER_MESSAGES.length);
    }, 2000);
    return () => clearTimeout(t);
  }, [index, charIndex, msg]);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--dark)]/60">
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
        Live Feed
      </div>
      <p className="font-mono text-sm text-dark">
        {msg.slice(0, charIndex)}
        <span className="inline-block h-4 w-0.5 animate-pulse bg-accent align-middle" />
      </p>
    </div>
  );
}

function CursorProtocolScheduler() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [active, setActive] = useState(null);
  const [cursorStep, setCursorStep] = useState(0);

  useEffect(() => {
    const steps = [0, 1, 2, 3, 4, 5, 6, 7];
    let i = 0;
    const run = () => {
      setCursorStep(steps[i % steps.length]);
      if (steps[i % steps.length] < 7) {
        setActive(steps[i % steps.length]);
      } else {
        setActive(null);
      }
      i++;
    };
    run();
    const t = setInterval(run, 800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="space-y-3">
      <p className="font-mono text-xs text-[var(--dark)]/70">{SCHEDULER_LABEL}</p>
      <div className="flex gap-2">
        {days.map((d, i) => (
          <motion.button
            key={i}
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--dark)]/15 bg-[var(--background)] font-mono text-sm"
            animate={{
              scale: cursorStep === i ? 0.95 : 1,
              backgroundColor: active === i ? "var(--accent)" : "var(--background)",
              color: active === i ? "#ffffff" : "#111111",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {d}
          </motion.button>
        ))}
      </div>
      <motion.div
        className="mt-2 rounded-xl border border-[var(--dark)]/15 px-3 py-2 text-center font-mono text-xs"
        animate={{ opacity: cursorStep === 7 ? 1 : 0.6 }}
      >
        Save
      </motion.div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-[var(--background)] py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="noise-overlay" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            How we operate
          </h2>
          <p className="mt-3 text-base text-[var(--dark)]/70">
            Ops rescue, brand, and ship—in one system.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <Card className="p-6">
              <h3 className="font-heading text-lg font-bold text-dark">Run the system</h3>
              <p className="mt-2 text-sm text-[var(--dark)]/70">
                We take over ops so you can focus on growth.
              </p>
              <div className="mt-6">
                <DiagnosticShuffler />
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6">
              <h3 className="font-heading text-lg font-bold text-dark">Brand that converts</h3>
              <p className="mt-2 text-sm text-[var(--dark)]/70">
                Identity and messaging that stakeholders trust.
              </p>
              <div className="mt-6">
                <TelemetryTypewriter />
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card className="p-6">
              <h3 className="font-heading text-lg font-bold text-dark">Ship the product</h3>
              <p className="mt-2 text-sm text-[var(--dark)]/70">
                From playbook to live app, on schedule.
              </p>
              <div className="mt-6">
                <CursorProtocolScheduler />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
