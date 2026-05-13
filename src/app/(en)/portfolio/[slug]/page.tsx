import { notFound } from 'next/navigation';
import { getLocaleContent, getProjectBySlug } from '@/content';
import { ProjectPage } from '@/components/pages/ProjectPage';
import { buildMetadata } from '@/lib/metadata';

const locale = 'en' as const;

export function generateStaticParams() {
  return getLocaleContent(locale).projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(locale, slug);

  if (!project) {
    return buildMetadata(locale, 'Project Not Found | Lukas Usaris', 'Requested project was not found.', '/portfolio');
  }

  return buildMetadata(
    locale,
    `${project.title} | ${getLocaleContent(locale).ui.portfolio.indexTitle}`,
    project.description,
    `/portfolio/${project.slug}`,
  );
}

export default async function EnglishProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage locale={locale} project={project} />;
}
