import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { siteConfig } from '../data/siteConfig';
import ProductCard from './ProductCard';
import { 
  Filter, 
  SlidersHorizontal, 
  Search, 
  X, 
  Sparkles, 
  Check, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';

export default function ShopSection({
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onToggleInquiry,
  isProductShortlisted,
  onPreviewInRoom,
  onOpen3DGallery
}) {
  const [sortBy, setSortBy] = useState('curator');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories list
  const categoryFilters = [
    { id: 'all', label: 'All Works' },
    { id: 'abstract', label: 'Abstract Art' },
    { id: 'modern-prints', label: 'Modern Prints' },
    { id: 'botanical', label: 'Nature & Botanical' },
    { id: 'gallery-sets', label: 'Gallery Wall Sets' },
    { id: 'statement', label: 'Statement Pieces' },
    { id: 'decor', label: 'Home Décor' },
  ];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((prod) => {
        const matchesCategory =
          selectedCategory === 'all' || prod.categoryId === selectedCategory;

        const matchesSearch =
          searchQuery.trim() === '' ||
          prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          prod.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.demoPrice - b.demoPrice;
        if (sortBy === 'price-desc') return b.demoPrice - a.demoPrice;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default: Curator's Choice
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="shop" className="py-20 bg-ivory-50 border-b border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catalogue Preview</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-medium tracking-tight">
            Curated Wall Art & Décor
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
            Museum-grade giclée prints produced with 12-colour archival pigments, paired with bespoke hardwood timber frames.
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div className="bg-sand-50 border border-sand-200 p-4 sm:p-5 mb-10 space-y-4">
          
          {/* Top row: Category Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categoryFilters.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-charcoal-900 text-ivory-50 shadow-sm'
                      : 'bg-ivory-50 text-charcoal-700 hover:bg-sand-200/70 border border-sand-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Bottom row: Search + Sort controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-3 border-t border-sand-200/70">
            
            {/* Search input inside shop */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, style or mood..."
                className="w-full bg-ivory-50 border border-sand-300 pl-10 pr-9 py-2 text-xs text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-1 focus:ring-charcoal-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-800"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown & Count */}
            <div className="flex items-center justify-between sm:justify-end space-x-4 text-xs text-charcoal-600">
              <span className="text-charcoal-500 hidden md:inline">
                Showing <strong className="text-charcoal-900">{filteredProducts.length}</strong> of {products.length} works
              </span>

              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-charcoal-500" />
                <label htmlFor="sort-select" className="uppercase tracking-wider text-[11px] font-medium text-charcoal-600">
                  Sort:
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-ivory-50 border border-sand-300 py-1.5 px-3 text-xs text-charcoal-800 focus:outline-none cursor-pointer"
                >
                  <option value="curator">Curator's Choice</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Collector Rating</option>
                </select>
              </div>
            </div>

          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onToggleInquiry={onToggleInquiry}
                isShortlisted={isProductShortlisted(product.id)}
                onPreviewInRoom={onPreviewInRoom}
                onOpen3DGallery={onOpen3DGallery}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-sand-50 border border-dashed border-sand-300 max-w-lg mx-auto">
            <h3 className="font-serif text-2xl text-charcoal-900 mb-2 font-medium">
              No matching artworks found
            </h3>
            <p className="text-xs text-charcoal-600 mb-6 font-light">
              We couldn't find any artwork matching your active search or category filters.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-charcoal-900 text-ivory-50 text-xs uppercase tracking-widest font-semibold hover:bg-terracotta-600 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Bespoke Framing & Sizing Banner */}
        <div className="mt-16 bg-sand-100/70 border border-sand-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-widest text-terracotta-600 font-semibold block">
              Bespoke Framing & Spatial Consulting
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-charcoal-900 font-medium">
              Need custom wall sizing or curated gallery diptychs?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light">
              Share your room photo or floor plan directly on WhatsApp for tailored sizing and mockups.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Hello%20Kapil,%20I%20would%20like%20bespoke%20wall%20art%20advice%20for%20my%20home`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 bg-charcoal-900 text-ivory-50 hover:bg-olive-700 text-xs uppercase tracking-widest font-semibold transition-all shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
