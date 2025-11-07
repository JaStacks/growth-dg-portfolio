"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Check, AlertTriangle } from "lucide-react";
import FloatingActionsStack from "./FloatingActionsStack";

const MOCK_SUBMISSIONS = [
  { id: '1', name: "Sarah Chen", approved: true, featured: false, color: "from-purple-500 to-indigo-500" },
  { id: '2', name: "Marcus Johnson", approved: true, featured: true, color: "from-indigo-500 to-pink-500" },
  { id: '3', name: "Emily Rodriguez", approved: true, featured: false, color: "from-pink-500 to-purple-500" },
  { id: '4', name: "David Kim", approved: true, featured: true, color: "from-blue-500 to-cyan-500" },
  { id: '5', name: "Jessica Wang", approved: true, featured: false, color: "from-purple-500 to-pink-500" },
  { id: '6', name: "Alex Thompson", approved: true, featured: false, color: "from-indigo-500 to-purple-500" },
];

export default function SubmissionsTabDemo() {
  const [selectedIds, setSelectedIds] = useState(new Set());
  const containerRef = useRef(null);

  // Scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Cards fade in and move up
  const cardsY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.7, 0.8, 1], [0, 0.5, 1, 1, 0.8, 0]);

  // Floating actions scroll into place from right
  const actionsX = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [100, 50, 0, 0, -100]);
  const actionsY = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [120, 60, 0, -60, -140]);
  const actionsOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0.5, 1, 1, 0]);
  const actionsScale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.8, 0.9, 1, 1, 0.9]);
  const guideY = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.7, 1], [40, 0, 0, -40, -100]);
  const guideOpacity = useTransform(scrollYProgress, [0, 0.15, 0.4, 0.65, 1], [0, 0.8, 1, 0.9, 0]);

  const toggleSelect = (id) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleApprove = () => {
    console.log("Approve", Array.from(selectedIds));
  };

  const handleFeature = () => {
    console.log("Feature", Array.from(selectedIds));
  };

  const handleDownload = () => {
    console.log("Download", Array.from(selectedIds));
  };

  return (
    <div ref={containerRef} className="w-full relative min-h-[150vh] py-32">
      <motion.div
        style={{ y: guideY, opacity: guideOpacity }}
        className="sticky top-8 max-w-md mx-auto mb-12"
      >
        <div className="rounded-2xl border-2 border-white/60 dark:border-zinc-800/60 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-lg p-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex items-center justify-center shadow-lg">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                How the Submissions tab works
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs text-purple-700 dark:text-purple-200">
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-100/70 dark:bg-purple-500/10 px-2 py-0.5">
                  <span className="font-bold">1</span> Select stories
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-100/70 dark:bg-purple-500/10 px-2 py-0.5">
                  <span className="font-bold">2</span> Use floating actions
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-100/70 dark:bg-purple-500/10 px-2 py-0.5">
                  <span className="font-bold">3</span> Feature favourites
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Approved stories appear on your wall, and Featured ones get highlighted for your team.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2 Columns of 9:16 Testimony Cards */}
      <motion.div
        style={{ y: cardsY, opacity: cardsOpacity }}
        className="grid grid-cols-2 gap-4 sticky top-24"
      >
        {MOCK_SUBMISSIONS.map((submission, index) => (
          <motion.div
            key={submission.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative"
          >
            <div
              onClick={() => toggleSelect(submission.id)}
              className={`relative aspect-[9/16] rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                selectedIds.has(submission.id)
                  ? 'border-purple-400 shadow-2xl shadow-purple-400/50 ring-2 ring-purple-400'
                  : 'border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Video thumbnail area with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${submission.color}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-5xl font-bold">
                    {submission.name[0]}
                  </div>
                </div>
                <div className={`absolute inset-0 transition-colors ${
                  selectedIds.has(submission.id) ? 'bg-purple-500/20' : 'bg-black/10 group-hover:bg-black/5'
                }`} />
                
                {/* Selection indicator */}
                <div className={`absolute top-3 left-3 z-10 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  selectedIds.has(submission.id)
                    ? 'bg-purple-600 text-white shadow-lg scale-110'
                    : 'bg-white/20 backdrop-blur-sm border-2 border-white/30'
                }`}>
                  {selectedIds.has(submission.id) && <Check className="w-4 h-4" />}
                </div>
                
                {/* Featured badge */}
                {submission.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="px-2.5 py-1 rounded-full bg-purple-600/90 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  </div>
                )}
              </div>

              {/* Name overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                <h3 className="text-white font-bold text-sm mb-1 truncate">
                  {submission.name}
                </h3>
                {submission.approved && (
                  <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-green-500/80 backdrop-blur-sm text-white text-xs font-semibold">
                    Approved
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Vertical floating action buttons - scroll into place */}
      <FloatingActionsStack
        selectedCount={selectedIds.size}
        onApprove={handleApprove}
        onFeature={handleFeature}
        onDownload={handleDownload}
        onClear={() => setSelectedIds(new Set())}
        style={{
          x: actionsX,
          y: actionsY,
          opacity: actionsOpacity,
          scale: actionsScale,
        }}
      />
    </div>
  );
}

