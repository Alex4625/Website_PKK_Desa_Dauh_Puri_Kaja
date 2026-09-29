import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ isOpen, imageSrc, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#14100E]/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden p-2 hairline-all shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm hairline-all flex items-center justify-center text-[#1F1916] hover:bg-[#1F1916] hover:text-[#FAF7F2] transition shadow-sm"
          aria-label="Tutup Pratinjau Foto"
        >
          <X className="w-4 h-4" />
        </button>

        {/* High Res Image */}
        <div className="aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#F7F3EB] flex items-center justify-center">
          <img 
            src={imageSrc} 
            alt={caption || 'Dokumentasi Warung PKK'}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Caption */}
        <div className="p-4 text-center">
          <p className="font-serif text-lg sm:text-xl text-[#1F1916] italic font-medium">
            {caption}
          </p>
          <span className="text-[10px] uppercase tracking-wider text-[#8D7B72] mt-0.5 block">
            Dokumentasi Asli — Warung PKK Desa Dauh Puri Kaja
          </span>
        </div>
      </div>
    </div>
  );
}
