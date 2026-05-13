import { notFound } from 'next/navigation';
import { PrintResumePage } from '@/components/pages/PrintResumePage';
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
    `${content.ui.print.title} | ${content.profile.name}`,
    content.ui.print.pageDescription,
    '/print',
  );
}

export default async function LocalizedPrintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  return <PrintResumePage locale={locale} />;
}
