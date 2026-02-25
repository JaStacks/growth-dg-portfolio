"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-cloud">
      <div
        className="pointer-events-none absolute inset-x-[-20%] -top-[40%] h-[480px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle at center, rgba(37, 99, 255, 0.22), transparent 65%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[6%] top-[18%] hidden h-64 w-64 rounded-full lg:block"
        style={{
          background: "radial-gradient(circle at center, rgba(142, 227, 212, 0.5), transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-[-18%] hidden h-72 w-72 rounded-full lg:block"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 90, 95, 0.24), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center gap-16 px-6 py-24 lg:grid lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.42em] text-brand-ink">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--brand-coral)" }} />
            Ops Heroes On Call
          </div>
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-ink shadow-sm ring-1 ring-black/5">
            <span>Ops</span>
            <span style={{ color: "var(--brand-blue)" }}>Brand</span>
            <span>Apps</span>
          </div>
          <h1 className="font-display text-4xl leading-[1.05] text-brand-ink sm:text-5xl md:text-6xl lg:text-7xl">
            We build the playbook, the brand, and the app—so you can launch yesterday.
          </h1>
          <p className="max-w-xl text-base leading-relaxed opacity-80 md:text-lg" style={{ color: "var(--brand-ink)" }}>
            No operations? No problem. We spin up systems that keep the chaos cute, wrap it in a brand people fall
            for, then ship the product your customers can&apos;t stop tapping.
          </p>
          <p className="max-w-xl text-sm uppercase tracking-[0.28em]" style={{ color: "var(--brand-ink)", opacity: 0.6 }}>
            P.s. yes, we will make you laugh while we do it.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://cal.com/jareice-graham-qay95z/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: "var(--brand-blue)",
                boxShadow: "0 18px 45px rgba(37, 99, 255, 0.25)",
              }}
            >
              Book the ops rescue
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold transition"
              style={{ color: "var(--brand-ink)" }}
            >
              Show me the receipts
              <span aria-hidden style={{ color: "var(--brand-blue)" }}>
                →
              </span>
            </a>
          </div>
          <div className="flex flex-wrap gap-10 pt-6">
            <div>
              <p className="font-display text-3xl text-brand-ink sm:text-4xl">12</p>
              <p className="text-sm uppercase tracking-[0.24em]" style={{ color: "var(--brand-ink)", opacity: 0.6 }}>
                Playbooks in production
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-brand-ink sm:text-4xl">08</p>
              <p className="text-sm uppercase tracking-[0.24em]" style={{ color: "var(--brand-ink)", opacity: 0.6 }}>
                Brands mid-glow-up
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-brand-blue sm:text-4xl">05</p>
              <p className="text-sm uppercase tracking-[0.24em]" style={{ color: "var(--brand-ink)", opacity: 0.6 }}>
                Apps shipping this quarter
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative flex items-center justify-center">
          <motion.div
            className="relative w-full max-w-[420px] rounded-[32px] bg-white/90 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.15)] backdrop-blur"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-sky px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-brand-ink">
                Creator Match
              </span>
              <span className="text-xs font-semibold" style={{ color: "var(--brand-blue)" }}>
                Live
              </span>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-3xl font-display text-2xl text-white shadow-lg"
                style={{
                  background: "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-dark))",
                  boxShadow: "0 12px 28px rgba(37, 99, 255, 0.35)",
                }}
              >
                JW
              </div>
              <div>
                <p className="font-display text-xl text-brand-ink">Jareice “Dos” Weir</p>
                <p className="text-sm font-medium" style={{ color: "var(--brand-blue)" }}>
                  Chief Chaos Converter
                </p>
                <p className="text-xs" style={{ color: "var(--brand-ink)", opacity: 0.6 }}>
                  (You bring ideas. We bring ops, brand, and the app.)
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between text-sm" style={{ color: "var(--brand-ink)", opacity: 0.7 }}>
                <span>Operation lift-off</span>
                <span className="font-semibold" style={{ color: "var(--brand-blue)" }}>
                  21 days
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-brand-cloud">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "92%",
                    background: "linear-gradient(90deg, var(--brand-mint), var(--brand-blue))",
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-sm" style={{ color: "var(--brand-ink)", opacity: 0.7 }}>
                <span>Ops built last quarter</span>
                <span className="font-semibold text-brand-ink">6 teams</span>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-brand-cloud p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.28em]" style={{ color: "var(--brand-ink)", opacity: 0.6 }}>
                  Brand Systems
                </p>
                <p className="mt-2 font-display text-2xl text-brand-ink">Launch-ready</p>
              </div>
              <div
                className="rounded-2xl p-4"
                style={{
                  border: "1px solid rgba(37, 99, 255, 0.3)",
                  background: "linear-gradient(135deg, rgba(37, 99, 255, 0.08), rgba(142, 227, 212, 0.1))",
                }}
              >
                <p className="text-[0.65rem] uppercase tracking-[0.28em]" style={{ color: "var(--brand-ink)", opacity: 0.6 }}>
                  Products
                </p>
                <p className="mt-2 font-display text-2xl text-brand-blue">Shipping</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -left-12 top-12 hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-ink shadow-lg ring-1 ring-black/5 lg:flex"
            initial={{ opacity: 0, y: -20, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
          >
            GrowthDG. • Est. 2012
          </motion.div>

          <motion.div
            className="absolute -bottom-12 right-0 hidden rounded-3xl bg-white px-5 py-4 text-sm text-brand-ink shadow-xl ring-1 ring-black/5 sm:flex"
            initial={{ opacity: 0, y: 20, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
          >
            <div>
              <p className="font-display text-lg text-brand-blue">Let&apos;s collab</p>
              <p className="text-xs" style={{ color: "var(--brand-ink)", opacity: 0.6 }}>
                Matching creators with their dream campaigns.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
