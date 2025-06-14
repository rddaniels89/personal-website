'use client';

import React, { useState, lazy, Suspense } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import { FiExternalLink, FiTool, FiMaximize2, FiChevronDown, FiX } from 'react-icons/fi';
// Lazy load ImageGallery for better performance
const ImageGallery = lazy(() => import('@/components/ImageGallery'));
import LoadingSpinner from '@/components/LoadingSpinner';
import { projects, type Project, type ProjectImage } from '@/data/projects';

// Lazy load heavy components
const CaseStudies = lazy(() => import('@/components/CaseStudies'));

// Simplified animations for better performance
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // Reduced stagger delay
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 }, // Reduced movement
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3 // Faster animation
    }
  }
};

// Card hover animation variants
const cardHover = {
  rest: { 
    scale: 1, 
    y: 0,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: { 
    scale: 1.02, 
    y: -8,
    boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  },
  tap: {
    scale: 0.98,
    y: -4
  }
};

export default function ProjectsPage() {
  const { theme } = useTheme();
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [showCaseStudies, setShowCaseStudies] = useState(true); // Load immediately

  // No useEffect needed - load everything immediately for better performance

  const toggleProject = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <div className={`min-h-screen`}
      style={{
        backgroundColor: 'var(--color-background)'
      }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`heading-1 text-center text-balance mb-4 sm:mb-6 text-2xl sm:text-4xl ${
            theme === 'dystopian'
              ? 'neon-text text-neon-pink'
              : 'gradient-text'
          }`}
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-lead text-center text-pretty max-w-3xl mx-auto mb-8 sm:mb-16 text-sm sm:text-base ${
            theme === 'dystopian'
              ? 'text-gray-300'
              : 'text-modern-text/80'
          }`}
        >
          A showcase of innovative solutions spanning financial systems, automation tools, 
          and creative development projects that drive operational excellence.
        </motion.p>

        {/* Lazy load Case Studies to improve initial page load */}
        {showCaseStudies && (
          <Suspense fallback={
            <div className="flex justify-center py-8">
              <LoadingSpinner size="md" />
            </div>
          }>
            <CaseStudies />
          </Suspense>
        )}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4 sm:gap-8 mt-8 sm:mt-16"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              // Simplified hover animations for better performance
              whileHover={expandedProject !== project.title ? {
                scale: 1.01,
                y: -4
              } : {}}
              whileTap={expandedProject !== project.title ? {
                scale: 0.99
              } : {}}
              onClick={() => !expandedProject && toggleProject(project.title)}
              className={`relative p-4 sm:p-6 rounded-lg transition-all duration-300 ${
                expandedProject === project.title
                  ? theme === 'dystopian'
                    ? 'border-2'
                    : 'bg-white border-2 border-modern-accent'
                  : theme === 'dystopian'
                    ? 'border-2 hover:shadow-[0_0_25px_rgba(26,254,73,0.2)] cursor-pointer'
                    : 'bg-modern-gray border border-modern-accent/20 hover:border-modern-accent/40 hover:bg-white/50 hover:shadow-xl cursor-pointer'
              }`}
              style={{
                backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                borderColor: theme === 'dystopian' ? '#083e12' : undefined
              }}
            >
              <div className="flex items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1 // Simplified animation
                    }}
                    transition={{ 
                      duration: 0.2 // Faster transition
                    }}
                  >
                    <project.icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200 ${
                        theme === 'dystopian'
                          ? 'text-neon-blue'
                          : 'text-modern-accent'
                      }`}
                    />
                  </motion.div>
                  <h2 className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-modern-accent'
                  }`}>
                    {project.title}
                  </h2>
                </div>
                {expandedProject === project.title ? (
                  <button
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      toggleProject(project.title);
                    }}
                    className={`p-1.5 sm:p-2 rounded-full transition-colors duration-300 ${
                      theme === 'dystopian'
                        ? 'text-neon-pink hover:bg-cyber-black/30'
                        : 'text-modern-accent hover:bg-modern-gray/30'
                    }`}
                  >
                    <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      toggleProject(project.title);
                    }}
                    className={`p-1.5 sm:p-2 rounded-full transition-colors duration-300 ${
                      theme === 'dystopian'
                        ? 'text-neon-pink hover:bg-cyber-black/30'
                        : 'text-modern-accent hover:bg-modern-gray/30'
                    }`}
                  >
                    <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                )}
              </div>

              <div className={`text-sm sm:text-base transition-colors duration-300 ${
                theme === 'dystopian'
                  ? 'text-gray-300'
                  : 'text-modern-text'
              }`}>
                {project.description}
              </div>

              <AnimatePresence>
                {expandedProject === project.title ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className={`flex items-center gap-2 font-medium mb-2 text-sm sm:text-base ${
                          theme === 'dystopian'
                            ? 'text-neon-blue'
                            : 'text-navy-blue'
                        }`}>
                          <FiMaximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Details
                        </h3>
                        <ul className={`list-disc list-inside space-y-1 text-xs sm:text-sm ${
                          theme === 'dystopian'
                            ? 'text-gray-400'
                            : 'text-modern-text/70'
                        }`}>
                          {project.details.map((detail, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              {detail}
                            </motion.li>
                          ))}
                        </ul>

                        <h3 className={`flex items-center gap-2 font-medium mb-2 mt-4 text-sm sm:text-base ${
                          theme === 'dystopian'
                            ? 'text-neon-blue'
                            : 'text-navy-blue'
                        }`}>
                          <FiTool className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Techniques
                        </h3>
                        <ul className={`list-disc list-inside space-y-1 text-xs sm:text-sm ${
                          theme === 'dystopian'
                            ? 'text-gray-400'
                            : 'text-modern-text/70'
                        }`}>
                          {project.techniques.map((technique, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                            >
                              {technique}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className={`flex items-center gap-2 font-medium mb-2 text-sm sm:text-base ${
                          theme === 'dystopian'
                            ? 'text-neon-blue'
                            : 'text-navy-blue'
                        }`}>
                          <FiTool className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Tools Used
                        </h3>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                          {project.tools.map((tool, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className={`px-2 py-1 rounded text-xs ${
                                theme === 'dystopian'
                                  ? 'bg-cyber-gray/30 text-neon-pink'
                                  : 'bg-modern-gray/20 text-modern-accent'
                              }`}
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>

                        <div className="mt-4">
                          <h3 className={`flex items-center gap-2 font-medium mb-2 text-sm sm:text-base ${
                            theme === 'dystopian'
                              ? 'text-neon-blue'
                              : 'text-navy-blue'
                          }`}>
                            <FiMaximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Project Gallery
                          </h3>
                                                     <Suspense fallback={
                             <div className="flex justify-center py-4">
                               <LoadingSpinner size="sm" />
                             </div>
                           }>
                             <ImageGallery images={project.images} />
                           </Suspense>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 
