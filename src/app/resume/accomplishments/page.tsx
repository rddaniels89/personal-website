'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';

// Reorganize accomplishments by roles and companies
const accomplishmentsByRole = [
  {
    role: 'Financial Management Analyst',
    organization: 'Defense Health Agency',
    period: 'Apr 2023 – Present',
    skills: ['GFEBS', 'FMIS', 'Tableau', 'Power BI', 'Ektropy'],
    items: [
      {
        title: '📌 Budget Optimization',
        description: 'Successfully managed and optimized a $25M Operating Target budget with a 99.8% execution rate, ensuring federal compliance and strategic fund utilization.',
        impact: 'Resulted in zero audit findings and 15% cost savings through reallocation of underutilized funds.'
      },
      {
        title: '📌 Process Improvement',
        description: 'Led enterprise-wide implementation of automated financial workflows across Military Treatment Facilities, enhancing transparency and traceability in reporting.',
        impact: 'Reduced processing time by 40% and improved data accuracy by 25%, enabling faster decision-making.'
      }
    ]
  },
  {
    role: 'Budget Analyst',
    organization: 'Defense Health Agency',
    period: 'Sep 2021 – Apr 2023',
    skills: ['GFEBS', 'FMIS', 'Excel', 'PowerBI', 'SAP'],
    items: [
      {
        title: '📌 Resource Management',
        description: 'Built a resource planning framework to standardize spend planning across defense healthcare programs.',
        impact: 'Enhanced utilization efficiency by 30% and supported proactive mid-year adjustments.'
      },
      {
        title: '📌 System Integration',
        description: 'Managed a cross-functional team to deploy a new budget management system across multiple MTFs.',
        impact: 'Delivered the project 2 months early and 20% under budget, reducing manual reporting errors by 35%.'
      }
    ]
  },
  {
    role: 'Financial Manager',
    organization: 'U.S. Navy',
    period: 'Aug 2014 – Aug 2019',
    skills: ['Navy OPTAR', 'AVCAL', 'DoD Compliance', 'Audit Readiness'],
    items: [
      {
        title: '📌 Team Development',
        description: 'Mentored and trained junior analysts in Navy OPTAR/AVCAL fund management, DoD compliance, and audit readiness.',
        impact: 'Improved team performance by 35% and halved onboarding time for new personnel.'
      },
      {
        title: '📌 Strategic Initiative',
        description: 'Spearheaded the development of financial control systems across supply and maintenance divisions during deployment cycles.',
        impact: 'Achieved 100% compliance and enhanced operational funding transparency across 21 work centers.'
      }
    ]
  }
];

