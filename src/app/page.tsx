'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

export default function HomePage() {
  const { theme } = useTheme();

  // Cycling identities for the text animation
  const identities = [
    "Financial Leader",
    "Technology Enthusiast", 
    "Navy Veteran",
    "Father",
    "Husband",
    "Strategic Thinker"
  ];

  const [currentIdentityIndex, setCurrentIdentityIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdentityIndex((prev) => (prev + 1) % identities.length);
    }, 4000); // Changed to 4 seconds

    return () => clearInterval(interval);
  }, [identities.length]);

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden`}
         style={{ backgroundColor: 'var(--color-background)' }}>
      
      {/* Minimalist Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Gradient Orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === 'dystopian'
              ? 'bg-gradient-to-r from-pink-500/10 to-cyan-500/10'
              : 'bg-gradient-to-r from-blue-400/15 to-purple-400/15'
          }`}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${
            theme === 'dystopian'
              ? 'bg-gradient-to-r from-cyan-500/8 to-pink-500/8'
              : 'bg-gradient-to-r from-purple-400/12 to-blue-400/12'
          }`}
        />

        {/* Geometric Shapes */}
        <motion.div
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
          className={`absolute top-1/3 right-1/3 w-32 h-32 border border-opacity-20 rotate-12 ${
            theme === 'dystopian'
              ? 'border-cyan-400'
              : 'border-blue-400'
          }`}
          style={{ borderRadius: '30%' }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          className={`absolute bottom-1/3 left-1/3 w-24 h-24 border border-opacity-15 rotate-45 ${
            theme === 'dystopian'
              ? 'border-pink-400'
              : 'border-purple-400'
          }`}
          style={{ borderRadius: '40%' }}
        />

        {/* Diagonal Lines */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          className={`absolute top-0 left-0 w-full h-0.5 origin-left rotate-12 ${
            theme === 'dystopian'
              ? 'bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent'
              : 'bg-gradient-to-r from-transparent via-blue-400/15 to-transparent'
          }`}
        />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
          className={`absolute bottom-0 right-0 w-full h-0.5 origin-right -rotate-12 ${
            theme === 'dystopian'
              ? 'bg-gradient-to-l from-transparent via-pink-400/20 to-transparent'
              : 'bg-gradient-to-l from-transparent via-purple-400/15 to-transparent'
          }`}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [-20, -100, -200],
              x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100]
            }}
            transition={{
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'dystopian'
                ? 'bg-cyan-400/30'
                : 'bg-blue-400/25'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${60 + i * 5}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Photo with Circular Border Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto mb-8"
            style={{ width: '500px', height: '500px' }}
          >
            {/* Simple Animated Border */}
            <div className="absolute inset-0">
              <svg 
                className="w-full h-full animate-spin" 
                viewBox="0 0 500 500"
                style={{ 
                  animationDuration: '4s',
                  animationTimingFunction: 'linear'
                }}
              >
                <defs>
                  <radialGradient 
                    id="borderGradient" 
                    cx="50%" 
                    cy="50%" 
                    r="50%"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop 
                      offset="0%" 
                      stopColor={theme === 'dystopian' ? '#06d6a0' : '#3b82f6'} 
                      stopOpacity="0.2" 
                    />
                    <stop 
                      offset="70%" 
                      stopColor={theme === 'dystopian' ? '#06d6a0' : '#3b82f6'} 
                      stopOpacity="0.8" 
                    />
                    <stop 
                      offset="100%" 
                      stopColor={theme === 'dystopian' ? '#06d6a0' : '#3b82f6'} 
                      stopOpacity="1" 
                    />
                  </radialGradient>
                </defs>
                <circle
                  cx="250"
                  cy="250"
                  r="248"
                  fill="none"
                  stroke="url(#borderGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="300 479"
                  opacity="0.8"
                />
              </svg>
            </div>
            
            {/* Profile Photo */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="absolute inset-3 rounded-full overflow-hidden"
            >
              <img
                src="/images/roderick-home.png"
                alt="Roderick Daniels"
                className="w-full h-full object-cover"
                style={{ 
                  objectPosition: '50% 0%'
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`heading-1 text-balance mb-4 ${
              theme === 'dystopian'
                ? 'neon-text'
                : 'gradient-text'
            }`}
          >
            Roderick Daniels
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <p className={`text-lead font-medium text-balance ${
              theme === 'dystopian'
                ? 'text-accent'
                : 'text-primary'
            }`}>
              Bridging Technology, Business, and Real-World Results.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-3 text-balance mb-8"
          >
            <span className="mr-3">I'm a</span>
            <div className="inline-block relative" style={{ minWidth: '280px' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIdentityIndex}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 left-0 font-semibold"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: `1px ${theme === 'dystopian' ? 'rgba(6, 214, 160, 0.4)' : 'rgba(59, 130, 246, 0.4)'}`,
                  }}
                >
                  {identities[currentIdentityIndex]}
                  
                  {/* Filled text overlay with color animation */}
                  <motion.span
                    initial={{ 
                      clipPath: 'inset(0 100% 0 0)',
                      color: theme === 'dystopian' ? '#06d6a0' : '#3b82f6'
                    }}
                    animate={{ 
                      clipPath: 'inset(0 0 0 0)',
                      color: theme === 'dystopian' ? '#06d6a0' : '#3b82f6'
                    }}
                    transition={{ 
                      duration: 1.2,
                      delay: 0.3,
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 left-0 font-semibold"
                    style={{
                      WebkitTextStroke: 'none',
                    }}
                  >
                    {identities[currentIdentityIndex]}
                  </motion.span>
                </motion.span>
              </AnimatePresence>
              
              {/* Invisible spacer to maintain consistent width */}
              <span className="opacity-0 font-semibold">
                {identities.reduce((longest, current) => 
                  current.length > longest.length ? current : longest, ""
                )}
              </span>
            </div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lead text-pretty max-w-2xl mx-auto mb-12"
          >
            Transforming financial operations through strategic leadership, innovative technology, 
            and data-driven solutions. 11+ years driving excellence in defense and government sectors.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ 
                scale: 0.98,
                y: 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              }}
            >
              <Link
                href="/resume"
                className={`btn-primary inline-block px-8 py-3 rounded-lg font-medium ${
                  theme === 'dystopian'
                    ? 'hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] neon-border'
                    : 'hover:shadow-lg hover-lift'
                }`}
              >
                View Resume
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ 
                scale: 0.98,
                y: 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              }}
            >
              <Link
                href="/contact"
                className={`btn-secondary inline-block px-8 py-3 rounded-lg font-medium ${
                  theme === 'dystopian'
                    ? 'hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                    : 'hover:shadow-md'
                }`}
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Theme-Specific Background Elements */}
        {theme === 'dystopian' && (
          <>
            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
            <div className="fixed inset-0 scanline pointer-events-none" />
          </>
        )}

        {theme === 'modern' && (
          <div className="fixed inset-0 bg-gradient-to-br from-surface-light-secondary via-surface-light-tertiary to-surface-light-secondary animate-gradient opacity-30 pointer-events-none" />
        )}
      </div>
    </div>
  );
} 