'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useTheme } from '@/lib/ThemeContext';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
  once?: boolean;
}

export default function TextReveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  className = '',
  once = true
}: TextRevealProps) {
  const { theme } = useTheme();

  const getSlideVariants = () => {
    const variants = {
      left: { x: '-100%' },
      right: { x: '100%' },
      up: { y: '-100%' },
      down: { y: '100%' }
    };
    return variants[direction];
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration * 0.8,
        delay: delay + duration * 0.2,
        ease: "easeOut"
      }
    }
  };

  const maskVariants = {
    hidden: {
      ...getSlideVariants()
    },
    visible: {
      x: direction === 'left' ? '100%' : direction === 'right' ? '-100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
      transition: {
        duration,
        delay,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
      >
        {children}
      </motion.div>
      
      {/* Reveal mask */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: theme === 'dystopian' 
            ? '#3d43b4' 
            : '#041348'
        }}
        variants={maskVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
      />
    </div>
  );
} 
