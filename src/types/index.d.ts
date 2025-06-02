import * as React from 'react';

declare module '@/lib/ThemeContext' {
  export function ThemeProvider({ children }: { children: React.ReactNode }): React.ReactElement;
  export function useTheme(): { theme: 'dystopian' | 'modern'; toggleTheme: () => void };
}

declare module 'framer-motion' {
  export const motion: any;
}

declare module '*.svg' {
  const content: any;
  export default content;
} 