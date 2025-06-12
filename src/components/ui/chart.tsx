'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';

interface ChartBarProps {
  percentage: number;
  label: string;
}

export function ChartBar({ percentage, label }: ChartBarProps) {
  const { theme } = useTheme();

  return (
    <div className="space-y-1">
      <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${
            theme === 'dystopian'
              ? 'bg-neon-pink'
              : 'bg-modern-accent'
          }`}
        />
      </div>
      <div className="flex justify-between text-xs">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
    </div>
  );
} 