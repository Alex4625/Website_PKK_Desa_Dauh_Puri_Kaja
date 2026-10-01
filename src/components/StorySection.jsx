import React from 'react';
import { HIGHLIGHTS } from '../data/warungData';

export default function StorySection({ onOpenLightbox }) {
  return (
    <section id="cerita" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Quote — no blockquote theater, just a big readable quote */}
        <div className="max-w-3xl mx-auto text-center mb-16 pb-14 border-b border-[#1F1916]/8">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1F1916] leading-relaxed italic">
            "Dari ketulusan dapur gotong royong kaum ibu desa, kami menghadirkan hidangan tradisi yang bersih, jujur, dan berkelas untuk setiap pertemuan bermakna."
          </p>
          <p className="text-[13px] text-[#8D7B72] mt-5">
            — Tim Penggerak PKK Desa Dauh Puri Kaja
          </p>
        </div>

        {/* Two-column: story + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left: narrative and highlights */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1F1916] leading-snug">
              Cerita dari Dapur Mandiri Perempuan Desa
            </h2>

            <p className="text-[14px] text-[#463A34] leading-relaxed mt-4 max-w-[55ch]">
              Warung PKK Desa Dauh Puri Kaja didirikan sebagai wujud kemandirian ekonomi keluarga dan pelestarian kuliner lokal. Setiap hari, para kader PKK mengolah bahan segar pilihan menjadi hidangan yang lezat, aman, dan bergizi seimbang.
            </p>

            <div className="mt-8 space-y-5">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="font-serif text-xl text-[#B25A34] font-medium shrink-0 mt-0.5">
                    {item.number}.
                  </span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#1F1916]">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#685951] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: packaging photo — clickable, simple frame */}
          <div 
            role="button"
            tabIndex={0}
            className="cursor-pointer rounded-none overflow-hidden border border-[#1F1916]/8 hover:border-[#1F1916]/20 transition-colors"
            onClick={() => onOpenLightbox('/assets/Menu_Nasi_Kotak_2.jpeg', 'Kemasan boks bersegel resmi Warung PKK')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenLightbox('/assets/Menu_Nasi_Kotak_2.jpeg', 'Kemasan boks bersegel resmi Warung PKK');
              }
            }}
            aria-label="Perbesar foto kemasan boks bersegel"
          >
            <img 
              src="/assets/Menu_Nasi_Kotak_2.jpeg" 
              alt="Kemasan boks putih bersegel resmi Warung PKK" 
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="px-4 py-3 bg-white">
              <p className="text-[14px] font-medium text-[#1F1916]">
                Kemasan bersegel resmi
              </p>
              <p className="text-[12px] text-[#685951] mt-0.5">
                Setiap boks ditutup stiker segel merah penjamin sanitasi pangan.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
