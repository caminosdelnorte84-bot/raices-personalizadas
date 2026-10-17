import React, { useState, useMemo } from 'react';
import { Camera, MessageCircle, Eye, Sparkles, Search, Star, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/products';
import { LightboxModal } from './LightboxModal';

interface GalleryPortfolioProps {
  darkMode: boolean;
}

export const GalleryPortfolio: React.FC<GalleryPortfolioProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'camisetas' | 'gorras' | 'termos' | 'bolsos'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const filters = [
    { id: 'all', label: 'Todos', count: PORTFOLIO_ITEMS.length },
    { id: 'cuadros', label: 'Cuadros de Aluminio', count: PORTFOLIO_ITEMS.filter((i) => i.category === 'cuadros').length },
    { id: 'souvenirs', label: 'Souvenirs & Recuerdos', count: PORTFOLIO_ITEMS.filter((i) => i.category === 'souvenirs').length },
    { id: 'camisetas', label: 'Camisetas & Hoodies', count: PORTFOLIO_ITEMS.filter((i) => i.category === 'camisetas').length },
    { id: 'gorras', label: 'Gorras Bordadas 3D', count: PORTFOLIO_ITEMS.filter((i) => i.category === 'gorras').length },
    { id: 'termos', label: 'Vasos & Termos Láser', count: PORTFOLIO_ITEMS.filter((i) => i.category === 'termos').length },
    { id: 'bolsos', label: 'Bolsos & Tulas', count: PORTFOLIO_ITEMS.filter((i) => i.category === 'bolsos').length },
  ];

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.badge.toLowerCase().includes(query) ||
        (item.technique && item.technique.toLowerCase().includes(query)) ||
        (item.client && item.client.toLowerCase().includes(query)) ||
        item.specs.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleOpenPhoto = (itemId: string) => {
    const idx = PORTFOLIO_ITEMS.findIndex((item) => item.id === itemId);
    if (idx !== -1) {
      setActivePhotoIndex(idx);
      setLightboxOpen(true);
    }
  };

  return (
    <section
      id="galeria"
      className={`py-16 sm:py-24 transition-colors duration-200 border-b relative ${
        darkMode ? 'bg-[#080C10] border-gray-800' : 'bg-slate-50 border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              darkMode
                ? 'bg-yellow-400/10 border border-yellow-400/30 text-[#FACC15]'
                : 'bg-yellow-100 border border-yellow-300 text-yellow-800'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>MUESTRAS &amp; ACABADOS REALES</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            GALERÍA DE TRABAJOS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] via-amber-300 to-[#0EA5E9]">
              REALES
            </span>
          </h2>

          <p className="font-brush text-2xl sm:text-3xl text-[#0EA5E9]">
            ¡Calidad e impacto visual en cada prenda y artículo terminado!
          </p>

          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Fotografías directas de nuestro taller con proyectos producidos para marcas streetwear,
            cuadros de aluminio, colegios, familias y eventos. Haz clic en cualquier trabajo para abrir el
            visor de alta resolución con zoom interactivo.
          </p>
        </div>

        {/* Quality Guarantee Strip */}
        <div
          className={`mb-10 p-4 rounded-2xl border flex flex-wrap items-center justify-around gap-4 text-xs font-semibold ${
            darkMode
              ? 'bg-[#111722]/80 border-gray-800 text-gray-300'
              : 'bg-white border-gray-200 text-gray-700 shadow-xs'
          }`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Tirajes desde 1 unidad hasta millares</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FACC15] shrink-0" />
            <span>Garantía de fijación y cero desteñido</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#0EA5E9] shrink-0" />
            <span>DTF HD, Bordado 3D, Láser y Sublimación</span>
          </div>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#FACC15] text-black shadow-glow-yellow border border-[#FACC15]'
                      : darkMode
                      ? 'bg-[#161F2E] hover:bg-[#1B2433] text-gray-300 hover:text-white border border-gray-700'
                      : 'bg-white hover:bg-gray-100 text-gray-700 hover:text-black border border-gray-300'
                  }`}
                >
                  <span>{f.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-black text-yellow-400' : darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar técnica, prenda..."
              className={`w-full py-2 pl-9 pr-4 text-xs rounded-full border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors ${
                darkMode
                  ? 'bg-[#161F2E] border-gray-700 text-white placeholder-gray-500'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Gallery Cards Grid (8 Real Works) */}
        {filteredItems.length === 0 ? (
          <div
            className={`text-center py-16 px-4 rounded-3xl border ${
              darkMode ? 'bg-[#161F2E] border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-500'
            }`}
          >
            <Camera className="w-10 h-10 mx-auto text-yellow-400 mb-3" />
            <h3 className="text-base font-bold text-white mb-1">No se encontraron trabajos con ese filtro</h3>
            <p className="text-xs mb-4">Intenta con otra palabra clave o selecciona la pestaña "Todos".</p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-yellow-400 text-black font-extrabold text-xs uppercase rounded-xl"
            >
              Ver todos los trabajos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col group shadow-xl hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-[#161F2E] border-gray-800 hover:border-yellow-400/60'
                    : 'bg-white border-gray-200 hover:border-yellow-400'
                }`}
              >
                {/* Photo Frame Container */}
                <div
                  onClick={() => handleOpenPhoto(item.id)}
                  className="relative overflow-hidden aspect-[4/3] bg-black/60 cursor-pointer select-none"
                  title="Haz clic para ver en pantalla completa con zoom"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Badge Tag */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`bg-black/85 backdrop-blur-sm border text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Hover Affordance */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="p-2.5 rounded-full bg-black/80 text-yellow-400 border border-yellow-400/50 shadow-lg flex items-center gap-1.5 text-xs font-bold">
                      <Eye className="w-4 h-4" />
                      <span>Ver Zoom</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Project / Client metadata row */}
                    {item.client && (
                      <div className="flex items-center justify-between text-[11px] text-gray-400">
                        <span className="font-semibold truncate max-w-[65%] text-sky-400">
                          {item.client}
                        </span>
                        {item.units && (
                          <span className="font-mono text-yellow-400 font-bold shrink-0">
                            {item.units}
                          </span>
                        )}
                      </div>
                    )}

                    <h3
                      onClick={() => handleOpenPhoto(item.id)}
                      className={`text-base font-bold transition-colors cursor-pointer leading-tight ${
                        darkMode ? 'text-white group-hover:text-[#FACC15]' : 'text-gray-900 group-hover:text-yellow-600'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-xs leading-relaxed ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Specs Pills */}
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {item.specs.slice(0, 2).map((s, idx) => (
                        <span
                          key={idx}
                          className={`text-[10px] px-2 py-0.5 rounded-md border font-medium ${
                            darkMode
                              ? 'bg-[#0D1420] border-gray-700/80 text-gray-300'
                              : 'bg-gray-100 border-gray-200 text-gray-700'
                          }`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenPhoto(item.id)}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                        darkMode
                          ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5 text-yellow-400" />
                      <span>Detalle</span>
                    </button>

                    <a
                      href={`https://wa.me/5492216268594?text=${encodeURIComponent(
                        `Hola Raíces Personalizaciones, me interesa saber más sobre un trabajo similar a "${item.title}"`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-[#25D366] hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Consultar</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Custom Project Prompt Banner */}
        <div
          className={`mt-14 p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
            darkMode
              ? 'bg-gradient-to-r from-[#161F2E] via-[#1A2538] to-[#161F2E] border-yellow-400/40'
              : 'bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50 border-yellow-300'
          }`}
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FACC15] flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>¿No ves exactamente lo que buscas?</span>
            </span>
            <h4 className={`text-xl sm:text-2xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Fabricamos muestras personalizadas y prototipos previos
            </h4>
            <p className={`text-xs max-w-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Envíanos tu logotipo o diseño y te presentamos un mockup digital 3D sin costo para que
              apruebes acabados y colores antes de imprimir.
            </p>
          </div>

          <a
            href="https://wa.me/5492216268594?text=Hola%20Raíces%20Personalizaciones,%20quiero%20solicitar%20un%20mockup%20o%20muestra%20de%20mi%20diseño"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-emerald-500 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shrink-0 shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Pedir Mockup por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={PORTFOLIO_ITEMS}
        currentIndex={activePhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />
    </section>
  );
};
