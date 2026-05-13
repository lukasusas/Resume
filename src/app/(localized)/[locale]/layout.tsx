import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { localeToHtmlLang, prefixedLocales } from '@/i18n/config';
import { isPrefixedLocale } from '@/i18n/routing';
import { rootMetadata } from '@/lib/root-metadata';
import '../../globals.css';

export const metadata: Metadata = rootMetadata;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  return (
    <html lang={localeToHtmlLang[locale]} className="scroll-smooth" suppressHydrationWarning>
      <AppShell locale={locale}>{children}</AppShell>
    </html>
  );
}
