import * as React from "react";
import { useTheme } from '@/lib/ThemeContext';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  const { theme } = useTheme();
  
  return (
    <div
      className={`rounded-lg border-2 ${className}`}
      style={{
        backgroundColor: theme === 'dystopian' ? '#030a21' : '#FFFFFF',
        borderColor: theme === 'dystopian' ? '#083e12' : undefined
      }}
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