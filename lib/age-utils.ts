/**
 * Age stage utilities for organizing and filtering content by developmental stages
 */

// Define the age stages
export type AgeStage = "newborn" | "infant" | "toddler";

// Age stage metadata
export interface AgeStageInfo {
  stage: AgeStage;
  label: string;
  ageRange: string;
  ageRangeShort: string;
  description: string;
  href: string;
  color: string; // Tailwind color for theming
}

/**
 * Complete metadata for each age stage
 */
export const AGE_STAGES: Record<AgeStage, AgeStageInfo> = {
  newborn: {
    stage: "newborn",
    label: "Newborn",
    ageRange: "0-3 months",
    ageRangeShort: "0-3mo",
    description: "Everything you need to know about the newborn stage",
    href: "/age/newborn",
    color: "blue",
  },
  infant: {
    stage: "infant",
    label: "Infant",
    ageRange: "3-12 months",
    ageRangeShort: "3-12mo",
    description: "Rapid growth and development in the first year",
    href: "/age/infant",
    color: "green",
  },
  toddler: {
    stage: "toddler",
    label: "Toddler",
    ageRange: "12-36 months",
    ageRangeShort: "12-36mo",
    description: "Walking, talking, and exploring the world",
    href: "/age/toddler",
    color: "purple",
  },
};

/**
 * Map age ranges to their corresponding stage
 */
const AGE_RANGE_TO_STAGE_MAP: Record<string, AgeStage> = {
  "0-3mo": "newborn",
  "3-6mo": "infant",
  "6-9mo": "infant",
  "9-12mo": "infant",
  "12-18mo": "toddler",
  "18-24mo": "toddler",
  "2-3yr": "toddler",
  "3-5yr": "toddler", // Extended toddler range
};

/**
 * Get the age stage from an age range
 * @param ageRange - Age range string (e.g., "0-3mo", "6-9mo")
 * @returns The corresponding age stage
 */
export function getAgeStageFromRange(ageRange: string): AgeStage | null {
  return AGE_RANGE_TO_STAGE_MAP[ageRange] || null;
}

/**
 * Get all age ranges that belong to a specific stage
 * @param stage - The age stage
 * @returns Array of age ranges for that stage
 */
export function getAgeRangesForStage(stage: AgeStage): string[] {
  return Object.entries(AGE_RANGE_TO_STAGE_MAP)
    .filter(([_, stageValue]) => stageValue === stage)
    .map(([range]) => range);
}

/**
 * Get stage information
 * @param stage - The age stage
 * @returns Stage metadata
 */
export function getStageInfo(stage: AgeStage): AgeStageInfo {
  return AGE_STAGES[stage];
}

/**
 * Get all stages in order
 * @returns Array of all age stages
 */
export function getAllStages(): AgeStage[] {
  return ["newborn", "infant", "toddler"];
}

/**
 * Get all stage info in order
 * @returns Array of all stage metadata
 */
export function getAllStageInfo(): AgeStageInfo[] {
  return getAllStages().map((stage) => getStageInfo(stage));
}

/**
 * Check if content has any age ranges that match a specific stage
 * @param ageRanges - Array of age ranges from content
 * @param stage - The age stage to check against
 * @returns True if content is relevant to the stage
 */
export function hasStageContent(
  ageRanges: string[] | undefined,
  stage: AgeStage
): boolean {
  if (!ageRanges || ageRanges.length === 0) {
    return false;
  }

  return ageRanges.some((range) => getAgeStageFromRange(range) === stage);
}

/**
 * Filter content array by age stage
 * @param content - Array of content items with ageRanges property
 * @param stage - The age stage to filter by
 * @returns Filtered content array
 */
export function filterContentByStage<
  T extends { ageRanges?: string[] }
>(content: T[] | undefined, stage: AgeStage): T[] {
  if (!content || !Array.isArray(content)) {
    return [];
  }
  return content.filter((item) => hasStageContent(item.ageRanges, stage));
}

/**
 * Get the previous stage
 * @param currentStage - Current age stage
 * @returns Previous stage or null if at the beginning
 */
export function getPreviousStage(currentStage: AgeStage): AgeStage | null {
  const stages = getAllStages();
  const currentIndex = stages.indexOf(currentStage);
  return currentIndex > 0 ? stages[currentIndex - 1] : null;
}

/**
 * Get the next stage
 * @param currentStage - Current age stage
 * @returns Next stage or null if at the end
 */
export function getNextStage(currentStage: AgeStage): AgeStage | null {
  const stages = getAllStages();
  const currentIndex = stages.indexOf(currentStage);
  return currentIndex < stages.length - 1 ? stages[currentIndex + 1] : null;
}

/**
 * Validate if a string is a valid age stage
 * @param stage - String to validate
 * @returns True if valid stage
 */
export function isValidStage(stage: string): stage is AgeStage {
  return stage === "newborn" || stage === "infant" || stage === "toddler";
}

/**
 * Group content by category for display
 * @param content - Array of content with category property
 * @returns Object with content grouped by category
 */
export function groupContentByCategory<
  T extends { category: string }
>(content: T[]): Record<string, T[]> {
  return content.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

/**
 * Sort content by priority (for Quick Help)
 * @param content - Array of content with priority property
 * @returns Sorted array (high → medium → low)
 */
export function sortByPriority<
  T extends { priority?: "high" | "medium" | "low" }
>(content: T[] | undefined): T[] {
  if (!content || !Array.isArray(content)) {
    return [];
  }
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  return [...content].sort((a, b) => {
    const aPriority = a.priority ? priorityOrder[a.priority] : 3;
    const bPriority = b.priority ? priorityOrder[b.priority] : 3;
    return aPriority - bPriority;
  });
}
