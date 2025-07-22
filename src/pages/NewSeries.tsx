import { useState } from 'react';
import { Calendar, Tag, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/products';

const NewSeries = () => {
  const newProducts = sampleProducts.filter(product => product.isNew);
  const [selectedCollection, setSelectedCollection] = useState('all');

  const collections = [
    {
      id: 'all',
      name: 'All New Items',
      description: 'Everything new in our collection',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop'
    },
    {
      id: 'spring2024',
      name: 'Spring 2024',
      description: 'Fresh styles for the new season',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=400&fit=crop'
    },
    {
      id: 'premium',
      name: 'Premium Line',
      description: 'Luxury pieces crafted with finest materials',
      image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&h=400&fit=crop'
    }
  ];

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
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&h=600&fit=crop"
          alt="New Series"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 animate-fade-in">
            <Badge className="bg-fashion-gold text-fashion-primary">
              <Sparkles className="h-4 w-4 mr-2" />
              Just Launched
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              New Series
            </h1>
            <p className="text-xl md:text-2xl text-fashion-gray-100 max-w-2xl mx-auto">
              Discover the latest additions to our curated fashion collection
            </p>
          </div>
        </div>
      </section>

      {/* Collections Navigation */}
      <section className="py-12 bg-fashion-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedCollection === collection.id ? 'ring-2 ring-fashion-gold' : ''
                }`}
                onClick={() => setSelectedCollection(collection.id)}
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fashion-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{collection.name}</h3>
                  <p className="text-fashion-gray-100 text-sm">{collection.description}</p>
                </div>
                {selectedCollection === collection.id && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-fashion-gold text-fashion-primary">
                      Selected
                    </Badge>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured New Arrival */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-fashion-gold text-fashion-primary">
                <Calendar className="h-4 w-4 mr-2" />
                Released This Week
              </Badge>
              <h2 className="text-4xl font-bold text-fashion-primary">
                Spotlight: Silk Blouse Collection
              </h2>
              <p className="text-lg text-fashion-gray-600 leading-relaxed">
                Experience luxury with our new silk blouse collection. Each piece is crafted from 
                100% mulberry silk, featuring elegant designs that transition seamlessly from 
                office to evening wear.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-fashion-gray-600">
                  <Tag className="h-5 w-5 mr-3 text-fashion-gold" />
                  <span>Premium mulberry silk material</span>
                </div>
                <div className="flex items-center text-fashion-gray-600">
                  <Tag className="h-5 w-5 mr-3 text-fashion-gold" />
                  <span>Hand-finished details</span>
                </div>
                <div className="flex items-center text-fashion-gray-600">
                  <Tag className="h-5 w-5 mr-3 text-fashion-gold" />
                  <span>Available in 5 elegant colors</span>
                </div>
              </div>
              <Button size="lg" className="bg-fashion-primary text-white hover:bg-fashion-primary-light">
                Shop Silk Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=600&h=700&fit=crop"
                alt="Silk Blouse Collection"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Products Grid */}
      <section className="py-20 bg-fashion-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-fashion-primary">New Arrivals</h2>
            <p className="text-xl text-fashion-gray-600 max-w-2xl mx-auto">
              Fresh styles just added to our collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                  onToggleWishlist={handleToggleWishlist}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-fashion-gold text-fashion-primary">
              <Sparkles className="h-4 w-4 mr-2" />
              Coming Soon
            </Badge>
            <h2 className="text-4xl font-bold text-fashion-primary">
              Autumn Collection 2024
            </h2>
            <p className="text-xl text-fashion-gray-600">
              Get ready for warm layers, rich textures, and timeless pieces. 
              Be the first to know when our autumn collection drops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email for early access"
                className="flex-1 px-4 py-3 rounded-lg border border-fashion-gray-200 text-fashion-primary"
              />
              <Button className="bg-fashion-primary text-white hover:bg-fashion-primary-light px-8">
                Notify Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewSeries;