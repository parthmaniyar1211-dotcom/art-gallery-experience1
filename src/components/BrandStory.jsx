import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Sparkles, Quote, ArrowRight } from 'lucide-react';

export default function BrandStory({ onExploreClick }) {
  return (
    <section id="story" className="py-20 lg:py-28 bg-ivory-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brand Ethos & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-medium tracking-tight leading-[1.12]">
              Art for the spaces that <br />
              <span className="italic text-terracotta-600 font-normal">tell your story.</span>
            </h2>

            <div className="space-y-4 text-charcoal-600 font-light text-sm sm:text-base leading-relaxed">
              <p>
                We believe walls shouldn’t just hold up a ceiling—they are the quiet canvas where your personal aesthetic unfolds. In a world of fleeting mass-produced trends, <strong>{siteConfig.brandName}</strong> was founded to bring thoughtful, gallery-standard wall art into everyday living environments.
              </p>
              
              <p>
                Each artwork in our curated catalogue explores the dialogue between architectural structure and human emotion. From textured earth-toned abstracts and serene botanical silhouettes to monumental canvas statements, our pieces are tailored to ground modern sanctuaries with effortless dignity.
              </p>

              <p>
                Every print is meticulously rendered on heavyweight 310 GSM cotton rag archival paper using museum-grade aqueous pigment inks, encased inside custom hand-finished European oak, walnut, and anodised metal frames built to endure generations.
              </p>
            </div>

            {/* Founder Note Card */}
            <div className="p-6 bg-sand-100/70 border-l-2 border-charcoal-900 space-y-3">
              <Quote className="w-6 h-6 text-terracotta-500" />
              <p className="font-serif italic text-base text-charcoal-800 leading-snug">
                “A thoughtfully chosen piece of wall art alters how a room breathes. It brings warmth where there was emptiness, and personality where there was only neutrality.”
              </p>
              <div className="pt-2">
                <span className="font-serif font-semibold text-charcoal-900 block text-base">
                  {siteConfig.clientName}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-charcoal-500 font-sans">
                  {siteConfig.clientRole} • {siteConfig.brandName}
                </span>
              </div>
            </div>

            {/* Editable note for client preview */}
            <p className="text-[11px] text-charcoal-400 font-light">
              * Note for Client: Proposed brand narrative concept. Can be tailored to Kapil Yadav’s founding journey before final launch.
            </p>

          </div>

          {/* Right Column: Editorial Photographic Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-sand-200 shadow-2xl">
                <img
                  src="/images/artwork/art-01-gallery-hallway.jpeg"
                  alt="Contemporary framed artwork gallery corridor illuminated with picture lights"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-charcoal-950/10 pointer-events-none" />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-3/5 aspect-square overflow-hidden bg-sand-300 shadow-2xl border-4 border-ivory-50">
                <img
                  src="/images/artwork/art-07-calligraphic-motion.jpeg"
                  alt="Art curation detail with tactile sand relief"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Floating Craftsmanship Badge */}
              <div className="absolute top-6 right-6 bg-ivory-50/95 backdrop-blur-md p-4 border border-sand-200 shadow-lg text-center">
                <span className="font-serif text-2xl font-bold text-charcoal-900 block">
                  80+ Yrs
                </span>
                <span className="text-[10px] uppercase tracking-wider text-charcoal-500 font-medium">
                  Archival Lightfastness
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
