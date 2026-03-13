import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Award, Globe } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize customer service with AI-powered voice agents that deliver exceptional experiences 24/7.',
      color: '#1279e4',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of AI researchers, engineers, and customer service experts passionate about innovation.',
      color: '#189f6c',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Excellence, innovation, transparency, and unwavering commitment to customer success.',
      color: '#5baffc',
    },
    {
      icon: Globe,
      title: 'Our Impact',
      description: 'Serving 10,000+ businesses across 50 countries, handling millions of customer interactions daily.',
      color: '#1279e4',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Active Customers' },
    { number: '50M+', label: 'Calls Handled' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.9/5', label: 'Customer Rating' },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1279e4]/5 via-transparent to-[#189f6c]/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Customer Service
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to transform how businesses connect with their customers through intelligent AI voice technology.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${value.color}20, ${value.color}10)`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
            }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
              Founded in 2022, Hexagon CX emerged from a simple observation: customer service shouldn't stop when your team goes home. 
              We built the world's most advanced AI voice platform to ensure every customer gets the help they need, exactly when they need it. 
              Today, we're proud to serve thousands of businesses worldwide, from startups to Fortune 500 companies.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
