import es from './es.json';
import en from './en.json';
import de from './de.json';

export const languages = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch',
};

export const defaultLang = 'en';

export const ui = {
  es,
  en,
  de,
} as const;

export type Language = keyof typeof ui;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = ui[lang];

    for (const k of keys) {
      value = value[k];
      if (value === undefined) return key;
    }

    return value;
  };
}
