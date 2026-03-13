import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring animations for cursor movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Slower spring for trailing effect
  const trailingConfig = { damping: 25, stiffness: 150, mass: 0.8 };
  const trailingX = useSpring(cursorX, trailingConfig);
  const trailingY = useSpring(cursorY, trailingConfig);

  useEffect(() => {
    setMounted(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.7 : isHovering ? 2 : 1,
            rotate: isHovering ? 90 : 0,
          }}
          transition={{ 
            scale: { duration: 0.2, ease: 'easeOut' },
            rotate: { duration: 0.4, ease: 'easeInOut' }
          }}
        >
          <div
            className="w-8 h-8 rounded-full border-2"
            style={{
              borderColor: isHovering ? '#1279e4' : '#f59e0b',
              boxShadow: isHovering 
                ? '0 0 20px rgba(18, 121, 228, 0.5), inset 0 0 10px rgba(18, 121, 228, 0.3)' 
                : '0 0 10px rgba(245, 158, 11, 0.3)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 1.5 : isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <div 
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: isHovering ? '#1279e4' : '#374151',
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Trailing cursor with gradient */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailingX,
          y: trailingY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="w-3 h-3 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(18, 121, 228, 0.6) 0%, rgba(18, 121, 228, 0.3) 70%, transparent 100%)',
              filter: 'blur(2px)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Glow effect on hover */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <motion.div
            className="relative -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'radial-gradient(circle, rgba(18, 121, 228, 0.2) 0%, transparent 70%)',
              filter: 'blur(15px)',
            }}
          />
        </motion.div>
      )}

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9996]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0.8, scale: 0.5 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div
            className="relative -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2"
            style={{
              borderColor: '#1279e4',
            }}
          />
        </motion.div>
      )}
    </>
  );
}