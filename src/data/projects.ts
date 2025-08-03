import { IconType } from 'react-icons';
import { GiWoodBeam, GiSawedOffShotgun, GiClosedDoors, GiWashingMachine, GiKitchenTap, GiBookshelf, GiTable } from 'react-icons/gi';
import { FiDollarSign, FiBarChart } from 'react-icons/fi';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  details: string[];
  techniques: string[];
  icon: IconType;
  tools: string[];
  images: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "FIRE FED",
    category: "Financial Technology",
    description: "A comprehensive FIRE (Financial Independence, Retire Early) calculator specifically designed for federal employees. Features advanced retirement planning tools, federal benefits integration, and personalized savings strategies.",
    details: [
      "Federal pension integration (FERS/CSRS)",
      "TSP optimization calculations",
      "Special provisions for federal employees",
      "Multiple retirement scenarios",
      "Interactive charts and projections"
    ],
    techniques: [
      "React component architecture",
      "Financial calculations and modeling",
      "Data visualization",
      "Responsive design",
      "State management"
    ],
    icon: FiDollarSign,
    tools: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Chart.js",
      "Git"
    ],
    images: [
      {
        src: "/images/placeholder-project.svg",
        alt: "FIRE-Fed Calculator Screenshot",
        caption: "FIRE calculator interface for federal employees"
      }
    ],
    githubUrl: "https://github.com/rddaniels89/FIRE-FED.git",
    liveUrl: undefined
  },
  {
    title: "Federal Retirement Advisor",
    category: "Financial Technology",
    description: "An intelligent advisory system for federal employees navigating retirement decisions. Provides personalized recommendations based on years of service, current position, and financial goals.",
    details: [
      "Personalized retirement timeline",
      "Federal benefits analysis",
      "Pension optimization strategies",
      "Healthcare transition planning",
      "Social Security integration"
    ],
    techniques: [
      "Decision tree algorithms",
      "Data-driven recommendations",
      "User experience design",
      "Form validation and processing",
      "Federal regulations compliance"
    ],
    icon: FiBarChart,
    tools: [
      "React",
      "Node.js",
      "CSS3",
      "JavaScript",
      "Federal APIs",
      "Git"
    ],
    images: [
      {
        src: "/images/placeholder-project.svg",
        alt: "Federal Retirement Advisor Screenshot",
        caption: "Retirement planning interface for federal employees"
      }
    ],
    githubUrl: "https://github.com/rddaniels89/fed-retirement-advisor.git",
    liveUrl: undefined
  },
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
      "Level",
      "Electrical tools"
    ],
    images: [
      {
        src: "/images/Projects/Kitchen/Kitchen1.jpeg",
        alt: "Original sink setup",
        caption: "Original kitchen sink before upgrade"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen2.jpeg",
        alt: "Cabinet preparation",
        caption: "Modifying cabinet structure for new sink"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen3.jpeg",
        alt: "Plumbing work",
        caption: "Installing new plumbing connections"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen4.jpeg",
        alt: "Sink installation",
        caption: "Mounting the new undermount sink"
      },
      {
        src: "/images/Projects/Kitchen/Kitchen5.jpeg",
        alt: "Final installation",
        caption: "Completed sink installation with new fixtures"
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
        alt: "Final organization system",
        caption: "Completed laundry room with full organization system"
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
        alt: "Lighting installation",
        caption: "Installing LED ambient lighting system"
      },
      {
        src: "/images/Projects/Loft/Loft9.jpeg",
        alt: "Cable organization",
        caption: "Organizing and hiding all cables"
      },
      {
        src: "/images/Projects/Loft/Loft10.jpeg",
        alt: "Final tech center",
        caption: "Completed loft tech center with full setup"
      }
    ]
  }
]; 
