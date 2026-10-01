import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ isOpen, imageSrc, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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
      role="dialog"
      aria-modal="true"
      aria-label={caption || 'Pratinjau foto'}
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="max-w-3xl w-full bg-white rounded-none overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-none bg-white/90 flex items-center justify-center text-[#1F1916] hover:bg-white transition-colors"
          aria-label="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        <img 
          src={imageSrc} 
          alt={caption || 'Dokumentasi Warung PKK'}
          className="w-full max-h-[75vh] object-contain bg-[#F3EFE9]"
        />

        {caption && (
          <div className="px-4 py-3">
            <p className="text-[14px] font-medium text-[#1F1916]">{caption}</p>
            <p className="text-[11px] text-[#8D7B72] mt-0.5">
              Dokumentasi asli — Warung PKK Desa Dauh Puri Kaja
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
