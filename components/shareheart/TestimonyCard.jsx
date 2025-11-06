"use client";
import { motion } from "framer-motion";

export default function TestimonyCard({ testimony, isFeatured = false }) {
  const demoTestimony = testimony || {
    id: 1,
    name: "Sarah Chen",
    message: "This platform changed how we collect stories from our community.",
    videoUrl: null,
    color: "bg-purple-500"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`relative aspect-video rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-900 ${
        isFeatured ? 'ring-2 ring-purple-500' : ''
      }`}
    >
      <div className={`w-full h-full ${demoTestimony.color} flex items-center justify-center`}>
        <div className="text-white text-center p-4">
          <div className="text-3xl mb-2">🎥</div>
          {isFeatured && (
            <div className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full mb-2 inline-block">
              Featured
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
        <h3 className="text-white font-semibold text-sm mb-1">{demoTestimony.name}</h3>
        <p className="text-white/90 text-xs line-clamp-2">{demoTestimony.message}</p>
      </div>
    </motion.div>
  );
}

