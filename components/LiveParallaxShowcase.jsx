"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LiveParallaxShowcase() {
  const { scrollYProgress } = useScroll();
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbX = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 px-6 py-10">
      {/* Parallax Orbs */}
      <motion.div style={{ y: orbY, x: orbX }} className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <motion.div style={{ y: orbY }} className="pointer-events-none absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Live design: Guided story capture</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            This is a simplified live version of the ShareHeart capture hero & bottom sheet. The elements move subtly with scroll for depth.
          </p>
        </div>

        {/* Demo Card */}
        <motion.div style={{ y: cardY }} className="mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 p-4 shadow-sm">
            {/* Video placeholder */}
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,.1),transparent_50%)]" />
              {/* Corner control mock */}
              <div className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">⏸</div>
            </div>

            {/* Bottom sheet mock */}
            <div className="-mt-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 p-4 shadow-lg">
              <p className="text-xs font-medium text-zinc-500 uppercase">Question</p>
              <h4 className="mt-1 text-lg font-semibold">How has God been at work in your life?</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Consider a specific moment or season and share how it impacted you.</p>
              <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white">Share Your Story</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


