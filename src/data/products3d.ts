/**
 * Product lines for 3D products.
 *
 * This module provides product data that can be sourced either from static data
 * or from the Cloudflare Worker API connected to the Raíces ERP system.
 *
 * To use the API source, set USE_API_SOURCE to true and ensure the API endpoint
 * is accessible. The API will provide live stock data from the ERP Supabase project.
 *
 * User authorization: "ahora quiero consultarte como hacer para agregar stoch nuevos productos
 * yo tengo una app mia que se llama raices erp en donde tengo stock de cosas y qye quiero saber
 * si se puede fucionar con venta" - User chose "Worker propio (recomendado)" approach.
 */

// Set to true to use the Cloudflare Worker API, false for static data
export const USE_API_SOURCE = false;

// API endpoint (relative to the tienda domain, or absolute to the worker)
export const API_BASE_URL = '/api/products';

// Static product data fallback - used when USE_API_SOURCE is false
// This is the original data that was created earlier in the session
export const DEFAULT_VOLUME_DISCOUNTS_3D = [
  { minQty: 1, discountPercent: 0, label: '1 a 5 unids: Precio Base' },
  { minQty: 6, discountPercent: 10, label: '6 a 23 unids: 10% OFF' },
  { minQty: 24, discountPercent: 18, label: '24 a 49 unids: 18% OFF Mayorista' },
  { minQty: 50, discountPercent: 25, label: '50+ unids: 25% OFF Gran Volumen' }
];

