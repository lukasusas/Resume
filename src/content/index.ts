import { enContent } from '@/content/locales/en';
import { ltContent } from '@/content/locales/lt';
import { ptBrContent } from '@/content/locales/pt-br';
import { ruContent } from '@/content/locales/ru';
import type { Locale, LocaleContent, Project, Skill } from '@/content/types';

export const contentByLocale: Record<Locale, LocaleContent> = {
  en: enContent,
  lt: ltContent,
  ru: ruContent,
  'pt-br': ptBrContent,
};

export function getLocaleContent(locale: Locale): LocaleContent {
  return contentByLocale[locale];
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  return getLocaleContent(locale).projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getLocaleContent(locale).projects.filter((project) => project.featured);
}

export function getProjectCategories(locale: Locale): string[] {
  return getLocaleContent(locale).projectCategories;
}

export function getProjectsByCategory(locale: Locale, category: string): Project[] {
  const content = getLocaleContent(locale);
  const [allCategory] = content.projectCategories;
  if (category === allCategory) {
    return content.projects;
  }
  return content.projects.filter((project) => project.category === category);
}

export function getSkillsByCategory(skills: Skill[], category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}
