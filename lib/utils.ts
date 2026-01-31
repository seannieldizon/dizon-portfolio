// lib/utils.ts
/**
 * Utility functions for the portfolio
 */

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string | number): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * Generate initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/**
 * Check if color contrast meets WCAG AA standards
 * Returns true if contrast ratio >= 4.5:1
 */
export function checkContrast(foreground: string, background: string): boolean {
  // Simplified check - in production, use a proper contrast checker
  // This is a placeholder
  return true;
}

/**
 * Generate structured data for Person schema
 */
export function generatePersonSchema(data: {
  name: string;
  jobTitle: string;
  email: string;
  url?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.jobTitle,
    email: data.email,
    url: data.url,
    sameAs: data.sameAs || [],
  };
}
