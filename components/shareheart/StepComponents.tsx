"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StepComponents() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    prompt: '',
    video: null
  });

  const steps = [
    { number: 1, title: "Collection Setup", description: "Name your collection" },
    { number: 2, title: "Create Prompt", description: "What stories do you want?" },
    { number: 3, title: "Upload Video", description: "Add your first testimony" },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-900 p-6">
      <div className="flex items-center justify-between mb-6">
        {steps.map((step) => (
          <div key={step.number} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                  currentStep >= step.number
                    ? 'bg-purple-600 text-white'
                    : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500'
                }`}
              >
                {step.number}
              </div>
              <div className="mt-2 text-xs text-center">
                <div className="font-medium text-zinc-900 dark:text-zinc-100">{step.title}</div>
                <div className="text-zinc-500 dark:text-zinc-400">{step.description}</div>
              </div>
            </div>
            {step.number < 3 && (
              <div className={`h-0.5 flex-1 mx-2 transition-colors ${
                currentStep > step.number ? 'bg-purple-600' : 'bg-zinc-200 dark:bg-zinc-800'
              }`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {currentStep === 1 && (
            <div>
              <label className="block text-sm font-medium mb-2 text-zinc-900 dark:text-zinc-100">
                Collection Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="My Community Stories"
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
              />
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <label className="block text-sm font-medium mb-2 text-zinc-900 dark:text-zinc-100">
                Prompt
              </label>
              <textarea
                value={formData.prompt}
                onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                placeholder="Share a story about how this community has impacted you..."
                rows={4}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 resize-none"
              />
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <label className="block text-sm font-medium mb-2 text-zinc-900 dark:text-zinc-100">
                Upload Video
              </label>
              <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-8 text-center">
                <div className="text-4xl mb-2">📹</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Click to upload or drag and drop
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === 3}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentStep === 3 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
}



