import React, { useState, useMemo } from 'react';
import {
  X,
  Check,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Truck,
  Layers,
  MessageSquare,
  Plus,
  Minus,
  Info,
  TrendingDown,
} from 'lucide-react';
import { ProductLine, ProductColor, ProductTechnique, VolumeDiscount } from '../types';
import { useCart, formatPriceARS } from '../context/CartContext';

interface ProductConfigModalProps {
  product: ProductLine | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProductConfigModal: React.FC<ProductConfigModalProps> = ({
  product,
  onClose,
  darkMode,
}) => {
  const { addToCart } = useCart();

  if (!product) return null;

  // Selected state
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Estándar');
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.colors[0] || { name: 'Negro', hex: '#111111' }
  );
  const [selectedTechnique, setSelectedTechnique] = useState<ProductTechnique>(
    product.techniques[0] || {
      id: 'default',
      name: 'Estampado Estándar',
      tag: 'Principal',
      desc: '',
      extraPerUnit: 0,
    }
  );
  const [selectedPlacement, setSelectedPlacement] = useState<string>(
    product.placements && product.placements.length > 0 ? product.placements[0] : ''
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [customNote, setCustomNote] = useState<string>('');
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  // Calculate volume discount based on quantity
  const discounts: VolumeDiscount[] = product.volumeDiscounts || [
    { minQty: 1, discountPercent: 0, label: 'Precio base' },
    { minQty: 6, discountPercent: 12, label: '12% OFF' },
    { minQty: 24, discountPercent: 22, label: '22% OFF Mayorista' },
    { minQty: 50, discountPercent: 32, label: '32% OFF Gran Volumen' },
  ];

  const currentDiscount = useMemo(() => {
    const sorted = [...discounts].sort((a, b) => b.minQty - a.minQty);
    const match = sorted.find((d) => quantity >= d.minQty);
    return match || { minQty: 1, discountPercent: 0, label: 'Precio base' };
  }, [discounts, quantity]);

  // Unit and total price
  const baseUnitPrice = product.basePrice + (selectedTechnique.extraPerUnit || 0);
  const discountMultiplier = 1 - currentDiscount.discountPercent / 100;
  const unitPriceAfterDiscount = Math.round(baseUnitPrice * discountMultiplier);
  const totalPrice = unitPriceAfterDiscount * quantity;
  const originalTotalPrice = baseUnitPrice * quantity;
  const totalSavings = Math.max(0, originalTotalPrice - totalPrice);

  const handleAdd = () => {
    addToCart({
      productId: product.id,
      title: product.title,
      subtitle: product.subtitle,
      imageUrl: product.imageUrl,
      size: selectedSize,
      color: selectedColor,
      technique: selectedTechnique.name,
      placement: selectedPlacement || undefined,
      quantity,
      basePrice: baseUnitPrice,
      unitPrice: unitPriceAfterDiscount,
      discountPercent: currentDiscount.discountPercent,
      customNote: customNote.trim() || undefined,
    });

    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 600);
  };

  const quantityPresets = [1, 6, 12, 24, 50, 100];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className={`relative w-full max-w-4xl my-auto rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 max-h-[92vh] flex flex-col ${
          darkMode
            ? 'bg-[#0E1522] border-gray-700/80 text-gray-100'
            : 'bg-white border-gray-200 text-gray-900 shadow-2xl'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`px-5 sm:px-8 py-4 sm:py-5 border-b flex items-center justify-between shrink-0 ${
            darkMode ? 'bg-[#141C2B] border-gray-800' : 'bg-slate-50 border-gray-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`w-9 h-9 rounded-xl ${product.badgeBg} ${product.badgeText} font-black text-xs flex items-center justify-center font-mono shadow-sm`}
            >
              0{product.number}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-lg sm:text-xl uppercase tracking-tight">
                  {product.title}
                </h3>
                <span className="font-semibold text-[#FACC15] font-script text-base">
                  {product.subtitle}
                </span>
              </div>
              <p
                className={`text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                } hidden sm:block`}
              >
                Configura talles, colores, técnicas y arma tu pedido con descuento mayorista.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              darkMode
                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto p-5 sm:p-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column: Visual Preview & Specs */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {/* Image Preview Box */}
            <div
              className={`relative rounded-2xl overflow-hidden border aspect-4/3 flex items-center justify-center p-3 group shadow-inner ${
                darkMode ? 'bg-[#161F2E] border-gray-800' : 'bg-slate-100 border-gray-200'
              }`}
            >
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-6 text-gray-400">
                  <Sparkles className="w-12 h-12 text-yellow-400 mb-2" />
                  <span className="font-bold text-sm">Vista Previa</span>
                </div>
              )}

