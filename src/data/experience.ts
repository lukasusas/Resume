/**
 * =============================================================================
 * EXPERIENCE DATA - Work History
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains work history displayed in the Experience section.
 *
 * TO CUSTOMIZE:
 * 1. Replace the example entries with your actual work history
 * 2. List positions in reverse chronological order (newest first)
 * 3. Use action verbs for achievements (Led, Built, Increased, Reduced, etc.)
 * 4. Include metrics when possible (numbers, percentages, dollar amounts)
 * 5. List relevant technologies used at each position
 *
 * TO ADD A NEW EXPERIENCE:
 * Copy an existing entry and modify all fields. Example:
 * {
 *   id: 'exp-4',  // Unique identifier
 *   title: 'Your Job Title',
 *   company: 'Company Name',
 *   location: 'City, State/Country',
 *   type: 'full-time',  // Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
 *   startDate: '2023-01',  // Format: YYYY-MM
 *   endDate: '2024-01',    // Format: YYYY-MM or omit for current position
 *   current: false,        // Set to true if this is your current job
 *   description: 'Brief description of your role...',
 *   achievements: ['Achievement 1', 'Achievement 2'],
 *   technologies: ['Tech 1', 'Tech 2'],
 * }
 *
 * TO REMOVE AN EXPERIENCE:
 * Delete the entire object from the array including its curly braces and comma.
 * =============================================================================
 */

/**
 * Experience entry type definition
 */
export interface Experience {
  /** Unique identifier (e.g., 'exp-1', 'exp-2') */
  id: string;

  /** Job title (e.g., "Senior Software Engineer", "Product Manager") */
  title: string;

  /** Company name */
  company: string;

  /**
   * Company logo path (optional)
   * - Use '/logos/company.png' for local image in public/logos/
   * - Use full URL for external image
   * - Omit or use undefined for no logo
   */
  companyLogo?: string;

  /**
   * Location
   * Format: "City, State/Country" or "Remote"
   */
  location: string;

  /**
   * Employment type
   * Options: 'full-time' | 'part-time' | 'contract' | 'freelance'
   */
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';

  /**
   * Start date in YYYY-MM format
   * Example: '2023-01' for January 2023
   */
  startDate: string;

  /**
   * End date in YYYY-MM format (optional)
   * - Omit for current position
   * - Example: '2024-06' for June 2024
   */
  endDate?: string;

  /**
   * Is this your current position?
   * Set to true if still working here
   */
  current: boolean;

  /**
   * Brief description of the role
   * 1-2 sentences about what you did
   */
  description: string;

  /**
   * Key achievements/accomplishments in this role
   * - Use action verbs (Led, Built, Increased, Reduced, etc.)
   * - Include metrics when possible
   * - 3-5 bullet points recommended
   */
  achievements: string[];

  /**
   * Technologies/tools used in this role
   * List programming languages, frameworks, tools, etc.
   */
  technologies: string[];
}

/**
 * =============================================================================
 * YOUR WORK EXPERIENCE - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example entries with your actual work history.
 * Keep positions in reverse chronological order (newest first).
 */
