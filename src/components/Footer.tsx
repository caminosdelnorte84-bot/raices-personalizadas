import React from 'react';
import { MessageCircle, Phone, Instagram, Facebook, Sparkles } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  isDetailPage?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, isDetailPage = false }) => {
  const sectionHref = (section: string) => `${isDetailPage ? '/' : ''}${section}`;

  return (
    <>
      {/* Distinctive Closure Hero Banner */}
      <section className="py-20 relative bg-black overflow-hidden border-t border-gray-800">
        <div className="absolute -top-10 left-10 w-60 h-60 bg-yellow-400/15 rounded-full blur-[80px]" />
        <div className="absolute -bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[90px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="badge-brush inline-block bg-[#FACC15] text-black px-6 py-2 text-xl sm:text-2xl font-black uppercase tracking-wider shadow-lg">
            ¿TIENES UNA IDEA?
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Nosotros la hacemos realidad.
          </h2>

          <p className="font-script text-3xl sm:text-4xl text-[#0EA5E9] tracking-wide">
            ¡Tú imaginas, nosotros estampamos!
          </p>

          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            No dejes que tu diseño se quede en la pantalla. Lo llevamos a la prenda, vaso, gorra o
            accesorio con el acabado exacto que siempre imaginaste.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5492216268594?text=¡Hola!%20Tengo%20una%20idea%20en%20mente%20y%20quiero%20hacerla%20realidad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-black font-extrabold text-base rounded-full shadow-glow-yellow transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 fill-black text-black" />
              <span>Chatear ahora al 221 626 8594</span>
            </a>

            <a
              href="https://instagram.com/raicespersonalizaciones"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-gray-700 bg-gray-900/60 hover:bg-gray-800 text-gray-200 font-bold text-sm sm:text-base transition-colors"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
              <span>Ver fotos en Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer Information */}
      <footer
        id="contacto"
        className={`py-12 border-t text-sm ${
          darkMode ? 'bg-[#05070B] text-gray-400 border-gray-800' : 'bg-slate-900 text-gray-300 border-gray-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
            {/* Brand Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white tracking-tight">
                  RAÍCES{' '}
                  <span className="font-script text-[#FACC15] text-3xl">Personalizaciones</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
                Especialistas en estampación personalizada, bordados computarizados y artículos
                publicitarios. Entregamos calidad premium con colores vibrantes y acabados duraderos.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" /> CREA
                <span className="w-2 h-2 rounded-full bg-[#EC4899]" /> IMPRIME
                <span className="w-2 h-2 rounded-full bg-[#FACC15]" /> IMPACTA
              </div>
            </div>

            {/* Official Channels */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                Canales Oficiales
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <a
                    href="https://wa.me/5492216268594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors text-yellow-400 font-bold"
                  >
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <span className="font-mono">221 626 8594</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/raicespersonalizaciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>@raicespersonalizaciones</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/raicespersonalizaciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-sky-400" />
                    <span>Raíces Personalizaciones</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Fast Navigation */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
                Líneas Populares
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href={sectionHref('#catalogo')} className="hover:text-yellow-400 transition-colors text-yellow-300 font-bold">
                    ★ Cuadros de Aluminio (15x20 &amp; 20x30 cm)
                  </a>
                </li>
                <li>
                  <a href={sectionHref('#catalogo')} className="hover:text-yellow-400 transition-colors text-sky-300 font-bold">
                    ★ Sublimación HD &amp; DTF Textil
                  </a>
                </li>
                <li>
                  <a href={sectionHref('#envios')} className="hover:text-yellow-400 transition-colors text-emerald-400 font-bold">
                    🚚 Envíos a Todo el País
                  </a>
                </li>
                <li>
                  <a href={sectionHref('#catalogo')} className="hover:text-yellow-400 transition-colors">
                    1. Remeras de Algodón 24.1 (Varios Colores)
                  </a>
                </li>
                <li>
                  <a href={sectionHref('#catalogo')} className="hover:text-yellow-400 transition-colors">
                    2. Gorras Trucker y Bordadas
                  </a>
                </li>
                <li>
                  <a href="/tazas-personalizadas" className="hover:text-yellow-400 transition-colors">
                    3. Tazas Personalizadas
                  </a>
                </li>
                <li>
                  <a href={sectionHref('#catalogo')} className="hover:text-yellow-400 transition-colors">
                    4. Bolsos y Tulas Deportivas
                  </a>
                </li>
                <li>
                  <a href={sectionHref('#catalogo')} className="hover:text-yellow-400 transition-colors">
                    5. Cuadros de Aluminio (15x20 y 20x30 cm)
                  </a>
                </li>
                <li>
                  <a href={sectionHref('#catalogo')} className="hover:text-yellow-400 transition-colors">
                    6. Souvenirs, Llaveros e Imanes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Credits */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>© 2025 Raíces Personalizaciones. Todos los derechos reservados.</p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
              <span className="hover:text-gray-300 transition-colors">
                Diseño Personalizado de Alto Impacto
              </span>
              <span>•</span>
              <a href={sectionHref('#envios')} className="hover:text-yellow-400 transition-colors">
                Envíos a Todo el País
              </a>
              <span>
                Imagen ilustrativa:{' '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:Personalized_nana_mugs_and_cookies_on_a_kitchen_counter_and_table_(16741382649).jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Personal Creations (recortada)
                </a>
                {' · '}
                <a
                  href="https://creativecommons.org/licenses/by/2.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors"
                >
                  CC BY 2.0
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
