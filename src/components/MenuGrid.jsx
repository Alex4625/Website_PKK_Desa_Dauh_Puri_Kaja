import React, { useState } from 'react';
import { CATEGORIES, MENU_ITEMS, STORE_INFO } from '../data/warungData';
import { Maximize2, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

/* ── Compact image carousel for cards with multiple photos ── */
function CardCarousel({ images, name, onOpenLightbox }) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = images.length > 1;

  const goPrev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goNext = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="relative cursor-pointer group"
      onClick={() => onOpenLightbox(images[current], name)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenLightbox(images[current], name);
        }
      }}
      aria-label={`Perbesar foto ${name}`}
    >
      <img
        src={images[current]}
        alt={`${name} — foto ${current + 1}`}
        className="w-full aspect-[4/3] object-cover"
        loading="lazy"
      />

      {/* Enlarge hint on hover */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-none text-[12px] font-medium text-[#1F1916]">
          <Maximize2 className="w-3.5 h-3.5" />
          Perbesar
        </span>
      </div>

      {/* Prev / Next arrows — only when multiple images */}
      {hasMultiple && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-none bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-sm z-10"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-4 h-4 text-[#1F1916]" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-none bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-sm z-10"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="w-4 h-4 text-[#1F1916]" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {hasMultiple && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
              className={`w-2.5 h-1.5 rounded-none transition-colors ${
                idx === current ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Foto ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Photo counter badge */}
      {hasMultiple && (
        <span className="absolute top-3 right-3 px-2 py-0.5 bg-black/50 text-white text-[11px] font-medium rounded-none z-10">
          {current + 1}/{images.length}
        </span>
      )}
    </div>
  );
}

/* ── Main menu grid ── */
export default function MenuGrid({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const getWhatsAppOrderUrl = (itemName, price) => {
    const text = `Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin memesan menu: *${itemName}* (${price}). Mohon informasi jadwal dan ketersediaan. Terima kasih!`;
    return `https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="katalog" className="py-20 bg-[#F3EFE9] border-t border-b border-[#1F1916]/8">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1F1916] leading-tight">
              Menu & Daftar Harga
            </h2>
            <p className="text-[14px] text-[#463A34] mt-2 max-w-lg leading-relaxed">
              Dibuat segar sesuai pesanan. Semua harga per porsi, minimal order bervariasi per kategori.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-none text-[13px] transition-colors ${
                  activeCategory === cat.id 
                    ? 'bg-[#1F1916] text-white' 
                    : 'bg-white text-[#463A34] border border-[#1F1916]/10 hover:border-[#1F1916]/25'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu grid — 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-none border border-[#1F1916]/8 overflow-hidden flex flex-col"
            >
              {/* Photo area — carousel if multiple images, plain img if single */}
              <div className="relative">
                <CardCarousel
                  images={item.images}
                  name={item.name}
                  onOpenLightbox={onOpenLightbox}
                />

                {/* Tag */}
                {item.tag && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-[11px] font-medium text-[#1F1916] rounded-none z-10">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[16px] font-semibold text-[#1F1916] leading-snug">
                    {item.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-1.5 mb-4">
                    <div className="flex items-baseline flex-wrap gap-x-1.5">
                      <span className="text-[18px] font-bold text-[#B25A34]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                        {item.price}
                      </span>
                      {item.unit && (
                        item.unit.toLowerCase().startsWith('per') ? (
                          <span className="text-[12px] text-[#685951]">/ {item.unit}</span>
                        ) : (
                          <span className="text-[12px] text-[#685951]">
                            ({item.unit})
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Order CTA */}
                <a
                  href={getWhatsAppOrderUrl(item.name, item.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-none text-[13px] font-medium text-white bg-[#25D366] hover:bg-[#20BD5A] transition-colors mt-auto"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
