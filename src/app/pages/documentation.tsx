import React from 'react';
import { motion } from 'motion/react';
import { Book, Code, Rocket, Shield, Zap, Terminal } from 'lucide-react';

export function DocumentationPage() {
  const sections = [
    {
      icon: Rocket,
      title: 'Getting Started',
      description: 'Quick start guide to set up your first AI voice agent',
      color: '#1279e4',
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation with code examples',
      color: '#189f6c',
    },
    {
      icon: Zap,
      title: 'Integrations',
      description: 'Connect with CRMs, helpdesks, and more',
      color: '#5baffc',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Best practices for secure implementations',
      color: '#1279e4',
    },
    {
      icon: Terminal,
      title: 'SDKs & Libraries',
      description: 'Client libraries for Python, Node.js, and more',
      color: '#189f6c',
    },
    {
      icon: Book,
      title: 'Use Case Guides',
      description: 'Industry-specific implementation guides',
      color: '#5baffc',
    },
  ];

  return (
    <div className="relative">
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
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to build, deploy, and scale AI voice agents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${section.color}20, ${section.color}10)`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: section.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
