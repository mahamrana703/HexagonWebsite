import React from 'react';
import { motion } from 'motion/react';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className = '' }: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={`bg-gradient-to-r from-[#1279e4] via-[#5baffc] to-[#189f6c] bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      animate={{
        backgroundPosition: ['0% center', '200% center', '0% center'],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundSize: '200% auto',
      }}
    >
      {children}
    </motion.span>
  );
}
