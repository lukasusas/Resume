'use client';

import { motion } from 'framer-motion';
import type { Experience, Locale } from '@/content/types';
import { ExperienceCard } from './ExperienceCard';
import { Section } from '@/components/ui';

interface ExperienceTimelineProps {
  locale: Locale;
  title: string;
  subtitle: string;
  experiences: Experience[];
  presentLabel: string;
}

export function ExperienceTimeline({
  locale,
  title,
  subtitle,
  experiences,
  presentLabel,
}: ExperienceTimelineProps) {
  return (
    <Section id="experience" title={title} subtitle={subtitle}>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative md:pl-16"
            >
              <div className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950 hidden md:block" />

              <ExperienceCard locale={locale} experience={exp} presentLabel={presentLabel} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
