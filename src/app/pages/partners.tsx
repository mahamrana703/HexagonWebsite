import React from 'react';
import { motion } from 'motion/react';
import { Handshake, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export function PartnersPage() {
  const navigate = useNavigate();
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Share',
      description: 'Earn up to 30% recurring commission on all referred customers.',
      color: '#1279e4',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Get access to our partner success team and technical resources.',
      color: '#189f6c',
    },
    {
      icon: Award,
      title: 'Co-Marketing',
      description: 'Joint marketing opportunities and access to our brand assets.',
      color: '#5baffc',
    },
    {
      icon: Handshake,
      title: 'Partner Portal',
      description: 'Track leads, deals, and commissions through our partner dashboard.',
      color: '#1279e4',
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
              Become a{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Partner
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Join our partner program and help businesses transform their customer service with AI voice agents.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/partnership-form')}
              className="px-8 py-4 bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white rounded-xl font-semibold shadow-lg shadow-[#1279e4]/30 hover:shadow-xl hover:shadow-[#1279e4]/40 transition-all inline-flex items-center gap-2"
            >
              Apply to Partner Program
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Partner Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `linear-gradient(135deg, ${benefit.color}20, ${benefit.color}10)`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1279e4]/10 via-transparent to-[#189f6c]/10" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Partner Programs</h2>
            <p className="text-xl text-gray-600">
              We offer different partnership models to fit your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Referral Partner',
                description: 'Earn commissions by referring customers to our platform',
                commission: '20%',
              },
              {
                title: 'Reseller Partner',
                description: 'Sell our solutions directly to your customers',
                commission: '30%',
                featured: true,
              },
              {
                title: 'Technology Partner',
                description: 'Integrate your platform with our AI voice agents',
                commission: 'Custom',
              },
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`backdrop-blur-xl border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                  program.featured
                    ? 'bg-gradient-to-br from-[#1279e4]/20 to-[#189f6c]/20 border-[#1279e4]/40'
                    : 'bg-white/60 border-white/40'
                }`}
              >
                {program.featured && (
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white text-sm font-semibold rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent mb-6">
                  {program.commission}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    program.featured
                      ? 'bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white shadow-lg'
                      : 'bg-white border-2 border-[#1279e4] text-[#1279e4]'
                  }`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
