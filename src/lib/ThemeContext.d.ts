import { ReactNode } from 'react';

export type Theme = 'dystopian' | 'modern';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export function ThemeProvider(props: { children: ReactNode }): JSX.Element;
export function useTheme(): ThemeContextType; 