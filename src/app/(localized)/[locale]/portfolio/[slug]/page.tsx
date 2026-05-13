import { notFound } from 'next/navigation';
import { getLocaleContent, getProjectBySlug } from '@/content';
import { ProjectPage } from '@/components/pages/ProjectPage';
import { buildMetadata } from '@/lib/metadata';
import { isPrefixedLocale } from '@/i18n/routing';
import { prefixedLocales } from '@/i18n/config';

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) =>
    getLocaleContent(locale).projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

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

export default async function LocalizedProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  const project = getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage locale={locale} project={project} />;
}
