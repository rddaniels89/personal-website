'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import { 
  FaAnchor, 
  FaMedal, 
  FaPlane, 
  FaGraduationCap, 
  FaUsers, 
  FaChartLine,
  FaExpand,
  FaTimes
} from 'react-icons/fa';

interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  expandedContent?: {
    achievements: string[];
    photos: { src: string; alt: string; caption?: string }[];
    skills: string[];
    impact: string;
  };
  icon: React.ComponentType<{ className?: string }>;
  category: 'training' | 'deployment' | 'leadership' | 'achievement';
}

const timelineData: TimelineEntry[] = [
  {
    id: 'enlistment',
    date: '2014',
    title: 'Navy Enlistment',
    subtitle: 'Beginning of Service',
    location: 'Great Lakes, IL',
    description: 'Enlisted in the United States Navy, beginning an incredible journey of service, leadership, and personal growth.',
    expandedContent: {
      achievements: [
        'Selected as Division Leader during Boot Camp; led 80+ recruits',
        'Earned Expert Marksmanship qualification',
        'Completed training with top 10% distinction',
        'Recognized for Outstanding Military Bearing and Physical Fitness Excellence',
        'Developed core values of discipline, attention to detail, and accountability',
        'Laid the foundation for a high-impact career in military finance and leadership'
      ],
      photos: [
        { src: '/images/roderick-navy0.jpg', alt: 'Navy Boot Camp Graduation', caption: 'Boot Camp Graduation Day' }
      ],
      skills: ['Military Bearing', 'Team Leadership', 'Division Leadership', 'Physical Fitness Excellence', 'Discipline & Accountability', 'Attention to Detail', 'Core Military Values'],
      impact: 'Established the foundation for a distinguished military career by demonstrating exceptional leadership over 80+ recruits and achieving top-tier performance standards. The core values of discipline, attention to detail, and accountability developed during this period became the cornerstone of future military and civilian success.'
    },
    icon: FaAnchor,
    category: 'training'
  },
  {
    id: 'financial-training',
    date: '2014-2015',
    title: 'Financial Management School',
    subtitle: 'Rate Training & Specialization',
    location: 'Meridian, MS',
    description: 'Completed intensive financial management training, learning advanced accounting, budgeting, and financial analysis techniques.',
    expandedContent: {
      achievements: [
        'Graduated with a 3.8 GPA',
        'Earned Academic Excellence Award for top-tier performance',
        'Promoted early to E-4 based on academic and leadership merit',
        'Trained in federal financial regulations, accounting systems, and audit prep',
        'Advanced in Excel, Access, and proprietary DoD financial systems',
        'Built strong foundations in fund control and resource planning'
      ],
      photos: [
        { src: '/images/roderick-navy1.jpg', alt: 'Financial Management Training', caption: 'Advanced Training Phase' }
      ],
      skills: ['Financial Analysis', 'Federal Financial Regulations', 'Advanced Excel & Access', 'DoD Financial Systems', 'Fund Control', 'Resource Planning', 'Audit Preparation', 'Accounting Systems'],
      impact: 'Developed comprehensive expertise in military financial systems and federal regulations that became the cornerstone of career advancement. Early promotion to E-4 based on merit demonstrated exceptional aptitude that would enable rapid progression through leadership roles and successful transition to civilian federal financial management.'
    },
    icon: FaGraduationCap,
    category: 'training'
  },
  {
    id: 'first-deployment',
    date: '2015-2016',
    title: 'First Overseas Deployment',
    subtitle: 'Combat Zone Operations',
    location: 'Middle East (exact location classified)',
    description: 'First major deployment supporting combat and humanitarian operations, managing critical financial operations in high-stress environments.',
    expandedContent: {
      achievements: [
        'Managed over $15M in operational budgets across multiple commands',
        'Awarded the Navy and Marine Corps Achievement Medal',
        'Supported urgent/emergency financial authorizations in combat environments',
        'Coordinated with multinational partners and joint task forces',
        'Maintained 100% accountability of classified and unclassified funds',
        'Gained real-time leadership and risk assessment experience under fire',
        'Established reputation for reliability under pressure'
      ],
      photos: [
        { src: '/images/roderick-navy2.webp', alt: 'First Deployment', caption: 'Overseas Operations' }
      ],
      skills: ['Crisis Management', 'Combat Zone Operations', 'Emergency Financial Authorization', 'Multinational Coordination', 'Risk Assessment Under Fire', 'Classified Fund Management', 'Joint Task Force Operations', 'Real-time Leadership'],
      impact: 'Proved exceptional capability to maintain financial integrity and operational effectiveness under combat conditions. This deployment established a reputation for reliability under extreme pressure and demonstrated the ability to manage critical financial operations in the most challenging circumstances, setting the foundation for future senior leadership roles.'
    },
    icon: FaPlane,
    category: 'deployment'
  },
  {
    id: 'leadership-role',
    date: '2016-2017',
    title: 'Assistant Financial Manager',
    subtitle: 'Joint Tasking Operations',
    location: 'Europe',
    description: 'Led financial operations for joint military exercises and multinational operations, overseeing digital transformation initiatives.',
    expandedContent: {
      achievements: [
        'Led digital transformation of vendor management processes',
        'Drove 35% improvement in reimbursement cycle time',
        'Created training programs for junior personnel across 4 departments',
        'Oversaw team of 6 finance techs and ensured zero audit findings',
        'Supported complex operations during NATO joint exercises',
        'Key contributor to Unit Commendation for financial readiness',
        'Developed resource forecasting models still in use today'
      ],
      photos: [
        { src: '/images/roderick-navy3.jpg', alt: 'Leadership Role', caption: 'Leading Financial Operations' }
      ],
      skills: ['Digital Transformation', 'Vendor Management', 'NATO Joint Operations', 'Cross-Departmental Training', 'Resource Forecasting', 'Financial Readiness', 'Process Innovation', 'Team Leadership', 'Audit Management'],
      impact: 'Demonstrated transformational leadership by revolutionizing financial operations through digital innovation and cross-departmental training programs. The resource forecasting models developed during this period continue to be used today, showcasing the lasting impact of strategic thinking and process improvement capabilities that translate directly to civilian leadership excellence.'
    },
    icon: FaUsers,
    category: 'leadership'
  },
  {
    id: 'advanced-deployment',
    date: '2017-2018',
    title: 'Advanced Operations Deployment',
    subtitle: 'Senior Financial Manager',
    location: 'Horn of Africa & Indian Ocean',
    description: 'Led theater-level financial operations across multiple maritime locations, managing complex logistics and emergency funding protocols.',
    expandedContent: {
      achievements: [
        'Managed $75M in funds across 12 locations in austere environments',
        'Integrated digital payment systems into operational workflows',
        'Supported theater-level logistics and finance strategy for maritime ops',
        'Earned Combat Action Ribbon for engagement in hostile territory',
        'Partnered with coalition forces for emergency logistics finance',
        'Created SOPs used in contingency funding efforts DoD-wide',
        'Recognized by commanding officers for strategic decision-making under pressure',
        'Developed financial models for emergency evacuation protocol planning'
      ],
      photos: [
        { src: '/images/roderick-navy4.jpg', alt: 'Advanced Deployment', caption: 'Senior Leadership Role' }
      ],
      skills: ['Theater-Level Operations', 'Maritime Finance Strategy', 'Digital Payment Integration', 'Austere Environment Operations', 'Coalition Force Coordination', 'Emergency Logistics Finance', 'SOP Development', 'Strategic Decision-Making', 'Emergency Evacuation Planning'],
      impact: 'Achieved the pinnacle of military financial leadership by successfully managing complex theater-level operations across 12 austere locations. The SOPs and financial models developed during this deployment are still used DoD-wide, demonstrating lasting strategic impact and validating readiness for the highest levels of civilian financial leadership and defense contracting responsibilities.'
    },
    icon: FaChartLine,
    category: 'deployment'
  },
  {
    id: 'transition',
    date: '2019',
    title: 'Honorable Discharge & Civilian Transition',
    subtitle: 'Transition to Federal Leadership',
    location: 'Returned to U.S.',
    description: 'Completed exemplary military service and transitioned to civilian federal career, applying military-learned discipline to high-stakes operations.',
    expandedContent: {
      achievements: [
        'Completed Bachelor\'s Degree in Business Administration',
        'Received perfect score on final Navy evaluation',
        'Transitioned into GS-level Financial Analyst role within DoD',
        'Applied military-learned discipline to high-stakes federal operations',
        'Launched long-term financial management career with future FERS pension',
        'Began pursuit of MBA and high-level certifications (CDFM, LangChain AI training)',
        'Left a legacy of mentorship, efficiency, and mission-first mindset'
      ],
      photos: [],
      skills: ['Strategic Transition', 'Federal Career Planning', 'Business Administration', 'GS-Level Operations', 'Professional Certification Pursuit', 'Legacy Building', 'Mission-First Leadership', 'Educational Achievement'],
      impact: 'Successfully transitioned military excellence into federal civilian leadership, seamlessly applying naval financial expertise and leadership principles to drive success in defense contracting roles. The foundation built during distinguished naval service enabled rapid career progression and positioned for continued advancement through MBA education, professional certifications, and AI training – demonstrating the career progression from enlisted service to senior federal leadership.'
    },
    icon: FaMedal,
    category: 'achievement'
  }
];

