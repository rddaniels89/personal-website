'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
  const [showAllImages, setShowAllImages] = useState(false);

  // Show first 8 images in preview, rest in expanded view
  const previewImages = images.slice(0, 8);
  const hasMoreImages = images.length > 8;
  const displayImages = showAllImages ? images : previewImages;

  const handleImageClick = (displayIndex: number) => {
    // In preview mode, displayIndex maps directly to the same index in full array
    // In full view mode, displayIndex also maps directly
    setCurrentImageIndex(displayIndex);
  };

  const handleClose = () => {
    setCurrentImageIndex(null);
  };

  const handleViewAllImages = () => {
    setShowAllImages(true);
  };

  const handleShowLess = () => {
    setShowAllImages(false);
  };

  const nextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
    }
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-3 sm:mt-6"
      >
        {displayImages.map((image, displayIndex) => {
          return (
            <motion.div
              key={displayIndex}
              variants={item}
              whileHover={{ 
                scale: 1.05,
                y: -4
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleImageClick(displayIndex)}
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
          );
        })}
      </motion.div>

      {/* View All / Show Less Button */}
      {hasMoreImages && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={showAllImages ? handleShowLess : handleViewAllImages}
          className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            theme === 'dystopian'
              ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40 border border-neon-pink/20'
              : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20 border border-modern-accent/20'
          }`}
        >
          {showAllImages ? 'Show Less' : 'View All Images'}
        </motion.button>
      )}

      {/* Modal for enlarged image view */}
      <AnimatePresence>
        {currentImageIndex !== null && currentImageIndex < images.length && (
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
              {/* Close button */}
              <button
                onClick={handleClose}
                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray/80 text-neon-pink hover:bg-cyber-gray'
                    : 'bg-white/80 text-modern-accent hover:bg-white'
                }`}
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Navigation buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-colors ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/80 text-neon-pink hover:bg-cyber-gray'
                        : 'bg-white/80 text-modern-accent hover:bg-white'
                    }`}
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-colors ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/80 text-neon-pink hover:bg-cyber-gray'
                        : 'bg-white/80 text-modern-accent hover:bg-white'
                    }`}
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="relative aspect-video">
                {/* Debug info */}
                <div className="absolute top-2 left-2 z-20 bg-black/50 text-white text-xs p-1 rounded">
                  Index: {currentImageIndex}, Src: {images[currentImageIndex].src.substring(images[currentImageIndex].src.lastIndexOf('/') + 1)}
                </div>
                <Image
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

              {/* Image counter */}
              {images.length > 1 && (
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-sm ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray/80 text-gray-300'
                    : 'bg-white/80 text-modern-text'
                }`}>
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 
