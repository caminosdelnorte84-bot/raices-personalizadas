import React, { useState } from 'react';
import { Sparkles, Printer, MessageCircle, Menu, X, Sun, Moon, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  const navLinks = [
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Envíos Nacionales', href: '#envios' },
    { label: 'Ideal Para', href: '#para-quien' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <aside className="bg-gradient-to-r from-[#0EA5E9] via-[#EC4899] to-[#FACC15] py-1.5 px-4 text-black text-xs font-bold tracking-wider uppercase text-center shadow-md select-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-4">
          <span className="flex items-center gap-2 text-[11px] sm:text-xs">
            <Sparkles className="w-4 h-4 text-black shrink-0" />
            <span className="truncate">Envíos seguros a nivel nacional • Calidad garantizada en cada producto</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-3 font-extrabold text-[11px]">
            <span>¡Atención directa y personalizada!</span>
            <span className="bg-black text-white px-2 py-0.5 rounded text-[10px] font-mono">
              WhatsApp 2216268594
            </span>
          </span>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-200 border-b ${
          darkMode
            ? 'bg-[#0A0F17]/95 backdrop-blur-md border-gray-800/80 text-gray-100'
            : 'bg-white/95 backdrop-blur-md border-gray-200 text-gray-900 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#FACC15] via-[#EC4899] to-[#0EA5E9] p-0.5 flex items-center justify-center shadow-glow-yellow group-hover:scale-105 transition-transform duration-200">
                <div
                  className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                    darkMode ? 'bg-[#0E1522]' : 'bg-slate-900'
                  }`}
                >
                  <Printer className="w-5 h-5 sm:w-6 sm:h-6 text-[#FACC15] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight leading-none">
                RAÍCES{' '}
                <span className="font-script text-[#FACC15] text-2xl sm:text-3xl tracking-normal inline-block transform -rotate-2">
                  Personalizaciones
                </span>
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold mt-1 flex items-center gap-1.5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] inline-block" /> Crea
                <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] inline-block" /> Imprime
                <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] inline-block" /> Impacta
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs xl:text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap transition-colors duration-150 hover:text-[#FACC15] ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Area: Cart, Theme Toggle & WhatsApp */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart / Pedido Button */}
            <button
              type="button"
              onClick={openCart}
              className={`relative px-3 py-2 rounded-xl transition-all duration-200 flex items-center gap-2 border ${
                totalItems > 0
                  ? 'bg-yellow-400 text-black border-yellow-300 font-extrabold shadow-glow-yellow'
                  : darkMode
                  ? 'bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700'
                  : 'bg-gray-100 border-gray-200 text-gray-800 hover:bg-gray-200'
              }`}
              title="Ver mi pedido armado"
              aria-label="Abrir carrito de pedidos"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline text-xs uppercase font-extrabold tracking-wider">
                Pedido
              </span>
              {totalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-black text-yellow-400 text-[10px] font-mono font-black flex items-center justify-center -ml-0.5">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={onToggleTheme}
              type="button"
              className={`p-2 rounded-xl transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              aria-label="Alternar modo oscuro"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href="https://wa.me/5492216268594?text=Hola%20Raíces%20Personalizaciones,%20quiero%20información%20sobre%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-emerald-500 text-black font-extrabold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-md hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-black text-black" />
              <span className="hidden sm:inline font-mono">221 626 8594</span>
              <span className="sm:hidden font-mono text-xs">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl ${
                darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden px-4 pt-2 pb-6 space-y-2 border-t ${
              darkMode ? 'bg-[#0E1522] border-gray-800' : 'bg-white border-gray-200'
            }`}
          >
            {/* Mobile Cart Button */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openCart();
              }}
              className="w-full py-3 px-4 rounded-xl bg-yellow-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-between shadow-md"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                <span>Ver Mi Pedido Armado</span>
              </span>
              <span className="bg-black text-yellow-400 px-2 py-0.5 rounded-full text-xs font-mono">
                {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}
              </span>
            </button>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  darkMode
                    ? 'text-gray-200 hover:bg-gray-800 hover:text-[#FACC15]'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-yellow-600'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="https://wa.me/5492216268594?text=Hola%20Raíces%20Personalizaciones,%20quiero%20información%20sobre%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-black font-extrabold py-3 rounded-xl text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Escríbenos al WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
