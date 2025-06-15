'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from '@/lib/ThemeContext';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaChartLine, FaCogs, FaTools, FaGraduationCap, FaUsers, FaAnchor, FaMedal } from 'react-icons/fa';
import NavyTimeline from '@/components/NavyTimeline';
import TextTransition from '@/components/TextTransition';
import TextReveal from '@/components/TextReveal';

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

// Scroll-triggered animation variants
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const cardVariant = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 50,
      damping: 12
    }
  },
  hover: {
    scale: 1.02,
    y: -3,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  tap: {
    scale: 0.99,
    transition: {
      duration: 0.1
    }
  }
};

const iconAnimation = {
  hidden: { scale: 0.8, rotate: -45 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    rotate: 15,
    scale: 1.1,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px" 
  });
  
  return { ref, isInView };
};

const areas = [
  {
    title: 'Financial Analysis & Strategy',
    description: 'Transforming numbers into clarity and action.',
    icon: FaChartLine
  },
  {
    title: 'Tech & Automation',
    description: 'Bringing digital ideas to life, from AI workflows to custom tools.',
    icon: FaCode
  },
  {
    title: 'Business Ops',
    description: 'Streamlining processes for real, sustainable impact.',
    icon: FaCogs
  },
  {
    title: 'Creative Projects',
    description: 'Whether it\'s building a custom desk or prototyping with my 3D printer, I love creating things that last.',
    icon: FaTools
  }
];

const values = [
  {
    title: 'Integrity & Innovation',
    description: 'Proving that integrity and innovation can go hand in hand.',
    icon: FaGraduationCap
  },
  {
    title: 'Community Building',
    description: 'Building community and empowering others to succeed.',
    icon: FaUsers
  }
];

