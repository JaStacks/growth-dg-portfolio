"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const magneticTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.25,
};

export default function Button({
  href,
  children,
  variant = "accent",
  className = "",
  asChild = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center overflow-hidden rounded-[2rem] px-6 py-3 text-sm font-semibold transition-[transform,color] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    accent:
      "text-white border-0 hover:scale-[1.03] focus-visible:outline-accent",
    secondary:
      "bg-[var(--background)] text-dark border border-[var(--dark)]/20 hover:border-accent hover:text-accent hover:scale-[1.03] hover:-translate-y-px focus-visible:outline-primary",
  };
  const combined = `${base} ${variants[variant] || variants.accent} ${className}`;

  const inner = <span className="relative z-10">{children}</span>;

  if (asChild && href) {
    return (
      <Link href={href} className={`group relative ${combined}`} {...props}>
        {variant === "accent" && (
          <span className="absolute inset-0 bg-[var(--accent)] opacity-100" aria-hidden />
        )}
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`group relative ${combined}`}
        style={
          variant === "accent"
            ? { backgroundColor: "var(--accent)", boxShadow: "0 14px 34px rgba(230, 59, 46, 0.25)" }
            : undefined
        }
        {...props}
      >
        {variant === "accent" && (
          <span className="absolute inset-0 bg-[var(--accent)] opacity-100" aria-hidden />
        )}
        {inner}
      </Link>
    );
  }

  return (
    <motion.button
      type="button"
      className={`group relative ${combined}`}
      style={
        variant === "accent"
          ? { backgroundColor: "var(--accent)", boxShadow: "0 14px 34px rgba(230, 59, 46, 0.25)" }
          : undefined
      }
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={magneticTransition}
      {...props}
    >
      {variant === "accent" && (
        <span className="absolute inset-0 bg-[var(--accent)] opacity-100" aria-hidden />
      )}
      {inner}
    </motion.button>
  );
}
