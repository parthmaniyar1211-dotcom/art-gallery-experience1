import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { 
  Palette, 
  LayoutGrid, 
  MessageCircle, 
  Award, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';

export default function WhyChooseUs() {
  const iconMap = {
    Palette: Palette,
    LayoutGrid: LayoutGrid,
    MessageCircle: MessageCircle,
    Award: Award,
  };

  return (
    <section className="py-20 bg-sand-50/70 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Curation Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-medium tracking-tight">
            Why Choose The Sketchy Wall
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
            Proposed core brand values and craftsmanship standards designed for client review.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.iconName] || Palette;
            return (
              <div
                key={pillar.id}
                className="bg-ivory-50 p-8 border border-sand-200/90 shadow-sm hover:shadow-md hover:border-sand-300 transition-all space-y-4 group"
              >
                <div className="w-12 h-12 rounded-none bg-sand-100 flex items-center justify-center text-charcoal-900 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-xl text-charcoal-900 font-semibold">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footnote indicating proposal status */}
        <div className="mt-12 text-center">
          <span className="text-[11px] text-charcoal-400 bg-ivory-50 px-4 py-1.5 border border-sand-200 uppercase tracking-widest font-sans inline-block">
            Proposed Brand Messaging • Ready for Kapil Yadav's input
          </span>
        </div>

      </div>
    </section>
  );
}
