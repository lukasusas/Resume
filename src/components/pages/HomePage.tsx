import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/ui';
import { getLocaleContent } from '@/content';
import type { Locale } from '@/content/types';
import {
  ProfileHeader,
  Summary,
  ExperienceTimeline,
  SkillsSection,
  EducationSection,
  CertificationsSection,
  LanguagesSection,
} from '@/components/resume';
import { ContactSection } from '@/components/contact';
import { ProjectGrid } from '@/components/portfolio';
import { getLocalizedPath } from '@/i18n/routing';

interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  const content = getLocaleContent(locale);

  return (
    <Container size="lg" className="py-12">
      <section id="about" className="mb-16">
        <ProfileHeader locale={locale} profile={content.profile} ui={content.ui} />
        <Summary summary={content.profile.summary} highlights={content.profile.highlights} />
      </section>

      <ExperienceTimeline
        locale={locale}
        title={content.ui.experience.title}
        subtitle={content.ui.experience.subtitle}
        experiences={content.experience}
        presentLabel={content.ui.common.present}
      />

      <SkillsSection
        title={content.ui.skills.title}
        subtitle={content.ui.skills.subtitle}
        proficiencyLabel={content.ui.skills.proficiency}
        expertLabel={content.ui.skills.expert}
        advancedLabel={content.ui.skills.advanced}
        intermediateLabel={content.ui.skills.intermediate}
        yearsSuffix={content.ui.skills.yearsSuffix}
        skillCategories={content.skillCategories}
        skills={content.skills}
      />

      <EducationSection
        title={content.ui.education.title}
        subtitle={content.ui.education.subtitle}
        degreeSeparator={content.ui.education.degreeSeparator}
        gpaLabel={content.ui.education.gpaLabel}
        education={content.education}
      />

      {content.certifications.length > 0 && (
        <CertificationsSection
          locale={locale}
          title={content.ui.certifications.title}
          subtitle={content.ui.certifications.subtitle}
          certifications={content.certifications}
          issuedLabel={content.ui.certifications.issued}
          expiresLabel={content.ui.certifications.expires}
          viewCredentialLabel={content.ui.certifications.viewCredential}
          credentialIdLabel={content.ui.certifications.credentialId}
        />
      )}

      <LanguagesSection
        title={content.ui.languages.title}
        languages={content.languages}
        languageLevels={content.ui.languageLevels}
      />

      <Section
        id="portfolio-preview"
        title={content.ui.home.featuredProjectsTitle}
        subtitle={content.ui.home.featuredProjectsSubtitle}
      >
        <ProjectGrid
          locale={locale}
          projects={content.projects}
          categories={content.projectCategories}
          labels={content.ui.portfolio}
          featuredOnly
          limit={3}
          showFilters={false}
        />
        <div className="mt-8 text-center">
          <Link
            href={getLocalizedPath(locale, '/portfolio')}
            className="inline-flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {content.ui.portfolio.viewAllProjects}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <ContactSection profile={content.profile} ui={content.ui.contact} />
    </Container>
  );
}
