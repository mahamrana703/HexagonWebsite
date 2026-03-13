import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = '',
  delay = 0,
  hover = false,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' } : {}}
      className={`backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl shadow-xl transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
      }}
    >
      {children}
    </motion.div>
  );
}