import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import MenuGrid from './components/MenuGrid';
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
    setLightbox({ isOpen: true, imageSrc, caption });
  };

  const handleCloseLightbox = () => {
    setLightbox({ isOpen: false, imageSrc: '', caption: '' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F1916] font-sans antialiased">
      <a href="#katalog" className="skip-link">
        Lewati ke Menu
      </a>
      
      <Navbar />

      <main>
        <Hero />
        <StorySection onOpenLightbox={handleOpenLightbox} />
        <MenuGrid onOpenLightbox={handleOpenLightbox} />
        <StorefrontSection onOpenLightbox={handleOpenLightbox} />
      </main>

      <Footer />

      {/* WhatsApp floating button — simple, functional */}
      <a
        href={`https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent("Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin konsultasi pesanan katering.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-30 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:scale-[1.03] transition-all duration-200"
        title="Hubungi via WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
      </a>

      <LightboxModal
        isOpen={lightbox.isOpen}
        imageSrc={lightbox.imageSrc}
        caption={lightbox.caption}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
