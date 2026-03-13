import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
// import logo from 'figma:asset/dad7435a9cf9679714ec55ca98ea74165741b423.png';

const navLinks = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Documentation', href: '/documentation' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src="/public/images/hexagon-logo.png"
              alt="Hexagon CX"
              className="h-16 w-auto"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-[#1279e4] transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="https://hexagon-crm-five.vercel.app/login">
              <button className="px-6 py-2 text-gray-700 hover:text-[#1279e4] transition-colors font-medium">
                Sign In
              </button>
            </Link>
            <Link to="https://hexagon-crm-five.vercel.app/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-[#1279e4] to-[#5baffc] text-white rounded-lg font-semibold shadow-lg shadow-[#1279e4]/30 hover:shadow-xl hover:shadow-[#1279e4]/40 transition-all flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pt-4 pb-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#1279e4] transition-colors font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link to="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <button className="px-6 py-2 text-gray-700 hover:text-[#1279e4] transition-colors font-medium text-left w-full">
                    Sign In
                  </button>
                </Link>
                <Link to="/get-started" onClick={() => setMobileMenuOpen(false)}>
                  <button className="px-6 py-3 bg-gradient-to-r from-[#1279e4] to-[#5baffc] text-white rounded-lg font-semibold shadow-lg shadow-[#1279e4]/30 flex items-center justify-center gap-2 w-full">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}