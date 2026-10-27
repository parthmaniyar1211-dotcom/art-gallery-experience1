import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Star, Quote, AlertCircle } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-ivory-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs uppercase tracking-widest font-semibold">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Client Demo Content Placeholder</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-medium tracking-tight">
            Collector Feedback Concept
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-500 font-light max-w-lg mx-auto">
            Visual presentation layout prepared for the client. These placeholder cards will be replaced with verified collector feedback upon brand launch.
          </p>
        </div>

        {/* Testimonials 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-sand-50/70 p-8 border border-sand-200 flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif italic text-base sm:text-lg text-charcoal-800 leading-relaxed">
                  “{t.quote}”
                </p>
              </div>

              {/* Author & Artwork Detail */}
              <div className="pt-4 border-t border-sand-200/80">
                <div className="font-medium text-charcoal-900 text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-charcoal-500">
                  {t.location}
                </div>
                <div className="text-[11px] text-terracotta-600 mt-1 font-serif italic">
                  Acquired: {t.artwork}
                </div>
              </div>

              {/* Watermark badge */}
              <span className="absolute top-4 right-4 text-[9px] uppercase tracking-wider text-charcoal-400 font-mono">
                [Demo Mockup]
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
