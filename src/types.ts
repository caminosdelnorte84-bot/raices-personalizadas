export interface ProductColor {
  name: string;
  hex: string;
  border?: boolean;
}

export interface ProductTechnique {
  id: string;
  name: string;
  tag: string;
  desc: string;
  extraPerUnit?: number;
}

export interface VolumeDiscount {
  minQty: number;
  discountPercent: number;
  label: string;
}

export interface ProductLine {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  tags: { text: string; icon: string; color: string }[];
  subtypes: { name: string; tag: string; tagColor: string }[];
  whatsappMessage: string;
  features: string[];
  basePrice: number;
  imageUrl?: string;
  sizes: string[];
  colors: ProductColor[];
  techniques: ProductTechnique[];
  placements?: string[];
  volumeDiscounts?: VolumeDiscount[];
}

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  size: string;
  color: ProductColor;
  technique: string;
  placement?: string;
  quantity: number;
  basePrice: number;
  unitPrice: number;
  discountPercent: number;
  customNote?: string;
}

export interface CustomerOrderInfo {
  name: string;
  city: string;
  notes: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'camisetas' | 'gorras' | 'termos' | 'bolsos' | 'cuadros' | 'souvenirs' | 'corporativo';
  badge: string;
  badgeColor: string;
  imageUrl: string;
  description: string;
  client?: string;
  units?: string;
  technique?: string;
  rating?: number;
  specs: string[];
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answerHtml: string;
}

export interface AudienceSegment {
  id: string;
  title: string;
  description: string;
  accent: string;
  iconName: string;
}
