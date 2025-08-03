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
        'Completed Navy Boot Camp with honors - Top 15% of division',
        'Selected for Financial Management rating based on ASVAB scores and aptitude testing',
        'Demonstrated exceptional leadership potential - Chosen as Division Leader',
        'Earned Expert Marksmanship qualification',
        'Graduated with Perfect Physical Readiness Test scores',
        'Received Recognition for Outstanding Military Bearing and Leadership'
      ],
      photos: [
        { src: '/images/roderick-navy0.jpg', alt: 'Navy Boot Camp Graduation', caption: 'Boot Camp Graduation Day' }
      ],
      skills: ['Military Bearing', 'Team Leadership', 'Financial Fundamentals', 'Discipline & Time Management', 'Physical Fitness', 'Attention to Detail'],
      impact: 'Established the foundation for a distinguished military career by demonstrating exceptional character, leadership ability, and commitment to excellence. Set the standard for performance that would define the next 5 years of service and beyond into civilian leadership roles.'
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
        'Graduated top 10% of class with 3.8 GPA in intensive 16-week program',
        'Mastered Navy Standard Integrated Personnel System (NSIPS) and financial databases',
        'Earned Financial Management (FM) rating qualification ahead of schedule',
        'Completed advanced certification in Defense Travel System (DTS)',
        'Selected for accelerated advancement to Petty Officer Third Class',
        'Received Academic Excellence Award for superior performance'
      ],
      photos: [
        { src: '/images/roderick-navy1.jpg', alt: 'Financial Management Training', caption: 'Advanced Training Phase' }
      ],
      skills: ['Financial Analysis', 'Budget Management', 'Regulatory Compliance', 'System Administration', 'Advanced Excel & Database Management', 'Federal Financial Regulations', 'Audit Preparation'],
      impact: 'Developed comprehensive expertise in military financial systems and federal regulations that became the cornerstone of career advancement. This technical proficiency enabled leadership roles and positioned for successful transition to civilian defense contracting and federal financial management.'
    },
    icon: FaGraduationCap,
    category: 'training'
  },
  {
    id: 'first-deployment',
    date: '2015-2016',
    title: 'First Overseas Deployment',
    subtitle: 'Combat Operations Support',
    location: 'Middle East Theater',
    description: 'First major deployment supporting combat and humanitarian operations, managing critical financial operations in high-stress environments.',
    expandedContent: {
      achievements: [
        'Managed $15+ million in operational and humanitarian mission budgets',
        'Led financial support for 12 humanitarian missions across 4 countries',
        'Received Navy Achievement Medal for exceptional performance under combat conditions',
        'Promoted ahead of peers to Petty Officer Second Class (E-5) in record time',
        'Processed over $2M in emergency financial authorizations without error',
        'Coordinated international financial operations with allied forces',
        'Achieved 100% accountability in high-stress combat environment audits'
      ],
      photos: [
        { src: '/images/roderick-navy2.webp', alt: 'First Deployment', caption: 'Overseas Operations' }
      ],
      skills: ['Crisis Management', 'International Operations', 'Multi-million Dollar Budgets', 'Team Coordination', 'Combat Zone Operations', 'Emergency Financial Authorization', 'Multi-National Cooperation', 'Stress Management'],
      impact: 'Proved exceptional capability to maintain financial integrity and operational effectiveness in the most challenging circumstances. This deployment established reputation for reliability under pressure that opened doors to senior leadership positions and demonstrated readiness for high-stakes civilian financial management roles.'
    },
    icon: FaPlane,
    category: 'deployment'
  },
  {
    id: 'leadership-role',
    date: '2016-2017',
    title: 'Assistant Financial Manager',
    subtitle: 'Leadership Development',
    location: 'Naval Air Station',
    description: 'Promoted to leadership role, overseeing financial operations for major naval aviation unit and mentoring junior personnel.',
    expandedContent: {
      achievements: [
        'Led team of 12 financial specialists managing $25M+ annual aviation unit budget',
        'Implemented digital process improvements increasing efficiency by 35% and reducing errors by 40%',
        'Contributed to unit Supply Blue E award for excellence in financial and supply management',
        'Mentored 15+ junior sailors with 100% advancement rate for direct reports',
        'Designed and conducted financial training program adopted unit-wide',
        'Achieved zero audit findings during Inspector General inspection',
        'Streamlined vendor payment processes reducing processing time from 30 to 10 days'
      ],
      photos: [
        { src: '/images/roderick-navy3.jpg', alt: 'Leadership Role', caption: 'Leading Financial Operations' }
      ],
      skills: ['Team Leadership', 'Process Improvement', 'Mentorship', 'Strategic Planning', 'Training Development', 'Quality Control', 'Vendor Management', 'Digital Transformation', 'Performance Management'],
      impact: 'Demonstrated transformational leadership by revolutionizing unit financial operations through innovation and team development. This role established a proven track record of leading high-performing teams and implementing efficiency improvements that directly translates to success in civilian leadership positions requiring change management and operational excellence.'
    },
    icon: FaUsers,
    category: 'leadership'
  },
  {
    id: 'advanced-deployment',
    date: '2017-2018',
    title: 'Advanced Operations Deployment',
    subtitle: 'Senior Financial Manager',
    location: 'Afghanistan Theater',
    description: 'Led financial operations during critical deployment phase, managing complex multi-national financial requirements.',
    expandedContent: {
      achievements: [
        'Managed $75M+ in operational funds across 8 different mission categories',
        'Coordinated financial support for multi-national operations with 6 allied nations',
        'Received second Navy Achievement Medal and Combat Action Ribbon',
        'Led comprehensive financial audit with zero discrepancies across $50M+ in transactions',
        'Promoted to Petty Officer First Class (E-6) during deployment',
        'Established emergency financial protocols adopted across theater operations',
        'Managed cryptocurrency and digital payment systems for sensitive operations',
        'Trained and certified 25+ personnel on advanced financial procedures'
      ],
      photos: [
        { src: '/images/roderick-navy4.jpg', alt: 'Advanced Deployment', caption: 'Senior Leadership Role' }
      ],
      skills: ['Senior Leadership', 'International Finance', 'Audit Management', 'Strategic Operations', 'Emergency Protocol Development', 'Digital Payment Systems', 'Advanced Training & Certification', 'Theater-level Operations', 'Multi-National Coordination'],
      impact: 'Achieved the pinnacle of military financial leadership by successfully managing the largest and most complex financial operations in theater. This deployment cemented reputation as a strategic financial leader capable of handling billion-dollar responsibilities, directly enabling transition to senior civilian positions in defense financial management and federal contracting.'
    },
    icon: FaChartLine,
    category: 'deployment'
  },
  {
    id: 'transition',
    date: '2019',
    title: 'Honorable Discharge',
    subtitle: 'Transition to Civilian Leadership',
    location: 'San Diego, CA',
    description: 'Completed military service with honors, transitioning to civilian career while maintaining the values and leadership skills gained.',
    expandedContent: {
      achievements: [
        'Honorable Discharge with Navy Achievement Medal (2x), Combat Action Ribbon, and 5 service medals',
        'Perfect 4.0 performance evaluations across all 5 years of service',
        'Leadership legacy: 100% of mentored personnel achieved advancement during tenure',
        'Seamless transition to civilian GS-12 federal position within 30 days',
        'Completed Bachelor\'s degree during service with 3.7 GPA while deployed',
        'Established enduring financial training programs still used by successor units',
        'Received Letter of Commendation from Commanding Officer for "exceptional dedication and transformational leadership"',
        'Selected for early discharge to pursue federal civilian career opportunity'
      ],
      photos: [],
      skills: ['Strategic Transition', 'Civilian Leadership', 'Legacy Building', 'Knowledge Transfer', 'Educational Achievement', 'Program Development', 'Federal Transition', 'Career Planning'],
      impact: 'Completed an exemplary military career that established the foundation for continued success in federal service. The leadership principles, financial expertise, and process improvement mindset developed during 5 years of distinguished naval service continues to drive exceptional performance in civilian roles, enabling rapid advancement to senior GS-14 positions and recognition as a transformational leader in defense financial management.'
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
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-secondary"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <div className="pr-12">
            <div className="flex items-center gap-3 mb-4">
              <entry.icon className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-2xl font-bold">{entry.title}</h3>
                <p className="text-lg text-secondary">{entry.subtitle}</p>
                <p className="text-sm text-tertiary">{entry.date} • {entry.location}</p>
              </div>
            </div>

            <p className="text-lg mb-6">{entry.description}</p>

            {entry.expandedContent.photos.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-primary">Photos</h4>
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
                <h4 className="text-lg font-semibold mb-3 text-primary">Key Achievements</h4>
                <ul className="space-y-2">
                  {entry.expandedContent.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Skills Developed</h4>
                <div className="flex flex-wrap gap-2">
                  {entry.expandedContent.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dystopian'
                          ? 'bg-accent/20 text-accent border border-accent/30'
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
              <h4 className="text-lg font-semibold mb-3 text-primary">Impact & Legacy</h4>
              <p className={`p-4 rounded-lg ${
                theme === 'dystopian'
                  ? 'bg-surface-secondary border-l-4 border-accent'
                  : 'bg-surface-secondary border-l-4 border-primary'
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
                        <h3 className="text-xl font-bold mb-1">{entry.title}</h3>
                        <h4 className="text-lg text-secondary mb-1">{entry.subtitle}</h4>
                        <p className="text-sm text-tertiary">{entry.location}</p>
                      </div>
                      
                      {entry.expandedContent && (
                        <button
                          onClick={() => setExpandedEntry(entry)}
                          className={`p-2 rounded-full transition-all hover:scale-110 ${
                            theme === 'dystopian'
                              ? 'bg-accent/20 hover:bg-accent/30 text-accent'
                              : 'bg-primary/20 hover:bg-primary/30 text-primary'
                          }`}
                          title="View Details"
                        >
                          <FaExpand className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    
                    <p className="text-sm leading-relaxed mb-4">{entry.description}</p>
                    
                    {entry.expandedContent && (
                      <motion.button
                        onClick={() => setExpandedEntry(entry)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          theme === 'dystopian'
                            ? 'bg-accent/20 hover:bg-accent/30 text-accent border border-accent/30'
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
