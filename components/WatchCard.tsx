'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Watch } from '@/data/watches';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatPrice } from '@/lib/formatPrice';

interface WatchCardProps {
  watch: Watch;
}

export default function WatchCard({ watch }: WatchCardProps) {
  const { language, t } = useLanguage();

  return (
    <Link href={`/watch/${watch.id}`} className="group">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={watch.images[0]}
            alt={watch.name[language]}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {!watch.available && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                {t.watch.outOfStock}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            {watch.name[language]}
          </h3>
          
          <p className="text-zinc-600 dark:text-zinc-400 font-body text-sm mb-4 line-clamp-2">
            {watch.shortDescription[language]}
          </p>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">
                {formatPrice(watch.price)} {watch.currency}
              </p>
              {watch.available && (
                <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">
                  {t.watch.available}
                </p>
              )}
            </div>
            
            <div className="text-amber-700 dark:text-amber-400 transform group-hover:translate-x-2 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
