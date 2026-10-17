import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, MessageCircle, PhoneCall } from 'lucide-react';
import { FAQ_ITEMS } from '../data/products';

interface FaqSectionProps {
  darkMode: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ darkMode }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      className={`py-16 sm:py-20 transition-colors duration-200 border-b relative ${
        darkMode ? 'bg-[#080C10] border-gray-800' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              darkMode
                ? 'bg-yellow-400/10 border border-yellow-400/30 text-[#FACC15]'
                : 'bg-yellow-100 border border-yellow-300 text-yellow-800'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESOLVEMOS TUS DUDAS</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            PREGUNTAS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-amber-300 to-yellow-500">
              FRECUENTES
            </span>{' '}
            <span className="text-[#0EA5E9] text-stroke-sm">(FAQ)</span>
          </h2>

          <p className="font-brush text-2xl sm:text-3xl text-[#0EA5E9]">
            Todo lo que necesitas saber sobre tu pedido
          </p>

          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Información clara y transparente sobre tiempos de producción, técnicas de estampado,
            mínimos y envíos garantizados a nivel nacional.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5 max-w-4xl mx-auto">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  darkMode
                    ? 'bg-[#161F2E]/90 border-gray-800 hover:border-yellow-400/40'
                    : 'bg-slate-50 border-gray-200 hover:border-yellow-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span
                    className={`text-sm sm:text-base font-bold flex items-center gap-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    <span className="w-7 h-7 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 flex items-center justify-center font-mono text-xs font-extrabold shrink-0">
                      {item.number}
                    </span>
                    <span>{item.question}</span>
                  </span>

                  <span className="w-8 h-8 rounded-full bg-[#0D1420] border border-gray-700 flex items-center justify-center text-yellow-400 font-bold shrink-0 transition-transform duration-200">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    className={`px-6 pb-6 pt-1 text-sm leading-relaxed border-t ${
                      darkMode ? 'border-gray-800/60 text-gray-300' : 'border-gray-200 text-gray-700'
                    }`}
                    dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Help Box */}
        <div
          className={`mt-12 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${
            darkMode
              ? 'bg-gradient-to-r from-[#161F2E] via-[#1A2332] to-[#161F2E] border-yellow-400/30'
              : 'bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 border-yellow-300'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4
                className={`font-extrabold text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}
              >
                ¿Tienes otra duda puntual sobre tu proyecto?
              </h4>
              <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Un asesor responderá tus requerimientos técnicos de inmediato vía WhatsApp.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5492216268594?text=¡Hola!%20Tengo%20una%20pregunta%20sobre%20un%20pedido%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-emerald-500 text-black font-extrabold px-6 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-black text-black" />
            <span>Chatear con un Asesor (221 626 8594)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
