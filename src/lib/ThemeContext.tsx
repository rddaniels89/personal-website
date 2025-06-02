'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'dystopian' | 'modern';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dystopian');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dystopian' ? 'modern' : 'dystopian');
  };

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