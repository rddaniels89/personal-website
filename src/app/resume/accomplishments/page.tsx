'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';

// Reorganize accomplishments by roles and companies
const accomplishmentsByRole = [
  {
    role: 'Financial Management Analyst',
    organization: 'Defense Health Agency',
    period: 'Apr 2023 - Present',
    items: [
      {
        title: 'Budget Optimization',
        description: 'Successfully managed and optimized a $25M Operating Target budget, achieving 99.8% execution rate while maintaining compliance with federal regulations.',
        impact: 'Resulted in zero audit findings and 15% cost savings through strategic resource allocation.'
      },
      {
        title: 'Process Improvement',
        description: 'Led implementation of automated financial systems across Military Treatment Facilities, streamlining budget analysis and reporting processes.',
        impact: 'Reduced processing time by 40% and improved data accuracy by 25%.'
      }
    ]
  },
  {
    role: 'Budget Analyst',
    organization: 'Defense Health Agency',
    period: 'Sep 2021 - Apr 2023',
    items: [
      {
        title: 'Resource Management',
        description: 'Developed comprehensive resource planning framework for defense healthcare initiatives.',
        impact: 'Enhanced resource utilization efficiency by 30% across multiple facilities.'
      },
      {
        title: 'System Integration',
        description: 'Led cross-functional team in implementing new financial management software across multiple facilities.',
        impact: 'Completed project 2 months ahead of schedule with 20% under budget.'
      }
    ]
  },
  {
    role: 'Financial Manager',
    organization: 'US Navy',
    period: 'Aug 2014 - Aug 2019',
    items: [
      {
        title: 'Team Development',
        description: 'Mentored and trained junior financial analysts in DoD financial management practices and systems.',
        impact: 'Improved team performance metrics by 35% and reduced onboarding time by 50%.'
      },
      {
        title: 'Strategic Initiative',
        description: 'Spearheaded implementation of new financial control systems across multiple departments.',
        impact: 'Achieved 100% compliance with DoD financial management regulations.'
      }
    ]
  }
];

const accomplishmentsByCompany = [
  {
    company: 'Defense Health Agency',
    period: '2020 - Present',
    items: [
      {
        title: 'Financial Systems Modernization',
        description: 'Led comprehensive modernization of financial management systems across multiple facilities.',
        impact: 'Achieved 45% improvement in processing efficiency and 99.9% accuracy in financial reporting.'
      },
      {
        title: 'Budget Management Excellence',
        description: 'Managed complex budget portfolios for multiple Military Treatment Facilities.',
        impact: 'Maintained perfect audit compliance while optimizing resource allocation by 25%.'
      }
    ]
  },
  {
    company: 'US Navy',
    period: '2014 - 2019',
    items: [
      {
        title: 'Operational Efficiency',
        description: 'Streamlined financial operations and implemented new control systems.',
        impact: 'Reduced operational costs by 20% while improving service delivery metrics.'
      },
      {
        title: 'Process Innovation',
        description: 'Developed and implemented new financial management procedures.',
        impact: 'Established new standards that were adopted across multiple naval facilities.'
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
    <div className={`min-h-screen ${
      theme === 'dystopian' ? 'bg-cyber-black' : 'bg-modern-background'
    }`}>
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
                  <p className={`text-sm ${
                    theme === 'dystopian'
                      ? 'text-gray-400'
                      : 'text-modern-text/70'
                  }`}>
                    {role.organization} • {role.period}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {role.items.map((accomplishment) => (
                    <div
                      key={accomplishment.title}
                      className={`p-6 rounded-lg ${
                        theme === 'dystopian'
                          ? 'bg-cyber-black border border-neon-blue/20'
                          : 'bg-modern-black border border-modern-accent/20'
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
                      <div className={`flex items-center ${
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
                          {accomplishment.impact}
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
                      className={`p-6 rounded-lg ${
                        theme === 'dystopian'
                          ? 'bg-cyber-black border border-neon-blue/20'
                          : 'bg-modern-black border border-modern-accent/20'
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
                      <div className={`flex items-center ${
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
                          {accomplishment.impact}
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