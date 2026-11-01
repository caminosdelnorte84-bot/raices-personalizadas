import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react';
import { PRODUCT_LINES_3D, USE_API_SOURCE, API_BASE_URL } from '../data/products3d';
import { formatPriceARS } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import { ProductColor, ProductTechnique } from '../types';

interface Hechos3DPageProps {
  darkMode: boolean;
}

export const Hechos3DPage: React.FC<Hechos3DPageProps> = ({ darkMode }) => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCT_LINES_3D[0] | null>(null);
  const [cartItem, setCartItem] = useState<{
    size: string;
    color: ProductColor;
    technique: ProductTechnique;
    quantity: number;
  } | null>(null);
  const [productsFromApi, setProductsFromApi] = useState<any[]>([]);
  const [loadingFromApi, setLoadingFromApi] = useState(true);
  const [usingApi, setUsingApi] = useState(false);

  // Fetch products from the Cloudflare Worker API if enabled
  useEffect(() => {
    if (USE_API_SOURCE) {
      fetchProductsFromApi().then(() => setLoadingFromApi(false));
      setUsingApi(true);
    } else {
      setLoadingFromApi(false);
    }
  }, []);

  const fetchProductsFromApi = async () => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      if (data.success && data.products) {
        setProductsFromApi(data.products);
      }
    } catch (error) {
      console.error('Error fetching products from API:', error);
      // Fall back to static data on error
      setProductsFromApi(PRODUCT_LINES_3D);
    }
  };

  const handleAddToCart = (product: typeof PRODUCT_LINES_3D[0], config: {
    size: string;
    color: ProductColor;
    technique: ProductTechnique;
    quantity: number;
  }) => {
    const basePrice = product.basePrice;
    const techniqueExtra = config.technique.extraPerUnit || 0;
    const unitPrice = basePrice + techniqueExtra;

    addToCart({
      productId: product.id,
      title: product.title,
      subtitle: product.subtitle,
      imageUrl: product.imageUrl,
      size: config.size,
      color: config.color,
      technique: config.technique.name,
      quantity: config.quantity,
      basePrice,
      unitPrice,
      discountPercent: 0,
      quoteOnly: false,
    });

    setSelectedProduct(null);
    setCartItem(null);
  };

  return (
    <>
      <section className={`relative overflow-hidden py-12 sm:py-20 ${darkMode ? 'bg-[#0B1017] text-white' : 'bg-white text-gray-900'}`}>
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-sky-400 transition-colors hover:text-sky-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catálogo
          </a>

          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-sky-300">
              <ShoppingBag className="h-4 w-4" />
              Tienda 3D · Venta directa
            </span>
            <h1 className="mt-6 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Hecho en
              <span className="mt-2 block text-[#FACC15]">3D</span>
            </h1>
            <p className={`mt-4 max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Productos únicos de impresión 3D listos para comprar. Desde portasahumerios artísticos hasta figuras educativas.
            </p>

            <p className="mt-3 text-sm font-bold text-[#FACC15]">
              ⚡ Stock limitado en algunos productos · Fabricación artesanal, cada pieza es única
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRODUCT_LINES_3D.map((product) => (
              <article
                key={product.id}
                className={`group rounded-2xl border overflow-hidden transition-all hover:shadow-xl ${
                  darkMode
                    ? 'bg-[#141C2B] border-gray-800 hover:border-sky-400/50'
                    : 'bg-white border-gray-200 hover:border-sky-400/50'
                }`}
              >
                {/* Image */}
                <div className={`aspect-square overflow-hidden ${darkMode ? 'bg-[#0E1522]' : 'bg-gray-100'}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-black text-sm uppercase leading-tight">{product.title}</h3>
                    <span className="shrink-0 text-[#FACC15] font-black text-sm whitespace-nowrap">
                      {formatPriceARS(product.basePrice)}
                    </span>
                  </div>
                  <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {product.subtitle}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tag.color} ${
                          darkMode ? 'bg-white/10' : 'bg-gray-100'
                        }`}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="mt-3 space-y-1">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className={`flex items-start gap-1.5 text-[11px] ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <Check className="h-3 w-3 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProduct(product);
                      setCartItem({
                        size: product.sizes[0] || '',
                        color: product.colors[0] || { name: 'Default', hex: '#888888' },
                        technique: product.techniques[0] || { id: 'default', name: 'Estándar', tag: 'Principal', desc: '', extraPerUnit: 0 },
                        quantity: 1,
                      });
                    }}
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 text-black font-black text-xs uppercase tracking-wider py-3 transition hover:bg-yellow-300 hover:shadow-glow-yellow"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Agregar al pedido
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Info Section */}
          <div className={`mt-16 rounded-3xl border p-6 sm:p-8 ${
            darkMode ? 'bg-[#141C2B] border-gray-800' : 'bg-slate-50 border-gray-200'
          }`}>
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <h3 className="font-black text-lg uppercase">Envíos a todo el país</h3>
                <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Despachamos por Vía Cargo con seguro incluido en todos los envíos.
                </p>
              </div>
              <div>
                <h3 className="font-black text-lg uppercase">Descuentos por volumen</h3>
                <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Comprá 6 o más unidades y obtené hasta 25% OFF. Ideal para regalos corporativos.
                </p>
              </div>
              <div>
                <h3 className="font-black text-lg uppercase">Pedido por WhatsApp</h3>
                <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Armá tu pedido y confirmalo directamente por WhatsApp al 221 626 8594.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Config Modal */}
      {selectedProduct && cartItem && (
        <div
          className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className={`relative w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden ${
              darkMode ? 'bg-[#0E1522] border-gray-700' : 'bg-white border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`px-6 py-4 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-black text-lg uppercase">{selectedProduct.title}</h3>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {selectedProduct.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className={`p-2 rounded-xl ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              {/* Size */}
              <div>
                <label className={`text-xs font-bold uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Tamaño
                </label>
                <select
                  value={cartItem.size}
                  onChange={(e) => setCartItem({ ...cartItem, size: e.target.value })}
                  className={`mt-1 w-full rounded-xl border px-3 py-2 text-sm ${
                    darkMode ? 'bg-[#161F2E] border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  {selectedProduct.sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Color */}
              <div>
                <label className={`text-xs font-bold uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Color
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setCartItem({ ...cartItem, color })}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all ${
                        cartItem.color.name === color.name
                          ? 'border-yellow-400 bg-yellow-400/10'
                          : darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: color.hex }}
                      />
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technique */}
              <div>
                <label className={`text-xs font-bold uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Técnica
                </label>
                <div className="mt-2 space-y-2">
                  {selectedProduct.techniques.map((tech) => (
                    <button
                      key={tech.id}
                      type="button"
                      onClick={() => setCartItem({ ...cartItem, technique: tech })}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        cartItem.technique.id === tech.id
                          ? 'border-sky-400 bg-sky-400/10'
                          : darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm">{tech.name}</span>
                        <span className={`text-xs ${tech.extraPerUnit ? 'text-emerald-400' : darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          {tech.extraPerUnit ? `+${formatPriceARS(tech.extraPerUnit)}` : 'Sin costo extra'}
                        </span>
                      </div>
                      <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{tech.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className={`text-xs font-bold uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Cantidad
                </label>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCartItem({ ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) })}
                    className={`w-10 h-10 rounded-xl border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-100'}`}
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-lg w-12 text-center">{cartItem.quantity}</span>
                  <button
                    type="button"
                    onClick={() => setCartItem({ ...cartItem, quantity: cartItem.quantity + 1 })}
                    className={`w-10 h-10 rounded-xl border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-100'}`}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Summary */}
              <div className={`rounded-xl border p-4 ${darkMode ? 'bg-[#161F2E] border-gray-800' : 'bg-slate-50 border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total ({cartItem.quantity} {cartItem.quantity === 1 ? 'unidad' : 'unidades'})
                  </span>
                  <span className="text-2xl font-black text-[#FACC15]">
                    {formatPriceARS((selectedProduct.basePrice + (cartItem.technique.extraPerUnit || 0)) * cartItem.quantity)}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className={`px-6 py-4 border-t flex gap-3 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className={`flex-1 py-3 rounded-xl border text-sm font-bold ${
                  darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => handleAddToCart(selectedProduct, cartItem)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-yellow-400 text-black font-black text-sm uppercase tracking-wider hover:bg-yellow-300 transition"
              >
                <ShoppingBag className="h-4 w-4" />
                Agregar al pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};