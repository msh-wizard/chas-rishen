'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { watches } from '@/data/watches';
import WatchCard from '@/components/WatchCard';

export default function CatalogPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-amber-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent dark:from-amber-900/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {t.catalog.title}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 font-body">
            {t.catalog.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {watches.map((watch, index) => (
              <div
                key={watch.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <WatchCard watch={watch} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
