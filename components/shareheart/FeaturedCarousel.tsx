"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoItem {
  id: string;
  url?: string;
}

interface Testimony {
  id: string;
  name: string;
  created_at?: string;
}

interface FeaturedCarouselProps {
  videos?: VideoItem[];
  testimonies?: Testimony[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
}

export default function FeaturedCarousel({
  videos = [],
  testimonies = [],
  selectedIndex: controlledIndex,
  onSelect,
}: FeaturedCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const demoVideos = videos.length > 0 ? videos : [
    { id: '1', url: '' },
    { id: '2', url: '' },
    { id: '3', url: '' },
  ];

  const demoTestimonies = testimonies.length > 0 ? testimonies : [
    { id: '1', name: 'Sarah Chen', created_at: new Date().toISOString() },
    { id: '2', name: 'Marcus Johnson', created_at: new Date().toISOString() },
    { id: '3', name: 'Emily Rodriguez', created_at: new Date().toISOString() },
  ];

  const currentIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;
  const currentTestimony = demoTestimonies.find(t => t.id === demoVideos[currentIndex]?.id) || demoTestimonies[currentIndex];

  // Sync internal index when controlled index changes
  useEffect(() => {
    if (controlledIndex !== undefined) {
      setInternalIndex(controlledIndex);
    }
  }, [controlledIndex]);

  useEffect(() => {
    if (controlledIndex !== undefined || isPaused) return;
    const interval = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % demoVideos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [controlledIndex, isPaused, demoVideos.length]);

  const handleSelect = (index: number) => {
    if (onSelect) {
      onSelect(index);
    } else {
      setInternalIndex(index);
    }
  };

  if (demoVideos.length === 0) return null;

  const colors = ['bg-purple-500', 'bg-indigo-500', 'bg-pink-500'];

  return (
    <section className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-xl font-black uppercase tracking-wide text-zinc-900 dark:text-zinc-100 mb-2">
          ✨ Featured Stories
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Highlighting the most inspiring testimonies
        </p>
      </div>

      <div 
        className="w-full relative aspect-video rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-900"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${colors[currentIndex % colors.length]} flex items-center justify-center`}
          >
            <div className="text-white text-center p-8">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold mb-2">{currentTestimony?.name}</h3>
              <p className="text-lg">Featured testimony story</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {demoVideos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Metadata Card */}
      {currentTestimony && (
        <div className="mt-6 max-w-2xl mx-auto">
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center border-2 border-purple-200 dark:border-purple-800">
                <span className="text-xl font-black text-purple-600 dark:text-purple-400">
                  {currentTestimony.name[0]?.toUpperCase()}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {currentTestimony.name}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {currentTestimony.created_at ? new Date(currentTestimony.created_at).toLocaleDateString() : 'Recently'}
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-purple-600 text-white text-xs font-bold">
                ⭐ Featured
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

