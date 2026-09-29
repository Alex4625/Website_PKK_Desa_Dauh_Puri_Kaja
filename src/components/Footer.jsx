import React from 'react';
import { STORE_INFO } from '../data/warungData';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white hairline-t py-16 text-[#1F1916]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 hairline-b">
          
          {/* Column 1: Identity & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full hairline-all flex items-center justify-center font-serif text-xs font-semibold text-[#1F1916]">
                PKK
              </div>
              <span className="font-serif text-base tracking-[0.2em] uppercase font-semibold text-[#1F1916]">
                WARUNG PKK
              </span>
            </div>
            <p className="text-xs text-[#685951] font-light leading-relaxed max-w-sm">
              Inisiatif kemandirian dan pemberdayaan kuliner binaan Tim Penggerak PKK Desa Dauh Puri Kaja, Kecamatan Denpasar Utara. Merawat warisan rasa tradisi Bali dalam standar kebersihan dan keanggunan modern.
            </p>
          </div>

          {/* Column 2: Hours & Service */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8D7B72] font-semibold block">
              Jam Pelayanan
            </span>
            <p className="text-xs text-[#463A34] font-medium">
              {STORE_INFO.hoursWeekday}
            </p>
            <p className="text-xs text-[#8D7B72] font-light">
              {STORE_INFO.hoursWeekend}
            </p>
            <p className="text-[11px] text-[#685951] pt-1">
              Melayani katering rapat dinas, prasmanan acara, dan pesanan upacara adat.
            </p>
          </div>

          {/* Column 3: Communication & Social */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8D7B72] font-semibold block">
              Komunikasi & Sosial Media
            </span>
            <div className="flex items-center gap-3 pt-1">
              <a 
                href={STORE_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full hairline-all flex items-center justify-center text-[#685951] hover:text-[#1F1916] hover:bg-[#FAF7F2] transition"
                title="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href={`https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent("Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin bertanya seputar katering.")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full hairline-all flex items-center justify-center text-[#685951] hover:text-[#1F1916] hover:bg-[#FAF7F2] transition"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#8D7B72] font-light">
                {STORE_INFO.instagram}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8D7B72] font-light">
          <p>&copy; {new Date().getFullYear()} TP PKK Desa Dauh Puri Kaja, Denpasar. Seluruh Hak Cipta Dilindungi.</p>
          <p className="tracking-wide">Estetika Editorial Terinspirasi Tartine Bakery</p>
        </div>

      </div>
    </footer>
  );
}
