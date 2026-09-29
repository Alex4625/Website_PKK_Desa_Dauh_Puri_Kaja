import React from 'react';
import { STORE_INFO } from '../data/warungData';
import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react';

export default function StorefrontSection({ onOpenLightbox }) {
  return (
    <section id="gerai" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-14">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B25A34] block mb-2">
            Gerai Fisik & Kunjungan
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1F1916] font-normal leading-tight">
            Fasilitas Gerai & Dapur Resmi
          </h2>
          <p className="text-xs sm:text-sm text-[#685951] font-light mt-2 max-w-xl leading-relaxed">
            Berlokasi di pusat desa dengan fasilitas gedung representatif berarsitektur khas Bali, siap melayani koordinasi teknis katering kantor maupun pengambilan langsung.
          </p>
        </div>

        {/* 2-Column Showcase: Building Facade Photo & Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Real Storefront Facade Photo */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-2xl hairline-all overflow-hidden shadow-xs">
            <div 
              className="aspect-[16/11] w-full overflow-hidden bg-[#F7F3EB] relative cursor-pointer group"
              onClick={() => onOpenLightbox('/assets/Foto_Depan_Warung.jpeg', 'Gedung Resmi Gerai Warung PKK Desa Dauh Puri Kaja')}
            >
              <img 
                src="/assets/Foto_Depan_Warung.jpeg" 
                alt="Gedung Gerai Warung PKK Desa Dauh Puri Kaja" 
                className="w-full h-full object-cover object-center editorial-img-zoom"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full hairline-all text-[10px] uppercase tracking-widest font-semibold text-[#1F1916] shadow-2xs">
                Fasad Gedung Resmi
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-serif text-2xl font-medium text-[#1F1916]">
                Gedung Operasional TP PKK Desa Dauh Puri Kaja
              </h3>
              <p className="text-xs sm:text-sm text-[#685951] font-light mt-2 leading-relaxed">
                Bangunan berarsitektur bata merah khas Bali yang tertata rapi, difungsikan sebagai pusat kegiatan kemandirian kuliner warga, pelatihan tata boga, serta dapur pengolahan katering berstandar higienis tinggi.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Info Cards & Google Maps */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white p-8 rounded-2xl hairline-all shadow-xs space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F2] hairline-all flex items-center justify-center text-[#B25A34] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1F1916]">
                    Alamat Gerai & Dapur
                  </h4>
                  <p className="text-xs sm:text-sm text-[#685951] font-light mt-1 leading-relaxed">
                    {STORE_INFO.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F2] hairline-all flex items-center justify-center text-[#B25A34] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1F1916]">
                    Jam Pelayanan
                  </h4>
                  <p className="text-xs sm:text-sm text-[#685951] font-light mt-1 leading-relaxed">
                    {STORE_INFO.hoursWeekday}
                  </p>
                  <p className="text-[11px] text-[#8D7B72] italic mt-0.5">
                    {STORE_INFO.hoursWeekend}
                  </p>
                </div>
              </div>

              {/* Phone & Direct Consultation */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#FAF7F2] hairline-all flex items-center justify-center text-[#B25A34] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#1F1916]">
                    Hotline Informasi & Pesanan
                  </h4>
                  <p className="text-xs sm:text-sm text-[#685951] font-medium mt-1">
                    {STORE_INFO.phoneDisplay} <span className="font-light text-[#8D7B72]">(Pengurus Warung PKK)</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 hairline-t flex flex-col sm:flex-row gap-3">
                <a
                  href={STORE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#1F1916] hairline-all hover:bg-[#FAF7F2] transition"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B25A34]" />
                  <span>Petunjuk Arah Maps</span>
                </a>

                <a
                  href={`https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent("Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin berkonsultasi mengenai pesanan katering.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#1F1916] hover:bg-[#B25A34] transition shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Admin</span>
                </a>
              </div>

            </div>

            {/* Google Maps Embed Frame */}
            <div className="rounded-2xl overflow-hidden hairline-all shadow-xs bg-[#EFE8DC] h-56 relative">
              <iframe
                title="Peta Lokasi Desa Dauh Puri Kaja Denpasar"
                src={STORE_INFO.mapsEmbed}
                className="w-full h-full border-0 filter contrast-[0.96]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
