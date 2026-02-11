'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { watches } from '@/data/watches';
import { formatPrice } from '@/lib/formatPrice';

export default function WatchPage() {
  const params = useParams();
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const watch = watches.find(w => w.id === params.id);

  if (!watch) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {language === 'uk' ? 'Годинник не знайдено' : 'Watch not found'}
          </h1>
          <Link href="/catalog" className="text-amber-700 dark:text-amber-400 hover:underline">
            {language === 'uk' ? 'Повернутися до каталогу' : 'Return to catalog'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Стрілка каталогу */}
          <nav className="mb-8 flex items-center space-x-2 text-sm">
            <Link href="/" className="text-zinc-500 dark:text-zinc-400 hover:text-amber-700 dark:hover:text-amber-400">
              {t.nav.home}
            </Link>
            <span className="text-zinc-400">/</span>
            <Link href="/catalog" className="text-zinc-500 dark:text-zinc-400 hover:text-amber-700 dark:hover:text-amber-400">
              {t.nav.catalog}
            </Link>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-900 dark:text-zinc-100">{watch.name[language]}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Галерея */}
            <div className="space-y-4">
              {/* Головне зображення */}
              <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden">
                <Image
                  src={watch.images[selectedImage]}
                  alt={`${watch.name[language]} - ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {!watch.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-zinc-800 text-white px-6 py-3 rounded-full text-lg font-medium">
                      {t.watch.outOfStock}
                    </span>
                  </div>
                )}
              </div>

              {/* Вибір з галереї */}
              <div className="grid grid-cols-4 gap-4">
                {watch.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-amber-700 dark:border-amber-400 scale-105'
                        : 'border-transparent hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${watch.name[language]} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 12.5vw"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Деталі */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                  {watch.name[language]}
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 font-body">
                  {watch.shortDescription[language]}
                </p>
              </div>

              {/* Ціна та наявність */}
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                    {t.watch.price}
                  </span>
                  <span className="text-4xl font-bold text-amber-700 dark:text-amber-400">
                    {formatPrice(watch.price)} {watch.currency}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 mb-6">
                  <div className={`w-3 h-3 rounded-full ${watch.available ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={`font-medium ${watch.available ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {watch.available ? t.watch.available : t.watch.outOfStock}
                  </span>
                </div>

                {watch.available && (
                  <button className="w-full bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                    {t.watch.buyNow}
                  </button>
                )}
              </div>

              {/* Характеристика */}
              <div>
                <h2 className="text-2xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                  {t.watch.specifications}
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-3 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                      {language === 'uk' ? 'Механізм' : 'Movement'}
                    </span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right max-w-[60%]">
                      {watch.specifications.movement[language]}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                      {language === 'uk' ? 'Матеріал корпусу' : 'Case Material'}
                    </span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right max-w-[60%]">
                      {watch.specifications.caseMaterial[language]}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                      {language === 'uk' ? 'Діаметр' : 'Diameter'}
                    </span>
                    <span className="text-zinc-900 dark:text-zinc-100">
                      {watch.specifications.diameter}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                      {language === 'uk' ? 'Водонепроникність' : 'Water Resistance'}
                    </span>
                    <span className="text-zinc-900 dark:text-zinc-100">
                      {watch.specifications.waterResistance}
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-zinc-600 dark:text-zinc-400 font-medium">
                      {language === 'uk' ? 'Ремінець' : 'Strap'}
                    </span>
                    <span className="text-zinc-900 dark:text-zinc-100 text-right max-w-[60%]">
                      {watch.specifications.strap[language]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Повний опис */}
          <div className="mt-20 max-w-4xl">
            <h2 className="text-3xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-8">
              {t.watch.description}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {watch.fullDescription[language].split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-zinc-700 dark:text-zinc-300 font-body leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Повернутися до каталогу */}
          <div className="mt-12">
            <Link
              href="/catalog"
              className="inline-flex items-center text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300 font-medium group"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {language === 'uk' ? 'Повернутися до каталогу' : 'Back to catalog'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
