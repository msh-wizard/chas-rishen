'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { watches } from '@/data/watches';
import WatchCard from '@/components/WatchCard';

export default function Home() {
  const { language, t, isLoaded } = useLanguage();``
  const popularWatches = watches.filter(w => w.available).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Тітул сайта */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-amber-950 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent dark:from-amber-900/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-6 animate-fadeInUp">
            {t.home.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-body max-w-3xl mx-auto mb-12 animate-fadeInUp animation-delay-200">
            {t.home.subtitle}
          </p>
          
          <Link
            href="/catalog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-medium rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp animation-delay-400"
          >
            {t.home.viewCatalog}
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Популярні годинники */}
      <section className="py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              {t.home.popular}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-700 to-amber-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularWatches.map((watch, index) => (
              <div
                key={watch.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <WatchCard watch={watch} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/catalog"
              className="inline-flex items-center text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 font-medium text-lg group"
            >
              {t.home.viewCatalog}
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Невелички факти */}
      <section className="py-20 bg-zinc-0 dark:bg-zinc-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isLoaded ? (
            // Skeleton loader поки завантажується
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center animate-pulse">
                  <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-700 rounded-2xl mx-auto mb-6"></div>
                  <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4 mx-auto mb-3"></div>
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-5/6 mx-auto"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                {language === 'uk' ? 'Автентичність' : 'Authenticity'}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-body">
                {language === 'uk' 
                  ? 'Кожен годинник має сертифікат автентичності' 
                  : 'Every watch comes with a certificate of authenticity'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                {language === 'uk' ? 'Майстерність' : 'Craftsmanship'}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-body">
                {language === 'uk' 
                  ? 'Швейцарська точність та увага до деталей' 
                  : 'Swiss precision and attention to detail'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                {language === 'uk' ? 'Пристрасть' : 'Passion'}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-body">
                {language === 'uk' 
                  ? 'Любов до годинникового мистецтва в кожній деталі' 
                  : 'Love for watchmaking in every detail'}
              </p>
            </div>
          </div>
          )}
        </div>
      </section>
    </div>
  );
}
