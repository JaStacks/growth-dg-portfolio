"use client";
import { motion } from "framer-motion";

interface Testimony {
  id: string;
  name: string;
  created_at?: string;
  featured?: boolean;
}

interface TestimonyCardProps {
  testimony?: Testimony;
  videoUrl?: string;
  index?: number;
}

export default function TestimonyCard({ testimony, videoUrl, index = 0 }: TestimonyCardProps) {
  const demoTestimony = {
    id: testimony?.id || '1',
    name: testimony?.name || 'Demo User',
    created_at: testimony?.created_at,
    featured: testimony?.featured ?? false
  };

  const formattedDate = demoTestimony.created_at 
    ? new Date(demoTestimony.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    : 'Recently';

  const colors = ['bg-purple-500', 'bg-indigo-500', 'bg-pink-500', 'bg-blue-500'];
  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={`relative aspect-video rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-900 ${
        demoTestimony.featured ? 'ring-2 ring-purple-500' : ''
      }`}
    >
      <div className={`w-full h-full ${color} flex items-center justify-center`}>
        {videoUrl ? (
          <div className="w-full h-full bg-black">
            {/* Video would render here */}
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-3xl">🎥</div>
            </div>
          </div>
        ) : (
          <div className="text-white text-center p-4">
            <div className="text-3xl mb-2">🎥</div>
            {demoTestimony.featured && (
              <div className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full mb-2 inline-block">
                Featured
              </div>
            )}
          </div>
        )}

        {/* Featured Badge */}
        {demoTestimony.featured && (
          <div className="absolute top-2 right-2 z-10">
            <div className="px-2 py-1 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center gap-1">
              ⭐
            </div>
          </div>
        )}

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-300/30">
              <span className="text-xs font-bold text-white">
                {demoTestimony.name[0]?.toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-xs truncate">{demoTestimony.name}</p>
              <p className="text-white/70 text-[10px]">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

