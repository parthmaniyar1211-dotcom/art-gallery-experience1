import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, ChevronRight, X } from 'lucide-react';

export default function AnnouncementBar({ onExploreClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Subtle rotation between announcement messages every 5 seconds
  useEffect(() => {
    if (siteConfig.announcements.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % siteConfig.announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Announcement"
      className="bg-charcoal-900 text-ivory-100 text-xs tracking-wider border-b border-charcoal-800 transition-all duration-300 relative z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 flex items-center justify-between">
        {/* Left subtle brand note (hidden on small mobile) */}
        <div className="hidden md:flex items-center space-x-2 text-sand-300 text-[11px] uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 animate-pulse"></span>
          <span>Atelier Curation</span>
        </div>

        {/* Center message */}
        <div className="flex-1 text-center px-4 flex items-center justify-center space-x-2 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-terracotta-400 shrink-0 hidden sm:inline" />
          <span className="transition-opacity duration-500 key={currentIndex}">
            {siteConfig.announcements[currentIndex]}
          </span>
          <button
            onClick={onExploreClick}
            className="hidden sm:inline-flex items-center text-terracotta-400 hover:text-terracotta-200 underline underline-offset-4 ml-2 transition-colors cursor-pointer text-[11px]"
          >
            Explore <ChevronRight className="w-3 h-3 ml-0.5 inline" />
          </button>
        </div>

        {/* Right close button */}
        <div className="flex items-center space-x-3 text-sand-400 text-xs">
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close announcement bar"
            className="hover:text-ivory-100 transition-colors p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
