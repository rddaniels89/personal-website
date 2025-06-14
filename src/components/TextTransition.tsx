'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextTransitionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  className?: string;
  stagger?: boolean;
  once?: boolean;
}

const getVariants = (direction: string) => {
  const variants = {
    up: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  };
  
  return variants[direction as keyof typeof variants] || variants.up;
};

export default function TextTransition({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
  stagger = false,
  once = true
}: TextTransitionProps) {
  const variants = getVariants(direction);

  if (stagger && typeof children === 'string') {
    // Split text into words for stagger effect
    const words = children.split(' ');
    
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        transition={{
          staggerChildren: 0.1,
          delayChildren: delay
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={variants}
            transition={{
              duration,
              ease: "easeOut"
            }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
} 
