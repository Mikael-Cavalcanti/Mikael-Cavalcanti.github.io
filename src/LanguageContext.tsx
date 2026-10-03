import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations } from './translations';
import type { Language } from './types';

function initialLanguage(): Language {
  const query = new URLSearchParams(location.search).get('lang');
  if (query === 'en' || query === 'pt') return query;
  try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt'; }
  catch { return 'pt'; }
}

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
    document.title = language === 'en' ? 'Mikael Cavalcanti | Project terminal' : 'Mikael Cavalcanti | Terminal de projetos';
    const url = new URL(location.href);
    url.searchParams.set('lang', language);
    history.replaceState(null, '', url);
    try { localStorage.setItem('portfolio-language', language); } catch { /* Storage can be unavailable in private sessions. */ }
  }, [language]);
  const t = (text: string) => language === 'en' ? translations[text] ?? text : text;
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageProvider is required');
  return context;
}
