export type Locale = 'en' | 'lt' | 'ru' | 'pt-br';

export type LanguageLevel = 'native' | 'fluent' | 'professional' | 'intermediate' | 'basic';

export interface Profile {
  name: string;
  title: string;
  photo: string;
  location: string;
  linkedin?: string;
  whatsapp?: string;
  summary: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  yearsOfExperience?: number;
}

export interface SpokenLanguage {
  name: string;
  level: LanguageLevel;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  location: string;
  startYear: number;
  endYear: number;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail?: string;
  images: string[];
  technologies: string[];
  category: string;
  role: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface NavigationLabels {
  about: string;
  experience: string;
  skills: string;
  education: string;
  portfolio: string;
  contact: string;
  home: string;
}

export interface LocaleUi {
  navigation: NavigationLabels;
  languageNames: Record<Locale, string>;
  home: {
    featuredProjectsTitle: string;
    featuredProjectsSubtitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
  };
  skills: {
    title: string;
    subtitle: string;
    proficiency: string;
    expert: string;
    advanced: string;
    intermediate: string;
    yearsSuffix: string;
  };
  education: {
    title: string;
    subtitle: string;
    degreeSeparator: string;
    gpaLabel: string;
  };
  certifications: {
    title: string;
    subtitle: string;
    issued: string;
    expires: string;
    viewCredential: string;
    credentialId: string;
  };
  languages: {
    title: string;
  };
  portfolio: {
    indexTitle: string;
    indexSubtitle: string;
    featuredBadge: string;
    viewAllProjects: string;
    viewDetails: string;
    backToPortfolio: string;
    keyHighlights: string;
    technologiesUsed: string;
    roleLabel: string;
    durationLabel: string;
    categoryLabel: string;
    viewLiveSite: string;
    viewSource: string;
    noProjectsFound: string;
    metaDescription: string;
  };
  contact: {
    title: string;
    subtitle: string;
    linkedinTitle: string;
    linkedinDescription: string;
    whatsappTitle: string;
    whatsappDescription: string;
    contactNow: string;
    openChat: string;
    whatsappQrAlt: string;
  };
  footer: {
    quickLinks: string;
    connect: string;
    rightsReserved: string;
    builtWith: string;
    printVersion: string;
  };
  print: {
    title: string;
    pageDescription: string;
    summary: string;
    experience: string;
    skills: string;
    education: string;
    certifications: string;
    languages: string;
    linkedin: string;
    whatsapp: string;
    printResume: string;
  };
  actions: {
    viewResume: string;
    downloadResume: string;
    toggleMenu: string;
    switchLanguage: string;
  };
  common: {
    present: string;
    linkedin: string;
    whatsapp: string;
  };
  languageLevels: Record<LanguageLevel, string>;
}

export interface LocaleMeta {
  defaultDescription: string;
  keywords: string[];
}

export interface LocaleContent {
  locale: Locale;
  meta: LocaleMeta;
  profile: Profile;
  experience: Experience[];
  skills: Skill[];
  skillCategories: string[];
  languages: SpokenLanguage[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  projectCategories: string[];
  ui: LocaleUi;
}
