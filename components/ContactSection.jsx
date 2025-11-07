"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Github, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactSection() {
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
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@growthdg.com",
      href: "mailto:contact@growthdg.com",
      color: "text-purple-600 dark:text-purple-400",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/JaStacks",
      href: "https://github.com/JaStacks",
      color: "text-zinc-700 dark:text-zinc-300",
      external: true,
    },
    {
      icon: User,
      label: "Founder",
      value: "Learn more about our founder",
      href: "/jastacks",
      color: "text-purple-600 dark:text-purple-400",
      external: false,
    },
  ];

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative mx-auto w-full max-w-6xl px-6">
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
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            We're always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const Component = method.external ? motion.a : motion.div;
            const linkProps = method.external
              ? {
                  href: method.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Component
                key={method.label}
                {...linkProps}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
                transition={{ 
                  duration: prefersReducedMotion ? 0 : 0.5, 
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-sm hover:shadow-md"
              >
                {!method.external ? (
                  <Link href={method.href} className="block">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20 transition-colors ${method.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">
                          {method.label}
                        </h3>
                        <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/20 transition-colors ${method.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">
                        {method.label}
                      </h3>
                      <p className="text-lg font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </div>
                )}
              </Component>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          transition={{ 
            duration: prefersReducedMotion ? 0 : 0.8, 
            delay: prefersReducedMotion ? 0 : 0.4,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="text-center mt-12 sm:mt-14 md:mt-16"
        >
          <p className="text-zinc-600 dark:text-zinc-400">
            Prefer to send a message directly?{" "}
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.$crisp) {
                  window.$crisp.push(["do", "chat:open"]);
                } else {
                  // Fallback to email if Crisp isn't loaded yet
                  window.location.href = "mailto:contact@growthdg.com";
                }
              }}
              className="text-purple-600 dark:text-purple-400 hover:underline font-medium cursor-pointer"
            >
              Send us a chat
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

