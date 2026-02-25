"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/shareheart/HeroSection";
import VideoWallHero from "@/components/shareheart/VideoWallHero";

export default function ShareHeartCaseStudy() {
  return (
    <div className="min-h-screen bg-background text-dark">
      <main className="w-full font-sans text-dark">
        <HeroSection />

        {/* What we built */}
        <section className="relative border-b border-dark/10 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                <h2 className="font-heading text-3xl font-bold text-dark md:text-4xl">
                  What we built
                </h2>
                <p className="text-lg leading-relaxed text-dark/70">
                  A real-time video wall platform for communities to collect, curate, and display video testimonies. Sub-200ms synchronization keeps hundreds of concurrent viewers in sync while organizers run approval workflows and AI-assisted collection pages.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[2rem] border border-dark/10 bg-primary/10 p-6 shadow-lg"
              >
                <VideoWallHero />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="relative bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading mb-12 text-center text-2xl font-bold text-dark md:text-3xl"
            >
              Highlights
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "<200ms", label: "Latency" },
                { value: "100s", label: "Concurrent viewers" },
                { value: "99.9%", label: "Uptime" },
                { value: "Event-driven", label: "Architecture" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-[2rem] border border-dark/10 bg-background p-6 text-center shadow-sm"
                >
                  <div className="font-heading text-2xl font-bold text-accent md:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-dark/70">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-12 max-w-2xl space-y-3 text-dark/80"
            >
              {[
                "Real-time sync across viewers and devices",
                "Approval workflows and bulk actions",
                "AI-assisted collection page generation",
                "Built for scale and reliability",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-dark py-20 text-primary">
          <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading mb-4 text-3xl font-bold md:text-4xl"
            >
              Experience ShareHeart
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-lg text-primary/80"
            >
              See how it powers community storytelling in real-time.
            </motion.p>
            <motion.a
              href="https://shareheart.io"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="inline-block rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
            >
              Visit ShareHeart.io
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
}
