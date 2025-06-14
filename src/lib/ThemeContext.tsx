'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dystopian' | 'modern';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dystopian'); // Always start with default for SSR
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'dystopian' || savedTheme === 'modern')) {
      setTheme(savedTheme);
    } else {
      // Set default theme if none saved
      localStorage.setItem('theme', 'dystopian');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dystopian' ? 'modern' : 'dystopian';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme class to body and html elements
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    
    // Remove existing theme classes
    body.classList.remove('theme-dystopian', 'theme-modern');
    html.classList.remove('theme-dystopian', 'theme-modern');
    
    // Add current theme class
    body.classList.add(`theme-${theme}`);
    html.classList.add(`theme-${theme}`);
    
    // Also update CSS custom properties for immediate visual feedback
    const root = document.documentElement;
    if (theme === 'dystopian') {
      root.style.setProperty('--color-background', '#080808');
      root.style.setProperty('--color-text', '#F8FAFC');
    } else {
      root.style.setProperty('--color-background', '#D0D0D0');
      root.style.setProperty('--color-text', '#000000');
    }
    
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [theme, isInitialized]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

 
