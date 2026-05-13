import { getLocaleContent } from '@/content';
import { PortfolioPage } from '@/components/pages/PortfolioPage';
import { buildMetadata } from '@/lib/metadata';

const locale = 'en' as const;
const content = getLocaleContent(locale);

export const metadata = buildMetadata(
  locale,
  `${content.ui.portfolio.indexTitle} | ${content.profile.name}`,
  content.ui.portfolio.metaDescription,
  '/portfolio',
);

export default function EnglishPortfolioPage() {
  return <PortfolioPage locale={locale} />;
}
