import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowRight, Eye, Sparkles, CheckCircle2, Box } from 'lucide-react';

export default function Hero({ onExploreClick, onPreviewClick, onQuickView, onOpen3DGallery }) {
  // Flagship scenes available from client photos
  const heroScenes = [
    {
      id: "prod-01",
      title: "The Azure Steed",
      subtitle: "Mediterranean Living Room with Timber Beams",
      specs: "Grand Salon Canvas • Floating Oak Tray",
      image: "/images/artwork/art-10-azure-steed.jpeg",
      thumb: "/images/artwork/art-10-azure-steed.jpeg",
      artist: "Kapil Yadav Atelier Collection"
    },
    {
      id: "prod-04",
      title: "Solarium Reverie",
      subtitle: "Nordic Living Room with Linen Sofa",
      specs: "310 GSM Rag • Natural Solid Oak",
      image: "/images/artwork/art-03-solarium-reverie.jpeg",
      thumb: "/images/artwork/art-03-solarium-reverie.jpeg",
      artist: "Modernist Botanical Series"
    },
    {
      id: "prod-02",
      title: "Concentric Orbit",
      subtitle: "Japandi Entryway with Olive Tree & Bench",
      specs: "Grand Square Mandala • Floating Tray",
      image: "/images/artwork/art-05-concentric-orbit.jpeg",
      thumb: "/images/artwork/art-05-concentric-orbit.jpeg",
      artist: "Geometric Harmony Series"
    }
  ];

  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const currentScene = heroScenes[activeSceneIndex];

  return (
    <section id="hero" className="relative overflow-hidden bg-ivory-50 pt-6 pb-16 lg:py-20 border-b border-sand-200/50">
      {/* Decorative ambient subtle background blur */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-sand-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-terracotta-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Copy */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 lg:pr-6">
            
            {/* Top Curation Pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-sand-100 border border-sand-200 rounded-full text-xs font-medium text-charcoal-800 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-terracotta-500"></span>
              <span className="font-serif italic">The Sketchy Wall</span>
              <span className="text-sand-400">|</span>
              <span className="text-[11px] uppercase tracking-wider text-charcoal-600">Curated by Kapil Yadav</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] text-charcoal-900 tracking-tight font-medium">
              Make Your Walls <br />
              <span className="italic font-normal text-terracotta-600">Mean Something.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-charcoal-600 font-sans font-light leading-relaxed max-w-xl">
              Discover art that brings character, warmth, and personality to every corner of your home. Archival giclée prints, handcrafted timber framing, and bespoke curated gallery layouts.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 pt-2">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-6 py-4 bg-charcoal-900 text-ivory-50 hover:bg-terracotta-600 transition-all duration-300 text-xs uppercase tracking-widest font-semibold group shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onOpen3DGallery}
                className="inline-flex items-center justify-center px-6 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white transition-all duration-300 text-xs uppercase tracking-widest font-semibold group shadow-md hover:shadow-lg cursor-pointer"
              >
                <Box className="w-4 h-4 mr-2" />
                <span>Explore 3D Gallery</span>
              </button>

              <button
                type="button"
                onClick={onPreviewClick}
                className="inline-flex items-center justify-center px-5 py-4 bg-white/90 border border-sand-300 text-charcoal-800 hover:bg-sand-100 hover:border-charcoal-800 transition-all duration-300 text-xs uppercase tracking-widest font-medium group cursor-pointer"
              >
                <Eye className="w-4 h-4 mr-1.5 text-terracotta-600" />
                <span>2D Room Preview</span>
              </button>
            </div>

            {/* Trust & Craft Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sand-200">
              <div className="space-y-1">
                <p className="font-serif text-lg font-medium text-charcoal-900">310 GSM</p>
                <p className="text-xs text-charcoal-500 leading-tight">Cotton Rag Archival Paper</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-lg font-medium text-charcoal-900">100% Solid</p>
                <p className="text-xs text-charcoal-500 leading-tight">Oak & Walnut Framing</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-lg font-medium text-charcoal-900">Bespoke</p>
                <p className="text-xs text-charcoal-500 leading-tight">Direct WhatsApp Advisory</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Interior Imagery Composition (Client's Flagship Photo) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Architectural Interior Image */}
              <div className="relative overflow-hidden bg-sand-200 shadow-2xl rounded-sm aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] group">
                <img
                  src={currentScene.image}
                  alt={`${currentScene.title} styled in ${currentScene.subtitle}`}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-80" />

                {/* Floating Interactive Artwork Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-ivory-50/95 backdrop-blur-md border border-sand-200 shadow-xl transition-all">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-14 h-14 bg-sand-200 overflow-hidden shrink-0 border border-sand-300">
                        <img 
                          src={currentScene.thumb} 
                          alt={currentScene.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-terracotta-600 font-semibold block">
                          Featured In This Scene
                        </span>
                        <h4 className="font-serif text-base font-semibold text-charcoal-900">
                          {currentScene.title}
                        </h4>
                        <p className="text-xs text-charcoal-500">
                          {currentScene.specs}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => onQuickView(currentScene.id)}
                      className="px-3.5 py-2 bg-charcoal-900 hover:bg-terracotta-600 text-ivory-50 text-[11px] uppercase tracking-wider font-medium shrink-0 transition-colors cursor-pointer"
                    >
                      View Artwork
                    </button>
                  </div>
                </div>

                {/* Top Badge: Lifestyle Setting */}
                <div className="absolute top-4 left-4 bg-charcoal-900/80 backdrop-blur-sm text-ivory-100 text-[11px] px-3 py-1 tracking-wider uppercase">
                  {currentScene.subtitle}
                </div>
              </div>

              {/* Scene Switcher Pills */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-[11px] text-charcoal-500 uppercase tracking-wider font-medium">
                  Client Art Installation Scenes:
                </span>
                <div className="flex space-x-1.5">
                  {heroScenes.map((scene, idx) => (
                    <button
                      key={scene.id}
                      onClick={() => setActiveSceneIndex(idx)}
                      className={`text-[11px] px-2.5 py-1 transition-all ${
                        activeSceneIndex === idx
                          ? 'bg-charcoal-900 text-white font-medium shadow-sm'
                          : 'bg-sand-100 hover:bg-sand-200 text-charcoal-700'
                      }`}
                    >
                      Scene 0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Secondary Floating Accent Card */}
              <div className="hidden sm:block absolute -top-5 -right-5 bg-ivory-50 p-4 border border-sand-200 shadow-lg max-w-[200px]">
                <div className="flex items-center space-x-2 text-olive-700 text-xs font-medium mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Museum Clarity</span>
                </div>
                <p className="text-[11px] text-charcoal-600 leading-tight">
                  Archival pigment inks resistant to fading for over 80 years.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
