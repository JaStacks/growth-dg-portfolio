"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@growthdg.com",
      href: "mailto:contact@growthdg.com",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/JaStacks",
      href: "https://github.com/JaStacks",
      color: "text-zinc-700 dark:text-zinc-300",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/company",
      href: "https://linkedin.com/company",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@company",
      href: "https://twitter.com/company",
      color: "text-sky-500 dark:text-sky-400",
    },
  ];

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950 py-24 md:py-32">
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            We're always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-sm hover:shadow-md"
              >
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
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-600 dark:text-zinc-400">
            Prefer to send a message directly?{" "}
            <a
              href="mailto:contact@growthdg.com"
              className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
            >
              Send us an email
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

