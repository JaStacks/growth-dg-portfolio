"use client";
import { useEffect } from "react";

/**
 * Crisp Chat Widget Component
 * 
 * To set up:
 * 1. Sign up at https://crisp.chat
 * 2. Get your website ID from Crisp dashboard
 * 3. Create a .env.local file in your project root
 * 4. Add: NEXT_PUBLIC_CRISP_WEBSITE_ID=your-website-id-here
 * 5. Restart your dev server
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

    // Get website ID from environment variable
    const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

    // Don't load if website ID is not set
    if (!CRISP_WEBSITE_ID) {
      console.warn(
        "Crisp Chat: NEXT_PUBLIC_CRISP_WEBSITE_ID not set. " +
        "Please add it to your .env.local file. " +
        "See CRISP_N8N_SETUP.md for setup instructions."
      );
      return;
    }

    // Initialize Crisp
    if (!window.$crisp) {
      window.$crisp = [];
    }
    
    // Set website ID
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    // Load Crisp script if not already loaded
    if (!document.querySelector('script[src="https://client.crisp.chat/l.js"]')) {
      const script = document.createElement("script");
      script.src = "https://client.crisp.chat/l.js";
      script.async = true;
      document.getElementsByTagName("head")[0].appendChild(script);
    }

    // Configure Crisp settings
    if (window.$crisp) {
      // Set session segments
      window.$crisp.push(["set", "session:segments", ["website"]]);
      
      // Optional: Set user information if available
      // window.$crisp.push(["set", "user:email", "user@example.com"]);
      // window.$crisp.push(["set", "user:nickname", "User Name"]);
    }
  }, []);

  // This component doesn't render anything visible
  // Crisp injects its own chat widget UI
  return null;
}

