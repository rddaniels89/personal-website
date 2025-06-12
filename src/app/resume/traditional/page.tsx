'use client';

import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin } from 'react-icons/fi';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function TraditionalResumePage() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen print:min-h-full ${
      theme === 'dystopian' ? 'bg-cyber-black' : 'bg-modern-background'
    }`}>
      <div className="max-w-[8.5in] mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-4 print:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={`p-8 rounded-lg print:p-0 print:shadow-none print:rounded-none print:bg-white print:text-black ${
            theme === 'dystopian'
              ? 'bg-cyber-gray border border-neon-pink/20'
              : 'bg-modern-gray border border-modern-accent/20'
          }`}
        >
          {/* Header */}
          <motion.header variants={item} className="mb-6 print:mb-4">
            <h1 className={`text-3xl font-bold print:text-black ${
              theme === 'dystopian'
                ? 'text-neon-pink'
                : 'text-modern-accent'
            }`}>
              RODERICK DANIELS
            </h1>
            <h2 className={`text-lg mt-1 print:text-gray-700 ${
              theme === 'dystopian'
                ? 'text-gray-400'
                : 'text-modern-text/70'
            }`}>
              Financial Management Analyst | Defense Financial Operations Expert
            </h2>
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <FiMapPin className={`w-4 h-4 print:text-gray-600 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                }`} />
                <span className={`print:text-gray-600 ${
                  theme === 'dystopian' ? 'text-gray-400' : 'text-modern-text/70'
                }`}>
                  Washington, D.C. Metropolitan Area
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className={`w-4 h-4 print:text-gray-600 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                }`} />
                <a
                  href="mailto:contact@roderickdaniels.com"
                  className={`print:text-gray-600 ${
                    theme === 'dystopian'
                      ? 'text-gray-400 hover:text-neon-pink'
                      : 'text-modern-text/70 hover:text-modern-accent'
                  }`}
                >
                  contact@roderickdaniels.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiLinkedin className={`w-4 h-4 print:text-gray-600 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-modern-accent'
                }`} />
                <a
                  href="https://www.linkedin.com/in/roderick-daniels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`print:text-gray-600 ${
                    theme === 'dystopian'
                      ? 'text-gray-400 hover:text-neon-pink'
                      : 'text-modern-text/70 hover:text-modern-accent'
                  }`}
                >
                  linkedin.com/in/roderick-daniels
                </a>
              </div>
            </div>
          </motion.header>

          <div className="print:text-sm">
            {/* Professional Summary */}
            <motion.section variants={item} className="mb-6 print:mb-4">
              <h2 className={`text-lg font-semibold mb-2 pb-1 border-b print:border-gray-300 print:text-black ${
                theme === 'dystopian'
                  ? 'text-neon-blue border-neon-blue/30'
                  : 'text-modern-accent border-modern-accent/30'
              }`}>
                PROFESSIONAL SUMMARY
              </h2>
              <p className={`print:text-gray-800 ${
                theme === 'dystopian'
                  ? 'text-gray-300'
                  : 'text-modern-text'
              }`}>
                Seasoned Financial Management Analyst with over 9 years of experience in defense financial operations and healthcare resource management. Proven track record in optimizing budgets, implementing automated systems, and ensuring regulatory compliance. Specialized in military healthcare financial operations with expertise in budget execution, audit readiness, and process improvement.
              </p>
            </motion.section>

            {/* Core Competencies */}
            <motion.section variants={item} className="mb-6 print:mb-4">
              <h2 className={`text-lg font-semibold mb-2 pb-1 border-b print:border-gray-300 print:text-black ${
                theme === 'dystopian'
                  ? 'text-neon-blue border-neon-blue/30'
                  : 'text-modern-accent border-modern-accent/30'
              }`}>
                CORE COMPETENCIES
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                <div className={`print:text-gray-800 ${
                  theme === 'dystopian'
                    ? 'text-gray-300'
                    : 'text-modern-text'
                }`}>
                  • Budget Execution
                </div>
                <div className={`print:text-gray-800 ${
                  theme === 'dystopian'
                    ? 'text-gray-300'
                    : 'text-modern-text'
                }`}>
                  • Financial Analysis
                </div>
                <div className={`print:text-gray-800 ${
                  theme === 'dystopian'
                    ? 'text-gray-300'
                    : 'text-modern-text'
                }`}>
                  • DoD Regulations
                </div>
                <div className={`print:text-gray-800 ${
                  theme === 'dystopian'
                    ? 'text-gray-300'
                    : 'text-modern-text'
                }`}>
                  • Process Improvement
                </div>
                <div className={`print:text-gray-800 ${
                  theme === 'dystopian'
                    ? 'text-gray-300'
                    : 'text-modern-text'
                }`}>
                  • Team Leadership
                </div>
                <div className={`print:text-gray-800 ${
                  theme === 'dystopian'
                    ? 'text-gray-300'
                    : 'text-modern-text'
                }`}>
                  • Strategic Planning
                </div>
              </div>
            </motion.section>

            {/* Professional Experience */}
            <motion.section variants={item} className="mb-6 print:mb-4">
              <h2 className={`text-lg font-semibold mb-3 pb-1 border-b print:border-gray-300 print:text-black ${
                theme === 'dystopian'
                  ? 'text-neon-blue border-neon-blue/30'
                  : 'text-modern-accent border-modern-accent/30'
              }`}>
                PROFESSIONAL EXPERIENCE
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className={`font-semibold print:text-black ${
                      theme === 'dystopian'
                        ? 'text-neon-pink'
                        : 'text-navy-blue'
                    }`}>
                      Financial Management Analyst
                    </h3>
                    <span className={`text-sm print:text-gray-600 ${
                      theme === 'dystopian'
                        ? 'text-gray-400'
                        : 'text-modern-text/70'
                    }`}>
                      Apr 2023 - Present
                    </span>
                  </div>
                  <p className={`text-sm mb-2 print:text-gray-600 ${
                    theme === 'dystopian'
                      ? 'text-gray-400'
                      : 'text-modern-text/70'
                  }`}>
                    Defense Health Agency
                  </p>
                  <ul className={`list-disc list-outside ml-4 space-y-1 print:text-gray-800 ${
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }`}>
                    <li>Manage and optimize $25M Operating Target budget with 99.8% execution rate while ensuring compliance with federal regulations</li>
                    <li>Lead implementation of automated financial systems across Military Treatment Facilities, reducing processing time by 40%</li>
                    <li>Develop and maintain comprehensive financial reports for senior leadership, providing actionable insights for strategic decision-making</li>
                    <li>Coordinate with cross-functional teams to streamline financial processes and improve operational efficiency by 25%</li>
                    <li>Conduct monthly financial reviews and variance analyses to identify trends and opportunities for cost savings</li>
                    <li>Establish and monitor key performance indicators (KPIs) for budget execution and financial performance</li>
                    <li>Provide technical guidance and training to staff on financial management systems and procedures</li>
                    <li>Lead audit preparation activities and maintain documentation to support financial statements</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className={`font-semibold print:text-black ${
                      theme === 'dystopian'
                        ? 'text-neon-pink'
                        : 'text-navy-blue'
                    }`}>
                      Budget Analyst
                    </h3>
                    <span className={`text-sm print:text-gray-600 ${
                      theme === 'dystopian'
                        ? 'text-gray-400'
                        : 'text-modern-text/70'
                    }`}>
                      Sep 2021 - Apr 2023
                    </span>
                  </div>
                  <p className={`text-sm mb-2 print:text-gray-600 ${
                    theme === 'dystopian'
                      ? 'text-gray-400'
                      : 'text-modern-text/70'
                  }`}>
                    Defense Health Agency
                  </p>
                  <ul className={`list-disc list-outside ml-4 space-y-1 print:text-gray-800 ${
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }`}>
                    <li>Developed and implemented resource planning framework for healthcare initiatives, resulting in 30% improved resource utilization</li>
                    <li>Led cross-functional team in implementing new financial management software across multiple facilities</li>
                    <li>Analyzed budget execution data and prepared monthly status reports for $100M+ healthcare programs</li>
                    <li>Created standardized templates and procedures for budget formulation and execution processes</li>
                    <li>Conducted cost-benefit analyses for proposed healthcare programs and initiatives</li>
                    <li>Collaborated with program managers to develop annual budget requirements and justifications</li>
                    <li>Monitored obligation and expenditure rates to ensure optimal fund utilization</li>
                    <li>Provided recommendations for process improvements and cost reduction strategies</li>
                    <li>Maintained relationships with stakeholders to ensure alignment of financial resources with program objectives</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className={`font-semibold print:text-black ${
                      theme === 'dystopian'
                        ? 'text-neon-pink'
                        : 'text-navy-blue'
                    }`}>
                      Financial Manager
                    </h3>
                    <span className={`text-sm print:text-gray-600 ${
                      theme === 'dystopian'
                        ? 'text-gray-400'
                        : 'text-modern-text/70'
                    }`}>
                      Aug 2014 - Aug 2019
                    </span>
                  </div>
                  <p className={`text-sm mb-2 print:text-gray-600 ${
                    theme === 'dystopian'
                      ? 'text-gray-400'
                      : 'text-modern-text/70'
                  }`}>
                    US Navy
                  </p>
                  <ul className={`list-disc list-outside ml-4 space-y-1 print:text-gray-800 ${
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }`}>
                    <li>Mentored and trained team of 12 junior financial analysts in DoD financial management practices and systems</li>
                    <li>Implemented new financial control systems across departments, achieving 100% compliance with DoD regulations</li>
                    <li>Managed annual operating budget of $50M with consistent execution rate above 99.5%</li>
                    <li>Developed and maintained internal controls to ensure accuracy and integrity of financial data</li>
                    <li>Led quarterly financial reviews and prepared comprehensive reports for command leadership</li>
                    <li>Coordinated with external auditors and provided documentation for annual audits</li>
                    <li>Established performance metrics and tracking systems for financial operations</li>
                    <li>Streamlined payment processing procedures, reducing processing time by 35%</li>
                    <li>Conducted financial analysis to identify and implement cost savings initiatives, resulting in 15% reduction in operating costs</li>
                    <li>Served as subject matter expert for financial management systems and procedures</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Education & Certifications */}
            <motion.section variants={item}>
              <h2 className={`text-lg font-semibold mb-3 pb-1 border-b print:border-gray-300 print:text-black ${
                theme === 'dystopian'
                  ? 'text-neon-blue border-neon-blue/30'
                  : 'text-modern-accent border-modern-accent/30'
              }`}>
                EDUCATION & CERTIFICATIONS
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className={`font-semibold print:text-black ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-navy-blue'
                  }`}>
                    Education
                  </h3>
                  <div className="mt-2 space-y-2">
                    <div>
                      <p className={`font-medium print:text-gray-800 ${
                        theme === 'dystopian'
                          ? 'text-gray-300'
                          : 'text-modern-text'
                      }`}>
                        Master of Business Administration (MBA)
                      </p>
                      <p className={`text-sm print:text-gray-600 ${
                        theme === 'dystopian'
                          ? 'text-gray-400'
                          : 'text-modern-text/70'
                      }`}>
                        Western Governors University, May 2023
                      </p>
                    </div>
                    <div>
                      <p className={`font-medium print:text-gray-800 ${
                        theme === 'dystopian'
                          ? 'text-gray-300'
                          : 'text-modern-text'
                      }`}>
                        Bachelor of Arts in Business Administration
                      </p>
                      <p className={`text-sm print:text-gray-600 ${
                        theme === 'dystopian'
                          ? 'text-gray-400'
                          : 'text-modern-text/70'
                      }`}>
                        Concentration in Finance
                      </p>
                      <p className={`text-sm print:text-gray-600 ${
                        theme === 'dystopian'
                          ? 'text-gray-400'
                          : 'text-modern-text/70'
                      }`}>
                        California State University, Fullerton, August 2020
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className={`font-semibold print:text-black ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-navy-blue'
                  }`}>
                    Professional Certifications
                  </h3>
                  <ul className={`mt-2 space-y-1 print:text-gray-800 ${
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }`}>
                    <li>• Certified Defense Financial Manager (CDFM)</li>
                    <li>• Department of Defense Financial Management Certification Level 2</li>
                  </ul>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 