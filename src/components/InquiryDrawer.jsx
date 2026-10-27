import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { 
  X, 
  Trash2, 
  MessageCircle, 
  ArrowRight, 
  Bookmark, 
  Sparkles,
  ExternalLink,
  Send
} from 'lucide-react';

export default function InquiryDrawer({
  isOpen,
  onClose,
  inquiryList,
  onRemoveItem,
  onClearAll,
  onQuickView,
  onProceedToForm
}) {
  if (!isOpen) return null;

  // Calculate total demo quote
  const totalEstimatedPrice = inquiryList.reduce((sum, item) => {
    return sum + (item.calculatedPrice || item.demoPrice || 0);
  }, 0);

  // Compile WhatsApp message with all shortlisted items
  const compiledItemsText = inquiryList
    .map((item, idx) => {
      const sizeText = item.selectedSize ? `${item.selectedSize.name} (${item.selectedSize.dimensions})` : 'A2 Living (42x60cm)';
      const frameText = item.selectedFrame ? item.selectedFrame.name : 'Natural Oak';
      const priceText = item.calculatedPrice || item.demoPrice;
      return `${idx + 1}. ${item.name}\n   - Size: ${sizeText}\n   - Frame: ${frameText}\n   - Est: ₹${priceText.toLocaleString('en-IN')}`;
    })
    .join('\n\n');

  const fullWhatsAppMessage = encodeURIComponent(
    `Hello Kapil Yadav / The Sketchy Wall,\n\nI have shortlisted ${inquiryList.length} artwork(s) from your collection:\n\n${compiledItemsText}\n\nEstimated Total: ₹${totalEstimatedPrice.toLocaleString('en-IN')}\n\nCould you please advise on lead time, custom wall placement, and shipping?`
  );

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappClean}?text=${fullWhatsAppMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-ivory-50 shadow-2xl flex flex-col z-10 border-l border-sand-300">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-sand-200 bg-sand-50/90 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Bookmark className="w-5 h-5 text-terracotta-600" />
            <div>
              <h3 className="font-serif text-xl font-medium text-charcoal-900">
                Curated Inquiry List
              </h3>
              <span className="text-[11px] text-charcoal-500 uppercase tracking-wider block">
                {inquiryList.length} {inquiryList.length === 1 ? 'Artwork' : 'Artworks'} Shortlisted
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-charcoal-400 hover:text-charcoal-900 hover:bg-sand-200 rounded-sm transition-colors"
            aria-label="Close inquiry drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {inquiryList.length > 0 ? (
            <>
              <div className="divide-y divide-sand-200">
                {inquiryList.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="py-4 flex gap-4">
                    {/* Thumbnail */}
                    <div 
                      onClick={() => {
                        onClose();
                        onQuickView(item.id);
                      }}
                      className="w-16 h-20 bg-sand-200 overflow-hidden shrink-0 border border-sand-300 cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 
                            onClick={() => {
                              onClose();
                              onQuickView(item.id);
                            }}
                            className="font-serif text-base font-medium text-charcoal-900 hover:text-terracotta-600 cursor-pointer"
                          >
                            {item.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-charcoal-400 hover:text-red-600 transition-colors p-1"
                            title="Remove artwork"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-[11px] text-charcoal-500 space-y-0.5 mt-0.5">
                          <p>Size: {item.selectedSize ? item.selectedSize.name : 'A2 Living (42x60cm)'}</p>
                          <p>Frame: {item.selectedFrame ? item.selectedFrame.name : 'Natural Nordic Oak'}</p>
                        </div>
                      </div>

                      <div className="font-serif font-semibold text-charcoal-900 text-sm mt-2">
                        ₹{(item.calculatedPrice || item.demoPrice).toLocaleString('en-IN')}
                        <span className="text-[10px] text-charcoal-400 font-sans font-normal ml-1">Demo Quote</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear all link */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={onClearAll}
                  className="text-xs text-charcoal-500 hover:text-charcoal-900 underline underline-offset-4"
                >
                  Clear all items
                </button>
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-sand-100 mx-auto flex items-center justify-center text-charcoal-400">
                <Bookmark className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-xl font-medium text-charcoal-900">
                  Your Shortlist is Empty
                </h4>
                <p className="text-xs text-charcoal-500 font-light max-w-xs mx-auto">
                  Click the bookmark icon on any artwork to save pieces for customized WhatsApp consultation.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-charcoal-900 text-ivory-50 text-xs uppercase tracking-widest font-semibold hover:bg-terracotta-600 transition-colors"
              >
                Browse Artworks
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer with Actions */}
        {inquiryList.length > 0 && (
          <div className="p-6 bg-sand-50 border-t border-sand-200 space-y-4">
            
            {/* Total */}
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-charcoal-500 block">
                  Total Estimated Demo Quote
                </span>
                <span className="text-[11px] text-charcoal-400">
                  Includes museum framing & fine art prints
                </span>
              </div>
              <span className="font-serif text-2xl font-bold text-charcoal-900">
                ₹{totalEstimatedPrice.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Action 1: Direct WhatsApp send with entire compiled list */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire All on WhatsApp ({inquiryList.length})</span>
            </a>

            {/* Action 2: Go to Enquiry Form */}
            <button
              onClick={() => {
                onClose();
                onProceedToForm();
              }}
              className="w-full flex items-center justify-center space-x-1.5 py-3 px-4 bg-charcoal-900 hover:bg-charcoal-800 text-ivory-50 text-xs uppercase tracking-wider font-medium transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Fill Online Enquiry Form</span>
            </button>

            <p className="text-[10px] text-charcoal-400 text-center font-light">
              This list serves as a direct inquiry builder for Kapil Yadav. No automated payment is processed in this demo.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
