import React from 'react';
import { STORE_INFO } from '../data/warungData';
import { ArrowDown, MessageCircle } from 'lucide-react';

export default function Hero() {
  const waUrl = `https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent("Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin konsultasi pemesanan katering resmi.")}`;

  return (
    <>
      {/* Hero — let the photo be the hero, not the CSS */}
      <section className="relative min-h-[85dvh] flex items-end pt-16 pb-12 sm:pb-16 overflow-hidden">
        
        {/* Photo background — no Ken Burns, no grain, just the photo */}
        <div className="absolute inset-0">
          <img 
            src="/assets/Menu_Prasmanan_1.jpeg" 
            alt="Sajian prasmanan tradisional Bali oleh Warung PKK" 
            className="w-full h-full object-cover"
          />
          {/* Dark gradient so text reads clearly against the photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        {/* Content — aligned bottom-left, not centered */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          
          <p className="text-[13px] text-white/70 mb-3">
            Katering & Dapur Komunitas • TP PKK Desa Dauh Puri Kaja, Denpasar
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.15] max-w-2xl">
            Cita rasa otentik dapur Denpasar, diracik dengan tradisi dan kebersihan.
          </h1>

          <p className="text-[14px] sm:text-[15px] text-white/75 mt-4 max-w-lg leading-relaxed font-light">
            Nasi kotak rapat kedinasan, sajian adat upacara Bali, prasmanan hajatan, dan snack box higienis.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <a 
              href="#katalog" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1F1916] text-sm font-medium rounded-none hover:bg-[#F0EDE8] transition-colors"
            >
              Lihat Menu & Harga
              <ArrowDown className="w-4 h-4" />
            </a>
            <a 
              href={waUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white border border-white/40 rounded-none hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Quick facts strip — plain, no over-styling */}
      <div className="bg-white border-b border-[#1F1916]/8 py-6">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { label: 'Bahan Baku', value: '100% Segar Lokal' },
            { label: 'Resep', value: 'Olahan Tangan Ibu PKK' },
            { label: 'Kapasitas', value: '500+ Porsi/Hari' },
            { label: 'Area Layanan', value: 'Denpasar & Sekitar' },
          ].map(item => (
            <div key={item.label}>
              <span className="text-[11px] text-[#8D7B72] uppercase tracking-wide block">{item.label}</span>
              <span className="text-[14px] text-[#1F1916] font-medium mt-0.5 block">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