              {/* Selected Color indicator badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-white">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-white/30 shrink-0"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <span className="font-medium text-[11px] truncate max-w-[130px]">
                  {selectedColor.name}
                </span>
              </div>

              {/* Price From badge */}
              <div className="absolute bottom-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full font-extrabold text-xs shadow-md">
                Desde {formatPriceARS(product.basePrice)}
              </div>
            </div>

            {/* Quality and shipping pills */}
            <div
              className={`p-4 rounded-2xl border text-xs space-y-2.5 ${
                darkMode ? 'bg-[#141C2B]/60 border-gray-800' : 'bg-slate-50 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-[#FACC15]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Garantía de Calidad RAÍCES</span>
              </div>
              <ul className="space-y-1.5 text-[11px] text-gray-400 pl-1">
                {product.features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-gray-700/50 flex items-center gap-2 text-sky-400 text-[11px]">
                <Truck className="w-3.5 h-3.5 shrink-0" />
                <span>Despachos a todo el país (Andreani / Correo Arg.)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* 1. Size / Format Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  1. Medida / Formato / Talle:
                </span>
                <span className="text-yellow-400 font-bold">{selectedSize}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center truncate ${
                        isSelected
                          ? 'bg-yellow-400 text-black border-yellow-400 shadow-glow-yellow scale-[1.02]'
                          : darkMode
                          ? 'bg-[#161F2E] border-gray-800 text-gray-300 hover:border-gray-600'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Color Palette Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-pink-500" />
                  2. Color de Prenda / Base:
                </span>
                <span className="text-pink-400 font-bold">{selectedColor.name}</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {product.colors.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all ${
                        isSelected
                          ? darkMode
                            ? 'bg-gray-800 border-yellow-400 text-white ring-2 ring-yellow-400/30'
                            : 'bg-amber-50 border-amber-500 text-gray-900 ring-2 ring-amber-400/30'
                          : darkMode
                          ? 'bg-[#161F2E] border-gray-800 text-gray-300 hover:border-gray-600'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                      title={color.name}
                    >
                      <span
                        className={`w-4 h-4 rounded-full shrink-0 ${
                          color.border ? 'border border-gray-400' : ''
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="font-medium text-[11px]">{color.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Technique Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  3. Técnica de Personalización:
                </span>
                <span className="text-sky-400 font-bold">{selectedTechnique.name}</span>
              </div>

              <div className="space-y-2">
                {product.techniques.map((tech) => {
                  const isSelected = selectedTechnique.id === tech.id;
                  return (
                    <div
                      key={tech.id}
                      onClick={() => setSelectedTechnique(tech)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? darkMode
                            ? 'bg-[#1B273A] border-sky-400/80 shadow-md ring-1 ring-sky-400/30'
                            : 'bg-sky-50/80 border-sky-500 shadow-sm ring-1 ring-sky-400/30'
                          : darkMode
                          ? 'bg-[#161F2E] border-gray-800 hover:border-gray-700'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-bold text-xs ${
                              isSelected
                                ? 'text-sky-400'
                                : darkMode
                                ? 'text-gray-200'
                                : 'text-gray-800'
                            }`}
                          >
                            {tech.name}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-black/30 text-yellow-400">
                            {tech.tag}
                          </span>
                        </div>
                        <p
                          className={`text-[11px] leading-tight ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        >
                          {tech.desc}
                        </p>
                      </div>

                      {tech.extraPerUnit && tech.extraPerUnit > 0 ? (
                        <span className="text-[10px] font-mono font-bold text-emerald-400 shrink-0">
                          +{formatPriceARS(tech.extraPerUnit)}
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-gray-400 shrink-0">
                          Incluida
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Placement Selector (Optional) */}
            {product.placements && product.placements.length > 0 && (
              <div className="space-y-2">
                <span className="font-extrabold uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-yellow-400" />
                  4. Posición / Ubicación del Estampado:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.placements.map((plc) => {
                    const isSelected = selectedPlacement === plc;
                    return (
                      <button
                        key={plc}
                        type="button"
                        onClick={() => setSelectedPlacement(plc)}
                        className={`p-2.5 rounded-xl text-[11px] font-bold border text-left transition-all ${
                          isSelected
                            ? 'bg-yellow-400/10 border-yellow-400 text-yellow-400 font-extrabold'
                            : darkMode
                            ? 'bg-[#161F2E] border-gray-800 text-gray-300 hover:border-gray-700'
                            : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        {plc}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 5. Quantity & Volume Pricing Card */}
            <div
              className={`p-4 rounded-2xl border space-y-3.5 ${
                darkMode ? 'bg-[#131A26] border-gray-800' : 'bg-slate-50 border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider block">
                    Cantidad a Pedir:
                  </span>
                  <span className="text-[11px] text-gray-400">
                    Descuento automático por volumen mayorista
                  </span>
                </div>

                {/* Stepper */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-40 text-white flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className={`w-14 text-center font-mono font-bold text-sm py-1 rounded-lg border focus:outline-none focus:border-yellow-400 ${
                      darkMode ? 'bg-[#0E1522] border-gray-700 text-white' : 'bg-white border-gray-300 text-black'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] text-gray-400 font-semibold uppercase mr-1">
                  Atajos:
                </span>
                {quantityPresets.map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setQuantity(qty)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-all ${
                      quantity === qty
                        ? 'bg-yellow-400 text-black shadow-sm'
                        : darkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {qty}u
                  </button>
                ))}
              </div>

              {/* Volume scale display */}
              <div
                className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                  currentDiscount.discountPercent > 0
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : darkMode
                    ? 'bg-gray-800/40 border-gray-800 text-gray-400'
                    : 'bg-white border-gray-200 text-gray-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Escala activa:</strong> {currentDiscount.label}
                  </span>
                </div>
                {totalSavings > 0 && (
                  <span className="font-bold text-emerald-400">
                    Ahorras {formatPriceARS(totalSavings)}
                  </span>
                )}
              </div>
            </div>

            {/* 6. Custom Note / Logo Text */}
            <div className="space-y-1.5">
              <label
                htmlFor="custom-note"
                className="text-[11px] font-bold uppercase text-gray-400 flex items-center gap-1.5"
              >
                <span>Texto a estampar, nombre o detalles del logo (Opcional):</span>
              </label>
              <input
                id="custom-note"
                type="text"
                placeholder="Ej: Logo de mi empresa en el frente / Nombre 'Lautaro' en espalda"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-yellow-400 transition-colors ${
                  darkMode
                    ? 'bg-[#161F2E] border-gray-800 text-white placeholder-gray-500'
                    : 'bg-slate-50 border-gray-200 text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Modal Footer: Live Total & Actions */}
        <div
          className={`px-5 sm:px-8 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${
            darkMode ? 'bg-[#141C2B] border-gray-800' : 'bg-slate-50 border-gray-200'
          }`}
        >
          {/* Price Breakdown */}
          <div className="flex items-baseline gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">
                Total por {quantity} {quantity === 1 ? 'unidad' : 'unidades'}:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#FACC15]">
                  {formatPriceARS(totalPrice)}
                </span>
                {totalSavings > 0 && (
                  <span className="text-xs text-gray-400 line-through font-mono">
                    {formatPriceARS(originalTotalPrice)}
                  </span>
                )}
              </div>
            </div>

            <div className="text-right sm:text-left text-[11px] text-gray-400">
              <span>{formatPriceARS(unitPriceAfterDiscount)} c/u</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className={`flex-1 sm:flex-none py-3 px-4 rounded-xl border text-xs font-bold uppercase transition-colors ${
                darkMode
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Cerrar
            </button>

            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 sm:flex-none py-3 px-6 rounded-xl font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95 ${
                addedSuccess
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 hover:from-yellow-300 hover:to-amber-400 text-black shadow-glow-yellow'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Agregado al Pedido!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Agregar al Pedido</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
