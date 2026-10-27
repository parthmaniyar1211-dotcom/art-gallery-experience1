import React, { useState } from 'react';
import { visualizerRooms } from '../data/roomInspiration';
import { products } from '../data/products';
import { siteConfig } from '../data/siteConfig';
import { 
  Eye, 
  Sparkles, 
  Sliders, 
  MessageCircle, 
  Maximize, 
  Sun, 
  Moon, 
  MoveVertical,
  Check,
  ChevronDown
} from 'lucide-react';

export default function RoomPreview({ preSelectedProduct }) {
  // Active states
  const [selectedRoom, setSelectedRoom] = useState(visualizerRooms[0]);
  const [selectedArtwork, setSelectedArtwork] = useState(preSelectedProduct || products[0]);
  const [selectedFrame, setSelectedFrame] = useState(siteConfig.frameOptions[0]); // Oak
  const [artworkScale, setArtworkScale] = useState('lg'); // 'md', 'lg', 'xl'
  const [verticalOffset, setVerticalOffset] = useState(0); // -20 to +20 px
  const [lightingMode, setLightingMode] = useState('daylight'); // 'daylight' or 'evening'

  // Scale map
  const scaleStyles = {
    md: { width: '180px', smWidth: '220px', mdWidth: '260px' },
    lg: { width: '220px', smWidth: '280px', mdWidth: '330px' },
    xl: { width: '270px', smWidth: '340px', mdWidth: '400px' },
  };

  // WhatsApp inquiry for this specific configuration
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(
    `Hello Kapil Yadav / The Sketchy Wall,\n\nI just designed a room configuration in your 2D Room Visualizer:\n- Room: ${selectedRoom.name}\n- Artwork: ${selectedArtwork.name}\n- Framing: ${selectedFrame.name}\n- Scale: ${artworkScale.toUpperCase()}\n- Mood: ${lightingMode}\n\nCould you advise on exact wall mounting specifications and pricing?`
  )}`;

  return (
    <section id="room-preview" className="py-20 bg-ivory-100/90 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-terracotta-100 text-terracotta-700 text-xs uppercase tracking-widest font-semibold rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 2D Visualizer</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-medium tracking-tight">
            Preview Art On Your Wall
          </h2>
          <p className="text-xs sm:text-base text-charcoal-600 font-light leading-relaxed">
            Select a room interior, test any artwork from our collection, switch custom hardwood frames, and adjust scale in real-time.
          </p>
        </div>

        {/* Visualizer Canvas & Controls Layout */}
        <div className="bg-ivory-50 border border-sand-300 shadow-xl overflow-hidden">
          
          {/* Top Control Bar: Rooms & Lighting Mood */}
          <div className="p-4 bg-sand-100 border-b border-sand-200 flex flex-wrap items-center justify-between gap-4">
            
            {/* Room Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-700 hidden sm:inline">
                Room Setting:
              </span>
              <div className="flex items-center space-x-1.5 overflow-x-auto">
                {visualizerRooms.map((room) => {
                  const isActive = selectedRoom.id === room.id;
                  return (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room)}
                      className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all ${
                        isActive
                          ? 'bg-charcoal-900 text-ivory-50 shadow-sm'
                          : 'bg-ivory-50 text-charcoal-700 hover:bg-sand-200 border border-sand-300'
                      }`}
                    >
                      {room.name.split(' ')[0]} {room.name.split(' ')[1]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Lighting Mood Switcher & Height Control */}
            <div className="flex items-center space-x-3 text-xs">
              
              {/* Lighting */}
              <div className="flex items-center bg-ivory-50 border border-sand-300 p-0.5">
                <button
                  onClick={() => setLightingMode('daylight')}
                  className={`flex items-center space-x-1 px-2.5 py-1 text-xs transition-colors ${
                    lightingMode === 'daylight'
                      ? 'bg-charcoal-900 text-ivory-50 font-medium'
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                  title="Natural daylight ambience"
                >
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span className="hidden sm:inline">Daylight</span>
                </button>
                <button
                  onClick={() => setLightingMode('evening')}
                  className={`flex items-center space-x-1 px-2.5 py-1 text-xs transition-colors ${
                    lightingMode === 'evening'
                      ? 'bg-charcoal-900 text-ivory-50 font-medium'
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                  title="Warm evening ambient lighting"
                >
                  <Moon className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Evening</span>
                </button>
              </div>

              {/* Vertical Height Adjust */}
              <div className="hidden md:flex items-center space-x-1.5 text-charcoal-600 bg-ivory-50 border border-sand-300 px-2 py-1">
                <MoveVertical className="w-3.5 h-3.5 text-charcoal-500" />
                <span className="text-[11px] uppercase tracking-wider font-medium">Height:</span>
                <input
                  type="range"
                  min="-30"
                  max="30"
                  value={verticalOffset}
                  onChange={(e) => setVerticalOffset(Number(e.target.value))}
                  className="w-16 accent-charcoal-900 cursor-pointer"
                  title="Adjust hanging height on wall"
                />
              </div>

            </div>

          </div>

          {/* Interactive Room Visual Stage */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-sand-200 overflow-hidden select-none">
            
            {/* Room Background Image */}
            <img
              src={selectedRoom.bgImage}
              alt={selectedRoom.name}
              className={`w-full h-full object-cover object-center transition-all duration-700 ${
                lightingMode === 'evening' ? 'brightness-[0.88] sepia-[0.18]' : 'brightness-100'
              }`}
            />

            {/* Ambient Lighting Warmth Overlay for Evening */}
            {lightingMode === 'evening' && (
              <div className="absolute inset-0 bg-amber-900/10 pointer-events-none mix-blend-multiply transition-opacity duration-500" />
            )}

            {/* Wall Mounted Interactive Artwork Container */}
            <div
              className="absolute transform -translate-x-1/2 transition-all duration-300 ease-out z-10 flex items-center justify-center pointer-events-auto cursor-pointer group"
              style={{
                top: `calc(${selectedRoom.wallZone.top} + ${verticalOffset}px)`,
                left: selectedRoom.wallZone.left,
              }}
              onClick={() => {}}
            >
              {/* Framed Artwork Display */}
              <div
                className="transition-all duration-300 shadow-2xl relative"
                style={{
                  border: selectedFrame.id === 'rolled' 
                    ? '2px dashed #B8583B' 
                    : selectedFrame.previewBorder,
                  backgroundColor: '#FFFFFF',
                  padding: selectedFrame.id === 'rolled' ? '0' : '8px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 10px 20px -5px rgba(0, 0, 0, 0.3)'
                }}
              >
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.name}
                  className={`object-contain transition-all duration-300 ${
                    artworkScale === 'md' 
                      ? 'w-[120px] sm:w-[170px] md:w-[220px]' 
                      : artworkScale === 'lg'
                      ? 'w-[150px] sm:w-[220px] md:w-[280px]'
                      : 'w-[190px] sm:w-[280px] md:w-[350px]'
                  }`}
                />

                {/* Subtle glass reflection highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
              </div>

              {/* Floating Artwork Name Tag On Hover */}
              <div className="absolute -bottom-8 bg-charcoal-900/90 text-ivory-100 text-[10px] uppercase tracking-widest px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-md">
                {selectedArtwork.name} • {selectedFrame.name}
              </div>
            </div>

            {/* Room Info Tag Bottom Left */}
            <div className="absolute bottom-4 left-4 bg-charcoal-900/80 backdrop-blur-md text-ivory-50 px-3 py-1.5 text-xs">
              <span className="font-serif font-medium">{selectedRoom.name}</span>
              <span className="text-sand-300 block text-[10px]">{selectedRoom.description}</span>
            </div>

          </div>

          {/* Interactive Customization Tray Below Canvas */}
          <div className="p-6 bg-ivory-50 border-t border-sand-200 space-y-6">
            
            {/* 1. Artwork Selector Strip */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-800">
                  Step 1: Choose Artwork ({products.length} catalog options)
                </span>
                <span className="text-xs font-serif italic text-charcoal-600">
                  Active: <strong className="font-semibold text-charcoal-900">{selectedArtwork.name}</strong>
                </span>
              </div>

              {/* Horizontal Scrollable Artwork Thumbnails */}
              <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
                {products.map((item) => {
                  const isChosen = selectedArtwork.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedArtwork(item)}
                      className={`relative shrink-0 w-20 h-24 sm:w-24 sm:h-28 overflow-hidden border-2 transition-all cursor-pointer ${
                        isChosen
                          ? 'border-charcoal-900 ring-2 ring-terracotta-500 scale-102 shadow-md'
                          : 'border-sand-200 opacity-80 hover:opacity-100 hover:border-sand-400'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-charcoal-950/80 p-1 text-[9px] text-white font-medium truncate text-center">
                        {item.name}
                      </div>
                      {isChosen && (
                        <div className="absolute top-1 right-1 bg-terracotta-500 text-white rounded-full p-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Framing & Scale Controls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-sand-200 items-end">
              
              {/* Frame Style */}
              <div className="md:col-span-6 space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-800 block">
                  Step 2: Hardwood Framing Finish
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {siteConfig.frameOptions.slice(0, 4).map((frame) => {
                    const isFrameActive = selectedFrame.id === frame.id;
                    return (
                      <button
                        key={frame.id}
                        onClick={() => setSelectedFrame(frame)}
                        className={`p-2 text-left text-xs border transition-all cursor-pointer ${
                          isFrameActive
                            ? 'border-charcoal-900 bg-sand-100 font-semibold text-charcoal-900 ring-1 ring-charcoal-900'
                            : 'border-sand-200 bg-ivory-50 text-charcoal-700 hover:border-sand-300'
                        }`}
                      >
                        <div className="flex items-center space-x-1.5 mb-1">
                          <span 
                            className="w-3 h-3 rounded-full border border-black/20"
                            style={{ backgroundColor: frame.colorCode }}
                          />
                          <span className="text-[11px] truncate leading-tight">{frame.name.split(' ')[0]}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Artwork Scale */}
              <div className="md:col-span-3 space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-800 block">
                  Step 3: Wall Scale
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => setArtworkScale('md')}
                    className={`py-2 px-1 text-xs uppercase font-medium text-center border transition-all ${
                      artworkScale === 'md'
                        ? 'bg-charcoal-900 text-ivory-50 border-charcoal-900'
                        : 'bg-ivory-50 text-charcoal-700 border-sand-200 hover:bg-sand-100'
                    }`}
                  >
                    Standard
                  </button>
                  <button
                    onClick={() => setArtworkScale('lg')}
                    className={`py-2 px-1 text-xs uppercase font-medium text-center border transition-all ${
                      artworkScale === 'lg'
                        ? 'bg-charcoal-900 text-ivory-50 border-charcoal-900'
                        : 'bg-ivory-50 text-charcoal-700 border-sand-200 hover:bg-sand-100'
                    }`}
                  >
                    Large
                  </button>
                  <button
                    onClick={() => setArtworkScale('xl')}
                    className={`py-2 px-1 text-xs uppercase font-medium text-center border transition-all ${
                      artworkScale === 'xl'
                        ? 'bg-charcoal-900 text-ivory-50 border-charcoal-900'
                        : 'bg-ivory-50 text-charcoal-700 border-sand-200 hover:bg-sand-100'
                    }`}
                  >
                    Grand
                  </button>
                </div>
              </div>

              {/* Direct Enquiry for this look */}
              <div className="md:col-span-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire This Look</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
