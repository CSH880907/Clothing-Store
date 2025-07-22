export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  colors?: string[];
  description?: string;
  sizes?: string[];
  material?: string;
  brand?: string;
}

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Classic White Button-Down Shirt',
    price: 89,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop',
    category: 'Shirts',
    rating: 4.5,
    reviews: 128,
    isNew: false,
    isSale: true,
    colors: ['#FFFFFF', '#F8F9FA', '#E9ECEF'],
    description: 'A timeless classic that belongs in every wardrobe. Made from premium cotton with a tailored fit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '100% Premium Cotton',
    brand: 'Style Essentials'
  },
  {
    id: '2',
    name: 'Elegant Black Blazer',
    price: 199,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop',
    category: 'Blazers',
    rating: 4.8,
    reviews: 89,
    isNew: true,
    isSale: false,
    colors: ['#000000', '#1A1A1A', '#2D2D2D'],
    description: 'Sophisticated blazer perfect for professional settings and evening events.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: 'Wool Blend',
    brand: 'Style Professional'
  },
  {
    id: '3',
    name: 'Casual Denim Jeans',
    price: 79,
    originalPrice: 110,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop',
    category: 'Jeans',
    rating: 4.3,
    reviews: 245,
    isNew: false,
    isSale: true,
    colors: ['#4A90E2', '#2C3E50', '#34495E'],
    description: 'Comfortable and stylish denim jeans with a modern slim fit.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    material: '98% Cotton, 2% Elastane',
    brand: 'Style Casual'
  },
  {
    id: '4',
    name: 'Floral Summer Dress',
    price: 129,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
    category: 'Dresses',
    rating: 4.6,
    reviews: 156,
    isNew: true,
    isSale: false,
    colors: ['#FFB6C1', '#FFC0CB', '#FF69B4'],
    description: 'Light and airy summer dress with beautiful floral patterns.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '100% Cotton Voile',
    brand: 'Style Summer'
  },
  {
    id: '5',
    name: 'Knit Sweater',
    price: 149,
    originalPrice: 189,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
    category: 'Sweaters',
    rating: 4.4,
    reviews: 203,
    isNew: false,
    isSale: true,
    colors: ['#E6E6FA', '#DDA0DD', '#9370DB'],
    description: 'Cozy and warm knit sweater perfect for chilly days.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '70% Merino Wool, 30% Cashmere',
    brand: 'Style Comfort'
  },
  {
    id: '6',
    name: 'Athletic Joggers',
    price: 69,
    image: 'https://images.unsplash.com/photo-1506629905496-f2584317bda2?w=600&h=800&fit=crop',
    category: 'Activewear',
    rating: 4.2,
    reviews: 312,
    isNew: false,
    isSale: false,
    colors: ['#696969', '#2F4F4F', '#000000'],
    description: 'Comfortable athletic joggers for workouts and casual wear.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: 'Moisture-wicking fabric',
    brand: 'Style Active'
  },
  {
    id: '7',
    name: 'Silk Blouse',
    price: 179,
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=600&h=800&fit=crop',
    category: 'Blouses',
    rating: 4.7,
    reviews: 98,
    isNew: true,
    isSale: false,
    colors: ['#F5F5DC', '#FFF8DC', '#FFFACD'],
    description: 'Luxurious silk blouse that adds elegance to any outfit.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: '100% Mulberry Silk',
    brand: 'Style Luxury'
  },
  {
    id: '8',
    name: 'Winter Coat',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop',
    category: 'Coats',
    rating: 4.9,
    reviews: 67,
    isNew: false,
    isSale: true,
    colors: ['#8B4513', '#A0522D', '#D2691E'],
    description: 'Warm and stylish winter coat to keep you cozy during cold months.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    material: 'Down-filled with waterproof exterior',
    brand: 'Style Winter'
  }
];

export const categories = [
  'All',
  'Shirts',
  'Blazers',
  'Jeans',
  'Dresses',
  'Sweaters',
  'Activewear',
  'Blouses',
  'Coats'
];

export const brands = [
  'All Brands',
  'Style Essentials',
  'Style Professional',
  'Style Casual',
  'Style Summer',
  'Style Comfort',
  'Style Active',
  'Style Luxury',
  'Style Winter'
];

export const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $100', min: 0, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200 - $300', min: 200, max: 300 },
  { label: 'Over $300', min: 300, max: Infinity }
];