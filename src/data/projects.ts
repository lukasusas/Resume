/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains portfolio projects displayed in the Portfolio section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example projects with your actual projects
 * 2. Mark your best projects as featured (featured: true)
 * 3. Include project images if available
 * 4. Add live demo and GitHub links where applicable
 *
 * TO ADD A NEW PROJECT:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'proj-6', 'proj-7')
 * - Create a URL-friendly slug (lowercase, hyphens, no spaces)
 * - Add at least a thumbnail image
 *
 * PROJECT CATEGORIES:
 * Choose from existing categories or add new ones to projectCategories array.
 *
 * IMAGES:
 * - Store images in /public/projects/
 * - Use paths like '/projects/project-name.jpg'
 * - Recommended size: 1200x630 for thumbnails
 * =============================================================================
 */

/**
 * Project entry type definition
 */
export interface Project {
  /** Unique identifier (e.g., 'proj-1', 'proj-2') */
  id: string;

  /**
   * URL-friendly slug for the project page
   * Format: lowercase, hyphens instead of spaces
   * Example: 'my-awesome-project'
   */
  slug: string;

  /** Project title */
  title: string;

  /**
   * Short description (1-2 sentences)
   * Displayed in project cards
   */
  description: string;

  /**
   * Detailed description (optional)
   * Displayed on the project detail page
   */
  longDescription?: string;

  /**
   * Thumbnail image path
   * - Use '/projects/thumb.jpg' for local image
   * - Use full URL for external image
   */
  thumbnail: string;

  /**
   * Additional project images (optional)
   * For project detail page gallery
   */
  images: string[];

  /**
   * Technologies used in the project
   * List frameworks, languages, and tools
   */
  technologies: string[];

  /**
   * Project category
   * Must match one from projectCategories array
   */
  category: string;

  /**
   * Your role in the project
   * Examples: "Lead Developer", "Frontend Developer", "Solo Project"
   */
  role: string;

  /**
   * Project duration
   * Examples: "3 months", "6 weeks", "Ongoing"
   */
  duration: string;

  /**
   * Live project URL (optional)
   * Link to deployed project
   */
  liveUrl?: string;

  /**
   * GitHub repository URL (optional)
   * Link to source code
   */
  githubUrl?: string;

  /**
   * Is this a featured project?
   * Featured projects are highlighted on the homepage
   */
  featured: boolean;

  /**
   * Key highlights/achievements
   * Use metrics when possible (numbers, percentages)
   */
  highlights: string[];
}

/**
 * =============================================================================
 * PROJECT CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Categories for filtering projects.
 * 'All' is required and should always be first.
 */
export const projectCategories: string[] = [
  'All',
  'Real Estate',
  'Trade & Commerce',
  'Business Development',
  'Operations',
];

/**
 * =============================================================================
 * YOUR PROJECTS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example projects with your actual projects.
 * Mark your best 3-4 projects as featured.
 */
