import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

export function CareersPage() {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Build the next generation of AI voice agents and conversational AI systems.',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      description: 'Design beautiful, intuitive interfaces for our AI call center platform.',
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help our customers succeed with AI-powered customer service solutions.',
    },
    {
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      description: 'Drive growth by connecting businesses with our AI voice agent platform.',
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
              Join Our{' '}
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Help us revolutionize customer service with AI-powered voice agents. Join a team of innovators building the future.
            </p>
          </motion.div>

          {/* Open Positions */}
          <div className="max-w-5xl mx-auto space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-[#1279e4] transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 self-start md:self-center"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1279e4]/10 via-transparent to-[#189f6c]/10" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent mb-4">
                  100%
                </div>
                <p className="text-gray-600">Remote Friendly</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent mb-4">
                  $150K+
                </div>
                <p className="text-gray-600">Average Salary</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent mb-4">
                  Unlimited
                </div>
                <p className="text-gray-600">PTO Policy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
