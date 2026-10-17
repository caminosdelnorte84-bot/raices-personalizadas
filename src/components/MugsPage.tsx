import React, { useState } from 'react';
import { ArrowLeft, Check, Coffee, Gift, Heart, MessageCircle, Palette, Sparkles } from 'lucide-react';
import tazaImagen from '../assets/images/tazas_personalizadas_referencia.jpg';
import { PRODUCT_LINES } from '../data/products';
import { ProductConfigModal } from './ProductConfigModal';

interface MugsPageProps {
  darkMode: boolean;
}

const whatsappUrl =
  'https://wa.me/5492216268594?text=Hola%2C%20quiero%20consultar%20por%20tazas%20personalizadas.';

export const MugsPage: React.FC<MugsPageProps> = ({ darkMode }) => {
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const product = PRODUCT_LINES.find((line) => line.id === 'termos');

  if (!product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <p className="text-center text-red-400">No se pudo cargar la información de las tazas.</p>
      </section>
    );
  }

  const surface = darkMode ? 'bg-[#0B1017] text-white' : 'bg-white text-gray-900';
  const muted = darkMode ? 'text-gray-300' : 'text-gray-600';
  const card = darkMode ? 'bg-[#141C2B] border-gray-800' : 'bg-slate-50 border-gray-200';

  return (
    <>
      <section className={`relative overflow-hidden py-12 sm:py-20 ${surface}`}>
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href="/#catalogo"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-sky-400 transition-colors hover:text-sky-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catálogo
          </a>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-pink-300">
                <Coffee className="h-4 w-4" />
                Un regalo hecho a tu medida
              </span>

              <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Tazas personalizadas
                <span className="mt-2 block font-script text-4xl lowercase tracking-normal text-[#FACC15] sm:text-5xl">
                  para cada ocasión
                </span>
              </h1>

              <p className={`max-w-xl text-base leading-relaxed sm:text-lg ${muted}`}>
                Sorprendé con una taza que tenga tu estilo. Personalizala con una foto, un nombre,
                una frase especial o tu propio diseño: una idea original para regalar o acompañar
                tu marca.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsConfiguratorOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-4 text-sm font-black uppercase tracking-wide text-black shadow-lg transition hover:scale-[1.02] hover:shadow-yellow-400/20"
                >
                  <Palette className="h-5 w-5" />
                  Diseñar mi taza
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-6 py-4 text-sm font-extrabold text-emerald-400 transition hover:bg-emerald-500 hover:text-black"
                >
                  <MessageCircle className="h-5 w-5" />
                  Consultar por WhatsApp
                </a>
              </div>

              <p className={`text-xs ${muted}`}>Pedidos desde 1 unidad · Envíos a todo el país</p>
            </div>

            <figure className={`overflow-hidden rounded-[2rem] border shadow-2xl ${card}`}>
              <img
                src={tazaImagen}
                alt="Ejemplos de tazas personalizadas con frases y diseños a color"
                className="aspect-square w-full object-cover"
              />
              <figcaption className={`px-4 py-3 text-center text-xs ${muted}`}>
                Imagen de referencia:{' '}
                <a
                  href="https://www.t-imprime.com/storage/categorias/bS3zm3owceKcl5Xl6lchBXjnMk9UKm4lKIIh0uRZ.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 hover:text-yellow-400"
                >
                  T-Imprime
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={`border-y py-14 sm:py-20 ${darkMode ? 'border-gray-800 bg-[#080C10]' : 'border-gray-200 bg-slate-50'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-sky-400">
              Un diseño, muchas posibilidades
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
              Un detalle que habla de vos
            </h2>
            <p className={`mt-4 leading-relaxed ${muted}`}>
              Elegí el tipo de taza y el diseño. Nosotros lo llevamos a una impresión full color
              para que ese regalo, recuerdo o detalle de marca sea único.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Palette, title: 'Tu diseño', description: 'Fotos, nombres, frases o diseños propios.' },
              { icon: Sparkles, title: 'Color y detalle', description: 'Sublimación digital full color de alta definición.' },
              { icon: Gift, title: 'Para regalar', description: 'Cumpleaños, aniversarios y momentos especiales.' },
              { icon: Heart, title: 'Para tu marca', description: 'Regalos corporativos, eventos y recuerdos.' },
            ].map(({ icon: Icon, title, description }) => (
              <article key={title} className={`rounded-2xl border p-5 ${card}`}>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-extrabold uppercase">{title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-14 sm:py-20 ${surface}`}>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className={`rounded-3xl border p-6 sm:p-8 ${card}`}>
            <h2 className="text-2xl font-black uppercase">Elegí la taza ideal</h2>
            <p className={`mt-3 leading-relaxed ${muted}`}>
              Hay opciones para distintos gustos y usos. Consultanos si querés ayuda para elegir
              entre estos formatos:
            </p>
            <ul className="mt-6 space-y-3">
              {product.sizes.map((size) => (
                <li key={size} className={`flex items-start gap-3 text-sm ${muted}`}>
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{size}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 via-pink-500/5 to-sky-500/10 p-6 sm:p-8">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              ¿Ya tenés una idea?
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase">Hagamos tu taza</h2>
            <p className={`mt-4 leading-relaxed ${muted}`}>
              Armá tu pedido en el configurador, elegí el formato y contanos cómo querés
              personalizarla. También podés escribirnos para coordinar pedidos por cantidad.
            </p>
            <p className="mt-5 text-2xl font-black text-[#FACC15]">
              Desde {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(product.basePrice)}
            </p>
            <button
              type="button"
              onClick={() => setIsConfiguratorOpen(true)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-yellow-300 sm:w-auto"
            >
              <Coffee className="h-5 w-5" />
              Personalizar y armar pedido
            </button>
          </div>
        </div>
      </section>

      {isConfiguratorOpen && (
        <ProductConfigModal
          product={product}
          onClose={() => setIsConfiguratorOpen(false)}
          darkMode={darkMode}
        />
      )}
    </>
  );
};
