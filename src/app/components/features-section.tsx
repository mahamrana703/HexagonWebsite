import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './glass-card';
import { Bot, Zap, Clock, Globe, TrendingUp, Shield } from 'lucide-react';
import { ParallaxElement } from './parallax-element';
import { AnimatedGradientText } from './animated-gradient-text';

const features = [
  {
    title: 'AI Voice Agents',
    description: 'Natural, human-like conversations trained on your business data.',
    icon: Bot,
    color: '#1279e4',
  },
  {
    title: 'Instant Response',
    description: 'Quickly handle inquiries with AI-driven responses.',
    icon: Zap,
    color: '#189f6c',
  },
  {
    title: '24/7 Call Automation',
    description: 'Never miss a call, even outside business hours.',
    icon: Clock,
    color: '#5baffc',
  },
  {
    title: 'Multi-Language Support',
    description: 'Serve customers globally with localized AI voices.',
    icon: Globe,
    color: '#1279e4',
  },
  {
    title: 'Performance Tracking',
    description: 'Monitor and improve call center efficiency.',
    icon: TrendingUp,
    color: '#189f6c',
  },
  {
    title: 'Secure Call Recording',
    description: 'Encrypted recordings with AI-powered insights.',
    icon: Shield,
    color: '#5baffc',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ position: 'relative' }}>
      {/* Background gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(18, 121, 228, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(24, 159, 108, 0.1) 0%, transparent 50%)',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ParallaxElement speed={0.3}>
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
              Everything You Need to Run a{' '}
              <AnimatedGradientText>
                Smarter Call Center
              </AnimatedGradientText>
            </h2>
          </motion.div>
        </ParallaxElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="h-full"
              >
                <div 
                  className="relative backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col overflow-hidden group cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                  }}
                >
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                       style={{ boxShadow: 'inset 0 0 20px rgba(255,255,255,0.4)' }} />
                  
                  {/* Gradient shine on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${feature.color}40 50%, transparent 100%)`,
                      transform: 'translateX(-100%)',
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 relative"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: feature.color }} />
                      </motion.div>
                    </motion.div>
                    
                    <div className="flex flex-col flex-1">
                      <h3 className="mb-3 text-gray-900" style={{ fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.3' }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600" style={{ lineHeight: '1.7', fontSize: '0.9375rem' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}