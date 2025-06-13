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
  BarChart, Building, Target
} from "lucide-react";
import { useTheme } from '@/lib/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function CaseStudies() {
  const { theme } = useTheme();

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
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`rounded-xl p-6 ${
              theme === 'dystopian'
                ? 'bg-cyber-gray/20 border border-neon-pink/20'
                : 'bg-modern-gray/10'
            }`}
          >
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
                    <h3 className={`text-xl font-bold ${
                      theme === 'dystopian' ? 'text-neon-blue' : 'text-navy-blue'
                    }`}>
                      DHA J-6 Budget Portfolio
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                      <Briefcase className="w-4 h-4" />
                      <span>Financial Management Analyst</span>
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  {[
                    { icon: Clock, color: 'text-blue-500', title: 'Portfolio Overview', description: 'Managed $1B+ budget across multiple programs and fiscal years' },
                    { icon: AlertCircle, color: 'text-orange-500', title: 'Challenge', description: 'Complex reconciliation process causing delays and inconsistencies' },
                    { icon: TrendingUp, color: 'text-green-500', title: 'Solution', description: 'Automated budget cycles and artifact alignment' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={contentVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-start gap-4 p-4 rounded-lg ${
                        theme === 'dystopian'
                          ? 'bg-cyber-gray/30 hover:bg-cyber-gray/40'
                          : 'bg-modern-gray/10 hover:bg-modern-gray/20'
                      }`}
                    >
                      <motion.div
                        initial={{ rotate: -45, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                      >
                        <item.icon className={`w-5 h-5 mt-1 ${item.color}`} />
                      </motion.div>
                      <div>
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
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

                <div>
                  <motion.h4 
                    variants={contentVariants}
                    className="font-semibold mb-4"
                  >
                    Impact Metrics
                  </motion.h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: DollarSign, label: 'Portfolio Size', value: '$1B+' },
                      { icon: Clock, label: 'Time Saved', value: '30%' },
                      { icon: Users, label: 'Users Impacted', value: '100+' },
                      { icon: BadgeCheck, label: 'Accuracy Rate', value: '95%' }
                    ].map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        variants={metricCardVariants}
                        whileHover="hover"
                        className={`flex items-center gap-3 p-4 rounded-lg ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray/30'
                            : 'bg-modern-gray/10'
                        }`}
                      >
                        <motion.div
                          initial={{ rotate: -45, scale: 0 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                        >
                          <metric.icon className={`w-5 h-5 ${
                            theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'
                          }`} />
                        </motion.div>
                        <div>
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="text-lg font-bold"
                          >
                            {metric.value}
                          </motion.div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="j8">
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
                    Lead Analyst – West Financial Support Desk.
                  </p>
                  <p className={theme === 'dystopian' ? 'text-gray-300' : 'text-modern-text'}>
                    <strong className={theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent'}>Solution:</strong> 
                    Standardized review protocols, required variance justifications, held monthly reviews.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className={`font-semibold ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                }`}>
                  Key Metrics
                </h4>
                <div className="space-y-3">
                  <ChartBar percentage={25} label="Reprogramming Reduction" />
                  <ChartBar percentage={85} label="Trust Enhancement" />
                  <ChartBar percentage={90} label="Resource Optimization" />
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <motion.div 
                    variants={metricCardVariants}
                    whileHover="hover"
                    className={`flex flex-col items-center p-2 rounded-lg ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/30 text-gray-300'
                        : 'bg-modern-gray/10 text-modern-text'
                    }`}
                  >
                    <Clock className={theme === 'dystopian' ? 'text-neon-pink' : 'text-orange-500'} />
                    <span className="text-xs text-center">Monthly Reviews</span>
                  </motion.div>
                  <motion.div 
                    variants={metricCardVariants}
                    whileHover="hover"
                    className={`flex flex-col items-center p-2 rounded-lg ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/30 text-gray-300'
                        : 'bg-modern-gray/10 text-modern-text'
                    }`}
                  >
                    <TrendingUp className={theme === 'dystopian' ? 'text-neon-pink' : 'text-green-500'} />
                    <span className="text-xs text-center">25% Better</span>
                  </motion.div>
                  <motion.div 
                    variants={metricCardVariants}
                    whileHover="hover"
                    className={`flex flex-col items-center p-2 rounded-lg ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/30 text-gray-300'
                        : 'bg-modern-gray/10 text-modern-text'
                    }`}
                  >
                    <Target className={theme === 'dystopian' ? 'text-neon-pink' : 'text-purple-500'} />
                    <span className="text-xs text-center">90%</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="navy">
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
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/30 text-gray-300'
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
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/30 text-gray-300'
                        : 'bg-modern-gray/10 text-modern-text'
                    }`}
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
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      theme === 'dystopian'
                        ? 'bg-cyber-gray/30 text-gray-300'
                        : 'bg-modern-gray/10 text-modern-text'
                    }`}
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
              </div>
              <div className="space-y-6">
                <div>
                  <motion.div variants={contentVariants} className="flex items-center gap-2 mb-3">
                    <Award className={theme === 'dystopian' ? 'text-neon-pink' : 'text-yellow-500'} />
                    <h4 className={`font-semibold ${
                      theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                    }`}>Performance Metrics</h4>
                  </motion.div>
                  <div className="space-y-3">
                    <ChartBar percentage={97.5} label="Sortie Completion Rate" />
                    <ChartBar percentage={80} label="Urgent Request Reduction" />
                    <ChartBar percentage={99} label="Supply Chain Efficiency" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="j7">
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
                    className={`flex items-start gap-3 p-3 rounded-lg ${
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
                    className={`flex items-start gap-3 p-3 rounded-lg ${
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
                    className={`flex items-start gap-3 p-3 rounded-lg ${
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
                  <motion.div variants={contentVariants} className="flex items-center gap-2 mb-3">
                    <Award className={theme === 'dystopian' ? 'text-neon-pink' : 'text-yellow-500'} />
                    <h4 className={`font-semibold ${
                      theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                    }`}>Audit Performance</h4>
                  </motion.div>
                  <div className="space-y-3">
                    <ChartBar percentage={98} label="Audit Accuracy" />
                    <ChartBar percentage={100} label="Documentation Coverage" />
                    <ChartBar percentage={95} label="Compliance Rate" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
    </div>
  );
} 