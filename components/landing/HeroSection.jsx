"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative flex h-[100dvh] w-full flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-[var(--dark)]/70 to-transparent"
          aria-hidden
        />
      </div>
      <div className="noise-overlay" aria-hidden />

      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 pt-24 sm:px-8 md:pb-24 md:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto w-full max-w-6xl"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--background)]/80 sm:text-sm"
          >
            Ops • Brand • Apps
          </motion.p>
          <motion.h1 variants={item} className="mt-4 flex flex-col gap-2">
            <span className="font-heading text-3xl font-bold tracking-tight text-[var(--background)] sm:text-4xl md:text-5xl lg:text-6xl">
              Build the
            </span>
            <span className="font-drama text-5xl text-accent sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              playbook.
            </span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--background)]/90 sm:text-lg"
          >
            We build the playbook, the brand, and the app—so you can launch yesterday.
          </motion.p>
          <motion.div variants={item} className="mt-8">
            <Button href="https://cal.com/jareice-graham-qay95z/30min" variant="accent" target="_blank" rel="noopener noreferrer">
              Book the ops rescue
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
