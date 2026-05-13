import type { Metadata } from 'next';
import { getLocaleContent } from '@/content';
import type { Locale } from '@/content/types';
import { getLocalizedPath } from '@/i18n/routing';

export function buildMetadata(locale: Locale, title: string, description: string, path: string): Metadata {
  const content = getLocaleContent(locale);

  return {
    title,
    description,
    keywords: content.meta.keywords,
    alternates: {
      canonical: getLocalizedPath(locale, path),
      languages: {
        en: getLocalizedPath('en', path),
        lt: getLocalizedPath('lt', path),
        ru: getLocalizedPath('ru', path),
        'pt-BR': getLocalizedPath('pt-br', path),
      },
    },
    openGraph: {
      title,
      description,
      url: getLocalizedPath(locale, path),
      siteName: 'Lukas Usaris',
      type: 'website',
    },
  };
}
