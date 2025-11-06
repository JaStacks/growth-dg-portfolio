"use client";
import { useEffect, useState } from "react";

/**
 * Debug component to check if Crisp is working
 * Add this temporarily to your page to verify Crisp setup
 * Remove after confirming everything works
 */
export default function CrispDebug() {
  const [status, setStatus] = useState({
    loaded: false,
    websiteId: null,
    scriptLoaded: false,
    errors: []
  });

  useEffect(() => {
    const checkCrisp = () => {
      const checks = {
        loaded: typeof window !== "undefined" && typeof window.$crisp !== "undefined",
        websiteId: typeof window !== "undefined" ? window.CRISP_WEBSITE_ID : null,
        scriptLoaded: document.querySelector('script[src="https://client.crisp.chat/l.js"]') !== null,
        errors: []
      };

      // Check for environment variable
      if (!process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID) {
        checks.errors.push("NEXT_PUBLIC_CRISP_WEBSITE_ID not set in environment");
      }

      // Check if script is in DOM
      if (!checks.scriptLoaded) {
        checks.errors.push("Crisp script not found in DOM");
      }

      // Check if Crisp object exists
      if (!checks.loaded) {
        checks.errors.push("Crisp object not initialized");
      }

      setStatus(checks);
    };

    // Check immediately
    checkCrisp();

    // Check again after a delay (script might load asynchronously)
    const timeout = setTimeout(checkCrisp, 2000);

    return () => clearTimeout(timeout);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg text-sm">
      <h3 className="font-bold mb-2 text-zinc-900 dark:text-zinc-50">Crisp Debug Status</h3>
      <div className="space-y-1 text-xs">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status.loaded ? "bg-green-500" : "bg-red-500"}`} />
          <span className="text-zinc-700 dark:text-zinc-300">
            Crisp Loaded: {status.loaded ? "Yes" : "No"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status.scriptLoaded ? "bg-green-500" : "bg-red-500"}`} />
          <span className="text-zinc-700 dark:text-zinc-300">
            Script Loaded: {status.scriptLoaded ? "Yes" : "No"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status.websiteId ? "bg-green-500" : "bg-red-500"}`} />
          <span className="text-zinc-700 dark:text-zinc-300">
            Website ID: {status.websiteId || "Not set"}
          </span>
        </div>
        {status.errors.length > 0 && (
          <div className="mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <p className="font-semibold text-red-600 dark:text-red-400 mb-1">Errors:</p>
            <ul className="list-disc list-inside space-y-1 text-red-600 dark:text-red-400">
              {status.errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        {status.loaded && status.scriptLoaded && status.websiteId && (
          <div className="mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-green-600 dark:text-green-400 font-semibold">
              ✓ Crisp is working correctly!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

