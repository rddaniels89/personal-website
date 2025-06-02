import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

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

export default function ImageGallery({ images }: ImageGalleryProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{ 
            scale: 1.05,
            y: -4
          }}
          whileTap={{ scale: 0.98 }}
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
              className={`p-2 text-sm transition-colors duration-300 ${
                theme === 'dystopian'
                  ? 'bg-cyber-gray text-gray-300'
                  : 'bg-modern-gray text-modern-text/70'
              }`}
              whileHover={{ 
                backgroundColor: theme === 'dystopian' 
                  ? 'rgba(26, 26, 26, 0.9)' 
                  : 'rgba(245, 245, 245, 0.9)' 
              }}
            >
              {image.caption}
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
} 