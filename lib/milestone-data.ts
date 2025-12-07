import { type AgeStage } from "./age-utils";

export interface Milestone {
  id: string;
  text: string;
  domain: "gross-motor" | "fine-motor" | "language" | "social" | "cognitive";
  isRedFlag?: boolean; // If NOT achieved, it's a red flag
}

export interface MilestoneGroup {
  domain: "gross-motor" | "fine-motor" | "language" | "social" | "cognitive";
  label: string;
  milestones: Milestone[];
}

/**
 * Milestone data for each age stage
 */
export const MILESTONE_DATA: Record<AgeStage, MilestoneGroup[]> = {
  newborn: [
    {
      domain: "gross-motor",
      label: "Gross Motor",
      milestones: [
        {
          id: "newborn-gm-1",
          text: "Lifts head briefly during tummy time",
          domain: "gross-motor",
        },
        {
          id: "newborn-gm-2",
          text: "Pushes up on arms during tummy time (by 3 months)",
          domain: "gross-motor",
        },
        {
          id: "newborn-gm-3",
          text: "Holds head steady when upright (by 3 months)",
          domain: "gross-motor",
          isRedFlag: true,
        },
      ],
    },
    {
      domain: "fine-motor",
      label: "Fine Motor",
      milestones: [
        {
          id: "newborn-fm-1",
          text: "Brings hands to mouth",
          domain: "fine-motor",
        },
        {
          id: "newborn-fm-2",
          text: "Opens and closes hands (by 3 months)",
          domain: "fine-motor",
        },
        {
          id: "newborn-fm-3",
          text: "Swipes at dangling objects (by 3 months)",
          domain: "fine-motor",
        },
      ],
    },
    {
      domain: "language",
      label: "Language & Communication",
      milestones: [
        {
          id: "newborn-lang-1",
          text: "Makes cooing sounds (by 2 months)",
          domain: "language",
        },
        {
          id: "newborn-lang-2",
          text: "Babbles with varied sounds (by 3 months)",
          domain: "language",
          isRedFlag: true,
        },
        {
          id: "newborn-lang-3",
          text: "Turns toward sounds",
          domain: "language",
        },
      ],
    },
    {
      domain: "social",
      label: "Social & Emotional",
      milestones: [
        {
          id: "newborn-soc-1",
          text: "Social smile (by 2 months)",
          domain: "social",
          isRedFlag: true,
        },
        {
          id: "newborn-soc-2",
          text: "Makes eye contact",
          domain: "social",
          isRedFlag: true,
        },
        {
          id: "newborn-soc-3",
          text: "Calms when spoken to or picked up",
          domain: "social",
        },
      ],
    },
  ],
  infant: [
    {
      domain: "gross-motor",
      label: "Gross Motor",
      milestones: [
        {
          id: "infant-gm-1",
          text: "Rolls both directions (by 6 months)",
          domain: "gross-motor",
          isRedFlag: true,
        },
        {
          id: "infant-gm-2",
          text: "Sits without support (by 8 months)",
          domain: "gross-motor",
          isRedFlag: true,
        },
        {
          id: "infant-gm-3",
          text: "Crawls or shows alternative mobility (by 10 months)",
          domain: "gross-motor",
        },
        {
          id: "infant-gm-4",
          text: "Pulls to stand (by 12 months)",
          domain: "gross-motor",
        },
        {
          id: "infant-gm-5",
          text: "Bears weight on legs (by 12 months)",
          domain: "gross-motor",
          isRedFlag: true,
        },
      ],
    },
    {
      domain: "fine-motor",
      label: "Fine Motor",
      milestones: [
        {
          id: "infant-fm-1",
          text: "Reaches for and grasps objects",
          domain: "fine-motor",
        },
        {
          id: "infant-fm-2",
          text: "Transfers objects hand to hand",
          domain: "fine-motor",
        },
        {
          id: "infant-fm-3",
          text: "Pincer grasp (thumb and finger) by 10 months",
          domain: "fine-motor",
          isRedFlag: true,
        },
        {
          id: "infant-fm-4",
          text: "Points with index finger (by 12 months)",
          domain: "fine-motor",
        },
      ],
    },
    {
      domain: "language",
      label: "Language & Communication",
      milestones: [
        {
          id: "infant-lang-1",
          text: "Babbles with varied sounds (by 6 months)",
          domain: "language",
          isRedFlag: true,
        },
        {
          id: "infant-lang-2",
          text: "Responds to own name (by 9 months)",
          domain: "language",
          isRedFlag: true,
        },
        {
          id: "infant-lang-3",
          text: "Says 'mama' or 'dada' (may not be specific yet)",
          domain: "language",
        },
        {
          id: "infant-lang-4",
          text: "Understands simple words like 'no' (by 12 months)",
          domain: "language",
        },
      ],
    },
    {
      domain: "social",
      label: "Social & Emotional",
      milestones: [
        {
          id: "infant-soc-1",
          text: "Shows excitement when sees familiar people",
          domain: "social",
        },
        {
          id: "infant-soc-2",
          text: "Stranger anxiety may emerge (6-9 months)",
          domain: "social",
        },
        {
          id: "infant-soc-3",
          text: "Plays gesture games (peek-a-boo, pat-a-cake)",
          domain: "social",
          isRedFlag: true,
        },
        {
          id: "infant-soc-4",
          text: "Waves bye-bye (by 12 months)",
          domain: "social",
        },
      ],
    },
    {
      domain: "cognitive",
      label: "Cognitive",
      milestones: [
        {
          id: "infant-cog-1",
          text: "Looks for partially hidden objects",
          domain: "cognitive",
        },
        {
          id: "infant-cog-2",
          text: "Explores objects by shaking, banging, dropping",
          domain: "cognitive",
        },
        {
          id: "infant-cog-3",
          text: "Understands object permanence (by 12 months)",
          domain: "cognitive",
        },
      ],
    },
  ],
  toddler: [
    {
      domain: "gross-motor",
      label: "Gross Motor",
      milestones: [
        {
          id: "toddler-gm-1",
          text: "Walks independently (by 18 months)",
          domain: "gross-motor",
          isRedFlag: true,
        },
        {
          id: "toddler-gm-2",
          text: "Runs (by 24 months)",
          domain: "gross-motor",
        },
        {
          id: "toddler-gm-3",
          text: "Kicks a ball (by 24 months)",
          domain: "gross-motor",
        },
        {
          id: "toddler-gm-4",
          text: "Walks up/down stairs with support (by 24 months)",
          domain: "gross-motor",
        },
        {
          id: "toddler-gm-5",
          text: "Jumps with both feet (by 30 months)",
          domain: "gross-motor",
        },
      ],
    },
    {
      domain: "fine-motor",
      label: "Fine Motor",
      milestones: [
        {
          id: "toddler-fm-1",
          text: "Stacks 2-3 blocks (by 18 months)",
          domain: "fine-motor",
        },
        {
          id: "toddler-fm-2",
          text: "Scribbles with crayons (by 18 months)",
          domain: "fine-motor",
        },
        {
          id: "toddler-fm-3",
          text: "Uses spoon (messily) by 18 months",
          domain: "fine-motor",
        },
        {
          id: "toddler-fm-4",
          text: "Stacks 6+ blocks (by 24 months)",
          domain: "fine-motor",
        },
        {
          id: "toddler-fm-5",
          text: "Turns pages in books (by 24 months)",
          domain: "fine-motor",
        },
      ],
    },
    {
      domain: "language",
      label: "Language & Communication",
      milestones: [
        {
          id: "toddler-lang-1",
          text: "Says 5-10 words (by 18 months)",
          domain: "language",
          isRedFlag: true,
        },
        {
          id: "toddler-lang-2",
          text: "Points to show interest (by 18 months)",
          domain: "language",
          isRedFlag: true,
        },
        {
          id: "toddler-lang-3",
          text: "50+ words (by 24 months)",
          domain: "language",
          isRedFlag: true,
        },
        {
          id: "toddler-lang-4",
          text: "Combines 2 words ('more milk', 'daddy go') by 24 months",
          domain: "language",
          isRedFlag: true,
        },
        {
          id: "toddler-lang-5",
          text: "Uses 3-4 word sentences (by 36 months)",
          domain: "language",
        },
      ],
    },
    {
      domain: "social",
      label: "Social & Emotional",
      milestones: [
        {
          id: "toddler-soc-1",
          text: "Shows affection to familiar people",
          domain: "social",
        },
        {
          id: "toddler-soc-2",
          text: "Plays alongside other children (parallel play)",
          domain: "social",
        },
        {
          id: "toddler-soc-3",
          text: "Shows defiant behavior ('no!')",
          domain: "social",
        },
        {
          id: "toddler-soc-4",
          text: "Shows empathy (comforts others)",
          domain: "social",
        },
        {
          id: "toddler-soc-5",
          text: "Beginning interactive play with peers (by 36 months)",
          domain: "social",
        },
      ],
    },
    {
      domain: "cognitive",
      label: "Cognitive",
      milestones: [
        {
          id: "toddler-cog-1",
          text: "Finds hidden objects easily",
          domain: "cognitive",
        },
        {
          id: "toddler-cog-2",
          text: "Imitates behaviors",
          domain: "cognitive",
        },
        {
          id: "toddler-cog-3",
          text: "Simple pretend play (by 24 months)",
          domain: "cognitive",
        },
        {
          id: "toddler-cog-4",
          text: "Sorts shapes and colors (by 36 months)",
          domain: "cognitive",
        },
      ],
    },
  ],
};

/**
 * Get milestones for a specific age stage
 */
export function getMilestonesForStage(stage: AgeStage): MilestoneGroup[] {
  return MILESTONE_DATA[stage] || [];
}

/**
 * Get domain label for display
 */
export function getDomainLabel(domain: string): string {
  const labels: Record<string, string> = {
    "gross-motor": "Gross Motor",
    "fine-motor": "Fine Motor",
    language: "Language & Communication",
    social: "Social & Emotional",
    cognitive: "Cognitive",
  };
  return labels[domain] || domain;
}
