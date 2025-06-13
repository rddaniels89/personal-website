'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import { OptimizedImage } from './ui/optimized-image';
import { FiX, FiMaximize2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show first 8 images in preview, rest in expanded view
  const previewImages = images.slice(0, 8);
  const hasMoreImages = images.length > 8;

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setCurrentImageIndex(null);
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-3 sm:mt-6"
      >
        {previewImages.map((image, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ 
              scale: 1.05,
              y: -4
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleImageClick(index)}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              theme === 'dystopian'
                ? 'border border-neon-pink/20 hover:border-neon-pink/40 hover:shadow-[0_0_20px_rgba(255,0,110,0.3)]'
                : 'border border-modern-accent/20 hover:border-modern-accent/40 hover:shadow-xl'
            }`}
          >
            <div className="relative aspect-video">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            {image.caption && (
              <motion.div 
                className={`p-2 text-xs sm:text-sm transition-colors duration-300 ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray text-gray-300'
                    : 'bg-modern-gray text-modern-text/70'
                }`}
              >
                {image.caption}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {hasMoreImages && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(true)}
          className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            theme === 'dystopian'
              ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40 border border-neon-pink/20'
              : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20 border border-modern-accent/20'
          }`}
        >
          View All Images
        </motion.button>
      )}

      {isExpanded && currentImageIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`relative max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-xl ${
              theme === 'dystopian'
                ? 'bg-cyber-gray border border-neon-pink/20'
                : 'bg-modern-gray border border-modern-accent/20'
            }`}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <OptimizedImage
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                priority
                sizes="90vw"
                className="object-contain"
              />
            </div>
            {images[currentImageIndex].caption && (
              <div className={`p-4 text-sm ${
                theme === 'dystopian'
                  ? 'text-gray-300'
                  : 'text-modern-text/70'
              }`}>
                {images[currentImageIndex].caption}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
} 