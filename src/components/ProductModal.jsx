import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { 
  X, 
  MessageCircle, 
  Bookmark, 
  Check, 
  Eye, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  Maximize2,
  Info,
  Box
} from 'lucide-react';

export default function ProductModal({
  product,
  onClose,
  onToggleInquiry,
  isShortlisted,
  onOpenRoomPreviewWithArt,
  onOpen3DGalleryWithArt
}) {
  if (!product) return null;

  // Selected options state
  const [selectedSize, setSelectedSize] = useState(siteConfig.sizeOptions[1]); // A2 by default
  const [selectedFrame, setSelectedFrame] = useState(siteConfig.frameOptions[0]); // Oak by default
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('art'); // 'art' or 'lifestyle'
  const [inquirySent, setInquirySent] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Calculate dynamic demo price based on size base and frame multiplier
  const calculatedPrice = Math.round(selectedSize.priceBase * selectedFrame.priceMultiplier * quantity);

  // Generate WhatsApp inquiry text
  const whatsappMessage = encodeURIComponent(
    `Hello Kapil Yadav / The Sketchy Wall,\n\nI am interested in enquiring about:\n- Artwork: ${product.name}\n- Category: ${product.category}\n- Chosen Size: ${selectedSize.name} (${selectedSize.dimensions})\n- Chosen Frame: ${selectedFrame.name}\n- Quantity: ${quantity}\n- Demo Quote: ₹${calculatedPrice.toLocaleString('en-IN')}\n\nCould you please share availability and delivery timeline?`
  );

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappClean}?text=${whatsappMessage}`;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-ivory-50 border border-sand-300 shadow-2xl overflow-hidden my-6 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-sand-200 bg-sand-50/80">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-terracotta-500"></span>
            <span className="text-xs uppercase tracking-widest text-charcoal-600 font-medium">
              Artwork Curation Details
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-charcoal-500 hover:text-charcoal-900 hover:bg-sand-200 rounded-sm transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          
          {/* Left Column: Interactive Artwork & Frame Visualizer */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Main Interactive Artwork Frame Box */}
            <div className="relative bg-[#F4F1EA] p-6 sm:p-8 rounded-sm flex items-center justify-center min-h-[360px] sm:min-h-[440px] border border-sand-200">
              
              {/* Dynamic Frame Wrapper */}
              <div 
                className="relative transition-all duration-300 max-w-[85%] max-h-[380px] shadow-2xl flex items-center justify-center"
                style={{
                  border: selectedFrame.id === 'rolled' 
                    ? '2px dashed #9C8C74' 
                    : selectedFrame.previewBorder,
                  backgroundColor: '#FFFFFF',
                  padding: selectedFrame.id === 'rolled' ? '0' : '12px'
                }}
              >
                <img
                  src={activeTab === 'lifestyle' && product.lifestyleImage ? product.lifestyleImage : product.image}
                  alt={product.name}
                  className="max-h-[340px] w-auto object-contain transition-all duration-500"
                />

                {/* Inner white matte border for framed looks */}
                {selectedFrame.id !== 'rolled' && (
                  <div className="absolute inset-1 border border-sand-200 pointer-events-none" />
                )}
              </div>

              {/* View Angle Switcher */}
              {product.lifestyleImage && (
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <button
                    onClick={() => setActiveTab('art')}
                    className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-medium transition-all ${
                      activeTab === 'art'
                        ? 'bg-charcoal-900 text-ivory-50 shadow-sm'
                        : 'bg-ivory-50/90 text-charcoal-700 hover:bg-white border border-sand-200'
                    }`}
                  >
                    Art Focus
                  </button>
                  <button
                    onClick={() => setActiveTab('lifestyle')}
                    className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-medium transition-all ${
                      activeTab === 'lifestyle'
                        ? 'bg-charcoal-900 text-ivory-50 shadow-sm'
                        : 'bg-ivory-50/90 text-charcoal-700 hover:bg-white border border-sand-200'
                    }`}
                  >
                    In Room View
                  </button>
                </div>
              )}

              {/* 3D & 2D Room Preview Shortcuts */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpen3DGalleryWithArt(product.id);
                  }}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-charcoal-900 text-white text-[11px] font-semibold tracking-wide shadow-md hover:bg-terracotta-600 transition-colors cursor-pointer"
                  title="View this artwork mounted inside the 3D room"
                >
                  <Box className="w-3.5 h-3.5 text-terracotta-400" />
                  <span>View in 3D</span>
                </button>
                
                <button
                  onClick={() => {
                    onClose();
                    onOpenRoomPreviewWithArt(product);
                  }}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-ivory-50/90 hover:bg-white border border-sand-200 text-charcoal-900 text-[11px] font-medium tracking-wide shadow-sm transition-colors cursor-pointer"
                  title="Preview this artwork on a 2D wall"
                >
                  <Eye className="w-3.5 h-3.5 text-terracotta-600" />
                  <span>2D Wall</span>
                </button>
              </div>
            </div>

            {/* Selected Frame Description Note */}
            <div className="p-3 bg-sand-100/70 border border-sand-200 text-xs text-charcoal-700 flex items-start space-x-2">
              <Info className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-charcoal-900">{selectedFrame.name}:</strong> {selectedFrame.description}
              </div>
            </div>

            {/* Color Palette Chips */}
            {product.palette && (
              <div className="flex items-center space-x-2 pt-1">
                <span className="text-[11px] uppercase tracking-widest text-charcoal-500 font-sans">
                  Harmonizing Tones:
                </span>
                <div className="flex items-center space-x-1.5">
                  {product.palette.map((color, idx) => (
                    <span
                      key={idx}
                      className="w-4 h-4 rounded-full border border-charcoal-900/10 shadow-inner"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Specifications, Frame & Size Customization, Inquiry */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              
              {/* Category & Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="text-[10px] uppercase tracking-widest bg-sand-200 px-2.5 py-0.5 text-charcoal-800 font-medium">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Title & Artist */}
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-medium">
                  {product.name}
                </h2>
                <p className="text-xs text-charcoal-500 mt-1 font-serif italic">
                  Curated by {product.artist}
                </p>
                {product.roomSetting && (
                  <div className="mt-2 text-[11px] text-terracotta-700 bg-terracotta-50 border border-terracotta-200/60 px-2.5 py-1 inline-block">
                    Styled in: <strong>{product.roomSetting}</strong>
                  </div>
                )}
              </div>

              {/* Demo Price Calculation */}
              <div className="p-4 bg-sand-50 border border-sand-200">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-charcoal-500 block">
                      Estimated Demo Price
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal-900">
                      ₹{calculatedPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-terracotta-600 uppercase font-medium block">
                      Demo Curation Placeholder
                    </span>
                    <span className="text-[11px] text-charcoal-500">
                      Incl. Archival Print & {selectedFrame.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                {product.description}
              </p>

              {/* 1. Size Options */}
              <div className="space-y-2 pt-2 border-t border-sand-200">
                <label className="text-xs uppercase tracking-wider font-semibold text-charcoal-800 flex justify-between">
                  <span>1. Select Artwork Dimensions</span>
                  <span className="text-[11px] font-normal text-charcoal-500">{selectedSize.dimensions}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {siteConfig.sizeOptions.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`p-2.5 text-left text-xs border transition-all cursor-pointer ${
                        selectedSize.id === size.id
                          ? 'border-charcoal-900 bg-sand-100 font-medium text-charcoal-900 ring-1 ring-charcoal-900'
                          : 'border-sand-200 bg-ivory-50 text-charcoal-700 hover:border-sand-300'
                      }`}
                    >
                      <div className="font-semibold text-charcoal-900">{size.name}</div>
                      <div className="text-[10px] text-charcoal-500">{size.dimensions}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Framing Options */}
              <div className="space-y-2 pt-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-charcoal-800 flex justify-between">
                  <span>2. Select Framing Finish</span>
                  <span className="text-[11px] font-normal text-charcoal-500">{selectedFrame.name}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {siteConfig.frameOptions.map((frame) => (
                    <button
                      key={frame.id}
                      onClick={() => setSelectedFrame(frame)}
                      className={`p-2 text-left text-xs border transition-all cursor-pointer flex flex-col justify-between ${
                        selectedFrame.id === frame.id
                          ? 'border-charcoal-900 bg-sand-100 font-medium text-charcoal-900 ring-1 ring-charcoal-900'
                          : 'border-sand-200 bg-ivory-50 text-charcoal-700 hover:border-sand-300'
                      }`}
                    >
                      <div className="flex items-center space-x-1.5 mb-1">
                        <span 
                          className="w-3 h-3 rounded-full border border-black/20"
                          style={{ backgroundColor: frame.colorCode }}
                        />
                        <span className="text-[11px] font-medium leading-tight">{frame.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Quantity */}
              <div className="flex items-center space-x-4 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-800">
                  Quantity:
                </span>
                <div className="flex items-center border border-sand-300 bg-ivory-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-charcoal-600 hover:bg-sand-100 text-sm"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-semibold text-charcoal-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-charcoal-600 hover:bg-sand-100 text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Actions: WhatsApp Enquiry & Shortlist */}
            <div className="pt-4 border-t border-sand-200 space-y-3">
              
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                {/* Primary WhatsApp Enquiry CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-8 flex items-center justify-center space-x-2 py-3.5 px-6 bg-charcoal-900 hover:bg-olive-700 text-ivory-50 text-xs uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enquire on WhatsApp</span>
                </a>

                {/* Add to Shortlist / Inquiry Drawer */}
                <button
                  type="button"
                  onClick={() => onToggleInquiry({
                    ...product,
                    selectedSize,
                    selectedFrame,
                    calculatedPrice,
                    quantity
                  })}
                  className={`sm:col-span-4 flex items-center justify-center space-x-1.5 py-3.5 px-4 text-xs uppercase tracking-wider font-medium border transition-colors cursor-pointer ${
                    isShortlisted
                      ? 'bg-terracotta-500 text-white border-terracotta-500'
                      : 'bg-sand-100 border-sand-300 text-charcoal-900 hover:bg-sand-200'
                  }`}
                >
                  {isShortlisted ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Shortlisted</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>Save Art</span>
                    </>
                  )}
                </button>
              </div>

              {/* Client Demo Disclaimer */}
              <p className="text-[11px] text-charcoal-400 text-center font-light">
                Direct client advisory for Kapil Yadav. No automated payment taken on demo.
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
