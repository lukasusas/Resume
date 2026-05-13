import { getLocaleContent } from '@/content';
import { PrintResumePage } from '@/components/pages/PrintResumePage';
import { buildMetadata } from '@/lib/metadata';

const locale = 'en' as const;
const content = getLocaleContent(locale);

export const metadata = buildMetadata(
  locale,
  `${content.ui.print.title} | ${content.profile.name}`,
  content.ui.print.pageDescription,
  '/print',
);

export default function EnglishPrintPage() {
  return <PrintResumePage locale={locale} />;
}
