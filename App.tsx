import React, { useState, useEffect } from 'react';
import type { Theme, Language } from './types';
import { TRANSLATIONS, APPS_DATA } from './constants';
import Header from './components/Header';
import AppCard from './components/AppCard';
import AboutModal from './components/AboutModal';
import { EnvelopeIcon } from './components/icons';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('en');
  const [showAboutModal, setShowAboutModal] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.lang = language;
    root.dir = language === 'he' ? 'rtl' : 'ltr';
  }, [theme, language]);
  
  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300">
      <Header
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
        onAboutClick={() => setShowAboutModal(true)}
        translations={t.header}
      />
      
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-primary-600 dark:text-primary-400">
          {t.main.title}
        </h1>
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          {t.main.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APPS_DATA.map((app) => (
            <AppCard 
              key={app.id} 
              app={app} 
              language={language}
              openSiteText={t.appCard.openSite} 
            />
          ))}
        </div>
      </main>

      {showAboutModal && (
        <AboutModal
          onClose={() => setShowAboutModal(false)}
          translations={t.aboutModal}
        />
      )}
      
      <footer className="text-center py-8 mt-12 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-slate-500 dark:text-slate-400">{t.footer.text}</p>
          <a 
            href="mailto:gold.noam@gmail.com"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors text-sm font-medium"
          >
            <EnvelopeIcon className="h-5 w-5" />
            <span>{t.footer.feedback}</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;