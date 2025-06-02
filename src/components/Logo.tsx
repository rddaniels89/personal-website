'use client';

import * as React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'icon' | 'text' | 'stacked';
  className?: string;
  animate?: boolean;
  showTooltip?: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12', 
  lg: 'w-16 h-16',
  xl: 'w-24 h-24'
};

const textSizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-3xl', 
  xl: 'text-5xl'
};

export default function Logo({ 
  size = 'md', 
  variant = 'default', 
  className = '', 
  animate = true,
  showTooltip = false 
}: LogoProps) {
  const { theme } = useTheme();
  
  const logoId = React.useId();

  // SVG Logo Component
  const LogoIcon = ({ className: iconClassName }: { className?: string }) => (
    <svg
      viewBox="0 0 100 100"
      className={iconClassName}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradients for different themes */}
        <linearGradient id={`gradient-${theme}-${logoId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          {theme === 'dystopian' ? (
            <>
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#EC4899" />
            </>
          )}
        </linearGradient>
        
        {/* Tech circuit pattern for background */}
        <pattern id={`circuit-${theme}-${logoId}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path 
            d="M 0 10 L 20 10 M 10 0 L 10 20" 
            stroke={theme === 'dystopian' ? '#06B6D4' : '#3B82F6'} 
            strokeWidth="0.5" 
            opacity="0.3"
          />
          <circle 
            cx="10" 
            cy="10" 
            r="1" 
            fill={theme === 'dystopian' ? '#EC4899' : '#2563EB'} 
            opacity="0.6"
          />
        </pattern>
      </defs>
      
      {/* Background circle with tech pattern */}
      <circle 
        cx="50" 
        cy="50" 
        r="48" 
        fill={`url(#circuit-${theme}-${logoId})`}
        stroke={`url(#gradient-${theme}-${logoId})`}
        strokeWidth="2"
        opacity="0.1"
      />
      
      {/* Main logo elements */}
      <g>
        {/* Letter R */}
        <path
          d="M 20 25 L 20 75 M 20 25 L 35 25 Q 45 25 45 35 Q 45 45 35 45 L 20 45 M 35 45 L 45 75"
          stroke={`url(#gradient-${theme}-${logoId})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Letter D */}
        <path
          d="M 55 25 L 55 75 M 55 25 L 70 25 Q 80 25 80 50 Q 80 75 70 75 L 55 75"
          stroke={`url(#gradient-${theme}-${logoId})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Financial/Tech accent elements */}
        {/* Chart bars (finance motif) */}
        <g opacity="0.7">
          <rect x="15" y="60" width="2" height="8" fill={theme === 'dystopian' ? '#06B6D4' : '#3B82F6'} />
          <rect x="18" y="55" width="2" height="13" fill={theme === 'dystopian' ? '#06B6D4' : '#3B82F6'} />
          <rect x="21" y="50" width="2" height="18" fill={theme === 'dystopian' ? '#06B6D4' : '#3B82F6'} />
        </g>
        
        {/* Circuit nodes (tech motif) */}
        <g opacity="0.8">
          <circle cx="75" cy="30" r="1.5" fill={theme === 'dystopian' ? '#EC4899' : '#EC4899'} />
          <circle cx="75" cy="40" r="1" fill={theme === 'dystopian' ? '#8B5CF6' : '#2563EB'} />
          <circle cx="75" cy="50" r="1.5" fill={theme === 'dystopian' ? '#06B6D4' : '#3B82F6'} />
          <path d="M 75 30 L 75 50" stroke={theme === 'dystopian' ? '#06B6D4' : '#3B82F6'} strokeWidth="0.5" />
        </g>
      </g>
    </svg>
  );

  // Animation variants
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const content = React.useMemo(() => {
    switch (variant) {
      case 'icon':
        return (
          <LogoIcon className={`${sizeClasses[size]} ${className}`} />
        );
        
      case 'text':
        return (
          <span className={`font-heading font-bold ${textSizeClasses[size]} ${
            theme === 'dystopian' ? 'neon-text' : 'gradient-text'
          } ${className}`}>
            RD
          </span>
        );
        
      case 'stacked':
        return (
          <div className={`flex flex-col items-center ${className}`}>
            <LogoIcon className={sizeClasses[size]} />
            <span className={`font-heading font-bold text-xs mt-1 ${
              theme === 'dystopian' ? 'text-neon-pink' : 'text-primary'
            }`}>
              DANIELS
            </span>
          </div>
        );
        
      default:
        return (
          <div className={`flex items-center space-x-2 ${className}`}>
            <LogoIcon className={sizeClasses[size]} />
            <span className={`font-heading font-bold ${textSizeClasses[size]} ${
              theme === 'dystopian' ? 'neon-text' : 'gradient-text'
            }`}>
              RD
            </span>
          </div>
        );
    }
  }, [variant, size, theme, className, logoId]);

  if (!animate) {
    return showTooltip ? (
      <div className="group relative">
        {content}
        <div className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
          theme === 'dystopian' 
            ? 'bg-cyber-gray text-neon-blue border border-neon-pink/20' 
            : 'bg-modern-gray text-modern-text border border-modern-accent/20'
        }`}>
          Roderick Daniels
        </div>
      </div>
    ) : content;
  }

  return (
    <motion.div
      variants={logoVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={showTooltip ? "group relative" : ""}
    >
      {content}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded transition-all duration-200 ${
            theme === 'dystopian' 
              ? 'bg-cyber-gray text-neon-blue border border-neon-pink/20' 
              : 'bg-modern-gray text-modern-text border border-modern-accent/20'
          }`}
        >
          Roderick Daniels
        </motion.div>
      )}
    </motion.div>
  );
} 