import React, { useState } from 'react';
import { Sparkles, Printer, Menu, X, Sun, Moon, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  isDetailPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  isDetailPage = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  interface NavLink {
    label: string;
    href: string;
    target?: string;
    rel?: string;
  }

  const navLinks: NavLink[] = [
    { label: 'Tazas', href: '/tazas-personalizadas' },
    { label: 'Remeras', href: '/remeras-personalizadas' },
    { label: 'Gorras', href: '/gorras-personalizadas' },
    { label: 'Placas', href: '/placas-aluminio-personalizadas' },
  ];
  const moreNavLinks: NavLink[] = [
    { label: 'Tabla de Talles', href: '/tabla-de-talles' },
    { label: 'Envíos', href: `${isDetailPage ? '/' : ''}#envios` },
    { label: 'Ideal Para', href: `${isDetailPage ? '/' : ''}#para-quien` },
    { label: 'Confían en Nosotros', href: `${isDetailPage ? '/' : ''}#confian-en-nosotros` },
    { label: 'Preguntas Frecuentes', href: `${isDetailPage ? '/' : ''}#faq` },
    { label: 'Contacto', href: `${isDetailPage ? '/' : ''}#contacto` },
  ];

  const madeIn3dCategories = [
    { name: 'Porta Sahumerios', count: 2, href: '/hechos-3d' },
    { name: 'Macetas', count: 2, href: '/hechos-3d' },
    { name: 'Sensoriales', count: 1, href: '/hechos-3d' },
    { name: 'Juegos Didácticos', count: 1, href: '/hechos-3d' },
    { name: 'Figuras para Colorear', count: 1, href: '/hechos-3d' },
    { name: 'Termoformados', count: 1, href: '/hechos-3d' },
  ];

  const productsCategories = [
    { name: 'Tazas', count: 3, stock: 'available', href: '/tazas-personalizadas', color: '#0EA5E9' },
    { name: 'Remeras', count: 3, stock: 'available', href: '/remeras-personalizadas', color: '#FACC15' },
    { name: 'Gorras', count: 3, stock: 'available', href: '/gorras-personalizadas', color: '#EC4899' },
    { name: 'Placas', count: 1, stock: 'available', href: '/placas-aluminio-personalizadas', color: '#FACC15' },
    { name: 'Bolsos & Morrales', count: 3, stock: 'available', href: `${isDetailPage ? '/' : ''}#catalogo`, color: '#0EA5E9' },
    { name: 'Souvenirs', count: 3, stock: 'available', href: `${isDetailPage ? '/' : ''}#catalogo`, color: '#EC4899' },
    { name: 'Llaveros', count: 2, stock: 'available', href: `${isDetailPage ? '/' : ''}#catalogo`, color: '#A855F7' },
    { name: 'Imanes & Pins', count: 2, stock: 'available', href: `${isDetailPage ? '/' : ''}#catalogo`, color: '#EC4899' },
    { name: 'Rompecabezas', count: 1, stock: 'available', href: `${isDetailPage ? '/' : ''}#catalogo`, color: '#FACC15' },
    { name: 'Neoprene', count: 1, stock: 'made-to-order', href: `${isDetailPage ? '/' : ''}#catalogo`, color: '#0EA5E9' },
    { name: 'Velas & Aromas', count: 2, stock: 'available', href: `${isDetailPage ? '/' : ''}#catalogo`, color: '#EC4899' },
    { name: 'Porta Retratos', count: 2, stock: 'available', href: `${isDetailPage ? '/' : ''}#catalogo`, color: '#FACC15' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <aside className="bg-gradient-to-r from-[#0EA5E9] via-[#EC4899] to-[#FACC15] py-1.5 px-4 text-black text-xs font-bold tracking-wider uppercase text-center shadow-md select-none">
        <div className="max-w-7xl mx-auto flex min-w-0 justify-between items-center px-2 sm:px-4">
          <span className="flex min-w-0 flex-1 items-center gap-2 text-[11px] sm:text-xs">
            <Sparkles className="w-4 h-4 text-black shrink-0" />
            <span className="min-w-0 truncate">Envíos a todo el país por Vía Cargo • Seguro en todos los envíos</span>
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
          <a href={isDetailPage ? '/' : '#'} className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#FACC15] via-[#EC4899] to-[#0EA5E9] p-0.5 flex items-center justify-center shadow-glow-yellow group-hover:scale-105 transition-transform duration-200">
                <div
                  className={`w-full h-full rounded-[10px] flex items-center justify-center ${
                    darkMode ? 'bg-[#0E1522]' : 'bg-slate-900'
                  }`}
                >
                  <Printer className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#FACC15] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-lg sm:text-xl font-black tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Raíces
              </span>
              <span className={`text-[10px] font-semibold tracking-wide -mt-0.5 ${
                darkMode ? 'text-[#FACC15]' : 'text-yellow-600'
              }`}>
                Creaciones con propósito
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-bold uppercase tracking-wide">
            {/* Productos Mega Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 transition-colors duration-150 ${
                  darkMode ? 'text-gray-300 hover:text-[#FACC15]' : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                Productos
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>

              {/* Products Mega Menu Panel */}
              <div className={`absolute left-0 top-full z-50 mt-3 w-[520px] rounded-2xl border shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 ${
                darkMode
                  ? 'border-gray-700 bg-[#101722] text-gray-200'
                  : 'border-gray-200 bg-white text-gray-800'
              }`}>
                <div className="p-4">
                  <h3 className={`text-sm font-black uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-[#FACC15]' : 'text-yellow-600'
                  }`}>
                    Categorías
                  </h3>

                  <div className="grid grid-cols-3 gap-2">
                    {productsCategories.map((cat) => (
                      <a
                        key={cat.name}
                        href={cat.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                          darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span className="text-sm font-semibold">{cat.name}</span>
                      </a>
                    ))}
                  </div>

                  <div className={`mt-3 pt-3 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <a
                      href="/#catalogo"
                      className={`block w-full text-center py-2.5 rounded-xl text-sm font-black uppercase tracking-wider ${
                        darkMode
                          ? 'bg-[#FACC15] text-black hover:bg-yellow-300'
                          : 'bg-yellow-400 text-black hover:bg-yellow-500'
                      }`}
                    >
                      Ver todo el catálogo
                    </a>
                  </div>
                </div>

                <div className={`px-4 py-3 text-center border-t ${darkMode ? 'border-gray-800 bg-[#0E1522]' : 'border-gray-100 bg-gray-50'}`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    ¿No está lo que buscás?{' '}
                    <a
                      href="https://wa.me/5492216268594?text=Hola!%20Quiero%20consultar%20por%20un%20producto%20personalizado"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-bold hover:underline"
                    >
                      Pedímelo por WhatsApp ↗
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Hecho en 3D Mega Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 transition-colors duration-150 ${
                  darkMode ? 'text-gray-300 hover:text-[#FACC15]' : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                Hecho en 3D
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>

              {/* Mega Menu Panel */}
              <div className={`absolute left-0 top-full z-50 mt-3 w-[520px] rounded-2xl border shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 ${
                darkMode
                  ? 'border-gray-700 bg-[#101722] text-gray-200'
                  : 'border-gray-200 bg-white text-gray-800'
              }`}>
                <div className="p-4">
                  <h3 className={`text-sm font-black uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-[#FACC15]' : 'text-yellow-600'
                  }`}>
                    Categorías 3D
                  </h3>

                  <div className="grid grid-cols-3 gap-2">
                    {madeIn3dCategories.map((cat) => (
                      <a
                        key={cat.name}
                        href={cat.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                          darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: '#FACC15' }}
                        />
                        <span className="text-sm font-semibold">{cat.name}</span>
                      </a>
                    ))}
                  </div>

                  <div className={`mt-3 pt-3 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <a
                      href="/hechos-3d"
                      className={`block w-full text-center py-2.5 rounded-xl text-sm font-black uppercase tracking-wider ${
                        darkMode
                          ? 'bg-[#FACC15] text-black hover:bg-yellow-300'
                          : 'bg-yellow-400 text-black hover:bg-yellow-500'
                      }`}
                    >
                      Ver todos los productos 3D
                    </a>
                  </div>
                </div>

                <div className={`px-4 py-3 text-center border-t ${darkMode ? 'border-gray-800 bg-[#0E1522]' : 'border-gray-100 bg-gray-50'}`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    ¿No está lo que buscás?{' '}
                    <a
                      href="https://wa.me/5492216268594?text=Hola!%20Quiero%20consultar%20por%20un%20producto%203D%20personalizado"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-bold hover:underline"
                    >
                      Pedímelo por WhatsApp ↗
                    </a>
                  </p>
                </div>
              </div>
            </div>

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
              className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-emerald-500 text-black font-extrabold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-md hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4 text-black" />
              <span className="hidden sm:inline font-mono">221 626 8594</span>
              <span className="sm:hidden font-mono text-xs">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-xl ${
                darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div
            className={`xl:hidden px-4 pt-2 pb-6 space-y-2 border-t ${
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
                target={link.target}
                rel={link.rel}
                onClick={() => !link.target && setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  darkMode
                    ? 'text-gray-200 hover:bg-gray-800 hover:text-[#FACC15]'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-yellow-600'
                }`}
              >
                {link.label}
                {link.target && <span className="ml-1 text-[9px] text-gray-400">↗</span>}
              </a>
            ))}
            <a
              key="hecho-en-3d"
              href="/hechos-3d"
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                darkMode
                  ? 'text-gray-200 hover:bg-gray-800 hover:text-[#FACC15]'
                  : 'text-gray-800 hover:bg-gray-100 hover:text-yellow-600'
              }`}
            >
              Hecho en 3D
            </a>
            <div className="pt-2">
              <a
                href="https://wa.me/5492216268594?text=Hola%20Raíces%20Personalizaciones,%20quiero%20información%20sobre%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-black font-extrabold py-3 rounded-xl text-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-black" />
                <span>Escríbenos al WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
