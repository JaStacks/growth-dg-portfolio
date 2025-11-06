"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();

  const yLeft = useTransform(scrollY, [0, 500], [0, -120]);
  const rLeft = useTransform(scrollY, [0, 500], [0, 18]);

  const yRight = useTransform(scrollY, [0, 500], [0, 90]);
  const rRight = useTransform(scrollY, [0, 500], [0, -14]);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white flex items-center justify-center">
      <motion.div style={{ y: yLeft, rotate: rLeft }} className="absolute left-[10%] top-[30%] opacity-20">
        <Image src="/globe.svg" alt="Decoration left" width={96} height={96} />
      </motion.div>

      <motion.div style={{ y: yRight, rotate: rRight }} className="absolute right-[12%] top-[40%] opacity-20">
        <Image src="/window.svg" alt="Decoration right" width={96} height={96} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
            Building Digital Experiences
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">
            Modern Web Applications
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
        >
          Creating scalable web applications with modern technologies. 
          Specializing in real-time systems, user experience design, and full-stack development.
        </motion.p>
      </motion.div>
    </section>
  );
}


