import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string to a readable format
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Get age range display name
 */
export function getAgeRangeLabel(ageRange: string): string {
  const labels: Record<string, string> = {
    "0-3mo": "0-3 months",
    "3-6mo": "3-6 months",
    "6-9mo": "6-9 months",
    "9-12mo": "9-12 months",
    "12-18mo": "12-18 months",
    "18-24mo": "18-24 months",
    "2-3yr": "2-3 years",
    "3-5yr": "3-5 years",
  };
  return labels[ageRange] || ageRange;
}

/**
 * Get category display name
 */
export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    development: "Development",
    sleep: "Sleep",
    feeding: "Feeding",
    health: "Health",
    safety: "Safety",
    neurological: "Neurological",
    basics: "Basics",
  };
  return labels[category] || category;
}

/**
 * Get difficulty level display name
 */
export function getDifficultyLabel(difficulty: string): string {
  const labels: Record<string, string> = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  };
  return labels[difficulty] || difficulty;
}
