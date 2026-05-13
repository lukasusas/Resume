'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui';
import type { Locale, LocaleUi } from '@/content/types';
import { cn } from '@/lib/utils';
import { getLocalizedPath, getLocalizedSectionHref } from '@/i18n/routing';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  locale: Locale;
  profileName: string;
  navigation: LocaleUi['navigation'];
  resumeLabel: string;
  languageNames: LocaleUi['languageNames'];
  switchLanguageLabel: string;
  toggleMenuLabel: string;
}

export function Header({
  locale,
  profileName,
  navigation,
  resumeLabel,
  languageNames,
  switchLanguageLabel,
  toggleMenuLabel,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { href: getLocalizedSectionHref(locale, 'about'), label: navigation.about },
    { href: getLocalizedSectionHref(locale, 'experience'), label: navigation.experience },
    { href: getLocalizedSectionHref(locale, 'skills'), label: navigation.skills },
    { href: getLocalizedSectionHref(locale, 'education'), label: navigation.education },
    { href: getLocalizedPath(locale, '/portfolio'), label: navigation.portfolio },
    { href: getLocalizedSectionHref(locale, 'contact'), label: navigation.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={getLocalizedPath(locale, '/')} className="font-bold text-xl text-gray-900 dark:text-white">
            {profileName}
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher
              currentLocale={locale}
              languageNames={languageNames}
              label={switchLanguageLabel}
            />
            <Button href={getLocalizedPath(locale, '/print')} size="sm">
              <Download className="w-4 h-4 mr-2" />
              {resumeLabel}
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher
              currentLocale={locale}
              languageNames={languageNames}
              label={switchLanguageLabel}
              compact
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label={toggleMenuLabel}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button href={getLocalizedPath(locale, '/print')} size="sm" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                {resumeLabel}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
