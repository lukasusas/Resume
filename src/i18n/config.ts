import type { Locale } from '@/content/types';

export const locales: Locale[] = ['en', 'lt', 'ru', 'pt-br'];
export const prefixedLocales: Locale[] = ['lt', 'ru', 'pt-br'];
export const defaultLocale: Locale = 'en';
export const siteUrl = 'https://usaris.lt';

export const localeToHtmlLang: Record<Locale, string> = {
  en: 'en',
  lt: 'lt',
  ru: 'ru',
  'pt-br': 'pt-BR',
};

export const localeToIntl: Record<Locale, string> = {
  en: 'en-US',
  lt: 'lt-LT',
  ru: 'ru-RU',
  'pt-br': 'pt-BR',
};
