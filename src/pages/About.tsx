import { useState } from 'react';
import { Heart, Users, Globe, Award, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const About = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      bio: "With over 15 years in fashion, Sarah founded Style with a vision to make premium fashion accessible to everyone."
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Michael brings innovative design thinking and sustainable fashion practices to our collections."
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      bio: "Emily ensures every customer has an exceptional experience, from browsing to delivery."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Style",
      description: "We believe fashion is a form of self-expression that should be accessible to everyone."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our customers are at the heart of everything we do, building a community of style enthusiasts."
    },
    {
      icon: Globe,
      title: "Sustainable Fashion",
      description: "We're committed to ethical practices and sustainable materials in all our collections."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every piece is carefully curated and crafted to meet our high standards of quality."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a dream to revolutionize online fashion shopping" },
    { year: "2021", title: "First Collection Launch", description: "Launched our debut collection with 50 carefully curated pieces" },
    { year: "2022", title: "100K Customers", description: "Reached our first major milestone of serving 100,000 happy customers" },
    { year: "2023", title: "Sustainable Line", description: "Introduced our eco-friendly collection made from sustainable materials" },
    { year: "2024", title: "Global Expansion", description: "Expanded our reach to serve customers in 20+ countries worldwide" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=600&fit=crop"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              About Style
            </h1>
            <p className="text-xl md:text-2xl text-fashion-gray-100 max-w-2xl mx-auto">
              Redefining fashion with premium quality, sustainable practices, and exceptional customer experience
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-fashion-primary">Our Story</h2>
            <p className="text-xl text-fashion-gray-600 leading-relaxed">
              Style was born from a simple belief: everyone deserves access to beautiful, high-quality fashion 
              that makes them feel confident and expresses their unique personality. What started as a small 
              online boutique has grown into a global fashion destination, but our core values remain unchanged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-fashion-primary">Our Mission</h3>
              <p className="text-fashion-gray-600 leading-relaxed">
                To democratize fashion by providing carefully curated, premium clothing that combines 
                style, comfort, and sustainability. We believe that great fashion shouldn't come at 
                the expense of our planet or our values.
              </p>
              <h3 className="text-2xl font-bold text-fashion-primary">Our Vision</h3>
              <p className="text-fashion-gray-600 leading-relaxed">
                To become the world's most trusted fashion platform, known for our commitment to 
                quality, sustainability, and customer satisfaction. We envision a future where 
                fashion is both beautiful and responsible.
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=400&fit=crop"
                alt="Our Mission"
                className="w-full h-80 object-cover rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-fashion-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-fashion-primary">Our Values</h2>
            <p className="text-xl text-fashion-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-medium transition-shadow animate-fade-in" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-fashion-gold rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-fashion-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-fashion-primary">{value.title}</h3>
                  <p className="text-fashion-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-fashion-primary">Our Journey</h2>
            <p className="text-xl text-fashion-gray-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-fashion-gold"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start animate-slide-up" 
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute left-6 w-4 h-4 bg-fashion-gold rounded-full border-4 border-white shadow-soft"></div>
                  <div className="ml-16 bg-white p-6 rounded-lg shadow-soft">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-fashion-gold">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-fashion-primary">{milestone.title}</h3>
                    </div>
                    <p className="text-fashion-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-fashion-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-fashion-primary">Meet Our Team</h2>
            <p className="text-xl text-fashion-gray-600">
              The passionate people behind Style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-fashion-primary">{member.name}</h3>
                  <p className="text-fashion-gold font-medium">{member.role}</p>
                  <p className="text-fashion-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-fashion-primary">Get in Touch</h2>
            <p className="text-xl text-fashion-gray-600">
              We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-fashion-primary" />
                </div>
                <h3 className="text-lg font-semibold text-fashion-primary">Email Us</h3>
                <p className="text-fashion-gray-600">hello@style.com</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-fashion-primary" />
                </div>
                <h3 className="text-lg font-semibold text-fashion-primary">Call Us</h3>
                <p className="text-fashion-gray-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-fashion-gold rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-fashion-primary" />
                </div>
                <h3 className="text-lg font-semibold text-fashion-primary">Visit Us</h3>
                <p className="text-fashion-gray-600">123 Fashion St, NY 10001</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;