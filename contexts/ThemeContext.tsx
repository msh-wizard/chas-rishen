'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: 'light' | 'dark';
  isLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');
  const [isLoaded, setIsLoaded] = useState(false);

  // Завантаження теми з localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme') as Theme;
      if (saved && (saved === 'light' || saved === 'dark' || saved === 'system')) {
        setTheme(saved);
      }
    } catch (error) {
      console.error('Error loading theme from localStorage:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Застосування теми
  useEffect(() => {
    if (!isLoaded) return; // Не застосовувати до завантаження
    
    const root = window.document.documentElement;
    
    let effective: 'light' | 'dark' = 'light';
    
    if (theme === 'system') {
      effective = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      effective = theme;
    }
    
    setEffectiveTheme(effective);
    
    root.classList.remove('light', 'dark');
    root.classList.add(effective);
    
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
  }, [theme, isLoaded]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, effectiveTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}