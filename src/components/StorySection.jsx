import React from 'react';
import { HIGHLIGHTS } from '../data/warungData';
import { ShieldCheck, Award, HeartHandshake } from 'lucide-react';

export default function StorySection({ onOpenLightbox }) {
  return (
    <section id="filosofi" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Tartine Style Editorial Pull-Quote */}
        <div className="text-center max-w-3xl mx-auto mb-20 pb-16 hairline-b">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#B25A34] block mb-4">
            Filosofi Dapur Kami
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1F1916] font-normal leading-relaxed italic">
            “Dari dapur gotong royong kaum ibu desa, kami merawat cita rasa rempah tradisi Bali dengan ketelitian higienitas modern untuk setiap jamuan bermakna.”
          </blockquote>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-[1px] w-10 bg-[#1F1916]/20"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#8D7B72] font-medium">
              Tim Penggerak PKK Desa Dauh Puri Kaja
            </span>
            <span className="h-[1px] w-10 bg-[#1F1916]/20"></span>
          </div>
        </div>

        {/* Asymmetric Split Layout: Story & Real Packaging Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Story & 3 Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#8D7B72] block mb-2">
                Pemberdayaan Ekonomi Desa
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1916] font-normal leading-tight">
                Sebuah Gerakan Rasa dari Tangan Perempuan Desa Dauh Puri Kaja
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#463A34] leading-relaxed font-light">
              Warung PKK Desa Dauh Puri Kaja didirikan sebagai wujud kemandirian ekonomi keluarga dan pelestarian kuliner lokal. Setiap hari, para kader PKK mengolah bahan-bahan segar pilihan menjadi hidangan yang tidak hanya lezat dan sedap dipandang, namun juga aman, bersih, dan bergizi seimbang.
            </p>

            <div className="space-y-6 pt-4">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="font-serif italic text-2xl text-[#B25A34] shrink-0 font-medium">
                    {item.number}.
                  </span>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#1F1916]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#685951] font-light mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase of Packaging Quality */}
          <div className="lg:col-span-6">
            <div 
              className="group bg-white p-3 rounded-2xl hairline-all shadow-xs cursor-pointer"
              onClick={() => onOpenLightbox('/assets/Menu_Nasi_Kotak_2.jpeg', 'Kemasan Boks Putih Bersih Berstempel Segel Resmi Warung PKK')}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F7F3EB] relative">
                <img 
                  src="/assets/Menu_Nasi_Kotak_2.jpeg" 
                  alt="Kemasan Boks Higienis Bersegel Resmi Warung PKK" 
                  className="w-full h-full object-cover object-center editorial-img-zoom"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full hairline-all text-[9px] uppercase tracking-wider font-semibold text-[#1F1916]">
                  Standar Mutu & Higienitas
                </div>
              </div>
              <div className="p-5 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#1F1916]">
                    Boks Putih Scalloped Bersegel Resmi
                  </h4>
                  <p className="text-xs text-[#8D7B72] font-light mt-0.5">
                    Ditutup stiker segel merah penjamin mutu & sanitasi pangan.
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#B25A34] bg-[#FAF7F2] px-3 py-1.5 rounded-full hairline-all shrink-0">
                  Food Grade
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
