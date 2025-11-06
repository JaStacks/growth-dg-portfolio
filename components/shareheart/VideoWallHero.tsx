"use client";
import { motion } from "framer-motion";
import { Video, Share2, ExternalLink } from "lucide-react";

interface VideoWallHeroProps {
  campaign?: {
    title?: string;
    question?: string;
    slug?: string;
  };
  profile?: {
    organization_name?: string;
    website_link?: string;
  };
  videoCount?: number;
  onShareClick?: () => void;
  onSubmitStory?: () => void;
}

export default function VideoWallHero({ 
  campaign, 
  profile, 
  videoCount = 0,
  onShareClick,
  onSubmitStory
}: VideoWallHeroProps) {
  const demoCampaign = campaign || {
    title: "Video Stories",
    question: "What's your story?",
    slug: "demo-collection"
  };

  const demoProfile = profile || {
    organization_name: "ShareHeart",
    website_link: "https://shareheart.io"
  };

  return (
    <section className="relative py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Organization Logo & Name */}
        {demoProfile && (
          <div className="flex items-center justify-center gap-3 mb-6">
            {demoProfile.website_link && (
              <button
                onClick={() => window.open(demoProfile.website_link, '_blank')}
                className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-200 dark:border-purple-800 flex items-center justify-center">
                  <span className="text-xl font-black text-purple-600 dark:text-purple-400">
                    {demoProfile.organization_name?.[0] || 'S'}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {demoProfile.organization_name}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                    Visit Website <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </button>
            )}
          </div>
        )}

        {/* Hero Content */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-100 leading-tight">
            {demoCampaign.title}
          </h1>

          {demoCampaign.question && (
            <div className="max-w-2xl mx-auto mb-2">
              <div className="text-center mb-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  Watch how our community answered:
                </p>
              </div>
              
              <div className="relative rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-purple-200 dark:border-purple-800 p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      The Question
                    </span>
                    <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
                </div>
                
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-4xl text-purple-200 dark:text-purple-800 font-serif leading-none">"</div>
                  <p className="text-lg md:text-xl text-zinc-900 dark:text-zinc-100 font-semibold leading-relaxed text-center px-4">
                    {demoCampaign.question}
                  </p>
                  <div className="absolute -right-2 -bottom-2 text-4xl text-purple-200 dark:text-purple-800 font-serif leading-none">"</div>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  📹 Share your own answer below
                </p>
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={onSubmitStory}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Video className="w-5 h-5" />
              Submit Your Story
            </button>

            <button
              onClick={onShareClick}
              className="w-full sm:w-auto border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 px-6 py-3 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex items-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share This Wall
            </button>
          </div>

          {/* Stats Badge */}
          {videoCount > 0 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-purple-200 dark:border-purple-800">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="text-purple-600 dark:text-purple-400 font-bold">{videoCount}</span> {videoCount === 1 ? 'story' : 'stories'} shared
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