export const experience: Experience[] = [
  // ---------------------------------------------------------------------------
  // CURRENT POSITION - Real Estate Investments
  // ---------------------------------------------------------------------------
  {
    id: 'exp-1',
    title: 'Real Estate Investor & Developer',
    company: 'Real Estate Investments – Brazil',
    location: 'Ceará, Brazil',
    type: 'freelance',
    startDate: '2025-01',
    current: true,
    description:
      'Investing in and developing residential projects across northeastern Brazil, combining affordable and mid-to-high-end segments.',
    achievements: [
      'Active investor in Minha Casa Minha Vida (MCMV) affordable housing projects for first-time homebuyers',
      'Collaborating on gated condominium project with contractual structuring and investor relations',
      'Integrating financial modeling, contractor management, and multi-stakeholder coordination across a multi-project development portfolio',
      'Maximizing ROI through cost efficiency and targeted sales strategy in both affordable and mid-to-high-end segments',
    ],
    technologies: [
      'Financial Modeling',
      'Investor Relations',
      'Contract Management',
      'Market Analysis',
      'ROI Optimization',
    ],
  },

  // ---------------------------------------------------------------------------
  // CURRENT POSITION - Managing Director
  // ---------------------------------------------------------------------------
  {
    id: 'exp-2',
    title: 'Managing Director',
    company: 'Usaris Gemstones',
    location: 'International (Brazil / US / EU)',
    type: 'full-time',
    startDate: '2024-03',
    current: true,
    description:
      'Founded and managing international gemstone trading company, building a sales network across the US and EU and sourcing directly from Brazilian mines.',
    achievements: [
      'Achieved strong first-year revenue, establishing operational and pricing frameworks from the ground up',
      'Implemented process controls and financial systems for transparency, cost efficiency, and scalable operations',
      'Negotiating cross-border partnerships and handling all finance, legal, and logistics independently',
      'Proactively scaled down operations and eliminated fixed overheads after major market contraction in early 2025',
      'Maintaining key client relationships and prepared company for reactivation once market conditions stabilize',
    ],
    technologies: [
      'Supply Chain Management',
      'Cross-Border Trade',
      'Pricing Strategy',
      'CRM',
      'Financial Systems',
    ],
  },

  // ---------------------------------------------------------------------------
  // PREVIOUS POSITION - Horion Digital
  // ---------------------------------------------------------------------------
  {
    id: 'exp-3',
    title: 'Business Development & Account Management',
    company: 'Horion Digital',
    location: 'Vilnius, Lithuania',
    type: 'full-time',
    startDate: '2018-09',
    endDate: '2024-03',
    current: false,
    description:
      'Business development at a quality-oriented custom cloud-data platform and software development company focusing on corporate level clients mainly in North America.',
    achievements: [
      'Negotiated and closed high-value contracts exceeding €1M per year for three consecutive years',
      'Managed key partnerships contributing the majority of annual company revenue',
      'Designed pricing models improving project margin and risk balance',
      'Collaborated with C-level leadership on strategy, operations, and client retention',
      'Offered CFO position in 2024 in recognition of business and financial impact — declined to pursue personal ventures',
    ],
    technologies: [
      'B2B Sales',
      'Account Management',
      'Pricing Models',
      'CRM',
      'Contract Negotiation',
      'Client Retention',
    ],
  },

  // ---------------------------------------------------------------------------
  // EARLIER POSITION - Adform
  // ---------------------------------------------------------------------------
  {
    id: 'exp-4',
    title: 'API Solution Consultant',
    company: 'Adform',
    location: 'Vilnius, Lithuania',
    type: 'full-time',
    startDate: '2016-11',
    endDate: '2018-01',
    current: false,
    description:
      'Supported enterprise clients integrating Adform\'s API ecosystem at a prominent global digital advertising firm, providing technical training and documentation.',
    achievements: [
      'Supported enterprise clients integrating Adform\'s API ecosystem with on-site and webinar training',
      'Owned API documentation and QA, ensuring reliability for top global advertising partners',
      'Regular collaboration with developers using Postman, Swagger, Jira, GitHub, and OAuth2 tools',
    ],
    technologies: [
      'API Integration',
      'Technical Documentation',
      'QA',
      'Postman',
      'Swagger',
      'OAuth2',
      'Jira',
      'GitHub',
    ],
  },

  // ---------------------------------------------------------------------------
  // EARLIEST POSITION - Capital Realty
  // ---------------------------------------------------------------------------
  {
    id: 'exp-5',
    title: 'Real Estate Agent',
    company: 'Capital Realty',
    location: 'Kaunas, Lithuania',
    type: 'full-time',
    startDate: '2015-11',
    endDate: '2016-03',
    current: false,
    description:
      'Conducted property valuations, client acquisition, and market analysis in the Kaunas real estate market.',
    achievements: [
      'Conducted property valuations and market analysis for residential properties',
      'Built client acquisition pipeline and sales fundamentals',
      'Developed negotiation skills later applied in tech and investment roles',
    ],
    technologies: [
      'Property Valuation',
      'Market Analysis',
      'Client Acquisition',
      'Sales',
      'Negotiation',
    ],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get total years of professional experience
 */
export function getTotalYearsOfExperience(): number {
  if (experience.length === 0) return 0;

  const sortedByDate = [...experience].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  const earliestStart = new Date(sortedByDate[0].startDate);
  const latestEnd = sortedByDate.some((exp) => exp.current)
    ? new Date()
    : new Date(
        Math.max(
          ...sortedByDate.map((exp) =>
            exp.endDate ? new Date(exp.endDate).getTime() : 0
          )
        )
      );

  const years = Math.floor(
    (latestEnd.getTime() - earliestStart.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  return years;
}

/**
 * Get current position (if any)
 */
export function getCurrentPosition(): Experience | undefined {
  return experience.find((exp) => exp.current);
}

/**
 * Get all unique technologies across all experience
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  experience.forEach((exp) => {
    exp.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Format date string (YYYY-MM) to readable format
 */
export function formatExperienceDate(dateString: string): string {
  const date = new Date(dateString + '-01');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Get experience duration as string
 */
export function getExperienceDuration(exp: Experience): string {
  const start = new Date(exp.startDate);
  const end = exp.current ? new Date() : new Date(exp.endDate + '-01');

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mo`;
  } else if (remainingMonths === 0) {
    return `${years} yr`;
  } else {
    return `${years} yr ${remainingMonths} mo`;
  }
}
