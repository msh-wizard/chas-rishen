'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { language, t } = useLanguage();

  const content = {
    uk: {
      story: {
        title: 'Наша історія',
        text: `Все почалося у 1987 році в невеликій майстерні на проспекті Соборному в Запоріжжі. Василь Петрович 
        , молодий годинникар із золотими руками, відкрив власну майстерню з ремонту годинників. У ті часи, коли 
        радянські годинники ламалися частіше, ніж хотілося, люди з усього міста несли свої "Ракети" та "Слави" до Василя. 
        Але Василь Петрович не хотів просто ремонтувати чужі годинники. Він мріяв створювати власні. Вечорами, коли 
        останній клієнт виходив з майстерні, він сідав за верстат і збирав свій перший годинник — механізм з деталей 
        старих швейцарських годинників, які йому вдалося дістати через знайомих. Корпус виточив власноруч на заводському 
        верстаті, циферблат розписав художник із місцевого будинку культури.

        Перший годинник "Коваленко" він подарував дружині на 10-річчя весілля. Вона носила його з такою гордістю, що друзі 
        почали питати: "Де таке взяти?" Так народився бренд. У 1990-ті, коли країна переживала важкі часи, Василь Петрович 
        не здався. Він почав збирати годинники на замовлення — кожен унікальний, кожен із історією. Запорізькі бізнесмени, 
        лікарі, вчителі — всі хотіли мати годинник від Коваленка. Це було не просто показником статусу, це був знак поваги 
        до майстерності.

        До 2000-х років про запорізького годинникаря говорили вже по всій Україні. Його годинники носили київські чиновники, 
        львівські митці, одеські підприємці. Кожен годинник Василь Петрович збирав особисто, вкладаючи частинку душі. Він казав: 
        "Годинник — це не просто механізм. Це свідок вашого життя, ваших рішень, ваших перемог".

        У 2010 році, після важкої хвороби, Василь Петрович прийняв найважче рішення — передати справу сину. Андрію тоді було 
        32 роки, він закінчив годинникову школу у Швейцарії, працював у найкращих закладах Женеви та Ла-Шо-де-Фона. Він 
        повернувся додому не просто з дипломом, а з мрією — вивести батьківський бренд на європейський ринок.`
      },
      mission: {
        title: 'Нова епоха',
        text: `Андрій Коваленко зберіг головне — філософію батька про те, що кожен годинник має душу. Але він привніс нові 
        технології, нові матеріали, нові можливості. Перше, що він зробив — відкрив невелику мануфактуру під Запоріжжям, де
        почав навчати молодих майстрів.

        Другий крок був сміливим — Андрій поїхав до Базеля на міжнародну годинникову виставку Baselworld. Він привіз три годинники, 
        зібрані за канонами батька, але з використанням сучасних швейцарських механізмів. Європейські колекціонери були вражені. Не 
        просто українські годинники — годинники світового рівня з українською душею.

        У 2012 році "Час Рішень" (так Андрій перейменував сімейний бренд на честь улюбленої фрази батька) відкрив перший бутік 
        у Празі. Потім Варшава. Відень. Берлін. Сьогодні наші годинники продаються у 15 країнах Європи.

        Але найважливіше залишилося незмінним — кожен годинник ми робимо так, ніби це останній годинник у нашому житті. 
        З повагою до традицій Василя Петровича, з любов'ю до майстерності, з вірою в те, що український виробник може створювати 
        речі світового класу.

        Сьогодні половину нашої команди складають майстри, яких навчав особисто Василь Петрович. Друга половина — молоді годинникарі, 
        які приїжджають до нас із Києва, Львова, Харкова, щоб навчитися створювати не просто годинники, а частинки історії.`
      },
      values: {
        title: 'Наші цінності',
        items: [
          {
            name: 'Українська майстерність',
            description: `Ми пишаємося тим, що наші годинники створені в Україні. Кожна деталь, кожен штрих — це праця українських 
            майстрів, які продовжують традиції Василя Коваленка.`
          },
          {
            name: 'Сімейні традиції',
            description: `Від батька до сина передається не лише майстерність, а й філософія: годинник має служити людині все 
            життя і переходити у спадок. Ми робимо годинники на покоління.`
          },
          {
            name: 'Індивідуальний підхід',
            description: `Як і Василь Петрович у своїй запорізькій майстерні, ми знаємо кожного клієнта особисто. Ми не просто 
            продаємо годинники — ми допомагаємо знайти той самий.`
          },
          {
            name: 'Якість понад усе',
            description: `Ми використовуємо швейцарські механізми, але збираємо їх за українською традицією — ретельно, з душею, з 
            розумінням, що цей годинник має пережити свого власника.`
          },
          {
            name: 'Чесність',
            description: `Якщо ми не можемо зробити щось ідеально — ми краще відмовимось. Репутація, яку будував Василь Петрович 30
             років, для нас дорожча за будь-який прибуток.`
          }
        ]
      },
      today: {
        title: 'Сьогодні',
        text: `Магазин "Час Рішень" у Києві — це не просто точка продажу. Це місце, де можна відчути історію. На стіні — фотографія
        Василя Петровича в його запорізькій майстерні, 1987 рік. Поруч — його перший верстак, привезений з Запоріжжя. І перший 
        годинник, який він подарував дружині.

        Ми відкриті для всіх, хто цінує майстерність. Приходять колекціонери, які шукають рідкісні моделі ще від Василя 
        Петровича. Приходять молоді люди, які купують свій перший серйозний годинник. Приходять іноземці, які хочуть побачити, 
        що може зробити український майстер.

        Кожен тиждень у нас проводиться безкоштовна консультація для всіх, хто хоче навчитися годинниковій справі. Це традиція, 
        яку заклав ще Василь Петрович — він завжди вірив, що знання треба передавати.

        Приходьте до нас. Ми розповімо вам історію кожного годинника. Покажемо, як працює механізм. Дозволимо відчути вагу 
        української майстерності на вашому зап'ясті. І, можливо, ви станете частиною нашої історії — історії, яка почалася в 
        запорізькій майстерні і продовжується сьогодні у ваших руках.`
      }
    },
    en: {
      story: {
        title: 'Our Story',
        text: `It all began in 1987 in a small workshop on Soborny Avenue in Zaporizhzhia. Vasyl Petrovych Kovalenko, a young 
        watchmaker with golden hands, opened his own watch repair shop. In those times, when Soviet watches broke more often 
        than desired, people from all over the city brought their "Raketas" and "Slavas" to Vasyl.

        But Vasyl Petrovych didn't want to just repair other people's watches. He dreamed of creating his own. In the evenings, 
        when the last client left the workshop, he would sit at his workbench and assemble his first watch — a mechanism from 
        parts of old Swiss watches that he managed to obtain through acquaintances. He turned the case himself on a factory lathe, 
        and a local cultural center artist painted the dial.

        He gifted the first "Kovalenko" watch to his wife on their 10th wedding anniversary. She wore it with such pride 
        that friends began asking: "Where can I get one?" Thus the brand was born.

        In the 1990s, when the country was going through hard times, Vasyl Petrovych didn't give up. He began assembling 
        custom watches — each unique, each with a story. Zaporizhzhia businessmen, doctors, teachers — everyone wanted a 
        Kovalenko watch. It wasn't just a status symbol, it was a sign of respect for craftsmanship.

        By the 2000s, the Zaporizhzhia watchmaker was already talked about throughout Ukraine. His watches were worn by 
        Kyiv officials, Lviv artists, Odesa entrepreneurs. Vasyl Petrovych assembled each watch personally, investing a 
        piece of his soul. He would say: "A watch is not just a mechanism. It's a witness to your life, your decisions, 
        your victories."

        In 2010, after a serious illness, Vasyl Petrovych made the hardest decision — to pass the business to his son. Andriy 
        was 32 years old then, he had graduated from a watchmaking school in Switzerland, worked at the best manufacturen in 
        Geneva and La Chaux-de-Fonds. He returned home not just with a diploma, but with a dream — to bring his father's brand 
        to the European market.`
      },
      mission: {
        title: 'A New Era',
        text: `Andriy Kovalenko preserved the main thing — his father's philosophy that every watch has a soul. But he brought 
        new technologies, new materials, new possibilities. The first thing he did was open a small manufacture near Zaporizhzhia, 
        where he began training young masters.

        The second step was bold — Andriy went to Basel for the international watch fair Baselworld. He brought three watches, 
        assembled according to his father's canons, but using modern Swiss movements. European collectors were impressed. Not just 
        Ukrainian watches — world-class watches with a Ukrainian soul.

        In 2012, "Chas Rishen" (as Andriy renamed the family brand in honor of his father's favorite phrase) opened its first 
        boutique in Prague. Then Warsaw. Vienna. Berlin. Today our watches are sold in 15 European countries.

        But the most important thing remained unchanged — we make each watch as if it were the last watch in our life. With respect 
        for Vasyl Petrovych's traditions, with love for craftsmanship, with faith that a Ukrainian manufacturer can create world-class 
        things.

        Today, half of our team consists of masters personally trained by Vasyl Petrovych. The other half are young watchmakers who 
        come to us from Kyiv, Lviv, Kharkiv to learn to create not just watches, but pieces of history.`
      },
      values: {
        title: 'Our Values',
        items: [
          {
            name: 'Ukrainian Craftsmanship',
            description: `We are proud that our watches are made in Ukraine. Every detail, every touch — is the work of Ukrainian 
            masters who continue the traditions of Vasyl Kovalenko.`
          },
          {
            name: 'Family Traditions',
            description: `From father to son passes not only craftsmanship, but also philosophy: a watch should serve a person 
            for life and be inherited. We make watches for generations.`
          },
          {
            name: 'Individual Approach',
            description: `Like Vasyl Petrovych in his Zaporizhzhia workshop, we know each client personally. We don't just sell 
            watches — we help find the right one.`
          },
          {
            name: 'Quality Above All',
            description: `We use Swiss movements, but assemble them according to Ukrainian tradition — carefully, with soul, 
            with understanding that this watch must outlive its owner.`
          },
          {
            name: 'Honesty',
            description: `If we cannot do something perfectly — we would rather refuse. The reputation that Vasyl Petrovych 
            built over 30 years is more valuable to us than any profit.`
          }
        ]
      },
      today: {
        title: 'Today',
        text: `The "Chas Rishen" store in Kyiv is not just a point of sale. It's a place where you can feel history. On the wall 
        — a photograph of Vasyl Petrovych in his Zaporizhzhia workshop, 1987. Nearby — his first workbench, brought from Zaporizhzhia. 
        And the first watch he gave to his wife.

        We are open to everyone who values craftsmanship. Collectors come looking for rare models from Vasyl Petrovych's time. 
        Young people come buying their first serious watch. Foreigners come wanting to see what a Ukrainian master can create.

        Every week we hold a free consultation for anyone who wants to learn watchmaking. This is a tradition established by Vasyl 
        Petrovych — he always believed that knowledge should be passed on.

        Come to us. We will tell you the story of each watch. We will show you how the mechanism works. We will let you feel the weight 
        of Ukrainian craftsmanship on your wrist. And perhaps you will become part of our story — a story that began in a Zaporizhzhia 
        workshop and continues today in your hands.`
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-amber-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent dark:from-amber-900/10"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {t.about.title}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Історія */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-8">
              {currentContent.story.title}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {currentContent.story.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-zinc-700 dark:text-zinc-300 font-body leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Ціль */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-8">
              {currentContent.mission.title}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {currentContent.mission.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-zinc-700 dark:text-zinc-300 font-body leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Цінності */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-8">
              {currentContent.values.title}
            </h2>
            <div className="space-y-8">
              {currentContent.values.items.map((value, index) => (
                <div 
                  key={index}
                  className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 hover:border-amber-700 dark:hover:border-amber-500 transition-colors"
                >
                  <h3 className="text-xl font-display font-bold text-amber-700 dark:text-amber-400 mb-3">
                    {value.name}
                  </h3>
                  <p className="text-zinc-700 dark:text-zinc-300 font-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Сьогодні */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 dark:text-zinc-100 mb-8">
              {currentContent.today.title}
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {currentContent.today.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-zinc-700 dark:text-zinc-300 font-body leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
