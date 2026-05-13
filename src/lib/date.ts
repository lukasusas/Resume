import type { Locale } from '@/content/types';
import { localeToIntl } from '@/i18n/config';

export function formatMonthYear(locale: Locale, date: string): string {
  return new Date(`${date}-01`).toLocaleDateString(localeToIntl[locale], {
    month: 'short',
    year: 'numeric',
  });
}
