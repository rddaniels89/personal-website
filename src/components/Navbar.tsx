'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/ThemeContext';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';

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

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-sm ${
      theme === 'dystopian' 
        ? 'bg-cyber-black/80 border-b border-neon-pink/20' 
        : 'bg-modern-black/80 border-b border-modern-accent/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-xl font-bold ${
              theme === 'dystopian' 
                ? 'neon-text text-neon-pink' 
                : 'gradient-text'
            }`}>
              RD
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center ${
                      theme === 'dystopian'
                        ? 'text-gray-300 hover:text-neon-blue hover:bg-cyber-gray'
                        : 'text-modern-text hover:text-modern-accent hover:bg-modern-gray'
                    } transition-colors duration-200`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <FiChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>

                  {item.dropdown && openDropdown === item.name && (
                    <div className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg ${
                      theme === 'dystopian'
                        ? 'bg-cyber-black border border-neon-pink/20'
                        : 'bg-modern-black border border-modern-accent/20'
                    }`}>
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`block px-4 py-2 text-sm ${
                              theme === 'dystopian'
                                ? 'text-gray-300 hover:text-neon-blue hover:bg-cyber-gray'
                                : 'text-modern-text hover:text-modern-accent hover:bg-modern-gray'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === 'dystopian' 
                    ? 'text-gray-400 hover:text-neon-pink' 
                    : 'text-modern-text hover:text-modern-accent'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md ${
                theme === 'dystopian'
                  ? 'text-neon-pink hover:bg-cyber-gray'
                  : 'text-modern-text hover:bg-modern-gray'
              }`}
            >
              {theme === 'dystopian' ? (
                <FiSun className="h-5 w-5" />
              ) : (
                <FiMoon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 