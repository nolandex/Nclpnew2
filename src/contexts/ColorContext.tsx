import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { COURSE_LANGUAGES, LOCALE_TO_CODE, CourseLanguage } from "../lib/courseLanguages";

export type { CourseLanguage };
export const LANGUAGES = COURSE_LANGUAGES;

interface ColorContextValue {
  selectedLang: CourseLanguage;
}

const ColorContext = createContext<ColorContextValue>({
  selectedLang: COURSE_LANGUAGES[0],
});

export function ColorProvider({ children }: { children: ReactNode }) {
  const { locale } = useLanguage();

  const [selectedLang, setSelectedLang] = useState<CourseLanguage>(() => {
    const code = LOCALE_TO_CODE[locale] || "id";
    return COURSE_LANGUAGES.find((l) => l.code === code) || COURSE_LANGUAGES[0];
  });

  useEffect(() => {
    const code = LOCALE_TO_CODE[locale] || "id";
    const lang = COURSE_LANGUAGES.find((l) => l.code === code) || COURSE_LANGUAGES[0];
    setSelectedLang(lang);
  }, [locale]);

  return (
    <ColorContext.Provider value={{ selectedLang }}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  return useContext(ColorContext);
}
