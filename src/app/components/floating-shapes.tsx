import React from 'react';
import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    { type: 'circle', size: 100, color: '#1279e4', left: '10%', top: '20%', duration: 20 },
    { type: 'square', size: 80, color: '#189f6c', left: '80%', top: '60%', duration: 15 },
    { type: 'triangle', size: 90, color: '#5baffc', left: '50%', top: '30%', duration: 25 },
    { type: 'circle', size: 60, color: '#1279e4', left: '20%', top: '70%', duration: 18 },
    { type: 'square', size: 70, color: '#189f6c', left: '70%', top: '20%', duration: 22 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10"
          style={{
            left: shape.left,
            top: shape.top,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="w-full h-full rounded-full border-4"
              style={{ borderColor: shape.color }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className="w-full h-full border-4"
              style={{ borderColor: shape.color }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent"
              style={{ borderBottomColor: shape.color }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
