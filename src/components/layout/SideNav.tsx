'use client';

import Link from 'next/link';
import { User, Briefcase, Code, GraduationCap, Folder, Mail } from 'lucide-react';
import type { Locale, LocaleUi } from '@/content/types';
import { cn } from '@/lib/utils';
import { getLocalizedPath, getLocalizedSectionHref } from '@/i18n/routing';

interface SideNavProps {
  locale: Locale;
  navigation: LocaleUi['navigation'];
  className?: string;
}

export function SideNav({ locale, navigation, className }: SideNavProps) {
  const navItems = [
    { href: getLocalizedSectionHref(locale, 'about'), label: navigation.about, icon: User },
    { href: getLocalizedSectionHref(locale, 'experience'), label: navigation.experience, icon: Briefcase },
    { href: getLocalizedSectionHref(locale, 'skills'), label: navigation.skills, icon: Code },
    { href: getLocalizedSectionHref(locale, 'education'), label: navigation.education, icon: GraduationCap },
    { href: getLocalizedPath(locale, '/portfolio'), label: navigation.portfolio, icon: Folder },
    { href: getLocalizedSectionHref(locale, 'contact'), label: navigation.contact, icon: Mail },
  ];

  return (
    <nav
      className={cn(
        'fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden lg:block',
        className
      )}
    >
      <ul className="flex flex-col gap-1 p-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-r-xl shadow-lg border border-l-0 border-gray-200 dark:border-gray-800">
        {navItems.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-colors group relative"
            >
              <Icon className="w-5 h-5" />
              <span className="absolute left-full ml-2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
