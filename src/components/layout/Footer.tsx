import Link from 'next/link';
import { Linkedin, MessageCircle } from 'lucide-react';
import type { Locale, LocaleUi, Profile } from '@/content/types';
import { getLocalizedPath, getLocalizedSectionHref } from '@/i18n/routing';

interface FooterProps {
  locale: Locale;
  profile: Pick<Profile, 'name' | 'title' | 'location' | 'linkedin' | 'whatsapp'>;
  navigation: LocaleUi['navigation'];
  footer: LocaleUi['footer'];
  common: LocaleUi['common'];
}

export function Footer({ locale, profile, navigation, footer, common }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    ...(profile.linkedin ? [{ href: profile.linkedin, icon: Linkedin, label: common.linkedin }] : []),
    ...(profile.whatsapp
      ? [{ href: `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`, icon: MessageCircle, label: common.whatsapp }]
      : []),
  ];
  const footerLinks = [
    { href: getLocalizedPath(locale, '/'), label: navigation.home },
    { href: getLocalizedPath(locale, '/portfolio'), label: navigation.portfolio },
    { href: getLocalizedSectionHref(locale, 'contact'), label: navigation.contact },
    { href: getLocalizedPath(locale, '/print'), label: footer.printVersion },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              {profile.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {profile.title}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              {profile.location}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              {footer.connect}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} {profile.name}. {footer.rightsReserved}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              {footer.builtWith}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
