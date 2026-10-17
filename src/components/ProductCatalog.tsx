import React, { useState, useMemo } from 'react';
import {
  Tag,
  Shirt,
  Scissors,
  Coffee,
  ShoppingBag,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Shield,
  Layers,
  ThermometerSnowflake,
  PencilRuler,
  Info,
  X,
  ExternalLink,
  Flame,
  Check,
  Truck,
  Frame,
  Gift,
  SlidersHorizontal,
  ChevronRight,
  TrendingDown,
} from 'lucide-react';
import { PRODUCT_LINES } from '../data/products';
import { ProductLine } from '../types';
import { ProductConfigModal } from './ProductConfigModal';
import { formatPriceARS } from '../context/CartContext';

interface ProductCatalogProps {
  darkMode: boolean;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ darkMode }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');
  const [configProduct, setConfigProduct] = useState<ProductLine | null>(null);
  const [specsProduct, setSpecsProduct] = useState<ProductLine | null>(null);

  const filterTabs = [
    { id: 'todos', label: 'Todos los Productos', icon: Sparkles },
    { id: 'camisetas', label: 'Camisetas', icon: Shirt },
    { id: 'gorras', label: 'Gorras', icon: Scissors },
    { id: 'termos', label: 'Vasos & Termos', icon: Coffee },
    { id: 'bolsos', label: 'Bolsos & Tulas', icon: ShoppingBag },
    { id: 'cuadros-aluminio', label: 'Cuadros Metal', icon: Frame },
    { id: 'souvenirs', label: 'Souvenirs', icon: Gift },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedFilter === 'todos') return PRODUCT_LINES;
    return PRODUCT_LINES.filter((p) => p.id === selectedFilter);
  }, [selectedFilter]);

  const getSubtypeIcon = (productId: string) => {
    switch (productId) {
      case 'camisetas':
        return <Shirt className="w-6 h-6 mb-1 text-yellow-400" />;
      case 'gorras':
        return <Scissors className="w-6 h-6 mb-1 text-pink-400" />;
      case 'termos':
        return <Coffee className="w-6 h-6 mb-1 text-sky-400" />;
      case 'bolsos':
        return <ShoppingBag className="w-6 h-6 mb-1 text-yellow-400" />;
      case 'cuadros-aluminio':
        return <Frame className="w-6 h-6 mb-1 text-sky-400" />;
      case 'souvenirs':
        return <Gift className="w-6 h-6 mb-1 text-pink-400" />;
      default:
        return <Sparkles className="w-6 h-6 mb-1 text-yellow-400" />;
    }
  };

  return (
    <section
      id="catalogo"
      className={`py-16 sm:py-24 transition-colors duration-200 border-b relative ${
        darkMode ? 'bg-[#0B1017] border-gray-800' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              darkMode ? 'bg-gray-800 text-[#0EA5E9]' : 'bg-sky-100 text-sky-800'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            <span>Catálogo Ampliado & Carrito Multi-Producto</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            NUESTRAS LÍNEAS DE{' '}
            <span className="text-[#FACC15] font-script text-4xl sm:text-5xl lowercase">
              productos
            </span>
          </h2>

          <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Selecciona talles, colores y técnicas. Configura cada prenda o souvenir y envía tu orden
            detallada directamente a WhatsApp con descuentos automáticos por cantidad.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-12 gap-2 no-scrollbar">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-yellow-400 text-black shadow-glow-yellow scale-105'
                    : darkMode
                    ? 'bg-[#141C2B] text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-800'
                    : 'bg-slate-100 text-gray-700 hover:bg-slate-200 hover:text-gray-900 border border-gray-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => (
            <article
              key={prod.id}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col group shadow-xl hover:-translate-y-1 ${
                darkMode
                  ? 'bg-[#141C2B] border-gray-800 hover:border-yellow-400/60'
                  : 'bg-slate-50 border-gray-200 hover:border-yellow-400'
              }`}
            >
              {/* Category Header Bar */}
              <div
                className={`p-4 sm:p-5 flex items-center justify-between border-b ${
                  darkMode ? 'bg-[#182335] border-gray-800' : 'bg-gray-100 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-8 h-8 rounded-xl ${prod.badgeBg} ${prod.badgeText} font-black text-xs flex items-center justify-center font-mono shadow-sm`}
                  >
                    0{prod.number}
                  </span>
                  <div>
                    <h3
                      className={`font-black text-base sm:text-lg tracking-tight uppercase leading-none ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {prod.title}
                    </h3>
                    <span className="font-semibold text-[#FACC15] font-script text-sm">
                      {prod.subtitle}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">Desde</span>
                  <span className="font-mono font-black text-sm text-[#FACC15]">
                    {formatPriceARS(prod.basePrice)}
                  </span>
                </div>
              </div>

              {/* Product Visual Showcase Banner */}
              <div className="relative aspect-16/10 overflow-hidden bg-black/40 border-b border-gray-800/60 flex items-center justify-center">
                {prod.imageUrl ? (
                  <img
                    src={prod.imageUrl}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-gray-500 flex flex-col items-center">
                    <Sparkles className="w-10 h-10 text-yellow-400 mb-1" />
                    <span className="text-xs">Estampados Raíces</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Wholesale Discount Badge */}
                <div className="absolute top-3 left-3 bg-emerald-500 text-slate-950 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  <span>Descuentos por Cantidad</span>
                </div>

                {/* Subtypes mini tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="text-[11px] font-semibold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    {prod.sizes.length} talles/formatos disponibles
                  </span>
                  <span className="text-[11px] font-semibold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    {prod.colors.length} colores
                  </span>
                </div>
              </div>

              {/* 3 Subtypes Visual Showcase */}
              <div
                className={`p-3.5 grid grid-cols-3 gap-2 border-b ${
                  darkMode ? 'bg-[#0E1522] border-gray-800' : 'bg-white border-gray-100'
                }`}
              >
                {prod.subtypes.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-2.5 rounded-xl border text-center flex flex-col items-center justify-between transition-transform duration-200 ${
                      darkMode
                        ? 'bg-[#141C2B] border-gray-800 hover:border-yellow-400/40'
                        : 'bg-slate-50 border-gray-200 hover:border-yellow-400'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      {getSubtypeIcon(prod.id)}
                    </div>
                    <span
                      className={`text-[10px] font-bold leading-tight ${
                        darkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}
                    >
                      {sub.name}
                    </span>
                    <span
                      className={`text-[8px] font-extrabold uppercase mt-1 px-1 py-0.2 rounded bg-black/40 ${sub.tagColor}`}
                    >
                      {sub.tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description, Colors & Features */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p
                  className={`text-xs leading-relaxed line-clamp-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {prod.description}
                </p>

                {/* Available colors dots */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">
                    Variantes de Color:
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {prod.colors.map((c) => (
                      <span
                        key={c.name}
                        className={`w-4 h-4 rounded-full border shadow-sm ${
                          c.border ? 'border-gray-400' : 'border-white/20'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                    <span className="text-[10px] text-gray-400 font-medium pl-1">
                      +{prod.colors.length} opciones
                    </span>
                  </div>
                </div>

                {/* Sizes pills */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase text-gray-400 block tracking-wider">
                    Medidas / Formatos:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {prod.sizes.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                          darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                    {prod.sizes.length > 4 && (
                      <span className="text-[10px] text-gray-400 self-center">
                        +{prod.sizes.length - 4} más
                      </span>
                    )}
                  </div>
                </div>

                {/* Shipping & MOQ indicator */}
                <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1 border-t border-gray-800/80">
                  <a
                    href="#envios"
                    className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <Truck className="w-3.5 h-3.5 shrink-0" />
                    <span className="underline decoration-dotted underline-offset-2">
                      Envíos a todo el país
                    </span>
                  </a>
                  <span className="text-emerald-400 font-bold">Desde 1 unidad</span>
                </div>

                {/* Action CTAs: Order Configurator + Specs */}
                <div className="pt-2 space-y-2">
                  {/* Primary CTA: Configure & Add */}
                  <button
                    type="button"
                    onClick={() => setConfigProduct(prod)}
                    className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-300 text-black font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-yellow-400/20 active:translate-y-0.5 transition-all"
                  >
                    <ShoppingBag className="w-4 h-4 fill-black" />
                    <span>Personalizar y Armar Pedido</span>
                  </button>

                  <div className="flex gap-2">
                    {/* Secondary CTA: Quick WhatsApp */}
                    <a
                      href={`https://wa.me/5492216268594?text=${encodeURIComponent(
                        prod.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-black font-extrabold text-[11px] uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 border border-[#25D366]/30"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Directo</span>
                    </a>

                    {/* Technical Specs button */}
                    <button
                      type="button"
                      onClick={() => setSpecsProduct(prod)}
                      className={`py-2.5 px-3 rounded-xl border text-[11px] font-bold uppercase transition-colors flex items-center justify-center gap-1 ${
                        darkMode
                          ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                      title="Ver ficha técnica"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Ficha</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Special Projects Banner */}
          <article
            className={`col-span-1 md:col-span-2 lg:col-span-3 rounded-3xl border-2 border-dashed p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left group shadow-xl transition-all duration-300 ${
              darkMode
                ? 'bg-gradient-to-br from-[#161F2E] via-[#1A2332] to-[#0A101D] border-yellow-400/50'
                : 'bg-gradient-to-br from-amber-50 to-yellow-50 border-yellow-400'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-5 max-w-2xl">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shadow-glow-yellow">
                <PencilRuler className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="space-y-1">
                <h3
                  className={`text-2xl font-black uppercase tracking-tight ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  ¿TIENES UN PROYECTO O PEDIDO ESPECIAL?
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  Si no encuentras el producto en el catálogo, ¡lo desarrollamos! Corte láser,
                  parches bordados, buzos especiales, bolsas en tiradas masivas o acabados exclusivos
                  para marcas.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto shrink-0 justify-center">
              <div className="text-center sm:text-right">
                <span className="text-xs font-bold text-[#FACC15] tracking-widest uppercase block">
                  Atención Inmediata
                </span>
                <p
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-mono ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  221 626 8594
                </p>
                <p className="text-[11px] text-gray-400">La Plata • Envíos a todo el país</p>
              </div>

              <a
                href="https://wa.me/5492216268594?text=Hola%20tengo%20un%20proyecto%20especial%20y%20quiero%20cotizar"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-lg transition-all transform hover:scale-[1.02] whitespace-nowrap"
              >
                Cotizar Proyecto Especial
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* Product Configurator Modal */}
      <ProductConfigModal
        product={configProduct}
        onClose={() => setConfigProduct(null)}
        darkMode={darkMode}
      />

      {/* Technical Specifications Modal */}
      {specsProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            className={`max-w-md w-full rounded-3xl border p-6 space-y-4 shadow-2xl ${
              darkMode
                ? 'bg-[#141C2B] border-gray-700 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <div className="flex items-center justify-between border-b pb-3 border-gray-700">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <h4 className="font-extrabold uppercase text-base">{specsProduct.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setSpecsProduct(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <p className="text-gray-300">{specsProduct.description}</p>

              <h5 className="font-bold text-yellow-400 uppercase tracking-wider text-[11px] pt-1">
                Especificaciones Técnicas:
              </h5>
              <ul className="space-y-1.5">
                {specsProduct.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center gap-2.5 text-[11px] text-sky-200">
                <Truck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  <strong>Envíos a todo el país:</strong> Despachos a cualquier punto del país con
                  número de seguimiento.
                </span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSpecsProduct(null)}
                className="flex-1 py-3 rounded-xl border border-gray-700 text-gray-300 text-xs font-bold uppercase hover:bg-gray-800"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={() => {
                  const p = specsProduct;
                  setSpecsProduct(null);
                  setConfigProduct(p);
                }}
                className="flex-1 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-extrabold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Personalizar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
