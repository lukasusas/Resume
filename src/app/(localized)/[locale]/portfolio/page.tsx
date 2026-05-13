import { notFound } from 'next/navigation';
import { PortfolioPage } from '@/components/pages/PortfolioPage';
import { getLocaleContent } from '@/content';
import { buildMetadata } from '@/lib/metadata';
import { isPrefixedLocale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  const content = getLocaleContent(locale);
  return buildMetadata(
    locale,
    `${content.ui.portfolio.indexTitle} | ${content.profile.name}`,
    content.ui.portfolio.metaDescription,
    '/portfolio',
  );
}

export default async function LocalizedPortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  return <PortfolioPage locale={locale} />;
}
