import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { 
  Search, 
  Bookmark, 
  Menu, 
  X, 
  ArrowUpRight, 
  MessageCircle,
  Eye,
  SlidersHorizontal,
  Box
} from 'lucide-react';

export default function Header({
  activeSection,
  onNavigate,
  onOpenSearch,
  onOpenInquiryBag,
  inquiryCount,
  onOpenRoomPreview,
  onOpen3DGallery
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Shop All", href: "#shop" },
    { name: "Collections", href: "#collections" },
    { name: "Gallery", href: "#gallery" },
    { name: "3D Gallery", href: "#gallery-3d", is3D: true },
    { name: "Room Inspiration", href: "#inspiration" },
    { name: "2D Visualizer", href: "#room-preview", highlight: true },
    { name: "Our Story", href: "#story" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-ivory-50/95 backdrop-blur-md shadow-sm border-b border-sand-200/80 py-3.5' 
            : 'bg-ivory-50/80 backdrop-blur-sm border-b border-sand-200/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Mobile Menu Trigger & Search */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-charcoal-800 hover:text-terracotta-600 focus:outline-none focus:ring-2 focus:ring-terracotta-500 rounded-md transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 text-charcoal-700 hover:text-terracotta-600 focus:outline-none rounded-md transition-colors"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Brand Wordmark */}
            <div className="flex items-center">
              <a
                href="#hero"
                onClick={(e) => handleLinkClick(e, '#hero')}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left focus:outline-none"
              >
                <span className="font-serif text-2xl sm:text-3xl tracking-tight text-charcoal-900 group-hover:text-terracotta-600 transition-colors font-medium">
                  {siteConfig.brandName}
                </span>
                <span className="text-[10px] uppercase tracking-widest-xl text-charcoal-500 -mt-0.5 font-sans font-medium">
                  Wall Art & Home Décor
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm tracking-wide transition-colors relative py-1 ${
                    link.highlight
                      ? 'text-terracotta-600 font-medium hover:text-terracotta-700 flex items-center gap-1.5'
                      : 'text-charcoal-700 hover:text-charcoal-950 font-normal'
                  } ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-charcoal-950 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-terracotta-500'
                      : ''
                  }`}
                >
                  {link.highlight && (
                    <Eye className="w-3.5 h-3.5 text-terracotta-500 inline" />
                  )}
                  {link.is3D && (
                    <Box className="w-3.5 h-3.5 text-terracotta-600 inline" />
                  )}
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Desktop Search Icon */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="hidden lg:flex items-center space-x-2 text-charcoal-600 hover:text-charcoal-950 px-3 py-1.5 rounded-full hover:bg-sand-100/70 transition-colors border border-transparent hover:border-sand-200"
                aria-label="Search artworks"
              >
                <Search className="w-4 h-4 text-charcoal-500" />
                <span className="text-xs text-charcoal-500 tracking-wide">Search art...</span>
                <kbd className="text-[10px] font-mono bg-ivory-200 text-charcoal-500 px-1.5 py-0.5 rounded border border-sand-200">
                  /
                </kbd>
              </button>

              {/* 3D Gallery Launcher Button */}
              <button
                type="button"
                onClick={onOpen3DGallery}
                className="hidden xl:inline-flex items-center space-x-1.5 px-3 py-2 bg-sand-100 hover:bg-terracotta-600 hover:text-white text-charcoal-900 border border-sand-300 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer group shadow-sm"
                title="Enter Interactive 3D Virtual Atelier"
              >
                <Box className="w-3.5 h-3.5 text-terracotta-600 group-hover:text-white transition-colors" />
                <span>3D Gallery</span>
              </button>

              {/* Functional Saved Artworks / Inquiry Bag Button */}
              <button
                type="button"
                onClick={onOpenInquiryBag}
                className="relative p-2.5 text-charcoal-800 hover:text-terracotta-600 hover:bg-sand-100/80 rounded-full transition-all focus:outline-none"
                title="Curated Inquiry List (Shortlisted Artworks)"
                aria-label="Open curated inquiry list"
              >
                <Bookmark className="w-5 h-5" />
                {inquiryCount > 0 && (
                  <span className="absolute top-1 right-1 bg-terracotta-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-fade-in shadow-sm">
                    {inquiryCount}
                  </span>
                )}
              </button>

              {/* Primary Header CTA */}
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, '#shop')}
                className="hidden sm:inline-flex items-center space-x-1.5 bg-charcoal-900 text-ivory-50 hover:bg-charcoal-800 px-4 py-2.5 rounded-none text-xs uppercase tracking-widest font-medium transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Collection</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-ivory-50 shadow-2xl flex flex-col z-10 border-r border-sand-200">
            <div className="p-6 border-b border-sand-200 flex items-center justify-between">
              <div>
                <span className="font-serif text-xl tracking-tight text-charcoal-900 font-semibold block">
                  {siteConfig.brandName}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-charcoal-500">
                  Client Concept Demo
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-charcoal-500 hover:text-charcoal-900 rounded-md"
                aria-label="Close mobile menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block py-2.5 text-base font-serif tracking-wide border-b border-sand-100 ${
                      link.highlight
                        ? 'text-terracotta-600 font-medium'
                        : 'text-charcoal-800 hover:text-terracotta-600'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="pt-4 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenInquiryBag();
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 bg-sand-100 text-charcoal-800 rounded-none text-xs uppercase tracking-wider font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-terracotta-500" />
                    Shortlist & Inquiry List
                  </span>
                  <span className="bg-charcoal-900 text-ivory-100 px-2 py-0.5 text-[10px] rounded-full">
                    {inquiryCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpen3DGallery();
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-charcoal-900 text-white rounded-none text-xs uppercase tracking-widest font-semibold hover:bg-terracotta-600 transition-colors shadow-md"
                >
                  <Box className="w-4 h-4 text-terracotta-400" />
                  <span>Explore 3D Virtual Gallery</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenRoomPreview();
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-terracotta-500 text-white rounded-none text-xs uppercase tracking-widest font-medium hover:bg-terracotta-600 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Try 2D Room Preview</span>
                </button>
              </div>

              {/* Contact info in mobile drawer */}
              <div className="pt-6 text-xs text-charcoal-600 space-y-2 border-t border-sand-200">
                <p className="font-medium text-charcoal-900">Direct Client Inquiries:</p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Hello%20Kapil%20Yadav,%20I%20am%20exploring%20The%20Sketchy%20Wall%20website%20demo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-olive-700 font-medium hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {siteConfig.contact.whatsappNumber}</span>
                </a>
                <p className="text-[11px] text-charcoal-500">
                  {siteConfig.contact.email}
                </p>
              </div>
            </div>

            <div className="p-4 bg-sand-50 border-t border-sand-200 text-center text-[11px] text-charcoal-500">
              Demo Concept for <span className="font-medium text-charcoal-800">{siteConfig.clientName}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
