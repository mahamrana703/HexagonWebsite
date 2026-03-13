import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export function ParallaxElement({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '' 
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
