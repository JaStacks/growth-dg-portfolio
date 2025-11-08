"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function VideoCarousel({
  videos = [],
  activeIndex,
  onActiveIndexChange,
  autoPlay = false,
  autoPlayDelay = 6000,
}) {
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = typeof activeIndex === "number" && !Number.isNaN(activeIndex);
  const itemCount = videos.length;
  const currentIndex = isControlled ? activeIndex : internalIndex;

  // Sync internal index when component is controlled from outside
  useEffect(() => {
    if (isControlled) {
      setInternalIndex(activeIndex);
    }
  }, [activeIndex, isControlled]);

  const goTo = (index) => {
    if (itemCount === 0) return;
    const normalized = ((index % itemCount) + itemCount) % itemCount;
    if (isControlled) {
      onActiveIndexChange?.(normalized);
    } else {
      setInternalIndex(normalized);
    }
  };

  useEffect(() => {
    if (!autoPlay || itemCount < 2) return;
    const timeout = setTimeout(() => {
      goTo(currentIndex + 1);
    }, autoPlayDelay);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, autoPlayDelay, currentIndex, itemCount]);

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  const currentVideo = useMemo(() => {
    if (itemCount === 0) return null;
    return videos[currentIndex] ?? videos[0];
  }, [videos, currentIndex, itemCount]);

  if (!currentVideo) return null;
  const initialLetter = (currentVideo?.testimonyName || currentVideo?.title || "Story").charAt(0).toUpperCase();

  const renderVideoVisual = (videoKey) => (
    <motion.div
      key={videoKey}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950/80 shadow-[0_25px_70px_-35px_rgba(79,70,229,0.55)]"
    >
      {currentVideo?.gradient && (
        <div className={`absolute inset-0 ${currentVideo.gradient} opacity-80`} />
      )}
      {currentVideo?.thumbnail ? (
        <Image
          src={currentVideo.thumbnail}
          alt={`${currentVideo?.testimonyName || currentVideo?.title || "Featured story"} thumbnail`}
          fill
          priority
          sizes="(max-width: 768px) 320px, 420px"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-black text-white/70">{initialLetter}</span>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 pointer-events-none">
        <div className="flex items-start gap-2">
          <div className="flex flex-col gap-2">
            {currentVideo?.isDefault && (
              <span className="inline-flex items-center gap-1 rounded-md bg-white/85 text-purple-700 text-[11px] font-semibold px-2 py-1 shadow-sm">
                <Star className="h-3 w-3 fill-purple-500 text-purple-500" />
                Default
              </span>
            )}
            {currentVideo?.aspectLabel && (
              <span className="inline-flex items-center rounded-md border border-white/40 bg-white/15 text-white text-[11px] font-medium px-2 py-1 tracking-wide">
                {currentVideo.aspectLabel}
              </span>
            )}
          </div>

          {currentVideo?.featured && (
            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-white/20 text-white text-[11px] font-semibold px-3 py-1 border border-white/30">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </span>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/25 border border-white/30 flex items-center justify-center text-white font-semibold">
              {initialLetter}
            </div>
            <div className="min-w-0">
              <p className="text-white font-bold text-sm sm:text-base truncate">
                {currentVideo?.testimonyName || currentVideo?.title || "Featured Story"}
              </p>
              {currentVideo?.tagline && (
                <p className="text-white/75 text-xs sm:text-sm truncate">
                  {currentVideo.tagline}
                </p>
              )}
            </div>
          </div>

          {currentVideo?.date && (
            <p className="text-white/60 text-[11px] uppercase tracking-[0.2em]">
              {new Date(currentVideo.date).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );


  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          {renderVideoVisual(currentVideo?.id ?? currentIndex)}
        </AnimatePresence>
      </div>

      {itemCount > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white text-zinc-900 shadow-lg border border-zinc-200 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 hover:scale-105 transition-transform duration-300 ease-out"
            aria-label="Previous story"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white text-zinc-900 shadow-lg border border-zinc-200 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 hover:scale-105 transition-transform duration-300 ease-out"
            aria-label="Next story"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div className="flex justify-center gap-2 mt-5">
        {videos.map((video, idx) => (
          <button
            key={video?.id ?? `dot-${idx}`}
            type="button"
            onClick={() => goTo(idx)}
            className={`transition-all duration-300 rounded-full h-2 sm:h-2.5 ${
              idx === currentIndex
                ? "w-10 bg-purple-600 dark:bg-purple-400"
                : "w-2.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-purple-500/70"
            }`}
            aria-label={`Go to story ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


