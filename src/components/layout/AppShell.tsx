import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { getLocaleContent } from '@/content';
import type { Locale } from '@/content/types';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Header, Footer, SideNav } from '@/components/layout';

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
});

interface AppShellProps {
  locale: Locale;
  children: React.ReactNode;
}

export function AppShell({ locale, children }: AppShellProps) {
  const content = getLocaleContent(locale);

  return (
    <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function() {
            const stored = localStorage.getItem('theme');
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (stored === 'dark' || (!stored && systemDark)) {
              document.documentElement.classList.add('dark');
            }
          })();`,
        }}
      />
      <ThemeProvider>
        <Header
          locale={locale}
          profileName={content.profile.name}
          navigation={content.ui.navigation}
          resumeLabel={content.ui.actions.viewResume}
          languageNames={content.ui.languageNames}
          switchLanguageLabel={content.ui.actions.switchLanguage}
          toggleMenuLabel={content.ui.actions.toggleMenu}
        />
        <SideNav locale={locale} navigation={content.ui.navigation} />
        <main className="pt-16">{children}</main>
        <Footer
          locale={locale}
          profile={content.profile}
          navigation={content.ui.navigation}
          footer={content.ui.footer}
          common={content.ui.common}
        />
      </ThemeProvider>
      <Analytics />
    </body>
  );
}
