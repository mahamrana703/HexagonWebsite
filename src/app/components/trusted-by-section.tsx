import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './glass-card';

const companies = [
  'TechCorp',
  'GlobalServe',
  'CloudNine',
  'DataSync',
  'VoiceFlow',
  'AI Solutions',
];

export function TrustedBySection() {
  // Duplicate the companies array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white" style={{ position: 'relative' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 font-medium text-lg">
            Trusted by fast-growing companies, enterprises, and global teams
          </p>
        </motion.div>

        {/* Glassmorphic Slider Container */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Slider wrapper */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -((companies.length * (280 + 24)))]
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: '280px' }}
                >
                  <div className="relative backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl transition-all duration-300 p-8 h-32 flex items-center justify-center overflow-hidden group">
                    {/* Morphism gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-50 pointer-events-none" />
                    
                    {/* Inner glow on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                         style={{ boxShadow: 'inset 0 0 20px rgba(18, 121, 228, 0.2)' }} />
                    
                    {/* Company name */}
                    <div className="relative z-10 text-2xl font-bold bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                      {company}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}