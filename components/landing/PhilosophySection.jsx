"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TEXTURE_IMAGE =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=60";

const sentence = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const word = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function PhilosophySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-[80vh] overflow-hidden bg-dark py-24 md:py-32">
      <div className="noise-overlay" aria-hidden />
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <Image
          src={TEXTURE_IMAGE}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">
        <motion.p
          variants={sentence}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-base text-[var(--background)]/80 sm:text-lg"
        >
          Most agencies focus on: deliverables and timelines.
        </motion.p>
        <motion.div
          variants={sentence}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8"
        >
          <p className="font-drama text-3xl text-[var(--background)] sm:text-4xl md:text-5xl lg:text-6xl">
            We focus on:{" "}
            <motion.span variants={word} className="text-accent">
              the playbook
            </motion.span>
            ,{" "}
            <motion.span variants={word} className="text-accent">
              the brand
            </motion.span>
            , and{" "}
            <motion.span variants={word} className="text-accent">
              the system
            </motion.span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
