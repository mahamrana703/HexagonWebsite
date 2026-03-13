import React from 'react';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Youtube, Github } from 'lucide-react';
import { Link } from 'react-router';
// import logo from 'figma:asset/dad7435a9cf9679714ec55ca98ea74165741b423.png';

const footerLinks = {
  product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Integrations', href: '/integrations' },
  ],
  resources: [
    { name: 'Documentation', href: '/documentation' },
    { name: 'API Reference', href: '/api-reference' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Partners', href: '/partners' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export function Footer() {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-blue-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="mb-4">
                <img src="/" alt="Hexagon CX" className="h-16 w-auto" />
              </div>
              <p className="text-gray-600 mb-6 max-w-xs" style={{ lineHeight: '1.7' }}>
                Revolutionizing customer service with intelligent AI voice agents that work 24/7.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#1279e4] hover:border-[#1279e4]/30 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-gray-800 mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-[#1279e4] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-[#1279e4] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-[#1279e4] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 text-sm">
            © 2026 Hexagon CX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-[#1279e4] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-600 hover:text-[#1279e4] transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-600 hover:text-[#1279e4] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}