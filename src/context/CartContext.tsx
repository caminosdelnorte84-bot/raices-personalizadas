import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, CustomerOrderInfo } from '../types';
import { WHATSAPP_PHONE } from '../data/products';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQty: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
  subtotalBeforeDiscounts: number;
  totalSavings: number;
  totalFinalPrice: number;
  customerInfo: CustomerOrderInfo;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerOrderInfo>>;
  formatCurrency: (amount: number) => string;
  generateWhatsAppOrderUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'raices_cart_v1';
const CUSTOMER_STORAGE_KEY = 'raices_customer_v1';

export const formatPriceARS = (amount: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customerInfo, setCustomerInfo] = useState<CustomerOrderInfo>(() => {
    try {
      const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      return saved
        ? JSON.parse(saved)
        : { name: '', city: '', notes: '' };
    } catch {
      return { name: '', city: '', notes: '' };
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore write errors
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customerInfo));
    } catch {
      // Ignore write errors
    }
  }, [customerInfo]);

  const addToCart = (newItemData: Omit<CartItem, 'id'>) => {
    setItems((prevItems) => {
      // Find matching item configuration (same product, size, color, technique, placement)
      const existingIndex = prevItems.findIndex(
        (it) =>
          it.productId === newItemData.productId &&
          it.size === newItemData.size &&
          it.color.name === newItemData.color.name &&
          it.technique === newItemData.technique &&
          it.placement === newItemData.placement
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        const existing = updated[existingIndex];
        const combinedQty = existing.quantity + newItemData.quantity;

        // Recalculate price with new quantity discount if applicable
        const unitPrice = newItemData.unitPrice;
        updated[existingIndex] = {
          ...existing,
          quantity: combinedQty,
          unitPrice,
          customNote: newItemData.customNote || existing.customNote,
        };
        return updated;
      }

      const generatedId = `${newItemData.productId}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      return [...prevItems, { ...newItemData, id: generatedId }];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: newQty,
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Totals
  const totalItems = items.reduce((acc, it) => acc + it.quantity, 0);

  const subtotalBeforeDiscounts = items.reduce(
    (acc, it) => acc + it.basePrice * it.quantity,
    0
  );

  const totalFinalPrice = items.reduce(
    (acc, it) => acc + it.unitPrice * it.quantity,
    0
  );

  const totalSavings = Math.max(0, subtotalBeforeDiscounts - totalFinalPrice);

  const generateWhatsAppOrderUrl = (): string => {
    const greeting = '👋 *¡HOLA RAÍCES PERSONALIZACIONES!*';
    const intro = 'Quiero confirmar y presupuestar formalmente el siguiente pedido armado desde la web:\n';

    const customerDetails = [
      customerInfo.name ? `👤 *Cliente:* ${customerInfo.name}` : '',
      customerInfo.city ? `📍 *Destino / Envío:* ${customerInfo.city}` : '',
      customerInfo.notes ? `📝 *Nota / Logo:* ${customerInfo.notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const itemsSummary = items
      .map((item, idx) => {
        const itemTotal = item.unitPrice * item.quantity;
        const discountText =
          item.discountPercent > 0 ? ` (${item.discountPercent}% OFF aplicado)` : '';

        return (
          `*${idx + 1}. ${item.title.toUpperCase()}*\n` +
          `   • *Formato / Talle:* ${item.size}\n` +
          `   • *Color:* ${item.color.name}\n` +
          `   • *Técnica:* ${item.technique}\n` +
          (item.placement ? `   • *Ubicación:* ${item.placement}\n` : '') +
          `   • *Cantidad:* ${item.quantity} ${item.quantity === 1 ? 'unidad' : 'unidades'}\n` +
          `   • *Precio unitario:* ${formatPriceARS(item.unitPrice)}${discountText}\n` +
          `   • *Subtotal:* ${formatPriceARS(itemTotal)}` +
          (item.customNote ? `\n   • *Detalle:* ${item.customNote}` : '')
        );
      })
      .join('\n\n');

    const totalsSection =
      `\n━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📦 *Total de Prendas / Artículos:* ${totalItems}\n` +
      (totalSavings > 0
        ? `🎁 *Ahorro Mayorista Aplicado:* ${formatPriceARS(totalSavings)}\n`
        : '') +
      `💰 *VALOR TOTAL ESTIMADO:* ${formatPriceARS(totalFinalPrice)}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `¿Me confirman tiempos de producción y cómo les envío los archivos gráficos para iniciar el armado de muestra? ¡Muchas gracias!`;

    const fullMessage = [
      greeting,
      intro,
      customerDetails ? `${customerDetails}\n\n*📦 DETALLE DEL PEDIDO:*` : '*📦 DETALLE DEL PEDIDO:*',
      itemsSummary,
      totalsSection,
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(fullMessage)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        totalItems,
        subtotalBeforeDiscounts,
        totalSavings,
        totalFinalPrice,
        customerInfo,
        setCustomerInfo,
        formatCurrency: formatPriceARS,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
