import React from 'react';
import { ShieldCheck, Utensils, FileText, Check } from 'lucide-react';

export default function StandardsSection() {
  const standards = [
    {
      icon: ShieldCheck,
      title: "Segel Resmi Penjamin Mutu",
      desc: "Setiap boks ditutup stiker segel merah Warung PKK. Kemasan belum pernah dibuka sejak keluar dari dapur pengolahan."
    },
    {
      icon: Utensils,
      title: "Pemisahan Kompartemen & Sambal Cup",
      desc: "Lauk basah, gorengan, kerupuk, sayur, dan sambal dipisah dalam sekat khusus agar rasa dan tekstur tetap prima."
    },
    {
      icon: FileText,
      title: "Administrasi & SPJ Kedinasan",
      desc: "Kelengkapan nota resmi, cap basah, dan faktur untuk pelaporan keuangan instansi, BUMDes, dan dinas daerah."
    }
  ];

  const guarantees = [
    "Bahan baku segar dari pasar lokal Denpasar",
    "Dimasak pada hari yang sama",
    "Kemasan food-grade tahan panas bersegel",
    "Faktur dan stempel dinas lengkap untuk SPJ"
  ];

  return (
    <section id="standar" className="py-20 bg-[#FAF7F2] border-b border-[#1F1916]/8">
      <div className="max-w-6xl mx-auto px-5">
        
        <div className="mb-14">
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1F1916] leading-tight">
            Standar Kemasan & Mutu
          </h2>
          <p className="text-[14px] text-[#463A34] mt-2 max-w-xl leading-relaxed">
            Kepastian mutu untuk panitia rapat, instansi kedinasan, dan upacara keluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: guarantee panel */}
          <div className="lg:col-span-5 bg-white rounded-lg border border-[#1F1916]/8 p-6 sm:p-8">
            <ShieldCheck className="w-8 h-8 text-[#B25A34] mb-5" />
            
            <h3 className="font-serif text-xl sm:text-2xl text-[#1F1916] leading-snug">
              Jaminan untuk Penyelenggara Acara
            </h3>

            <p className="text-[13px] text-[#685951] mt-3 leading-relaxed">
              Konsumsi adalah wajah kesuksesan acara. Dapur PKK memastikan ketepatan waktu, cita rasa hangat, dan kebersihan prima.
            </p>

            <ul className="mt-6 pt-5 border-t border-[#1F1916]/6 space-y-3">
              {guarantees.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#463A34]">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-[#1F1916]/6 text-[12px] text-[#8D7B72]">
              TP PKK Desa Dauh Puri Kaja • 100% Halal & Higienis
            </div>
          </div>

          {/* Right: standards cards */}
          <div className="lg:col-span-7 space-y-4">
            {standards.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-lg border border-[#1F1916]/8 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-md bg-[#FAF7F2] border border-[#1F1916]/8 flex items-center justify-center text-[#B25A34] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-[#1F1916]">
                      {std.title}
                    </h4>
                    <p className="text-[13px] text-[#463A34] leading-relaxed mt-1">
                      {std.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
