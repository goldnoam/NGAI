
import type { AppData } from './types';
import {
  ChartBarIcon,
  SpeakerWaveIcon,
  GlobeAltIcon,
  SparklesIcon,
  PaintBrushIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
} from './components/icons';

export const APPS_DATA: AppData[] = [
  {
    id: 1,
    name: { en: 'SEO Expert', he: 'מומחה SEO' },
    description: { en: 'Boost your website\'s ranking with AI-driven SEO analysis and keyword suggestions.', he: 'שפר את דירוג האתר שלך עם ניתוח SEO מבוסס בינה מלאכותית והצעות למילות מפתח.' },
    link: 'https://seo-expert-mocha.vercel.app/',
    icon: ChartBarIcon,
  },
  {
    id: 2,
    name: { en: 'Decibel Meter', he: 'מד דציבלים' },
    description: { en: 'Measure sound levels in your environment with this simple and accurate decibel meter.', he: 'מדוד את עוצמת הרעש בסביבתך עם מד דציבלים פשוט ומדויק זה.' },
    link: 'https://decibel-meter.vercel.app/',
    icon: SpeakerWaveIcon,
  },
  {
    id: 3,
    name: { en: 'Relax Green', he: 'רוגע ירוק' },
    description: { en: 'Find your calm with soothing nature sounds and visuals for relaxation and meditation.', he: 'מצא את השלווה שלך עם צלילי טבע מרגיעים ותמונות להרגעה ומדיטציה.' },
    link: 'https://relax-green.vercel.app/',
    icon: GlobeAltIcon,
  },
  {
    id: 4,
    name: { en: 'Lunar Guide AR', he: 'מדריך ירח AR' },
    description: { en: 'Explore the moon in augmented reality. Learn about lunar phases and bless the moon.', he: 'חקור את הירח במציאות רבודה. למד על מופעי הירח וברך את הירח.' },
    link: 'https://lunar-guide-ar-bless-the-moon.vercel.app/',
    icon: SparklesIcon,
  },
  {
    id: 5,
    name: { en: 'Watermark Studio', he: 'סטודיו סימן מים' },
    description: { en: 'Protect your images by easily adding custom text or logo watermarks.', he: 'הגן על התמונות שלך על ידי הוספת סימני מים מותאמים אישית של טקסט או לוגו.' },
    link: 'https://watermark-studio-phi.vercel.app/',
    icon: PaintBrushIcon,
  },
  {
    id: 6,
    name: { en: 'My Future AI', he: 'העתיד שלי AI' },
    description: { en: 'Chat with an advanced AI to explore possibilities and get insights about your future.', he: 'שוחח עם בינה מלאכותית מתקדמת כדי לחקור אפשרויות ולקבל תובנות על עתידך.' },
    link: 'https://my-future-ai.vercel.app/',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 7,
    name: { en: 'Live People Counter', he: 'מונה אנשים חי' },
    description: { en: 'Utilize your camera to count people in real-time with our advanced vision AI.', he: 'השתמש במצלמה שלך כדי לספור אנשים בזמן אמת עם בינת הראייה המתקדמת שלנו.' },
    link: 'https://live-counting-people.vercel.app/',
    icon: UserGroupIcon,
  },
  {
    id: 8,
    name: { en: 'Noam Gold AI Games', he: 'משחקי נועם גולד AI' },
    description: { en: 'Play fun and interactive AI-powered games.', he: 'שחקו במשחקים מהנים ואינטראקטיביים מבוססי בינה מלאכותית.' },
    link: 'https://noam-gold-games.vercel.app/',
    icon: PuzzlePieceIcon,
  },
];


export const TRANSLATIONS = {
  en: {
    header: {
      title: 'NGAI',
      about: 'About',
      language: 'Language',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
    },
    main: {
        title: "Noam Gold's AI Portfolio",
        subtitle: 'A curated collection of next-generation tools powered by cutting-edge artificial intelligence. Explore the future of technology, today.'
    },
    appCard: {
        openSite: 'Open Site',
    },
    aboutModal: {
      title: 'About NGAI',
      content: 'Noam Gold AI - Next Generation tools 2025',
      close: 'Close',
    },
    footer: {
        text: '© 2025 Noam Gold AI. All rights reserved.',
        feedback: 'Send Feedback'
    }
  },
  he: {
    header: {
      title: 'NGAI',
      about: 'אודות',
      language: 'שפה',
      theme: 'ערכת נושא',
      light: 'בהיר',
      dark: 'כהה',
    },
    main: {
        title: "פורטפוליו הבינה המלאכותית של נועם גולד",
        subtitle: 'אוסף נבחר של כלים מהדור הבא המופעלים על ידי בינה מלאכותית מתקדמת. גלו את עתיד הטכנולוגיה, היום.'
    },
    appCard: {
        openSite: 'פתח אתר',
    },
    aboutModal: {
      title: 'אודות NGAI',
      content: 'Noam Gold AI - כלי הדור הבא 2025',
      close: 'סגור',
    },
    footer: {
        text: '© 2025 נועם גולד AI. כל הזכויות שמורות.',
        feedback: 'שלח משוב'
    }
  },
};
