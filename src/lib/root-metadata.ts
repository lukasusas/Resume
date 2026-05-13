import type { Metadata } from 'next';
import { siteUrl } from '@/i18n/config';

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  authors: [{ name: 'Lukas Usaris' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
