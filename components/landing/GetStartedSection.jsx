"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function GetStartedSection() {
  return (
    <section id="contact" className="relative w-full bg-[var(--background)] py-24 md:py-32">
      <div className="noise-overlay" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl"
        >
          Ready to ship?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base text-[var(--dark)]/70"
        >
          Book the ops rescue. We build the playbook, the brand, and the app.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Button href="https://cal.com/jareice-graham-qay95z/30min" variant="accent" target="_blank" rel="noopener noreferrer">
            Book the ops rescue
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
