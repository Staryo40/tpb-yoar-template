import React, { createContext, useContext, useRef } from 'react';

interface ScrollContextType {
  registerRef: (key: string, ref: HTMLElement) => void;
  getRef: (key: string) => HTMLElement | null;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const refMap = useRef<{ [key: string]: HTMLElement | null }>({});

  const registerRef = (key: string, ref: HTMLElement) => {
    refMap.current[key] = ref;
  };

  const getRef = (key: string) => refMap.current[key] || null;

  return (
    <ScrollContext.Provider value={{ registerRef, getRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};