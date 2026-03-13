import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FloatingParticles } from './floating-particles';
import { MagneticButton } from './magnetic-button';
import { TextReveal } from './text-reveal';

export function CTASection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ position: 'relative' }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1279e4] via-[#189f6c] to-[#5baffc]" />
        <FloatingParticles />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
        
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rounded-lg"
          animate={{
            rotate: 360,
            scale: [1, 1.2],
          }}
          transition={{
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/30 rounded-full"
          animate={{
            scale: [1, 1.3],
            opacity: [0.3, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        
        {/* Additional floating shapes */}
        <motion.div
          className="absolute top-1/2 left-20 w-12 h-12 border-2 border-white/20"
          animate={{
            rotate: [0, 180],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl"
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
          }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-6"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span className="font-medium">Transform Your Call Center Today</span>
          </motion.div>

          <h2
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
            }}
          >
            <TextReveal delay={0.4}>
              Ready to revolutionize your customer service?
            </TextReveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            style={{ lineHeight: '1.7' }}
          >
            Join thousands of businesses already using AI voice agents to deliver exceptional
            customer experiences. Start your free trial today — no credit card required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton className="group px-8 py-4 bg-white text-[#1279e4] rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
              <span>Get Started Free</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </MagneticButton>

            <MagneticButton className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg">
              <span>Talk to Sales</span>
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-white/70 text-sm mt-6"
          >
            ✓ No credit card required &nbsp;&nbsp; ✓ 14-day free trial &nbsp;&nbsp; ✓ Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}