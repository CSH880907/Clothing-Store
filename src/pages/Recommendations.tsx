import { useState } from 'react';
import { Lightbulb, TrendingUp, Users, Heart, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/products';

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const trendingProducts = sampleProducts.filter(product => product.rating >= 4.5);
  const saleProducts = sampleProducts.filter(product => product.isSale);
  const popularProducts = sampleProducts.filter(product => product.reviews > 150);

  const styleQuiz = [
    { 
      question: "What's your preferred style?", 
      options: ["Classic & Timeless", "Trendy & Bold", "Casual & Comfortable", "Professional & Polished"]
    },
    { 
      question: "Which colors do you gravitate towards?", 
      options: ["Neutral tones", "Bold & bright", "Pastels", "Monochrome"]
    },
    { 
      question: "What's your lifestyle like?", 
      options: ["Work-focused", "Social & active", "Home & comfort", "Travel & adventure"]
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
      
      {/* Header */}
      <div className="bg-fashion-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-fashion-primary">Recommendations</h1>
            <p className="text-xl text-fashion-gray-600">
              Discover pieces curated just for you
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Style Quiz Section */}
        <section className="mb-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto">
              <Lightbulb className="h-8 w-8 text-fashion-primary" />
            </div>
            <h2 className="text-3xl font-bold text-fashion-primary">Find Your Perfect Style</h2>
            <p className="text-fashion-gray-600 max-w-2xl mx-auto">
              Take our quick style quiz to get personalized recommendations based on your preferences and lifestyle.
            </p>
            <Button size="lg" className="bg-fashion-primary text-white hover:bg-fashion-primary-light">
              Take Style Quiz
            </Button>
          </div>
        </section>

        {/* Recommendations Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="trending" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Trending Now
            </TabsTrigger>
            <TabsTrigger value="popular" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Customer Favorites
            </TabsTrigger>
            <TabsTrigger value="deals" className="flex items-center gap-2">
              <Badge className="h-4 w-4" />
              Special Deals
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-fashion-primary">Trending Right Now</h3>
              <p className="text-fashion-gray-600">
                What everyone's talking about - the hottest pieces of the season
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-fashion-primary">Customer Favorites</h3>
              <p className="text-fashion-gray-600">
                Highly rated pieces that our customers can't stop raving about
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deals" className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-fashion-primary">Special Deals</h3>
              <p className="text-fashion-gray-600">
                Limited-time offers on premium pieces - don't miss out!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {saleProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Style Inspiration Section */}
        <section className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-fashion-primary">Style Inspiration</h2>
            <p className="text-xl text-fashion-gray-600">
              Get inspired by seasonal trends and styling tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-soft overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=250&fit=crop"
                alt="Spring Trends"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <Badge className="bg-fashion-gold text-fashion-primary">Spring 2024</Badge>
                <h3 className="text-xl font-semibold text-fashion-primary">Pastel Power</h3>
                <p className="text-fashion-gray-600">
                  Soft pastels are making a comeback this spring. Learn how to incorporate these gentle hues into your wardrobe.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-soft overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400&h=250&fit=crop"
                alt="Work Style"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <Badge className="bg-fashion-primary text-white">Work Style</Badge>
                <h3 className="text-xl font-semibold text-fashion-primary">Office Chic</h3>
                <p className="text-fashion-gray-600">
                  Professional doesn't mean boring. Discover how to look polished and stylish in the workplace.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-soft overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=250&fit=crop"
                alt="Casual Elegance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <Badge className="bg-fashion-accent-dark text-fashion-primary">Casual</Badge>
                <h3 className="text-xl font-semibold text-fashion-primary">Effortless Elegance</h3>
                <p className="text-fashion-gray-600">
                  Look put-together without trying too hard. Master the art of casual elegance with these tips.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Stylist CTA */}
        <section className="mt-20 bg-fashion-primary rounded-2xl p-8 text-center text-white">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Want Personal Styling Advice?</h2>
            <p className="text-fashion-gray-100 max-w-2xl mx-auto">
              Book a consultation with one of our expert stylists for personalized recommendations 
              based on your body type, lifestyle, and preferences.
            </p>
            <Button size="lg" className="bg-fashion-gold text-fashion-primary hover:bg-fashion-accent-dark">
              Book Consultation
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Recommendations;