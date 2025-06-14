'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartBar } from "@/components/ui/chart";
import { 
  DollarSign, Percent, Clock, Users, Award, 
  TrendingUp, CheckCircle2, Briefcase, Shield,
  LineChart, PieChart, Wallet, Building2,
  ClipboardCheck, FileCheck, Download,
  AlertCircle, BadgeCheck, Hammer, Activity,
  BarChart, Building, Target, ChevronDown,
  ChevronUp, Eye, ExternalLink, Info,
  Calendar, MapPin, Zap, X
} from "lucide-react";
import { useTheme } from '@/lib/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05
    }
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (custom: number) => ({
    width: `${custom}%`,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2
    }
  })
};

const metricCardVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300
    }
  }
};

const iconVariant = {
  hidden: { 
    scale: 0,
    rotate: -45
  },
  visible: { 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400
    }
  }
};

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2000, suffix = '' }: { value: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);
  
  return <span>{count}{suffix}</span>;
};

// Interactive Timeline Component
const Timeline = ({ events, theme }: { events: Array<{title: string; date: string; description: string; icon: any}>; theme: string }) => {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  
  return (
    <div className="relative">
      <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${
        theme === 'dystopian' ? 'bg-neon-pink/30' : 'bg-modern-accent/30'
      }`} />
      
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="relative flex items-start gap-4 pb-6"
          onHoverStart={() => setActiveEvent(index)}
          onHoverEnd={() => setActiveEvent(null)}
        >
          <motion.div
            className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${
              theme === 'dystopian'
                ? 'bg-cyber-black border-neon-pink text-neon-pink'
                : 'bg-white border-modern-accent text-modern-accent'
            }`}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: activeEvent === index ? 1.2 : 1,
              boxShadow: activeEvent === index 
                ? theme === 'dystopian' 
                  ? '0 0 20px rgba(26,254,73,0.5)' 
                  : '0 0 20px rgba(4,19,72,0.3)'
                : 'none'
            }}
          >
            <event.icon className="w-4 h-4" />
          </motion.div>
          
          <motion.div
            className={`flex-1 p-4 rounded-lg border ${
              theme === 'dystopian'
                ? 'bg-cyber-gray/20 border-neon-pink/20'
                : 'bg-modern-gray/10 border-modern-accent/20'
            }`}
            animate={{
              scale: activeEvent === index ? 1.02 : 1,
              boxShadow: activeEvent === index 
                ? theme === 'dystopian'
                  ? '0 0 15px rgba(26,254,73,0.2)'
                  : '0 0 15px rgba(4,19,72,0.1)'
                : 'none'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <h4 className={`font-semibold ${
                theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
              }`}>
                {event.title}
              </h4>
              <span className="text-xs text-gray-500">{event.date}</span>
            </div>
            <p className={`text-sm ${
              theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {event.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, title, children, theme }: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  theme: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border-2 z-50 ${
              theme === 'dystopian'
                ? 'bg-cyber-black border-neon-pink/30 text-gray-300'
                : 'bg-white border-modern-accent/30 text-modern-text'
            }`}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className={`text-2xl font-bold ${
                theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
              }`}>
                {title}
              </h2>
              <button
                onClick={onClose}
                className={`p-2 rounded-lg hover:bg-gray-100 ${
                  theme === 'dystopian' ? 'hover:bg-cyber-gray/30' : ''
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function CaseStudies() {
  const { theme } = useTheme();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleExport = () => {
    const pdfUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Roderick_Daniels_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <Building className={theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'} />
          <h2 className={`text-2xl sm:text-3xl font-bold ${
            theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
          }`}>
            Professional Case Studies
          </h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            theme === 'dystopian'
              ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
              : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
          }`}
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download Resume</span>
          <span className="sm:hidden">Resume</span>
        </motion.button>
      </div>

      <Tabs defaultValue="j6">
        <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {[
            { value: 'j6', icon: DollarSign, label: 'Budget Management', shortLabel: 'Budget' },
            { value: 'j8', icon: LineChart, label: 'Cost Optimization', shortLabel: 'Costs' },
            { value: 'navy', icon: Shield, label: 'Military Operations', shortLabel: 'Military' },
            { value: 'j7', icon: ClipboardCheck, label: 'Compliance', shortLabel: 'Audit' }
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`flex items-center gap-2 p-3 rounded-lg transition-all ${
                theme === 'dystopian'
                  ? 'hover:bg-cyber-gray/30 data-[state=active]:bg-cyber-gray/40 data-[state=active]:text-neon-pink'
                  : 'hover:bg-modern-gray/10 data-[state=active]:bg-modern-gray/20 data-[state=active]:text-modern-accent'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="j6">
          <div className="space-y-8">
            {/* Case Study 1: DHA J-6 Budget Portfolio (Existing) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`rounded-xl p-6 border-2 ${
                theme === 'dystopian'
                  ? 'hover:shadow-[0_0_25px_rgba(26,254,73,0.2)]'
                  : 'bg-modern-gray/10'
              }`}
              style={{
                backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                borderColor: theme === 'dystopian' ? '#083e12' : undefined
              }}
            >
              {/* Executive Summary */}
              <motion.div variants={contentVariants} className="mb-6">
                <h3 className={`text-lg font-bold mb-2 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                }`}>
                  Streamlined $1B+ federal budget cycle, improving reconciliation accuracy by 95%.
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.div 
                    variants={contentVariants}
                    className="flex items-center gap-3"
                  >
                    <Building2 className={`w-8 h-8 ${
                      theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                    }`} />
                    <div>
                      <h4 className={`text-xl font-bold ${
                        theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                      }`}>
                        DHA J-6 Budget Portfolio
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Briefcase className="w-4 h-4" />
                        <span>Financial Management Analyst</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {['Tableau', 'Power BI', 'GFEBS', 'FMIS', 'Budget Automation', 'Compliance'].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray/30 text-neon-pink border border-neon-pink/30'
                            : 'bg-modern-gray/20 text-modern-accent border border-modern-accent/30'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <motion.div
                    variants={contentVariants}
                    className={`p-4 rounded-lg border-l-4 ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/20 border-l-neon-pink text-gray-300'
                        : 'bg-gray-50 border-l-modern-accent text-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-2xl ${theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'}`}>
                        "
                      </div>
                      <div>
                        <p className="italic mb-2">
                          Delivered vital on-time submissions with accuracy exceeding 95%.
                        </p>
                        <p className={`text-sm ${theme === 'dystopian' ? 'text-gray-400' : 'text-gray-500'}`}>
                          — FY25 Appraisal, DHA J-6
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <div>
                    <motion.div 
                      variants={contentVariants}
                      className="flex items-center gap-2 mb-4"
                    >
                      <Award className="w-5 h-5 text-yellow-500" />
                      <h4 className="font-semibold">Key Achievements</h4>
                    </motion.div>
                    <div className="space-y-4">
                      {[
                        { label: 'Reconciliation Accuracy', value: 95 },
                        { label: 'Process Efficiency Gain', value: 30 },
                        { label: 'Stakeholder Visibility', value: 100 }
                      ].map((metric, index) => (
                        <motion.div 
                          key={metric.label} 
                          variants={contentVariants}
                          className="space-y-2"
                        >
                          <div className="flex justify-between text-sm">
                            <span>{metric.label}</span>
                            <span>{metric.value}%</span>
                          </div>
                          <div className={`h-2 rounded-full bg-gray-200 overflow-hidden`}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.value}%` }}
                              transition={{ 
                                duration: 1,
                                delay: index * 0.2,
                                ease: "easeOut"
                              }}
                              className={`h-full rounded-full ${
                                theme === 'dystopian'
                                  ? 'bg-neon-pink'
                                  : 'bg-modern-accent'
                              }`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.h4 
                      variants={contentVariants}
                      className="font-semibold"
                    >
                      Project Timeline
                    </motion.h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSection('j6-portfolio-timeline')}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
                          : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {expandedSections['j6-portfolio-timeline'] ? 'Hide Timeline' : 'View Timeline'}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {expandedSections['j6-portfolio-timeline'] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <Timeline
                          theme={theme}
                          events={[
                            {
                              title: 'Portfolio Assessment',
                              date: 'Q1 2023',
                              description: 'Analyzed $1B+ budget across multiple programs and fiscal years',
                              icon: AlertCircle
                            },
                            {
                              title: 'Process Design',
                              date: 'Q2 2023',
                              description: 'Developed automated reconciliation workflows and validation rules',
                              icon: TrendingUp
                            },
                            {
                              title: 'Implementation',
                              date: 'Q3 2023',
                              description: 'Deployed automation tools and trained stakeholders',
                              icon: Zap
                            },
                            {
                              title: 'Results',
                              date: 'Q4 2023',
                              description: 'Achieved 95% accuracy and 30% efficiency improvement',
                              icon: Award
                            }
                          ]}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2: IT Budget Transparency Initiative */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`rounded-xl p-6 border-2 ${
                theme === 'dystopian'
                  ? 'hover:shadow-[0_0_25px_rgba(26,254,73,0.2)]'
                  : 'bg-modern-gray/10'
              }`}
              style={{
                backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                borderColor: theme === 'dystopian' ? '#083e12' : undefined
              }}
            >
              {/* Executive Summary */}
              <motion.div variants={contentVariants} className="mb-6">
                <h3 className={`text-lg font-bold mb-2 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                }`}>
                  Improved visibility across $1B+ portfolio by automating artifact alignment across Ektropy and SNAP-IT — achieving 95%+ accuracy.
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.div 
                    variants={contentVariants}
                    className="flex items-center gap-3"
                  >
                    <Building2 className={`w-8 h-8 ${
                      theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                    }`} />
                    <div>
                      <h4 className={`text-xl font-bold ${
                        theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                      }`}>
                        IT Budget Transparency Initiative (DHA J-6)
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Briefcase className="w-4 h-4" />
                        <span>Portfolio Analyst – J-6 Investment Management Branch</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {['Ektropy', 'SNAP-IT', 'Budget Exhibit Module', 'AFP', 'Crosswalk Analysis', 'Artifact Reconciliation', 'Audit Readiness'].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray/30 text-neon-pink border border-neon-pink/30'
                            : 'bg-modern-gray/20 text-modern-accent border border-modern-accent/30'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <motion.div
                    variants={contentVariants}
                    className={`p-4 rounded-lg border-l-4 ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/20 border-l-neon-pink text-gray-300'
                        : 'bg-gray-50 border-l-modern-accent text-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-2xl ${theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'}`}>
                        "
                      </div>
                      <div>
                        <p className="italic mb-2">
                          Delivered vital on-time submissions with accuracy exceeding 95%.
                        </p>
                        <p className={`text-sm ${theme === 'dystopian' ? 'text-gray-400' : 'text-gray-500'}`}>
                          — FY25 Appraisal, DHA J-6
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <motion.h4 
                      variants={contentVariants}
                      className="font-semibold"
                    >
                      Project Timeline
                    </motion.h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSection('j6-transparency-timeline')}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
                          : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {expandedSections['j6-transparency-timeline'] ? 'Hide Timeline' : 'View Timeline'}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {expandedSections['j6-transparency-timeline'] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <Timeline
                          theme={theme}
                          events={[
                            {
                              title: 'Issue',
                              date: 'Q1 2023',
                              description: 'Disconnected artifacts caused leadership blind spots in budget status',
                              icon: AlertCircle
                            },
                            {
                              title: 'Solution Design',
                              date: 'Q2 2023',
                              description: 'Integrated Ektropy BEM & AFP with IT-1 tracking',
                              icon: TrendingUp
                            },
                            {
                              title: 'Execution',
                              date: 'Q3 2023',
                              description: 'Automated artifact crosswalk and trained 100+ users',
                              icon: Zap
                            },
                            {
                              title: 'Result',
                              date: 'Q4 2023',
                              description: '95%+ artifact alignment accuracy; full BES/PB submission on time',
                              icon: Award
                            }
                          ]}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Case Study 3: AFP/BEM Reconciliation Automation */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`rounded-xl p-6 border-2 ${
                theme === 'dystopian'
                  ? 'hover:shadow-[0_0_25px_rgba(26,254,73,0.2)]'
                  : 'bg-modern-gray/10'
              }`}
              style={{
                backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                borderColor: theme === 'dystopian' ? '#083e12' : undefined
              }}
            >
              {/* Executive Summary */}
              <motion.div variants={contentVariants} className="mb-6">
                <h3 className={`text-lg font-bold mb-2 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                }`}>
                  Cut manual reconciliation by 90% and improved POM prep speed 3x using automation across Ektropy modules.
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.div 
                    variants={contentVariants}
                    className="flex items-center gap-3"
                  >
                    <Building2 className={`w-8 h-8 ${
                      theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                    }`} />
                    <div>
                      <h4 className={`text-xl font-bold ${
                        theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                      }`}>
                        AFP/BEM Reconciliation Automation (DHA J-6)
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Briefcase className="w-4 h-4" />
                        <span>Financial Systems Process Lead – DHA J-6</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {['Ektropy AFP/BEM Modules', 'GFEBS', 'Reconciliation Logic', 'Budget Controls', 'POM Readiness'].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray/30 text-neon-pink border border-neon-pink/30'
                            : 'bg-modern-gray/20 text-modern-accent border border-modern-accent/30'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <motion.div
                    variants={contentVariants}
                    className={`p-4 rounded-lg border-l-4 ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/20 border-l-neon-pink text-gray-300'
                        : 'bg-gray-50 border-l-modern-accent text-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-2xl ${theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'}`}>
                        "
                      </div>
                      <div>
                        <p className="italic mb-2">
                          Enabled J-6 to capture and integrate data for timely financial decision-making.
                        </p>
                        <p className={`text-sm ${theme === 'dystopian' ? 'text-gray-400' : 'text-gray-500'}`}>
                          — FY25 Appraisal, DHA J-6
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <motion.h4 
                      variants={contentVariants}
                      className="font-semibold"
                    >
                      Project Timeline
                    </motion.h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSection('j6-automation-timeline')}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
                          : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {expandedSections['j6-automation-timeline'] ? 'Hide Timeline' : 'View Timeline'}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {expandedSections['j6-automation-timeline'] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <Timeline
                          theme={theme}
                          events={[
                            {
                              title: 'Problem',
                              date: 'Q2 2023',
                              description: 'Manual tracking between AFP and BEM led to inconsistent POM inputs',
                              icon: AlertCircle
                            },
                            {
                              title: 'Logic Build',
                              date: 'Q3 2023',
                              description: 'Created reconciliation rules to isolate prior vs. current year artifacts',
                              icon: TrendingUp
                            },
                            {
                              title: 'System Sync',
                              date: 'Q3 2023',
                              description: 'Standardized controls across PEO/CIO and integrated SNAP-IT links',
                              icon: Zap
                            },
                            {
                              title: 'Result',
                              date: 'Q4 2023',
                              description: '90% fewer edits, 3x faster prep, 95% module alignment rate',
                              icon: Award
                            }
                          ]}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="j8">
          <div className="space-y-8">
            {/* Case Study 1: Unfunded Requirement Prioritization (NEW) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`rounded-xl p-6 border-2 ${
                theme === 'dystopian'
                  ? 'hover:shadow-[0_0_25px_rgba(26,254,73,0.2)]'
                  : 'bg-modern-gray/10'
              }`}
              style={{
                backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                borderColor: theme === 'dystopian' ? '#083e12' : undefined
              }}
            >
              {/* Executive Summary */}
              <motion.div variants={contentVariants} className="mb-6">
                <h3 className={`text-lg font-bold mb-2 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                }`}>
                  Developed a scoring system to prioritize $100M+ in UFRs — enabling 98% of funded requirements to support mission readiness.
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.div 
                    variants={contentVariants}
                    className="flex items-center gap-3"
                  >
                    <Building2 className={`w-8 h-8 ${
                      theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                    }`} />
                    <div>
                      <h4 className={`text-xl font-bold ${
                        theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                      }`}>
                        Unfunded Requirement Prioritization (DHA J-8)
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Briefcase className="w-4 h-4" />
                        <span>UFR Coordinator – West Financial Support Desk</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {['Spend Plan Review', 'Mid-Year Execution', 'Prioritization Frameworks', 'Readiness Impact Scoring', 'Stakeholder Engagement'].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray/30 text-neon-pink border border-neon-pink/30'
                            : 'bg-modern-gray/20 text-modern-accent border border-modern-accent/30'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <motion.div
                    variants={contentVariants}
                    className={`p-4 rounded-lg border-l-4 ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/20 border-l-neon-pink text-gray-300'
                        : 'bg-gray-50 border-l-modern-accent text-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-2xl ${theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'}`}>
                        "
                      </div>
                      <div>
                        <p className="italic mb-2">
                          Conducted trend analysis and enabled West Desk MTFs to meet patient care and readiness needs efficiently.
                        </p>
                        <p className={`text-sm ${theme === 'dystopian' ? 'text-gray-400' : 'text-gray-500'}`}>
                          — FY22 Appraisal, DHA J-8
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <div>
                    <motion.div 
                      variants={contentVariants}
                      className="flex items-center gap-2 mb-4"
                    >
                      <Award className="w-5 h-5 text-yellow-500" />
                      <h4 className="font-semibold">Key Achievements</h4>
                    </motion.div>
                    <div className="space-y-4">
                      {[
                        { label: 'UFR Success Rate', value: 98 },
                        { label: 'Execution Speed Improvement', value: 20 },
                        { label: 'MTF Satisfaction', value: 95 }
                      ].map((metric, index) => (
                        <motion.div 
                          key={metric.label} 
                          variants={contentVariants}
                          className="space-y-2"
                        >
                          <div className="flex justify-between text-sm">
                            <span>{metric.label}</span>
                            <span>{metric.value}%</span>
                          </div>
                          <div className={`h-2 rounded-full bg-gray-200 overflow-hidden`}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.value}%` }}
                              transition={{ 
                                duration: 1,
                                delay: index * 0.2,
                                ease: "easeOut"
                              }}
                              className={`h-full rounded-full ${
                                theme === 'dystopian'
                                  ? 'bg-neon-pink'
                                  : 'bg-modern-accent'
                              }`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.h4 
                      variants={contentVariants}
                      className="font-semibold"
                    >
                      Project Timeline
                    </motion.h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSection('j8-ufr-timeline')}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
                          : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {expandedSections['j8-ufr-timeline'] ? 'Hide Timeline' : 'View Timeline'}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {expandedSections['j8-ufr-timeline'] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <Timeline
                          theme={theme}
                          events={[
                            {
                              title: 'Challenge',
                              date: 'Q1 2022',
                              description: 'MTFs submitted $100M+ in unfunded requests without prioritization',
                              icon: AlertCircle
                            },
                            {
                              title: 'Framework Design',
                              date: 'Q2 2022',
                              description: 'Created a "rack and stack" model based on impact and compliance risk',
                              icon: TrendingUp
                            },
                            {
                              title: 'Implementation',
                              date: 'Q3 2022',
                              description: 'Standardized mid-year reviews across 40+ facilities',
                              icon: Zap
                            },
                            {
                              title: 'Result',
                              date: 'Q4 2022',
                              description: '20% faster execution, 98% of funded UFRs tied to readiness metrics',
                              icon: Award
                            }
                          ]}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2: Spend Plan Accountability Initiative (Original) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`rounded-xl p-6 border-2 ${
                theme === 'dystopian'
                  ? 'text-gray-300 hover:shadow-[0_0_25px_rgba(26,254,73,0.2)]'
                  : 'bg-modern-gray/10 text-modern-text'
              }`}
              style={{
                backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                borderColor: theme === 'dystopian' ? '#083e12' : undefined
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <motion.div variants={contentVariants}>
                    <h3 className={`text-xl font-semibold ${
                      theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                    }`}>
                      Spend Plan Accountability Initiative (DHA J-8)
                    </h3>
                  </motion.div>
                  <div className="space-y-3">
                    <p className={theme === 'dystopian' ? 'text-gray-300' : 'text-modern-text'}>
                      <strong className={theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'}>Context:</strong> 
                      Inconsistent spend plans from MTFs impacted forecasting and mid-year adjustments.
                    </p>
                    <p className={theme === 'dystopian' ? 'text-gray-300' : 'text-modern-text'}>
                      <strong className={theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'}>Role:</strong> 
                      Led cross-functional budget reviews and enforced spend plan accountability standards.
                    </p>
                    <p className={theme === 'dystopian' ? 'text-gray-300' : 'text-modern-text'}>
                      <strong className={theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'}>Solution:</strong> 
                      Standardized review protocols, required variance justifications, held monthly reviews.
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.h4 
                      variants={contentVariants}
                      className="font-semibold"
                    >
                      Project Timeline
                    </motion.h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSection('j8-timeline')}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
                          : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {expandedSections['j8-timeline'] ? 'Hide Timeline' : 'View Timeline'}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {expandedSections['j8-timeline'] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <Timeline
                          theme={theme}
                          events={[
                            {
                              title: 'Problem Identification',
                              date: 'Q1 2022',
                              description: 'Inconsistent MTF spend plans disrupted mid-year forecasting',
                              icon: AlertCircle
                            },
                            {
                              title: 'Solution Design',
                              date: 'Q2 2022',
                              description: 'Created variance justification templates and standardized monthly review protocols',
                              icon: TrendingUp
                            },
                            {
                              title: 'Implementation',
                              date: 'Q3 2022',
                              description: 'Conducted monthly accountability reviews and enforced variance logic',
                              icon: Zap
                            },
                            {
                              title: 'Results',
                              date: 'Q4 2022',
                              description: 'Achieved 25% reduction in reprogramming events and 90% optimization alignment',
                              icon: Award
                            }
                          ]}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className={`font-semibold ${
                      theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                    }`}>
                      Key Metrics
                    </h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSection('j8-details')}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
                          : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
                      }`}
                    >
                      <Info className="w-4 h-4" />
                      {expandedSections['j8-details'] ? 'Less' : 'More'}
                    </motion.button>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <ChartBar percentage={25} label="Reprogramming Reduction" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <ChartBar percentage={85} label="Trust Enhancement" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <ChartBar percentage={90} label="Resource Optimization" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedSections['j8-details'] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4"
                      >
                        <div className={`p-4 rounded-lg border ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray/20 border-neon-pink/20'
                            : 'bg-gray-50 border-gray-200'
                        }`}>
                          <h5 className={`font-semibold mb-2 ${
                            theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                          }`}>
                            Implementation Strategy
                          </h5>
                          <ul className={`text-sm space-y-1 ${
                            theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <li>• Standardized spend plan templates</li>
                            <li>• Mandatory variance justification protocols</li>
                            <li>• Monthly stakeholder review meetings</li>
                            <li>• Real-time tracking dashboards</li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {[
                      { icon: Clock, label: 'Monthly Reviews', color: 'text-orange-500' },
                      { icon: TrendingUp, label: '25% Better', color: 'text-green-500' },
                      { icon: Target, label: '90%', color: 'text-purple-500' }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        variants={metricCardVariants}
                        whileHover="hover"
                        onHoverStart={() => setHoveredMetric(`j8-${item.label}`)}
                        onHoverEnd={() => setHoveredMetric(null)}
                        className={`relative flex flex-col items-center p-2 rounded-lg border-2 cursor-pointer ${
                          theme === 'dystopian'
                            ? 'text-gray-300 hover:shadow-[0_0_15px_rgba(26,254,73,0.2)]'
                            : 'bg-modern-gray/10 text-modern-text'
                        }`}
                        style={{
                          backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                          borderColor: theme === 'dystopian' ? '#083e12' : undefined
                        }}
                      >
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                        >
                          <item.icon className={theme === 'dystopian' ? 'text-neon-pink' : item.color} />
                        </motion.div>
                        <span className="text-xs text-center">{item.label}</span>
                        
                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredMetric === `j8-${item.label}` && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.9 }}
                              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap z-10 ${
                                theme === 'dystopian'
                                  ? 'bg-cyber-gray text-neon-pink border border-neon-pink/30'
                                  : 'bg-gray-800 text-white'
                              }`}
                            >
                              {item.label === 'Monthly Reviews' && 'Regular stakeholder alignment sessions'}
                              {item.label === '25% Better' && 'Reduction in budget reprogramming needs'}
                              {item.label === '90%' && 'Resource optimization achievement rate'}
                              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                                theme === 'dystopian' ? 'border-t-cyber-gray' : 'border-t-gray-800'
                              }`} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="navy">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`rounded-xl p-6 border-2 ${
              theme === 'dystopian'
                ? 'text-gray-300 hover:shadow-[0_0_25px_rgba(26,254,73,0.2)]'
                : 'bg-modern-gray/10 text-modern-text'
            }`}
            style={{
              backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
              borderColor: theme === 'dystopian' ? '#083e12' : undefined
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <motion.div variants={contentVariants}>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className={`w-6 h-6 ${
                      theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                    }`} />
                    <h3 className={`text-xl font-semibold ${
                      theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                    }`}>
                      USS John C. Stennis Operations
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Briefcase className={theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'} />
                    <span className={theme === 'dystopian' ? 'text-gray-400' : 'text-gray-500'}>Stock Control Lead</span>
                  </div>
                </motion.div>
                <div className="space-y-3">
                  <motion.div 
                    variants={metricCardVariants}
                    whileHover="hover"
                    className={`flex items-start gap-3 p-3 rounded-lg border-2 ${
                      theme === 'dystopian'
                        ? 'text-gray-300 hover:shadow-[0_0_15px_rgba(26,254,73,0.2)]'
                        : 'bg-modern-gray/10 text-modern-text'
                    }`}
                  >
                    <Activity className={theme === 'dystopian' ? 'text-neon-pink' : 'text-blue-500'} />
                    <div>
                      <h4 className={`font-medium mb-1 ${
                        theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                      }`}>Mission Scope</h4>
                      <p className={theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'}>
                        High-tempo deployment operations with critical supply chain management
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    variants={metricCardVariants}
                    whileHover="hover"
                    className={`flex items-start gap-3 p-3 rounded-lg border-2 ${
                      theme === 'dystopian'
                        ? 'text-gray-300 hover:shadow-[0_0_15px_rgba(26,254,73,0.2)]'
                        : 'bg-modern-gray/10 text-modern-text'
                    }`}
                    style={{
                      backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                      borderColor: theme === 'dystopian' ? '#083e12' : undefined
                    }}
                  >
                    <Wallet className={theme === 'dystopian' ? 'text-neon-pink' : 'text-orange-500'} />
                    <div>
                      <h4 className={`font-medium mb-1 ${
                        theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                      }`}>Resource Management</h4>
                      <p className={theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'}>
                        OPTAR funds and mission-critical logistics optimization
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    variants={metricCardVariants}
                    whileHover="hover"
                    className={`flex items-start gap-3 p-3 rounded-lg border-2 ${
                      theme === 'dystopian'
                        ? 'text-gray-300 hover:shadow-[0_0_15px_rgba(26,254,73,0.2)]'
                        : 'bg-modern-gray/10 text-modern-text'
                    }`}
                    style={{
                      backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                      borderColor: theme === 'dystopian' ? '#083e12' : undefined
                    }}
                  >
                    <CheckCircle2 className={theme === 'dystopian' ? 'text-neon-pink' : 'text-green-500'} />
                    <div>
                      <h4 className={`font-medium mb-1 ${
                        theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                      }`}>Achievement</h4>
                      <p className={theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'}>
                        Multiple excellence awards and exceptional mission completion rate
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <motion.div variants={contentVariants} className="flex items-center gap-2">
                        <Award className={theme === 'dystopian' ? 'text-neon-pink' : 'text-yellow-500'} />
                        <h4 className={`font-semibold ${
                          theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                        }`}>Performance Metrics</h4>
                      </motion.div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleSection('navy-timeline')}
                        className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
                            : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        Timeline
                      </motion.button>
                    </div>
                    <div className="space-y-3">
                      {[
                        { percentage: 97.5, label: "Sortie Completion Rate", tooltip: "Mission success rate during deployment" },
                        { percentage: 80, label: "Urgent Request Reduction", tooltip: "Decrease in emergency supply requests" },
                        { percentage: 99, label: "Supply Chain Efficiency", tooltip: "Overall logistics optimization achievement" }
                      ].map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          whileHover={{ scale: 1.02 }}
                          onHoverStart={() => setHoveredMetric(`navy-${metric.label}`)}
                          onHoverEnd={() => setHoveredMetric(null)}
                          className="relative"
                        >
                          <ChartBar percentage={metric.percentage} label={metric.label} />
                          
                          {/* Tooltip */}
                          <AnimatePresence>
                            {hoveredMetric === `navy-${metric.label}` && (
                              <motion.div
                                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                                className={`absolute right-0 top-1/2 transform -translate-y-1/2 ml-4 px-3 py-2 rounded-lg text-xs whitespace-nowrap z-10 ${
                                  theme === 'dystopian'
                                    ? 'bg-cyber-gray text-neon-pink border border-neon-pink/30'
                                    : 'bg-gray-800 text-white'
                                }`}
                              >
                                {metric.tooltip}
                                <div className={`absolute top-full left-1/2 transform -translate-y-1/2 -translate-x-full w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent ${
                                  theme === 'dystopian' ? 'border-r-cyber-gray' : 'border-r-gray-800'
                                }`} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                    
                    <AnimatePresence>
                      {expandedSections['navy-timeline'] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4"
                        >
                          <Timeline
                            theme={theme}
                            events={[
                              {
                                title: 'Mission Briefing',
                                date: 'Q3 2018',
                                description: 'Supported high-tempo deployment with limited logistics staff',
                                icon: AlertCircle
                              },
                              {
                                title: 'Resource Alignment',
                                date: 'Q4 2018',
                                description: 'Aligned AVCAL and OPTAR funding across 21 work centers',
                                icon: TrendingUp
                              },
                              {
                                title: 'Execution Phase',
                                date: 'Q1 2019',
                                description: 'Processed 50,000+ requisitions and 200+ open purchases',
                                icon: Zap
                              },
                              {
                                title: 'Outcome',
                                date: 'Q2 2019',
                                description: 'Achieved 97.5% sortie rate and earned multiple excellence awards',
                                icon: Award
                              }
                            ]}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <motion.div variants={contentVariants} className="flex items-center gap-2">
                      <Award className={theme === 'dystopian' ? 'text-neon-pink' : 'text-yellow-500'} />
                      <h4 className={`font-semibold ${
                        theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                      }`}>
                        Key Metrics
                      </h4>
                    </motion.div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSection('navy-details')}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
                          : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
                      }`}
                    >
                      <Info className="w-4 h-4" />
                      {expandedSections['navy-details'] ? 'Less' : 'More'}
                    </motion.button>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <ChartBar percentage={97.5} label="Sortie Completion Rate" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <ChartBar percentage={99} label="Supply Chain Efficiency" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedSections['navy-details'] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4"
                      >
                        <div className={`p-4 rounded-lg border ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray/20 border-neon-pink/20'
                            : 'bg-gray-50 border-gray-200'
                        }`}>
                          <h5 className={`font-semibold mb-2 ${
                            theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                          }`}>
                            Key Performance Indicators
                          </h5>
                          <ul className={`text-sm space-y-1 ${
                            theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            <li>• High-tempo deployment operations</li>
                            <li>• Critical supply chain management</li>
                            <li>• Mission success rate</li>
                            <li>• Logistics optimization</li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="j7">
          <div className="space-y-8">
            {/* Case Study 1: Enterprise Budget Execution Optimization (NEW) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`rounded-xl p-6 border-2 ${
                theme === 'dystopian'
                  ? 'hover:shadow-[0_0_25px_rgba(26,254,73,0.2)]'
                  : 'bg-modern-gray/10'
              }`}
              style={{
                backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                borderColor: theme === 'dystopian' ? '#083e12' : undefined
              }}
            >
              {/* Executive Summary */}
              <motion.div variants={contentVariants} className="mb-6">
                <h3 className={`text-lg font-bold mb-2 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                }`}>
                  Executed $62M in COVID contingency funds with 98% compliance and 422 UFRs tracked across four departments.
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.div 
                    variants={contentVariants}
                    className="flex items-center gap-3"
                  >
                    <Building2 className={`w-8 h-8 ${
                      theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                    }`} />
                    <div>
                      <h4 className={`text-xl font-bold ${
                        theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                      }`}>
                        Enterprise Budget Execution Optimization (DHA J-7)
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Briefcase className="w-4 h-4" />
                        <span>Financial Analyst – DHA J-7 Resource Management</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {['GFEBS', 'FMIS', 'Tableau', 'Budget Execution', 'Stakeholder Training', 'Contingency Finance'].map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray/30 text-neon-pink border border-neon-pink/30'
                            : 'bg-modern-gray/20 text-modern-accent border border-modern-accent/30'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <motion.div
                    variants={contentVariants}
                    className={`p-4 rounded-lg border-l-4 ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/20 border-l-neon-pink text-gray-300'
                        : 'bg-gray-50 border-l-modern-accent text-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-2xl ${theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'}`}>
                        "
                      </div>
                      <div>
                        <p className="italic mb-2">
                          Tracked and executed a COVID-era budget with 98% compliance and 100% documentation across departments.
                        </p>
                        <p className={`text-sm ${theme === 'dystopian' ? 'text-gray-400' : 'text-gray-500'}`}>
                          — FY21 Appraisal, DHA J-7
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <div>
                    <motion.div 
                      variants={contentVariants}
                      className="flex items-center gap-2 mb-4"
                    >
                      <Award className="w-5 h-5 text-yellow-500" />
                      <h4 className="font-semibold">Key Achievements</h4>
                    </motion.div>
                    <div className="space-y-4">
                      {[
                        { label: 'Compliance Rate', value: 98 },
                        { label: 'Documentation Coverage', value: 100 },
                        { label: 'Transaction Accuracy', value: 97 }
                      ].map((metric, index) => (
                        <motion.div 
                          key={metric.label} 
                          variants={contentVariants}
                          className="space-y-2"
                        >
                          <div className="flex justify-between text-sm">
                            <span>{metric.label}</span>
                            <span>{metric.value}%</span>
                          </div>
                          <div className={`h-2 rounded-full bg-gray-200 overflow-hidden`}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.value}%` }}
                              transition={{ 
                                duration: 1,
                                delay: index * 0.2,
                                ease: "easeOut"
                              }}
                              className={`h-full rounded-full ${
                                theme === 'dystopian'
                                  ? 'bg-neon-pink'
                                  : 'bg-modern-accent'
                              }`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.h4 
                      variants={contentVariants}
                      className="font-semibold"
                    >
                      Project Timeline
                    </motion.h4>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSection('j7-execution-timeline')}
                      className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
                          : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {expandedSections['j7-execution-timeline'] ? 'Hide Timeline' : 'View Timeline'}
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {expandedSections['j7-execution-timeline'] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <Timeline
                          theme={theme}
                          events={[
                            {
                              title: 'Crisis Response',
                              date: 'Q2 2020',
                              description: 'Allocated $62M in pandemic funds across METC departments',
                              icon: AlertCircle
                            },
                            {
                              title: 'Execution Phase',
                              date: 'Q3 2020',
                              description: 'Processed 150+ transactions with 97% accuracy',
                              icon: TrendingUp
                            },
                            {
                              title: 'Stakeholder Training',
                              date: 'Q3–Q4 2020',
                              description: 'Trained custodians and fund advisors',
                              icon: Zap
                            },
                            {
                              title: 'Audit Outcome',
                              date: 'Q1 2021',
                              description: '98% compliance, 0 audit findings, and contributed to Joint Meritorious Unit Award',
                              icon: Award
                            }
                          ]}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2: Federal Audit Readiness (Original) */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`rounded-xl p-6 ${
                theme === 'dystopian'
                  ? 'bg-cyber-gray/20 border border-neon-pink/20 text-gray-300'
                  : 'bg-modern-gray/10 text-modern-text'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <motion.div variants={contentVariants}>
                    <div className="flex items-center gap-3 mb-2">
                      <ClipboardCheck className={`w-6 h-6 ${
                        theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                      }`} />
                      <h3 className={`text-xl font-semibold ${
                        theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                      }`}>
                        Federal Audit Readiness (DHA J-7)
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <Briefcase className={theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'} />
                      <span className={theme === 'dystopian' ? 'text-gray-400' : 'text-gray-500'}>
                        Financial Analyst & Records Manager
                      </span>
                    </div>
                  </motion.div>
                  <div className="space-y-3">
                    <motion.div 
                      variants={metricCardVariants}
                      whileHover="hover"
                      className={`flex items-start gap-3 p-3 rounded-lg border-2 ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-gray-300'
                          : 'bg-modern-gray/10 text-modern-text'
                      }`}
                    >
                      <AlertCircle className={theme === 'dystopian' ? 'text-neon-pink' : 'text-blue-500'} />
                      <div>
                        <h4 className={`font-medium mb-1 ${
                          theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                        }`}>Critical Response</h4>
                        <p className={theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'}>
                          $62M pandemic response funding requiring immediate audit compliance
                        </p>
                      </div>
                    </motion.div>
                    <motion.div 
                      variants={metricCardVariants}
                      whileHover="hover"
                      className={`flex items-start gap-3 p-3 rounded-lg border-2 ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-gray-300'
                          : 'bg-modern-gray/10 text-modern-text'
                      }`}
                    >
                      <FileCheck className={theme === 'dystopian' ? 'text-neon-pink' : 'text-orange-500'} />
                      <div>
                        <h4 className={`font-medium mb-1 ${
                          theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                        }`}>Documentation</h4>
                        <p className={theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'}>
                          Comprehensive audit packages and custodian training program
                        </p>
                      </div>
                    </motion.div>
                    <motion.div 
                      variants={metricCardVariants}
                      whileHover="hover"
                      className={`flex items-start gap-3 p-3 rounded-lg border-2 ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 text-gray-300'
                          : 'bg-modern-gray/10 text-modern-text'
                      }`}
                    >
                      <BadgeCheck className={theme === 'dystopian' ? 'text-neon-pink' : 'text-green-500'} />
                      <div>
                        <h4 className={`font-medium mb-1 ${
                          theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                        }`}>Recognition</h4>
                        <p className={theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'}>
                          Contributed to Joint Meritorious Unit Award achievement
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <motion.div variants={contentVariants} className="flex items-center gap-2">
                        <Award className={theme === 'dystopian' ? 'text-neon-pink' : 'text-yellow-500'} />
                        <h4 className={`font-semibold ${
                          theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                        }`}>Audit Performance</h4>
                      </motion.div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleSection('j7-timeline')}
                        className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray/30 text-neon-pink hover:bg-cyber-gray/40'
                            : 'bg-modern-gray/10 text-modern-accent hover:bg-modern-gray/20'
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        {expandedSections['j7-timeline'] ? 'Hide Timeline' : 'View Timeline'}
                      </motion.button>
                    </div>
                    <div className="space-y-3">
                      <ChartBar percentage={98} label="Audit Accuracy" />
                      <ChartBar percentage={100} label="Documentation Coverage" />
                      <ChartBar percentage={95} label="Compliance Rate" />
                    </div>
                    
                    <AnimatePresence>
                      {expandedSections['j7-timeline'] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4"
                        >
                          <Timeline
                            theme={theme}
                            events={[
                              {
                                title: 'Crisis Response',
                                date: 'Q2 2020',
                                description: '$62M pandemic funding needed audit-ready compliance within 30 days',
                                icon: AlertCircle
                              },
                              {
                                title: 'Documentation',
                                date: 'Q3 2020',
                                description: 'Built audit packages and trained custodians across METC departments',
                                icon: FileCheck
                              },
                              {
                                title: 'Internal Review',
                                date: 'Q4 2020',
                                description: 'Ensured 98% accuracy and 100% documentation coverage',
                                icon: CheckCircle2
                              },
                              {
                                title: 'Recognition',
                                date: 'Q1 2021',
                                description: 'Team awarded Joint Meritorious Unit commendation',
                                icon: Award
                              }
                            ]}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className={`w-full border-t ${
            theme === 'dystopian' ? 'border-neon-pink/20' : 'border-modern-accent/20'
          }`} />
        </div>
        <div className="relative flex justify-center">
          <span className={`px-3 text-lg font-semibold ${
            theme === 'dystopian' ? 'bg-cyber-black text-neon-pink' : 'bg-white text-modern-accent'
          }`}>
            <Hammer className="inline-block w-5 h-5 mr-2" />
            Personal Projects & DIY
          </span>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={selectedModal === 'j6-details'}
        onClose={() => setSelectedModal(null)}
        title="DHA J-6 Budget Portfolio - Detailed Analysis"
        theme={theme}
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${
                theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
              }`}>
                Technical Implementation
              </h3>
              <ul className={`space-y-2 text-sm ${
                theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>• Automated Excel-based reconciliation workflows</li>
                <li>• Custom VBA scripts for data validation</li>
                <li>• Stakeholder notification systems</li>
                <li>• Real-time dashboard reporting</li>
                <li>• Audit trail documentation</li>
              </ul>
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${
                theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
              }`}>
                Business Impact
              </h3>
              <ul className={`space-y-2 text-sm ${
                theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>• Reduced manual reconciliation time by 30%</li>
                <li>• Improved accuracy from 70% to 95%</li>
                <li>• Enhanced stakeholder confidence</li>
                <li>• Streamlined audit processes</li>
                <li>• Better resource allocation visibility</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-3 ${
              theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
            }`}>
              Key Challenges Overcome
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Data Inconsistency',
                  description: 'Multiple data sources with varying formats',
                  solution: 'Standardized data ingestion protocols'
                },
                {
                  title: 'Manual Processes',
                  description: 'Time-intensive reconciliation workflows',
                  solution: 'Automated validation and reporting'
                },
                {
                  title: 'Stakeholder Alignment',
                  description: 'Disconnected communication channels',
                  solution: 'Centralized dashboard and notifications'
                }
              ].map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border ${
                    theme === 'dystopian'
                      ? 'bg-cyber-gray/20 border-neon-pink/20'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <h4 className={`font-semibold mb-2 ${
                    theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                  }`}>
                    {challenge.title}
                  </h4>
                  <p className={`text-sm mb-2 ${
                    theme === 'dystopian' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {challenge.description}
                  </p>
                  <p className={`text-sm font-medium ${
                    theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                  }`}>
                    Solution: {challenge.solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
} 
