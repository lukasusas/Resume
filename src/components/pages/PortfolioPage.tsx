import { Container, Section } from '@/components/ui';
import { getLocaleContent } from '@/content';
import type { Locale } from '@/content/types';
import { ProjectGrid } from '@/components/portfolio';

interface PortfolioPageProps {
  locale: Locale;
}

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = getLocaleContent(locale);

  return (
    <Container size="lg" className="py-12">
      <Section
        title={content.ui.portfolio.indexTitle}
        subtitle={content.ui.portfolio.indexSubtitle}
      >
        <ProjectGrid
          locale={locale}
          projects={content.projects}
          categories={content.projectCategories}
          labels={content.ui.portfolio}
          showFilters
        />
      </Section>
    </Container>
  );
}
