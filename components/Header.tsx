
import React from 'react';
import type { Theme, Language } from '../types';
import { SunIcon, MoonIcon, LanguageIcon, BrainCircuitIcon, EnvelopeIcon } from './icons';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  onAboutClick: () => void;
  translations: {
    title: string;
    about: string;
    feedback: string;
    language: string;
    theme: string;
  };
}

const Header: React.FC<HeaderProps> = ({
  theme,
  setTheme,
  language,
  setLanguage,
  onAboutClick,
  translations,
}) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };
  
  const langText = language === 'en' ? 'HE' : 'EN';

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <BrainCircuitIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              {translations.title}
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="mailto:goldnoamai@gmail.com"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
            >
              <EnvelopeIcon className="h-4 w-4" />
              {translations.feedback}
            </a>

            <button
              onClick={onAboutClick}
              className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
            >
              {translations.about}
            </button>
            
            <div className="flex items-center space-x-2 border-s border-slate-200 dark:border-slate-700 ps-2 sm:ps-4">
              <button
                onClick={toggleLanguage}
                aria-label={translations.language}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                <LanguageIcon className="h-5 w-5" />
                 <span className="text-xs font-semibold">{langText}</span>
              </button>

              <button
                onClick={toggleTheme}
                aria-label={translations.theme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'light' ? (
                  <MoonIcon className="h-5 w-5" />
                ) : (
                  <SunIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
