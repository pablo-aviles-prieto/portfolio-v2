import { useState, createContext } from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type LanguageContextType = {
  language: 'es' | 'en';
  changeLanguage: (lang: 'en' | 'es') => void;
  // changeLanguage: Dispatch<SetStateAction<'es' | 'en'>>;
};

const defaultLanguageContext: LanguageContextType = {
  language: 'es',
  changeLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(
  defaultLanguageContext
);

// TODO: Before checking it from the navigator, check from localStorage
export const LanguageProvider = ({ children }: Props) => {
  const defaultLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
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
