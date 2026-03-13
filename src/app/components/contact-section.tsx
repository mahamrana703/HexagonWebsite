import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './glass-card';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { ParallaxElement } from './parallax-element';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = 'Invalid email address';
    if (!formData.company) newErrors.company = 'Company name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = () => {
    if (validate()) {
      setIsSubmitting(true);
      console.log('Form submitted:', formData);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        });
        setErrors({});
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 2000);
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ position: 'relative' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
      
      {/* Animated Glassy Background Elements - Only Angular Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Squares with Glassmorphism */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl rotate-12"
          animate={{
            y: [0, -20, 0],
            rotate: [12, 25, 12],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl -rotate-12"
          animate={{
            y: [0, 25, 0],
            rotate: [-12, -30, -12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/3 w-28 h-28 backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl rotate-45"
          animate={{
            y: [0, -30, 0],
            rotate: [45, 60, 45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        {/* Glassy Rectangles */}
        <motion.div
          className="absolute top-1/2 left-10 w-40 h-20 backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl rotate-6"
          animate={{
            y: [0, -15, 0],
            rotate: [6, 15, 6],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-16 w-36 h-24 backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl -rotate-6"
          animate={{
            y: [0, 20, 0],
            rotate: [-6, -18, -6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute top-1/3 left-1/2 w-32 h-16 backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl rotate-12"
          animate={{
            y: [0, -18, 0],
            rotate: [12, 20, 12],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Additional Glassy Squares */}
        <motion.div
          className="absolute top-10 left-1/3 w-20 h-20 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl rotate-6"
          animate={{
            y: [0, -22, 0],
            rotate: [6, -10, 6],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />

        <motion.div
          className="absolute bottom-20 right-1/3 w-28 h-28 backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl -rotate-15"
          animate={{
            y: [0, 28, 0],
            rotate: [-15, -28, -15],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ParallaxElement speed={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
              }}
            >
              Let's{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-gray-600 text-lg">Have questions? We're here to help.</p>
          </motion.div>
        </ParallaxElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ParallaxElement speed={0.2} direction="up">
            <div className="p-8 bg-white/80 rounded-xl shadow-lg shadow-gray-100 relative">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Info</h3>
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 mr-2 text-gray-500" />
                <p className="text-gray-600">info@hexagoncx.com</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 mr-2 text-gray-500" />
                <p className="text-gray-600">+1 804 509 2450</p>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                <p className="text-gray-600">8 The Green STE B Dover, DE 19901</p>
              </div>
            </div>
          </ParallaxElement>

          {/* Contact Form */}
          <ParallaxElement speed={0.2} direction="down">
            <GlassCard delay={0.3} className="p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#189f6c]/10 flex items-center justify-center"
                  >
                    <CheckCircle className="w-12 h-12 text-[#189f6c]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all"
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700">
                      Business Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 text-gray-700">
                      Company Name *
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all"
                      placeholder="Acme Inc."
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:border-[#1279e4] focus:outline-none focus:ring-2 focus:ring-[#1279e4]/20 transition-all resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white rounded-xl font-semibold shadow-lg shadow-[#1279e4]/30 hover:shadow-xl hover:shadow-[#1279e4]/40 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Request
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              )}
            </GlassCard>
          </ParallaxElement>
        </div>
      </div>
    </section>
  );
}