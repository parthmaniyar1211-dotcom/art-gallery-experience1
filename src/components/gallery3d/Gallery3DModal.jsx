import React, { useState, useEffect } from 'react';
import { products } from '../../data/products';
import { siteConfig } from '../../data/siteConfig';
import { isWebGLAvailable } from '../../utils/webgl';
import GalleryCanvas from './GalleryCanvas';
import { 
  X, 
  ArrowLeft, 
  RotateCcw, 
  Eye, 
  Sun, 
  Moon, 
  Sunrise, 
  MessageCircle, 
  Sparkles, 
  Check, 
  ChevronRight,
  Sliders,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

export default function Gallery3DModal({
  isOpen,
  onClose,
  initialArtworkId,
  onOpenProductModal
}) {
  if (!isOpen) return null;

  // Selected state
  const [selectedArtwork, setSelectedArtwork] = useState(() => {
    return products.find((p) => p.id === initialArtworkId) || products[0];
  });
  const [roomStyle, setRoomStyle] = useState('scandinavian'); // 'scandinavian' | 'loft' | 'terracotta'
  const [lightingMood, setLightingMood] = useState('daylight'); // 'daylight' | 'golden' | 'evening'
  const [frameFinish, setFrameFinish] = useState('oak'); // 'oak' | 'black' | 'walnut' | 'brass'
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const webglSupported = isWebGLAvailable();

  // Hide hint after 4.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  // Fake short loading transition for smoothness
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Update selected artwork when initialArtworkId prop changes
  useEffect(() => {
    if (initialArtworkId) {
      const found = products.find((p) => p.id === initialArtworkId);
      if (found) setSelectedArtwork(found);
    }
  }, [initialArtworkId]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Frame options
  const frameOptions = [
    { id: 'oak', label: 'Nordic Oak', color: '#C29F6F' },
    { id: 'black', label: 'Matte Charcoal', color: '#1B1917' },
    { id: 'walnut', label: 'Dark Walnut', color: '#3E2413' },
    { id: 'brass', label: 'Brushed Brass', color: '#C9A55C' },
  ];

  // Room styles
  const roomStyles = [
    { id: 'scandinavian', label: 'Scandinavian Ivory' },
    { id: 'loft', label: 'Loft Concrete' },
    { id: 'terracotta', label: 'Terracotta Atelier' },
  ];

  // WhatsApp link
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappClean}?text=${encodeURIComponent(
    `Hello Kapil Yadav / The Sketchy Wall,\n\nI was exploring your 3D Art Gallery and I love:\n- Artwork: ${selectedArtwork.name}\n- Category: ${selectedArtwork.category}\n- Chosen Frame: ${frameOptions.find(f => f.id === frameFinish)?.label}\n- Room Setting: ${roomStyles.find(r => r.id === roomStyle)?.label}\n- Demo Price: ₹${selectedArtwork.demoPrice.toLocaleString('en-IN')}\n\nCould you please advise on availability and custom wall sizing?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 bg-charcoal-950 flex flex-col overflow-hidden animate-fade-in select-none">
      
      {/* 1. TOP CONTROL BAR */}
      <div className="relative z-20 bg-charcoal-950/85 backdrop-blur-md border-b border-charcoal-800 px-4 sm:px-6 py-3 flex items-center justify-between text-xs text-ivory-100">
        
        {/* Brand & Mode Title */}
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
          <div>
            <span className="font-serif text-base sm:text-lg font-medium text-white tracking-wide">
              {siteConfig.brandName}
            </span>
            <span className="hidden md:inline-block ml-2 text-[10px] uppercase tracking-widest text-sand-400 font-sans">
              Interactive 3D Virtual Gallery
            </span>
          </div>
        </div>

        {/* Center Room & Lighting Toggles (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          
          {/* Room Style Pills */}
          <div className="flex items-center bg-charcoal-900 border border-charcoal-800 p-0.5 rounded-sm">
            {roomStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setRoomStyle(style.id)}
                className={`px-3 py-1 text-[11px] uppercase tracking-wider font-medium transition-all ${
                  roomStyle === style.id
                    ? 'bg-ivory-50 text-charcoal-900 shadow-sm'
                    : 'text-sand-300 hover:text-white'
                }`}
              >
                {style.label.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Lighting Mode Selector */}
          <div className="flex items-center bg-charcoal-900 border border-charcoal-800 p-0.5 rounded-sm text-sand-300">
            <button
              onClick={() => setLightingMood('daylight')}
              className={`p-1.5 transition-colors ${
                lightingMood === 'daylight' ? 'bg-charcoal-800 text-amber-300' : 'hover:text-white'
              }`}
              title="Natural Daylight"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLightingMood('golden')}
              className={`p-1.5 transition-colors ${
                lightingMood === 'golden' ? 'bg-charcoal-800 text-amber-500' : 'hover:text-white'
              }`}
              title="Golden Hour Sunset"
            >
              <Sunrise className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLightingMood('evening')}
              className={`p-1.5 transition-colors ${
                lightingMood === 'evening' ? 'bg-charcoal-800 text-blue-300' : 'hover:text-white'
              }`}
              title="Evening Ambient Lamps"
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Focus Artwork Button */}
          <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider border transition-all ${
              isFocusMode
                ? 'bg-terracotta-500 border-terracotta-500 text-white'
                : 'bg-charcoal-900 border-charcoal-800 text-sand-200 hover:bg-charcoal-800'
            }`}
            title="Smooth zoom directly to artwork"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isFocusMode ? 'Normal View' : 'Focus Artwork'}</span>
          </button>

          {/* Reset Camera View */}
          <button
            onClick={() => {
              setIsFocusMode(false);
              setResetTrigger((prev) => prev + 1);
            }}
            className="p-1.5 sm:px-2.5 sm:py-1.5 bg-charcoal-900 border border-charcoal-800 text-sand-300 hover:text-white hover:bg-charcoal-800 transition-colors"
            title="Reset camera orbit"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Return to 2D Website Button (Prominent & Clear) */}
          <button
            onClick={onClose}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-ivory-50 text-charcoal-900 hover:bg-terracotta-600 hover:text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Website</span>
          </button>

        </div>

      </div>

      {/* 2. 3D CANVAS STAGE OR FALLBACK */}
      <div className="relative flex-1 w-full h-full overflow-hidden">
        
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 z-30 bg-charcoal-950 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-2 border-sand-400 border-t-terracotta-500 rounded-full animate-spin" />
            <div className="text-center space-y-1">
              <span className="font-serif text-lg text-ivory-100 font-medium block">
                Loading 3D Art Gallery...
              </span>
              <span className="text-[11px] uppercase tracking-widest text-sand-400 font-sans">
                Rendering Architectural Room & Textures
              </span>
            </div>
          </div>
        )}

        {/* WebGL Not Supported Fallback */}
        {!webglSupported ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-sand-100 text-charcoal-900 space-y-4">
            <AlertTriangle className="w-12 h-12 text-terracotta-600" />
            <h3 className="font-serif text-2xl font-semibold">
              WebGL Hardware Acceleration Not Detected
            </h3>
            <p className="max-w-md text-xs text-charcoal-600 leading-relaxed">
              Your browser or hardware currently has WebGL disabled. You can still preview all artworks in our high-resolution 2D Room Visualizer.
            </p>
            <div className="p-4 bg-white border border-sand-300 shadow-lg max-w-sm">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.name}
                className="max-h-64 object-contain mx-auto"
              />
              <p className="font-serif font-medium mt-2">{selectedArtwork.name}</p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-charcoal-900 text-white text-xs uppercase tracking-widest font-semibold"
            >
              Back to 2D Gallery
            </button>
          </div>
        ) : (
          /* Real 3D R3F Canvas */
          <GalleryCanvas
            selectedArtwork={selectedArtwork}
            roomStyle={roomStyle}
            lightingMood={lightingMood}
            frameFinish={frameFinish}
            isFocusMode={isFocusMode}
            resetTrigger={resetTrigger}
            onToggleFocus={() => setIsFocusMode(!isFocusMode)}
          />
        )}

        {/* Interaction Hint Overlay (fades out) */}
        {showHint && webglSupported && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-charcoal-900/90 text-ivory-100 text-xs px-4 py-2 border border-charcoal-700 backdrop-blur-md shadow-2xl animate-fade-in flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Drag to orbit camera • Pinch/scroll to zoom • Click artwork to focus</span>
          </div>
        )}

        {/* Mobile Room & Lighting Quick Switcher Floating Button Bar */}
        <div className="lg:hidden absolute top-3 left-3 z-20 flex flex-col space-y-1.5">
          <div className="flex space-x-1 bg-charcoal-900/80 backdrop-blur-md p-1 border border-charcoal-800">
            {roomStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setRoomStyle(style.id)}
                className={`px-2 py-1 text-[10px] uppercase font-medium ${
                  roomStyle === style.id ? 'bg-ivory-50 text-charcoal-900' : 'text-sand-300'
                }`}
              >
                {style.label.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* 3. BOTTOM CONTROL TRAY & ARTWORK CAROUSEL */}
      <div className="relative z-20 bg-charcoal-950/90 backdrop-blur-md border-t border-charcoal-800 p-4 sm:p-5 space-y-3.5">
        
        {/* Top Info Row: Active Artwork Specs + Frame Picker + WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          
          {/* Active Artwork Details */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-12 bg-charcoal-800 border border-charcoal-700 overflow-hidden shrink-0">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-serif text-base sm:text-lg text-white font-medium">
                  {selectedArtwork.name}
                </h4>
                <span className="text-[10px] uppercase tracking-wider text-terracotta-400 font-medium">
                  • {selectedArtwork.category}
                </span>
              </div>
              <p className="text-[11px] text-sand-400 font-light">
                Demo Quote: <strong className="text-white">₹{selectedArtwork.demoPrice.toLocaleString('en-IN')}</strong> (Framed)
              </p>
            </div>
          </div>

          {/* Hardwood Framing Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-[11px] uppercase tracking-wider text-sand-400 hidden md:inline">
              3D Frame Finish:
            </span>
            <div className="flex items-center space-x-1.5 bg-charcoal-900 border border-charcoal-800 p-1">
              {frameOptions.map((frame) => {
                const isActive = frameFinish === frame.id;
                return (
                  <button
                    key={frame.id}
                    onClick={() => setFrameFinish(frame.id)}
                    className={`flex items-center space-x-1.5 px-2.5 py-1 text-[11px] transition-all ${
                      isActive
                        ? 'bg-ivory-50 text-charcoal-900 font-semibold'
                        : 'text-sand-300 hover:text-white'
                    }`}
                  >
                    <span 
                      className="w-2.5 h-2.5 rounded-full border border-black/30"
                      style={{ backgroundColor: frame.color }}
                    />
                    <span>{frame.label.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* WhatsApp Direct Inquiry for this 3D Look */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </a>

        </div>

        {/* Artwork Thumbnail Carousel Strip */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-widest text-sand-400 font-medium">
              Select Artwork from Collection ({products.length} Works):
            </span>
            <span className="text-[10px] text-sand-400 font-mono hidden sm:inline">
              Click thumbnail to swap on wall
            </span>
          </div>

          <div className="flex items-center space-x-2.5 overflow-x-auto pb-1 scrollbar-none">
            {products.map((item) => {
              const isSelected = selectedArtwork.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedArtwork(item);
                  }}
                  className={`relative shrink-0 w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-terracotta-500 ring-2 ring-terracotta-500 scale-102 shadow-lg'
                      : 'border-charcoal-800 opacity-70 hover:opacity-100 hover:border-sand-400'
                  }`}
                  title={`${item.name} (${item.category})`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-charcoal-950/90 px-1 py-0.5 text-[9px] text-white font-medium truncate text-center">
                    {item.name}
                  </div>
                  {isSelected && (
                    <div className="absolute top-1 right-1 bg-terracotta-500 text-white rounded-full p-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
