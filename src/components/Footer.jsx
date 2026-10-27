import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { collections } from '../data/collections';
import { 
  Instagram, 
  ArrowUp, 
  MessageCircle, 
  Mail, 
  Phone, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export default function Footer({ onNavigate, onSelectCategory, onOpenLegalModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-sand-200 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-charcoal-800">
          
          {/* Brand Info & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-ivory-50 font-medium block">
                {siteConfig.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-widest-xl text-sand-400 font-sans block mt-0.5">
                Wall Art & Home Décor
              </span>
            </div>

            <p className="text-xs sm:text-sm text-sand-300/80 font-light leading-relaxed max-w-sm">
              Art that makes your space feel like you. Museum-grade archival giclée prints, handcrafted timber framing, and curated spatial inspiration for contemporary homes.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-sand-300 hover:text-white hover:border-terracotta-500 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-900 border border-charcoal-800 flex items-center justify-center text-sand-300 hover:text-emerald-400 hover:border-emerald-500 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-1 text-[11px] text-sand-400">
              Founder: <strong className="text-sand-200 font-medium">{siteConfig.clientName}</strong>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-ivory-100">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-sand-300/80 font-light">
              <li>
                <a href="#hero" onClick={(e) => { e.preventDefault(); onNavigate('#hero'); }} className="hover:text-ivory-100 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" onClick={(e) => { e.preventDefault(); onNavigate('#shop'); }} className="hover:text-ivory-100 transition-colors">
                  Shop All Works
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => { e.preventDefault(); onNavigate('#gallery'); }} className="hover:text-ivory-100 transition-colors">
                  Installations Gallery
                </a>
              </li>
              <li>
                <a href="#inspiration" onClick={(e) => { e.preventDefault(); onNavigate('#inspiration'); }} className="hover:text-ivory-100 transition-colors">
                  Room Inspiration
                </a>
              </li>
              <li>
                <a href="#room-preview" onClick={(e) => { e.preventDefault(); onNavigate('#room-preview'); }} className="text-terracotta-400 hover:text-terracotta-300 transition-colors font-medium">
                  2D Room Visualizer
                </a>
              </li>
              <li>
                <a href="#story" onClick={(e) => { e.preventDefault(); onNavigate('#story'); }} className="hover:text-ivory-100 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('#contact'); }} className="hover:text-ivory-100 transition-colors">
                  Contact & Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-ivory-100">
              Curated Collections
            </h4>
            <ul className="space-y-2 text-xs text-sand-300/80 font-light">
              {collections.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(c.id);
                      onNavigate('#shop');
                    }}
                    className="hover:text-ivory-100 transition-colors text-left"
                  >
                    {c.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-ivory-100">
              Atelier & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-sand-300/80 font-light">
              <p>
                <strong className="text-sand-100 block font-medium">WhatsApp Advisory:</strong>
                {siteConfig.contact.whatsappNumber}
              </p>
              <p>
                <strong className="text-sand-100 block font-medium">Email:</strong>
                {siteConfig.contact.email}
              </p>
              <p>
                <strong className="text-sand-100 block font-medium">Studio Atelier:</strong>
                {siteConfig.contact.studioAddress}
              </p>
              <p className="text-[11px] text-sand-400">
                Mon - Sat: 10:00 AM - 7:30 PM IST
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-400">
          
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
            </p>
            <p className="text-[11px] text-sand-500">
              Bespoke Website Concept prepared for <strong className="text-sand-300 font-medium">{siteConfig.clientName}</strong>.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-sand-200 transition-colors text-[11px]"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-sand-200 transition-colors text-[11px]"
            >
              Terms & Curation Guarantee
            </button>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-charcoal-900 border border-charcoal-800 text-sand-300 hover:text-white hover:border-sand-400 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
