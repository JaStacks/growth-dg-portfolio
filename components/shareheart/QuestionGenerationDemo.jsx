"use client";
import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Loader2, Command } from "lucide-react";

const QUICK_SUGGESTIONS = [
  { text: "Collect customer success stories for our product launch..." },
  { text: "Gather testimonials from our community members..." },
  { text: "Share stories about how our service impacted your life..." },
];

// Simple typewriter effect component
function TypewriterText({ text, className, onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && onComplete) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, onComplete]);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function QuestionGenerationDemo() {
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const currentSuggestion = QUICK_SUGGESTIONS[currentSuggestionIndex];

  const handleSuggestionComplete = () => {
    setCurrentSuggestionIndex((prev) => (prev + 1) % QUICK_SUGGESTIONS.length);
  };

  const handleGenerate = () => {
    if (!input.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setInput("");
    }, 2000);
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="relative group">
        {/* Glassmorphic container with glow */}
        <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl md:rounded-3xl blur-lg md:blur-xl opacity-20 md:opacity-30 group-hover:opacity-40 md:group-hover:opacity-50 transition-opacity" />
        
        <div className="relative bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-zinc-200 dark:border-zinc-800 p-4 md:p-5 lg:p-6 xl:p-8 max-w-full overflow-hidden">
          {/* TypewriterText placeholder */}
          <div className="relative min-h-[120px] md:min-h-[160px]">
            {!input && (
              <div className="absolute inset-0 p-2 md:p-3 pointer-events-none flex items-start">
                <TypewriterText 
                  text={currentSuggestion.text}
                  className="text-base md:text-lg lg:text-xl xl:text-2xl text-zinc-400 dark:text-zinc-500 font-light leading-relaxed"
                  onComplete={handleSuggestionComplete}
                />
              </div>
            )}
            
            <textarea
              value={input}
              onChange={(e) => {
                if (e.target.value.length <= 500) {
                  setInput(e.target.value);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey) && input.trim()) {
                  e.preventDefault();
                  handleGenerate();
                }
              }}
              className="min-h-[120px] md:min-h-[160px] w-full text-base md:text-lg lg:text-xl xl:text-2xl font-light resize-none border-0 focus:ring-0 bg-transparent placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-zinc-900 dark:text-zinc-50 leading-relaxed max-w-full"
              placeholder=""
              disabled={isGenerating}
              maxLength={500}
            />
          </div>
          
          {/* Action bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2 md:gap-3 flex-wrap min-w-0">
              <div className="px-2.5 md:px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 flex-shrink-0">
                <Command className="w-3 h-3 flex-shrink-0" />
                <span className="hidden sm:inline">Ctrl+Enter</span>
                <span className="sm:hidden">⌘+Enter</span>
              </div>
              <span className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 flex-shrink-0">
                {input.length} / 500
              </span>
            </div>
            
            <button
              onClick={handleGenerate}
              disabled={!input.trim() || isGenerating}
              className="w-full sm:w-auto sm:flex-shrink-0 h-11 md:h-12 lg:h-11 xl:h-12 px-4 sm:px-5 md:px-5 lg:px-6 xl:px-8 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all text-white font-semibold text-sm md:text-sm lg:text-sm xl:text-base flex items-center justify-center gap-2 whitespace-nowrap min-w-0"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 md:w-5 md:h-5 lg:w-4 xl:w-5 animate-spin flex-shrink-0" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 lg:w-4 xl:w-5 flex-shrink-0" />
                  <span className="hidden xl:inline">Generate Collection</span>
                  <span className="xl:hidden">Generate</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-4 xl:w-5 flex-shrink-0" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Suggestion Pills */}
      <div className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3 justify-center">
        {QUICK_SUGGESTIONS.map((suggestion, idx) => (
          <button
            key={idx}
            onClick={() => {
              setInput(suggestion.text);
              setTimeout(() => handleGenerate(), 500);
            }}
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs md:text-sm text-zinc-700 dark:text-zinc-300 transition-colors border border-zinc-200 dark:border-zinc-700 max-w-full sm:max-w-none truncate sm:truncate-none"
            title={suggestion.text}
          >
            <span className="hidden sm:inline">{suggestion.text.slice(0, 40)}...</span>
            <span className="sm:hidden">{suggestion.text.slice(0, 25)}...</span>
          </button>
        ))}
      </div>
    </div>
  );
}

