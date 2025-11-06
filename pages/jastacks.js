import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Code2, Zap, Layers } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function FounderPage() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "WebSockets"] },
    { category: "Tools", items: ["Git", "Docker", "Vercel", "AWS", "Figma"] },
  ];

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
      value: "linkedin.com/in/jareice",
      href: "https://linkedin.com/in/jareice",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@jareice",
      href: "https://twitter.com/jareice",
      color: "text-sky-500 dark:text-sky-400",
    },
  ];

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen bg-zinc-50 dark:bg-black`}>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white flex items-center justify-center">
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
              Jareice Graham
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">
              Founder & Full-Stack Developer
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable web applications and leading innovative projects. 
            Passionate about creating seamless user experiences and solving complex problems with elegant solutions.
          </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative w-full min-h-[80vh] overflow-hidden bg-white dark:bg-black py-24 md:py-32">
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
                About
              </h2>
              <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  I'm a full-stack developer and founder passionate about creating seamless user experiences 
                  and building robust, scalable applications. I specialize in modern web technologies 
                  and enjoy solving complex problems with elegant solutions.
                </p>
                <p>
                  My work focuses on real-time systems, interactive interfaces, and full-stack 
                  development. I believe in writing clean, maintainable code and creating 
                  applications that users love to interact with.
                </p>
                <p>
                  As a founder, I'm dedicated to building products that make a difference, 
                  whether it's improving workflows, enhancing user experiences, or solving 
                  real-world problems through technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* Projects Highlight */}
      <section className="relative w-full min-h-[60vh] overflow-hidden bg-zinc-50 dark:bg-black py-24 md:py-32">
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A selection of projects I've built and led, showcasing expertise in full-stack development, 
              real-time systems, and user experience design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <a
              href="/projects/shareheart"
              className="group block rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 border border-purple-200/50 dark:border-purple-800/50">
                      <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      ShareHeart.io
                    </h3>
                  </div>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    Full‑stack video wall app with live updates for hundreds of users. Event‑driven syncing 
                    and automated workflows keep content real‑time and reliable. Built with React, Next.js, 
                    and Supabase for seamless real-time collaboration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "Supabase", "Realtime", "TypeScript"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full min-h-[60vh] overflow-hidden bg-white dark:bg-black py-24 md:py-32">
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
              Always open to discussing new projects, creative ideas, or opportunities to collaborate.
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
        </div>
      </section>
    </div>
  );
}

