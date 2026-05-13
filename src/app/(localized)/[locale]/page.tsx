import { notFound } from 'next/navigation';
import { HomePage } from '@/components/pages/HomePage';
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
    `${content.profile.name} | ${content.profile.title}`,
    content.profile.summary,
    '/',
  );
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
