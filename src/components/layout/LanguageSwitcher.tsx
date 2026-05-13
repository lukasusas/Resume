'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/content/types';
import { locales } from '@/i18n/config';
import { getLocalizedPath, stripLocaleFromPathname } from '@/i18n/routing';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  languageNames: Record<Locale, string>;
  label: string;
  compact?: boolean;
}

export function LanguageSwitcher({
  currentLocale,
  languageNames,
  label,
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname() || '/';
  const basePath = stripLocaleFromPathname(pathname);

  return (
    <div
      aria-label={label}
      className={`flex items-center rounded-full border border-gray-200 dark:border-gray-700 ${
        compact ? 'p-1 gap-1' : 'p-1.5 gap-1.5'
      }`}
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={getLocalizedPath(locale, basePath)}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            {compact ? locale.toUpperCase() : languageNames[locale]}
          </Link>
        );
      })}
    </div>
  );
}
