"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Download, Search, Clock, User, Mail, Video, Eye, Trash2 } from "lucide-react";

const MOCK_SUBMISSIONS = [
  { id: '1', name: "Sarah Chen", email: "sarah@example.com", approved: true, featured: false, date: "2024-01-15" },
  { id: '2', name: "Marcus Johnson", email: "marcus@example.com", approved: true, featured: true, date: "2024-01-14" },
  { id: '3', name: "Emily Rodriguez", email: "emily@example.com", approved: false, featured: false, date: "2024-01-13" },
  { id: '4', name: "David Kim", email: "david@example.com", approved: true, featured: false, date: "2024-01-12" },
  { id: '5', name: "Jessica Wang", email: "jessica@example.com", approved: false, featured: false, date: "2024-01-11" },
  { id: '6', name: "Alex Thompson", email: "alex@example.com", approved: true, featured: true, date: "2024-01-10" },
];

export default function SubmissionsTabDemo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTab, setFilterTab] = useState("all");
  const [selectedIds, setSelectedIds] = useState(new Set());

  const filteredSubmissions = MOCK_SUBMISSIONS.filter((submission) => {
    const matchesSearch = searchQuery.trim() === '' ||
      submission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    let passesFilter = true;
    if (filterTab === 'pending') passesFilter = !submission.approved;
    else if (filterTab === 'approved') passesFilter = submission.approved;
    else if (filterTab === 'featured') passesFilter = submission.featured;

    return matchesSearch && passesFilter;
  });

  const toggleSelect = (id) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getFilterCount = (filter) => {
    if (filter === 'all') return MOCK_SUBMISSIONS.length;
    if (filter === 'pending') return MOCK_SUBMISSIONS.filter(s => !s.approved).length;
    if (filter === 'approved') return MOCK_SUBMISSIONS.filter(s => s.approved).length;
    if (filter === 'featured') return MOCK_SUBMISSIONS.filter(s => s.featured).length;
    return 0;
  };

  return (
    <div className="w-full space-y-3 md:space-y-4">
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-2 md:gap-3 items-stretch sm:items-center">
        <div className="relative flex-1 min-w-0">
          <Search className="absolute left-2.5 md:left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 dark:text-zinc-500 h-3.5 w-3.5 md:h-4 md:w-4" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-zinc-900 dark:text-zinc-50"
          />
        </div>
        <div className="flex gap-1.5 md:gap-2 flex-wrap">
          {['all', 'pending', 'approved', 'featured'].map((filter) => (
            <button
              key={filter}
              onClick={() => setFilterTab(filter)}
              className={`px-2.5 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                filterTab === filter
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              <span className="hidden sm:inline">{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
              <span className="sm:hidden">{filter.charAt(0).toUpperCase()}</span>
              <span className="ml-1">({getFilterCount(filter)})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {filteredSubmissions.map((submission, index) => (
          <motion.div
            key={submission.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div
              className={`group relative overflow-hidden rounded-xl md:rounded-2xl border-2 transition-all duration-300 cursor-pointer bg-white dark:bg-zinc-900 ${
                selectedIds.has(submission.id)
                  ? 'border-purple-400 shadow-2xl shadow-purple-400/50 scale-[1.02]'
                  : 'border-transparent hover:border-purple-400 hover:shadow-xl'
              }`}
              onClick={() => toggleSelect(submission.id)}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0" />
              
              <div className="relative space-y-3 md:space-y-4 p-4 md:p-6">
                {/* Header with badge and selection */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    {submission.approved ? (
                      <div className="px-2.5 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-xs font-semibold shadow-sm">
                        Approved
                      </div>
                    ) : (
                      <div className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-xs font-semibold shadow-sm">
                        Pending
                      </div>
                    )}
                    {submission.featured && (
                      <div className="px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 text-xs font-semibold shadow-sm flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </div>
                    )}
                  </div>
                  
                  {/* Selection indicator */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      selectedIds.has(submission.id)
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-zinc-100 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700'
                    }`}
                  >
                    {selectedIds.has(submission.id) && <Check className="w-4 h-4" />}
                  </div>
                </div>

                {/* Video thumbnail */}
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-4xl md:text-5xl font-bold">
                      {submission.name[0]}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Name and info */}
                <div className="space-y-2">
                  <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-1">
                    {submission.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {new Date(submission.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Mail className="w-3 h-3" />
                    <span className="truncate">{submission.email}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Video className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground">Video</div>
                      <div className="text-[10px] text-muted-foreground">Ready</div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    className="flex-1 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-medium text-foreground transition-colors flex items-center justify-center gap-1.5"
                    onClick={(e) => {
                      e.stopPropagation();
                      // View action
                    }}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">View</span>
                  </button>
                  <button
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-red-100 dark:hover:bg-red-900/30 text-xs font-medium text-foreground hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Delete action
                    }}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating action buttons when items are selected */}
      {selectedIds.size > 0 && (
        <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex flex-col gap-2">
          <div className="bg-white dark:bg-zinc-900 rounded-xl md:rounded-2xl shadow-2xl border-2 border-zinc-200 dark:border-zinc-800 p-1.5 md:p-2 flex flex-col gap-1.5 md:gap-2">
            <button 
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg"
              aria-label="Approve"
            >
              <Check className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-purple-500 text-white flex items-center justify-center hover:bg-purple-600 transition-colors shadow-lg"
              aria-label="Feature"
            >
              <Star className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg"
              aria-label="Download"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => setSelectedIds(new Set())}
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Clear selection"
            >
              <span className="text-xs md:text-sm font-bold">×</span>
            </button>
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredSubmissions.length === 0 && (
        <div className="text-center py-8 md:py-12">
          <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400">
            {searchQuery || filterTab !== 'all'
              ? 'No submissions match your filters'
              : 'No submissions yet'}
          </p>
        </div>
      )}
    </div>
  );
}

