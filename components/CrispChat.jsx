"use client";
import { useEffect } from "react";

/**
 * Crisp Chat Widget Component
 * 
 * This component loads Crisp chat using the official installation method.
 * The website ID is hardcoded below - you can also use an environment variable.
 * 
 * To integrate with n8n:
 * 1. In Crisp dashboard, go to Settings > Integrations > Webhooks
 * 2. Add a webhook URL pointing to your n8n webhook endpoint
 * 3. Select events: message:received, conversation:started, etc.
 * 4. In n8n, create a workflow with:
 *    - Webhook node (receives from Crisp)
 *    - Process/Transform node (optional, to format data)
 *    - Slack node (sends to your Slack channel)
 * 
 * See CRISP_N8N_SETUP.md for detailed setup instructions
 */
export default function CrispChat() {
  useEffect(() => {
    // Only load Crisp in the browser
    if (typeof window === "undefined") return;

    // Use environment variable or fallback to hardcoded ID
    const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID || "51f2c228-82f4-4944-91b1-4b0dd846eaa4";

    // Check if Crisp is already loaded
    if (window.$crisp && window.CRISP_WEBSITE_ID) {
      console.log("Crisp already loaded");
      return;
    }

    // Initialize Crisp exactly as per official documentation
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    // Load Crisp script using the official method
    (function() {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();

    console.log("Crisp chat initialized with Website ID:", CRISP_WEBSITE_ID);
  }, []);

  // This component doesn't render anything visible
  // Crisp injects its own chat widget UI
  return null;
}

