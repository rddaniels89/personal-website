'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';
import Logo from './Logo';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Writing', href: '/writing' },
  {
    name: 'Resume',
    href: '/resume',
    dropdown: [
      { name: 'Overview', href: '/resume' },
      { name: 'Traditional Format', href: '/resume/traditional' },
      { name: 'Key Accomplishments', href: '/resume/accomplishments' }
    ]
  },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/rddaniels89', icon: FiGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/roderick-daniels/', icon: FiLinkedin },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = React.useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // 150ms delay before closing
    setCloseTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-sm transition-all duration-300 ${
      theme === 'dystopian' 
        ? 'bg-gray-900/90 border-b border-blue-500/20' 
        : 'bg-white/90 border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/" className="block">
                <Logo 
                  size="sm" 
                  variant="default" 
                  showTooltip={true}
                  animate={false}
                />
              </Link>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center transition-all duration-300 ${
                        theme === 'dystopian'
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <motion.div
                          animate={{ 
                            rotate: openDropdown === item.name ? 180 : 0 
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronDown className="ml-1 h-4 w-4" />
                        </motion.div>
                      )}
                    </Link>
                  </motion.div>

                  {item.dropdown && openDropdown === item.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute left-0 top-full w-48 rounded-md shadow-lg border ${
                        theme === 'dystopian'
                          ? 'bg-gray-900 border-blue-500/20'
                          : 'bg-white border-gray-200'
                      }`}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <motion.div
                            key={dropdownItem.name}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href={dropdownItem.href}
                              className={`block px-4 py-2 text-sm transition-all duration-200 ${
                                theme === 'dystopian'
                                  ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  y: -2
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`transition-all duration-300 ${
                  theme === 'dystopian'
                    ? 'text-gray-300 hover:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </motion.a>
            ))}
            
            <motion.button
              onClick={toggleTheme}
              whileHover={{ 
                scale: 1.1,
                rotate: 180
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`p-2 rounded-md transition-all duration-300 ${
                theme === 'dystopian'
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              <motion.div
                animate={{ rotate: theme === 'dystopian' ? 0 : 360 }}
                transition={{ duration: 0.5 }}
              >
                {theme === 'dystopian' ? (
                  <FiSun className="h-5 w-5" />
                ) : (
                  <FiMoon className="h-5 w-5" />
                )}
              </motion.div>
              <span className="sr-only">Toggle theme</span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
} 
