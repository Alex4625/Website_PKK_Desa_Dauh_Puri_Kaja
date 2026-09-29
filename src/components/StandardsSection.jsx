import React from 'react';
import { ShieldCheck, Utensils, FileText, CheckCircle2 } from 'lucide-react';

export default function StandardsSection() {
  const standards = [
    {
      icon: ShieldCheck,
      title: "Segel Resmi Penjamin Mutu",
      desc: "Setiap boks dan wadah konsumsi ditutup stiker segel merah Warung PKK yang memastikan kemasan belum pernah dibuka sejak keluar dari dapur pengolahan."
    },
    {
      icon: Utensils,
      title: "Pemisahan Kompartemen & Sambal Cup",
      desc: "Lauk basah, gorengan renyah, kerupuk, sayur, dan sambal dipisah dalam sekat khusus agar kerenyahan dan cita rasa masing-masing hidangan tetap prima."
    },
    {
      icon: FileText,
      title: "Dukungan Administrasi & SPJ Kedinasan",
      desc: "Memenuhi kebutuhan pelaporan keuangan instansi pemerintah desa, BUMDes, dinas daerah, dan sekolah dengan kelengkapan nota resmi dan cap basah."
    }
  ];

  return (
    <section id="standar-mutu" className="py-20 bg-[#FAF7F2] hairline-b">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#B25A34] block mb-2">
            Jaminan Mutu & Higienitas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1916] font-normal">
            Standar Pengemasan Bersih untuk Setiap Pertemuan
          </h2>
          <p className="text-xs sm:text-sm text-[#685951] font-light mt-2 leading-relaxed">
            Menghadirkan kenyamanan bagi panitia rapat, instansi kedinasan, maupun upakara keluarga dengan protokol sanitasi pangan ketat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl hairline-all shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] hairline-all flex items-center justify-center text-[#B25A34] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1F1916] mb-2">
                    {std.title}
                  </h3>
                  <p className="text-xs text-[#685951] font-light leading-relaxed">
                    {std.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-6 pt-4 hairline-t text-[11px] text-[#8D7B72] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Terstandarisasi Dapur PKK</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
