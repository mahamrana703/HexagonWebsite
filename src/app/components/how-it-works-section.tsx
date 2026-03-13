import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './glass-card';
import { Settings, Phone, BarChart3, Sparkles } from 'lucide-react';
import { ParallaxElement } from './parallax-element';

const steps = [
  {
    number: '01',
    icon: Settings,
    title: 'Configure Your AI',
    description: 'Set up your AI with scripts, FAQs, and workflows.',
    color: '#1279e4',
  },
  {
    number: '02',
    icon: Phone,
    title: 'Go Live',
    description: 'Deploy AI agents across inbound and outbound calls instantly.',
    color: '#189f6c',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Optimize',
    description: 'Analyze call data and improve performance automatically.',
    color: '#5baffc',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Enhance',
    description: 'Add advanced features and customize your AI agents.',
    color: '#189f6c',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ position: 'relative' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />
      
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
              Get Started in{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                3 Simple Steps
              </span>
            </h2>
            <p className="text-gray-600 text-lg">From setup to first call in under 5 minutes</p>
          </motion.div>
        </ParallaxElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="relative p-8 h-full flex flex-col overflow-hidden group">
                  <div className="relative z-10">
                    <div
                      className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center relative flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}99)`,
                      }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background: 'white',
                          color: step.color,
                          boxShadow: `0 4px 12px ${step.color}40`,
                        }}
                      >
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-1 text-center">
                      <h3 className="mb-3 text-gray-900" style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.3' }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600" style={{ lineHeight: '1.7', fontSize: '0.9375rem' }}>
                        {step.description}
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