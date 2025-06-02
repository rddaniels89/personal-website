'use client';

import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${
      theme === 'dystopian' ? 'bg-cyber-black' : 'bg-modern-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className={`text-6xl font-bold mb-6 ${
            theme === 'dystopian'
              ? 'neon-text text-neon-pink animate-glitch'
              : 'gradient-text'
          }`}>
            Roderick Daniels
          </h1>
          
          <p className={`text-xl mb-8 ${
            theme === 'dystopian'
              ? 'text-neon-blue'
              : 'text-modern-text'
          }`}>
            Financial Management Analyst • Defense Financial Operations Expert • Strategic Resource Manager
          </p>

          <div className="flex justify-center space-x-6">
            <Link
              href="/resume"
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                theme === 'dystopian'
                  ? 'bg-neon-pink text-black hover:bg-neon-blue neon-border'
                  : 'bg-modern-accent text-white hover:bg-opacity-90 hover-lift'
              }`}
            >
              View Resume
            </Link>
            
            <Link
              href="/contact"
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                theme === 'dystopian'
                  ? 'border-2 border-neon-pink text-neon-pink hover:border-neon-blue hover:text-neon-blue'
                  : 'border-2 border-modern-accent text-modern-accent hover:bg-modern-accent hover:bg-opacity-10'
              }`}
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Dystopian Theme Background Elements */}
        {theme === 'dystopian' && (
          <>
            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
            <div className="fixed inset-0 scanline pointer-events-none" />
          </>
        )}

        {/* Modern Theme Background Elements */}
        {theme === 'modern' && (
          <div className="fixed inset-0 bg-gradient-to-br from-modern-black via-modern-gray to-modern-black animate-gradient opacity-30 pointer-events-none" />
        )}
      </div>
    </div>
  );
} 