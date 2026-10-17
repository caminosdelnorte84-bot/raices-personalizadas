import React from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  MessageSquare,
  Sparkles,
  Truck,
  ShieldCheck,
  ArrowRight,
  User,
  MapPin,
  FileText,
  TrendingDown,
} from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  darkMode: boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ darkMode }) => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    closeCart,
    totalItems,
    subtotalBeforeDiscounts,
    totalSavings,
    totalFinalPrice,
    customerInfo,
    setCustomerInfo,
    formatCurrency,
    generateWhatsAppOrderUrl,
  } = useCart();

  if (!isCartOpen) return null;

  const handleSendWhatsApp = () => {
    const url = generateWhatsAppOrderUrl();
    window.open(url, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside
          className={`w-screen max-w-lg shadow-2xl flex flex-col transition-all duration-300 animate-in slide-in-from-right border-l ${
            darkMode
              ? 'bg-[#0B1017] border-gray-800 text-gray-100'
              : 'bg-white border-gray-200 text-gray-900'
          }`}
        >
          {/* Drawer Header */}
          <header
            className={`p-5 sm:p-6 border-b flex items-center justify-between shrink-0 ${
              darkMode ? 'bg-[#0E1522] border-gray-800' : 'bg-slate-50 border-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-400 text-black flex items-center justify-center font-bold shadow-glow-yellow">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-extrabold text-base sm:text-lg tracking-tight uppercase">
                    Mi Pedido
                  </h2>
                  <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#FACC15] text-black">
                    {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">
                  Revisa tus productos y envíalos en un clic por WhatsApp
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  title="Vaciar carrito"
                  className={`p-2 rounded-lg text-xs transition-colors ${
                    darkMode
                      ? 'text-gray-400 hover:text-red-400 hover:bg-gray-800'
                      : 'text-gray-500 hover:text-red-600 hover:bg-gray-100'
                  }`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={closeCart}
                className={`p-2 rounded-xl transition-colors ${
                  darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Cerrar panel de pedido"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </header>

          {/* Drawer Body */}
          {items.length === 0 ? (
            /* Empty State */
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div
                className={`w-20 h-20 rounded-3xl flex items-center justify-center border ${
                  darkMode
                    ? 'bg-[#141C2B] border-gray-800 text-gray-600'
                    : 'bg-slate-100 border-gray-200 text-gray-400'
                }`}
              >
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div className="space-y-1 max-w-xs">
                <h3 className="font-black text-lg">Tu carrito está vacío</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Explora nuestro catálogo para elegir talles, colores y armar tu presupuesto
                  personalizado con descuentos por volumen.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  closeCart();
                  const cat = document.getElementById('catalogo');
                  if (cat) cat.scrollIntoView({ behavior: 'smooth' });
                }}
                className="py-3 px-6 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explorar Catálogo</span>
              </button>
            </div>
          ) : (
            /* Cart Items & Customer Form */
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Items List */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs text-gray-400 px-1">
                  <span className="font-bold uppercase tracking-wider">Artículos en Orden:</span>
                  <span>{items.length} tipo(s)</span>
                </div>

                {items.map((item) => {
                  const itemTotal = item.unitPrice * item.quantity;
                  const originalTotal = item.basePrice * item.quantity;

                  return (
                    <article
                      key={item.id}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 flex gap-3 sm:gap-4 relative group ${
                        darkMode
                          ? 'bg-[#141C2B] border-gray-800 hover:border-gray-700'
                          : 'bg-slate-50 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {/* Thumbnail */}
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border relative flex items-center justify-center ${
                          darkMode ? 'bg-[#0E1522] border-gray-700' : 'bg-white border-gray-200'
                        }`}
                      >
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Sparkles className="w-6 h-6 text-yellow-400" />
                        )}
                        <span
                          className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border border-white/60 shadow-sm"
                          style={{ backgroundColor: item.color.hex }}
                          title={`Color: ${item.color.name}`}
                        />
                      </div>

                      {/* Info & Quantity */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between space-y-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-tight truncate">
                              {item.title}
                            </h4>
                            <p className="text-[10px] text-yellow-400 font-script text-xs">
                              {item.subtitle}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-500 hover:text-red-400 p-1 rounded transition-colors"
                            title="Eliminar producto"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Badges / Selected specs */}
                        <div className="flex flex-wrap gap-1 text-[10px]">
                          <span
                            className={`px-2 py-0.5 rounded-md font-semibold ${
                              darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white border text-gray-700'
                            }`}
                          >
                            {item.size}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-md flex items-center gap-1 ${
                              darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white border text-gray-700'
                            }`}
                          >
                            <span
                              className="w-2 h-2 rounded-full inline-block"
                              style={{ backgroundColor: item.color.hex }}
                            />
                            {item.color.name}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-sky-500/15 text-sky-400 font-bold truncate max-w-[130px]">
                            {item.technique}
                          </span>
                        </div>

                        {item.placement && (
                          <p className="text-[10px] text-gray-400 truncate">
                            📍 {item.placement}
                          </p>
                        )}

                        {item.customNote && (
                          <p className="text-[10px] text-amber-300/90 italic truncate">
                            &quot;{item.customNote}&quot;
                          </p>
                        )}

                        {/* Controls & Price */}
                        <div className="flex items-center justify-between pt-1">
                          {/* Stepper */}
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-md bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center font-mono font-bold text-xs">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-md bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <div className="flex items-baseline gap-1.5 justify-end">
                              <span className="font-mono font-extrabold text-sm text-[#FACC15]">
                                {formatCurrency(itemTotal)}
                              </span>
                              {item.discountPercent > 0 && (
                                <span className="text-[10px] text-gray-500 line-through font-mono">
                                  {formatCurrency(originalTotal)}
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-gray-400 block font-mono">
                              {formatCurrency(item.unitPrice)} c/u
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Customer Details Form */}
              <div
                className={`p-4 rounded-2xl border space-y-3 ${
                  darkMode ? 'bg-[#141C2B] border-gray-800' : 'bg-slate-50 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Datos para el Envío y Cotización:
                  </span>
                </div>

                <div className="space-y-2">
                  <div>
                    <label
                      htmlFor="customer-name"
                      className="text-[10px] uppercase font-bold text-gray-400 block mb-1"
                    >
                      Nombre / Empresa:
                    </label>
                    <div className="relative">
                      <input
                        id="customer-name"
                        type="text"
                        placeholder="Ej: Marcos Albarracín"
                        value={customerInfo.name}
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className={`w-full px-3 py-2 text-xs rounded-xl border focus:outline-none focus:border-yellow-400 ${
                          darkMode
                            ? 'bg-[#0E1522] border-gray-700 text-white placeholder-gray-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="customer-city"
                      className="text-[10px] uppercase font-bold text-gray-400 block mb-1"
                    >
                      Ciudad / Localidad de Destino:
                    </label>
                    <div className="relative">
                      <input
                        id="customer-city"
                        type="text"
                        placeholder="Ej: La Plata, Bs As / Córdoba Capital"
                        value={customerInfo.city}
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({ ...prev, city: e.target.value }))
                        }
                        className={`w-full px-3 py-2 text-xs rounded-xl border focus:outline-none focus:border-yellow-400 ${
                          darkMode
                            ? 'bg-[#0E1522] border-gray-700 text-white placeholder-gray-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="customer-notes"
                      className="text-[10px] uppercase font-bold text-gray-400 block mb-1"
                    >
                      Comentarios del Logo o Enlace de Drive (Opcional):
                    </label>
                    <input
                      id="customer-notes"
                      type="text"
                      placeholder="Ej: Tengo el logo en vector PDF y lo envío al WhatsApp"
                      value={customerInfo.notes}
                      onChange={(e) =>
                        setCustomerInfo((prev) => ({ ...prev, notes: e.target.value }))
                      }
                      className={`w-full px-3 py-2 text-xs rounded-xl border focus:outline-none focus:border-yellow-400 ${
                        darkMode
                          ? 'bg-[#0E1522] border-gray-700 text-white placeholder-gray-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Reassurance pills */}
              <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Factura A y B disponible</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Envíos a todo el país</span>
                </div>
              </div>
            </div>
          )}

          {/* Drawer Footer: Total & WhatsApp Order Button */}
          {items.length > 0 && (
            <footer
              className={`p-5 sm:p-6 border-t shrink-0 space-y-4 ${
                darkMode ? 'bg-[#0E1522] border-gray-800' : 'bg-slate-50 border-gray-200'
              }`}
            >
              {/* Financial Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal prendas:</span>
                  <span className="font-mono">{formatCurrency(subtotalBeforeDiscounts)}</span>
                </div>

                {totalSavings > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span className="flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" />
                      Descuento Mayorista Aplicado:
                    </span>
                    <span className="font-mono">-{formatCurrency(totalSavings)}</span>
                  </div>
                )}

                <div className="flex justify-between items-baseline pt-2 border-t border-gray-700/50">
                  <div>
                    <span className="font-black uppercase text-sm sm:text-base">
                      Total Estimado:
                    </span>
                    <span className="text-[10px] text-gray-400 block">
                      Incluye personalización y acabados
                    </span>
                  </div>
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#FACC15]">
                    {formatCurrency(totalFinalPrice)}
                  </span>
                </div>
              </div>

              {/* WhatsApp Checkout CTA */}
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-emerald-400 text-slate-950 font-black text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2.5 shadow-xl hover:shadow-emerald-500/30 transition-all duration-200 transform hover:scale-[1.01] active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>Enviar Pedido a WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-gray-400">
                Al enviar el pedido, un asesor de RAÍCES revisará tus archivos y confirmará
                disponibilidad y fecha de despacho.
              </p>
            </footer>
          )}
        </aside>
      </div>
    </div>
  );
};
