import React from 'react';
import { motion } from 'motion/react';

export function FloatingParticles() {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#1279e4' : i % 3 === 1 ? '#189f6c' : '#5baffc',
            opacity: 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
