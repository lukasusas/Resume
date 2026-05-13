import { Container } from '@/components/ui';
import type { Locale, Project } from '@/content/types';
import { getLocaleContent } from '@/content';
import { ProjectDetail } from '@/components/portfolio';

interface ProjectPageProps {
  locale: Locale;
  project: Project;
}

export function ProjectPage({ locale, project }: ProjectPageProps) {
  const content = getLocaleContent(locale);

  return (
    <Container size="lg" className="py-12">
      <ProjectDetail locale={locale} project={project} labels={content.ui.portfolio} />
    </Container>
  );
}
