import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/products';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState(sampleProducts.slice(0, 4));
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "New Winter Collection",
      subtitle: "Discover premium clothing that defines your style",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=600&fit=crop",
      cta: "Shop Collection"
    },
    {
      title: "Summer Essentials",
      subtitle: "Light, comfortable, and effortlessly chic",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&h=600&fit=crop",
      cta: "Explore Now"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = (product: any) => {
    console.log('Added to cart:', product);
  };

  const handleToggleWishlist = (product: any) => {
    console.log('Toggled wishlist:', product);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-6 animate-fade-in">
                  <Badge className="bg-fashion-gold text-fashion-primary">
                    New Arrival
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-fashion-gray-100 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="bg-fashion-gold text-fashion-primary hover:bg-fashion-accent-dark text-lg px-8 py-3"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-fashion-gold' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-fashion-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-fashion-primary" />
              </div>
              <h3 className="text-xl font-semibold text-fashion-primary">Premium Quality</h3>
              <p className="text-fashion-gray-600">
                Carefully curated selection of high-quality materials and craftsmanship
              </p>
            </div>
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-fashion-primary" />
              </div>
              <h3 className="text-xl font-semibold text-fashion-primary">Latest Trends</h3>
              <p className="text-fashion-gray-600">
                Stay ahead with our constantly updated collection of fashion-forward pieces
              </p>
            </div>
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-fashion-primary" />
              </div>
              <h3 className="text-xl font-semibold text-fashion-primary">Customer Love</h3>
              <p className="text-fashion-gray-600">
                Join thousands of satisfied customers who trust us for their style needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-fashion-primary">Featured Products</h2>
            <p className="text-xl text-fashion-gray-600 max-w-2xl mx-auto">
              Discover our hand-picked selection of must-have pieces for your wardrobe
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                  onToggleWishlist={handleToggleWishlist}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button size="lg" className="bg-fashion-primary text-white hover:bg-fashion-primary-light">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-fashion-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Stay in Style</h2>
            <p className="text-xl text-fashion-gray-100">
              Be the first to know about new collections, exclusive offers, and style tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-fashion-primary"
              />
              <Button className="bg-fashion-gold text-fashion-primary hover:bg-fashion-accent-dark px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
