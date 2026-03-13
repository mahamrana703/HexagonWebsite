import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 0.6 
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
}
