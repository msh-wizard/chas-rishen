'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <img src="favicon.ico"/>
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-amber-700 to-amber-900 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent">
              {t.home.title}
            </span>
          </Link>

          {/* Навігація */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-zinc-700 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 font-body transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link 
              href="/catalog" 
              className="text-zinc-700 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 font-body transition-colors"
            >
              {t.nav.catalog}
            </Link>
            <Link 
              href="/about" 
              className="text-zinc-700 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 font-body transition-colors"
            >
              {t.nav.about}
            </Link>
          </div>

          {/* Налаштування */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Вибір мови */}
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
              <button
                onClick={() => setLanguage('uk')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'uk'
                    ? 'bg-white dark:bg-zinc-700 text-amber-700 dark:text-amber-400 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                УКР 🇺🇦
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-white dark:bg-zinc-700 text-amber-700 dark:text-amber-400 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                ENG 🇬🇧
              </button>
            </div>

            {/* Вибір теми */}
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
              <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-md transition-all ${
                  theme === 'light'
                    ? 'bg-white dark:bg-zinc-700 text-amber-700 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
                }`}
                title="Light"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-md transition-all ${
                  theme === 'dark'
                    ? 'bg-white dark:bg-zinc-700 text-amber-400 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
                title="Dark"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
                            <button
                onClick={() => setTheme('system')}
                className={`p-2 rounded-md transition-all ${
                  theme === 'system'
                    ? 'bg-white dark:bg-zinc-700 text-amber-700 dark:text-amber-400 shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
                title="System"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Кнопка для мобільних пристроїв */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильне меню */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-zinc-200 dark:border-zinc-800">
            <Link 
              href="/" 
              className="block text-zinc-700 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 font-body"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link 
              href="/catalog" 
              className="block text-zinc-700 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 font-body"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.catalog}
            </Link>
            <Link 
              href="/about" 
              className="block text-zinc-700 dark:text-zinc-300 hover:text-amber-700 dark:hover:text-amber-400 font-body"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{language === 'uk' ? 'Мова' : 'Language'}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setLanguage('uk')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      language === 'uk'
                        ? 'bg-amber-700 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    УКР 🇺🇦
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      language === 'en'
                        ? 'bg-amber-700 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    ENG 🇬🇧
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{language === 'uk' ? 'Тема' : 'Theme'}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setTheme('light')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      theme === 'light'
                        ? 'bg-amber-700 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    ☀️
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      theme === 'dark'
                        ? 'bg-amber-700 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    🌙
                  </button>
                  <button
                    onClick={() => setTheme('system')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      theme === 'system'
                        ? 'bg-amber-700 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    💻
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
