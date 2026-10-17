import { ProductLine, PortfolioItem, FaqItem, AudienceSegment, VolumeDiscount } from '../types';

export const HERO_SHOWCASE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcJMQhLqUi2xTp85XvEghqsI7xT4I8o_L6-bDea2IsoTiL2sSgZTLK8x7jKK5Ia2mNUBjXxOeI0RzL0BHo8unulJM6ZRniycaOo3KfRBrTsy-wz08qhIGVCVExgx2aebBtal9IRyHFkaQx0_KqAapGrg6EmBxHnu4pTAWivkl8e_MhZLTQaoI-Nckkfihh-QdKOrG2I46MZS9fEbCg0EMC90JJawRzZd-9rLz63snm-CayKrGV42Pi';

export const WHATSAPP_PHONE = '5492216268594';
export const DISPLAY_PHONE = '221 626 8594';

export const DEFAULT_VOLUME_DISCOUNTS: VolumeDiscount[] = [
  { minQty: 1, discountPercent: 0, label: '1 a 5 unids: Precio Base' },
  { minQty: 6, discountPercent: 12, label: '6 a 23 unids: 12% OFF' },
  { minQty: 24, discountPercent: 22, label: '24 a 49 unids: 22% OFF Mayorista' },
  { minQty: 50, discountPercent: 32, label: '50+ unids: 32% OFF Gran Volumen' }
];

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: 'camisetas',
    number: 1,
    title: 'CAMISETAS',
    subtitle: 'Algodón 100%',
    accentColor: '#FACC15',
    badgeBg: 'bg-yellow-400',
    badgeText: 'text-black',
    basePrice: 14500,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnSx78CkZJYtiIA3OELR4-c_fp2lZdXWgkY8FVf25vVv0vnKYDBezN8_lxhuGTke8lHAaiyszfGJRtEUk8WXjycyACVj9dTweWXkLVK1L9Tms71QM-93m1NtDu3JqmRxl9PNwMbVNvcuSV7QYCUJXERuqheqmV2eBvgiu5MTFLknOsJEH2BVMTh15Ro5NMAL9ets3nFAAJcPGRUjPqrawPTyO-Vw7obEWYw6EcYsyxPnkID-UmxFtS',
    description: 'Diferentes estilos, colores y tallas (Oversize, Clásica, Cuello Redondo o V). Ideales para tu marca propia, eventos empresariales o regalos.',
    tags: [
      { text: 'Algodón Premium', icon: 'Sparkle', color: 'text-yellow-400' },
      { text: 'Impresión Alta Calidad', icon: 'Printer', color: 'text-sky-400' }
    ],
    subtypes: [
      { name: 'Negra Classic', tag: 'DTF Color', tagColor: 'text-pink-400' },
      { name: 'Blanca Pro', tag: 'Sublimación', tagColor: 'text-sky-400' },
      { name: 'Azul / Gris', tag: 'Vinilo Térmico', tagColor: 'text-yellow-400' }
    ],
    sizes: ['S (48x68cm)', 'M (52x71cm)', 'L (56x74cm)', 'XL (60x77cm)', '2XL (64x80cm)', '3XL Especial'],
    colors: [
      { name: 'Negro Azabache', hex: '#111111' },
      { name: 'Blanco Óptico', hex: '#FFFFFF', border: true },
      { name: 'Azul Marino', hex: '#1E3A8A' },
      { name: 'Gris Melange', hex: '#9CA3AF' },
      { name: 'Rojo Carmesí', hex: '#DC2626' },
      { name: 'Verde Militar', hex: '#3F4E4F' }
    ],
    techniques: [
      { id: 'dtf', name: 'DTF Textil Full Color HD', tag: 'Recomendada', desc: 'Máxima nitidez fotográfica, tacto suave y alta elasticidad sin cuarteo.', extraPerUnit: 0 },
      { id: 'sublimacion', name: 'Sublimación Digital HD', tag: 'Tacto Cero', desc: 'Ideal para prendas blancas y poli-algodón deportivo. Cero relieve.', extraPerUnit: 0 },
      { id: 'vinilo', name: 'Vinilo Textil Termotransferible', tag: 'Efecto Mate', desc: 'Perfecto para números, tipografías y logos vectoriales definidos.', extraPerUnit: 800 }
    ],
    placements: [
      'Frente Pecho Central (A4 / A3)',
      'Pecho Izquierdo Chico (Bolsillo)',
      'Espalda Completa',
      'Frente + Espalda (+25%)',
      'Pecho + Manga'
    ],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS,
    whatsappMessage: 'Hola, deseo información sobre la línea de CAMISETAS',
    features: ['100% Algodón peinado o poli-algodón', 'Tallas S a 3XL para damas, caballeros y niños', 'Resistencia a más de 50 lavados']
  },
  {
    id: 'gorras',
    number: 2,
    title: 'GORRAS',
    subtitle: 'Bordado & Estampado',
    accentColor: '#EC4899',
    badgeBg: 'bg-pink-500',
    badgeText: 'text-white',
    basePrice: 11900,
    imageUrl: '/src/assets/images/gallery_cap_embroidery_1792096958647.jpg',
    description: 'Estilo, comodidad y diseño para tu marca, escudería o equipo. Confeccionadas con materiales resistentes y broches ajustables de precisión.',
    tags: [
      { text: 'Bordado Alta Calidad', icon: 'Scissors', color: 'text-pink-400' },
      { text: 'Estampado Duradero', icon: 'ShieldCheck', color: 'text-yellow-400' }
    ],
    subtypes: [
      { name: 'Trucker', tag: 'Malla Fresh', tagColor: 'text-pink-400' },
      { name: 'Snapback', tag: 'Bordado 3D', tagColor: 'text-yellow-400' },
      { name: 'Curva Dad', tag: 'Microestampado', tagColor: 'text-sky-400' }
    ],
    sizes: ['Trucker con Malla (Ajustable)', 'Snapback Plana (Broche Plástico)', 'Curva Dad Hat (Hebilla Metálica)'],
    colors: [
      { name: 'Negro Completo', hex: '#111111' },
      { name: 'Frente Blanco / Malla Negra', hex: '#E5E7EB', border: true },
      { name: 'Azul Marino / Blanco', hex: '#1E3A8A' },
      { name: 'Rojo Fuego', hex: '#DC2626' },
      { name: 'Verde Camuflado', hex: '#4B5320' }
    ],
    techniques: [
      { id: 'bordado3d', name: 'Bordado Computarizado 3D Puff', tag: 'Alto Relieve', desc: 'Efecto tridimensional con hilos de alta resistencia y remates de precisión.', extraPerUnit: 1200 },
      { id: 'dtf_curvo', name: 'DTF Textil Curvo HD', tag: 'Full Color', desc: 'Estampado nítido con degradados y sombras sobre panel frontal rígido.', extraPerUnit: 0 },
      { id: 'parche_cuero', name: 'Parche Cuero Sintético Láser', tag: 'Premium Vintage', desc: 'Grabado láser sobre ecocuero con costura perimetral artesanal.', extraPerUnit: 1500 }
    ],
    placements: [
      'Frente Central (Estándar)',
      'Lateral Izquierdo',
      'Lateral Derecho',
      'Frente + Lateral (+20%)'
    ],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS,
    whatsappMessage: 'Hola, deseo información sobre la línea de GORRAS',
    features: ['Broches de ajuste snapback o hebilla metálica', 'Relieve 3D de alta densidad', 'Visera rígida que mantiene la horma']
  },
  {
    id: 'termos',
    number: 3,
    title: 'VASOS Y TERMOS',
    subtitle: 'Térmicos & Mugs',
    accentColor: '#0EA5E9',
    badgeBg: 'bg-sky-500',
    badgeText: 'text-black',
    basePrice: 13800,
    imageUrl: '/src/assets/images/gallery_tumbler_laser_1792096957777.jpg',
    description: 'Perfectos para uso diario, eventos, recordatorios y souvenirs de impacto. Acabado brillante o mate con aislamiento térmico al vacío.',
    tags: [
      { text: 'Materiales de Calidad', icon: 'Shield', color: 'text-sky-400' },
      { text: 'Conservan Temperatura', icon: 'Thermometer', color: 'text-pink-400' }
    ],
    subtypes: [
      { name: 'Mug 11oz', tag: 'Full Color', tagColor: 'text-yellow-400' },
      { name: 'Termo Metálico', tag: 'Inoxidable', tagColor: 'text-sky-400' },
      { name: 'Vaso Deportivo', tag: 'Tapa Hermética', tagColor: 'text-pink-400' }
    ],
    sizes: ['Termo Inox Doble Pared 500ml', 'Vaso Térmico Tumbler 450ml', 'Mug Cerámica Importada 11oz', 'Botella Deportiva Aluminio 750ml'],
    colors: [
      { name: 'Acero Inox Espejo', hex: '#CBD5E1' },
      { name: 'Negro Mate Premium', hex: '#18181B' },
      { name: 'Blanco Glaciar', hex: '#FFFFFF', border: true },
      { name: 'Azul Metalizado', hex: '#2563EB' },
      { name: 'Rosa Pastel Mate', hex: '#F472B6' }
    ],
    techniques: [
      { id: 'sublimacion_termo', name: 'Sublimación Digital 360°', tag: 'Full Color', desc: 'Colores brillantes a toda vuelta con barniz protector apto lavavajillas.', extraPerUnit: 0 },
      { id: 'laser_fibra', name: 'Grabado Láser de Fibra', tag: 'Inalterable', desc: 'Remueve la capa superficial revelando el acero plateado con precisión milimétrica.', extraPerUnit: 900 }
    ],
    placements: [
      'Una Cara (Logo Central)',
      'Doble Cara (Frente y Dorso)',
      'Envolvente 360° Completo'
    ],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS,
    whatsappMessage: 'Hola, deseo información sobre la línea de VASOS Y TERMOS',
    features: ['Acero inoxidable grado alimenticio 304', 'Doble pared térmica con aislamiento al vacío', 'Sublimación fotográfica 360° o grabado láser']
  },
  {
    id: 'bolsos',
    number: 4,
    title: 'BOLSOS Y MORRALES',
    subtitle: 'Tote Bags & Tulas',
    accentColor: '#FACC15',
    badgeBg: 'bg-yellow-400',
    badgeText: 'text-black',
    basePrice: 9500,
    imageUrl: '/src/assets/images/gallery_tote_canvas_1792096958648.jpg',
    description: 'Prácticos, resistentes y 100% personalizables a tu estilo. Confección en lonas impermeables y lona de algodón biodegradable para empresas verdes.',
    tags: [
      { text: 'Materiales Resistentes', icon: 'Check', color: 'text-yellow-400' },
      { text: 'Estampado De Calidad', icon: 'Layers', color: 'text-sky-400' }
    ],
    subtypes: [
      { name: 'Tote Bag Lienzo', tag: 'Ecológica', tagColor: 'text-yellow-400' },
      { name: 'Morral Urbano', tag: 'Reforzado', tagColor: 'text-sky-400' },
      { name: 'Tula Gym', tag: 'Cordón Grueso', tagColor: 'text-pink-400' }
    ],
    sizes: ['Tote Bag Lienzo Pesado (38 x 42 cm)', 'Morral Urbano con Cierres Reforzados', 'Tula Deportiva Gym con Cordón (35 x 45 cm)'],
    colors: [
      { name: 'Crudo Natural Lienzo', hex: '#F5EBE0' },
      { name: 'Negro Intenso', hex: '#111111' },
      { name: 'Azul Marino Corporativo', hex: '#1E293B' },
      { name: 'Verde Botella', hex: '#14532D' }
    ],
    techniques: [
      { id: 'dtf_bolso', name: 'DTF Textil Full Color HD', tag: 'Vibrante', desc: 'Impresión digital sin límite de colores ni degradados con excelente anclaje.', extraPerUnit: 0 },
      { id: 'serigrafia', name: 'Serigrafía / Plastisol HD', tag: 'Ideal Mayorista', desc: 'Tintas ecológicas cubritivas para tiradas medianas y grandes.', extraPerUnit: 0 },
      { id: 'sublimacion_bolso', name: 'Sublimación Lienzo Poliéster', tag: 'Permanente', desc: 'Absorción molecular que no altera el tacto ni la caída de la tela.', extraPerUnit: 0 }
    ],
    placements: [
      'Frente Completo (A4)',
      'Centro Pecho (20 x 20 cm)',
      'Ambas Caras (+30%)'
    ],
    volumeDiscounts: DEFAULT_VOLUME_DISCOUNTS,
    whatsappMessage: 'Hola, deseo información sobre la línea de BOLSOS Y MORRALES',
    features: ['Costuras reforzadas con remate de seguridad', 'Lona ecológica de 280g reutilizable', 'Capacidad para laptops y carpetas']
  },
  {
    id: 'cuadros-aluminio',
    number: 5,
    title: 'CUADROS DE ALUMINIO',
    subtitle: '15x20 & 20x30 cm',
    accentColor: '#38BDF8',
    badgeBg: 'bg-sky-400',
    badgeText: 'text-black',
    basePrice: 8900,
    imageUrl: '/src/assets/images/cuadro_aluminio_personalizado.jpg',
    description: 'Cuadros fotográficos impresos en láminas de aluminio pulido con tecnología de sublimación HD. Acabado brillante efecto espejo con colores hipervibrantes. Disponibles en medidas 15 x 20 cm y 20 x 30 cm, ideales para fotos familiares, aniversarios, arte y decoración moderna.',
    tags: [
      { text: 'Sublimación HD en Metal', icon: 'Sparkle', color: 'text-sky-400' },
      { text: 'Brillo Espejo & Resistente', icon: 'ShieldCheck', color: 'text-yellow-400' }
    ],
    subtypes: [
      { name: 'Medida 15 x 20 cm', tag: 'Escritorio / Base', tagColor: 'text-yellow-400' },
      { name: 'Medida 20 x 30 cm', tag: 'Pared / Gran Formato', tagColor: 'text-sky-400' },
      { name: 'Acabado Brillante', tag: 'Sublimación HD', tagColor: 'text-pink-400' }
    ],
    sizes: ['15 x 20 cm (Escritorio / Base)', '20 x 30 cm (Pared / Formato A4)'],
    colors: [
      { name: 'Aluminio Brillo Espejo', hex: '#E2E8F0' },
      { name: 'Aluminio Satinado Mate', hex: '#94A3B8' }
    ],
    techniques: [
      { id: 'sublimacion_aluminio', name: 'Sublimación Fotográfica HD en Metal', tag: 'Espejo HD', desc: 'Transferencia térmica al vacío con nitidez 1440 DPI y protección UV.', extraPerUnit: 0 }
    ],
    placements: [
      'Orientación Vertical (Retrato)',
      'Orientación Horizontal (Paisaje)'
    ],
    volumeDiscounts: [
      { minQty: 1, discountPercent: 0, label: '1 a 3 unids: Precio Base' },
      { minQty: 4, discountPercent: 15, label: '4 a 9 unids: 15% OFF' },
      { minQty: 10, discountPercent: 25, label: '10+ unids: 25% OFF Especial' }
    ],
    whatsappMessage: 'Hola, deseo información y cotización sobre los CUADROS DE ALUMINIO personalizados (15x20 cm y 20x30 cm)',
    features: [
      'Lámina de aluminio especial para sublimación fotográfica',
      'Medidas exactas disponibles: 15 x 20 cm y 20 x 30 cm',
      'Resistente al agua, humedad y rayos UV (no pierde brillo ni color)',
      'Incluye soporte listo para exhibir en escritorio o base'
    ]
  },
  {
    id: 'souvenirs',
    number: 6,
    title: 'SOUVENIRS',
    subtitle: 'Llaveros, Imanes & Pines',
    accentColor: '#EC4899',
    badgeBg: 'bg-pink-500',
    badgeText: 'text-white',
    basePrice: 3200,
    imageUrl: '/src/assets/images/souvenirs_personalizados.jpg',
    description: 'Llaveros acrílicos y metálicos, imanes para nevera, destapadores con logo, botones/pines y recordatorios para bodas, grados, cumpleaños, viajes y marcas.',
    tags: [
      { text: 'Llaveros & Destapadores', icon: 'Sparkle', color: 'text-yellow-400' },
      { text: 'Imanes & Recordatorios', icon: 'Star', color: 'text-pink-400' }
    ],
    subtypes: [
      { name: 'Llaveros Acrílico / Metal', tag: 'Grabado & Color', tagColor: 'text-yellow-400' },
      { name: 'Imanes de Nevera', tag: 'Sublimación HD', tagColor: 'text-sky-400' },
      { name: 'Pines / Destapadores', tag: 'Alta Resistencia', tagColor: 'text-pink-400' }
    ],
    sizes: [
      'Llavero Destapador Metálico (Inox)',
      'Llavero Acrílico Cristal 4x6 cm',
      'Imán de Nevera Flexible HD 6x8 cm',
      'Pin / Botón Prendedor 55 mm'
    ],
    colors: [
      { name: 'Acrílico Cristal Transparente', hex: '#E0F2FE' },
      { name: 'Plateado Metálico', hex: '#CBD5E1' },
      { name: 'Dorado Champán', hex: '#FDE68A' },
      { name: 'Negro Mate', hex: '#1F2937' }
    ],
    techniques: [
      { id: 'sublimacion_souvenir', name: 'Sublimación Digital HD', tag: 'Full Color', desc: 'Impresión fotográfica protegida contra el roce y decoloración.', extraPerUnit: 0 },
      { id: 'laser_souvenir', name: 'Grabado Láser Permanente', tag: 'Bajo Relieve', desc: 'Inscripción indeleble de nombres, fechas o logotipos sobre metal.', extraPerUnit: 350 },
      { id: 'resinado_domes', name: 'Resinado Cristal 3D (Domes)', tag: 'Gota de Resina', desc: 'Capa abovedada transparente que aporta brillo óptico y protección extra.', extraPerUnit: 500 }
    ],
    placements: [
      'Frente Principal',
      'Doble Cara (Ambos Lados +35%)'
    ],
    volumeDiscounts: [
      { minQty: 1, discountPercent: 0, label: '1 a 9 unids: Precio Base' },
      { minQty: 10, discountPercent: 20, label: '10 a 49 unids: 20% OFF' },
      { minQty: 50, discountPercent: 35, label: '50 a 99 unids: 35% OFF' },
      { minQty: 100, discountPercent: 45, label: '100+ unids: 45% OFF Mayorista' }
    ],
    whatsappMessage: 'Hola, deseo información y cotización sobre la línea de SOUVENIRS (llaveros, imanes, destapadores, pines)',
    features: [
      'Llaveros en acrílico de alta resistencia y metálicos inoxidables',
      'Imanes decorativos y destapadores con acabado brillante',
      'Pines y botones personalizados para eventos o coleccionismo',
      'Pedidos disponibles desde 1 sola unidad o en cantidad'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'cuadros-aluminio-15x20-20x30',
    title: 'Cuadros de Aluminio Personalizados (15x20 y 20x30 cm)',
    category: 'cuadros',
    badge: 'Aluminio Sublimado HD',
    badgeColor: 'border-sky-400/40 text-sky-300',
    imageUrl: '/src/assets/images/cuadro_aluminio_personalizado.jpg',
    description: 'Impresión fotográfica en láminas de aluminio pulido con tecnología de sublimación de alta definición. Colores intensos, acabado brillante tipo espejo y máxima durabilidad.',
    client: 'Fotografía & Recuerdos Personalizados',
    units: 'Desde 1 unidad',
    technique: 'Sublimación Digital en Metal HD',
    rating: 5,
    specs: ['Medidas exactas: 15 x 20 cm y 20 x 30 cm', 'Acabado espejo ultra brillante', 'Resistente a humedad, sol y rayones', 'Incluye soporte de exhibición para mesa o repisa']
  },
  {
    id: 'souvenirs-llaveros-imanes',
    title: 'Souvenirs Personalizados: Llaveros, Imanes & Pines',
    category: 'souvenirs',
    badge: 'Souvenirs & Recuerdos HD',
    badgeColor: 'border-pink-400/40 text-pink-300',
    imageUrl: '/src/assets/images/souvenirs_personalizados.jpg',
    description: 'Colección de recuerdos y souvenirs con acabados en acrílico, metal y cerámica. Llaveros con destapador, imanes de viaje y pines con colores intensos y máxima fidelidad de diseño.',
    client: 'Eventos, Turismo & Recordatorios',
    units: 'Desde 1 unidad',
    technique: 'Sublimación Digital + Grabado Láser',
    rating: 5,
    specs: ['Llaveros acrílicos y destapadores metálicos', 'Imanes decorativos de alta adherencia', 'Botones publicitarios con acabado brillo', 'Resistentes al uso continuo y rozamiento']
  },
  {
    id: 'camisetas-dtf',
    title: 'Camisetas Oversize y Clásicas DTF',
    category: 'camisetas',
    badge: 'DTF Textil HD',
    badgeColor: 'border-yellow-400/40 text-yellow-300',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnSx78CkZJYtiIA3OELR4-c_fp2lZdXWgkY8FVf25vVv0vnKYDBezN8_lxhuGTke8lHAaiyszfGJRtEUk8WXjycyACVj9dTweWXkLVK1L9Tms71QM-93m1NtDu3JqmRxl9PNwMbVNvcuSV7QYCUJXERuqheqmV2eBvgiu5MTFLknOsJEH2BVMTh15Ro5NMAL9ets3nFAAJcPGRUjPqrawPTyO-Vw7obEWYw6EcYsyxPnkID-UmxFtS',
    description: 'Estampados de alta resolución sin límite de color, tacto ultra suave y máxima durabilidad ante lavados intensivos.',
    client: 'Drop Colección Urbana',
    units: '60 unidades',
    technique: 'DTF Textil Full Color',
    rating: 5,
    specs: ['Algodón peinado 200g', 'Resolución 1440 DPI', 'Cero cuarteado al estirar']
  },
  {
    id: 'hoodies-streetwear',
    title: 'Buzos y Hoodies Streetwear con Capota',
    category: 'camisetas',
    badge: 'Confección & DTF Premium',
    badgeColor: 'border-pink-500/40 text-pink-300',
    imageUrl: '/src/assets/images/gallery_hoodies_streetwear_1792096957129.jpg',
    description: 'Buzos hoodie en franela perchada pesada con estampados en pecho, espalda y mangas. Acabados rib en puños y pretina.',
    client: 'Comunidad Creativa & Promociones',
    units: '85 unidades',
    technique: 'DTF Textil HD + Confección Rib',
    rating: 5,
    specs: ['Franela perchada 320g', 'Capota doble forro', 'Bolsillo canguro reforzado']
  },
  {
    id: 'gorras-bordadas',
    title: 'Gorras Trucker & Snapback Bordadas 3D',
    category: 'gorras',
    badge: 'Bordado Computarizado',
    badgeColor: 'border-pink-400/40 text-pink-300',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPjoCXyyJr6ORMUBm0lVaEftdUc3oagT6a5dxAgENmjHolYP-Z9OcZ3HmvKeef5A2sZVZSLE17HGpYruD9HKxSb4tEMRnvDarooJ3lWBKiCGQDKXuLQCOq_AwUJQoZe9PHCciRqTq85Ib5YyLOnZTd8W2ESJwOCFVD1erymwhd3PE9f3z0apCiWBhtd5DYpXKK6Q_SHDDChCEGAqxBzs9vMIsPGLXAoxrWyU-7mHDsKydZwSIEqSP-',
    description: 'Puntadas de alta densidad y relieve 3D para marcas urbanas, escuderías y dotación personalizada.',
    client: 'Escudería Motorsport',
    units: '100 unidades',
    technique: 'Bordado 3D de Precisión',
    rating: 5,
    specs: ['Hilos resistentes a rayos UV', 'Relieve termoformado', 'Broche ajustable premium']
  },
  {
    id: 'gorra-macro-3d',
    title: 'Gorra Estructurada con Bordado Puff 3D',
    category: 'gorras',
    badge: 'Bordado Puff Relieve',
    badgeColor: 'border-yellow-400/40 text-yellow-300',
    imageUrl: '/src/assets/images/gallery_cap_embroidery_1792096958647.jpg',
    description: 'Detalle macro de relieve táctil de alto impacto. Letras bordadas en espuma EVA de alta densidad sobre lana acrílica.',
    client: 'Marca de Ropa Streetwear',
    units: '150 unidades',
    technique: 'Bordado Puff 3D Textil',
    rating: 5,
    specs: ['Corona rígida indeformable', 'Costuras al tono reforzadas', 'Etiqueta interna personalizada']
  },
  {
    id: 'termos-mugs',
    title: 'Mugs Sublimados & Termos Láser',
    category: 'termos',
    badge: 'Sublimación Fotográfica',
    badgeColor: 'border-sky-400/40 text-sky-300',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFSBlPtSVHQB89qao1tMcFpqkE7RCRyMzdjPUN4Uh11NBVDJT-kQGg_Din6QDUy5SoXNMifQ-AWIuaX0JtxPL1gIMyZY3hdOVqxPKGkKVskPiXtUDR0zLKs8vjJ0jfO9b4T6jOmK2KzmaPj6oRbOSIXg2-DtnxdMAqNiLwOosANP-WzVuNPpmFY5qYsuyT--3h4__HfSS-mUJjk6xwV1_bcoQoFQJkvKTt0Am_Kr4Tc-EgFYehC2I4',
    description: 'Mugs y termos personalizados con nitidez fotográfica y acabados en cerámica brillante o acero inoxidable mate.',
    client: 'Colección de Recordatorios',
    units: '120 unidades',
    technique: 'Sublimación Digital 360°',
    rating: 5,
    specs: ['Acero inoxidable grado 304', 'Apto para bebidas calientes y frías', 'Caja individual de regalo']
  },
  {
    id: 'tumblers-corporate',
    title: 'Termos Metálicos con Grabado Láser Tech',
    category: 'termos',
    badge: 'Grabado Láser de Precisión',
    badgeColor: 'border-sky-400/40 text-sky-300',
    imageUrl: '/src/assets/images/gallery_tumbler_laser_1792096957777.jpg',
    description: 'Set de vasos y termos térmicos en acabado negro mate y acero cepillado con grabado láser indestructible de logo empresarial.',
    client: 'Convención Anual de Tecnología',
    units: '200 unidades',
    technique: 'Grabado Láser Fibra Óptica',
    rating: 5,
    specs: ['Doble pared con vacío térmico', 'Conserva frío por 24 horas', 'Tapa anti-derrame libre de BPA']
  },
  {
    id: 'bolsos-tulas',
    title: 'Tote Bags & Tulas Ecológicas',
    category: 'bolsos',
    badge: 'DTF Textil Ecológico',
    badgeColor: 'border-emerald-500/40 text-emerald-300',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCparnK4cegnHB3DuMMribnasnUYZ8OI0X2miYVw600cZ1JdptokFOJasRTesT9Nr7rz7fJoo66OHyylp_dADmkZaoMIw8Vl0Xgt7aCJSZQqnDd_E2e_r3MY20WTwDGdHnftamnsGaJHErj1ComD3lxSppeXEc8TwAZZnLPqi4aaNKIVAxaaHPlLDld979WrI_M7dJxL9pEuJhlTeCZ12fyTgJ5hX4rMqYl-u9beMKVK0bkzIIE4uN4',
    description: 'Confección y estampado en lona de algodón biodegradable con tintas ecológicas al agua de máxima fijación.',
    client: 'Feria Agroempresarial',
    units: '300 unidades',
    technique: 'DTF Textil Base Agua',
    rating: 5,
    specs: ['Lienzo 100% biodegradable', 'Asas reforzadas con pespunte en X', 'Cero desprendimiento de pigmento']
  },
  {
    id: 'tote-canvas-eco',
    title: 'Bolsas de Lienzo Natural y Botánico',
    category: 'bolsos',
    badge: 'Lienzo Pesado 280g',
    badgeColor: 'border-emerald-500/40 text-emerald-300',
    imageUrl: '/src/assets/images/gallery_tote_canvas_1792096958648.jpg',
    description: 'Bolsas tote bag en lona cruda resistente con estampados botánicos y minimalistas para boutiques y tiendas de autor.',
    client: 'Boutique Botánica & Café de Especialidad',
    units: '150 unidades',
    technique: 'DTF Textil HD de Alta Definición',
    rating: 5,
    specs: ['Lona de algodón crudo 280g', 'Fuelle amplio de 10cm', 'Resiste hasta 15 kg de carga']
  }
];

