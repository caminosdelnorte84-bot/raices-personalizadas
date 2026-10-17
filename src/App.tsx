/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { MugsPage } from './components/MugsPage';
import { ShippingNationwide } from './components/ShippingNationwide';
import { AudienceSegments } from './components/AudienceSegments';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { CartDrawer } from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

export default function App() {
  // Dark mode by default as requested: "Asegúrate de incluir un modo oscuro por defecto."
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isMugsPage, setIsMugsPage] = useState(
    () => window.location.pathname === '/tazas-personalizadas'
  );

  const openMugsPage = () => {
    window.history.pushState({}, '', '/tazas-personalizadas');
    setIsMugsPage(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-[#080C10]', 'text-gray-100');
      document.body.classList.remove('bg-white', 'text-gray-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-[#080C10]', 'text-gray-100');
      document.body.classList.add('bg-white', 'text-gray-900');
    }
  }, [darkMode]);

  useEffect(() => {
    const handlePopState = () => {
      setIsMugsPage(window.location.pathname === '/tazas-personalizadas');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <CartProvider>
      <div
        className={`min-h-screen transition-colors duration-200 ${
          darkMode ? 'bg-[#080C10] text-gray-100' : 'bg-white text-gray-900'
        }`}
      >
        {/* Sticky Navigation Bar */}
        <Navbar
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode((prev) => !prev)}
          isDetailPage={isMugsPage}
        />

        {/* Main Content Sections */}
        <main>
          {isMugsPage ? (
            <MugsPage darkMode={darkMode} />
          ) : (
            <>
              {/* Hero Banner & 4 Pillars Strip */}
              <Hero darkMode={darkMode} />

              {/* Product Catalog (Expanded with Customizer & Volume Discount Orders) */}
              <ProductCatalog darkMode={darkMode} onOpenMugsPage={openMugsPage} />

              {/* Envíos a todo el país - Cobertura y Tiempos de Entrega Nacionales */}
              <ShippingNationwide darkMode={darkMode} />

              {/* 5 Audience Segments: Para Quién (Empresas, Regalos, Eventos, Equipos, Colegios) */}
              <AudienceSegments darkMode={darkMode} />

              {/* Frequently Asked Questions (FAQ) Accordion */}
              <FaqSection darkMode={darkMode} />
            </>
          )}
        </main>

        {/* Footer & Final Call to Action */}
        <Footer darkMode={darkMode} isDetailPage={isMugsPage} />

        {/* Sticky, Floating WhatsApp Button in the bottom-right corner */}
        <FloatingWhatsAppButton darkMode={darkMode} />

        {/* Slide-over Cart / Order Drawer */}
        <CartDrawer darkMode={darkMode} />
      </div>
    </CartProvider>
  );
}
