import { type ReactNode, useState, createContext } from 'react';

type Props = {
  children: ReactNode;
};

type LanguageContextType = {
  language: 'es' | 'en';
  changeLanguage: (lang: 'en' | 'es') => void;
};

const defaultLanguageContext: LanguageContextType = {
  language: 'es',
  changeLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(
  defaultLanguageContext
);

export const LanguageProvider = ({ children }: Props) => {
  const storedLanguage = localStorage.getItem('portfolioLang') as
    | 'es'
    | 'en'
    | null;
  const defaultLanguage =
    storedLanguage || (navigator.language.startsWith('es') ? 'es' : 'en');
  const [language, setLanguage] = useState<'es' | 'en'>(defaultLanguage);

  const changeLanguage = (lang: 'en' | 'es') => {
    setLanguage(lang);
    localStorage.setItem('portfolioLang', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
