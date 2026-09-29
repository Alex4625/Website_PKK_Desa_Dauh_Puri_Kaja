import React, { useState } from 'react';
import { CATEGORIES, MENU_ITEMS, STORE_INFO } from '../data/warungData';
import { Maximize2, MessageCircle, Sparkles } from 'lucide-react';

export default function MenuGrid({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const getWhatsAppOrderUrl = (itemName, price) => {
    const text = `Halo Admin Warung PKK Desa Dauh Puri Kaja, saya tertarik dengan menu: *${itemName}* (${price}). Mohon informasi pemesanan dan jadwal pengantaran. Terima kasih!`;
    return `https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="katalog" className="py-24 bg-[#F7F3EB] hairline-t hairline-b">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 pb-8 hairline-b">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B25A34]" />
              <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#B25A34]">
                Etalase Kuliner & Harga
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1F1916] font-normal leading-tight">
              Katalog Sajian Dapur PKK
            </h2>
            <p className="text-xs sm:text-sm text-[#685951] font-light mt-2 max-w-xl leading-relaxed">
              Dibuat segar sesuai pesanan dengan rempah autentik Bali, beralas daun pisang alami, dan standar kebersihan terjamin.
            </p>
          </div>

          {/* Category Filter Tabs (Tartine Minimalist Pills) */}
          <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar pb-1">
            {CATEGORIES.map(category => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#1F1916] text-[#FAF7F2] shadow-sm' 
                      : 'bg-white text-[#685951] hairline-all hover:text-[#1F1916] hover:bg-[#FAF7F2]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tartine Style Visual Grid (Masonry feel with generous padding & clear price tags) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-2xl hairline-all overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-500"
            >
              <div>
                {/* Photo Container with Lightbox Trigger */}
                <div 
                  className={`w-full ${item.aspect || 'aspect-square'} overflow-hidden bg-[#FAF7F2] relative cursor-pointer`}
                  onClick={() => onOpenLightbox(item.image, item.name)}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover editorial-img-zoom"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#1F1916]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#1F1916] text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                      <Maximize2 className="w-3 h-3" />
                      <span>Perbesar Foto</span>
                    </span>
                  </div>

                  {/* Badge Pill */}
                  {item.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-semibold tracking-widest uppercase bg-white/95 backdrop-blur-xs text-[#1F1916] hairline-all shadow-2xs">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Content Section: Name, Price, Description, Ingredients */}
                <div className="p-6">
                  {/* Header: Title and Price in Serif */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1F1916] leading-snug group-hover:text-[#B25A34] transition-colors duration-200">
                      {item.name}
                    </h3>
                  </div>

                  {/* Price Tag (Prominent & Clear) */}
                  <div className="mb-3">
                    <span className="font-serif text-xl sm:text-2xl font-semibold text-[#B25A34]">
                      {item.price}
                    </span>
                    {item.unit && (
                      <span className="text-[11px] text-[#8D7B72] font-light ml-1.5">
                        / {item.unit}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#685951] font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Composition / Ingredients Pills */}
                  {item.composition && item.composition.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 hairline-t">
                      {item.composition.map((comp, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] px-2.5 py-1 rounded-md bg-[#FAF7F2] text-[#463A34] font-medium hairline-all"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Strip: Order via WhatsApp */}
              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppOrderUrl(item.name, item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#1F1916] hairline-all hover:bg-[#1F1916] hover:text-[#FAF7F2] transition-colors duration-300"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Pesan Menu Ini</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Note for Custom Orders / Large Gatherings */}
        <div className="mt-16 p-8 rounded-2xl bg-white hairline-all text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B25A34] font-bold block mb-1">
            Pesanan Khusus & Katering Dinas
          </span>
          <h4 className="font-serif text-2xl text-[#1F1916] font-normal">
            Membutuhkan Paket Khusus atau Penyesuaian Anggaran?
          </h4>
          <p className="text-xs sm:text-sm text-[#685951] font-light mt-2 max-w-xl mx-auto leading-relaxed">
            Kami siap menyesuaikan kombinasi lauk, wadah kemasan, dan jumlah porsi sesuai alokasi anggaran instansi atau kebutuhan prosesi adat Anda.
          </p>
          <div className="mt-5">
            <a
              href={`https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent("Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin konsultasi paket katering khusus / penyesuaian menu.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#1F1916] hover:bg-[#B25A34] transition duration-300 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Konsultasi Paket Khusus via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
