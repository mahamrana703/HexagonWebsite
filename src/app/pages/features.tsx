import React from 'react';
import { motion } from 'motion/react';
import { Phone, Zap, Bot, MessageSquare, TrendingUp, Shield, Clock, Users } from 'lucide-react';

export function FeaturesPage() {
  const features = [
    {
      icon: Phone,
      title: '24/7 Availability',
      description: 'Never miss a call. Our AI agents work around the clock to handle customer inquiries at any time.',
      color: '#1279e4',
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Zero wait times. Customers get immediate answers without being put on hold.',
      color: '#189f6c',
    },
    {
      icon: Bot,
      title: 'Natural Conversations',
      description: 'Human-like interactions powered by advanced AI that understands context and intent.',
      color: '#5baffc',
    },
    {
      icon: MessageSquare,
      title: 'Multi-Language Support',
      description: 'Communicate with customers in 50+ languages with native-level fluency.',
      color: '#1279e4',
    },
    {
      icon: TrendingUp,
      title: 'Smart Routing',
      description: 'Intelligent call distribution to the right department or escalation to human agents.',
      color: '#189f6c',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with GDPR, HIPAA, and SOC 2 standards.',
      color: '#5baffc',
    },
    {
      icon: Clock,
      title: 'Call Analytics',
      description: 'Real-time insights and detailed reports on call volume, duration, and outcomes.',
      color: '#1279e4',
    },
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamlessly connects with Salesforce, HubSpot, Zendesk, and 100+ other platforms.',
      color: '#189f6c',
    },
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
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Modern Customer Service
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to deliver exceptional customer experiences with AI-powered voice agents
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <div
                    className="relative backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col overflow-hidden group cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                         style={{ boxShadow: 'inset 0 0 20px rgba(255,255,255,0.4)' }} />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.4 }
                        }}
                      >
                        <Icon className="w-7 h-7" style={{ color: feature.color }} />
                      </motion.div>

                      <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1279e4]/10 via-transparent to-[#189f6c]/10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of companies using AI voice agents to transform their customer service
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white rounded-xl font-semibold shadow-lg shadow-[#1279e4]/30 hover:shadow-xl hover:shadow-[#1279e4]/40 transition-all"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