const accomplishmentsByCompany = [
  {
    company: 'Defense Health Agency',
    period: '2021 - Present',
    items: [
      {
        title: 'Financial Systems Modernization',
        description: 'Led comprehensive modernization of financial management systems across multiple facilities with enterprise-wide automated workflows.',
        impact: 'Achieved 40% improvement in processing efficiency and 25% improvement in data accuracy.'
      },
      {
        title: 'Budget Management Excellence',
        description: 'Managed complex budget portfolios totaling $25M+ across multiple Military Treatment Facilities with 99.8% execution rate.',
        impact: 'Maintained zero audit findings while achieving 15% cost savings through strategic resource allocation.'
      }
    ]
  },
  {
    company: 'U.S. Navy',
    period: '2014 - 2019',
    items: [
      {
        title: 'Operational Excellence',
        description: 'Developed financial control systems across supply and maintenance divisions during deployment cycles.',
        impact: 'Achieved 100% compliance and enhanced operational funding transparency across 21 work centers.'
      },
      {
        title: 'Team Leadership',
        description: 'Mentored junior analysts in Navy OPTAR/AVCAL fund management and DoD compliance standards.',
        impact: 'Improved team performance by 35% and reduced onboarding time by 50% for new personnel.'
      }
    ]
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AccomplishmentsPage() {
  const { theme } = useTheme();
  const [view, setView] = useState<'role' | 'company'>('role');

  return (
    <div className={`min-h-screen`}
      style={{
        backgroundColor: 'var(--color-background)'
      }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold mb-8 ${
            theme === 'dystopian'
              ? 'text-neon-pink'
              : 'text-modern-accent'
          }`}
        >
          Key Accomplishments
        </motion.h1>

        {/* View Toggle */}
        <div className="flex mb-8 border-b border-gray-700">
          <button
            onClick={() => setView('role')}
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200 relative ${
              view === 'role'
                ? theme === 'dystopian'
                  ? 'text-neon-pink'
                  : 'text-modern-accent'
                : theme === 'dystopian'
                  ? 'text-gray-400 hover:text-neon-blue'
                  : 'text-gray-400 hover:text-modern-accent'
            }`}
          >
            By Role
            {view === 'role' && (
              <motion.div
                layoutId="activeTab"
                className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                  theme === 'dystopian'
                    ? 'bg-neon-pink'
                    : 'bg-modern-accent'
                }`}
              />
            )}
          </button>
          <button
            onClick={() => setView('company')}
            className={`px-6 py-3 font-medium text-sm transition-colors duration-200 relative ${
              view === 'company'
                ? theme === 'dystopian'
                  ? 'text-neon-pink'
                  : 'text-modern-accent'
                : theme === 'dystopian'
                  ? 'text-gray-400 hover:text-neon-blue'
                  : 'text-gray-400 hover:text-modern-accent'
            }`}
          >
            By Company
            {view === 'company' && (
              <motion.div
                layoutId="activeTab"
                className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                  theme === 'dystopian'
                    ? 'bg-neon-pink'
                    : 'bg-modern-accent'
                }`}
              />
            )}
          </button>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {view === 'role' ? (
            // Role View
            accomplishmentsByRole.map((role) => (
              <motion.section
                key={`${role.role}-${role.period}`}
                variants={item}
                className={`p-6 rounded-lg ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray border border-neon-pink/20'
                    : 'bg-modern-gray border border-modern-accent/20'
                }`}
              >
                <div className="mb-6">
                  <h2 className={`text-2xl font-bold ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    {role.role}
                  </h2>
                  <p className={`text-sm mb-3 ${
                    theme === 'dystopian'
                      ? 'text-gray-400'
                      : 'text-modern-text/70'
                  }`}>
                    {role.organization} • {role.period}
                  </p>
                  {role.skills && (
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            theme === 'dystopian'
                              ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30'
                              : 'bg-modern-accent/20 text-modern-accent border border-modern-accent/30'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {role.items.map((accomplishment) => (
                    <div
                      key={accomplishment.title}
                      className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        theme === 'dystopian'
                          ? 'bg-cyber-black border border-neon-blue/20 hover:border-neon-blue/40 hover:shadow-neon-blue/20'
                          : 'bg-modern-black border border-modern-accent/20 hover:border-modern-accent/40 hover:shadow-modern-accent/20'
                      }`}
                    >
                      <h3 className={`text-xl font-semibold mb-3 ${
                        theme === 'dystopian'
                          ? 'text-neon-pink'
                          : 'text-navy-blue'
                      }`}>
                        {accomplishment.title}
                      </h3>
                      <p className={`mb-4 ${
                        theme === 'dystopian'
                          ? 'text-gray-300'
                          : 'text-modern-text'
                      }`}>
                        {accomplishment.description}
                      </p>
                      <div className={`flex items-center transition-colors duration-300 hover:brightness-125 ${
                        theme === 'dystopian'
                          ? 'text-neon-green'
                          : 'text-green-400'
                      }`}>
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        <p className="text-sm font-medium">
                          ✅ {accomplishment.impact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))
          ) : (
            // Company View
            accomplishmentsByCompany.map((company) => (
              <motion.section
                key={`${company.company}-${company.period}`}
                variants={item}
                className={`p-6 rounded-lg ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray border border-neon-pink/20'
                    : 'bg-modern-gray border border-modern-accent/20'
                }`}
              >
                <div className="mb-6">
                  <h2 className={`text-2xl font-bold ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    {company.company}
                  </h2>
                  <p className={`text-sm ${
                    theme === 'dystopian'
                      ? 'text-gray-400'
                      : 'text-modern-text/70'
                  }`}>
                    {company.period}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {company.items.map((accomplishment) => (
                    <div
                      key={accomplishment.title}
                      className={`p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        theme === 'dystopian'
                          ? 'bg-cyber-black border border-neon-blue/20 hover:border-neon-blue/40 hover:shadow-neon-blue/20'
                          : 'bg-modern-black border border-modern-accent/20 hover:border-modern-accent/40 hover:shadow-modern-accent/20'
                      }`}
                    >
                      <h3 className={`text-xl font-semibold mb-3 ${
                        theme === 'dystopian'
                          ? 'text-neon-pink'
                          : 'text-navy-blue'
                      }`}>
                        {accomplishment.title}
                      </h3>
                      <p className={`mb-4 ${
                        theme === 'dystopian'
                          ? 'text-gray-300'
                          : 'text-modern-text'
                      }`}>
                        {accomplishment.description}
                      </p>
                      <div className={`flex items-center transition-colors duration-300 hover:brightness-125 ${
                        theme === 'dystopian'
                          ? 'text-neon-green'
                          : 'text-green-400'
                      }`}>
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        <p className="text-sm font-medium">
                          ✅ {accomplishment.impact}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
} 
