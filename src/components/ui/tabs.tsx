import * as React from "react";
import { useTheme } from '@/lib/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

const TabsContext = React.createContext<{
  value: string;
  setValue: (value: string) => void;
}>({ value: '', setValue: () => {} });

export function Tabs({ defaultValue, children }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className="space-y-4">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: TabsListProps) {
  const { theme } = useTheme();

  return (
          <div className={`inline-flex p-1 rounded-lg ${
        theme === 'dystopian'
          ? 'border-2'
          : 'bg-modern-gray/50 border border-modern-accent/20'
      } ${className}`}
      style={{
        backgroundColor: theme === 'dystopian' ? '#030a21' : undefined,
        borderColor: theme === 'dystopian' ? '#083e12' : undefined
      }}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const { value: selectedValue, setValue } = React.useContext(TabsContext);
  const { theme } = useTheme();
  const isSelected = value === selectedValue;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setValue(value)}
      className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
        isSelected
          ? theme === 'dystopian'
            ? 'text-neon-pink shadow-[0_0_15px_rgba(26,254,73,0.2)]'
            : 'bg-white text-modern-accent shadow-md'
          : theme === 'dystopian'
            ? 'text-gray-400 hover:text-gray-300'
            : 'text-gray-600 hover:text-gray-800'
      } ${className}`}
      style={{
        backgroundColor: isSelected && theme === 'dystopian' ? '#030a21' : undefined
      }}
    >
      {children}
    </motion.button>
  );
}

export function TabsContent({ value, children }: TabsContentProps) {
  const { value: selectedValue } = React.useContext(TabsContext);
  const isSelected = value === selectedValue;

  return (
    <AnimatePresence mode="wait">
      {isSelected && (
        <motion.div
          key={value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 