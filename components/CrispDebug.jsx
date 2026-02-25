"use client";
import { useEffect, useState } from "react";

/**
 * Debug component to check if Crisp is working
 * Add this temporarily to your page to verify Crisp setup
 * Remove after confirming everything works
 */
export default function CrispDebug() {

  return null;
  
  const [status, setStatus] = useState({
    loaded: false,
    websiteId: null,
    scriptLoaded: false,
    widgetVisible: false,
    errors: []
  });

  useEffect(() => {
    const checkCrisp = () => {
      const checks = {
        loaded: typeof window !== "undefined" && typeof window.$crisp !== "undefined",
        websiteId: typeof window !== "undefined" ? window.CRISP_WEBSITE_ID : null,
        scriptLoaded: document.querySelector('script[src="https://client.crisp.chat/l.js"]') !== null,
        widgetVisible: document.querySelector('#crisp-chatbox') !== null || 
                      document.querySelector('[data-crisp-widget]') !== null ||
                      document.querySelector('.crisp-client') !== null,
        errors: []
      };

      // Check if script is in DOM
      if (!checks.scriptLoaded) {
        checks.errors.push("Crisp script not found in DOM");
      }

      // Check if Crisp object exists
      if (!checks.loaded) {
        checks.errors.push("Crisp object not initialized");
      }

      // Check if Website ID is set (either via env or hardcoded)
      if (!checks.websiteId) {
        checks.errors.push("Website ID not set");
      }

      // Note: Widget might take a few seconds to appear, so this is just a check
      if (!checks.widgetVisible && checks.loaded && checks.scriptLoaded) {
        // This is not necessarily an error - widget loads asynchronously
      }

      setStatus(checks);
    };

    // Check immediately
    checkCrisp();

    // Check again after delays (script and widget load asynchronously)
    const timeout1 = setTimeout(checkCrisp, 1000);
    const timeout2 = setTimeout(checkCrisp, 3000);
    const timeout3 = setTimeout(checkCrisp, 5000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  // Only show in development CRISP DEBUG
  if (process.env.NODE_ENV === "development") {
    return null;
  }

  const allGood = status.loaded && status.scriptLoaded && status.websiteId;

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
            Website ID: {status.websiteId ? status.websiteId.substring(0, 8) + "..." : "Not set"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status.widgetVisible ? "bg-green-500" : "bg-yellow-500"}`} />
          <span className="text-zinc-700 dark:text-zinc-300">
            Widget Visible: {status.widgetVisible ? "Yes" : "Loading..."}
          </span>
        </div>
        {status.errors.length > 0 && (
          <div className="mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <p className="font-semibold text-red-600 dark:text-red-400 mb-1">Issues:</p>
            <ul className="list-disc list-inside space-y-1 text-red-600 dark:text-red-400">
              {status.errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        {allGood && (
          <div className="mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-green-600 dark:text-green-400 font-semibold">
              ✓ Crisp is initialized! Widget should appear in bottom-right corner.
            </p>
            {!status.widgetVisible && (
              <p className="text-yellow-600 dark:text-yellow-400 text-xs mt-1">
                (Widget may take a few seconds to load)
              </p>
            )}
          </div>
        )}
        <div className="mt-2 pt-2 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400">
          <p>Note: Website ID is hardcoded in code, env variable is optional.</p>
        </div>
      </div>
    </div>
  );
}

