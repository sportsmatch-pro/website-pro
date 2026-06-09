import es from './es';
import ca from './ca';
import en from './en';

export type Lang = 'es' | 'ca' | 'en';

const dictionaries: Record<Lang, Record<string, string>> = { es, ca, en };

/**
 * Returns the flat key→value translation dictionary for the given locale.
 * Falls back to 'es' for any missing key.
 */
export function getTranslations(lang: Lang): Record<string, string> {
  const dict = dictionaries[lang] ?? dictionaries['es'];
  const base = dictionaries['es'];

  // Merge with ES as fallback for any missing keys
  return new Proxy(dict, {
    get(target, key: string) {
      return target[key] ?? base[key] ?? key;
    },
  }) as Record<string, string>;
}
