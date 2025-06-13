'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  onClick?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  quality = 80,
  onClick
}: OptimizedImageProps) {
  // Convert JPEG paths to WebP
  const webpSrc = src.replace(/\.(jpg|jpeg)$/i, '.webp');
  const thumbSrc = src.replace(/\.(jpg|jpeg)$/i, '.thumb.webp');
  
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <Image
        src={webpSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${className}`}
        priority={priority}
        fill={fill}
        sizes={sizes}
        quality={quality}
        loading={priority ? 'eager' : 'lazy'}
        placeholder="blur"
        blurDataURL={thumbSrc}
      />
    </motion.div>
  );
} 