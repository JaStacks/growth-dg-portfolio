"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Code2 } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "WebSockets"] },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "AWS", "Figma"] },
];

const contactMethods = [
  { icon: Mail, label: "Email", value: "contact@growthdg.com", href: "mailto:contact@growthdg.com", external: true },
  { icon: Github, label: "GitHub", value: "github.com/JaStacks", href: "https://github.com/JaStacks", external: true },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jareice-graham", href: "https://www.linkedin.com/in/jareice-graham-93226b224/", external: true },
];

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-background text-dark">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-dark py-24 text-primary">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <h1 className="font-heading mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Jareice Graham
          </h1>
          <p className="mb-6 text-xl font-semibold text-accent md:text-2xl">
            Founder & Full-Stack Developer
          </p>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-primary/85">
            I build scalable web apps and lead product from playbook to launch—focused on real-time systems,
            clear UX, and code that stays maintainable.
          </p>
        </motion.div>
      </section>

      {/* About */}
      <section className="relative w-full border-t border-dark/10 bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-3xl font-bold text-dark md:text-4xl">
                About
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-dark/75 md:text-lg">
                <p>
                  I’m a full-stack developer and founder focused on seamless user experiences and
                  robust, scalable applications. I work with modern web tech and aim to solve hard
                  problems with simple, maintainable solutions.
                </p>
                <p>
                  My work centers on real-time systems, interactive UIs, and full-stack delivery—from
                  playbook and brand to shipped product. As a founder, I care most about building
                  things that improve workflows and solve real problems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              <h3 className="font-heading text-xl font-bold text-dark md:text-2xl">
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-dark/10 bg-primary/30 px-3 py-1.5 text-sm text-dark"
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

      {/* Featured Work */}
      <section className="relative w-full border-t border-dark/10 bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-heading mb-3 text-3xl font-bold text-dark md:text-4xl">
              Featured Work
            </h2>
            <p className="mx-auto max-w-2xl text-base text-dark/70 md:text-lg">
              Selected projects—full-stack, real-time systems, and product delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl"
          >
            <Link
              href="/projects/shareheart"
              className="group block rounded-[2rem] border border-dark/10 bg-background p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-dark/10 bg-primary/30">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading mb-2 text-xl font-bold text-dark transition-colors group-hover:text-accent md:text-2xl">
                    ShareHeart.io
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-dark/70 md:text-base">
                    Full-stack video wall with live sync for hundreds of users. Event-driven architecture,
                    approval workflows, and AI-assisted collection. React, Next.js, Supabase.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "Supabase", "Realtime", "TypeScript"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-dark/10 bg-primary/30 px-2.5 py-1 text-xs font-medium text-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative w-full border-t border-dark/10 bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-heading mb-3 text-3xl font-bold text-dark md:text-4xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-2xl text-base text-dark/70 md:text-lg">
              Open to new projects, ideas, and collaboration.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const card = (
                <div className="flex items-center gap-4 rounded-[2rem] border border-dark/10 bg-background p-5 transition-colors hover:border-accent/20 hover:bg-primary/10">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/30">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-dark/60">
                      {method.label}
                    </p>
                    <p className="truncate text-base font-medium text-dark">
                      {method.value}
                    </p>
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  {method.external ? (
                    <a href={method.href} target="_blank" rel="noopener noreferrer" className="block">
                      {card}
                    </a>
                  ) : (
                    <Link href={method.href}>{card}</Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
