import React, { useState } from 'react';
import { STORE_INFO } from '../data/warungData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getWhatsAppUrl = (text = "Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin konsultasi pesanan katering") => {
    return `https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent(text)}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md hairline-b transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Monogram & Official Village Tag */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-full hairline-all flex items-center justify-center bg-white text-[#1F1916] group-hover:bg-[#1F1916] group-hover:text-[#FAF7F2] transition-colors duration-300 shadow-xs">
            <span className="font-serif text-sm font-semibold tracking-wide">PKK</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base tracking-[0.2em] uppercase font-semibold text-[#1F1916] leading-none">
              WARUNG PKK
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8D7B72] font-medium mt-1">
              Desa Dauh Puri Kaja · Denpasar
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#463A34]">
          <a href="#filosofi" className="hover:text-[#B25A34] transition-colors duration-200">Filosofi</a>
          <a href="#katalog" className="hover:text-[#B25A34] transition-colors duration-200">Katalog & Harga</a>
          <a href="#standar-mutu" className="hover:text-[#B25A34] transition-colors duration-200">Standar Mutu</a>
          <a href="#gerai" className="hover:text-[#B25A34] transition-colors duration-200">Gerai & Lokasi</a>
        </nav>

        {/* CTA Button: Direct WhatsApp Order Link */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href={getWhatsAppUrl()}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#1F1916] hover:bg-[#B25A34] transition duration-300 shadow-sm active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Hubungi Pengurus</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#1F1916] hover:bg-[#EFE8DC]/50 transition"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] hairline-b px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-xs uppercase tracking-[0.18em] font-semibold text-[#463A34]">
            <a 
              href="#filosofi" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B25A34] transition"
            >
              Filosofi Dapur
            </a>
            <a 
              href="#katalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B25A34] transition"
            >
              Katalog & Harga
            </a>
            <a 
              href="#standar-mutu" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B25A34] transition"
            >
              Standar Mutu
            </a>
            <a 
              href="#gerai" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B25A34] transition"
            >
              Gerai & Lokasi
            </a>
          </nav>
          
          <div className="pt-3 hairline-t">
            <a 
              href={getWhatsAppUrl()}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#1F1916] hover:bg-[#B25A34] transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Pengurus via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
