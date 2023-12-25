import { useState, createContext } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

type Props = {
  children: ReactNode;
};

type LanguageContextType = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
};

const defaultLanguageContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextType>(
  defaultLanguageContext
);

export const LanguageProvider = ({ children }: Props) => {
  const defaultLanguage = navigator.language.startsWith('es') ? 'es' : 'en';
  const [language, setLanguage] = useState(defaultLanguage);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
