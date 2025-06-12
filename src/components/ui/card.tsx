import * as React from "react";
import { useTheme } from '@/lib/ThemeContext';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  const { theme } = useTheme();
  
  return (
    <div
      className={`rounded-lg border ${
        theme === 'dystopian'
          ? 'bg-cyber-gray border-neon-pink/20'
          : 'bg-white border-modern-accent/20'
      } ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      className={`p-6 ${className}`}
      {...props}
    />
  );
} 