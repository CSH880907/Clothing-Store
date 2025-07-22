import { useState } from 'react';
import { Crown, Gift, Truck, Star, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const membershipTiers = [
    {
      id: 'basic',
      name: 'Style Explorer',
      price: 'Free',
      description: 'Perfect for getting started with Style',
      features: [
        'Access to all products',
        'Standard shipping rates',
        'Email customer support',
        'Basic style recommendations',
        'Account dashboard'
      ],
      color: 'bg-fashion-gray-100',
      textColor: 'text-fashion-primary'
    },
    {
      id: 'premium',
      name: 'Style VIP',
      price: '$9.99/month',
      description: 'Enhanced shopping experience with exclusive perks',
      features: [
        'Everything in Style Explorer',
        'Free shipping on all orders',
        'Early access to new collections',
        'Priority customer support',
        'Personal style recommendations',
        '15% off first purchase each month',
        'Birthday month special discount'
      ],
      color: 'bg-fashion-gold',
      textColor: 'text-fashion-primary',
      popular: true
    },
    {
      id: 'elite',
      name: 'Style Elite',
      price: '$24.99/month',
      description: 'Ultimate luxury experience for fashion enthusiasts',
      features: [
        'Everything in Style VIP',
        'Exclusive access to luxury collections',
        'Personal stylist consultations',
        '24/7 priority support',
        'Free returns and exchanges',
        '20% off all purchases',
        'Quarterly style box',
        'VIP event invitations'
      ],
      color: 'bg-fashion-primary',
      textColor: 'text-white'
    }
  ];

  const benefits = [
    {
      icon: Crown,
      title: 'Exclusive Access',
      description: 'Be the first to shop new collections and limited edition pieces'
    },
    {
      icon: Gift,
      title: 'Member Rewards',
      description: 'Earn points on every purchase and unlock special rewards'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Enjoy complimentary shipping on all orders, no minimum required'
    },
    {
      icon: Star,
      title: 'Personal Styling',
      description: 'Get personalized recommendations from our expert stylists'
    }
  ];

  const faqs = [
    {
      question: 'Can I cancel my membership anytime?',
      answer: 'Yes, you can cancel your membership at any time. Your benefits will continue until the end of your current billing period.'
    },
    {
      question: 'Do I get to keep my points if I downgrade?',
      answer: 'Yes, your accumulated points and rewards will be preserved when you change your membership tier.'
    },
    {
      question: 'Is there a trial period?',
      answer: 'We offer a 14-day free trial for both Premium and Elite memberships so you can experience all the benefits.'
    },
    {
      question: 'How do the style consultations work?',
      answer: 'Elite members can book one-on-one video consultations with our professional stylists for personalized advice.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-fashion-gold text-fashion-primary">
              <Sparkles className="h-4 w-4 mr-2" />
              Exclusive Membership
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-fashion-primary">
              Join Style VIP
            </h1>
            <p className="text-xl text-fashion-gray-600 max-w-2xl mx-auto">
              Unlock exclusive benefits, early access, and personalized styling services 
              designed for fashion enthusiasts like you
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-fashion-primary">Member Benefits</h2>
            <p className="text-xl text-fashion-gray-600">
              Discover what makes being a Style member special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto">
                    <benefit.icon className="h-8 w-8 text-fashion-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-fashion-primary">{benefit.title}</h3>
                  <p className="text-fashion-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-fashion-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-fashion-primary">Choose Your Plan</h2>
            <p className="text-xl text-fashion-gray-600">
              Select the membership tier that fits your style needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <Card key={tier.id} className={`relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 animate-scale-in ${
                tier.popular ? 'ring-2 ring-fashion-gold scale-105' : ''
              }`} style={{ animationDelay: `${index * 0.1}s` }}>
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-fashion-gold text-fashion-primary text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`${tier.color} ${tier.textColor} text-center ${tier.popular ? 'pt-12' : 'pt-8'}`}>
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold">{tier.price}</div>
                  <p className="opacity-90">{tier.description}</p>
                </CardHeader>
                
                <CardContent className="p-6 space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-fashion-gold mt-0.5 flex-shrink-0" />
                        <span className="text-fashion-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-6 ${
                      tier.id === 'basic' 
                        ? 'bg-fashion-gray-600 hover:bg-fashion-gray-700' 
                        : 'bg-fashion-primary hover:bg-fashion-primary-light'
                    } text-white`}
                    onClick={() => setSelectedPlan(tier.id)}
                  >
                    {tier.id === 'basic' ? 'Current Plan' : 'Start Free Trial'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Spotlight */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-fashion-primary">What Our Members Say</h2>
            <p className="text-xl text-fashion-gray-600">
              Hear from fashion lovers who've elevated their style with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-fashion-gold fill-fashion-gold" />
                  ))}
                </div>
                <p className="text-fashion-gray-600 italic">
                  "The personal styling service completely transformed my wardrobe. I feel more confident 
                  and put-together than ever before. Worth every penny!"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop"
                    alt="Sarah M."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-fashion-primary">Sarah M.</p>
                    <p className="text-sm text-fashion-gray-500">Style Elite Member</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-fashion-gold fill-fashion-gold" />
                  ))}
                </div>
                <p className="text-fashion-gray-600 italic">
                  "Early access to collections and free shipping make this membership incredible value. 
                  I've discovered so many pieces I love!"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop"
                    alt="Emily R."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-fashion-primary">Emily R.</p>
                    <p className="text-sm text-fashion-gray-500">Style VIP Member</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-fashion-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-fashion-primary">Frequently Asked Questions</h2>
            <p className="text-xl text-fashion-gray-600">
              Everything you need to know about Style membership
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-fashion-primary mb-2">{faq.question}</h3>
                  <p className="text-fashion-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fashion-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-4xl font-bold">Ready to Elevate Your Style?</h2>
            <p className="text-xl text-fashion-gray-100">
              Join thousands of fashion enthusiasts who trust Style for their wardrobe needs
            </p>
            <Button size="lg" className="bg-fashion-gold text-fashion-primary hover:bg-fashion-accent-dark">
              Start Your Free Trial
            </Button>
            <p className="text-sm text-fashion-gray-200">
              14-day free trial • Cancel anytime • No commitment
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Membership;