'use client';

import * as React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    href: 'https://github.com/rddaniels89',
    color: '#FF006E'
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/roderick-daniels/',
    color: '#9D00FF'
  }
];

export default function ContactPage() {
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={`min-h-screen ${
      theme === 'dystopian' ? 'bg-cyber-black' : 'bg-modern-black'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <div>
            <h1 className={`text-4xl font-bold mb-6 ${
              theme === 'dystopian'
                ? 'neon-text text-neon-pink'
                : 'gradient-text'
            }`}>
              Get in Touch
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-medium ${
                  theme === 'dystopian'
                    ? 'bg-neon-pink text-black hover:bg-neon-blue neon-border'
                    : 'bg-modern-accent text-white hover:bg-opacity-90'
                } transition-all duration-300`}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dystopian'
                ? 'text-neon-blue'
                : 'text-modern-accent'
            }`}>
              Connect With Me
            </h2>

            <div className="space-y-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center p-4 rounded-lg ${
                    theme === 'dystopian'
                      ? 'bg-cyber-gray border border-neon-pink/20 hover:border-neon-pink/50'
                      : 'bg-modern-gray border border-modern-accent/20 hover:border-modern-accent/50'
                  } transition-all duration-300`}
                >
                  <link.icon
                    className={`w-6 h-6 ${
                      theme === 'dystopian'
                        ? 'text-neon-pink'
                        : 'text-modern-accent'
                    }`}
                  />
                  <span className={`ml-4 ${
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }`}>
                    {link.name}
                  </span>
                </motion.a>
              ))}

              <div className={`p-6 rounded-lg ${
                theme === 'dystopian'
                  ? 'bg-cyber-gray border border-neon-blue/20'
                  : 'bg-modern-gray border border-modern-accent/20'
              }`}>
                <div className="flex items-center mb-4">
                  <FiMail className={`w-6 h-6 ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`} />
                  <h3 className={`ml-4 text-lg font-medium ${
                    theme === 'dystopian'
                      ? 'text-neon-blue'
                      : 'text-modern-accent'
                  }`}>
                    Email
                  </h3>
                </div>
                <p className={`${
                  theme === 'dystopian'
                    ? 'text-gray-300'
                    : 'text-modern-text'
                }`}>
                  contact@roderickdaniels.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 