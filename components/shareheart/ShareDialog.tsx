"use client";
import { useState } from "react";
import { Copy, Check, QrCode, Code, Share2, X } from "lucide-react";

interface ShareDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  campaignId?: string;
  campaignTitle?: string;
}

export default function ShareDialog({ 
  open: openProp, 
  onOpenChange, 
  campaignId = "demo-collection-123",
  campaignTitle = "Video Stories"
}: ShareDialogProps) {
  const [isOpen, setIsOpen] = useState(openProp || false);
  const [copied, setCopied] = useState<string | null>(null);
  
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://shareheart.io';
  const videoWallUrl = `${baseUrl}/wall/${campaignId}`;
  const embedCode = `<iframe src="${videoWallUrl}" width="100%" height="800" frameborder="0" allowfullscreen></iframe>`;

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: campaignTitle,
          text: 'Check out these amazing video stories!',
          url: videoWallUrl,
        });
      } catch (error) {
        // User cancelled
      }
    } else {
      handleCopy(videoWallUrl, 'Link');
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => handleOpenChange(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
      >
        Share Collection
      </button>
    );
  }

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => handleOpenChange(false)}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 rounded-lg shadow-xl z-50 p-6 w-full max-w-md border border-zinc-200 dark:border-zinc-900">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Share2 className="w-5 h-5 text-purple-600" />
            Share Video Wall
          </h3>
          <button
            onClick={() => handleOpenChange(false)}
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
          Share this collection with your audience using any of these methods
        </p>

        <div className="space-y-6">
          {/* Direct Link */}
          <div className="space-y-2">
            <label className="text-sm font-semibold flex items-center gap-2">
              <Copy className="w-4 h-4" />
              Direct Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={videoWallUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-950 text-xs font-mono"
              />
              <button
                onClick={() => handleCopy(videoWallUrl, 'Link')}
                className="px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                {copied === 'Link' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Embed Code */}
          <div className="space-y-2">
            <label className="text-sm font-semibold flex items-center gap-2">
              <Code className="w-4 h-4" />
              Embed Code
            </label>
            <div className="flex gap-2">
              <textarea
                value={embedCode}
                readOnly
                className="flex-1 min-h-[80px] px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-950 text-xs font-mono resize-none"
              />
              <button
                onClick={() => handleCopy(embedCode, 'Embed code')}
                className="px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                {copied === 'Embed code' ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Native Share */}
          {navigator.share && (
            <button
              onClick={handleNativeShare}
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share via...
            </button>
          )}
        </div>
      </div>
    </>
  );
}