interface ExpandedModalProps {
  entry: TimelineEntry;
  isOpen: boolean;
  onClose: () => void;
}

const ExpandedModal: React.FC<ExpandedModalProps> = ({ entry, isOpen, onClose }) => {
  const { theme } = useTheme();
  
  if (!isOpen || !entry.expandedContent) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className={`card relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 ${
            theme === 'dystopian' 
              ? 'bg-surface-dark border-accent' 
              : 'bg-surface-light border-primary'
          }`}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
              theme === 'dystopian'
                ? 'hover:bg-cyber-gray text-gray-300 hover:text-white'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <div className="pr-12">
            <div className="flex items-center gap-3 mb-4">
              <entry.icon className={`w-6 h-6 ${
                theme === 'dystopian' ? 'text-neon-blue' : 'text-primary'
              }`} />
              <div>
                <h3 className={`text-2xl font-bold ${
                  theme === 'dystopian' ? 'text-white' : 'text-gray-900'
                }`}>{entry.title}</h3>
                <p className={`text-lg ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-gray-600'
                }`}>{entry.subtitle}</p>
                <p className={`text-sm ${
                  theme === 'dystopian' ? 'text-gray-100' : 'text-gray-500'
                }`}>{entry.date} • {entry.location}</p>
              </div>
            </div>

            <p className={`text-lg mb-6 ${
              theme === 'dystopian' ? 'text-white' : 'text-gray-700'
            }`}>{entry.description}</p>

            {entry.expandedContent.photos.length > 0 && (
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-primary'
                }`}>Photos</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {entry.expandedContent.photos.map((photo, index) => (
                    <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {photo.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                          {photo.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className={`text-lg font-semibold mb-3 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-primary'
                }`}>Key Achievements</h4>
                <ul className="space-y-2">
                  {entry.expandedContent.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className={`mt-1 ${
                        theme === 'dystopian' ? 'text-neon-pink' : 'text-primary'
                      }`}>•</span>
                      <span className={theme === 'dystopian' ? 'text-white' : 'text-gray-700'}>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className={`text-lg font-semibold mb-3 ${
                  theme === 'dystopian' ? 'text-neon-blue' : 'text-primary'
                }`}>Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {entry.expandedContent.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dystopian'
                          ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30'
                          : 'bg-primary/20 text-primary border border-primary/30'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className={`text-lg font-semibold mb-3 ${
                theme === 'dystopian' ? 'text-neon-blue' : 'text-primary'
              }`}>Impact & Legacy</h4>
              <p className={`p-4 rounded-lg ${
                theme === 'dystopian'
                  ? 'bg-cyber-gray/30 border-l-4 border-neon-pink text-white'
                  : 'bg-gray-50 border-l-4 border-primary text-gray-700'
              }`}>
                {entry.expandedContent.impact}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const NavyTimeline: React.FC = () => {
  const { theme } = useTheme();
  const [expandedEntry, setExpandedEntry] = useState<TimelineEntry | null>(null);

  const getCategoryColor = (category: TimelineEntry['category']) => {
    const colors = {
      training: theme === 'dystopian' ? '#3d43b4' : '#3B82F6',        // Deep Blue-Violet
      deployment: theme === 'dystopian' ? '#8386f5' : '#8B5CF6',      // Light Periwinkle  
      leadership: theme === 'dystopian' ? '#1afe49' : '#10B981',      // Neon Green
      achievement: theme === 'dystopian' ? '#3d43b4' : '#F59E0B'      // Deep Blue-Violet
    };
    return colors[category];
  };

  return (
    <>
      <div className="navy-timeline relative max-w-4xl mx-auto">
        <div className="relative">
          {/* Custom timeline line with consistent visibility */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full"
            style={{
              height: `${timelineData.length * 400}px`, // Full height for all items
              background: theme === 'dystopian' 
                ? 'rgba(6, 182, 212, 0.8)' // Solid cyan color without gradient fade
                : 'rgba(59, 130, 246, 0.8)', // Solid blue color without gradient fade
              top: '20px', // Start higher to cover first item
              boxShadow: theme === 'dystopian'
                ? '0 0 10px rgba(6, 182, 212, 0.3)'
                : '0 0 10px rgba(59, 130, 246, 0.3)'
            }}
          />
          
          {timelineData.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline icon */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 border-4"
                style={{
                  backgroundColor: getCategoryColor(entry.category),
                  borderColor: theme === 'dystopian' ? '#0F172A' : '#FFFFFF',
                  boxShadow: `0 0 20px ${getCategoryColor(entry.category)}50`
                }}
              >
                <entry.icon className="w-5 h-5 text-white" />
              </div>

              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  className={`relative p-6 rounded-xl border-2 backdrop-blur-sm ${
                    theme === 'dystopian'
                      ? 'bg-surface-dark/80 text-primary'
                      : 'bg-surface-light/90 text-gray-800'
                  }`}
                  style={{
                    borderColor: getCategoryColor(entry.category),
                    boxShadow: theme === 'dystopian'
                      ? `0 0 20px ${getCategoryColor(entry.category)}30`
                      : '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: theme === 'dystopian'
                      ? `0 0 30px ${getCategoryColor(entry.category)}50`
                      : '0 15px 35px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  {/* Date badge */}
                  <div 
                    className="absolute -top-3 left-6 px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: getCategoryColor(entry.category),
                      color: 'white'
                    }}
                  >
                    {entry.date}
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className={`text-xl font-bold mb-1 ${
                          theme === 'dystopian' ? 'text-white' : 'text-gray-900'
                        }`}>{entry.title}</h3>
                        <h4 className={`text-lg mb-1 ${
                          theme === 'dystopian' ? 'text-neon-blue' : 'text-gray-600'
                        }`}>{entry.subtitle}</h4>
                        <p className={`text-sm ${
                          theme === 'dystopian' ? 'text-gray-100' : 'text-gray-500'
                        }`}>{entry.location}</p>
                      </div>
                      
                      {entry.expandedContent && (
                        <button
                          onClick={() => setExpandedEntry(entry)}
                          className={`p-2 rounded-full transition-all hover:scale-110 ${
                            theme === 'dystopian'
                              ? 'bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue'
                              : 'bg-primary/20 hover:bg-primary/30 text-primary'
                          }`}
                          title="View Details"
                        >
                          <FaExpand className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    
                    <p className={`text-sm leading-relaxed mb-4 ${
                      theme === 'dystopian' ? 'text-white' : 'text-gray-700'
                    }`}>{entry.description}</p>
                    
                    {entry.expandedContent && (
                      <motion.button
                        onClick={() => setExpandedEntry(entry)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          theme === 'dystopian'
                            ? 'bg-neon-pink/20 hover:bg-neon-pink/30 text-neon-pink border border-neon-pink/30'
                            : 'bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details & Photos
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ExpandedModal
        entry={expandedEntry!}
        isOpen={!!expandedEntry}
        onClose={() => setExpandedEntry(null)}
      />
    </>
  );
};

export default NavyTimeline; 
