import React, { useState } from 'react';
import { roomInspirationSpaces } from '../data/roomInspiration';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, Eye, ArrowRight, MessageCircle, Compass, Check } from 'lucide-react';

export default function RoomInspiration({ onSelectRoomForPreview }) {
  const [activeSpaceId, setActiveSpaceId] = useState('living-room');
  const [showLookDetails, setShowLookDetails] = useState(false);

  const currentSpace = roomInspirationSpaces.find((s) => s.id === activeSpaceId) || roomInspirationSpaces[0];

  return (
    <section id="inspiration" className="py-20 bg-sand-50/80 border-b border-sand-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-sand-200">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spatial Harmony & Curation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-medium tracking-tight">
              Room Inspiration
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
              Explore how intentional scale, framing tone, and placement balance architecture across primary living spaces.
            </p>
          </div>

          {/* Room Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {roomInspirationSpaces.map((space) => {
              const isActive = space.id === activeSpaceId;
              return (
                <button
                  key={space.id}
                  onClick={() => {
                    setActiveSpaceId(space.id);
                    setShowLookDetails(false);
                  }}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-charcoal-900 text-ivory-50 shadow-sm'
                      : 'bg-ivory-50 text-charcoal-700 hover:bg-sand-200 border border-sand-200'
                  }`}
                >
                  {space.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Space Editorial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-ivory-50 border border-sand-200 overflow-hidden shadow-sm">
          
          {/* Main Visual Image (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-sand-200 group">
            <img
              src={currentSpace.image}
              alt={currentSpace.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-104"
              loading="lazy"
            />
            
            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-70" />

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-sand-300 font-semibold block">
                  {currentSpace.tagline}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-medium">
                  {currentSpace.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowLookDetails(!showLookDetails)}
                className="px-3.5 py-2 bg-ivory-50/95 hover:bg-white text-charcoal-900 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-md transition-all cursor-pointer"
              >
                {showLookDetails ? 'Hide Styling Spec' : 'Explore The Look'}
              </button>
            </div>
          </div>

          {/* Editorial Specs & Styling Advice (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
                Curator's Spatial Note
              </span>
              <h4 className="font-serif text-2xl text-charcoal-900 font-medium leading-snug">
                {currentSpace.title}
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed pt-1">
                {currentSpace.description}
              </p>
            </div>

            {/* Specifications Card */}
            <div className="p-4 bg-sand-50 border border-sand-200 space-y-3">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-sand-200">
                <span className="text-charcoal-500 font-medium uppercase tracking-wider text-[11px]">Artwork Selected:</span>
                <span className="font-serif font-semibold text-charcoal-900">{currentSpace.artworkFeatured.name}</span>
              </div>
              <div className="flex items-center justify-between text-xs pb-2 border-b border-sand-200">
                <span className="text-charcoal-500 font-medium uppercase tracking-wider text-[11px]">Recommended Frame:</span>
                <span className="text-charcoal-800 font-medium">{currentSpace.artworkFeatured.frame}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-charcoal-500 font-medium uppercase tracking-wider text-[11px]">Ideal Dimensions:</span>
                <span className="text-charcoal-800 font-medium">{currentSpace.artworkFeatured.dimensions}</span>
              </div>
            </div>

            {/* Styling Rule of Thumb */}
            <div className="flex items-start space-x-3 text-xs text-charcoal-700 bg-sand-100/60 p-3.5 border-l-2 border-terracotta-500">
              <Compass className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
              <p className="font-light leading-relaxed">
                <strong className="font-medium text-charcoal-900">Designer Rule:</strong> {currentSpace.stylingTip}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onSelectRoomForPreview(currentSpace.id)}
                className="flex-1 py-3 px-4 bg-charcoal-900 text-ivory-50 text-xs uppercase tracking-widest font-semibold hover:bg-terracotta-600 transition-colors text-center flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Test in 2D Visualizer</span>
              </button>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Hello%20Kapil,%20I%20love%20the%20${encodeURIComponent(currentSpace.name)}%20curation%20look%20on%20The%20Sketchy%20Wall.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-sand-100 hover:bg-sand-200 text-charcoal-900 text-xs uppercase tracking-wider font-semibold border border-sand-300 transition-colors text-center flex items-center justify-center space-x-1"
              >
                <MessageCircle className="w-3.5 h-3.5 text-olive-700" />
                <span>Enquire Look</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
