"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ShareHeart.io",
    description:
      "Full‑stack video wall app with live updates for hundreds of users. Event‑driven syncing and automated workflows keep content real‑time and reliable. Built with React, Next.js, and Supabase for seamless real-time collaboration.",
    tags: ["React", "Next.js", "Node.js", "Supabase", "Realtime", "TypeScript"],
    href: "/projects/shareheart",
  },
];

export default function ProjectsSection() {
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

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-zinc-50 dark:bg-black">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          transition={{ 
            duration: prefersReducedMotion ? 0 : 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3 md:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A selection of projects we've built, showcasing our expertise in full-stack development, 
            real-time systems, and user experience design.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 0.6, 
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


