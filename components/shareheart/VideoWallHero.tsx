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
                <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center">
                  <span className="text-xl font-black text-accent">
                    {demoProfile.organization_name?.[0] || 'S'}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-dark group-hover:text-accent transition-colors">
                    {demoProfile.organization_name}
                  </p>
                  <p className="text-xs text-dark/60 flex items-center gap-1">
                    Visit Website <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </button>
            )}
          </div>
        )}

        {/* Hero Content */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-black text-dark leading-tight">
            {demoCampaign.title}
          </h1>

          {demoCampaign.question && (
            <div className="max-w-2xl mx-auto mb-2">
              <div className="text-center mb-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  Watch how our community answered:
                </p>
              </div>
              
              <div className="relative rounded-xl bg-primary/30 border border-dark/10 p-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      The Question
                    </span>
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                </div>
                
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-4xl text-accent/30 font-serif leading-none">"</div>
                  <p className="text-lg md:text-xl text-dark font-semibold leading-relaxed text-center px-4">
                    {demoCampaign.question}
                  </p>
                  <div className="absolute -right-2 -bottom-2 text-4xl text-accent/30 font-serif leading-none">"</div>
                </div>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-xs text-dark/60">
                  📹 Share your own answer below
                </p>
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={onSubmitStory}
              className="w-full sm:w-auto bg-accent hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Video className="w-5 h-5" />
              Submit Your Story
            </button>

            <button
              onClick={onShareClick}
              className="w-full sm:w-auto border-2 border-dark/20 text-dark px-6 py-3 rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share This Wall
            </button>
          </div>

          {/* Stats Badge */}
          {videoCount > 0 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 border border-dark/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-dark">
                <span className="text-accent font-bold">{videoCount}</span> {videoCount === 1 ? 'story' : 'stories'} shared
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}






