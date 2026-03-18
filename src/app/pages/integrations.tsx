import React from 'react';
import { motion } from 'motion/react';
import { Plug, CheckCircle } from 'lucide-react';

export function IntegrationsPage() {
  const integrations = [
    { name: 'Salesforce', category: 'CRM', logo: '📊' },
    { name: 'HubSpot', category: 'CRM', logo: '🎯' },
    { name: 'Zendesk', category: 'Support', logo: '💬' },
    { name: 'Slack', category: 'Communication', logo: '💼' },
    { name: 'Microsoft Teams', category: 'Communication', logo: '👥' },
    { name: 'Zapier', category: 'Automation', logo: '⚡' },
    { name: 'Twilio', category: 'Telephony', logo: '📞' },
    { name: 'Google Calendar', category: 'Scheduling', logo: '📅' },
    { name: 'Shopify', category: 'E-commerce', logo: '🛒' },
    { name: 'Stripe', category: 'Payments', logo: '💳' },
    { name: 'Intercom', category: 'Support', logo: '🗨️' },
    { name: 'Freshdesk', category: 'Support', logo: '🎫' },
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1279e4]/10 border border-[#1279e4]/20 mb-6">
              <Plug className="w-4 h-4 text-[#1279e4]" />
              <span className="text-sm font-semibold text-[#1279e4]">Coming Soon</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Seamlessly Connect with{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Your Favorite Tools
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Integrate our AI voice agents with your existing tech stack in minutes. No coding required.
            </p>
          </motion.div>

          {/* Integrations Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                }}
              >
                <div className="text-4xl mb-4">{integration.logo}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.category}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#189f6c]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Connected</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Easy Setup',
                description: 'Connect your tools in minutes with our simple OAuth flow',
              },
              {
                title: 'Real-Time Sync',
                description: 'Data syncs instantly between platforms for seamless workflows',
              },
              {
                title: 'Custom Webhooks',
                description: 'Build custom integrations with our powerful API',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
