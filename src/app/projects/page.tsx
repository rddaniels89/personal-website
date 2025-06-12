'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import { FiExternalLink, FiTool, FiMaximize2, FiChevronDown, FiX } from 'react-icons/fi';
import { GiWoodBeam, GiSawedOffShotgun, GiClosedDoors, GiWashingMachine, GiKitchenTap, GiBookshelf, GiTable } from 'react-icons/gi';
import ImageGallery from '@/components/ImageGallery';
import { IconType } from 'react-icons';
import CaseStudies from '@/components/CaseStudies';

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
  images: ProjectImage[];
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
    title: "Closet Storage System",
    category: "Home Improvement",
    description: "Custom-built closet organization system featuring adjustable shelving, hanging rods, and pull-out drawers. Maximizes storage space while maintaining a clean, modern aesthetic.",
    details: [
      "Full wall-to-wall installation",
      "Adjustable shelf heights",
      "Built-in LED lighting",
      "Soft-close drawer hardware",
      "Custom shoe storage section"
    ],
    techniques: [
      "French cleat wall mounting",
      "Custom drawer construction",
      "Edge banding application",
      "LED lighting installation",
      "Hardware fitting"
    ],
    icon: GiClosedDoors,
    tools: [
      "Track saw",
      "Edge bander",
      "Drill/driver set",
      "Level and laser level",
      "Cabinet hardware jig"
    ],
    images: [
      {
        src: "/images/Projects/Closet Storage/Closet1.jpeg",
        alt: "Initial closet space",
        caption: "Empty closet before custom storage installation"
      },
      {
        src: "/images/Projects/Closet Storage/Closet2.jpeg",
        alt: "Framework installation",
        caption: "Installing the main framework and support structure"
      },
      {
        src: "/images/Projects/Closet Storage/Closet3.jpeg",
        alt: "Shelving and drawers",
        caption: "Adding adjustable shelves and drawer units"
      },
      {
        src: "/images/Projects/Closet Storage/Closet4.jpeg",
        alt: "Completed system",
        caption: "Final view of the completed closet organization system"
      }
    ]
  },
  {
    title: "Modern Entryway Cabinet",
    category: "Woodworking",
    description: "Custom floating entryway cabinet featuring a solid wood top and sleek wall-mounted design. Combines modern aesthetics with practical storage, including hidden mounting system and soft-close drawers.",
    details: [
      "Dimensions: 48\" x 16\" x 18\"",
      "Floating wall-mount design",
      "Solid wood top with waterfall edge",
      "Soft-close drawer mechanisms",
      "Hidden mounting bracket system"
    ],
    techniques: [
      "French cleat mounting",
      "Waterfall edge joinery",
      "Drawer box construction",
      "Veneer application",
      "Hardware installation"
    ],
    icon: GiTable,
    tools: [
      "Table saw",
      "Router and templates",
      "Drawer slide jig",
      "Edge bander",
      "Level and mounting tools"
    ],
    images: [
      {
        src: "/images/Projects/Entryway/Entryway1.jpeg",
        alt: "Cabinet carcass construction",
        caption: "Building the main cabinet structure with precise joinery"
      },
      {
        src: "/images/Projects/Entryway/Entryway2.jpeg",
        alt: "Mounting system",
        caption: "Installing the French cleat wall mounting system"
      },
      {
        src: "/images/Projects/Entryway/Entryway3.jpeg",
        alt: "Drawer construction",
        caption: "Building and fitting the soft-close drawer boxes"
      },
      {
        src: "/images/Projects/Entryway/Entryway4.jpeg",
        alt: "Wood top preparation",
        caption: "Preparing the solid wood top with waterfall edge detail"
      },
      {
        src: "/images/Projects/Entryway/Entryway5.jpeg",
        alt: "Final assembly",
        caption: "Mounting the cabinet and attaching the wood top"
      },
      {
        src: "/images/Projects/Entryway/Entryway6.jpeg",
        alt: "Completed installation",
        caption: "Final view of the floating cabinet with wood top installed"
      }
    ]
  },
  {
    title: "Kitchen Sink Installation",
    category: "Home Improvement",
    description: "Complete kitchen sink upgrade including custom cabinet modifications, plumbing updates, and installation of a professional-grade undermount sink with modern fixtures.",
    details: [
      "36\" undermount sink",
      "Custom cabinet reinforcement",
      "New plumbing fixtures",
      "Garbage disposal installation",
      "Waterproof sealing system"
    ],
    techniques: [
      "Cabinet modification",
      "Plumbing installation",
      "Countertop templating",
      "Silicone application",
      "Electrical work"
    ],
    icon: GiKitchenTap,
    tools: [
      "Plumbing tools",
      "Jigsaw",
      "Silicone gun",
      "Pipe wrenches",
      "Level and measuring tools"
    ],
    images: [
      {
        src: "/images/Projects/Kitchen/Kitchen1.jpeg",
        alt: "Initial kitchen sink area",
        caption: "Starting point: Original sink and cabinet configuration"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen2.jpeg",
        alt: "Cabinet preparation",
        caption: "Cabinet modifications and reinforcement phase"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen3.jpeg",
        alt: "Plumbing setup",
        caption: "New plumbing configuration and connections"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen4.jpeg",
        alt: "Sink installation progress",
        caption: "Sink placement and initial fitting"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen4_5.jpeg",
        alt: "Detailed sink fitting",
        caption: "Fine-tuning the sink position and sealing"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen5.jpeg",
        alt: "Final plumbing connections",
        caption: "Completing plumbing connections and testing"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen6.jpeg",
        alt: "Fixture installation",
        caption: "Installing the new faucet and fixtures"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen7.jpeg",
        alt: "Near completion",
        caption: "Final adjustments and quality checks"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen8.jpeg",
        alt: "Completed installation",
        caption: "Finished kitchen sink installation with all fixtures"
      }
    ]
  },
  {
    title: "Laundry Room Storage Solution",
    category: "Home Improvement",
    description: "Custom laundry room organization system with folding counter, hanging space, and storage cabinets. Designed for maximum efficiency in a compact space.",
    details: [
      "Full-width countertop",
      "Upper and lower cabinets",
      "Retractable clothesline",
      "Integrated ironing station",
      "Pull-out hamper system"
    ],
    techniques: [
      "Cabinet installation",
      "Counter fabrication",
      "Hardware mounting",
      "Space optimization",
      "Utility integration"
    ],
    icon: GiWashingMachine,
    tools: [
      "Cabinet saw",
      "Brad nailer",
      "Level and square",
      "Drill/driver set",
      "Measuring tools"
    ],
    images: [
      {
        src: "/images/Projects/Laundry/Laundry1.jpeg",
        alt: "Initial laundry room space",
        caption: "Starting point: Empty laundry room before renovation"
      },
      {
        src: "/images/Projects/Laundry/Laundry2.jpeg",
        alt: "Wall preparation",
        caption: "Wall preparation and initial layout marking"
      },
      {
        src: "/images/Projects/Laundry/Laundry3.jpeg",
        alt: "Cabinet framework",
        caption: "Installing the base cabinet framework"
      },
      {
        src: "/images/Projects/Laundry/Laundry4.jpeg",
        alt: "Lower cabinets installation",
        caption: "Lower cabinet installation and leveling"
      },
      {
        src: "/images/Projects/Laundry/Laundry5.jpeg",
        alt: "Upper cabinet preparation",
        caption: "Preparing upper cabinet installation"
      },
      {
        src: "/images/Projects/Laundry/Laundry6.jpeg",
        alt: "Upper cabinets mounting",
        caption: "Mounting and securing upper cabinets"
      },
      {
        src: "/images/Projects/Laundry/Laundry7.jpeg",
        alt: "Counter installation",
        caption: "Installing the folding counter surface"
      },
      {
        src: "/images/Projects/Laundry/Laundry8.jpeg",
        alt: "Hardware installation",
        caption: "Adding cabinet hardware and pulls"
      },
      {
        src: "/images/Projects/Laundry/Laundry9.jpeg",
        alt: "Storage solutions",
        caption: "Installing internal storage organizers"
      },
      {
        src: "/images/Projects/Laundry/Laundry10.jpeg",
        alt: "Utility integration",
        caption: "Setting up utility connections and hookups"
      },
      {
        src: "/images/Projects/Laundry/Laundry11.jpeg",
        alt: "Final touches",
        caption: "Adding finishing touches and accessories"
      },
      {
        src: "/images/Projects/Laundry/Laundry12.jpeg",
        alt: "Organization setup",
        caption: "Setting up the organization system"
      },
      {
        src: "/images/Projects/Laundry/Laundry13.jpeg",
        alt: "Completed laundry room",
        caption: "Final view of the completed laundry room storage solution"
      }
    ]
  },
  {
    title: "Loft Tech Center",
    category: "Home Improvement",
    description: "Modern loft study area featuring a built-in desk system, cable management, and integrated tech solutions. Designed for optimal productivity and clean aesthetics.",
    details: [
      "12-foot built-in desk",
      "Custom monitor mounts",
      "Hidden cable system",
      "LED ambient lighting",
      "Acoustic panel integration"
    ],
    techniques: [
      "Desk construction",
      "Cable management",
      "Lighting installation",
      "Acoustic treatment",
      "Monitor mounting"
    ],
    icon: GiBookshelf,
    tools: [
      "Table saw",
      "Router",
      "Cable management tools",
      "Drill/driver set",
      "LED installation kit"
    ],
    images: [
      {
        src: "/images/Projects/Loft/Loft1.jpeg",
        alt: "Initial loft space",
        caption: "Starting point: Empty loft area before transformation"
      },
      {
        src: "/images/Projects/Loft/Loft2.jpeg",
        alt: "Space planning",
        caption: "Layout planning and initial measurements"
      },
      {
        src: "/images/Projects/Loft/Loft3.jpeg",
        alt: "Framework beginning",
        caption: "Starting the desk framework construction"
      },
      {
        src: "/images/Projects/Loft/Loft4.jpeg",
        alt: "Basic structure",
        caption: "Basic desk structure taking shape"
      },
      {
        src: "/images/Projects/Loft/Loft5.jpeg",
        alt: "Cable management",
        caption: "Installing cable management system"
      },
      {
        src: "/images/Projects/Loft/Loft6.jpeg",
        alt: "Desktop installation",
        caption: "Mounting the main desktop surface"
      },
      {
        src: "/images/Projects/Loft/Loft7.jpeg",
        alt: "Monitor mounting",
        caption: "Setting up monitor mounting system"
      },
      {
        src: "/images/Projects/Loft/Loft8.jpeg",
        alt: "LED installation",
        caption: "Installing ambient LED lighting"
      },
      {
        src: "/images/Projects/Loft/Loft9.jpeg",
        alt: "Tech integration",
        caption: "Integrating tech components and cable routing"
      },
      {
        src: "/images/Projects/Loft/Loft10.jpeg",
        alt: "Acoustic treatment",
        caption: "Adding acoustic panels for sound treatment"
      },
      {
        src: "/images/Projects/Loft/Loft11.jpeg",
        alt: "Equipment setup",
        caption: "Setting up monitors and equipment"
      },
      {
        src: "/images/Projects/Loft/Loft12.jpeg",
        alt: "Final touches",
        caption: "Adding finishing touches to the workspace"
      },
      {
        src: "/images/Projects/Loft/Loft13.jpeg",
        alt: "Cable management complete",
        caption: "Final cable management and organization"
      },
      {
        src: "/images/Projects/Loft/Loft14.jpeg",
        alt: "Lighting test",
        caption: "Testing all lighting systems"
      },
      {
        src: "/images/Projects/Loft/Loft15.jpeg",
        alt: "Completed setup",
        caption: "Final view of the completed loft tech center"
      }
    ]
  },
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
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (title: string) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <div className={`min-h-screen ${
      theme === 'dystopian' ? 'bg-cyber-black' : 'bg-modern-background'
    }`}>
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

        <CaseStudies />

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
              initial="rest"
              whileHover={expandedProject !== project.title ? {
                scale: 1.02,
                y: -8
              } : {}}
              whileTap={expandedProject !== project.title ? {
                scale: 0.98
              } : {}}
              animate="rest"
              onClick={() => !expandedProject && toggleProject(project.title)}
              className={`relative p-4 sm:p-6 rounded-lg transition-all duration-300 ${
                expandedProject === project.title
                  ? theme === 'dystopian'
                    ? 'bg-cyber-gray border-2 border-neon-pink'
                    : 'bg-white border-2 border-modern-accent'
                  : theme === 'dystopian'
                    ? 'bg-cyber-gray border border-neon-pink/20 hover:border-neon-pink/40 hover:bg-cyber-gray/80 hover:shadow-[0_0_30px_rgba(255,0,110,0.15)] cursor-pointer'
                    : 'bg-modern-gray border border-modern-accent/20 hover:border-modern-accent/40 hover:bg-white/50 hover:shadow-xl cursor-pointer'
              }`}
            >
              <div className="flex items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
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
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
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
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className={`flex items-center gap-2 font-medium mb-2 text-sm sm:text-base ${
                          theme === 'dystopian'
                            ? 'text-neon-blue'
                            : 'text-navy-blue'
                        }`}>
                          <FiTool className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Techniques & Tools
                        </h3>
                        <ul className={`list-disc list-inside space-y-1 text-xs sm:text-sm ${
                          theme === 'dystopian'
                            ? 'text-gray-400'
                            : 'text-modern-text/70'
                        }`}>
                          {project.techniques.map((technique, index) => (
                            <motion.li 
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              {technique}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                    <ImageGallery images={project.images} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-3 sm:mt-6"
                  >
                    {project.images.slice(0, 4).map((image, index) => (
                      <div
                        key={index}
                        className={`relative aspect-video rounded-lg overflow-hidden border ${
                          theme === 'dystopian'
                            ? 'border-neon-pink/20'
                            : 'border-modern-accent/20'
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 