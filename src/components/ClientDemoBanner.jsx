import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, CheckCircle2, ChevronUp, ChevronDown, MessageCircle, Eye, Box } from 'lucide-react';

export default function ClientDemoBanner({ onNavigate, onOpenRoomPreview, onOpen3DGallery }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm">
      <div className="bg-charcoal-900/95 text-ivory-100 p-3 sm:p-3.5 border border-sand-400/30 shadow-2xl backdrop-blur-md transition-all text-xs">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-serif font-medium text-ivory-50 text-sm">
              Client Concept Demo
            </span>
            <span className="text-sand-400 text-[10px] uppercase font-mono">
              v1.0
            </span>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sand-400 hover:text-white p-1"
            title={isExpanded ? "Collapse Review Guide" : "Expand Review Guide"}
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-charcoal-800 space-y-2.5 animate-fade-in text-[11px] text-sand-300 font-light">
            <p>
              Curated for <strong className="text-white font-medium">{siteConfig.clientName}</strong>. All catalog products, descriptions, framing options, and WhatsApp links are editable in <code className="bg-charcoal-950 px-1 py-0.5 text-terracotta-400 font-mono">siteConfig.js</code>.
            </p>

            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <button
                onClick={() => onNavigate('#shop')}
                className="p-1.5 bg-charcoal-800 hover:bg-charcoal-700 text-left text-ivory-50 text-[10px] uppercase tracking-wider font-medium truncate"
              >
                1. Artworks (11)
              </button>
              <button
                onClick={onOpen3DGallery}
                className="p-1.5 bg-terracotta-600 hover:bg-terracotta-500 text-left text-white text-[10px] uppercase tracking-wider font-semibold truncate flex items-center justify-between"
              >
                <span>2. 3D Gallery</span>
                <Box className="w-3 h-3 inline" />
              </button>
              <button
                onClick={() => onNavigate('#gallery')}
                className="p-1.5 bg-charcoal-800 hover:bg-charcoal-700 text-left text-ivory-50 text-[10px] uppercase tracking-wider font-medium truncate"
              >
                3. Installations
              </button>
              <button
                onClick={() => onNavigate('#contact')}
                className="p-1.5 bg-emerald-700 hover:bg-emerald-600 text-left text-white text-[10px] uppercase tracking-wider font-semibold truncate flex items-center justify-between"
              >
                <span>4. WhatsApp Form</span>
                <MessageCircle className="w-3 h-3 inline" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
