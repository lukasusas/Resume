import { getLocaleContent } from '@/content';
import { HomePage } from '@/components/pages/HomePage';
import { buildMetadata } from '@/lib/metadata';

const locale = 'en' as const;
const content = getLocaleContent(locale);

export const metadata = buildMetadata(
  locale,
  `${content.profile.name} | ${content.profile.title}`,
  content.profile.summary,
  '/',
);

export default function EnglishHomePage() {
  return <HomePage locale={locale} />;
}
