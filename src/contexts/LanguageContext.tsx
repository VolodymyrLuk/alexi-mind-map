import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'uk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'header.cta': 'Start free on Telegram',
    
    // Hero
    'hero.headline': 'Understand what you feel—clearly, calmly, and with structure.',
    'hero.subheadline': 'A guided CBT diary that replaces vague "how are you?" with structured choices—emotion ladders, context tags, and weekly recall aids.',
    'hero.benefit1': 'Stop going blank with body‑first prompts',
    'hero.benefit1.desc': 'body scan and sensation selector',
    'hero.benefit2': 'Name emotions with step‑by‑step ladders',
    'hero.benefit2.desc': 'curated emotion identification ladders with intensity',
    'hero.benefit3': 'Remember your week in minutes',
    'hero.benefit3.desc': 'daily snapshots auto‑rolled into weekly recall',
    'hero.benefit4': 'Bring therapist‑ready summaries',
    'hero.benefit4.desc': 'structured thought records: situation → thought → evidence → reframe',
    'hero.cta.primary': 'Start free on Telegram',
    'hero.cta.secondary': 'See how it works',
    
    // Demo
    'demo.title': 'How AlexiTrack works',
    'demo.subtitle': 'Four simple steps from blank to clear',
    'demo.step1.title': 'Guided check-in',
    'demo.step1.desc': 'A two-minute guided check-in that replaces blank boxes with structured choices.',
    'demo.step2.title': 'Emotion ladders',
    'demo.step2.desc': 'Name emotions with step-by-step ladders and intensity for clearer self-awareness.',
    'demo.step3.title': 'Weekly recall',
    'demo.step3.desc': 'Weekly recall turns daily snapshots into highlights you can review in minutes.',
    'demo.step4.title': 'Therapist-ready export',
    'demo.step4.desc': 'Export therapist-ready summaries so sessions focus on progress, not guesswork.',
    'demo.pause': 'Pause',
    'demo.play': 'Play',
    'demo.previous': 'Previous slide',
    'demo.next': 'Next slide',
    'demo.slideLabel': 'Slide {{current}} of {{total}}',
    
    // Before section
    'before.title': 'Do check‑ins leave a blank space?',
    'before.pain1': 'When asked "How are you?" the mind goes blank, and it\'s hard to find words for what\'s happening inside.',
    'before.pain2': 'Emotions blur with body sensations—tight chest, heavy stomach, tense jaw—but there\'s no simple way to translate that into feelings.',
    'before.pain3': 'Therapy time gets lost trying to remember the week or label vague states, so sessions feel like going in circles.',
    'before.belief': 'It\'s not a motivation problem—most tools rely on open text boxes; structured scaffolds make awareness easier and faster.',
    
    // After section
    'after.title': 'Imagine clarity in two minutes a day.',
    'after.outcome1': 'Map sensations to likely feelings, and select needs with confidence.',
    'after.outcome2': 'See the week at a glance with recall highlights that turn into a session agenda.',
    'after.outcome3': 'Show up with therapist‑ready summaries so sessions focus on progress, not endless guessing.',
    'after.paradigm': 'AlexiTrack replaces vague prompts with guided ladders, body cues, and CBT thought records—less typing, more clarity.',
    
    // Bridge section
    'bridge.title': 'Introducing AlexiTrack Journal',
    'bridge.description': 'AlexiTrack Journal is a Telegram‑first CBT diary built for people who feel "blank," using scaffolded prompts, body‑based cues, and weekly recall to turn "I don\'t know" into usable therapy inputs.',
    'bridge.step1.title': 'Daily 2‑minute check‑in',
    'bridge.step1.desc': 'context, emotion ladder, optional note',
    'bridge.step2.title': 'Auto‑build weekly recall',
    'bridge.step2.desc': 'highlights from situations, thoughts, and reframes',
    'bridge.step3.title': 'Export therapist‑ready summary',
    'bridge.step3.desc': 'in one tap',
    'bridge.founder': 'This is for people who don\'t fit unstructured journals; by offering choices instead of blank boxes, clarity becomes routine.',
    'bridge.cta': 'Start free on Telegram—then bring clarity to therapy this week.',
    'bridge.urgency': 'Early access: premium exports at launch pricing.',
    
    // Features
    'features.title': 'Features built for clarity',
    'features.1.title': 'Emotion ladders with intensity scales',
    'features.1.desc': 'Step-by-step guidance from sensation to specific emotion',
    'features.2.title': 'Body‑sensation selector',
    'features.2.desc': 'jaw, chest, stomach, shoulders, hands',
    'features.3.title': 'Context tags and automatic thought prompts',
    'features.3.desc': 'Capture situations and trigger patterns',
    'features.4.title': 'Weekly recall aids',
    'features.4.desc': 'Session agenda builder from daily snapshots',
    'features.5.title': 'Therapist‑ready exports',
    'features.5.desc': 'PDF/CSV for CBT sessions',
    
    // Privacy
    'privacy.title': 'Privacy & Safety',
    'privacy.telegram': 'Telegram bots are not Secret Chats and are not end‑to‑end encrypted like Secret Chats; AlexiTrack minimizes data and will add compliant options as they become available.',
    'privacy.health': 'Sensitive health information should be shared with care; roadmap includes enhanced controls and compliant integrations before therapist portal rollout.',
    
    // Contact
    'contact.title': 'Have questions? Get in touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Your question',
    'contact.consent': 'I consent to being contacted about AlexiTrack',
    'contact.submit': 'Send message',
    'contact.success': 'Thank you! We\'ll get back to you soon.',
    
    // FAQ
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'How is this different from a regular journal app?',
    'faq.a1': 'AlexiTrack uses structured prompts and body-based cues instead of blank text boxes, making it easier to identify and name emotions when you feel "blank."',
    'faq.q2': 'Is my data secure in Telegram?',
    'faq.a2': 'Telegram bots are not end-to-end encrypted like Secret Chats. We minimize data collection and are working on enhanced privacy options.',
    'faq.q3': 'How do the therapist summaries work?',
    'faq.a3': 'Daily check-ins are automatically compiled into weekly summaries following CBT thought record structure (situation → thought → evidence → reframe).',
    'faq.q4': 'Is AlexiTrack free?',
    'faq.a4': 'Yes, the core features are free. Premium exports and advanced features will be available at launch pricing.',
    
    // Footer
    'footer.tagline': 'Turn "I don\'t know" into therapist‑ready insights.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.disclaimer': 'Telegram bot communication is not end-to-end encrypted. Use with appropriate care for sensitive information.',
  },
  uk: {
    // Header
    'header.cta': 'Почати в Telegram',
    
    // Hero
    'hero.headline': 'Зрозумійте, що ви відчуваєте—чітко, спокійно та структуровано.',
    'hero.subheadline': 'Керований щоденник КПТ, який замінює невиразне "як справи?" структурованими виборами—сходами емоцій, мітками контексту та тижневим оглядом.',
    'hero.benefit1': 'Припиніть залишатися порожніми з підказками від тіла',
    'hero.benefit1.desc': 'сканування тіла та вибір відчуттів',
    'hero.benefit2': 'Називайте емоції покроковими сходами',
    'hero.benefit2.desc': 'кураторські сходи ідентифікації емоцій з інтенсивністю',
    'hero.benefit3': 'Пам\'ятайте свій тиждень за хвилини',
    'hero.benefit3.desc': 'щоденні знімки автоматично перетворюються на тижневий огляд',
    'hero.benefit4': 'Приносьте готові підсумки для терапевта',
    'hero.benefit4.desc': 'структуровані записи думок: ситуація → думка → докази → переосмислення',
    'hero.cta.primary': 'Почати безкоштовно в Telegram',
    'hero.cta.secondary': 'Як це працює',
    
    // Demo
    'demo.title': 'Як працює AlexiTrack',
    'demo.subtitle': 'Чотири прості кроки від невизначеності до ясності',
    'demo.step1.title': 'Керована перевірка',
    'demo.step1.desc': 'Двохвилинна керована перевірка, яка замінює порожні поля структурованими виборами.',
    'demo.step2.title': 'Сходи емоцій',
    'demo.step2.desc': 'Називайте емоції за допомогою покрокових сходів та інтенсивності для чіткішого самоусвідомлення.',
    'demo.step3.title': 'Тижневий огляд',
    'demo.step3.desc': 'Тижневий огляд перетворює щоденні знімки на основні моменти, які ви можете переглянути за лічені хвилини.',
    'demo.step4.title': 'Експорт для терапевта',
    'demo.step4.desc': 'Експортуйте готові підсумки для терапевта, щоб сесії зосереджувалися на прогресі, а не на здогадках.',
    'demo.pause': 'Пауза',
    'demo.play': 'Грати',
    'demo.previous': 'Попередній слайд',
    'demo.next': 'Наступний слайд',
    'demo.slideLabel': 'Слайд {{current}} з {{total}}',
    
    // Before section
    'before.title': 'Чи залишають перевірки порожній простір?',
    'before.pain1': 'Коли запитують "Як справи?" розум стає порожнім, і важко знайти слова для того, що відбувається всередині.',
    'before.pain2': 'Емоції змішуються з тілесними відчуттями—стиснута грудна клітка, важкий живіт, напружена щелепа—але немає простого способу перекласти це на почуття.',
    'before.pain3': 'Час терапії витрачається на спроби згадати тиждень або позначити невиразні стани, тому сесії здаються кружлянням на місці.',
    'before.belief': 'Це не проблема мотивації—більшість інструментів покладаються на відкриті текстові поля; структуровані підпорки роблять усвідомлення легшим і швидшим.',
    
    // After section
    'after.title': 'Уявіть ясність за дві хвилини на день.',
    'after.outcome1': 'Зіставте відчуття з ймовірними почуттями та впевнено виберіть потреби.',
    'after.outcome2': 'Бачте тиждень з одного погляду з основними моментами пам\'яті, які перетворюються на порядок денний сесії.',
    'after.outcome3': 'З\'являйтеся з готовими підсумками для терапевта, щоб сесії зосереджувалися на прогресі, а не на нескінченних здогадках.',
    'after.paradigm': 'AlexiTrack замінює невиразні підказки керованими сходами, тілесними підказками та записами думок КПТ—менше друкування, більше ясності.',
    
    // Bridge section
    'bridge.title': 'Представляємо AlexiTrack Journal',
    'bridge.description': 'AlexiTrack Journal — це щоденник КПТ у Telegram, створений для людей, які відчувають "порожнечу", використовуючи структуровані підказки, тілесні сигнали та тижневу пам\'ять, щоб перетворити "я не знаю" на корисні терапевтичні дані.',
    'bridge.step1.title': 'Щоденна 2‑хвилинна перевірка',
    'bridge.step1.desc': 'контекст, сканування тіла, сходи емоцій, необов\'язкова нотатка',
    'bridge.step2.title': 'Автоматична побудова тижневого огляду',
    'bridge.step2.desc': 'основні моменти з ситуацій, думок та переосмислень',
    'bridge.step3.title': 'Експорт готових підсумків для терапевта',
    'bridge.step3.desc': 'одним дотиком',
    'bridge.founder': 'Це для людей, які не підходять до неструктурованих щоденників; починаючи з тіла та пропонуючи вибір замість порожніх полів, ясність стає звичною.',
    'bridge.cta': 'Почніть безкоштовно в Telegram—потім принесіть ясність до терапії цього тижня.',
    'bridge.urgency': 'Ранній доступ: преміум-експорт за початковою ціною.',
    
    // Features
    'features.title': 'Функції, створені для ясності',
    'features.1.title': 'Сходи емоцій зі шкалами інтенсивності',
    'features.1.desc': 'Покрокове керівництво від відчуття до конкретної емоції',
    'features.2.title': 'Вибір тілесних відчуттів',
    'features.2.desc': 'щелепа, грудна клітка, живіт, плечі, руки',
    'features.3.title': 'Мітки контексту та автоматичні підказки думок',
    'features.3.desc': 'Фіксуйте ситуації та шаблони тригерів',
    'features.4.title': 'Тижневі допомоги пам\'яті',
    'features.4.desc': 'Конструктор порядку денного сесії з щоденних знімків',
    'features.5.title': 'Експорт готових підсумків для терапевта',
    'features.5.desc': 'PDF/CSV для сесій КПТ',
    
    // Privacy
    'privacy.title': 'Приватність і безпека',
    'privacy.telegram': 'Боти Telegram не є секретними чатами і не мають наскрізного шифрування, як секретні чати; AlexiTrack мінімізує дані та додасть сумісні опції, як тільки вони стануть доступними.',
    'privacy.health': 'Чутливу інформацію про здоров\'я слід ділитися обережно; дорожня карта включає розширені елементи керування та сумісні інтеграції перед запуском порталу терапевта.',
    
    // Contact
    'contact.title': 'Є запитання? Зв\'яжіться з нами',
    'contact.name': 'Ім\'я',
    'contact.email': 'Електронна пошта',
    'contact.message': 'Ваше запитання',
    'contact.consent': 'Я даю згоду на контакт щодо AlexiTrack',
    'contact.submit': 'Надіслати повідомлення',
    'contact.success': 'Дякуємо! Ми зв\'яжемося з вами незабаром.',
    
    // FAQ
    'faq.title': 'Часті запитання',
    'faq.q1': 'Чим це відрізняється від звичайного додатка для щоденника?',
    'faq.a1': 'AlexiTrack використовує структуровані підказки та тілесні сигнали замість порожніх текстових полів, що полегшує ідентифікацію та називання емоцій, коли ви відчуваєте "порожнечу".',
    'faq.q2': 'Чи безпечні мої дані в Telegram?',
    'faq.a2': 'Боти Telegram не мають наскрізного шифрування, як секретні чати. Ми мінімізуємо збір даних і працюємо над розширеними опціями приватності.',
    'faq.q3': 'Як працюють підсумки для терапевта?',
    'faq.a3': 'Щоденні перевірки автоматично компілюються в тижневі підсумки за структурою записів думок КПТ (ситуація → думка → докази → переосмислення).',
    'faq.q4': 'Чи AlexiTrack безкоштовний?',
    'faq.a4': 'Так, основні функції безкоштовні. Преміум-експорт та розширені функції будуть доступні за стартовою ціною.',
    
    // Footer
    'footer.tagline': 'Перетворіть "я не знаю" на готові підсумки для терапевта.',
    'footer.privacy': 'Політика конфіденційності',
    'footer.terms': 'Умови використання',
    'footer.disclaimer': 'Спілкування з ботом Telegram не має наскрізного шифрування. Використовуйте з належною обережністю для чутливої інформації.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('alexitrack-language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('alexitrack-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
