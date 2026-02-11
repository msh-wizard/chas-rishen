import { StaticImageData } from 'next/image';

export interface Watch {
  id: string;
  name: {
    uk: string;
    en: string;
  };
  price: number;
  currency: string;
  available: boolean;
  images: StaticImageData[];
  shortDescription: {
    uk: string;
    en: string;
  };
  fullDescription: {
    uk: string;
    en: string;
  };
  specifications: {
    movement: {
      uk: string;
      en: string;
    };
    caseMaterial: {
      uk: string;
      en: string;
    };
    diameter: string;
    waterResistance: string;
    strap: {
      uk: string;
      en: string;
    };
  };
}

export const watches: Watch[] = [
  {
    id: 'lunar-explorer',
    name: {
      uk: 'Lunar Explorer',
      en: 'Lunar Explorer',
    },
    price: 42500,
    currency: 'UAH',
    available: true,
    images: [
      require('./watch-images/lunar-explorer/1.jpg').default,
      require('./watch-images/lunar-explorer/2.jpg').default,
      require('./watch-images/lunar-explorer/3.jpg').default,
      require('./watch-images/lunar-explorer/4.jpg').default,
    ],
    shortDescription: {
      uk: 'Легендарний хронограф, що побував на Місяці та залишається іконою авіації та космічних досліджень',
      en: 'A legendary chronograph that went to the Moon and remains an icon of aviation and space exploration',
    },
    fullDescription: {
      uk: `Цей хронограф має унікальну історію, адже саме ця модель супроводжувала астронавтів NASA під час місії Apollo 11 у 1969 році. 
      Годинник оснащений легендарним мануфактурним механізмом калібру 1861, що є прямим нащадком оригінального калібру 321. Характерний 
      чорний циферблат з трьома суб-циферблатами та тахіметрична шкала на безелі роблять його впізнаваним з першого погляду. Корпус 
      виготовлений з нержавіючої сталі та має ідеальні пропорції 42 мм. Hesalite-скло, як і в оригінальних моделях, додає автентичності. 
      Водонепроникність до 50 метрів дозволяє використовувати годинник щодня. Це не просто інструмент для вимірювання часу, а справжній 
      символ людських досягнень. Кожна деталь продумана до найменших нюансів. Браслет з нержавіючої сталі ідеально доповнює дизайн. Цей 
      годинник залишається бестселером понад півстоліття. Справжня модель: Omega Speedmaster Professional Moonwatch`,

      en: `This chronograph has a unique history, as this exact model accompanied NASA astronauts during the Apollo 11 mission in 1969. 
      The watch is equipped with the legendary manufacture movement caliber 1861, a direct descendant of the original caliber 321. The 
      characteristic black dial with three sub-dials and tachymeter scale on the bezel make it instantly recognizable. The stainless steel 
      case has perfect 42mm proportions. The Hesalite crystal, like in the original models, adds authenticity. Water resistance to 50 meters 
      allows for daily wear. This is not just a time-measuring instrument but a true symbol of human achievement. Every detail is thought 
      through to the smallest nuance. The stainless steel bracelet perfectly complements the design. This watch has remained a bestseller
      for over half a century.`,
    },
    specifications: {
      movement: {
        uk: 'Мануфактурний механічний з ручним заводом, калібр 1861',
        en: 'Manual-wind manufacture mechanical, caliber 1861',
      },
      caseMaterial: {
        uk: 'Нержавіюча сталь',
        en: 'Stainless steel',
      },
      diameter: '42 mm',
      waterResistance: '50 m',
      strap: {
        uk: 'Браслет з нержавіючої сталі',
        en: 'Stainless steel bracelet',
      },
    },
  },
  {
    id: 'submariner-classic',
    name: {
      uk: 'Submariner Classic',
      en: 'Submariner Classic',
    },
    price: 68900,
    currency: 'UAH',
    available: true,
    images: [
      require('./watch-images/submariner-classic/1.jpg').default,
      require('./watch-images/submariner-classic/2.jpg').default,
      require('./watch-images/submariner-classic/3.jpg').default,
    ],
    shortDescription: {
      uk: 'Еталонний дайверський годинник, що встановив стандарти для всієї індустрії водонепроникних годинників',
      en: 'The definitive dive watch that set standards for the entire waterproof watch industry',
    },
    fullDescription: {
      uk: `Представлений у 1953 році, цей годинник став першим у світі водонепроникним годинником до 100 метрів. Iconic обертовий безель 
      з керамічним вкладишем Cerachrom забезпечує точний контроль часу занурення. Механізм калібру 3235 гарантує точність -2/+2 секунди 
      на день та запас ходу 70 годин. Oyster-корпус з монолітної нержавіючої сталі 904L забезпечує неперевершену надійність. Циферблат 
      з великими люмінесцентними індексами Chromalight забезпечує чудову читабельність під водою. Triplock-заводна головка з потрійною 
      системою герметизації гарантує водонепроникність до 300 метрів. Сапфірове скло з циклопічною лінзою над датою стало фірмовою ознакою. 
      Браслет Oyster з системою Glidelock дозволяє точно підігнати розмір. Цей годинник поєднує елегантність та функціональність. Він 
      однаково доречний як у діловому костюмі, так і в дайверському спорядженні. Справжня модель: Rolex Submariner Date`,

      en: `Introduced in 1953, this watch became the world's first waterproof watch to 100 meters. The iconic rotating bezel with Cerachrom 
      ceramic insert ensures precise dive time control. The caliber 3235 movement guarantees accuracy of -2/+2 seconds per day and 70-hour 
      power reserve. The Oyster case from monobloc 904L stainless steel provides unmatched reliability. The dial with large luminescent 
      Chromalight indexes ensures excellent underwater readability. The Triplock winding crown with triple sealing system guarantees water 
      resistance to 300 meters. The sapphire crystal with cyclops lens over the date has become a signature feature. The Oyster bracelet with 
      Glidelock system allows precise size adjustment. This watch combines elegance and functionality. It's equally appropriate in a business 
      suit or diving gear. Actual Model: Rolex Submariner Date`,
    },
    specifications: {
      movement: {
        uk: 'Автоматичний мануфактурний, калібр 3235',
        en: 'Automatic manufacture, caliber 3235',
      },
      caseMaterial: {
        uk: 'Нержавіюча сталь Oystersteel (904L)',
        en: ' Oystersteel stainless steel (904L)',
      },
      diameter: '41 mm',
      waterResistance: '300 m',
      strap: {
        uk: 'Браслет Oyster з нержавіючої сталі',
        en: 'Oyster stainless steel bracelet',
      },
    },
  },
  {
    id: 'royal-heritage',
    name: {
      uk: 'Royal Oak Heritage',
      en: 'Royal Oak Heritage',
    },
    price: 35750,
    currency: 'UAH',
    available: true,
    images: [
      require('./watch-images/royal-heritage/1.jpg').default,
      require('./watch-images/royal-heritage/2.jpg').default,
      require('./watch-images/royal-heritage/3.jpg').default,
      require('./watch-images/royal-heritage/4.jpg').default,
    ],
    shortDescription: {
      uk: 'Революційний сталевий спортивний годинник, що назавжди змінив уявлення про люксові годинники',
      en: 'A revolutionary steel sports watch that forever changed perceptions of luxury timepieces',
    },
    fullDescription: {
      uk: `У 1972 році легендарний дизайнер Жеральд Жента створив годинник, що кинув виклик всім традиціям. Восьмикутний безель з вісьмома 
      видимими гвинтами нагадує ілюмінатор корабля. Інтегрований браслет став невід'ємною частиною дизайну та революцією в годинниковому 
      світі. Циферблат "Grande Tapisserie" з характерним візерунком ручної роботи є візитною карткою бренду. Ультратонкий автоматичний 
      механізм калібру 4302 забезпечує точність та надійність. Корпус з нержавіючої сталі обробляється вручну, поєднуючи полірування та 
      сатинування. Сапфірова задня кришка дозволяє милуватися мануфактурним механізмом. Водонепроникність до 50 метрів робить його 
      універсальним. Цей годинник довів, що сталь може бути люксовою. Він став одним з найвпізнаваніших дизайнів XX століття. 
      Сьогодні це об'єкт бажання колекціонерів по всьому світу. Справжня модель: Audemars Piguet Royal Oak`,

      en: `In 1972, legendary designer Gérald Genta created a watch that challenged all traditions. The octagonal bezel with eight visible 
      screws resembles a ship's porthole. The integrated bracelet became an integral part of the design and a revolution in the watch world. 
      The "Grande Tapisserie" dial with characteristic hand-crafted pattern is the brand's calling card. The ultra-thin automatic caliber 
      4302 movement ensures precision and reliability. The stainless steel case is hand-finished, combining polishing and satin-brushing. 
      The sapphire caseback allows admiration of the manufacture movement. Water resistance to 50 meters makes it versatile. This watch 
      proved that steel can be luxurious. It became one of the most recognizable designs of the 20th century. Today it's an object of 
      desire for collectors worldwide. Actual Model: Audemars Piguet Royal Oak`,
    },
    specifications: {
      movement: {
        uk: 'Автоматичний мануфактурний, калібр 4302',
        en: 'Automatic manufacture, caliber 4302',
      },
      caseMaterial: {
        uk: ' Нержавіюча сталь',
        en: 'Stainless steel',
      },
      diameter: '41 mm',
      waterResistance: '50 m',
      strap: {
        uk: 'Інтегрований браслет з нержавіючої сталі',
        en: 'Integrated stainless steel bracelet',
      },
    },
  },
  {
    id: 'nautilus-legend',
    name: {
      uk: 'Nautilus Legend',
      en: 'Nautilus Legend',
    },
    price: 89500,
    currency: 'UAH',
    available: false,
    images: [
      require('./watch-images/nautilus-legend/1.jpeg').default,
      require('./watch-images/nautilus-legend/2.jpeg').default,
      require('./watch-images/nautilus-legend/3.jpeg').default,
      require('./watch-images/nautilus-legend/4.jpeg').default,
    ],
    shortDescription: {
      uk: 'Елегантний спортивний годинник з унікальним дизайном, що став символом вишуканого стилю життя',
      en: 'An elegant sports watch with unique design that became a symbol of refined lifestyle',
    },
    fullDescription: {
      uk: `Створений тим самим Жеральдом Жента у 1976 році, цей годинник має характерний "портальний" дизайн корпусу. Горизонтальний рельєф 
      на циферблаті нагадує текстуру дерева тікового палубного покриття яхт. Надтонкий автоматичний механізм калібру 26-330 SC демонструє
       швейцарську точність найвищого рівня. Корпус з нержавіючої сталі має округлу восьмикутну форму з характерними "вушками". Сапфірова задня 
       кришка відкриває вид на вишукану обробку механізму. Інтегрований браслет з горизонтальними ланками є продовженням корпусу. 
       Водонепроникність до 120 метрів робить його справжнім спортивним годинником. Це один з найбільш затребуваних годинників у світі 
       з багаторічними списками очікування. Кожна деталь виконана з неперевершеною майстерністю. Він поєднує спортивну елегантність та 
       класичну вишуканість. Цей годинник став іконою преміального сегменту. Справжня модель: Patek Philippe Nautilus`,

      en: `Created by the same Gérald Genta in 1976, this watch has a characteristic "porthole" case design. The horizontal relief on the 
      dial resembles the texture of yacht teak deck covering. The ultra-thin automatic caliber 26-330 SC movement demonstrates Swiss precision
      at the highest level. The stainless steel case has a rounded octagonal shape with characteristic "ears." The sapphire caseback reveals 
      the exquisitely finished movement. The integrated bracelet with horizontal links is a continuation of the case. Water resistance to 120
      meters makes it a true sports watch. This is one of the most sought-after watches in the world with multi-year waiting lists. Every 
      detail is executed with unsurpassed craftsmanship. It combines sporty elegance and classic refinement. This watch has become an icon
      of the premium segment. Actual Model: Patek Philippe Nautilus`,
    },
    specifications: {
      movement: {
        uk: 'Автоматичний мануфактурний, калібр 26-330 SC',
        en: 'Automatic manufacture, caliber 26-330 SC',
      },
      caseMaterial: {
        uk: 'Нержавіюча сталь',
        en: 'Stainless steel',
      },
      diameter: '40 mm',
      waterResistance: '120 m',
      strap: {
        uk: 'Інтегрований браслет з нержавіючої сталі',
        en: 'Integrated stainless steel bracelet',
      },
    },
  },
  {
    id: 'portuguese-chronograph',
    name: {
      uk: 'Португальский хронограф',
      en: 'Portuguese Chronograph',
    },
    price: 52300,
    currency: 'UAH',
    available: true,
    images: [
      require('./watch-images/portuguese-chronograph/1.jpg').default,
      require('./watch-images/portuguese-chronograph/2.jpg').default,
      require('./watch-images/portuguese-chronograph/3.jpg').default,
      require('./watch-images/portuguese-chronograph/4.jpeg').default,
    ],
    shortDescription: {
      uk: 'Елегантний хронограф з морською історією, що поєднує точність морського хронометра та вишуканість дрес-вотча',
      en: 'An elegant chronograph with maritime history that combines marine chronometer precision and dress watch refinement',
    },
    fullDescription: {
      uk: `У 1930-х роках португальські торговці замовили годинник з точністю морського хронометра у зручному наручному форматі. Великий 
      циферблат з арабськими цифрами та вузькими довгими стрілками забезпечує відмінну читабельність. Сучасна версія оснащена мануфактурним 
      хронографічним механізмом калібру 69355. Два суб-циферблати розташовані симетрично та гармонійно вписані в загальну композицію. 
      Корпус з нержавіючої сталі має класичні пропорції 41 мм. Сапфірова задня кришка демонструє красиво оздоблений механізм з родієвим 
      покриттям. Шкіряний ремінець додає класичної елегантності. Водонепроникність до 30 метрів підходить для повсякденного носіння. Цей 
      годинник є прикладом вічного дизайну, що не підвладний модним тенденціям. Він однаково доречний з костюмом та в casual-образі. Хронограф 
      залишається одним з найпопулярніших годинників мануфактури. Справжня модель: IWC Portugieser Chronograph`,

      en: `In the 1930s, Portuguese merchants ordered a watch with marine chronometer precision in a convenient wrist format. The large dial 
      with Arabic numerals and narrow long hands ensures excellent readability. The modern version features the manufacture chronograph movement 
      caliber 69355. Two sub-dials are symmetrically positioned and harmoniously integrated into the overall composition. The stainless steel 
      case has classic 41mm proportions. The sapphire caseback showcases the beautifully finished movement with rhodium plating. The leather 
      strap adds classic elegance. Water resistance to 30 meters is suitable for daily wear. This watch is an example of timeless design 
      unaffected by fashion trends. It's equally appropriate with a suit or casual outfit. The Portugieser remains one of the manufacture's 
      most popular watches. Actual Model: IWC Portugieser Chronograph`,
    },
    specifications: {
      movement: {
        uk: 'Автоматичний мануфактурний хронограф, калібр 69355',
        en: 'Automatic manufacture chronograph, caliber 69355',
      },
      caseMaterial: {
        uk: 'Нержавіюча сталь',
        en: 'Stainless steel',
      },
      diameter: '41 mm',
      waterResistance: '30 m',
      strap: {
        uk: 'Шкіряний ремінець зі стальною застібкою',
        en: 'Leather strap with steel buckle',
      },
    },
  },
  {
    id: 'fifty-fathoms',
    name: {
      uk: 'Fifty Fathoms Diver',
      en: 'Fifty Fathoms Diver',
    },
    price: 28400,
    currency: 'UAH',
    available: true,
    images: [
      require('./watch-images/fifty-fathoms/1.jpg').default,
      require('./watch-images/fifty-fathoms/2.jpg').default,
      require('./watch-images/fifty-fathoms/3.jpg').default,
    ],
    shortDescription: {
      uk: 'Перший справжній сучасний дайверський годинник, створений професійним водолазом для професійних водолазів',
      en: 'Elegant simplicity in every detail — a watch for minimalism connoisseurs',
    },
    fullDescription: {
      uk: `У 1953 році співзасновник компанії та професійний водолаз Жан-Жак Фішлер створив годинник для французького флоту. Це був перший 
      годинник з обертовим безелем для контролю часу занурення. Сучасна версія зберігає всю автентичність оригіналу з сучасними технологіями. 
      Великі люмінесцентні індекси забезпечують чудову читабельність навіть у мутній воді. Сапфіровий безель з люмінесцентною міткою є 
      інноваційним рішенням. Автоматичний механізм калібру 1315 має запас ходу 5 днів та три барабани. Корпус з нержавіючої сталі забезпечує 
      водонепроникність до 300 метрів. Гелієвий клапан необхідний для сатураційних занурень. Це не просто годинник, а професійний інструмент 
      для дайвінгу. Він пройшов найсуворіші випробування в реальних умовах. Fifty Fathoms заклав фундамент для всієї категорії дайверських 
      годинників. Справжня модель: Blancpain Fifty Fathoms`,

      en: `In 1953, company co-founder and professional diver Jean-Jacques Fiechter created a watch for the French Navy. It was the first watch with a 
      rotating bezel for dive time control. The modern version preserves all the authenticity of the original with modern technology. Large luminescent 
      indexes ensure excellent readability even in murky water. The sapphire bezel with luminescent marker is an innovative solution. The automatic 
      caliber 1315 movement has a 5-day power reserve and three barrels. The stainless steel case ensures water resistance to 300 meters. A helium 
      valve is necessary for saturation diving. This is not just a watch but a professional diving instrument. It has passed the most rigorous tests 
      in real conditions. The Fifty Fathoms laid the foundation for the entire dive watch category. Actual Model: Blancpain Fifty Fathoms`,
    },
    specifications: {
      movement: {
        uk: 'Автоматичний мануфактурний, калібр 1315',
        en: 'Automatic manufacture, caliber 1315',
      },
      caseMaterial: {
        uk: 'Нержавіюча сталь',
        en: 'Stainless steel',
      },
      diameter: '42 mm',
      waterResistance: '300 m',
      strap: {
        uk: 'Парусиновий ремінець зі стальною застібкою',
        en: 'Canvas strap with steel buckle',
      },
    },
  },
];