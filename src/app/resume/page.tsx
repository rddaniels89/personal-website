'use client';

import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';

// Combine all timeline items and sort them by date
const timelineItems = [
  {
    type: 'experience',
    title: 'Financial Management Analyst - Investment Management Branch',
    company: 'Defense Health Agency',
    period: 'Apr 2023 - Present',
    bullets: [
      'Lead strategic financial operations and resource planning for defense healthcare initiatives',
      'Direct and coordinate financial operations, including planning and organization',
      'Develop comprehensive resource documents and conduct comparative studies',
      'Drive continuous process improvement across resource management systems'
    ],
    technologies: ['Financial Operations', 'Resource Management', 'Process Improvement', 'DoD Regulations', 'Strategic Planning']
  },
  {
    type: 'education',
    title: 'Master of Business Administration (MBA)',
    company: 'Western Governors University',
    period: '2023',
    description: 'Member of Sigma Alpha Pi, The National Society of Leadership and Success'
  },
  {
    type: 'education',
    title: 'Bachelor of Arts in Finance',
    company: 'California State University, Fullerton',
    period: '2022',
    description: 'Activities: Finance Association, NSBE, APAC'
  },
  {
    type: 'experience',
    title: 'Budget Analyst - Financial Operations',
    company: 'Defense Health Agency',
    period: 'Sep 2021 - Apr 2023',
    bullets: [
      'Managed program/budget planning for Military Treatment Facilities',
      'Analyzed budget controls for multiple operating programs and funds',
      'Implemented automated financial systems for budget analysis and reporting',
      'Developed strategic forecasts and budgetary adjustment recommendations'
    ],
    technologies: ['Budget Analysis', 'Financial Systems', 'Audit Readiness', 'Fund Management', 'Financial Reporting']
  },
  {
    type: 'certification',
    title: 'Certified Defense Financial Manager (CDFM)',
    company: 'Society of Defense Financial Management',
    period: 'Jul 2021',
    description: 'Expertise in defense financial management and internal controls'
  },
  {
    type: 'experience',
    title: 'Budget Analyst - Resource Management Branch',
    company: 'Defense Health Agency',
    period: 'Jul 2020 - Sep 2021',
    bullets: [
      'Led research and analysis of budgetary data for estimate preparation',
      'Conducted specialized studies and analysis of budget information',
      'Managed fund transfers and provided expert guidance on funding matters',
      'Verified and adjusted budgetary data for optimal resource allocation'
    ],
    technologies: ['Budget Analysis', 'Financial Planning', 'Data Analysis', 'Resource Management', 'Financial Advisory']
  },
  {
    type: 'certification',
    title: 'Department of Defense Financial Manager Certification Level 2 (DFMC2)',
    company: 'United States Department of Defense',
    period: 'Dec 2020',
    description: 'Advanced certification in financial management and process improvement'
  },
  {
    type: 'experience',
    title: 'Financial Manager',
    company: 'US Navy',
    period: 'Aug 2014 - Aug 2019',
    bullets: [
      'Managed $25 million Operating Target budget with full accountability',
      'Administered financial records and accounting systems for operational efficiency',
      'Oversaw Government Purchase Card Program with strict compliance',
      'Processed complex financial transactions and formulated budget estimates'
    ],
    technologies: ['R-Supply', 'NALCOMIS', 'STARS-FL', 'DFAS Reporting', 'Financial Management']
  },
  {
    type: 'certification',
    title: 'Lean Six Sigma Green Belt',
    company: 'Department of Defense',
    period: 'Jun 2016',
    description: 'Process improvement and optimization methodology'
  },
  {
    type: 'experience',
    title: 'Personal Banker',
    company: 'Wells Fargo',
    period: 'Oct 2012 - Jul 2014',
    bullets: [
      'Managed customer portfolios and cross-sold financial products, achieving top-performer tier in the Orange County district for three consecutive quarters',
      'Performed account servicing, reconciliations, credit evaluations, and outbound sales',
      'Conducted financial analysis to reduce client risk and optimize account utilization'
    ],
    technologies: ['Customer Portfolio Management', 'Financial Products', 'Credit Analysis', 'Risk Assessment', 'Sales Performance']
  }
];

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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const summary = {
  professional: "Accomplished Financial Management Leader with 11+ years of experience driving financial strategy and operational excellence across defense and healthcare sectors. Expert in managing billion-dollar budgets, optimizing federal workflows, and leading cross-functional teams to deliver regulatory compliance and mission readiness. Recently trained in AI-powered tools and automation—including LangChain, ChatGPT Prompt Engineering, and AI financial forecasting—adding cutting-edge capabilities to support digital transformation and decision intelligence. Recognized for strategic vision, data-driven execution, and a consistent record of delivering measurable value in high-stakes, complex government environments.",
  competencies: [
    {
      category: "Financial Management & Analytics",
      skills: ["Budget Analysis", "Fund Control", "Financial Forecasting", "Resource Planning", "Financial Operations", "Audit Readiness"]
    },
    {
      category: "AI & Technology",
      skills: ["AI Workflow Automation", "Prompt Engineering", "Data Visualization", "Power BI", "Tableau", "Defense Financial Systems"]
    },
    {
      category: "Defense Operations & Leadership",
      skills: ["DoD Regulations", "Military Healthcare", "Government Procurement", "Strategic Planning", "Process Improvement", "Change Management"]
    }
  ]
};

