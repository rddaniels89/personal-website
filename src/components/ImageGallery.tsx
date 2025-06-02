import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

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
          className={`relative rounded-lg overflow-hidden ${
            theme === 'dystopian'
              ? 'border border-neon-pink/20'
              : 'border border-modern-accent/20'
          }`}
        >
          <div className="relative aspect-video">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
          {image.caption && (
            <div className={`p-2 text-sm ${
              theme === 'dystopian'
                ? 'bg-cyber-gray text-gray-300'
                : 'bg-modern-gray text-modern-text/70'
            }`}>
              {image.caption}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
} 