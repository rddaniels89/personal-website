'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import { FiExternalLink, FiTool, FiMaximize2 } from 'react-icons/fi';
import { GiWoodBeam, GiSawedOffShotgun } from 'react-icons/gi';
import ImageGallery from '@/components/ImageGallery';
import { IconType } from 'react-icons';

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  details: string[];
  techniques: string[];
  icon: IconType;
  tools: string[];
  images?: ProjectImage[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
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

const projects: Project[] = [
  {
    title: "Modern Farmhouse Dining Table",
    category: "Woodworking",
    description: "Custom-designed and handcrafted solid oak dining table combining modern aesthetics with traditional farmhouse elements. Features breadboard ends, mortise and tenon joinery, and a durable finish that enhances the natural wood grain.",
    details: [
      "Dimensions: 84\" x 42\" x 30\"",
      "Materials: Solid oak with walnut accents",
      "Traditional mortise and tenon joinery",
      "Custom-mixed stain for unique color depth",
      "Marine-grade finish for durability"
    ],
    techniques: [
      "Hand-cut mortise and tenon joints",
      "Traditional breadboard end construction",
      "Multi-stage sanding process (80-320 grit)",
      "Four-stage finishing process"
    ],
    icon: GiWoodBeam,
    tools: [
      "Table saw",
      "Router",
      "Mortising jig",
      "Hand planes",
      "Orbital sander"
    ],
    images: [
      {
        src: "/images/roderick-diningtable1.jpg",
        alt: "Table top glue-up with clamps and weights",
        caption: "Glue-up process: Clamping table top panels with weight distribution for even pressure"
      },
      {
        src: "/images/roderick-diningtable2.jpg",
        alt: "Table top during finishing process",
        caption: "Finishing stage: Showcasing the rich oak grain and breadboard end construction"
      },
      {
        src: "/images/roderick-diningtable3.jpg",
        alt: "Completed dining table with trestle base",
        caption: "Final result: 84\" oak farmhouse table with custom black trestle legs"
      }
    ]
  },
  {
    title: "Floor-to-Ceiling Fireplace Surround",
    category: "Woodworking",
    description: "Custom-built fireplace surround and mantle installation, transforming a standard electric fireplace into an elegant focal point. Design incorporates hidden storage, integrated lighting, and seamless crown molding transition.",
    details: [
      "Height: 108\" (floor to ceiling)",
      "Width: 72\" total installation",
      "Materials: Maple with custom trim work",
      "Integrated LED accent lighting",
      "Hidden cable management system"
    ],
    techniques: [
      "Custom trim and molding fabrication",
      "Precise scribe fitting to walls",
      "Built-in leveling system",
      "Seamless joint construction"
    ],
    icon: GiSawedOffShotgun,
    tools: [
      "Compound miter saw",
      "Cabinet saw",
      "Router table",
      "Level and laser level",
      "Brad nailer"
    ],
    images: [
      {
        src: "/images/roderick-fireplace1.jpg",
        alt: "Project planning with painter's tape",
        caption: "Planning phase: Using painter's tape to mark dimensions and layout"
      },
      {
        src: "/images/roderick-fireplace2.jpg",
        alt: "Prepared shiplap boards",
        caption: "Material prep: Primed shiplap boards ready for installation"
      },
      {
        src: "/images/roderick-fireplace3.jpg",
        alt: "Initial framing phase",
        caption: "Initial phase: Building the structural framework with vertical and horizontal supports"
      },
      {
        src: "/images/roderick-fireplace4.jpg",
        alt: "Completed fireplace surround with mounted TV",
        caption: "Final result: Custom maple shiplap wall with floating mantel and mounted TV"
      }
    ]
  }
];

export default function ProjectsPage() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${
      theme === 'dystopian' ? 'bg-cyber-black' : 'bg-modern-black'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`heading-1 text-center text-balance mb-6 ${
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
          className={`text-lead text-center text-pretty max-w-3xl mx-auto mb-16 ${
            theme === 'dystopian'
              ? 'text-gray-300'
              : 'text-modern-text/80'
          }`}
        >
          A showcase of innovative solutions spanning financial systems, automation tools, 
          and creative development projects that drive operational excellence.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              animate="rest"
              className={`relative p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                theme === 'dystopian'
                  ? 'bg-cyber-gray border border-neon-pink/20 hover:border-neon-pink/40 hover:bg-cyber-gray/80 hover:shadow-[0_0_30px_rgba(255,0,110,0.15)]'
                  : 'bg-modern-gray border border-modern-accent/20 hover:border-modern-accent/40 hover:bg-white/50 hover:shadow-xl'
              }`}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              <motion.div
                variants={cardHover}
                className="relative z-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    <project.icon
                      className={`w-6 h-6 transition-colors duration-300 ${
                        theme === 'dystopian'
                          ? 'text-neon-blue group-hover:text-neon-pink'
                          : 'text-modern-accent group-hover:text-blue-600'
                      }`}
                    />
                  </motion.div>
                  <h2 className={`text-xl font-semibold transition-colors duration-300 ${
                    theme === 'dystopian'
                      ? 'text-neon-pink group-hover:text-neon-blue'
                      : 'text-modern-accent group-hover:text-blue-600'
                  }`}>
                    {project.title}
                  </h2>
                </div>

                <div className={`mb-4 transition-colors duration-300 ${
                  theme === 'dystopian'
                    ? 'text-gray-300'
                    : 'text-modern-text'
                }`}>
                  {project.description}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className={`flex items-center gap-2 font-medium mb-2 transition-colors duration-300 ${
                      theme === 'dystopian'
                        ? 'text-neon-blue'
                        : 'text-blue-400'
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiMaximize2 className="w-4 h-4" />
                      </motion.div>
                      Details
                    </h3>
                    <ul className={`list-disc list-inside space-y-1 text-sm transition-colors duration-300 ${
                      theme === 'dystopian'
                        ? 'text-gray-400'
                        : 'text-modern-text/70'
                    }`}>
                      {project.details.map((detail, index) => (
                        <motion.li 
                          key={index}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className={`flex items-center gap-2 font-medium mb-2 transition-colors duration-300 ${
                      theme === 'dystopian'
                        ? 'text-neon-blue'
                        : 'text-blue-400'
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiTool className="w-4 h-4" />
                      </motion.div>
                      Techniques & Tools
                    </h3>
                    <ul className={`list-disc list-inside space-y-1 text-sm transition-colors duration-300 ${
                      theme === 'dystopian'
                        ? 'text-gray-400'
                        : 'text-modern-text/70'
                    }`}>
                      {project.techniques.map((technique, index) => (
                        <motion.li 
                          key={index}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          {technique}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {project.images && project.images.length > 0 && (
                  <ImageGallery images={project.images} />
                )}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 