interface CardStyle {
  borderColor?: string;
  boxShadow?: string;
  className: string;
}

export default function ResumePage() {
  const { theme } = useTheme();

  const getCardStyle = (type: string): CardStyle => {
    const color = type === 'experience' 
      ? '#FF006E' // neon-pink
      : type === 'education'
        ? '#00FFFF' // neon-blue
        : '#FF00FF'; // neon-purple

    return theme === 'dystopian'
      ? {
          borderColor: color,
          boxShadow: `0 0 20px ${color}30`,
          className: `relative p-6 rounded-xl border-2 backdrop-blur-sm bg-surface-dark/80 text-primary`
        }
      : {
          className: 'card p-6 rounded-lg bg-modern-gray/10'
        };
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section with Logo */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Logo 
                size="lg" 
                variant="stacked" 
                animate={true}
              />
            </motion.div>
            
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="heading-1"
              >
                Resume
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="heading-4 mt-2"
              >
                Roderick Daniels
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lead mt-1"
              >
                Financial Management Leader & Tech Innovator
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <motion.a
                  href="/resume/accomplishments"
                  whileHover={{ 
                    x: 8,
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                  }}
                  className="link-primary text-sm font-medium hover:underline transition-all duration-300"
                >
                  View Key Accomplishments →
                </motion.a>
              </motion.div>
            </div>
          </div>

          <motion.a
            href="#"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              window.print();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ 
              scale: 0.95,
              y: 0
            }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 17 
            }}
            className="btn-primary px-6 py-3 rounded-lg font-medium cursor-pointer"
          >
            Print Resume
          </motion.a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* Professional Summary Section */}
          <motion.section variants={item}>
            <motion.div
              className={`p-6 rounded-xl ${
                theme === 'dystopian'
                  ? 'bg-surface-dark/80 border-2 border-neon-pink backdrop-blur-sm'
                  : 'bg-modern-gray/10'
              }`}
              style={
                theme === 'dystopian'
                  ? { boxShadow: '0 0 20px rgba(255, 0, 110, 0.2)' }
                  : undefined
              }
            >
              <h2 className="heading-2 text-center text-balance mb-4">
                Professional Summary
              </h2>
              <p className="text-lead text-center text-pretty max-w-3xl mx-auto mb-8">
                {summary.professional}
              </p>

              <h3 className="heading-3 text-center mb-6">
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {summary.competencies.map((competency) => (
                  <div key={competency.category} className="text-center">
                    <h4 className="heading-4 mb-3">
                      {competency.category}
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {competency.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm border-2 ${
                            theme === 'dystopian'
                              ? 'text-neon-pink hover:shadow-[0_0_15px_rgba(26,254,73,0.2)]'
                              : 'bg-surface-secondary text-primary border-primary/30'
                          }`}
                          style={{
                            backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                            borderColor: theme === 'dystopian' ? '#083e12' : undefined
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Timeline Section */}
          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="relative"
          >
            {/* Center Timeline Line */}
            <div className={`absolute left-1/2 -translate-x-[1px] w-[2px] h-full ${
              theme === 'dystopian'
                ? 'bg-neon-pink/20'
                : 'bg-border-accent'
            }`} />

            <div className="space-y-16">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 === 0;
                const cardStyle = getCardStyle(item.type);

                return (
                  <motion.div
                    key={`${item.title}-${item.period}`}
                    variants={item}
                    className="flex items-center justify-center"
                  >
                    {/* Left Content */}
                    <div className="flex-1 flex justify-end pr-8">
                      {isLeft && (
                        <motion.div
                          className={cardStyle.className}
                          style={theme === 'dystopian' ? {
                            borderColor: cardStyle.borderColor,
                            boxShadow: cardStyle.boxShadow
                          } : undefined}
                          whileHover={theme === 'dystopian' && cardStyle.boxShadow ? {
                            boxShadow: cardStyle.boxShadow.replace('30', '50'),
                            scale: 1.02
                          } : { scale: 1.02 }}
                        >
                          <div className="mb-2">
                            <span className={`text-sm uppercase font-medium ${
                              theme === 'dystopian' ? 'text-neon-pink' : 'text-primary'
                            }`}>
                              {item.type}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold ${
                            theme === 'dystopian' ? 'text-neon-blue' : 'text-primary'
                          }`}>
                            {item.title}
                          </h3>
                          <p className={theme === 'dystopian' ? 'text-neon-pink' : 'text-accent'}>
                            {item.company}
                          </p>
                          <span className={theme === 'dystopian' ? 'text-gray-400' : 'text-tertiary'}>
                            {item.period}
                          </span>
                          {item.bullets ? (
                            <ul className="mt-4 space-y-2 list-disc ml-4 body-normal">
                              {item.bullets.map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="mt-2 body-normal">
                              {item.description}
                            </p>
                          )}
                          {item.technologies && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {item.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    theme === 'dystopian'
                                      ? 'bg-cyber-gray/30 text-neon-pink border border-neon-pink/30'
                                      : 'bg-surface-secondary text-primary border border-primary/30'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>

                    {/* Timeline Dot */}
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      theme === 'dystopian'
                        ? 'bg-neon-pink shadow-[0_0_10px_rgba(255,0,110,0.5)]'
                        : 'bg-primary shadow-lg'
                    }`} />

                    {/* Right Content */}
                    <div className="flex-1 flex justify-start pl-8">
                      {!isLeft && (
                        <motion.div
                          className={cardStyle.className}
                          style={theme === 'dystopian' ? {
                            borderColor: cardStyle.borderColor,
                            boxShadow: cardStyle.boxShadow
                          } : undefined}
                          whileHover={theme === 'dystopian' && cardStyle.boxShadow ? {
                            boxShadow: cardStyle.boxShadow.replace('30', '50'),
                            scale: 1.02
                          } : { scale: 1.02 }}
                        >
                          <div className="mb-2">
                            <span className={`text-sm uppercase font-medium ${
                              theme === 'dystopian' ? 'text-neon-pink' : 'text-primary'
                            }`}>
                              {item.type}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold ${
                            theme === 'dystopian' ? 'text-neon-blue' : 'text-primary'
                          }`}>
                            {item.title}
                          </h3>
                          <p className={theme === 'dystopian' ? 'text-neon-pink' : 'text-accent'}>
                            {item.company}
                          </p>
                          <span className={theme === 'dystopian' ? 'text-gray-400' : 'text-tertiary'}>
                            {item.period}
                          </span>
                          {item.bullets ? (
                            <ul className="mt-4 space-y-2 list-disc ml-4 body-normal">
                              {item.bullets.map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="mt-2 body-normal">
                              {item.description}
                            </p>
                          )}
                          {item.technologies && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {item.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    theme === 'dystopian'
                                      ? 'bg-cyber-gray/30 text-neon-pink border border-neon-pink/30'
                                      : 'bg-surface-secondary text-primary border border-primary/30'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Certifications & AI Training Section */}
          <motion.section variants={item}>
            <motion.div
              className={`p-6 rounded-xl ${
                theme === 'dystopian'
                  ? 'bg-surface-dark/80 border-2 border-neon-blue backdrop-blur-sm'
                  : 'bg-modern-gray/10'
              }`}
              style={
                theme === 'dystopian'
                  ? { boxShadow: '0 0 20px rgba(0, 255, 255, 0.2)' }
                  : undefined
              }
            >
              <h2 className="heading-2 text-center mb-6">
                📜 Certifications & AI Training
              </h2>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      theme === 'dystopian' ? 'bg-neon-blue' : 'bg-primary'
                    }`} />
                    <span className="body-normal">
                      <strong>LangChain for LLM Development</strong> – DeepLearning.AI (2025)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      theme === 'dystopian' ? 'bg-neon-blue' : 'bg-primary'
                    }`} />
                    <span className="body-normal">
                      <strong>ChatGPT Prompt Engineering</strong> – DeepLearning.AI & OpenAI (2025)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      theme === 'dystopian' ? 'bg-neon-blue' : 'bg-primary'
                    }`} />
                    <span className="body-normal">
                      <strong>AI Financial Forecasting</strong> – LinkedIn Learning (2025)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      theme === 'dystopian' ? 'bg-neon-blue' : 'bg-primary'
                    }`} />
                    <span className="body-normal">
                      <strong>AI Coding Agents with Copilot</strong> – LinkedIn Learning (2025)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      theme === 'dystopian' ? 'bg-neon-blue' : 'bg-primary'
                    }`} />
                    <span className="body-normal">
                      <strong>Advanced Prompt Engineering Techniques</strong> – LinkedIn Learning (2023)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      theme === 'dystopian' ? 'bg-neon-blue' : 'bg-primary'
                    }`} />
                    <span className="body-normal">
                      <strong>Career Essentials in Generative AI</strong> – Microsoft & LinkedIn (2023)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      theme === 'dystopian' ? 'bg-neon-blue' : 'bg-primary'
                    }`} />
                    <span className="body-normal">
                      <strong>Tableau Essential Training</strong> – LinkedIn Learning (2024)
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 