export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // FEATURED PROJECT - Real Estate Development
  // ---------------------------------------------------------------------------
  {
    id: 'proj-1',
    slug: 'brazil-residential-development',
    title: 'Brazil Residential Development Portfolio',
    description:
      'Investing in and developing residential projects across northeastern Brazil, spanning affordable and mid-to-high-end segments.',
    longDescription: `Actively investing in residential real estate development in Ceará, Brazil. The portfolio includes affordable housing (MCMV) investments for first-time homebuyers, plus collaboration on a gated condominium project aimed at future villa sales within the community. Combining financial modeling, contractor management, and multi-stakeholder coordination across a multi-project development portfolio.`,
    thumbnail: 'https://assets.kiloapps.io/user_f6db4d38-3251-4664-9b59-7bf2191c924f/56e14505-937b-4667-a707-960f81828843/1adf036d-ebb4-4cc0-8438-9bc1221ebe9f.jpg',
    images: [],
    technologies: [
      'Financial Modeling',
      'Contractor Management',
      'Investor Relations',
      'Sales Strategy',
    ],
    category: 'Real Estate',
    role: 'Investor & Developer',
    duration: '2025 – Present',
    featured: true,
    highlights: [
      'Multi-project residential development portfolio in Ceará',
      'Active investor in MCMV affordable housing',
      'Collaborating on gated condominium project',
      'Maximizing ROI through cost efficiency and targeted sales',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT - Gemstone Trading
  // ---------------------------------------------------------------------------
  {
    id: 'proj-2',
    slug: 'usaris-gemstones',
    title: 'Usaris Gemstones – International Trading',
    description:
      'Founded and managed international gemstone trading company connecting Brazilian mines to US and EU markets.',
    longDescription: `Founded Usaris Gemstones, an international gemstone trading operation sourcing directly from Brazilian mines and building a sales network across the United States and Europe. Established supply-chain, pricing, and logistics frameworks from the ground up, generating strong first-year revenue. In early 2025, proactively scaled down operations after market contraction linked to policy shifts, while maintaining key client relationships for future reactivation.`,
    thumbnail: 'https://assets.kiloapps.io/user_f6db4d38-3251-4664-9b59-7bf2191c924f/56e14505-937b-4667-a707-960f81828843/4e1105d9-62b5-4d46-809a-056e7573fe54.jpg',
    images: [],
    technologies: [
      'Supply Chain Management',
      'Cross-Border Trade',
      'Pricing Strategy',
      'International Logistics',
    ],
    category: 'Trade & Commerce',
    role: 'Managing Director',
    duration: '2024 – Present',
    featured: true,
    highlights: [
      'Strong first-year revenue with zero prior industry presence',
      'Built international sales network across US and EU',
      'Direct sourcing from Brazilian mines',
      'Proactive scaling after market contraction',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT - B2B Revenue Growth
  // ---------------------------------------------------------------------------
  {
    id: 'proj-3',
    slug: 'horion-digital-growth',
    title: 'B2B Revenue Growth at Horion Digital',
    description:
      'Drove consistent high-value annual B2B revenue through strategic partnerships and account management for a cloud-data platform company.',
    longDescription: `Led business development and account management at Horion Digital, a quality-oriented custom cloud-data platform and software development company focused on North American enterprise clients. Negotiated and closed high-value contracts for multiple consecutive years, managing partnerships that contributed the majority of annual company revenue. Designed pricing models improving project margins and collaborated with C-level leadership on strategy and client retention.`,
    thumbnail: '',
    images: [],
    technologies: [
      'B2B Sales',
      'Account Management',
      'Pricing Models',
      'Client Retention',
      'CRM',
    ],
    category: 'Business Development',
    role: 'Business Development & Account Management',
    duration: 'Sep 2018 – Mar 2024',
    featured: true,
    highlights: [
      'High-value contracts closed for multiple consecutive years',
      'Managed the majority of annual company revenue',
      'Designed pricing models improving margins',
      'Offered CFO position in 2024',
    ],
  },

  // ---------------------------------------------------------------------------
  // NON-FEATURED - API Consulting
  // ---------------------------------------------------------------------------
  {
    id: 'proj-4',
    slug: 'adform-api-consulting',
    title: 'Enterprise API Integration – Adform',
    description:
      'Supported enterprise clients integrating Adform\'s API ecosystem, providing technical training and documentation.',
    thumbnail: '/projects/api-consulting.jpg',
    images: [],
    technologies: [
      'API Integration',
      'Technical Documentation',
      'QA',
      'Postman',
      'Swagger',
      'OAuth2',
    ],
    category: 'Operations',
    role: 'API Solution Consultant',
    duration: 'Nov 2016 – Jan 2018',
    featured: false,
    highlights: [
      'Supported global advertising partners with API integration',
      'Owned API documentation and QA processes',
      'Conducted on-site and webinar technical training',
    ],
  },

  // ---------------------------------------------------------------------------
  // NON-FEATURED - Real Estate Sales
  // ---------------------------------------------------------------------------
  {
    id: 'proj-5',
    slug: 'capital-realty-foundation',
    title: 'Real Estate Sales Foundation – Capital Realty',
    description:
      'Built foundational negotiation and sales skills through property valuations, client acquisition, and market analysis.',
    thumbnail: '/projects/real-estate-sales.jpg',
    images: [],
    technologies: [
      'Property Valuation',
      'Market Analysis',
      'Client Acquisition',
      'Negotiation',
    ],
    category: 'Real Estate',
    role: 'Real Estate Agent',
    duration: 'Nov 2015 – Mar 2016',
    featured: false,
    highlights: [
      'Conducted property valuations and market analysis',
      'Built client acquisition pipeline',
      'Developed negotiation skills applied in tech and investment',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

/**
 * Search projects by title, description, or technology
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
