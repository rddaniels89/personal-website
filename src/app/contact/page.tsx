'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

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

export default function ContactPage() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${
      theme === 'dystopian' ? 'bg-cyber-black' : 'bg-modern-black'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={item}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`heading-1 text-center text-balance mb-6 ${
                theme === 'dystopian'
                  ? 'neon-text text-neon-pink'
                  : 'gradient-text'
              }`}
            >
              Get In Touch
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`text-lead text-center text-pretty max-w-2xl mx-auto mb-16 ${
                theme === 'dystopian'
                  ? 'text-gray-300'
                  : 'text-modern-text/80'
              }`}
            >
              Ready to discuss your next project, explore collaboration opportunities, 
              or just connect? I'd love to hear from you.
            </motion.p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === 'dystopian'
                      ? 'bg-cyber-gray border border-neon-pink/20 text-gray-300 focus:border-neon-pink'
                      : 'bg-modern-gray border border-modern-accent/20 text-modern-text focus:border-modern-accent'
                  } transition-colors duration-200`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === 'dystopian'
                      ? 'bg-cyber-gray border border-neon-pink/20 text-gray-300 focus:border-neon-pink'
                      : 'bg-modern-gray border border-modern-accent/20 text-modern-text focus:border-modern-accent'
                  } transition-colors duration-200`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className={`w-full px-4 py-2 rounded-lg ${
                    theme === 'dystopian'
                      ? 'bg-cyber-gray border border-neon-pink/20 text-gray-300 focus:border-neon-pink'
                      : 'bg-modern-gray border border-modern-accent/20 text-modern-text focus:border-modern-accent'
                  } transition-colors duration-200`}
                />
              </div>

              <motion.button
                type="submit"
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
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  theme === 'dystopian'
                    ? 'bg-neon-pink text-black hover:bg-neon-blue hover:shadow-[0_0_20px_rgba(255,0,110,0.5)] neon-border'
                    : 'bg-modern-accent text-white hover:bg-blue-600 hover:shadow-lg'
                }`}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item}>
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dystopian'
                ? 'text-neon-blue'
                : 'text-modern-accent'
            }`}>
              Connect With Me
            </h2>

            <div className="space-y-6">
              <motion.a
                href="mailto:roderick.daniels@example.com"
                whileHover={{ 
                  scale: 1.05,
                  x: 8
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
                className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray border border-neon-pink/20 hover:border-neon-pink/40 hover:shadow-[0_0_15px_rgba(255,0,110,0.2)]'
                    : 'bg-modern-gray border border-modern-accent/20 hover:border-modern-accent/40 hover:shadow-md'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMail className={`w-6 h-6 mr-4 ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-modern-accent'
                  }`} />
                </motion.div>
                <div>
                  <h3 className={`font-medium ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    Email
                  </h3>
                  <p className={
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }>
                    roderick.daniels@example.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/roderick-daniels/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  x: 8
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
                className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray border border-neon-pink/20 hover:border-neon-pink/40 hover:shadow-[0_0_15px_rgba(255,0,110,0.2)]'
                    : 'bg-modern-gray border border-modern-accent/20 hover:border-modern-accent/40 hover:shadow-md'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiLinkedin className={`w-6 h-6 mr-4 ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-modern-accent'
                  }`} />
                </motion.div>
                <div>
                  <h3 className={`font-medium ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    LinkedIn
                  </h3>
                  <p className={
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }>
                    Connect professionally
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/rddaniels89"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  x: 8
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
                className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                  theme === 'dystopian'
                    ? 'bg-cyber-gray border border-neon-pink/20 hover:border-neon-pink/40 hover:shadow-[0_0_15px_rgba(255,0,110,0.2)]'
                    : 'bg-modern-gray border border-modern-accent/20 hover:border-modern-accent/40 hover:shadow-md'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiGithub className={`w-6 h-6 mr-4 ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-modern-accent'
                  }`} />
                </motion.div>
                <div>
                  <h3 className={`font-medium ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    GitHub
                  </h3>
                  <p className={
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }>
                    View my projects
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 