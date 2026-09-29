import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import MenuGrid from './components/MenuGrid';
import StandardsSection from './components/StandardsSection';
import StorefrontSection from './components/StorefrontSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import { STORE_INFO } from './data/warungData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imageSrc: '',
    caption: ''
  });

  const handleOpenLightbox = (imageSrc, caption) => {
    setLightbox({
      isOpen: true,
      imageSrc,
      caption
    });
  };

  const handleCloseLightbox = () => {
    setLightbox({
      isOpen: false,
      imageSrc: '',
      caption: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F1916] font-sans antialiased selection:bg-[#1F1916] selection:text-[#FAF7F2]">
      
      {/* Editorial Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Atmospheric Tartine-Style Hero */}
        <Hero />

        {/* 2. Editorial Story & Community Narrative */}
        <StorySection onOpenLightbox={handleOpenLightbox} />

        {/* 3. The Visual Menu Showcase & Pricing (Core Feature) */}
        <MenuGrid onOpenLightbox={handleOpenLightbox} />

        {/* 4. Standards, Hygiene & Official Packaging */}
        <StandardsSection />

        {/* 5. Physical Storefront Spotlight & Maps */}
        <StorefrontSection onOpenLightbox={handleOpenLightbox} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href={`https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent("Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin konsultasi pesanan katering.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1F1916] text-[#FAF7F2] shadow-xl hover:bg-[#B25A34] transition-all duration-300 active:scale-95 hairline-all"
          title="Hubungi Warung PKK via WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline-block">
            Tanya Pengurus
          </span>
        </a>
      </div>

      {/* Interactive Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        imageSrc={lightbox.imageSrc}
        caption={lightbox.caption}
        onClose={handleCloseLightbox}
      />

    </div>
  );
}
