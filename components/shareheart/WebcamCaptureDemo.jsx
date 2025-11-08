"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../_utils/cn";

const SCRIPT_LINES = [
  "Hi there! Thanks for taking a moment to record a quick story.",
  "Start with your name and how you're connected to the campaign.",
  "Share the moment or experience that stood out the most to you.",
  "Wrap up with a message you'd love others to hear."
];

export default function WebcamCaptureDemo(props = {}) {
  const { className = "" } = props;
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [scriptCollapsed, setScriptCollapsed] = useState(true);

  // Mock timer for demo
  useEffect(() => {
    if (isRecording) {
      const interval = setInterval(() => {
        setTimeLeft(prev => Math.max(0, prev - 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRecording]);

  return (
    <div
      className={cn(
        "relative mx-auto w-full min-w-[240px] max-w-[min(420px,100%)]",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-3xl border-4 border-zinc-200/80 bg-black shadow-2xl dark:border-zinc-800/80">
        <div className="relative aspect-[9/16]">
          {/* Mock video background - gradient placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60" />
          </div>

          {/* Always-on contrast overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

          {/* Top Controls */}
          {!recordingComplete && !isRecording && (
            <div className="absolute top-4 left-0 right-0 flex justify-center items-center gap-6 z-30 px-4">
              {/* Upload Button */}
              {scriptCollapsed && (
                <label className="flex flex-col items-center cursor-pointer transition-colors">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 transition-colors hover:bg-black/60">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-10 text-white" viewBox="0 0 24 24" width="1em" height="1em">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                        <path strokeLinejoin="round" d="M21.25 13V8.5a5 5 0 0 0-5-5h-8.5a5 5 0 0 0-5 5v7a5 5 0 0 0 5 5h6.26" />
                        <path strokeLinejoin="round" d="m3.01 17l2.74-3.2a2.2 2.2 0 0 1 2.77-.27a2.2 2.2 0 0 0 2.77-.27l2.33-2.33a4 4 0 0 1 5.16-.43l2.47 1.91M8.01 10.17a1.66 1.66 0 1 0-.02-3.32a1.66 1.66 0 0 0 .02 3.32" />
                        <path strokeMiterlimit="10" d="M18.707 15v5" />
                        <path strokeLinejoin="round" d="m21 17.105l-1.967-1.967a.46.46 0 0 0-.652 0l-1.967 1.967" />
                      </g>
                    </svg>
                  </div>
                  <span className="mt-2 rounded-full bg-black/40 px-3 py-1 text-lg font-semibold text-white drop-shadow-md">Upload</span>
                </label>
              )}

              {/* Script Toggle */}
              <button
                onClick={() => setScriptCollapsed(prev => !prev)}
                className="flex flex-col items-center transition-colors"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/40 transition-colors hover:bg-black/60">
                  {scriptCollapsed ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 18 6-6l6 6M6 12l6-6l6 6" />
                    </svg>
                  )}
                </div>
                <span className="mt-2 rounded-full bg-black/40 px-3 py-1 text-lg font-semibold text-white drop-shadow-md">
                  {scriptCollapsed ? "Script" : "Hide Script"}
                </span>
              </button>
            </div>
          )}

          {/* Script Panel */}
          <AnimatePresence>
            {!scriptCollapsed && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-x-4 top-24 z-30 rounded-2xl bg-white/95 p-4 text-left text-sm font-medium text-zinc-800 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.45)] dark:bg-zinc-900/95 dark:text-zinc-200"
              >
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300/80">
                  <span>Prompt Guide</span>
                  <span className="text-[10px] font-semibold">Swipe to record confidently</span>
                </div>
                <div className="space-y-3">
                  {SCRIPT_LINES.map((line, index) => (
                    <div key={line} className="rounded-xl border border-purple-100/70 bg-purple-50/60 px-3 py-2 text-xs font-medium leading-relaxed text-purple-900 dark:border-purple-900/40 dark:bg-purple-900/20 dark:text-purple-100">
                      <span className="mr-2 inline-flex size-5 items-center justify-center rounded-full bg-purple-200/80 text-[11px] font-semibold text-purple-900 dark:bg-purple-800/60 dark:text-purple-100">
                        {index + 1}
                      </span>
                      {line}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        {/* Bottom Controls */}
        <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2 z-30">
          {/* Recording Timer */}
          <AnimatePresence>
            {isRecording && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mb-2 flex flex-col items-center text-white text-3xl font-bold pointer-events-none tracking-wider bg-black/40 rounded-full px-3 py-1"
              >
                <span>
                  {Math.floor(timeLeft / 60).toString().padStart(2, "0")}:
                  {(timeLeft % 60).toString().padStart(2, "0")}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons Row */}
          {!recordingComplete && (
            <div className="relative w-full flex items-center justify-center">
              <div className="flex flex-col items-center relative">
                {/* Top label */}
                <AnimatePresence>
                  {!isRecording && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mb-2 text-center text-white text-xl font-semibold pointer-events-none drop-shadow-md bg-black/40 rounded-full px-3 py-1"
                    >
                      Press to Record
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Record Button */}
                <button
                  onClick={() => {
                    if (!isRecording) {
                      setIsRecording(true);
                      setTimeLeft(5 * 60);
                    } else {
                      setIsRecording(false);
                      setRecordingComplete(true);
                    }
                  }}
                  className="w-20 h-20 flex items-center justify-center rounded-full relative transition-all duration-200 ease-out active:scale-95 z-10"
                  aria-label={isRecording ? "Stop recording" : "Start recording"}
                >
                  {/* Outer pulsing ring when recording */}
                  {isRecording && (
                    <motion.span
                      className="absolute inset-[-8px] rounded-full border-2 border-white/50"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                  
                  <span className="absolute inset-0 rounded-full border-2 border-white transition-all duration-300"></span>
                  <span
                    className={`absolute inset-1 rounded-full transition-all duration-300 ease-in-out ${
                      isRecording
                        ? "bg-gradient-to-r from-red-500 to-pink-500 motion-safe:animate-pulse"
                        : "bg-gradient-to-r from-purple-500 to-indigo-500"
                    }`}
                  ></span>
                </button>

                {/* Bottom label */}
                {!isRecording && (
                  <div className="mt-2 text-center text-white text-xs pointer-events-none drop-shadow bg-black/40 rounded px-2 py-0.5">
                    You'll see your video next!
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Completion State */}
          {recordingComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center gap-6 w-full px-4"
            >
              <h1 className="text-xl font-semibold text-white text-center">Ready to send?</h1>
              <div className="flex gap-4 w-full max-w-xs">
                <button
                  onClick={() => {
                    setRecordingComplete(false);
                    setIsRecording(false);
                    setTimeLeft(5 * 60);
                  }}
                  className="flex-1 py-3 rounded-full bg-white/10 text-white font-medium text-lg transition hover:bg-white/20"
                >
                  No
                </button>
                <button
                  onClick={() => {
                    setRecordingComplete(false);
                    setIsRecording(false);
                    setTimeLeft(5 * 60);
                  }}
                  className="flex-1 py-3 rounded-full font-medium text-lg text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 hover:brightness-110"
                >
                  Yes
                </button>
              </div>
            </motion.div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}