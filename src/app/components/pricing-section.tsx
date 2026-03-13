import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './glass-card';
import { Check, Star } from 'lucide-react';
import { ParallaxElement } from './parallax-element';

const plans = [
  {
    name: 'Starter',
    subtitle: 'For small teams',
    price: '$99',
    period: '/month',
    features: [
      '1 AI Agent',
      'Up to 500 calls/month',
      'Basic Analytics',
      'Email Support',
      'Standard Voice Quality',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    subtitle: 'For growing businesses',
    price: '$299',
    period: '/month',
    features: [
      '5 AI Agents',
      'Up to 5,000 calls/month',
      'Advanced Analytics',
      'CRM Integrations',
      'Priority Support',
      'Custom Voice Training',
      'Multi-language Support',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'For large organizations',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited AI Agents',
      'Unlimited calls',
      'Custom AI Training',
      'Dedicated Account Manager',
      'Advanced Security & Compliance',
      'API Access',
      '24/7 Phone Support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 px-6 relative z-20" style={{ position: 'relative' }}>
      <div className="max-w-7xl mx-auto relative z-20">
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
              Simple,{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-gray-600 text-lg">Choose the plan that fits your business needs</p>
          </motion.div>
        </ParallaxElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ParallaxElement
              key={plan.name}
              speed={0.2 + index * 0.15}
              direction={index === 1 ? 'up' : 'down'}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-full"
              >
                {plan.highlighted && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg z-30"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                  >
                    <Star className="w-4 h-4 fill-white" />
                    Most Popular
                  </motion.div>
                )}
                
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard
                    className={`p-8 h-full ${plan.highlighted ? 'ring-2 ring-[#1279e4]' : ''}`}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                      <p className="text-gray-600 text-sm">{plan.subtitle}</p>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <motion.span
                          className="text-5xl font-bold bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                        >
                          {plan.price}
                        </motion.span>
                        {plan.period && (
                          <span className="text-gray-600">{plan.period}</span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        >
                          <div className="w-5 h-5 rounded-full bg-[#189f6c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#189f6c]" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white shadow-lg shadow-[#1279e4]/30 hover:shadow-xl hover:shadow-[#1279e4]/40'
                          : 'bg-white/80 text-gray-800 border-2 border-gray-200 hover:border-[#1279e4]/30 hover:bg-white'
                      }`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10">{plan.cta}</span>
                    </motion.button>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </ParallaxElement>
          ))}
        </div>
      </div>
    </section>
  );
}