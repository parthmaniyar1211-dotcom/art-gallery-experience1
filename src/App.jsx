import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import ShopSection from './components/ShopSection';
import GallerySection from './components/GallerySection';
import Gallery3DSection from './components/gallery3d/Gallery3DSection';
import RoomInspiration from './components/RoomInspiration';

// Lazy-load 3D Gallery Modal for optimal initial page loading speed
const Gallery3DModal = React.lazy(() => import('./components/gallery3d/Gallery3DModal'));
import RoomPreview from './components/RoomPreview';
import BrandStory from './components/BrandStory';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import SearchModal from './components/SearchModal';
import InquiryDrawer from './components/InquiryDrawer';
import LegalModal from './components/LegalModal';
import ClientDemoBanner from './components/ClientDemoBanner';
import { products } from './data/products';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProductId, setActiveModalProductId] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);
  const [roomPreviewProduct, setRoomPreviewProduct] = useState(null);

  // 3D Virtual Gallery State
  const [is3DGalleryOpen, setIs3DGalleryOpen] = useState(false);
  const [gallery3DArtworkId, setGallery3DArtworkId] = useState('prod-01');

  const handleOpen3DGallery = (artworkId = 'prod-01') => {
    setGallery3DArtworkId(artworkId);
    setIs3DGalleryOpen(true);
  };

  // Shortlist / Curated Inquiry List (functional cart equivalent for high-end art)
  const [inquiryList, setInquiryList] = useState(() => {
    try {
      const saved = localStorage.getItem('the_sketchy_wall_inquiries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('the_sketchy_wall_inquiries', JSON.stringify(inquiryList));
    } catch (e) {
      console.warn("Storage sync failed", e);
    }
  }, [inquiryList]);

  // Track active section for header indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'collections', 'gallery-3d', 'shop', 'gallery', 'inspiration', 'room-preview', 'story', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavigate = (targetHash) => {
    const targetId = targetHash.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle Shortlist item
  const handleToggleInquiry = (productWithCustoms) => {
    setInquiryList((prev) => {
      const exists = prev.some((item) => item.id === productWithCustoms.id);
      if (exists) {
        return prev.filter((item) => item.id !== productWithCustoms.id);
      } else {
        return [...prev, productWithCustoms];
      }
    });
  };

  const handleRemoveInquiryItem = (productId) => {
    setInquiryList((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleClearInquiryList = () => {
    setInquiryList([]);
  };

  const isProductShortlisted = (productId) => {
    return inquiryList.some((item) => item.id === productId);
  };

  // Select category & scroll to shop
  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    handleNavigate('#shop');
  };

  // Open Room Visualizer with specific product
  const handleOpenRoomPreviewWithArt = (product) => {
    setRoomPreviewProduct(product);
    handleNavigate('#room-preview');
  };

  // Active product for modal
  const activeProduct = products.find((p) => p.id === activeModalProductId) || null;

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-charcoal-900 font-sans selection:bg-terracotta-500 selection:text-white">
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar onExploreClick={() => handleNavigate('#shop')} />

      {/* 2. Header & Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquiryBag={() => setIsInquiryDrawerOpen(true)}
        inquiryCount={inquiryList.length}
        onOpenRoomPreview={() => handleNavigate('#room-preview')}
        onOpen3DGallery={() => handleOpen3DGallery('prod-01')}
      />

      {/* 3. Main Content Sections */}
      <main className="flex-1">
        
        {/* A. Hero Section */}
        <Hero
          onExploreClick={() => handleNavigate('#shop')}
          onPreviewClick={() => handleNavigate('#room-preview')}
          onQuickView={(id) => setActiveModalProductId(id)}
          onOpen3DGallery={() => handleOpen3DGallery('prod-01')}
        />

        {/* B. Featured Collections Grid */}
        <CollectionGrid
          onSelectCategory={handleSelectCategory}
        />

        {/* C. 3D Virtual Gallery Invitation Section */}
        <Gallery3DSection
          onOpen3DGallery={() => handleOpen3DGallery('prod-01')}
        />

        {/* D. Shop Artwork Section (Product Grid with Filter/Sort/Search) */}
        <ShopSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={(id) => setActiveModalProductId(id)}
          onToggleInquiry={handleToggleInquiry}
          isProductShortlisted={isProductShortlisted}
          onPreviewInRoom={handleOpenRoomPreviewWithArt}
          onOpen3DGallery={handleOpen3DGallery}
        />

        {/* D. Full Installations Gallery (All 11 Client Photographs) */}
        <GallerySection
          onQuickView={(id) => setActiveModalProductId(id)}
        />

        {/* E. Room Inspiration Section */}
        <RoomInspiration
          onSelectRoomForPreview={(roomId) => handleNavigate('#room-preview')}
        />

        {/* E. Interactive 2D Artwork-in-Room Visualizer */}
        <RoomPreview
          preSelectedProduct={roomPreviewProduct}
        />

        {/* F. Brand Story */}
        <BrandStory
          onExploreClick={() => handleNavigate('#shop')}
        />

        {/* G. Why Choose Us */}
        <WhyChooseUs />

        {/* H. Collector Testimonials (Demo Placeholder) */}
        <Testimonials />

        {/* I. Contact & Bespoke Enquiry Form */}
        <EnquiryForm />

      </main>

      {/* 4. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* 5. Interactive Modals & Drawers */}
      
      {/* Product Quick-View / Framing Modal */}
      {activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveModalProductId(null)}
          onToggleInquiry={handleToggleInquiry}
          isShortlisted={isProductShortlisted(activeProduct.id)}
          onOpenRoomPreviewWithArt={handleOpenRoomPreviewWithArt}
          onOpen3DGalleryWithArt={handleOpen3DGallery}
        />
      )}

      {/* Interactive 3D Virtual Gallery Modal */}
      {is3DGalleryOpen && (
        <React.Suspense fallback={
          <div className="fixed inset-0 z-50 bg-charcoal-950 flex items-center justify-center text-white">
            <div className="w-10 h-10 border-2 border-sand-400 border-t-terracotta-500 rounded-full animate-spin" />
          </div>
        }>
          <Gallery3DModal
            isOpen={is3DGalleryOpen}
            onClose={() => setIs3DGalleryOpen(false)}
            initialArtworkId={gallery3DArtworkId}
            onOpenProductModal={(id) => {
              setIs3DGalleryOpen(false);
              setActiveModalProductId(id);
            }}
          />
        </React.Suspense>
      )}

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(id) => setActiveModalProductId(id)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Curated Inquiry List / Shortlist Drawer */}
      <InquiryDrawer
        isOpen={isInquiryDrawerOpen}
        onClose={() => setIsInquiryDrawerOpen(false)}
        inquiryList={inquiryList}
        onRemoveItem={handleRemoveInquiryItem}
        onClearAll={handleClearInquiryList}
        onQuickView={(id) => setActiveModalProductId(id)}
        onProceedToForm={() => handleNavigate('#contact')}
      />

      {/* Legal & Guarantee Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Client Demo Navigation Helper Banner */}
      <ClientDemoBanner
        onNavigate={handleNavigate}
        onOpenRoomPreview={() => handleNavigate('#room-preview')}
        onOpen3DGallery={() => handleOpen3DGallery('prod-01')}
      />

    </div>
  );
}
