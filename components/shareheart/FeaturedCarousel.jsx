"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeaturedCarousel({ selectedIndex, onSelect }) {
  const items = [
    { id: 1, name: "Sarah Chen", message: "This platform changed how we collect stories.", color: "bg-purple-500" },
    { id: 2, name: "Marcus Johnson", message: "Real-time updates make all the difference.", color: "bg-indigo-500" },
    { id: 3, name: "Emily Rodriguez", message: "Our community engagement has never been better.", color: "bg-pink-500" },
  ];

  const [internalIndex, setInternalIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Use controlled index if provided, otherwise use internal state
  const currentIndex = selectedIndex !== undefined ? selectedIndex : internalIndex;

  useEffect(() => {
    if (selectedIndex !== undefined) {
      // If controlled, sync internal state
      setInternalIndex(selectedIndex);
      return;
    }
    // Auto-rotate only if not controlled
    if (isPaused) return;
    const interval = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, items.length, selectedIndex]);

  const handleSelect = (index) => {
    if (onSelect) {
      onSelect(index);
    } else {
      setInternalIndex(index);
    }
  };

  const currentItem = items[currentIndex];
  const gradientClasses = {
    'bg-purple-500': 'from-purple-600 to-purple-400',
    'bg-indigo-500': 'from-indigo-600 to-indigo-400',
    'bg-pink-500': 'from-pink-600 to-pink-400'
  };

  return (
    <div
      className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[currentItem.color]} flex items-center justify-center`}
        >
          <motion.div 
            className="text-white text-center p-6 md:p-8"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <div className="text-4xl md:text-5xl mb-4 md:mb-5">🎥</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{currentItem.name}</h3>
            <p className="text-sm md:text-base text-white/95 max-w-sm mx-auto leading-relaxed">{currentItem.message}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'w-8 bg-white shadow-md' 
                : 'w-1.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to story ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

