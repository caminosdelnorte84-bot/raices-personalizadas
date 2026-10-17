import React from 'react';
import { Flame, Layers, CheckCircle, Award, Palette, Shirt, Headphones, Sparkles, Briefcase, Camera, MessageCircle, Truck } from 'lucide-react';
import { HERO_SHOWCASE_IMG, PILLARS } from '../data/products';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section
      className={`relative pt-10 sm:pt-14 pb-16 sm:pb-20 overflow-hidden border-b transition-colors duration-200 ${
        darkMode
          ? 'bg-[#080C10] paint-splatter-gradient border-gray-800'
          : 'bg-slate-50 border-gray-200'
      }`}
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#0EA5E9]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#EC4899]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Workshop & B2B Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                  darkMode
                    ? 'bg-[#161F2E] border border-yellow-400/40 text-[#FACC15]'
                    : 'bg-yellow-50 border border-yellow-300 text-yellow-800'
                }`}
              >
                <Flame className="w-4 h-4 text-[#FACC15] animate-pulse" />
                <span>Taller Textil &amp; Publicitario</span>
              </div>

              <a
                href="#catalogo"
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors ${
                  darkMode
                    ? 'bg-sky-950/40 border-sky-400/40 text-sky-400 hover:bg-sky-900/50'
                    : 'bg-sky-50 border-sky-300 text-sky-800 hover:bg-sky-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cuadros de Aluminio 15x20 &amp; 20x30 cm</span>
              </a>
            </div>

            {/* Main Punchy Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none uppercase">
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                CATÁLOGO DE <br />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-amber-300 to-yellow-500 underline decoration-[#0EA5E9] decoration-wavy decoration-2">
                PRODUCTOS
              </span>{' '}
              <br />
              <span className="text-[#0EA5E9] text-stroke-sm">PERSONALIZADOS</span>
            </h1>

            {/* Script Subtitle */}
            <p className="text-2xl sm:text-3xl font-brush text-[#FACC15]">
              Transformamos tus ideas en productos{' '}
              <span className="text-[#EC4899] italic font-script text-2xl sm:text-3xl">únicos</span>
            </p>

            <p
              className={`text-sm sm:text-base max-w-2xl leading-relaxed mx-auto lg:mx-0 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Técnicas profesionales en{' '}
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>
                DTF textil, Sublimación, Bordados de alta definición, Grabado láser
              </strong>{' '}
              y vinilo térmico. Personalizamos cuadros de aluminio (15x20 y 20x30 cm), souvenirs, prendas, termos y recordatorios únicos a tu medida.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FACC15] hover:bg-[#EAB308] text-black font-extrabold text-sm sm:text-base rounded-xl shadow-glow-yellow transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                <span>VER CATÁLOGO</span>
              </a>

              <a
                href="#catalogo"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 border-2 font-bold text-sm sm:text-base rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 ${
                  darkMode
                    ? 'border-sky-400/70 bg-sky-400/10 hover:bg-sky-400 hover:text-black text-sky-300'
                    : 'border-sky-400 bg-sky-50 hover:bg-sky-400 hover:text-black text-sky-900'
                }`}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
                <span>CUADROS DE ALUMINIO</span>
              </a>

              <a
                href="#galeria"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-gray-700 font-bold text-sm sm:text-base rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 ${
                  darkMode
                    ? 'bg-[#161F2E] hover:bg-[#1E293B] text-white hover:border-gray-500'
                    : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-300'
                }`}
              >
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-[#0EA5E9]" />
                <span>TRABAJOS REALES</span>
              </a>

              <a
                href="https://wa.me/5492216268594?text=Hola%20Raíces%20Personalizaciones,%20tengo%20un%20proyecto%20en%20mente%20y%20deseo%20información"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-emerald-500 text-slate-950 font-extrabold text-sm sm:text-base rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950" />
                <span>ESCRIBIR AL WHATSAPP</span>
              </a>
            </div>

            {/* Micro indicators */}
            <div
              className={`pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6 text-xs ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>Desde 1 unidad hasta millares</span>
              </div>
              <a
                href="#envios"
                className="flex items-center gap-2 hover:text-[#0EA5E9] transition-colors group cursor-pointer"
                title="Ver cobertura de envíos a todo el país"
              >
                <Truck className="w-4 h-4 text-[#0EA5E9] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-dotted underline-offset-4 text-sky-400 font-medium">
                  Envíos a todo el país (Ver cobertura)
                </span>
              </a>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#EC4899] shrink-0" />
                <span>Garantía en estampados y acabados</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Showcase Container */}
              <div
                className={`relative rounded-3xl p-5 sm:p-6 border-2 shadow-2xl overflow-hidden transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-gray-700/60'
                    : 'bg-white border-gray-200 shadow-xl'
                }`}
              >
                {/* Floating sticker badge */}
                <div className="absolute -top-2 -right-2 bg-[#EC4899] text-white font-script px-4 py-2 rounded-xl text-base sm:text-lg shadow-glow-pink transform rotate-6 z-20 select-none">
                  ¡Diseña sin límites!
                </div>

                {/* Inner Image Frame */}
                <div
                  className={`relative rounded-2xl p-3 sm:p-4 border overflow-hidden ${
                    darkMode ? 'bg-black/60 border-gray-800' : 'bg-slate-100 border-gray-200'
                  }`}
                >
                  <img
                    src={HERO_SHOWCASE_IMG}
                    alt="Muestra de Catálogo Raíces Personalizaciones con camisetas, gorras y termos personalizados"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover rounded-xl shadow-inner brightness-95 hover:brightness-105 transition-all duration-300"
                  />

                  {/* Brand sub-bar */}
                  <div
                    className={`mt-4 p-3 rounded-lg flex items-center justify-between border ${
                      darkMode
                        ? 'bg-[#161F2E]/95 border-gray-700 text-gray-200'
                        : 'bg-white border-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#0EA5E9]" />
                      <div className="w-3 h-3 rounded-full bg-[#EC4899]" />
                      <div className="w-3 h-3 rounded-full bg-[#FACC15]" />
                      <span className="text-xs font-bold uppercase tracking-wider ml-1">
                        Raíces Personalizaciones
                      </span>
                    </div>
                    <span className="text-xs text-[#FACC15] font-extrabold">100% Personalizado</span>
                  </div>
                </div>
              </div>

              {/* Decorative stamp on bottom corner */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-[#FACC15] text-black font-extrabold text-[11px] sm:text-xs px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border-2 border-black transform -rotate-3 select-none">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0" />
                <span>ACABADOS DE ALTA FIDELIDAD</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Strip */}
        <div
          className={`mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 pt-10 border-t ${
            darkMode ? 'border-gray-800/80' : 'border-gray-200'
          }`}
          id="ventajas"
        >
          {PILLARS.map((p) => (
            <div
              key={p.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 text-center group ${
                darkMode
                  ? 'bg-[#161F2E]/80 backdrop-blur-sm border-gray-800 hover:border-yellow-400/50'
                  : 'bg-white border-gray-200 hover:border-yellow-400 shadow-sm'
              }`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-full border flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${p.bgBadge}`}
              >
                {getPillarIcon(p.icon)}
              </div>
              <h3
                className={`font-bold text-sm sm:text-base tracking-wide uppercase ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {p.title}
              </h3>
              <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {p.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
