import React, { useState } from 'react';
import { products } from '../data/products';
import { Sparkles, Eye, Maximize2, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function GallerySection({ onQuickView }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  // Gallery items using all 11 client photographs
  const galleryItems = [
    {
      id: "prod-01",
      title: "The Azure Steed",
      category: "Statement",
      roomSetting: "Mediterranean Living Room with Timber Beams & Olive Sofa",
      dimensions: "84 x 118 cm Grand Canvas",
      image: "/images/artwork/art-10-azure-steed.jpeg",
      aspectClass: "aspect-[4/5]",
      alt: "Monumental artwork The Azure Steed in a luxury living room with timber beams and olive sofa"
    },
    {
      id: "prod-02",
      title: "Concentric Orbit",
      category: "Abstract",
      roomSetting: "Japandi Entryway with Beamed Ceiling & Potted Olive Tree",
      dimensions: "90 x 90 cm Grand Square",
      image: "/images/artwork/art-05-concentric-orbit.jpeg",
      aspectClass: "aspect-[1/1]",
      alt: "Concentric Orbit mandala artwork above a Japandi entryway wooden bench with olive tree"
    },
    {
      id: "prod-03",
      title: "The Golden Embrace",
      category: "Statement",
      roomSetting: "Herringbone Parquet Salon with Ochre Velvet Armchairs",
      dimensions: "100 x 100 cm Salon Canvas",
      image: "/images/artwork/art-08-golden-embrace.jpeg",
      aspectClass: "aspect-[1/1]",
      alt: "The Golden Embrace abstract figurative painting in a salon with yellow velvet armchairs"
    },
    {
      id: "prod-04",
      title: "Solarium Reverie",
      category: "Modernist",
      roomSetting: "Nordic Living Room with Beige Linen Sofa & Pampas Grass",
      dimensions: "60 x 84 cm Living Print",
      image: "/images/artwork/art-03-solarium-reverie.jpeg",
      aspectClass: "aspect-[2/3]",
      alt: "Solarium Reverie wall art above a beige linen sofa with dried pampas grass"
    },
    {
      id: "prod-05",
      title: "Olive Alcove",
      category: "Modernist",
      roomSetting: "Walnut Wood-Paneled Reading Alcove with Built-in Bench",
      dimensions: "42 x 60 cm Vertical Alcove",
      image: "/images/artwork/art-06-olive-alcove.jpeg",
      aspectClass: "aspect-[2/3]",
      alt: "Olive Alcove artwork in a walnut wood paneled reading nook with brass wall sconces"
    },
    {
      id: "prod-06",
      title: "Modernist Visage",
      category: "Modernist",
      roomSetting: "Scandinavian Studio with Fluted Oak Plinth & Wainscoting",
      dimensions: "42 x 60 cm Bauhaus Print",
      image: "/images/artwork/art-11-modernist-visage.jpeg",
      aspectClass: "aspect-[4/5]",
      alt: "Modernist Visage geometric Bauhaus face artwork above fluted oak plinth"
    },
    {
      id: "prod-07",
      title: "Calligraphic Motion",
      category: "Abstract",
      roomSetting: "Urban Loft with Architectural Concrete Wall & Black Leather Chair",
      dimensions: "60 x 84 cm Textured Relief",
      image: "/images/artwork/art-07-calligraphic-motion.jpeg",
      aspectClass: "aspect-[4/5]",
      alt: "Calligraphic Motion textured sand relief artwork against an architectural concrete wall"
    },
    {
      id: "prod-08",
      title: "Botanical Muse",
      category: "Botanical",
      roomSetting: "Terracotta Accent Wall with Coffee Table & Designer Lounge Chair",
      dimensions: "50 x 50 cm Square Print",
      image: "/images/artwork/art-02-botanical-muse.jpeg",
      aspectClass: "aspect-[1/1]",
      alt: "Botanical Muse artwork on a warm terracotta wall with coffee table and modern chair"
    },
    {
      id: "prod-09",
      title: "Balanced Strata",
      category: "Abstract",
      roomSetting: "Contemporary Dining Room with Black Fluted Pedestal Table",
      dimensions: "60 x 84 cm Dining Scale",
      image: "/images/artwork/art-09-balanced-strata.jpeg",
      aspectClass: "aspect-[4/5]",
      alt: "Balanced Strata sedimentary stone artwork above a black fluted dining table"
    },
    {
      id: "prod-10",
      title: "The Monolith Silhouette",
      category: "Statement",
      roomSetting: "Architectural Dressing Hallway with Mosaic Tiles & Zebra Ottoman",
      dimensions: "42 x 75 cm Slender Canvas",
      image: "/images/artwork/art-04-monolith-silhouette.jpeg",
      aspectClass: "aspect-[9/16]",
      alt: "The Monolith Silhouette in an architectural dressing corridor with mosaic tiles"
    },
    {
      id: "prod-11",
      title: "The Triad Gallery Suite",
      category: "Corridors",
      roomSetting: "Art Gallery Corridor with Dedicated Ceiling Picture Spotlights",
      dimensions: "Three 42 x 60 cm Artworks",
      image: "/images/artwork/art-01-gallery-hallway.jpeg",
      aspectClass: "aspect-[4/3]",
      alt: "The Triad Gallery Suite of three cubist portraits along an illuminated corridor wall"
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All 11 Installations' },
    { id: 'Statement', label: 'Grand Statements' },
    { id: 'Abstract', label: 'Abstract & Sand' },
    { id: 'Modernist', label: 'Modernist & Figurative' },
    { id: 'Corridors', label: 'Gallery Corridors' }
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 bg-ivory-100/70 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-sand-200">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Portfolio Exhibition</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-medium tracking-tight">
              Curated Installations Gallery
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 font-light leading-relaxed">
              Showcasing the complete collection of 11 authentic art installations styled across living salons, dining halls, reading nooks, and gallery hallways.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {filterOptions.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-charcoal-900 text-ivory-50 shadow-sm'
                    : 'bg-ivory-50 text-charcoal-700 hover:bg-sand-200 border border-sand-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Consistent Editorial Grid with object-fit: cover) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-ivory-50 border border-sand-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand-200 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/75 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-ivory-50/90 backdrop-blur-sm text-charcoal-900 text-[10px] uppercase tracking-widest font-semibold border border-sand-200">
                    {item.category}
                  </span>
                </div>

                {/* Top Right: Lightbox Expand Icon */}
                <button
                  type="button"
                  onClick={() => setLightboxImage(item)}
                  className="absolute top-3 right-3 p-2 bg-charcoal-900/80 hover:bg-charcoal-900 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                  title="Expand Full Resolution View"
                  aria-label="Expand image"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>

                {/* Bottom Overlay Info on Hover */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-sand-300 block">
                      {item.dimensions}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-white line-clamp-1">
                      {item.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => onQuickView(item.id)}
                    className="px-3 py-1.5 bg-ivory-50 hover:bg-white text-charcoal-900 text-[11px] uppercase tracking-wider font-semibold shadow-md shrink-0 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-4 bg-ivory-50 flex items-center justify-between text-xs border-t border-sand-200">
                <p className="text-[11px] text-charcoal-600 font-light truncate max-w-[80%]">
                  {item.roomSetting}
                </p>
                <button
                  onClick={() => onQuickView(item.id)}
                  className="text-terracotta-600 hover:text-terracotta-700 font-medium inline-flex items-center"
                  title="View artwork specifications"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-ivory-50 border border-sand-300 shadow-2xl overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-sand-50 border-b border-sand-200 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg font-semibold text-charcoal-900">
                  {lightboxImage.title}
                </h4>
                <p className="text-xs text-charcoal-500 font-light">
                  {lightboxImage.roomSetting}
                </p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 text-charcoal-500 hover:text-charcoal-900"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative p-4 sm:p-6 bg-sand-100 flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.alt}
                className="max-h-[68vh] w-auto object-contain shadow-2xl"
              />
            </div>

            <div className="p-4 bg-ivory-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-sand-200">
              <span className="text-charcoal-600">
                Specifications: <strong>{lightboxImage.dimensions}</strong>
              </span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    const id = lightboxImage.id;
                    setLightboxImage(null);
                    onQuickView(id);
                  }}
                  className="px-4 py-2 bg-charcoal-900 text-ivory-50 text-xs uppercase tracking-wider font-semibold hover:bg-terracotta-600 transition-colors"
                >
                  View Product Details & Framing
                </button>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(
                    `Hello Kapil, I am enquiring about the ${lightboxImage.title} installation shown on The Sketchy Wall.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 text-white text-xs uppercase tracking-wider font-semibold hover:bg-emerald-700 transition-colors flex items-center space-x-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
