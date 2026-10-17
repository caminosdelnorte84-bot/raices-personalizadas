import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, Clock, CheckCheck, Shirt, Scissors, Coffee, ShoppingBag, Truck, Gift } from 'lucide-react';

interface FloatingWhatsAppButtonProps {
  darkMode?: boolean;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({ darkMode = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [hasPrompted, setHasPrompted] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const WHATSAPP_PHONE = '5492216268594';
  const DISPLAY_PHONE = '221 626 8594';

  // Automatically show a friendly nudge bubble after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Close popup if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || customMessage.trim() || '¡Hola Raíces Personalizaciones! Vengo de su sitio web y deseo hacer una consulta.';
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
    window.open(url, '_blank');
    setIsOpen(false);
    setCustomMessage('');
  };

  const quickInquiries = [
    { label: 'Cuadros de Aluminio (15x20 y 20x30)', icon: Sparkles, text: '¡Hola! Quisiera información y cotización sobre los cuadros de aluminio personalizados (15x20 cm y 20x30 cm).' },
    { label: 'Souvenirs (Llaveros, Imanes, Pines)', icon: Gift, text: '¡Hola! Me gustaría cotizar souvenirs personalizados (llaveros, imanes, destapadores o recordatorios).' },
    { label: 'Camisetas en DTF Textil', icon: Shirt, text: '¡Hola! Me gustaría información sobre camisetas personalizadas en DTF Textil.' },
    { label: 'Gorras Bordadas 3D', icon: Scissors, text: '¡Hola! Quisiera información sobre gorras con bordado 3D.' },
    { label: 'Vasos y Termos Térmicos', icon: Coffee, text: '¡Hola! Me interesa información sobre termos y mugs personalizados para un proyecto.' },
    { label: 'Bolsos y Tote Bags', icon: ShoppingBag, text: '¡Hola! Quisiera información sobre bolsos, tulas y tote bags personalizadas.' },
    { label: 'Envíos a Todo el País', icon: Truck, text: '¡Hola! Quisiera consultar costos y tiempos de despacho para mi localidad.' },
  ];

  return (
    <aside
      aria-label="Atención al cliente por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Mini Interactive Chat Window Popup */}
      {isOpen && (
        <div
          ref={popupRef}
          role="dialog"
          aria-labelledby="whatsapp-chat-header"
          className={`w-[90vw] max-w-[360px] sm:w-[380px] rounded-3xl shadow-2xl border mb-3 overflow-hidden transition-all duration-300 origin-bottom-right animate-in fade-in zoom-in-95 ${
            darkMode ? 'bg-[#0E1522] border-gray-700/80 text-white' : 'bg-white border-gray-200 text-gray-900'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-[#25D366] p-4 text-slate-950 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-[#FACC15] shadow-md border-2 border-white">
                  <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full" />
              </div>

              <div>
                <h3 id="whatsapp-chat-header" className="font-extrabold text-sm text-slate-950 leading-tight">
                  Raíces Personalizaciones
                </h3>
                <p className="text-[11px] font-semibold text-slate-900/80 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping inline-block" />
                  <span>En línea • Asesoría rápida</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-black/10 text-slate-950 transition-colors"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conversation Body */}
          <div
            className={`p-4 space-y-3.5 max-h-[380px] overflow-y-auto text-xs ${
              darkMode ? 'bg-[#0A0F17]' : 'bg-slate-50'
            }`}
          >
            {/* Agent Welcome Message Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                RP
              </div>
              <div
                className={`p-3.5 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border leading-relaxed ${
                  darkMode
                    ? 'bg-[#161F2E] border-gray-700/70 text-gray-200'
                    : 'bg-white border-gray-200 text-gray-800'
                }`}
              >
                <p className="font-semibold text-yellow-400 flex items-center gap-1.5 mb-1 text-[11px]">
                  <Sparkles className="w-3 h-3" />
                  <span>Taller Raíces Personalizaciones</span>
                </p>
                <p>
                  ¡Hola! 👋 ¿Tienes una idea o proyecto en mente? Escríbenos directamente y te asesoramos
                  con la mejor atención y acabados de alta calidad desde 1 unidad.
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400 pt-1 border-t border-gray-700/40">
                  <span>Asesor comercial disponible</span>
                  <span className="flex items-center gap-0.5 text-emerald-400">
                    <CheckCheck className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Options */}
            <div className="pt-1">
              <span className={`text-[10px] uppercase font-bold tracking-wider block mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Preguntas frecuentes rápidas:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {quickInquiries.map((q) => {
                  const Icon = q.icon;
                  return (
                    <button
                      key={q.label}
                      type="button"
                      onClick={() => handleSend(q.text)}
                      className={`w-full p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all text-xs font-semibold cursor-pointer ${
                        darkMode
                          ? 'bg-[#121A28] border-gray-700/80 text-gray-200 hover:border-emerald-400 hover:bg-[#162338]'
                          : 'bg-white border-gray-200 text-gray-800 hover:border-emerald-500 hover:bg-emerald-50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      <span className="truncate">{q.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Custom Message Input Footer */}
          <div className={`p-3 border-t ${darkMode ? 'bg-[#0E1522] border-gray-800' : 'bg-white border-gray-200'}`}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Escribe tu consulta aquí..."
                className={`flex-1 py-2 px-3.5 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                  darkMode
                    ? 'bg-[#080C10] border-gray-700 text-white placeholder-gray-500'
                    : 'bg-slate-50 border-gray-300 text-gray-900 placeholder-gray-400'
                }`}
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-emerald-500 text-slate-950 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shrink-0 shadow-md"
                title="Iniciar chat en WhatsApp"
              >
                <Send className="w-4 h-4 fill-slate-950" />
              </button>
            </form>

            <div className="mt-2 text-center">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola Raíces Personalizaciones! Quiero cotizar un proyecto.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-gray-400 hover:text-emerald-400 font-semibold transition-colors"
              >
                O chatea directo al <span className="font-mono text-emerald-400">{DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Prompt Notification Pill (shows automatically or on hover) */}
      {!isOpen && hasPrompted && (
        <div
          onClick={() => setIsOpen(true)}
          className={`cursor-pointer mb-2.5 px-3.5 py-2 rounded-2xl shadow-xl border flex items-center gap-2.5 text-xs font-bold transition-all duration-300 transform hover:-translate-y-0.5 select-none ${
            darkMode
              ? 'bg-[#111722]/95 border-emerald-500/40 text-gray-100 hover:border-emerald-400'
              : 'bg-white/95 border-emerald-500/30 text-gray-800 shadow-emerald-500/10'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
          <span className="truncate">¿Cotizamos tu idea? <strong className="text-[#25D366]">Escríbenos</strong></span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setHasPrompted(false);
            }}
            className="text-gray-400 hover:text-gray-200 ml-1 p-0.5 rounded-full"
            title="Cerrar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Abrir chat de WhatsApp para consultas"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 cursor-pointer"
      >
        {/* Pulsing ambient halo effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-ping pointer-events-none -z-10" />

        {/* Dynamic Icon Toggle: MessageCircle or Close X */}
        {isOpen ? (
          <X className="w-7 h-7 sm:w-8 sm:h-8 text-slate-950 transition-transform duration-200 rotate-90 animate-in" />
        ) : (
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 text-slate-950 transition-transform duration-200 group-hover:rotate-12" />
        )}

        {/* Small Notification Dot / Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-slate-950 text-[9px] font-black text-white items-center justify-center">
              1
            </span>
          </span>
        )}

        {/* Desktop Tooltip Hover Bubble */}
        {!isOpen && (
          <span className="absolute right-18 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-700 hidden sm:block">
            💬 Iniciar chat WhatsApp ({DISPLAY_PHONE})
          </span>
        )}
      </button>
    </aside>
  );
};
