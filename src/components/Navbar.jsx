import React, { useState } from 'react';
import { STORE_INFO } from '../data/warungData';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const waUrl = `https://api.whatsapp.com/send?phone=${STORE_INFO.phone}&text=${encodeURIComponent("Halo Admin Warung PKK Desa Dauh Puri Kaja, saya ingin konsultasi pesanan katering.")}`;

  const links = [
    { href: '#cerita', label: 'Tentang' },
    { href: '#katalog', label: 'Menu & Harga' },
    { href: '#gerai', label: 'Lokasi' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FAF7F2] border-b border-[#1F1916]/8">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        
        {/* Brand — simple text, no roundel */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-serif text-[15px] font-semibold text-[#1F1916] tracking-wide">
            Warung PKK
          </span>
          <span className="text-[10px] text-[#8D7B72] tracking-wide">
            Desa Dauh Puri Kaja
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#463A34] hover:text-[#1F1916] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 ml-2 px-4 py-2 rounded-none text-[13px] font-medium text-white bg-[#25D366] hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#1F1916]"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#1F1916]/8 px-5 pb-5 animate-slide-down">
          <nav className="flex flex-col gap-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[14px] text-[#463A34] py-2.5 border-b border-[#1F1916]/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full mt-4 py-3 rounded-none text-sm font-medium text-white bg-[#25D366]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pesan via WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
