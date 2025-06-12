'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import { FiX, FiMaximize2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previewImages = images.slice(0, 4);
  const hasMoreImages = images.length > 4;

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
            onClick={() => {
              setCurrentImageIndex(index);
              setIsExpanded(true);
            }}
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
            <motion.div 
              className="relative aspect-video"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300"
              />
            </motion.div>
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
          className={`mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md flex items-center gap-2 text-sm sm:text-base transition-colors duration-300 ${
            theme === 'dystopian'
              ? 'bg-cyber-gray text-neon-pink hover:bg-cyber-gray/80'
              : 'bg-modern-gray text-modern-accent hover:bg-modern-gray/80'
          }`}
        >
          <FiMaximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          View All {images.length} Images
        </motion.button>
      )}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`relative max-w-6xl w-full rounded-lg overflow-hidden ${
                theme === 'dystopian'
                  ? 'bg-cyber-black border border-neon-pink/30'
                  : 'bg-white'
              }`}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className={`absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray text-neon-pink hover:bg-cyber-gray/80'
                    : 'bg-modern-gray text-modern-accent hover:bg-modern-gray/80'
                }`}
              >
                <FiX className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>

              <div className="relative aspect-video">
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                  priority
                />
              </div>

              <div className={`p-3 sm:p-4 ${
                theme === 'dystopian'
                  ? 'bg-cyber-gray text-gray-300'
                  : 'bg-modern-gray text-modern-text/70'
              }`}>
                <p className="text-sm sm:text-lg">{images[currentImageIndex].caption}</p>
                <p className="text-xs sm:text-sm mt-1 sm:mt-2">Image {currentImageIndex + 1} of {images.length}</p>
              </div>

              <button
                onClick={handlePrev}
                className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray text-neon-pink hover:bg-cyber-gray/80'
                    : 'bg-modern-gray text-modern-accent hover:bg-modern-gray/80'
                }`}
              >
                <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={handleNext}
                className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray text-neon-pink hover:bg-cyber-gray/80'
                    : 'bg-modern-gray text-modern-accent hover:bg-modern-gray/80'
                }`}
              >
                <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 