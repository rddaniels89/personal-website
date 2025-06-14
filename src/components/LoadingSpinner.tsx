'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const { theme } = useTheme();

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {theme === 'dystopian' ? (
        // Cyberpunk-style loading animation
        <motion.div
          className={`relative ${sizeClasses[size]}`}
          variants={spinnerVariants}
          animate="animate"
        >
          <div 
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              borderTopColor: '#3d43b4',
              borderRightColor: '#8386f5',
              filter: 'drop-shadow(0 0 8px rgba(61, 67, 180, 0.5))'
            }}
          />
          <div 
            className="absolute inset-1 rounded-full border border-transparent"
            style={{
              borderBottomColor: '#1afe49',
              filter: 'drop-shadow(0 0 4px rgba(26, 254, 73, 0.3))'
            }}
          />
        </motion.div>
      ) : (
        // Clean modern loading dots
        <div className="flex space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`rounded-full bg-primary ${
                size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3'
              }`}
              variants={dotVariants}
              animate="animate"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
} 