export default function AboutPage() {
  const { theme } = useTheme();
  
  // Refs for scroll animations
  const whatIDoRef = React.useRef(null);
  const whatDrivesMeRef = React.useRef(null);
  const familyRef = React.useRef(null);
  const navyJourneyRef = React.useRef(null);
  
  const whatIDoInView = useInView(whatIDoRef, { once: true, margin: "-50px" });
  const whatDrivesMeInView = useInView(whatDrivesMeRef, { once: true, margin: "-50px" });
  const familyInView = useInView(familyRef, { once: true, margin: "-50px" });
  const navyJourneyInView = useInView(navyJourneyRef, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* Introduction with Photo */}
          <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <TextReveal
                delay={0.2}
                duration={1.0}
                direction="left"
                className={`heading-1 text-center text-balance mb-8 ${
                  theme === 'dystopian'
                    ? 'neon-text text-glow'
                    : 'gradient-text'
                }`}
              >
                <h1>About Me</h1>
              </TextReveal>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lead text-center text-pretty max-w-3xl mx-auto mb-16"
              >
                Financial leader, technology enthusiast, and Navy veteran dedicated to driving 
                operational excellence through strategic innovation and data-driven solutions.
              </motion.p>
            </div>
            
            <motion.div 
              variants={item}
              className={`card relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg overflow-hidden ${
                theme === 'dystopian' 
                  ? 'hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]' 
                  : ''
              }`}
            >
              <Image
                src="/images/roderick-profile4.webp"
                alt="Roderick Daniels - Professional Photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                loading="eager"
              />
            </motion.div>
          </motion.section>

          {/* Additional Bio */}
          <motion.section variants={item}>
            <div className="prose max-w-none">
              <p className="mb-6 body-normal">
                When I'm not diving into data or designing workflows, you'll find me in the garage woodworking, 3D printing creative projects, or on the basketball court trying to keep up with friends. I'm fueled by international travel, a deep love of great food, and the simple joys of family life. As a dad of two amazing girls and a husband, family is my daily motivation and greatest source of pride. I'm also a son, a brother, and a proud veteran of the United States Navy—a chapter that shaped my discipline, drive, and values.
              </p>
            </div>
          </motion.section>

          {/* What I Do */}
          <motion.section
            ref={whatIDoRef}
            initial="hidden"
            animate={whatIDoInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="heading-2 mb-8"
            >
              What I Do
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {areas.map((area, index) => (
                <motion.div
                  key={area.title}
                  variants={cardVariant}
                  whileHover="hover"
                  whileTap="tap"
                  className={`card p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    theme === 'dystopian'
                      ? 'border-2 hover:shadow-[0_0_20px_rgba(26,254,73,0.1)]'
                      : 'bg-modern-gray border border-modern-accent/10 hover:border-modern-accent/30 hover:bg-white/90 hover:shadow-lg'
                  }`}
                  style={{
                    backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                    borderColor: theme === 'dystopian' ? '#083e12' : undefined
                  }}
                >
                  <motion.div
                    variants={iconAnimation}
                    className="mb-4"
                  >
                    <area.icon className={`w-6 h-6 transition-colors duration-300 ${
                      theme === 'dystopian'
                        ? 'text-neon-pink/90'
                        : 'text-modern-accent/90'
                    }`} />
                  </motion.div>
                  <h3 className={`heading-4 mb-3 transition-colors duration-300 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue/90'
                      : 'text-navy-blue/90'
                  }`}>
                    {area.title}
                  </h3>
                  <p className={`body-normal transition-colors duration-300 ${
                    theme === 'dystopian'
                      ? 'text-gray-300/90'
                      : 'text-modern-text/90'
                  }`}>
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Values */}
          <motion.section
            ref={whatDrivesMeRef}
            initial="hidden"
            animate={whatDrivesMeInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="heading-2 mb-8"
            >
              What Drives Me
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={cardVariant}
                  whileHover="hover"
                  whileTap="tap"
                  className={`card p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    theme === 'dystopian'
                      ? 'border-2 hover:shadow-[0_0_20px_rgba(26,254,73,0.1)]'
                      : 'bg-modern-gray border border-modern-accent/10 hover:border-modern-accent/30 hover:bg-white/90 hover:shadow-lg'
                  }`}
                  style={{
                    backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : undefined,
                    borderColor: theme === 'dystopian' ? '#083e12' : undefined
                  }}
                >
                  <motion.div
                    variants={iconAnimation}
                    className="mb-4"
                  >
                    <value.icon className={`w-6 h-6 transition-colors duration-300 ${
                      theme === 'dystopian'
                        ? 'text-neon-pink/90'
                        : 'text-modern-accent/90'
                    }`} />
                  </motion.div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue/90'
                      : 'text-navy-blue/90'
                  }`}>
                    {value.title}
                  </h3>
                  <p className={`body-normal transition-colors duration-300 ${
                    theme === 'dystopian'
                      ? 'text-gray-300/90'
                      : 'text-modern-text/90'
                  }`}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Family & Life */}
          <motion.section
            ref={familyRef}
            initial="hidden"
            animate={familyInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl font-bold mb-6 text-primary"
            >
              Family & Life
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <motion.div 
                variants={cardVariant}
                className={`card relative aspect-[4/3] w-full max-w-md mx-auto rounded-xl overflow-hidden ${
                  theme === 'dystopian' 
                    ? 'hover:shadow-[0_0_25px_rgba(61,67,180,0.3)]' 
                    : ''
                }`}
              >
                <Image
                  src="/images/roderick-wedding1.jpg"
                  alt="Roderick Daniels - Wedding Photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+on//Z"
                />
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="prose max-w-none"
              >
                <p className="text-lg mb-4 body-large">
                  Outside of work, I'm a devoted husband and dad of two girls. My family is my biggest inspiration and the heart of everything I do.
                </p>
                <p className="mb-4 body-normal">
                  Whether we're exploring new places, working on home projects together, or just enjoying quiet family time, these moments keep me grounded and remind me what truly matters. Every professional goal I set is ultimately about creating a better future for them.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* My Navy Journey */}
          <motion.section
            ref={navyJourneyRef}
            initial="hidden"
            animate={navyJourneyInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-3 mb-6"
            >
              <FaAnchor className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold text-primary">
                My Navy Journey
              </h2>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="prose max-w-none mb-8"
            >
              <p className="text-lg mb-6 body-large">
                My time in the United States Navy (2014-2019) was transformative, shaping not just my career but my character. Serving as a Financial Manager, I learned the importance of precision, accountability, and leadership under pressure. The Navy taught me that excellence isn't just a goal—it's a standard.
              </p>
              <p className="mb-6 body-normal">
                Through multiple overseas deployments in support of combat and humanitarian operations, I experienced firsthand the power of teamwork, dedication, and mission-focused leadership. These experiences in high-stakes environments taught me to remain calm under pressure, think strategically, and always put the mission and my team first.
              </p>
            </motion.div>

            {/* Interactive Navy Timeline */}
            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <NavyTimeline />
            </motion.div>

            {/* Awards Section */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
            >
              {/* Individual Awards */}
              <motion.div
                variants={cardVariant}
                className={`border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  theme === 'dystopian' 
                    ? 'glow-accent hover:shadow-[0_0_25px_rgba(26,254,73,0.2)]' 
                    : 'bg-surface border-border hover:border-primary'
                }`}
                style={{
                  backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : '#FFFFFF',
                  borderColor: theme === 'dystopian' ? '#083e12' : undefined
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dystopian' 
                      ? 'bg-primary/10 border border-primary/20' 
                      : 'bg-primary/10 border border-primary/20'
                  }`}>
                    <FaMedal className="text-primary w-5 h-5" />
                  </div>
                  <h3 className={`text-xl font-bold text-primary ${
                    theme === 'dystopian' ? 'font-heading' : ''
                  }`}>
                    Individual Awards
                  </h3>
                </div>
                <div className="space-y-3">
                  {[
                    'Navy and Marine Corps Achievement Medal (2x)',
                    'Navy Good Conduct Medal', 
                    'National Defense Service Medal',
                    'Global War on Terrorism Service Medal',
                    'Global War on Terrorism Expeditionary Medal',
                    'Operation Inherent Resolve Campaign Medal',
                    'Operation Freedom\'s Sentinel (Afghanistan) Campaign Medal',
                    'Navy Sea Service Deployment Ribbon (multiple)',
                    'Navy "E" Ribbon (unit award)',
                    'Letter of Commendation',
                    'Certificate of Appreciation'
                  ].map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-start p-2 rounded-lg transition-all duration-200 ${
                        theme === 'dystopian' 
                          ? 'hover:bg-primary/5 hover:border-l-2 hover:border-primary' 
                          : 'hover:bg-primary/5 hover:border-l-2 hover:border-primary'
                      }`}
                    >
                      <span className={`mr-3 mt-1 ${
                        theme === 'dystopian' 
                          ? 'text-primary text-lg' 
                          : 'text-primary text-lg'
                      }`}>▸</span>
                      <span className={`body-normal ${
                        theme === 'dystopian' ? 'text-text' : 'text-text'
                      }`}>
                        {award}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Team Excellence Awards */}
              <motion.div
                variants={cardVariant}
                className={`border-2 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  theme === 'dystopian' 
                    ? 'glow-accent hover:shadow-[0_0_25px_rgba(26,254,73,0.2)]' 
                    : 'bg-surface border-border hover:border-primary'
                }`}
                style={{
                  backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : '#FFFFFF',
                  borderColor: theme === 'dystopian' ? '#083e12' : undefined
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${
                    theme === 'dystopian' 
                      ? 'bg-accent/10 border border-accent/20' 
                      : 'bg-primary/10 border border-primary/20'
                  }`}>
                    <FaUsers className={`w-5 h-5 ${
                      theme === 'dystopian' ? 'text-accent' : 'text-primary'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-bold ${
                    theme === 'dystopian' ? 'text-accent font-heading' : 'text-primary'
                  }`}>
                    Team Excellence Awards
                  </h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  {[
                    'Supply Blue \'E\' Excellence Award (4x)',
                    'Aircraft Intermediate Maintenance Black \'E\' Award'
                  ].map((award, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className={`flex items-start p-3 rounded-lg transition-all duration-200 ${
                        theme === 'dystopian' 
                          ? 'hover:bg-accent/5 hover:border-l-2 hover:border-accent' 
                          : 'hover:bg-primary/5 hover:border-l-2 hover:border-primary'
                      }`}
                    >
                      <span className={`mr-3 mt-1 text-lg ${
                        theme === 'dystopian' ? 'text-accent' : 'text-primary'
                      }`}>★</span>
                      <span className="body-normal text-text font-medium">
                        {award}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                <div className={`border-t pt-4 ${
                  theme === 'dystopian' 
                    ? 'border-accent/20' 
                    : 'border-surface-secondary'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${
                      theme === 'dystopian' ? 'bg-highlight' : 'bg-primary'
                    }`}></div>
                    <h4 className={`font-semibold text-base ${
                      theme === 'dystopian' ? 'text-highlight font-heading' : 'text-primary'
                    }`}>
                      Service Legacy
                    </h4>
                  </div>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'dystopian' ? 'text-text-secondary' : 'text-secondary'
                  }`}>
                    Multiple overseas deployments in support of combat and humanitarian operations, 
                    demonstrating leadership in high-stakes environments and unwavering commitment to mission success.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className={`border-2 rounded-lg p-6 shadow-lg ${
                theme === 'dystopian'
                  ? 'glow-accent hover:shadow-[0_0_25px_rgba(26,254,73,0.2)]'
                  : 'bg-surface border-primary'
              }`}
              style={{
                backgroundColor: theme === 'dystopian' ? 'var(--color-background)' : '#FFFFFF',
                borderColor: theme === 'dystopian' ? '#083e12' : undefined
              }}
            >
              <p className="text-center italic text-tertiary text-lg leading-relaxed">
                "The values I learned in the Navy—integrity, courage, and commitment—continue to guide every decision I make, 
                whether I'm analyzing financial data, building automation tools, or teaching my daughters about perseverance."
              </p>
            </motion.div>
          </motion.section>

          {/* Connect */}
          <motion.section variants={item}>
            <div className="prose max-w-none">
              <p className="text-lg body-large">
                I'm always interested in connecting with fellow builders, dreamers, and lifelong learners. If you're passionate about tech, business, or simply making life better (with a side of good food or travel recommendations), let's connect.
              </p>
              <p className="text-lg font-bold mt-4 text-primary">
                Let's build something meaningful—on the web, in the workshop, or beyond.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
