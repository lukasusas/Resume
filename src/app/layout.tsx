import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Header, Footer, SideNav } from '@/components/layout';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { profile } from '@/data/profile';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.summary,
  keywords: ['resume', 'portfolio', 'developer', 'software engineer'],
  authors: [{ name: profile.name }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    type: 'profile',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function() {
            const stored = localStorage.getItem('theme');
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (stored === 'dark' || (!stored && systemDark)) {
              document.documentElement.classList.add('dark');
            }
          })();
        `}</Script>
        <ThemeProvider>
          <Header />
        <SideNav />
        <main className="pt-16">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
