import React from 'react';
import type { AppData, Language } from '../types';
import { ArrowTopRightOnSquareIcon } from './icons';

interface AppCardProps {
  app: AppData;
  language: Language;
  openSiteText: string;
}

const AppCard: React.FC<AppCardProps> = ({ app, language, openSiteText }) => {
  const IconComponent = app.icon;

  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl dark:shadow-slate-950/50 animate-fadeInUp"
      style={{ animationDelay: `${(app.id - 1) * 75}ms` }}
    >
      <div className="p-8">
        <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
          <div className="flex-shrink-0">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
              <IconComponent className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold text-slate-900 dark:text-white">
              {app.name[language]}
            </div>
          </div>
        </div>
        
        <p className="block mt-1 text-md leading-tight text-slate-500 dark:text-slate-400 min-h-[5em]">
          {app.description[language]}
        </p>
        
        <div className="mt-6">
          <a
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-slate-800 transition-colors"
          >
            {openSiteText}
            <ArrowTopRightOnSquareIcon className="ms-2 -me-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppCard;