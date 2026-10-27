import React from 'react';
import { collections } from '../data/collections';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CollectionGrid({ onSelectCategory }) {
  return (
    <section id="collections" className="py-20 bg-sand-50/70 border-b border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 border-b border-sand-200">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Themes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 font-medium tracking-tight">
              Featured Collections
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
              Explore artworks grouped by spatial energy, color harmony, and interior sensibility. Each piece is crafted to bring intentional rhythm to your walls.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={() => onSelectCategory("all")}
              className="inline-flex items-center text-xs uppercase tracking-widest text-charcoal-800 hover:text-terracotta-600 font-medium underline underline-offset-8 transition-colors cursor-pointer"
            >
              <span>View All 14 Catalog Works</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Collection Cards Grid (Editorial Asymmetric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className="group relative bg-ivory-50 border border-sand-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container with subtle zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-ivory-50/90 backdrop-blur-sm text-charcoal-900 text-[10px] uppercase tracking-widest font-semibold border border-sand-200">
                    {item.badge}
                  </span>
                </div>

                {/* Item Count Chip */}
                <div className="absolute bottom-4 right-4 text-white text-[11px] tracking-wider uppercase font-medium bg-charcoal-900/80 px-2.5 py-1 backdrop-blur-sm">
                  {item.itemCount}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-terracotta-600 font-semibold mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal-900 font-medium group-hover:text-terracotta-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-200/70 flex items-center justify-between text-xs">
                  <span className="text-charcoal-500 font-serif italic text-xs">
                    Palette: {item.accent}
                  </span>
                  <span className="inline-flex items-center text-charcoal-900 font-medium group-hover:text-terracotta-600 group-hover:translate-x-1 transition-all">
                    <span>Explore Theme</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
