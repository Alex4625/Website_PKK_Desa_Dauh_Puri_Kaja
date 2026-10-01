import React from 'react';
import { STORE_INFO } from '../data/warungData';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1F1916] text-white py-14">
      <div className="max-w-6xl mx-auto px-5">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          
          {/* Identity */}
          <div>
            <p className="font-serif text-lg font-medium">Warung PKK</p>
            <p className="text-[12px] text-white/50 mt-1">Desa Dauh Puri Kaja, Kec. Denpasar Utara</p>
            <p className="text-[13px] text-white/65 mt-3 leading-relaxed max-w-xs">
              Inisiatif kemandirian kuliner binaan Tim Penggerak PKK. Merawat tradisi rasa Bali dalam standar kebersihan modern.
            </p>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[13px] font-semibold text-white/80">Jam Pelayanan</p>
            <p className="text-[13px] text-white/60 mt-1.5">{STORE_INFO.hoursWeekday}</p>
            <p className="text-[12px] text-white/45 mt-1">{STORE_INFO.hoursWeekend}</p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[13px] font-semibold text-white/80">Kontak</p>
            <p className="text-[13px] text-white/60 mt-1.5">{STORE_INFO.phoneDisplay}</p>
            <div className="flex items-center gap-3 mt-3">
              <a 
                href={STORE_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[13px] text-white/50 hover:text-white transition-colors"
                title="Instagram"
              >
                Instagram
              </a>
              <span className="text-white/20">•</span>
              <a 
                href={`https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent("Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin bertanya seputar katering.")}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[13px] text-white/50 hover:text-white transition-colors"
                title="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-white/35">
          <p>&copy; {new Date().getFullYear()} TP PKK Desa Dauh Puri Kaja, Denpasar.</p>
          <p>Kemandirian Kuliner • Pelestarian Tradisi</p>
        </div>

      </div>
    </footer>
  );
}
