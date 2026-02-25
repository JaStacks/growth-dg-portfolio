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
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/JaStacks",
      href: "https://github.com/JaStacks",
      external: true,
    },
    {
      icon: User,
      label: "Founder",
      value: "Learn more about our founder",
      href: "/jastacks",
      external: false,
    },
  ];

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[var(--background)] py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center sm:mb-14 md:mb-16"
        >
          <h2 className="font-heading mb-4 text-4xl font-bold text-dark md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--dark)]/70">
            We're always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:gap-8 md:grid-cols-2">
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
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="group rounded-[2rem] border border-[var(--dark)]/10 bg-[var(--background)] p-5 shadow-sm transition-all hover:border-accent/30 hover:shadow-md sm:p-6"
                style={{ borderColor: "rgba(17,17,17,0.1)" }}
              >
                {!method.external ? (
                  <Link href={method.href} className="block">
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-[var(--primary)]/50 p-3 transition-colors group-hover:bg-accent/20" style={{ backgroundColor: "rgba(232,228,221,0.5)" }}>
                        <Icon className="h-6 w-6 text-accent" style={{ color: "var(--accent)" }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[var(--dark)]/60">
                          {method.label}
                        </h3>
                        <p className="text-lg font-medium text-dark transition-colors group-hover:text-accent">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-[var(--primary)]/50 p-3 transition-colors group-hover:bg-accent/20" style={{ backgroundColor: "rgba(232,228,221,0.5)" }}>
                      <Icon className="h-6 w-6 text-accent" style={{ color: "var(--accent)" }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[var(--dark)]/60">
                        {method.label}
                      </h3>
                      <p className="text-lg font-medium text-dark transition-colors group-hover:text-accent">
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 text-center sm:mt-14 md:mt-16"
        >
          <p className="text-[var(--dark)]/70">
            Prefer to send a message directly?{" "}
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.$crisp) {
                  window.$crisp.push(["do", "chat:open"]);
                } else {
                  window.location.href = "mailto:contact@growthdg.com";
                }
              }}
              className="cursor-pointer font-medium text-accent hover:underline"
              style={{ color: "var(--accent)" }}
            >
              Send us a chat
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

