import Image from 'next/image';
import { getLocaleContent } from '@/content';
import type { Locale } from '@/content/types';
import { formatMonthYear } from '@/lib/date';
import { getSkillsByCategory } from '@/content';
import { PrintButton } from '@/components/ui/PrintButton';

interface PrintResumePageProps {
  locale: Locale;
}

export function PrintResumePage({ locale }: PrintResumePageProps) {
  const content = getLocaleContent(locale);

  return (
    <div className="mx-auto max-w-4xl bg-white p-8 text-black print:p-0 print:pt-8">
      <header className="print-header mb-8 border-b pb-6">
        <h1 className="mb-1 text-3xl font-bold">{content.profile.name}</h1>
        <p className="mb-4 text-xl text-gray-600">{content.profile.title}</p>
        <div className="flex items-center justify-between gap-6">
          <span className="text-sm text-gray-600">{content.profile.location}</span>
          <div className="flex items-center gap-4">
            {content.profile.linkedin && (
              <a href={content.profile.linkedin} className="text-sm text-blue-600 underline hover:text-blue-800">
                {content.ui.print.linkedin}: {content.profile.linkedin.split('/').pop()}
              </a>
            )}
            {content.profile.whatsapp && (
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium text-gray-600">{content.ui.print.whatsapp}</span>
                <div className="h-16 w-16 flex-shrink-0">
                  <Image
                    src="/whatsapp-qr.png"
                    alt={content.ui.contact.whatsappQrAlt}
                    width={64}
                    height={64}
                    className="border border-gray-300"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">{content.ui.print.summary}</h2>
        <p className="text-gray-700">{content.profile.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-lg font-bold uppercase tracking-wide">{content.ui.print.experience}</h2>
        <div className="space-y-4">
          {content.experience.map((item) => (
            <div key={item.id}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">
                    {item.company} • {item.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500">
                  {formatMonthYear(locale, item.startDate)} -{' '}
                  {item.current ? content.ui.common.present : formatMonthYear(locale, item.endDate!)}
                </span>
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-700">
                {item.achievements.slice(0, 3).map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-lg font-bold uppercase tracking-wide">{content.ui.print.skills}</h2>
        <div className="grid grid-cols-2 gap-4">
          {content.skillCategories.map((category) => {
            const categorySkills = getSkillsByCategory(content.skills, category);
            if (categorySkills.length === 0) {
              return null;
            }

            return (
              <div key={category}>
                <h3 className="mb-1 text-sm font-medium text-gray-600">{category}</h3>
                <p className="text-sm">{categorySkills.map((skill) => skill.name).join(', ')}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-lg font-bold uppercase tracking-wide">{content.ui.print.education}</h2>
        <div className="space-y-3">
          {content.education.map((item) => (
            <div key={item.id} className="flex justify-between gap-4">
              <div>
                <h3 className="font-semibold">
                  {item.degree}
                  {content.ui.education.degreeSeparator ? ` ${content.ui.education.degreeSeparator} ` : ' '}
                  {item.field}
                </h3>
                <p className="text-gray-600">{item.school}</p>
              </div>
              <span className="text-sm text-gray-500">{item.endYear}</span>
            </div>
          ))}
        </div>
      </section>

      {content.certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="mb-3 text-lg font-bold uppercase tracking-wide">{content.ui.print.certifications}</h2>
          <div className="grid grid-cols-2 gap-2">
            {content.certifications.map((certification) => (
              <div key={certification.id} className="text-sm">
                <span className="font-medium">{certification.name}</span>
                <span className="text-gray-500"> - {certification.issuer}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-2 text-lg font-bold uppercase tracking-wide">{content.ui.print.languages}</h2>
        <p className="text-sm">
          {content.languages
            .map((language) => `${language.name} (${content.ui.languageLevels[language.level]})`)
            .join(', ')}
        </p>
      </section>

      <div className="mt-8 text-center print:hidden">
        <PrintButton label={content.ui.print.printResume} />
      </div>
    </div>
  );
}
