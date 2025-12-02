import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string) {
    const translations = ui[lang] ?? ui[defaultLang];
    const path = key.split(".");
    let curr = translations[path.shift() || ""];
    while (path.length && curr) {
      curr = curr[path.shift() || ""];
    }
    return curr;
  }
}