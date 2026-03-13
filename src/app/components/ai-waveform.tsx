import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function AIWaveform() {
  const bars = Array.from({ length: 40 });
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights(bars.map(() => Math.random() * 100 + 20));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-1 h-32">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-[#1279e4] to-[#5baffc]"
          animate={{
            height: `${heights[i] || Math.random() * 100 + 20}%`,
          }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
          }}
          style={{
            opacity: 0.4 + (i % 3) * 0.2,
          }}
        />
      ))}
    </div>
  );
}
