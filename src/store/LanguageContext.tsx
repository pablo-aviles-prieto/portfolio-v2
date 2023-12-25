import { useState, createContext } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

type Props = {
  children: ReactNode;
};

type LanguageContextType = {
  language: 'es' | 'en';
  setLanguage: Dispatch<SetStateAction<'es' | 'en'>>;
};

const defaultLanguageContext: LanguageContextType = {
  language: 'es',
  setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(
  defaultLanguageContext
);

export const LanguageProvider = ({ children }: Props) => {
  const defaultLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
  const [language, setLanguage] = useState<'es' | 'en'>(defaultLanguage);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
