"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BottomSheet({
  sheetType = "campaign",
  instructions = [],
  campaign,
  onContinue = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  const displayInstructions =
    sheetType === "instructions" && instructions.length === 0
      ? [
          "Share your story with honesty and heart.",
          "Keep it concise—focus on the moment.",
          "Highlight key lessons or breakthroughs.",
          "Be respectful and encouraging.",
          "When ready, tap continue to submit.",
        ]
      : instructions;

  const getDynamicFontSize = (text: string, type: "question" | "response") => {
    const wordCount = text.trim().split(/\s+/).length;
    if (type === "question") {
      if (wordCount <= 10) return "text-2xl md:text-3xl";
      if (wordCount <= 20) return "text-xl md:text-2xl";
      return "text-lg md:text-xl";
    } else {
      if (wordCount <= 15) return "text-base md:text-lg";
      if (wordCount <= 30) return "text-sm md:text-base";
      return "text-xs md:text-sm";
    }
  };

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    if (info.offset.y > threshold) {
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-lg"
      >
        Open Bottom Sheet
      </button>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
          <motion.div
            ref={sheetRef}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
            className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 rounded-t-2xl shadow-2xl z-50 max-h-[85vh] flex flex-col border-t border-zinc-200 dark:border-zinc-800"
          >
            {/* Grab handle */}
            <div className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
            </div>

            {/* Header */}
            <div className="px-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <h2
                className={`font-bold text-zinc-900 dark:text-zinc-100 text-center ${
                  sheetType === "campaign" && campaign?.question
                    ? getDynamicFontSize(campaign.question, "question")
                    : "text-xl md:text-2xl"
                }`}
              >
                {sheetType === "campaign" ? campaign?.question || "What's your story?" : "Recording Instructions"}
              </h2>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {sheetType === "campaign" && campaign?.question_response && (
                <div className="mb-6 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide mb-2">
                    How you might answer
                  </p>
                  <p
                    className={`text-zinc-900 dark:text-zinc-100 leading-relaxed ${getDynamicFontSize(
                      campaign.question_response,
                      "response"
                    )}`}
                  >
                    {campaign.question_response}
                  </p>
                </div>
              )}

              {sheetType === "instructions" && (
                <div className="space-y-3">
                  {displayInstructions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700"
                    >
                      <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-purple-600 dark:text-purple-400">{idx + 1}</span>
                      </div>
                      <p className="text-zinc-900 dark:text-zinc-100 font-medium flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
              <button
                onClick={() => {
                  onContinue();
                  setIsOpen(false);
                }}
                className="w-full py-3.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 active:bg-purple-800 transition-colors shadow-lg"
              >
                {sheetType === "campaign" ? campaign?.cta_button_text || "Continue" : "Start Recording"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
