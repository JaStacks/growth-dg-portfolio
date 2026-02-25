"use client";

import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  as = "div",
  animate = false,
  ...props
}) {
  const classes = `rounded-[2rem] border border-[var(--dark)]/10 bg-[var(--background)] shadow-[0_8px_32px_rgba(17,17,17,0.08)] ${className}`;

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={classes}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  const Component = as;
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
