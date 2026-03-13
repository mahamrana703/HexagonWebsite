import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './glass-card';
import { ShoppingCart, Headphones, Calendar, Heart, Building2, Briefcase } from 'lucide-react';
import { ParallaxElement } from './parallax-element';

const useCases = [
  {
    icon: Headphones,
    title: 'Customer Support Automation',
    description: 'Handle support tickets, FAQs, and troubleshooting with intelligent AI agents that never sleep.',
    color: '#1279e4',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Order Assistance',
    description: 'Guide customers through orders, track shipments, and handle returns seamlessly.',
    color: '#1279e4',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Automate scheduling, confirmations, and reminders for appointments and reservations.',
    color: '#5baffc',
  },
  {
    icon: Heart,
    title: 'Healthcare & Finance Helplines',
    description: 'Provide secure, compliant support for sensitive industries with AI you can trust.',
    color: '#189f6c',
  },
  {
    icon: Building2,
    title: 'Real Estate Management',
    description: 'Streamline property management, tenant communication, and maintenance requests with AI.',
    color: '#1279e4',
  },
  {
    icon: Briefcase,
    title: 'Business Process Automation',
    description: 'Optimize workflows, reduce manual tasks, and enhance productivity with AI-driven solutions.',
    color: '#189f6c',
  },
];

export function UseCasesSection() {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-white to-gray-50/50" style={{ position: 'relative' }}>
      <div className="max-w-7xl mx-auto">
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
              Built for Every{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Industry
              </span>
            </h2>
            <p className="text-gray-600 text-lg">AI-powered solutions tailored to your business needs</p>
          </motion.div>
        </ParallaxElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-100 group">
                  {/* Subtle gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:from-blue-50/50 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${useCase.color}, ${useCase.color}dd)`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: 'white' }}
                      />
                    </div>
                    
                    {/* Content */}
                    <h3 className="mb-3 text-gray-900" style={{ fontSize: '1.125rem', fontWeight: '600', lineHeight: '1.4' }}>
                      {useCase.title}
                    </h3>
                    
                    <p
                      className="text-gray-600"
                      style={{ lineHeight: '1.6', fontSize: '0.9375rem' }}
                    >
                      {useCase.description}
                    </p>
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