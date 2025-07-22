import { useState } from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
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
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
  isInWishlist?: boolean;
}

const ProductCard = ({ product, onAddToCart, onToggleWishlist, isInWishlist }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className="group relative bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-lg bg-fashion-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {product.isNew && (
            <Badge className="bg-fashion-gold text-fashion-primary">NEW</Badge>
          )}
          {product.isSale && discount > 0 && (
            <Badge className="bg-red-500 text-white">-{discount}%</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            variant="ghost"
            size="sm"
            className="bg-white/90 hover:bg-white shadow-soft"
            onClick={() => onToggleWishlist?.(product)}
          >
            <Heart 
              className={`h-4 w-4 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-fashion-gray-600'}`} 
            />
          </Button>
        </div>

        {/* Add to Cart Overlay */}
        <div className={`absolute inset-x-3 bottom-3 transition-all duration-300 transform ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <Button
            className="w-full bg-fashion-primary hover:bg-fashion-primary-light text-white"
            onClick={() => onAddToCart?.(product)}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <p className="text-xs text-fashion-gray-500 uppercase tracking-wide font-medium">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-fashion-primary line-clamp-2 hover:text-fashion-gold transition-colors cursor-pointer">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-fashion-gold fill-fashion-gold'
                    : 'text-fashion-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-fashion-gray-500">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-fashion-primary">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-fashion-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center space-x-2">
            <span className="text-xs text-fashion-gray-500">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 4).map((color, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? 'border-fashion-primary scale-110'
                      : 'border-fashion-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-xs text-fashion-gray-500">+{product.colors.length - 4}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;