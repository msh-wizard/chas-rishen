export const translations = {
  uk: {
    nav: {
      home: 'Головна',
      catalog: 'Каталог',
      about: 'Про Нас',
    },
    home: {
      title: 'Час Рішень',
      subtitle: 'Кожен годинник — це історія, кожна секунда — можливість',
      popular: 'Популярні моделі',
      viewCatalog: 'Переглянути каталог',
    },
    catalog: {
      title: 'Каталог годинників',
      subtitle: 'Оберіть свій ідеальний годинник',
      viewDetails: 'Детальніше',
    },
    watch: {
      available: 'В наявності',
      outOfStock: 'Немає в наявності',
      price: 'Ціна',
      gallery: 'Галерея',
      description: 'Опис',
      specifications: 'Характеристики',
      buyNow: 'Придбати зараз',
    },
    about: {
      title: 'Про магазин «Час Рішень»',
      ourStory: 'Наша історія',
      mission: 'Місія',
      values: 'Цінності',
    },
    footer: {
      rights: 'Всі права захищені. Курсовий проєкт зробив студент групи КН-22, Данило Франк!',
    }
  },
  en: {
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      about: 'About Us',
    },
    home: {
      title: 'Chas Rishen',
      subtitle: 'Every watch is a story, every second is an opportunity',
      popular: 'Popular Models',
      viewCatalog: 'View Catalog',
    },
    catalog: {
      title: 'Watch Catalog',
      subtitle: 'Choose your perfect timepiece',
      viewDetails: 'View Details',
    },
    watch: {
      available: 'In Stock',
      outOfStock: 'Out of Stock',
      price: 'Price',
      gallery: 'Gallery',
      description: 'Description',
      specifications: 'Specifications',
      buyNow: 'Buy Now',
    },
    about: {
      title: 'About "Chas rishen"',
      ourStory: 'Our Story',
      mission: 'Mission',
      values: 'Values',
    },
    footer: {
      rights: 'All rights reserved. The course project was made by Danylo Frank, a student in the computer sciene group of 2022!',
    }
  }
};

export type Language = 'uk' | 'en';
export type TranslationKey = typeof translations.uk;