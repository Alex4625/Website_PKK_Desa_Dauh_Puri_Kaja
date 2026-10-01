import React from 'react';
import { STORE_INFO } from '../data/warungData';
import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react';

export default function StorefrontSection({ onOpenLightbox }) {
  const waUrl = `https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent("Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin berkonsultasi mengenai pesanan katering.")}`;

  return (
    <section id="gerai" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-5">
        
        <div className="mb-12">
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1F1916] leading-tight">
            Lokasi & Kontak
          </h2>
          <p className="text-[14px] text-[#463A34] mt-2 max-w-lg leading-relaxed">
            Berlokasi di pusat desa, siap melayani koordinasi katering dan pengambilan langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left: storefront photo */}
          <div 
            role="button"
            tabIndex={0}
            className="rounded-none overflow-hidden border border-[#1F1916]/8 cursor-pointer hover:border-[#1F1916]/20 transition-colors"
            onClick={() => onOpenLightbox('/assets/Foto_Depan_Warung.jpeg', 'Gedung Gerai Warung PKK Desa Dauh Puri Kaja')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenLightbox('/assets/Foto_Depan_Warung.jpeg', 'Gedung Gerai Warung PKK Desa Dauh Puri Kaja');
              }
            }}
            aria-label="Perbesar foto gedung gerai"
          >
            <img 
              src="/assets/Foto_Depan_Warung.jpeg" 
              alt="Gedung Gerai Warung PKK" 
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-[14px] font-medium text-[#1F1916]">
                Gedung TP PKK Desa Dauh Puri Kaja
              </p>
              <p className="text-[12px] text-[#685951] mt-0.5">
                Arsitektur bata merah Bali, berfungsi sebagai pusat dapur dan pelatihan tata boga.
              </p>
            </div>
          </div>

          {/* Right: contact info + map */}
          <div className="flex flex-col gap-4">
            
            <div className="bg-white rounded-none border border-[#1F1916]/8 p-5 sm:p-6 space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B25A34] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-semibold text-[#1F1916]">Alamat</p>
                  <p className="text-[13px] text-[#463A34] mt-0.5">{STORE_INFO.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#B25A34] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-semibold text-[#1F1916]">Jam Pelayanan</p>
                  <p className="text-[13px] text-[#463A34] mt-0.5">{STORE_INFO.hoursWeekday}</p>
                  <p className="text-[12px] text-[#685951] italic mt-0.5">{STORE_INFO.hoursWeekend}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B25A34] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-semibold text-[#1F1916]">Telepon & WhatsApp</p>
                  <p className="text-[13px] text-[#463A34] mt-0.5">{STORE_INFO.phoneDisplay}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-[#1F1916]/6 flex flex-col sm:flex-row gap-3">
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-none text-[13px] font-medium text-[#1F1916] border border-[#1F1916]/15 hover:bg-[#FAF7F2] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Buka di Maps / Petunjuk Arah
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-none text-[13px] font-medium text-white bg-[#25D366] hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-none overflow-hidden border border-[#1F1916]/8 bg-white flex flex-col">
              <div className="h-52 w-full relative">
                <iframe
                  title="Lokasi Warung PKK Desa Dauh Puri Kaja"
                  src={STORE_INFO.mapsEmbed}
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                />
              </div>
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 bg-white border-t border-[#1F1916]/8 hover:bg-[#FAF7F2] text-[13px] text-[#1F1916] font-medium transition-colors"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B25A34]" />
                  Buka Lokasi di Google Maps
                </span>
                <span className="text-[12px] text-[#685951] font-normal">
                  Buka Tab Baru ↗
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
