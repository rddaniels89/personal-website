'use client';

import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';

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
    type: 'education',
    title: 'Bachelor of Arts in Finance',
    company: 'California State University, Fullerton',
    period: '2022',
    description: 'Activities: Finance Association, NSBE, APAC'
  },
  {
    type: 'certification',
    title: 'Lean Six Sigma Green Belt',
    company: 'Department of Defense',
    period: 'Jun 2016',
    description: 'Process improvement and optimization methodology'
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
  professional: "Accomplished Financial Management Leader with 11+ years of experience driving financial strategy and operational excellence in government organizations. Proven expertise in managing billion-dollar budgets, leading cross-functional teams, and implementing process improvements that drive efficiency and regulatory compliance. Adept at navigating complex regulatory environments and delivering transformative results that support organizational growth and innovation. Recognized for strategic vision, data-driven decision-making, and a consistent record of delivering value across diverse government sectors",
  competencies: [
    {
      category: "Financial Management",
      skills: ["Budget Analysis", "Financial Operations", "Resource Planning", "Fund Management", "Audit Readiness"]
    },
    {
      category: "Defense Operations",
      skills: ["DoD Regulations", "Military Healthcare", "Government Procurement", "Defense Financial Systems"]
    },
    {
      category: "Leadership & Strategy",
      skills: ["Strategic Planning", "Process Improvement", "Team Leadership", "Project Management", "Change Management"]
    }
  ]
};

export default function ResumePage() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${
      theme === 'dystopian' ? 'bg-cyber-black' : 'bg-modern-black'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-12">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-4xl font-bold ${
                theme === 'dystopian'
                  ? 'neon-text text-neon-pink'
                  : 'gradient-text'
              }`}
            >
              Resume
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-2"
            >
              <a
                href="/resume/accomplishments"
                className={`text-sm font-medium hover:underline ${
                  theme === 'dystopian'
                    ? 'text-neon-blue'
                    : 'text-modern-accent'
                }`}
              >
                View Key Accomplishments →
              </a>
            </motion.div>
          </div>

          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`px-4 py-2 rounded-lg font-medium ${
              theme === 'dystopian'
                ? 'bg-neon-pink text-black hover:bg-neon-blue neon-border'
                : 'bg-modern-accent text-white hover:bg-opacity-90'
            } transition-all duration-300`}
          >
            Download PDF
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
            <div className={`p-6 rounded-lg ${
              theme === 'dystopian'
                ? 'bg-cyber-gray border border-neon-pink/20'
                : 'bg-modern-gray border border-modern-accent/20'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 text-center ${
                theme === 'dystopian'
                  ? 'text-neon-blue'
                  : 'text-modern-accent'
              }`}>
                Professional Summary
              </h2>
              <p className={`mb-8 text-center max-w-3xl mx-auto ${
                theme === 'dystopian'
                  ? 'text-gray-300'
                  : 'text-modern-text'
              }`}>
                {summary.professional}
              </p>

              <h3 className={`text-xl font-bold mb-6 text-center ${
                theme === 'dystopian'
                  ? 'text-neon-pink'
                  : 'text-modern-accent'
              }`}>
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {summary.competencies.map((competency) => (
                  <div key={competency.category} className="text-center">
                    <h4 className={`text-lg font-semibold mb-3 ${
                      theme === 'dystopian'
                        ? 'text-neon-blue'
                        : 'text-blue-400'
                    }`}>
                      {competency.category}
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {competency.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm ${
                            theme === 'dystopian'
                              ? 'bg-cyber-black text-neon-blue border border-neon-blue/30'
                              : 'bg-modern-black text-modern-accent border border-modern-accent/30'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                ? 'bg-neon-pink/30'
                : 'bg-modern-accent/30'
            }`} />

            <div className="space-y-16">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 === 0;
                const typeColor = item.type === 'experience' 
                  ? (theme === 'dystopian' ? 'text-neon-pink' : 'text-modern-accent')
                  : item.type === 'education'
                    ? (theme === 'dystopian' ? 'text-neon-blue' : 'text-blue-400')
                    : (theme === 'dystopian' ? 'text-neon-green' : 'text-green-400');

                return (
                  <motion.div
                    key={`${item.title}-${item.period}`}
                    variants={item}
                    className="flex items-center justify-center"
                  >
                    {/* Left Content */}
                    <div className={`w-[calc(50%-24px)] ${isLeft ? 'pr-8' : 'text-right ml-auto pl-8'}`}>
                      {isLeft && (
                        <div className={`p-6 rounded-lg ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray border border-neon-pink/20'
                            : 'bg-modern-gray border border-modern-accent/20'
                        }`}>
                          <div className="mb-2">
                            <span className={`text-sm uppercase ${typeColor}`}>
                              {item.type}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold ${typeColor}`}>
                            {item.title}
                          </h3>
                          <p className={`${
                            theme === 'dystopian'
                              ? 'text-neon-blue'
                              : 'text-modern-text'
                          }`}>
                            {item.company}
                          </p>
                          <span className={`text-sm ${
                            theme === 'dystopian'
                              ? 'text-gray-400'
                              : 'text-modern-text/70'
                          }`}>
                            {item.period}
                          </span>
                          {item.bullets ? (
                            <ul className={`mt-4 space-y-2 list-disc ml-4 ${
                              theme === 'dystopian'
                                ? 'text-gray-300'
                                : 'text-modern-text'
                            }`}>
                              {item.bullets.map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className={`mt-2 ${
                              theme === 'dystopian'
                                ? 'text-gray-300'
                                : 'text-modern-text'
                            }`}>
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
                                      ? 'bg-cyber-black text-neon-blue border border-neon-blue/30'
                                      : 'bg-modern-black text-modern-accent border border-modern-accent/30'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Timeline Dot */}
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      theme === 'dystopian'
                        ? 'bg-neon-pink shadow-glow-pink'
                        : 'bg-modern-accent'
                    }`} />

                    {/* Right Content */}
                    <div className={`w-[calc(50%-24px)] ${isLeft ? 'pl-8' : 'pr-8'}`}>
                      {!isLeft && (
                        <div className={`p-6 rounded-lg ${
                          theme === 'dystopian'
                            ? 'bg-cyber-gray border border-neon-pink/20'
                            : 'bg-modern-gray border border-modern-accent/20'
                        }`}>
                          <div className="mb-2">
                            <span className={`text-sm uppercase ${typeColor}`}>
                              {item.type}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold ${typeColor}`}>
                            {item.title}
                          </h3>
                          <p className={`${
                            theme === 'dystopian'
                              ? 'text-neon-blue'
                              : 'text-modern-text'
                          }`}>
                            {item.company}
                          </p>
                          <span className={`text-sm ${
                            theme === 'dystopian'
                              ? 'text-gray-400'
                              : 'text-modern-text/70'
                          }`}>
                            {item.period}
                          </span>
                          {item.bullets ? (
                            <ul className={`mt-4 space-y-2 list-disc ml-4 ${
                              theme === 'dystopian'
                                ? 'text-gray-300'
                                : 'text-modern-text'
                            }`}>
                              {item.bullets.map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className={`mt-2 ${
                              theme === 'dystopian'
                                ? 'text-gray-300'
                                : 'text-modern-text'
                            }`}>
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
                                      ? 'bg-cyber-black text-neon-blue border border-neon-blue/30'
                                      : 'bg-modern-black text-modern-accent border border-modern-accent/30'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
} 