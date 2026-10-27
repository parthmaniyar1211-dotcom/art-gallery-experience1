import React from 'react';
import { Box, Sparkles, Eye, ArrowRight, Layers, Sun } from 'lucide-react';

export default function Gallery3DSection({ onOpen3DGallery }) {
  return (
    <section id="gallery-3d" className="py-20 lg:py-24 bg-charcoal-950 text-ivory-50 relative overflow-hidden border-b border-charcoal-800">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-terracotta-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-sand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-charcoal-900 border border-charcoal-800 rounded-full text-xs text-sand-300 tracking-wide">
              <Box className="w-3.5 h-3.5 text-terracotta-400" />
              <span className="font-serif italic">Virtual Atelier</span>
              <span className="text-charcoal-700">|</span>
              <span className="text-[10px] uppercase tracking-wider text-sand-400">WebGL Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight leading-[1.12]">
              Step Inside Our <br />
              <span className="italic text-terracotta-400 font-normal">3D Virtual Gallery.</span>
            </h2>

            <p className="text-sm sm:text-base text-sand-300 font-light leading-relaxed max-w-xl">
              Experience The Sketchy Wall collection in true spatial scale. Orbit through architectural virtual rooms, test custom hardwood frames, adjust daylight and golden hour sun angles, and inspect fine art textures from any perspective.
            </p>

            {/* Feature Pills Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-sand-200">
              <div className="flex items-center space-x-2 bg-charcoal-900/80 p-3 border border-charcoal-800">
                <Eye className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>Controlled Orbit & Zoom</span>
              </div>
              <div className="flex items-center space-x-2 bg-charcoal-900/80 p-3 border border-charcoal-800">
                <Layers className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>3 Architectural Room Styles</span>
              </div>
              <div className="flex items-center space-x-2 bg-charcoal-900/80 p-3 border border-charcoal-800">
                <Sun className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>Daylight & Sunset Lighting</span>
              </div>
              <div className="flex items-center space-x-2 bg-charcoal-900/80 p-3 border border-charcoal-800">
                <Box className="w-4 h-4 text-terracotta-400 shrink-0" />
                <span>3D Hardwood Frame Finishes</span>
              </div>
            </div>

            {/* Prominent CTA Button Required by User */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpen3DGallery}
                className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white transition-all duration-300 text-xs uppercase tracking-widest font-semibold group shadow-lg hover:shadow-xl cursor-pointer"
              >
                <Box className="w-4 h-4 mr-2" />
                <span>Explore the 3D Gallery</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-[11px] text-sand-400 font-light">
                * Zero downloads required • Smooth touch & mouse orbiting
              </span>
            </div>

          </div>

          {/* Right Visual Teaser Composition */}
          <div className="lg:col-span-6 relative">
            <div 
              onClick={onOpen3DGallery}
              className="relative aspect-[4/3] rounded-sm overflow-hidden bg-charcoal-900 border border-charcoal-800 shadow-2xl group cursor-pointer"
            >
              {/* Preview image */}
              <img
                src="/images/artwork/art-10-azure-steed.jpeg"
                alt="3D Virtual Gallery Preview"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
                loading="lazy"
              />

              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

              {/* Center Play / Enter 3D Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 rounded-full bg-ivory-50/95 text-charcoal-950 group-hover:scale-110 group-hover:bg-terracotta-500 group-hover:text-white transition-all shadow-2xl backdrop-blur-md flex items-center space-x-2 px-6">
                  <Box className="w-5 h-5 text-terracotta-600 group-hover:text-white transition-colors" />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    Launch 3D Room
                  </span>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-sand-300">
                <span className="font-serif italic">Scene: Scandinavian Living Atelier</span>
                <span className="text-[10px] uppercase tracking-wider bg-charcoal-950/80 px-2.5 py-1 text-terracotta-400 border border-charcoal-800">
                  Interactive 3D
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
