'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.uk;
  isLoaded: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('uk');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Безпечне читання з localStorage тільки на клієнті
    try {
      const saved = localStorage.getItem('language') as Language;
      if (saved && (saved === 'uk' || saved === 'en')) {
        setLanguage(saved);
      }
    } catch (error) {
      console.error('Error loading language from localStorage:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (error) {
      console.error('Error saving language to localStorage:', error);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
        isLoaded,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}