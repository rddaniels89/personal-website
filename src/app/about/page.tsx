'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaCogs, FaTools, FaGraduationCap, FaUsers, FaAnchor, FaMedal } from 'react-icons/fa';

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

  return (
    <div className={`min-h-screen ${
      theme === 'dystopian' ? 'bg-cyber-black' : 'bg-modern-black'
    }`}>
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
              <h1 className={`text-4xl font-bold mb-6 ${
                theme === 'dystopian'
                  ? 'neon-text text-neon-pink'
                  : 'gradient-text'
              }`}>
                About Me
              </h1>
              <div className={`prose max-w-none ${
                theme === 'dystopian'
                  ? 'text-gray-300'
                  : 'text-modern-text'
              }`}>
                <p className="text-lg mb-6">
                  Hi, I'm Roderick Daniels—tech enthusiast, business and finance strategist, Navy veteran, maker, and above all, a proud dad and husband.
                </p>
                <p className="mb-6">
                  I've spent over a decade working at the intersection of technology, finance, and operations, helping organizations and individuals unlock new levels of growth and efficiency. My professional world revolves around building better systems, making sense of numbers, and using smart automation (including a little AI magic) to solve complex problems.
                </p>
              </div>
            </div>
            
            <motion.div 
              variants={item}
              className={`relative aspect-[3/4] w-full max-w-md mx-auto ${
                theme === 'dystopian' 
                  ? 'ring-2 ring-neon-pink/50 shadow-neon-glow' 
                  : 'ring-2 ring-modern-accent/50 shadow-xl'
              } rounded-lg overflow-hidden`}
            >
              <Image
                src="/images/roderick-profile2.jpg"
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
            <div className={`prose max-w-none ${
              theme === 'dystopian'
                ? 'text-gray-300'
                : 'text-modern-text'
            }`}>
              <p className="mb-6">
                When I'm not diving into data or designing workflows, you'll find me in the garage woodworking, 3D printing creative projects, or on the basketball court trying to keep up with friends. I'm fueled by international travel, a deep love of great food, and the simple joys of family life. As a dad of two amazing girls and a husband, family is my daily motivation and greatest source of pride. I'm also a son, a brother, and a proud veteran of the United States Navy—a chapter that shaped my discipline, drive, and values.
              </p>
            </div>
          </motion.section>

          {/* What I Do */}
          <motion.section variants={item}>
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dystopian'
                ? 'text-neon-blue'
                : 'text-modern-accent'
            }`}>
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {areas.map((area) => (
                <motion.div
                  key={area.title}
                  variants={item}
                  className={`p-6 rounded-lg ${
                    theme === 'dystopian'
                      ? 'bg-cyber-gray border border-neon-pink/20'
                      : 'bg-modern-gray border border-modern-accent/20'
                  }`}
                >
                  <area.icon className={`w-6 h-6 mb-4 ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-modern-accent'
                  }`} />
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    {area.title}
                  </h3>
                  <p className={
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }>
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Values */}
          <motion.section variants={item}>
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dystopian'
                ? 'text-neon-blue'
                : 'text-modern-accent'
            }`}>
              What Drives Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={item}
                  className={`p-6 rounded-lg ${
                    theme === 'dystopian'
                      ? 'bg-cyber-gray border border-neon-pink/20'
                      : 'bg-modern-gray border border-modern-accent/20'
                  }`}
                >
                  <value.icon className={`w-6 h-6 mb-4 ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-modern-accent'
                  }`} />
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    {value.title}
                  </h3>
                  <p className={
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Family & Life */}
          <motion.section variants={item}>
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dystopian'
                ? 'text-neon-blue'
                : 'text-modern-accent'
            }`}>
              Family & Life
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div 
                variants={item}
                className={`relative aspect-[4/3] w-full max-w-md mx-auto ${
                  theme === 'dystopian' 
                    ? 'ring-2 ring-neon-pink/50 shadow-neon-glow' 
                    : 'ring-2 ring-modern-accent/50 shadow-xl'
                } rounded-xl overflow-hidden`}
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
              
              <div className={`prose max-w-none ${
                theme === 'dystopian'
                  ? 'text-gray-300'
                  : 'text-modern-text'
              }`}>
                <p className="text-lg mb-4">
                  Outside of work, I'm a devoted husband and dad of two girls. My family is my biggest inspiration and the heart of everything I do.
                </p>
                <p className="mb-4">
                  Whether we're exploring new places, working on home projects together, or just enjoying quiet family time, these moments keep me grounded and remind me what truly matters. Every professional goal I set is ultimately about creating a better future for them.
                </p>
              </div>
            </div>
          </motion.section>

          {/* My Navy Journey */}
          <motion.section variants={item}>
            <div className="flex items-center gap-3 mb-6">
              <FaAnchor className={`w-6 h-6 ${
                theme === 'dystopian'
                  ? 'text-neon-pink'
                  : 'text-modern-accent'
              }`} />
              <h2 className={`text-2xl font-bold ${
                theme === 'dystopian'
                  ? 'text-neon-blue'
                  : 'text-modern-accent'
              }`}>
                My Navy Journey
              </h2>
            </div>
            
            <div className={`prose max-w-none mb-8 ${
              theme === 'dystopian'
                ? 'text-gray-300'
                : 'text-modern-text'
            }`}>
              <p className="text-lg mb-6">
                My time in the United States Navy (2014-2019) was transformative, shaping not just my career but my character. Serving as a Financial Manager, I learned the importance of precision, accountability, and leadership under pressure. The Navy taught me that excellence isn't just a goal—it's a standard.
              </p>
              <p className="mb-6">
                Through multiple overseas deployments in support of combat and humanitarian operations, I experienced firsthand the power of teamwork, dedication, and mission-focused leadership. These experiences in high-stakes environments taught me to remain calm under pressure, think strategically, and always put the mission and my team first.
              </p>
            </div>

            {/* Navy Photo Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              <motion.div
                variants={item}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                  theme === 'dystopian' 
                    ? 'ring-2 ring-neon-blue/50 shadow-neon-glow' 
                    : 'ring-2 ring-modern-accent/50 shadow-xl'
                }`}
              >
                <Image
                  src="/images/roderick-navy0.jpg"
                  alt="Roderick Daniels - Navy Service Photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+on//Z"
                />
              </motion.div>
              
              <motion.div
                variants={item}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                  theme === 'dystopian' 
                    ? 'ring-2 ring-neon-blue/50 shadow-neon-glow' 
                    : 'ring-2 ring-modern-accent/50 shadow-xl'
                }`}
              >
                <Image
                  src="/images/roderick-navy1.jpg"
                  alt="Roderick Daniels - Navy Service Photo 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+on//Z"
                />
              </motion.div>
              
              <motion.div
                variants={item}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                  theme === 'dystopian' 
                    ? 'ring-2 ring-neon-blue/50 shadow-neon-glow' 
                    : 'ring-2 ring-modern-accent/50 shadow-xl'
                }`}
              >
                <Image
                  src="/images/roderick-navy2.webp"
                  alt="Roderick Daniels - Navy Service Photo 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+on//Z"
                />
              </motion.div>
              
              <motion.div
                variants={item}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                  theme === 'dystopian' 
                    ? 'ring-2 ring-neon-blue/50 shadow-neon-glow' 
                    : 'ring-2 ring-modern-accent/50 shadow-xl'
                }`}
              >
                <Image
                  src="/images/roderick-navy3.jpg"
                  alt="Roderick Daniels - Navy Service Photo 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+on//Z"
                />
              </motion.div>

              <motion.div
                variants={item}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                  theme === 'dystopian' 
                    ? 'ring-2 ring-neon-blue/50 shadow-neon-glow' 
                    : 'ring-2 ring-modern-accent/50 shadow-xl'
                }`}
              >
                <Image
                  src="/images/roderick-navy4.jpg"
                  alt="Roderick Daniels - Navy Service Photo 4"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+on//Z"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                variants={item}
                className={`p-6 rounded-lg ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray border border-neon-pink/20'
                    : 'bg-modern-gray border border-modern-accent/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaMedal className={`w-5 h-5 ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-modern-accent'
                  }`} />
                  <h3 className={`text-xl font-bold ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    Individual Awards
                  </h3>
                </div>
                <ul className={`space-y-1 ${
                  theme === 'dystopian'
                    ? 'text-gray-300'
                    : 'text-modern-text'
                }`}>
                  <li>• Navy and Marine Corps Achievement Medal (2x)</li>
                  <li>• Navy Good Conduct Medal</li>
                  <li>• National Defense Service Medal</li>
                  <li>• Global War on Terrorism Service Medal</li>
                  <li>• Global War on Terrorism Expeditionary Medal</li>
                  <li>• Operation Inherent Resolve Campaign Medal</li>
                  <li>• Operation Freedom's Sentinel (Afghanistan) Campaign Medal</li>
                  <li>• Navy Sea Service Deployment Ribbon (multiple)</li>
                  <li>• Navy "E" Ribbon (unit award)</li>
                  <li>• Letter of Commendation</li>
                  <li>• Certificate of Appreciation</li>
                </ul>
              </motion.div>

              <motion.div
                variants={item}
                className={`p-6 rounded-lg ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray border border-neon-pink/20'
                    : 'bg-modern-gray border border-modern-accent/20'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaUsers className={`w-5 h-5 ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-modern-accent'
                  }`} />
                  <h3 className={`text-xl font-bold ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    Team Excellence Awards
                  </h3>
                </div>
                <ul className={`space-y-1 mb-4 ${
                  theme === 'dystopian'
                    ? 'text-gray-300'
                    : 'text-modern-text'
                }`}>
                  <li>• Supply Blue 'E' Excellence Award (4x)</li>
                  <li>• Aircraft Intermediate Maintenance Black 'E' Award</li>
                </ul>
                
                <div className="mt-4">
                  <h4 className={`font-medium text-sm mb-2 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    Service Legacy
                  </h4>
                  <p className={`text-sm ${
                    theme === 'dystopian'
                      ? 'text-gray-400'
                      : 'text-modern-text/70'
                  }`}>
                    Multiple overseas deployments in support of combat and humanitarian operations, 
                    demonstrating leadership in high-stakes environments and unwavering commitment to mission success.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className={`mt-6 p-4 rounded-lg ${
              theme === 'dystopian'
                ? 'bg-cyber-gray/50 border border-neon-blue/20'
                : 'bg-modern-gray/50 border border-modern-accent/20'
            }`}>
              <p className={`text-center italic ${
                theme === 'dystopian'
                  ? 'text-gray-400'
                  : 'text-modern-text/70'
              }`}>
                "The values I learned in the Navy—integrity, courage, and commitment—continue to guide every decision I make, 
                whether I'm analyzing financial data, building automation tools, or teaching my daughters about perseverance."
              </p>
            </div>
          </motion.section>

          {/* Connect */}
          <motion.section variants={item}>
            <div className={`prose max-w-none ${
              theme === 'dystopian'
                ? 'text-gray-300'
                : 'text-modern-text'
            }`}>
              <p className="text-lg">
                I'm always interested in connecting with fellow builders, dreamers, and lifelong learners. If you're passionate about tech, business, or simply making life better (with a side of good food or travel recommendations), let's connect.
              </p>
              <p className="text-lg font-bold mt-4">
                Let's build something meaningful—on the web, in the workshop, or beyond.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
