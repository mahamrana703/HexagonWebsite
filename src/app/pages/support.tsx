import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, Phone, BookOpen, Video, HelpCircle } from 'lucide-react';

export function SupportPage() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      action: 'Start Chat',
      color: '#1279e4',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      action: 'Send Email',
      color: '#189f6c',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      action: 'Call Now',
      color: '#5baffc',
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Browse our comprehensive guides',
      action: 'View Docs',
      color: '#1279e4',
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch step-by-step tutorials',
      action: 'Watch Now',
      color: '#189f6c',
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Find answers to common questions',
      action: 'Browse FAQ',
      color: '#5baffc',
    },
  ];

  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1279e4]/5 via-transparent to-[#189f6c]/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We're Here to{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Help You
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get the support you need, whenever you need it. Our team is ready to assist you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${option.color}20, ${option.color}10)`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: option.color }} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{option.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                  
                  <button
                    className="w-full py-3 rounded-lg font-semibold transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${option.color}15, ${option.color}10)`,
                      color: option.color,
                    }}
                  >
                    {option.action}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
            }}
          >
            <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#1279e4]" />
                <span className="font-semibold">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#1279e4]" />
                <span className="font-semibold">support@hexagoncx.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
