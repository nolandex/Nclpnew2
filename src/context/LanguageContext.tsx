import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, translations } from "../lib/translations";

const STORAGE_KEY = "nexclass-locale";

const LanguageContext = createContext({
  locale: "id-ID" as Locale,
  setLocale: (l: Locale) => {},
  t: (key: string) => key,
  formatPrice: (price: number) => `$${price}`,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved as Locale]) return saved as Locale;
    } catch {
      // localStorage may be unavailable in some environments
    }
    return "id-ID";
  });

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    const lang = translations[locale] || translations["en-US"];
    document.documentElement.style.setProperty("--brand-accent", (lang as any).color);
    document.documentElement.dir = "ltr";
  }, [locale]);

  const t = (key: string) => {
    const lang = translations[locale] || translations["en-US"];
    return (lang as any)[key] || key;
  };
  const formatPrice = (price: number) => `$${price}`;
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, formatPrice }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
