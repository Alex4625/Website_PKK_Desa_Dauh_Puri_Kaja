import React from 'react';
import { STORE_INFO } from '../data/warungData';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';

export default function Hero() {
  const getWhatsAppUrl = () => {
    const text = "Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin konsultasi pemesanan katering.";
    return `https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#1F1916] text-[#FAF7F2]">
      
      {/* Background Hero Image with Tartine-style Warm Moody Vignette */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/Menu_Prasmanan_1.jpeg" 
          alt="Jamuan Kuliner Warung PKK Desa Dauh Puri Kaja" 
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.08] scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14100E] via-[#1F1916]/40 to-[#1F1916]/75" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-24 text-center my-auto">
        
        {/* Editorial Subtitle Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#C2934D]" />
          <span className="text-[11px] uppercase tracking-[0.28em] font-medium text-[#EFE8DC]">
            Dapur Komunitas & Pemberdayaan Desa Dauh Puri Kaja
          </span>
        </div>

        {/* Large Tartine-Style Editorial Serif Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.12] tracking-tight text-[#FAF7F2] max-w-4xl mx-auto">
          Cita rasa otentik tradisi Denpasar, diracik dengan ketulusan dan higienitas modern.
        </h1>

        {/* Supporting Narrative */}
        <p className="font-sans text-sm sm:text-base text-[#C9BBA5] mt-6 max-w-2xl mx-auto leading-relaxed font-light">
          Dari paket nasi kotak rapat kedinasan, sajian sakral upacara adat Bali, buffet prasmanan hajatan, hingga snack box higienis — seluruh sajian dimasak segar oleh ibu-ibu penggerak TP PKK Desa Dauh Puri Kaja.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a 
            href="#katalog" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase text-[#1F1916] bg-[#FAF7F2] hover:bg-[#EFE8DC] transition-all duration-300 shadow-md active:scale-95"
          >
            <span>Jelajahi Katalog & Harga</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a 
            href={getWhatsAppUrl()}
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-[0.16em] uppercase text-[#FAF7F2] border border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Konsultasi Pemesanan</span>
          </a>
        </div>

      </div>

      {/* Tartine Style Editorial Metrics Strip */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full mt-12 pt-8 border-t border-white/15">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C9BBA5] font-medium">Bahan Baku</span>
            <span className="font-serif text-lg text-[#FAF7F2] italic mt-0.5 block">100% Segar Lokal</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C9BBA5] font-medium">Resep Tradisi</span>
            <span className="font-serif text-lg text-[#FAF7F2] italic mt-0.5 block">Olahan Tangan PKK</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C9BBA5] font-medium">Kapasitas Produksi</span>
            <span className="font-serif text-lg text-[#FAF7F2] italic mt-0.5 block">Hingga 500+ Porsi/Hari</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C9BBA5] font-medium">Layanan Katering</span>
            <span className="font-serif text-lg text-[#FAF7F2] italic mt-0.5 block">Denpasar & Sekitarnya</span>
          </div>
        </div>
      </div>

    </section>
  );
}
