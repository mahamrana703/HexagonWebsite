import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';
import { AIWaveform } from './ai-waveform';
import { GlassCard } from './glass-card';
import { FloatingParticles } from './floating-particles';
import { ParallaxElement } from './parallax-element';
import { MagneticButton } from './magnetic-button';
import { TextReveal } from './text-reveal';
import { AnimatedGradientText } from './animated-gradient-text';
import { FloatingShapes } from './floating-shapes';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-30 pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Floating Shapes */}
      <FloatingShapes />
      
      {/* Animated Orbs with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-96 h-96 bg-[#1279e4]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#189f6c]/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#5baffc]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#1279e4]/20 text-[#1279e4]"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(18, 121, 228, 0.4)',
                '0 0 0 10px rgba(18, 121, 228, 0)',
                '0 0 0 0 rgba(18, 121, 228, 0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span className="font-medium">Powered by Advanced AI</span>
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '700', lineHeight: '1.2' }}>
            Transform Your Customer Service with{' '}
            <span className="bg-gradient-to-r from-[#1279e4] via-[#5baffc] to-[#189f6c] bg-clip-text text-transparent">
              AI-Powered Voice Agents
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          style={{ lineHeight: '1.7' }}
        >
          24/7 intelligent call center automation that understands context, speaks naturally, and
          delivers exceptional customer experiences at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <MagneticButton className="group px-8 py-4 bg-gradient-to-r from-[#1279e4] to-[#189f6c] text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
            <span>Start Free Trial</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </MagneticButton>

          <MagneticButton onClick={() => navigate('/demo')} className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-800 rounded-xl font-semibold hover:border-[#1279e4]/30 hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
            <Phone className="w-5 h-5" />
            <span>Book a Demo</span>
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '<2s', label: 'Response Time' },
            { value: '50+', label: 'Languages Supported' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
              }}
              style={{ perspective: 1000 }}
            >
              <GlassCard className="p-6 text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 200,
                    delay: 1.2 + index * 0.1 
                  }}
                >
                  <AnimatedGradientText>{stat.value}</AnimatedGradientText>
                </motion.div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Waveform */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <AIWaveform />
        </motion.div>
      </motion.div>
    </section>
  );
}