// Static product lines - used as fallback when API is unavailable
export const PRODUCT_LINES_3D = [
  {
    id: 'portasahumerio-moai',
    number: 1,
    title: 'PORTASA HUMEROS MOAI',
    subtitle: 'Estilo Pascua · Humo decorativo',
    accentColor: '#FACC15',
    badgeBg: 'bg-yellow-400',
    badgeText: 'text-black',
    basePrice: 3500,
    imageUrl: '/src/assets/images/impresion_3d.svg',
    description: 'Portasahumerios con forma de cabeza Moai. El humo sale de la parte superior creando un efecto misterioso y decorativo.',
    tags: [
      { text: '3D Printed', icon: 'Printer', color: 'text-sky-400' },
      { text: 'Decorativo', icon: 'Sparkles', color: 'text-yellow-400' }
    ],
    subtypes: [
      { name: 'Negro mate', tag: 'Standard', tagColor: 'text-gray-400' },
      { name: 'Blanco puro', tag: 'Standard', tagColor: 'text-gray-400' }
    ],
    sizes: ['Standard (12cm alto)', 'Grande (18cm alto)'],
    colors: [
      { name: 'Negro Mate', hex: '#1a1a1a' },
      { name: 'Blanco Puro', hex: '#FFFFFF', border: true },
      { name: 'Gris Piedra', hex: '#6b7280' },
      { name: 'Terracota', hex: '#b45309' }
    ],
    techniques: [
      { id: 'fdm', name: 'Impresión FDM Premium', tag: 'Estándar', desc: 'Capas finas, acabado suave listo para usar.', extraPerUnit: 0 },
      { id: 'resin', name: 'Resina HD (Detalle extra)', tag: 'Premium', desc: 'Mayor detalle y suavidad superficial.', extraPerUnit: 1200 }
    ],
    placements: [],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS_3D,
    whatsappMessage: 'Hola, quiero consultar por el Portasahumerios MOAI en:',
    features: [
      'Diseño exclusivo inspirado en la Isla de Pascua',
      'El humo sale de la coronilla creando efecto visual',
      'Compatible con inciensos de palo estándar',
      'Material PLA biodegradable de alta calidad'
    ]
  },
  {
    id: 'portasahumerio-espartano',
    number: 2,
    title: 'PORTASA HUMEROS ESPARTANO',
    subtitle: 'Leonidas · Lanzando lanza',
    accentColor: '#EC4899',
    badgeBg: 'bg-pink-500',
    badgeText: 'text-white',
    basePrice: 4200,
    imageUrl: '/src/assets/images/impresion_3d.svg',
    description: 'Portasahumerios con figura de guerrero espartano lanzando su lanza. El incienso se coloca en la punta de la lanza.',
    tags: [
      { text: 'Edición Especial', icon: 'Star', color: 'text-pink-400' },
      { text: 'Coleccionable', icon: 'Gem', color: 'text-yellow-400' }
    ],
    subtypes: [
      { name: 'Guerrero completo', tag: 'Incluye base', tagColor: 'text-sky-400' }
    ],
    sizes: ['Pequeño (15cm largo)', 'Grande (22cm largo)'],
    colors: [
      { name: 'Gris Oscuro', hex: '#374151' },
      { name: 'Negro', hex: '#111111' },
      { name: 'Bronce', hex: '#b45309' },
      { name: 'Blanco', hex: '#FFFFFF', border: true }
    ],
    techniques: [
      { id: 'fdm', name: 'Impresión FDM Premium', tag: 'Estándar', desc: 'Alta resistencia, ideal para piezas detalladas.', extraPerUnit: 0 },
      { id: 'resin', name: 'Resina HD (Ultra detalle)', tag: 'Premium', desc: 'Máximo detalle en cada músculo y textura.', extraPerUnit: 1500 }
    ],
    placements: [],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS_3D,
    whatsappMessage: 'Hola, quiero consultar por el Portasahumerios ESPARTANO en:',
    features: [
      'Figura articulada de guerrero espartano',
      'Lanza incluida como soporte de incienso',
      'Base estable incluida',
      'Ideal para coleccionistas'
    ]
  },
  {
    id: 'maceta-rostro-shhh',
    number: 3,
    title: 'MACETA ROSTRO "SHHH"',
    subtitle: 'Silencio creativo · Plantas suculentas',
    accentColor: '#0EA5E9',
    badgeBg: 'bg-sky-400',
    badgeText: 'text-black',
    basePrice: 4800,
    imageUrl: '/src/assets/images/impresion_3d.svg',
    description: 'Maceta escultórica en forma de rostro humano con el dedo en los labios. Perfecta para suculentas y cactus.',
    tags: [
      { text: 'Arte funcional', icon: 'Palette', color: 'text-sky-400' },
      { text: 'Plantas', icon: 'Flower', color: 'text-emerald-400' }
    ],
    subtypes: [
      { name: 'Standard', tag: 'Con drenaje', tagColor: 'text-sky-400' },
      { name: 'Sin drenaje', tag: 'Decorativa', tagColor: 'text-yellow-400' }
    ],
    sizes: ['Chica (15cm alto)', 'Mediana (22cm alto)', 'Grande (30cm alto)'],
    colors: [
      { name: 'Blanco Mármol', hex: '#f5f5f4', border: true },
      { name: 'Negro Mate', hex: '#18181b' },
      { name: 'Rosa Pastel', hex: '#fda4af' },
      { name: 'Azul Cielo', hex: '#7dd3fc' },
      { name: 'Verde Salvia', hex: '#86efac' }
    ],
    techniques: [
      { id: 'fdm', name: 'PLA Biodegradable', tag: 'Eco', desc: 'Material sustentable, acabado mate suave.', extraPerUnit: 0 },
      { id: 'petg', name: 'PETG Resistente', tag: 'Outdoor', desc: 'Mayor resistencia a intemperie.', extraPerUnit: 800 }
    ],
    placements: [],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS_3D,
    whatsappMessage: 'Hola, quiero consultar por la Maceta Rostro SHHH en:',
    features: [
      'Diseño artístico único con gesto de silencio',
      'Compatible con suculentas y plantas pequeñas',
      'Opción con o sin drenaje',
      'Material PLA biodegradable o PETG resistente'
    ]
  },
  {
    id: 'maceta-rostro-ojos-cerrados',
    number: 4,
    title: 'MACETA ROSTRO "OJOS CERRADOS"',
    subtitle: 'Meditación · Relax natural',
    accentColor: '#25D366',
    badgeBg: 'bg-emerald-500',
    badgeText: 'text-white',
    basePrice: 4800,
    imageUrl: '/src/assets/images/impresion_3d.svg',
    description: 'Maceta escultórica con rostro humano tapándose los ojos con las manos. Diseño zen que transmite paz.',
    tags: [
      { text: 'Zen', icon: 'Sun', color: 'text-yellow-400' },
      { text: 'Bienestar', icon: 'Heart', color: 'text-pink-400' }
    ],
    subtypes: [
      { name: 'Standard', tag: 'Con drenaje', tagColor: 'text-sky-400' },
      { name: 'Pareja', tag: 'Set 2 unidades', tagColor: 'text-yellow-400' }
    ],
    sizes: ['Chica (18cm alto)', 'Mediana (25cm alto)'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF', border: true },
      { name: 'Beige Natural', hex: '#d4a373' },
      { name: 'Gris Piedra', hex: '#6b7280' },
      { name: 'Terracota', hex: '#b45309' }
    ],
    techniques: [
      { id: 'fdm', name: 'PLA Biodegradable', tag: 'Eco', desc: 'Acabado suave y amigable con el medio ambiente.', extraPerUnit: 0 }
    ],
    placements: [],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS_3D,
    whatsappMessage: 'Hola, quiero consultar por la Maceta Rostro OJOS CERRADOS en:',
    features: [
      'Diseño zen con manos cubriendo los ojos',
      'Transmite paz y serenidad',
      'Ideal para suculentas y plantas de sombra',
      'Disponible en set de 2 unidades'
    ]
  },
  {
    id: 'kit-sensorial-neurodiverso',
    number: 5,
    title: 'KIT SENSORIAL NEURODIVERSO',
    subtitle: 'Fidgets táctiles · Calma y enfoque',
    accentColor: '#A855F7',
    badgeBg: 'bg-purple-500',
    badgeText: 'text-white',
    basePrice: 2800,
    imageUrl: '/src/assets/images/impresion_3d.svg',
    description: 'Kit de objetos sensoriales diseñados para ayudar en la concentración y el manejo de la sobrecarga sensorial.',
    tags: [
      { text: 'Terapéutico', icon: 'Brain', color: 'text-purple-400' },
      { text: 'Inclusivo', icon: 'Users', color: 'text-sky-400' }
    ],
    subtypes: [
      { name: 'Kit básico', tag: '3 piezas', tagColor: 'text-sky-400' },
      { name: 'Kit completo', tag: '6 piezas', tagColor: 'text-purple-400' }
    ],
    sizes: ['Pequeño (5cm)', 'Mediano (8cm)', 'Grande (12cm)'],
    colors: [
      { name: 'Mix colores', hex: '#FACC15' },
      { name: 'Mono blanco', hex: '#FFFFFF', border: true },
      { name: 'Mono negro', hex: '#111111' }
    ],
    techniques: [
      { id: 'pla', name: 'PLA Texturas', tag: 'Variedad', desc: 'Diferentes texturas superficiales para estimulación.', extraPerUnit: 0 }
    ],
    placements: [],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS_3D,
    whatsappMessage: 'Hola, quiero consultar por el KIT SENSORIAL NEURODIVERSO en:',
    features: [
      'Diseñado con psicólogos y terapeutas',
      'Diferentes texturas para estimulación táctil',
      'Ayuda en concentración y manejo de ansiedad',
      'Material seguro y no tóxico'
    ]
  },
  {
    id: 'juego-didactico-geometria',
    number: 6,
    title: 'JUEGO DIDÁCTICO GEOMETRÍA',
    subtitle: 'Aprende formas · STEM educativo',
    accentColor: '#0EA5E9',
    badgeBg: 'bg-sky-400',
    badgeText: 'text-black',
    basePrice: 3200,
    imageUrl: '/src/assets/images/impresion_3d.svg',
    description: 'Set de piezas geométricas 3D para aprender matemáticas y geometría de forma tangible.',
    tags: [
      { text: 'Educativo', icon: 'GraduationCap', color: 'text-sky-400' },
      { text: 'STEM', icon: 'Atom', color: 'text-yellow-400' }
    ],
    subtypes: [
      { name: 'Set básico', tag: '5 piezas', tagColor: 'text-sky-400' },
      { name: 'Set completo', tag: '10 piezas', tagColor: 'text-purple-400' }
    ],
    sizes: ['Pequeño (3cm)', 'Mediano (5cm)', 'Grande (8cm)'],
    colors: [
      { name: 'Multicolor', hex: '#FACC15' },
      { name: 'Arcoíris', hex: '#ec4899' },
      { name: 'Mono blanco', hex: '#FFFFFF', border: true }
    ],
    techniques: [
      { id: 'pla', name: 'PLA Educativo', tag: 'Seguro', desc: 'Material no tóxico, ideal para niños.', extraPerUnit: 0 }
    ],
    placements: [],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS_3D,
    whatsappMessage: 'Hola, quiero consultar por el JUEGO DIDÁCTICO DE GEOMETRÍA en:',
    features: [
      'Piezas tangibles para aprendizaje visual',
      'Ideal para escuelas y hogares',
      'Material seguro para niños',
      'Compatible con planes de estudio STEM'
    ]
  },
  {
    id: 'figura-colorear-mundos',
    number: 7,
    title: 'FIGURAS PARA COLOREAR',
    subtitle: 'Creatividad infinita · Pintá tu mundo',
    accentColor: '#EC4899',
    badgeBg: 'bg-pink-500',
    badgeText: 'text-white',
    basePrice: 1800,
    imageUrl: '/src/assets/images/impresion_3d.svg',
    description: 'Figuras 3D lisas diseñadas para pintar y personalizar. Superficie optimizada para pintura acrílica.',
    tags: [
      { text: 'DIY', icon: 'Pencil', color: 'text-pink-400' },
      { text: 'Creativo', icon: 'Palette', color: 'text-yellow-400' }
    ],
    subtypes: [
      { name: 'Animalitos', tag: 'Pack x5', tagColor: 'text-sky-400' },
      { name: 'Personajes', tag: 'Pack x5', tagColor: 'text-pink-400' },
      { name: 'Mixto', tag: 'Pack x10', tagColor: 'text-yellow-400' }
    ],
    sizes: ['Pequeño (8cm)', 'Mediano (12cm)', 'Grande (18cm)'],
    colors: [
      { name: 'Blanco natural', hex: '#FFFFFF', border: true },
      { name: 'Gris claro', hex: '#e5e7eb' }
    ],
    techniques: [
      { id: 'pla', name: 'PLA Liso Premium', tag: 'Para pintar', desc: 'Superficie ultra lisa, lista para pintar.', extraPerUnit: 0 },
      { id: 'resin', name: 'Resina Lisa', tag: 'Ultra detalle', desc: 'Máxima suavidad para detalles finos.', extraPerUnit: 600 }
    ],
    placements: [],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS_3D,
    whatsappMessage: 'Hola, quiero consultar por FIGURAS PARA COLOREAR en:',
    features: [
      'Superficie optimizada para pintura acrílica',
      'Diversos diseños: animales, personajes, fantasía',
      'Ideal para talleres y actividades creativas',
      'Pack disponible para escuelas y eventos'
    ]
  },
  {
    id: 'termoformado-custom',
    number: 8,
    title: 'TERMOS FORMADOS CUSTOM',
    subtitle: 'Empaque perfecto · Tu diseño',
    accentColor: '#FACC15',
    badgeBg: 'bg-yellow-400',
    badgeText: 'text-black',
    basePrice: 5500,
    imageUrl: '/src/assets/images/impresion_3d.svg',
    description: 'Termoformados personalizados para empaque de productos. Protección ideal para envíos y exhibición.',
    tags: [
      { text: 'Empaque', icon: 'Package', color: 'text-yellow-400' },
      { text: 'B2B', icon: 'Building', color: 'text-sky-400' }
    ],
    subtypes: [
      { name: 'Pieza única', tag: 'Prototipo', tagColor: 'text-yellow-400' },
      { name: 'Lote pequeño', tag: '10-50 uds', tagColor: 'text-sky-400' },
      { name: 'Producción', tag: '50+ uds', tagColor: 'text-emerald-400' }
    ],
    sizes: ['Personalizado según producto'],
    colors: [
      { name: 'Transparente', hex: '#f0f9ff', border: true },
      { name: 'Blanco', hex: '#FFFFFF', border: true },
      { name: 'Negro', hex: '#111111' }
    ],
    techniques: [
      { id: 'thermo', name: 'Termoformado', tag: 'Empaque', desc: 'Adaptación perfecta al producto.', extraPerUnit: 0 }
    ],
    placements: [],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS_3D,
    whatsappMessage: 'Hola, quiero consultar por TERMOS FORMADOS CUSTOM para mi producto:',
    features: [
      'Protección personalizada para tu producto',
      'Ideal para envíos y exhibición',
      'Mínimo desde 1 unidad para prototipos',
      'Diferentes materiales: PET, PVC, PS'
    ]
  }
];