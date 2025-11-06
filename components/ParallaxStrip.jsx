"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function ParallaxStrip({ items, baseOffset = 28, step = 6, reverse = false }) {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => {
        const signed = (reverse ? 1 : -1) * (baseOffset + index * step);
        const y = reduceMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, signed]);
        return (
          <motion.div key={index} style={{ y }}>
            {item.node}
          </motion.div>
        );
      })}
    </div>
  );
}


