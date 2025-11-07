"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function AboutSection() {
  const ref = useRef(null);
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

  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: isMobile ? ["start 0.9", "end 0.1"] : ["start end", "end start"],
    layoutEffect: false
  });

  // Reduced movement on mobile and for reduced motion preference
  const movementMultiplier = prefersReducedMotion ? 0 : (isMobile ? 0.6 : 1);
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", `${-20 * movementMultiplier}%`]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", `${20 * movementMultiplier}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "WebSockets"] },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "AWS", "Figma"] },
  ];

  return (
    <section ref={ref} className="relative w-full min-h-[100vh] overflow-hidden bg-white dark:bg-black py-16 sm:py-20 md:py-24 lg:py-32">
      <motion.div 
        style={{ 
          y: bgY,
          willChange: prefersReducedMotion ? "auto" : "transform"
        }} 
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <div className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-purple-500 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-indigo-500 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto flex h-full w-full max-w-6xl items-center px-6">
        <div className="w-full grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <motion.div 
            style={{ 
              y: fgY, 
              opacity,
              willChange: prefersReducedMotion ? "auto" : "transform"
            }} 
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
              About
            </h2>
            <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                We specialize in creating seamless user experiences and building robust, 
                scalable applications. Our expertise lies in modern web technologies and 
                solving complex problems with elegant solutions.
              </p>
              <p>
                Our work focuses on real-time systems, interactive interfaces, and full-stack 
                development. We believe in writing clean, maintainable code and creating 
                applications that users love to interact with.
              </p>
            </div>
          </motion.div>

          <motion.div 
            style={{ 
              y: fgY, 
              opacity: opacity,
              willChange: prefersReducedMotion ? "auto" : "transform"
            }} 
            className="space-y-6 sm:space-y-7 md:space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              Skills & Technologies
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
                  transition={{ 
                    duration: prefersReducedMotion ? 0 : 0.5, 
                    delay: prefersReducedMotion ? 0 : index * 0.1,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wider">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


