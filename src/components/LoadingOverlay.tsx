'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import LoadingSpinner from './LoadingSpinner';

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

export default function LoadingOverlay({ isLoading, message = 'Loading...' }: LoadingOverlayProps) {
  const { theme } = useTheme();

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const contentVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.9,
      y: 20
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundColor: theme === 'dystopian' 
              ? 'rgba(4, 19, 72, 0.95)' 
              : 'rgba(208, 208, 208, 0.95)',
            backdropFilter: 'blur(8px)'
          }}
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-4 p-8 rounded-xl"
            style={{
              backgroundColor: theme === 'dystopian' 
                ? 'rgba(8, 62, 18, 0.8)' 
                : 'rgba(255, 255, 255, 0.9)',
              border: theme === 'dystopian' 
                ? '1px solid rgba(61, 67, 180, 0.3)' 
                : '1px solid rgba(4, 19, 72, 0.2)',
              boxShadow: theme === 'dystopian'
                ? '0 0 30px rgba(61, 67, 180, 0.2)'
                : '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <LoadingSpinner size="lg" />
            <motion.p
              className={`text-lg font-medium ${
                theme === 'dystopian' ? 'text-primary' : 'text-primary'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {message}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
