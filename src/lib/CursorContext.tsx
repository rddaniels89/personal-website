'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CursorType = 'default' | 'hover' | 'text' | 'loading' | 'disabled';

interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const value = {
    cursorType,
    setCursorType,
    cursorText,
    setCursorText,
    isVisible,
    setIsVisible,
  };

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  );
}; 
