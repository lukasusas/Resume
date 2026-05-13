import type { Metadata } from 'next';
import { AppShell } from '@/components/layout/AppShell';
import { localeToHtmlLang } from '@/i18n/config';
import { rootMetadata } from '@/lib/root-metadata';
import '../globals.css';

export const metadata: Metadata = rootMetadata;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={localeToHtmlLang.en} className="scroll-smooth" suppressHydrationWarning>
      <AppShell locale="en">{children}</AppShell>
    </html>
  );
}
