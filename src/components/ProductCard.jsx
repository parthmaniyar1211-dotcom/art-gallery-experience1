import React, { useState } from 'react';
import { Eye, Bookmark, Check, Sparkles, SlidersHorizontal, ArrowUpRight, Box } from 'lucide-react';

export default function ProductCard({
  product,
  onQuickView,
  onToggleInquiry,
  isShortlisted,
  onPreviewInRoom,
  onOpen3DGallery
}) {
  const [showLifestyle, setShowLifestyle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-ivory-50 border border-sand-200/90 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-sand-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Display Area with consistent 4:5 Art Ratio */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand-100">
        
        {/* Artwork Image */}
        <img
          src={showLifestyle && product.lifestyleImage ? product.lifestyleImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Framing Matte Emulation Effect on Artwork */}
        <div className="absolute inset-3 border border-charcoal-900/10 pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 bg-charcoal-900/90 text-ivory-100 text-[10px] uppercase tracking-widest font-semibold backdrop-blur-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Top Right Actions (Shortlist Button) */}
        <div className="absolute top-3 right-3 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleInquiry(product);
            }}
            aria-label={isShortlisted ? "Remove from inquiry list" : "Save to inquiry list"}
            className={`p-2 rounded-full transition-all duration-200 backdrop-blur-md ${
              isShortlisted
                ? 'bg-terracotta-500 text-white shadow-md'
                : 'bg-ivory-50/90 text-charcoal-700 hover:text-terracotta-600 hover:bg-ivory-50'
            }`}
            title={isShortlisted ? "In Inquiry List" : "Add to Inquiry List"}
          >
            {isShortlisted ? <Check className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* In-Room Lifestyle Toggle Pill (Hover or Mobile) */}
        {product.lifestyleImage && (
          <div className="absolute bottom-3 left-3 z-10">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowLifestyle(!showLifestyle);
              }}
              className="text-[10px] tracking-wider uppercase px-2 py-1 bg-ivory-50/90 hover:bg-white text-charcoal-800 border border-sand-200 backdrop-blur-sm transition-colors shadow-sm font-medium"
            >
              {showLifestyle ? 'Show Art' : 'View In Room'}
            </button>
          </div>
        )}

        {/* Quick View & 3D Overlay Buttons on Hover */}
        <div className="absolute inset-0 bg-charcoal-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 gap-2">
          <button
            type="button"
            onClick={() => onQuickView(product.id)}
            className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 px-3 py-2 bg-ivory-50 text-charcoal-900 hover:bg-charcoal-900 hover:text-ivory-50 text-[11px] uppercase tracking-wider font-semibold shadow-lg flex items-center space-x-1"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>
          {onOpen3DGallery && (
            <button
              type="button"
              onClick={() => onOpen3DGallery(product.id)}
              className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 px-3 py-2 bg-terracotta-500 text-white hover:bg-terracotta-600 text-[11px] uppercase tracking-wider font-semibold shadow-lg flex items-center space-x-1"
              title="Experience mounted in 3D Virtual Gallery"
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Room</span>
            </button>
          )}
        </div>

      </div>

      {/* Product Details Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-charcoal-500 mb-1">
            <span>{product.category}</span>
            <span className="font-serif italic text-charcoal-400 capitalize">{product.aspectRatio.split(' ')[0]}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product.id)}
            className="font-serif text-xl text-charcoal-900 font-medium group-hover:text-terracotta-600 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Medium summary */}
          <p className="text-xs text-charcoal-500 font-light line-clamp-1 mt-0.5">
            {product.medium}
          </p>
          {product.roomSetting && (
            <p className="text-[10px] text-terracotta-700 font-medium truncate mt-0.5">
              • {product.roomSetting.split(' with ')[0]}
            </p>
          )}
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-sand-200/80">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-charcoal-400 block font-sans">
                Demo Price (Framed)
              </span>
              <div className="flex items-baseline space-x-2">
                <span className="font-serif text-lg font-semibold text-charcoal-900">
                  ₹{product.demoPrice.toLocaleString('en-IN')}
                </span>
                {product.originalDemoPrice && (
                  <span className="text-xs text-charcoal-400 line-through">
                    ₹{product.originalDemoPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
            </div>

            {/* Subtle color dots for frame finishes */}
            <div className="flex items-center space-x-1" title="Available in Natural Oak, Black & Walnut">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8A676] border border-black/10 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#1E1C1A] border border-black/10 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#5C3A21] border border-black/10 inline-block" />
            </div>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onQuickView(product.id)}
              className="w-full py-2 px-2 bg-sand-100 hover:bg-sand-200 text-charcoal-900 text-[11px] uppercase tracking-wider font-semibold text-center transition-colors flex items-center justify-center space-x-1"
            >
              <span>View Details</span>
              <ArrowUpRight className="w-3 h-3 text-charcoal-500" />
            </button>

            <button
              type="button"
              onClick={() => onPreviewInRoom(product)}
              className="w-full py-2 px-2 border border-sand-300 hover:border-charcoal-800 text-charcoal-700 hover:text-charcoal-950 text-[11px] uppercase tracking-wider font-medium text-center transition-colors flex items-center justify-center space-x-1"
              title="Preview this artwork on a 2D wall"
            >
              <Eye className="w-3 h-3 text-terracotta-500" />
              <span>In Room</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
