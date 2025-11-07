import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Download } from "lucide-react";

export default function FloatingActionsStack({
  selectedCount = 0,
  onApprove = () => {},
  onFeature = () => {},
  onDownload = () => {},
  onClear = () => {},
  style,
  className = "",
}) {
  return (
    <motion.div
      style={style}
      className={`fixed right-6 bottom-8 z-50 ${className}`.trim()}
    >
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border-2 border-zinc-200 dark:border-zinc-800 p-2 flex flex-col gap-2 backdrop-blur-sm bg-white/95 dark:bg-zinc-900/95">
        <ActionButton
          icon={Check}
          label="Approve"
          onClick={onApprove}
          className="bg-purple-600 hover:bg-purple-700"
        />
        <ActionButton
          icon={Star}
          label="Feature"
          onClick={onFeature}
          className="bg-purple-500 hover:bg-purple-600"
        />
        <ActionButton
          icon={Download}
          label="Download"
          onClick={onDownload}
          className="bg-indigo-600 hover:bg-indigo-700"
        />

        <AnimatePresence>
          {selectedCount > 0 && (
            <motion.button
              key="clear-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={onClear}
              className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Clear selection"
            >
              <span className="text-xl font-bold">×</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function ActionButton({ icon: Icon, label, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 rounded-xl text-white flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 active:scale-95 ${className}`.trim()}
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