export const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    id: 'empresas',
    title: 'Empresas',
    description: 'Uniformes, dotaciones textiles y artículos publicitarios con presencia de marca profesional.',
    accent: 'border-sky-500/50 text-sky-400 group-hover:border-sky-400',
    iconName: 'Briefcase'
  },
  {
    id: 'regalos',
    title: 'Regalos',
    description: 'Detalles inolvidables para cumpleaños, aniversarios, fechas memorables y momentos familiares.',
    accent: 'border-pink-500/50 text-pink-400 group-hover:border-pink-400',
    iconName: 'Gift'
  },
  {
    id: 'eventos',
    title: 'Eventos',
    description: 'Conciertos, activaciones de marca, ferias comerciales, congresos y lanzamientos de productos.',
    accent: 'border-yellow-400/50 text-yellow-300 group-hover:border-yellow-400',
    iconName: 'Megaphone'
  },
  {
    id: 'equipos',
    title: 'Equipos',
    description: 'Camisetas deportivas, dorsales personalizados, gorras de escuadras competitivas y clubes.',
    accent: 'border-emerald-500/50 text-emerald-400 group-hover:border-emerald-400',
    iconName: 'Users'
  },
  {
    id: 'colegios',
    title: 'Colegios',
    description: 'Buzos de Promociones, camisetas de excursión, tulas deportivas y recuerdos de grado para estudiantes.',
    accent: 'border-purple-500/50 text-purple-400 group-hover:border-purple-400',
    iconName: 'GraduationCap'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: '¿Cuáles son los tiempos de entrega promedio para pedidos personalizados?',
    answerHtml: 'Para pedidos pequeños o muestras de <strong class="text-white">1 a 6 unidades</strong>, el tiempo habitual es de <strong class="text-yellow-400">2 a 4 días hábiles</strong>. Para pedidos en lote o volumen de <strong class="text-white">12 a 500+ unidades</strong>, oscila entre <strong class="text-yellow-400">5 y 8 días hábiles</strong> según la técnica seleccionada. ¿Tienes una fecha límite urgente? Contamos con opción de <strong class="text-sky-400">servicio exprés</strong> bajo previa coordinación.'
  },
  {
    id: 'faq-2',
    number: '02',
    question: '¿Qué diferencia hay entre DTF Textil, Sublimación, Bordado 3D y Grabado Láser?',
    answerHtml: '<p><strong class="text-yellow-400">• DTF Textil HD:</strong> Ideal para prendas de algodón o poliéster en cualquier color, con degradados e ilustraciones detalladas sin límite de tintas.</p><p class="mt-2"><strong class="text-sky-400">• Sublimación HD:</strong> Ideal para cuadros de aluminio personalizados (15x20 y 20x30 cm), mugs y termos cerámicos con calidad fotográfica y brillo espejo indeleble.</p><p class="mt-2"><strong class="text-pink-400">• Bordado 3D / Computarizado:</strong> Máxima elegancia y relieve premium en gorras trucker, chaquetas, polos y buzos.</p><p class="mt-2"><strong class="text-emerald-400">• Grabado Láser de Fibra:</strong> Grabado permanente e indeleble sobre acero inoxidable, aluminio, madera y cuero sintético.</p>'
  },
  {
    id: 'faq-3',
    number: '03',
    question: '¿Cuál es la cantidad mínima de pedido (MOQ)?',
    answerHtml: '<strong class="text-white">¡Estampamos desde 1 sola unidad!</strong> No requieres comprar en grandes cantidades para tener tu producto personalizado. Tanto para regalos personales como para proyectos de marca te atendemos con la misma dedicación y calidad.'
  },
  {
    id: 'faq-4',
    number: '04',
    question: '¿Cómo debo enviar mis archivos y diseños para garantizar la máxima calidad?',
    answerHtml: 'Recomendamos archivos vectoriales en formato <strong class="text-white">AI, PDF o EPS</strong> con tipografías convertidas a curvas, o imágenes en formato <strong class="text-white">PNG en alta resolución</strong> (mínimo 300 DPI) con fondo transparente. Si no tienes tu logo vectorizado, ¡no te preocupes! Revisamos que tu archivo cumpla con las especificaciones técnicas antes de estampar.'
  },
  {
    id: 'faq-5',
    number: '05',
    question: '¿Hacen envíos a todo el país y cómo se rastrea mi paquete?',
    answerHtml: '<strong class="text-white">Sí, despachamos a cualquier punto de todo el país</strong> mediante transportadoras certificadas (Correo Argentino, Andreani, OCA). Apenas tu orden sea enviada te proporcionamos el <strong class="text-sky-400">número de guía para rastreo en tiempo real</strong>. Todos los pedidos van debidamente embalados y protegidos.'
  },
  {
    id: 'faq-6',
    number: '06',
    question: '¿Puedo solicitar una muestra física antes de producir todo mi lote?',
    answerHtml: '<strong class="text-white">Totalmente.</strong> Para proyectos de dotación corporativa, merchandising o eventos de gran volumen elaboramos una muestra de aprobación previa o generamos un <strong class="text-pink-400">mockup digital 3D</strong> para que verifiques proporción, colores y posición antes de encender las máquinas de producción masiva.'
  }
];

export const PILLARS = [
  {
    id: 'calidad',
    title: 'Calidad Premium',
    subtitle: 'Confección y sustratos de máxima categoría',
    icon: 'Award',
    accentColor: '#FACC15',
    bgBadge: 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400'
  },
  {
    id: 'colores',
    title: 'Colores Vibrantes',
    subtitle: 'Gamas cromáticas intensas y nítidas',
    icon: 'Palette',
    accentColor: '#EC4899',
    bgBadge: 'bg-pink-500/10 border-pink-500/30 text-pink-400'
  },
  {
    id: 'durabilidad',
    title: 'Diseños Duraderos',
    subtitle: 'Alta resistencia a lavados y fricción continua',
    icon: 'Shirt',
    accentColor: '#0EA5E9',
    bgBadge: 'bg-sky-500/10 border-sky-500/30 text-sky-400'
  },
  {
    id: 'atencion',
    title: 'Atención Personalizada',
    subtitle: 'Te acompañamos paso a paso con tu diseño',
    icon: 'Headphones',
    accentColor: '#25D366',
    bgBadge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
  }
];
