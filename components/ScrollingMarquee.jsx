"use client";
import { motion } from "framer-motion";

export default function ScrollingMarquee({ items, speed = 30 }) {
  const duplicatedItems = [...items, ...items, ...items];
  const itemWidth = 300;
  const gap = 24;
  const totalWidth = (itemWidth + gap) * items.length;
  
  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -totalWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex-shrink-0" style={{ width: `${itemWidth}px` }}>
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
