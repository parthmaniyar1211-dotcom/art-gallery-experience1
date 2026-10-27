import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import { Search, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSelectProduct, onSelectCategory }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
      // Allow pressing '/' on desktop to open search if not already focused in an input
      if (e.key === '/' && !isOpen && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = products.filter((p) => {
    if (!searchTerm.trim()) return false;
    const term = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
  });

  const popularSearches = [
    'Earth in Motion',
    'Quiet Horizons',
    'Abstract',
    'Botanical',
    'Natural Oak',
    'Statement Pieces'
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-charcoal-950/70 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-ivory-50 border border-sand-300 shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-sand-200 flex items-center space-x-3 bg-sand-50/50">
          <Search className="w-5 h-5 text-charcoal-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search artwork by title, style, or collection..."
            className="flex-1 bg-transparent border-none text-sm sm:text-base text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-charcoal-400 hover:text-charcoal-700"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-semibold text-charcoal-500 hover:text-charcoal-900 px-2 py-1"
          >
            Esc
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* Live Search Results */}
          {searchTerm.trim() ? (
            <div>
              <div className="text-xs uppercase tracking-widest text-charcoal-500 font-semibold mb-3">
                Matching Artworks ({results.length})
              </div>

              {results.length > 0 ? (
                <div className="divide-y divide-sand-200">
                  {results.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onClose();
                        onSelectProduct(product.id);
                      }}
                      className="py-3 flex items-center justify-between hover:bg-sand-100/70 px-2 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-12 h-14 bg-sand-200 overflow-hidden shrink-0 border border-sand-300">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-serif text-base font-medium text-charcoal-900 group-hover:text-terracotta-600 transition-colors">
                            {product.name}
                          </h4>
                          <span className="text-[11px] text-charcoal-500 block">
                            {product.category} • Demo: ₹{product.demoPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs uppercase tracking-wider font-medium text-charcoal-700 group-hover:text-terracotta-600 flex items-center">
                        <span>View</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-charcoal-500 text-xs">
                  No artworks found matching "{searchTerm}". Try searching "Abstract", "Botanical", or "Oak".
                </div>
              )}
            </div>
          ) : (
            /* Suggested Searches & Quick Navigation */
            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-charcoal-500 font-semibold block mb-2.5">
                  Suggested Curations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchTerm(term)}
                      className="px-3 py-1.5 bg-sand-100 hover:bg-sand-200 text-charcoal-800 text-xs rounded-none border border-sand-200 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-sand-200">
                <span className="text-[11px] uppercase tracking-widest text-charcoal-500 font-semibold block mb-2.5">
                  Browse by Collection:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['abstract', 'botanical', 'modern-prints', 'statement'].map((catId) => (
                    <button
                      key={catId}
                      onClick={() => {
                        onClose();
                        onSelectCategory(catId);
                      }}
                      className="p-2 text-left bg-ivory-50 hover:bg-sand-100 border border-sand-200 text-charcoal-800 uppercase tracking-wider font-medium text-[11px] flex items-center justify-between"
                    >
                      <span>{catId.replace('-', ' ')}</span>
                      <ArrowUpRight className="w-3 h-3 text-charcoal-400" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Search Modal Footer */}
        <div className="p-3 bg-sand-100 border-t border-sand-200 text-center text-[11px] text-charcoal-500">
          The Sketchy Wall • Curated Wall Art Catalogue Demo
        </div>
      </div>
    </div>
  );
}
