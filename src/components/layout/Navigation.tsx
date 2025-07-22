import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Catalog', path: '/catalog' },
    { name: 'New Series', path: '/new-series' },
    { name: 'Recommendations', path: '/recommendations' },
    { name: 'About', path: '/about' },
    { name: 'Membership', path: '/membership' },
  ];

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-fashion-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-premium text-white px-3 py-1 rounded-md font-bold text-xl">
              STYLE
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-fashion-gold relative ${
                  isActivePage(item.path)
                    ? 'text-fashion-primary'
                    : 'text-fashion-gray-600 hover:text-fashion-primary'
                }`}
              >
                {item.name}
                {isActivePage(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-fashion-gold" />
                )}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className={`hidden lg:flex items-center transition-all duration-300 ${
            isSearchOpen ? 'w-80' : 'w-64'
          }`}>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fashion-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search clothing..."
                className="pl-10 pr-4 py-2 w-full border-fashion-gray-200 focus:border-fashion-gold focus:ring-fashion-gold/20"
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 bg-fashion-gold text-fashion-primary text-xs">
                3
              </Badge>
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 bg-fashion-gold text-fashion-primary text-xs">
                2
              </Badge>
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t border-fashion-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fashion-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search clothing..."
                className="pl-10 pr-4 py-2 w-full border-fashion-gray-200 focus:border-fashion-gold focus:ring-fashion-gold/20"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-fashion-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActivePage(item.path)
                      ? 'text-fashion-primary'
                      : 'text-fashion-gray-600 hover:text-fashion-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;