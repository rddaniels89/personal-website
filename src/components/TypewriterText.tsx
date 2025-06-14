'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  showCursor = true,
  className = '',
  style = {},
  onComplete
}: TypewriterTextProps) {
  const { theme } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    }
  };

  return (
    <span className={className} style={style}>
      {displayText}
      {showCursor && (
        <motion.span
          variants={cursorVariants}
          animate="blinking"
          className={`inline-block w-0.5 h-[1em] ml-1 ${
            theme === 'dystopian' 
              ? 'bg-neon-pink' 
              : 'bg-primary'
          }`}
          style={{
            boxShadow: theme === 'dystopian' 
              ? '0 0 8px rgba(131, 134, 245, 0.8)' 
              : 'none'
          }}
        />
      )}
    </span>
  );
} 
