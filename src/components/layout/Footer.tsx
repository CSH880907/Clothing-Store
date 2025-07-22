import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-fashion-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="bg-fashion-gold text-fashion-primary px-3 py-1 rounded-md font-bold text-xl inline-block">
              STYLE
            </div>
            <p className="text-fashion-gray-300 text-sm leading-relaxed">
              Discover the latest in fashion with our curated collection of premium clothing. 
              Style meets comfort in every piece.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-fashion-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-fashion-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-fashion-gold">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Catalog', path: '/catalog' },
                { name: 'New Series', path: '/new-series' },
                { name: 'Recommendations', path: '/recommendations' },
                { name: 'About Us', path: '/about' },
                { name: 'Membership', path: '/membership' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-fashion-gray-300 hover:text-fashion-gold transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Customer Service</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-fashion-gray-300">
                <Phone className="h-4 w-4 text-fashion-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-fashion-gray-300">
                <Mail className="h-4 w-4 text-fashion-gold" />
                <span>support@style.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-fashion-gray-300">
                <MapPin className="h-4 w-4 text-fashion-gold" />
                <span>123 Fashion St, NY 10001</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-fashion-gray-300">Business Hours:</p>
              <p className="text-sm text-fashion-gray-300">Mon - Fri: 9AM - 8PM</p>
              <p className="text-sm text-fashion-gray-300">Sat - Sun: 10AM - 6PM</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-sm text-fashion-gray-300">
              Subscribe to our newsletter for the latest fashion trends and exclusive offers.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-fashion-primary-light border-fashion-gray-600 text-white placeholder:text-fashion-gray-400 focus:border-fashion-gold"
              />
              <Button className="w-full bg-fashion-gold text-fashion-primary hover:bg-fashion-accent-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-fashion-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-fashion-gray-300">
              © 2024 Style Fashion. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-fashion-gray-300">
              <Link to="/privacy" className="hover:text-fashion-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-fashion-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/returns" className="hover:text-fashion-gold transition-colors">
                Returns & Exchanges
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;