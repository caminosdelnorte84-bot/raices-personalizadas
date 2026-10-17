import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  items: PortfolioItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [zoomScale, setZoomScale] = useState(1);
  const activeItem = items[currentIndex];

  useEffect(() => {
    setZoomScale(1);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
      if (e.key === '+' || e.key === '=') setZoomScale((s) => Math.min(3, s + 0.5));
      if (e.key === '-') setZoomScale((s) => Math.max(1, s - 0.5));
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !activeItem) return null;

  const handleNext = () => onNavigate((currentIndex + 1) % items.length);
  const handlePrev = () => onNavigate((currentIndex - 1 + items.length) % items.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 transition-all duration-300"
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto z-20 pb-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FACC15] bg-[#FACC15]/10 px-3 py-1 rounded-full border border-[#FACC15]/30">
            Foto {currentIndex + 1} de {items.length}
          </span>
          <h3 className="text-white font-extrabold text-sm sm:text-base hidden sm:inline-block">
            {activeItem.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoomScale((s) => Math.max(1, s - 0.5))}
            className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
            title="Alejar zoom (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-gray-300 px-2 min-w-[50px] text-center">
            {Math.round(zoomScale * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoomScale((s) => Math.min(3, s + 0.5))}
            className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
            title="Acercar zoom (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setZoomScale(1)}
            className="px-3 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-bold transition-colors flex items-center gap-1"
            title="Restablecer zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 ml-2 rounded-xl bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white flex items-center justify-center transition-all"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center overflow-hidden my-auto rounded-2xl bg-[#080C10]/80 border border-gray-800/80">
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3 sm:left-5 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-[#FACC15] hover:text-black text-white flex items-center justify-center shadow-xl border border-gray-700 transition-all transform hover:scale-110"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          onClick={() => setZoomScale((s) => (s > 1 ? 1 : 2))}
          className="w-full h-full flex items-center justify-center overflow-hidden cursor-zoom-in p-2 select-none"
        >
          <img
            src={activeItem.imageUrl}
            alt={activeItem.title}
            referrerPolicy="no-referrer"
            className="max-h-[68vh] max-w-full object-contain rounded-xl transition-transform duration-200 select-none shadow-2xl"
            style={{ transform: `scale(${zoomScale})` }}
          />
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-3 sm:right-5 z-20 w-12 h-12 rounded-full bg-black/70 hover:bg-[#FACC15] hover:text-black text-white flex items-center justify-center shadow-xl border border-gray-700 transition-all transform hover:scale-110"
          aria-label="Foto siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info & Action Bar */}
      <div className="w-full max-w-6xl mx-auto z-20 pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800/80">
        <div className="text-center sm:text-left space-y-1">
          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
            <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#FACC15] text-black">
              {activeItem.badge}
            </span>
            <span className="text-white font-bold text-sm">{activeItem.title}</span>
            {activeItem.client && (
              <span className="text-xs text-sky-400 font-semibold">• {activeItem.client}</span>
            )}
            {activeItem.units && (
              <span className="text-xs font-mono text-yellow-400">({activeItem.units})</span>
            )}
          </div>
          <p className="text-xs text-gray-300 mt-1 max-w-xl">{activeItem.description}</p>
          {activeItem.specs && activeItem.specs.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1 justify-center sm:justify-start">
              {activeItem.specs.map((sp, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-900 text-gray-300 border border-gray-700"
                >
                  {sp}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/5492216268594?text=${encodeURIComponent(
              `¡Hola Raíces Personalizaciones! Me interesa información sobre este acabado: ${activeItem.title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-emerald-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Preguntar por este estilo</span>
          </a>
        </div>
      </div>
    </div>
  );
};
