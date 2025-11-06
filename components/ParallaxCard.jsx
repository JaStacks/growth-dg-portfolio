"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function ParallaxCard({ children, index = 0, offset = 50 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const reduceMotion = useReducedMotion();
  
  const y = reduceMotion 
    ? 0 
    : useTransform(scrollYProgress, [0, 1], [0, -offset - (index * 20)]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }}>
      {children}
    </motion.div>
  );
}

