import type { Locale } from '@/content/types';
import { defaultLocale, locales, prefixedLocales } from '@/i18n/config';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isPrefixedLocale(value: string): value is Locale {
  return prefixedLocales.includes(value as Locale);
}

export function getLocalizedPath(locale: Locale, path: string = '/'): string {
  const normalizedPath = path === '' ? '/' : path;
  if (locale === defaultLocale) {
    return normalizedPath;
  }
  if (normalizedPath === '/') {
    return `/${locale}`;
  }
  return `/${locale}${normalizedPath}`;
}

export function getLocalizedSectionHref(locale: Locale, sectionId: string): string {
  const base = locale === defaultLocale ? '/' : `/${locale}`;
  return `${base}#${sectionId}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const [, maybeLocale] = pathname.split('/');
  if (maybeLocale && isLocale(maybeLocale)) {
    return maybeLocale;
  }
  return defaultLocale;
}

export function stripLocaleFromPathname(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (locale === defaultLocale) {
    return pathname || '/';
  }
  const withoutLocale = pathname.replace(new RegExp(`^/${locale}`), '');
  return withoutLocale || '/';
}
