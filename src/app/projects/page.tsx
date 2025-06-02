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
          className={`text-4xl font-bold mb-12 ${
            theme === 'dystopian'
              ? 'text-neon-pink'
              : 'text-modern-accent'
          }`}
        >
          Projects
        </motion.h1>

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
              className={`p-6 rounded-lg ${
                theme === 'dystopian'
                  ? 'bg-cyber-gray border border-neon-pink/20'
                  : 'bg-modern-gray border border-modern-accent/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <project.icon
                  className={`w-6 h-6 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}
                />
                <h2 className={`text-xl font-semibold ${
                  theme === 'dystopian'
                    ? 'text-neon-pink'
                    : 'text-modern-accent'
                }`}>
                  {project.title}
                </h2>
              </div>

              <div className={`mb-4 ${
                theme === 'dystopian'
                  ? 'text-gray-300'
                  : 'text-modern-text'
              }`}>
                {project.description}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className={`flex items-center gap-2 font-medium mb-2 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-blue-400'
                  }`}>
                    <FiMaximize2 className="w-4 h-4" />
                    Details
                  </h3>
                  <ul className={`list-disc list-inside space-y-1 text-sm ${
                    theme === 'dystopian'
                      ? 'text-gray-400'
                      : 'text-modern-text/70'
                  }`}>
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className={`flex items-center gap-2 font-medium mb-2 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-blue-400'
                  }`}>
                    <FiTool className="w-4 h-4" />
                    Techniques & Tools
                  </h3>
                  <ul className={`list-disc list-inside space-y-1 text-sm ${
                    theme === 'dystopian'
                      ? 'text-gray-400'
                      : 'text-modern-text/70'
                  }`}>
                    {project.techniques.map((technique, index) => (
                      <li key={index}>{technique}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.images && project.images.length > 0 && (
                <ImageGallery images={project.images} />
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 