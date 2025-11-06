"use client";
import { motion } from "framer-motion";

export default function VideoWallHero({ testimonies = [] }) {
  const demoTestimonies = [
    { id: 1, name: "Sarah Chen", message: "This platform changed how we collect stories.", color: "bg-purple-500" },
    { id: 2, name: "Marcus Johnson", message: "Real-time updates make all the difference.", color: "bg-indigo-500" },
    { id: 3, name: "Emily Rodriguez", message: "Our community engagement has never been better.", color: "bg-pink-500" },
    { id: 4, name: "David Kim", message: "The display wall creates such impact at events.", color: "bg-blue-500" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {demoTestimonies.map((testimony, idx) => (
        <motion.div
          key={testimony.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
          className="relative aspect-video rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-900"
        >
          <div className={`w-full h-full ${testimony.color} flex items-center justify-center`}>
            <div className="text-white text-center p-3">
              <div className="text-xl mb-1">🎥</div>
              <div className="text-xs font-medium">{testimony.name}</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-xs line-clamp-2">{testimony.message}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

