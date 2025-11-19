
import React, { useEffect } from 'react';
import { BrainCircuitIcon } from './icons';

interface AboutModalProps {
  onClose: () => void;
  translations: {
    title: string;
    content: string;
    close: string;
  };
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose, translations }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 sm:p-8 max-w-sm w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900/50 mb-4">
          <BrainCircuitIcon className="h-10 w-10 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 className="text-2xl font-semibold leading-6 text-slate-900 dark:text-white" id="modal-title">
          {translations.title}
        </h3>
        <div className="mt-4">
          <p className="text-lg text-slate-500 dark:text-slate-300">
            {translations.content}
          </p>
        </div>
        <div className="mt-8">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm dark:focus:ring-offset-slate-800"
            onClick={onClose}
          >
            {translations.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
