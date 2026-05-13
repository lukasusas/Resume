import { Badge } from '@/components/ui';
import { ExperienceIcon } from './ExperienceIcons';
import type { Experience, Locale } from '@/content/types';
import { formatMonthYear } from '@/lib/date';

interface ExperienceCardProps {
  locale: Locale;
  experience: Experience;
  presentLabel: string;
}

export function ExperienceCard({ locale, experience, presentLabel }: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
        <ExperienceIcon experience={experience} />

        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            {experience.title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            {experience.company}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {formatMonthYear(locale, experience.startDate)} –{' '}
            {experience.current ? presentLabel : formatMonthYear(locale, experience.endDate!)}
            {' · '}{experience.location}
            {' · '}<span className="capitalize">{experience.type}</span>
          </p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {experience.description}
      </p>

      {/* Achievements */}
      <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700 dark:text-gray-300">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="text-sm">{achievement}</li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <Badge key={tech} variant="secondary" size="sm">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
