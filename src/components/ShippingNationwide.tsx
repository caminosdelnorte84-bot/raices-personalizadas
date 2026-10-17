import React from 'react';
import {
  Truck,
  MapPin,
  ShieldCheck,
  PackageCheck,
  Radio,
  CheckCircle2,
  FileCheck2,
  Sparkles
} from 'lucide-react';

interface ShippingNationwideProps {
  darkMode: boolean;
}

export const ShippingNationwide: React.FC<ShippingNationwideProps> = ({ darkMode }) => {
  return (
    <section
      id="envios"
      className={`py-20 border-t transition-colors duration-200 relative overflow-hidden ${
        darkMode ? 'bg-[#0B1019] border-gray-800' : 'bg-slate-50 border-gray-200'
      }`}
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#0EA5E9]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#FACC15]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#0EA5E9]/20 via-[#FACC15]/20 to-[#EC4899]/20 border border-sky-400/40 text-[#0EA5E9]">
            <Truck className="w-4 h-4 text-[#FACC15] animate-pulse" />
            <span>Cobertura Nacional • Despacho Seguro</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Envíos Seguros a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] via-sky-400 to-[#FACC15]">
              Todo el País
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Despachamos tus pedidos personalizados desde el taller hasta la puerta de tu empresa,
            negocio o domicilio con embalaje blindado y guía de rastreo online.
          </p>
        </div>

        {/* 4 Pillars of National Logistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {/* Card 1 */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 shadow-sm ${
              darkMode
                ? 'bg-[#101726]/80 border-gray-800 hover:border-sky-500/50'
                : 'bg-white border-gray-200 hover:border-sky-400 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#0EA5E9]" />
            </div>
            <h3 className="text-base font-extrabold text-white dark:text-white mb-2">
              Cobertura 100% Nacional
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Llegamos a ciudades principales, intermedias, cabeceras municipales y trayectos especiales en los 32 departamentos.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 shadow-sm ${
              darkMode
                ? 'bg-[#101726]/80 border-gray-800 hover:border-yellow-500/50'
                : 'bg-white border-gray-200 hover:border-yellow-400 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-4">
              <PackageCheck className="w-6 h-6 text-[#FACC15]" />
            </div>
            <h3 className="text-base font-extrabold text-white dark:text-white mb-2">
              Embalaje Antigolpes &amp; Sellado
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Prendas protegidas en bolsas individuales herméticas; termos, cuadros de aluminio y gorras en cajas reforzadas con protección burbuja.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 shadow-sm ${
              darkMode
                ? 'bg-[#101726]/80 border-gray-800 hover:border-emerald-500/50'
                : 'bg-white border-gray-200 hover:border-emerald-400 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
              <Radio className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-base font-extrabold text-white dark:text-white mb-2">
              Guía y Rastreo en Línea
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Apenas tu paquete sale a la transportadora, te compartimos de inmediato tu número de guía oficial para seguimiento en vivo.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 shadow-sm ${
              darkMode
                ? 'bg-[#101726]/80 border-gray-800 hover:border-pink-500/50'
                : 'bg-white border-gray-200 hover:border-pink-400 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-base font-extrabold text-white dark:text-white mb-2">
              Carga 100% Asegurada
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Todos los despachos viajan debidamente amparados con seguro de transporte para tu total tranquilidad y confianza.
            </p>
          </div>
        </div>

        {/* Carrier Logos / Badges Strip */}
        <div
          className={`rounded-2xl p-6 border mb-8 ${
            darkMode ? 'bg-[#0E1522]/60 border-gray-800' : 'bg-gray-100 border-gray-200'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                Alianzas con las principales redes logísticas
              </span>
              <p className="text-xs text-gray-500">
                Coordinación directa de guías para optimizar tiempos y costos de entrega
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                'Correo Argentino',
                'Andreani',
                'OCA Logística',
                'Vía Cargo',
                'Integral Pack'
              ].map((carrier) => (
                <div
                  key={carrier}
                  className={`px-3.5 py-1.5 rounded-lg border text-xs font-bold tracking-wide ${
                    darkMode
                      ? 'bg-gray-900 border-gray-700 text-gray-200 shadow-inner'
                      : 'bg-white border-gray-300 text-gray-800 shadow-sm'
                  }`}
                >
                  🚚 {carrier}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dispatch FAQ / Helpful Tips Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div
            className={`p-4 rounded-xl border flex items-start gap-3 ${
              darkMode ? 'bg-[#101726]/40 border-gray-800' : 'bg-white border-gray-200'
            }`}
          >
            <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white dark:text-white block font-bold mb-0.5">
                Desde 1 sola unidad
              </strong>
              <span className="text-gray-400">
                Despachamos desde una sola pieza o muestra física hasta pedidos de gran volumen en cajas maestras reforzadas.
              </span>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-start gap-3 ${
              darkMode ? 'bg-[#101726]/40 border-gray-800' : 'bg-white border-gray-200'
            }`}
          >
            <FileCheck2 className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white dark:text-white block font-bold mb-0.5">
                Fotos previas antes del despacho
              </strong>
              <span className="text-gray-400">
                Te enviamos fotografías o videos de tu pedido terminado y empacado antes de entregarlo a la transportadora.
              </span>
            </div>
          </div>

          <div
            className={`p-4 rounded-xl border flex items-start gap-3 ${
              darkMode ? 'bg-[#101726]/40 border-gray-800' : 'bg-white border-gray-200'
            }`}
          >
            <Sparkles className="w-5 h-5 text-[#EC4899] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white dark:text-white block font-bold mb-0.5">
                Entregas coordinadas y seguras
              </strong>
              <span className="text-gray-400">
                ¿Tu evento o fecha especial tiene un día límite? Coordinamos despacho prioritario con número de guía inmediato.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
