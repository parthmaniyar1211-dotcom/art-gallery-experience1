import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { X, ShieldCheck, FileText, Sparkles } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-charcoal-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-ivory-50 border border-sand-300 shadow-2xl overflow-hidden my-8 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sand-200 bg-sand-50/80">
          <div className="flex items-center space-x-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-terracotta-600" />
            ) : (
              <FileText className="w-5 h-5 text-terracotta-600" />
            )}
            <h3 className="font-serif text-xl font-medium text-charcoal-900">
              {type === 'privacy' ? 'Privacy Policy (Demo Notice)' : 'Terms & Curation Guarantee'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-charcoal-500 hover:text-charcoal-900 rounded-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>The Sketchy Wall</strong> respects your personal privacy. In this website demo prepared for <strong>{siteConfig.clientName}</strong>, any contact information entered via the enquiry form or WhatsApp CTAs is handled strictly for spatial consultation and custom quotation.
              </p>
              <h4 className="font-serif font-semibold text-charcoal-900 text-base pt-2">
                1. Data Collection in Demo Mode
              </h4>
              <p>
                No third-party trackers, pixels, or profiling scripts are active in this demo version. Inquiries submitted trigger client-side validation for demonstration purposes.
              </p>
              <h4 className="font-serif font-semibold text-charcoal-900 text-base pt-2">
                2. Direct WhatsApp Communication
              </h4>
              <p>
                When you initiate a WhatsApp conversation, your dialogue occurs directly on WhatsApp’s end-to-end encrypted messaging service with Kapil Yadav's concierge line.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>The Sketchy Wall</strong> specializes in high-standard wall art prints and handcrafted timber frames.
              </p>
              <h4 className="font-serif font-semibold text-charcoal-900 text-base pt-2">
                1. Museum-Grade Quality Guarantee
              </h4>
              <p>
                All prints are produced on 310 GSM 100% cotton rag archival paper with 12-colour aqueous pigment inks, guaranteed to retain colour density without fading for 80+ years indoors under non-direct sunlight.
              </p>
              <h4 className="font-serif font-semibold text-charcoal-900 text-base pt-2">
                2. Bespoke Hardwood Framing
              </h4>
              <p>
                Our timber frames use sustainably sourced oak and walnut woods with seamless mitred joinery and shatter-resistant optical acrylic glazing.
              </p>
              <h4 className="font-serif font-semibold text-charcoal-900 text-base pt-2">
                3. Client Concept Presentation Notice
              </h4>
              <p>
                All listed pricing and specifications are demo placeholders for client review and will be formalized upon full production launch by Kapil Yadav.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-sand-50 border-t border-sand-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-charcoal-900 text-ivory-50 text-xs uppercase tracking-widest font-semibold hover:bg-terracotta-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
