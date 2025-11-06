"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Zap, Layers } from "lucide-react";

export default function ProjectCard({ title, description, tags = [], href = "#", imageSrc }) {
  const isInternal = href.startsWith("/");

  const Inner = (
    <>
      {!imageSrc && (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 border border-purple-200/50 dark:border-purple-800/50 flex items-center justify-center group-hover:border-purple-300 dark:group-hover:border-purple-700 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-purple-500/5 dark:from-purple-400/5 dark:via-indigo-400/5 dark:to-purple-400/5" />
          <div className="relative flex items-center gap-4">
            <div className="p-4 rounded-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50 group-hover:scale-110 transition-transform">
              <Code2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="p-4 rounded-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-800/50 group-hover:scale-110 transition-transform delay-75">
              <Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="p-4 rounded-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50 group-hover:scale-110 transition-transform delay-150">
              <Layers className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>
      )}
      <div className={`space-y-3 ${imageSrc ? 'mt-6' : 'mt-4'}`}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
        </div>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {isInternal ? (
        <Link href={href} className="block focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl">
          {Inner}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {Inner}
        </a>
      )}
    </motion.div>
  );
}


