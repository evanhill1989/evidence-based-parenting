"use client";

import { type AgeStage, getAllStageInfo } from "@/lib/age-utils";

interface TimelineMilestone {
  month: number;
  text: string;
  stage: AgeStage;
  position: "top" | "bottom"; // Stagger to avoid overlap
}

const TIMELINE_MILESTONES: TimelineMilestone[] = [
  // Newborn (0-3 months)
  { month: 2, text: "Social smile", stage: "newborn", position: "bottom" },

  // Infant (3-12 months)
  { month: 6, text: "Sits independently", stage: "infant", position: "top" },
  { month: 9, text: "Crawls", stage: "infant", position: "bottom" },
  { month: 12, text: "First steps", stage: "infant", position: "top" },

  // Toddler (12-36 months)
  { month: 18, text: "Walks well", stage: "toddler", position: "bottom" },
  { month: 24, text: "Two-word phrases", stage: "toddler", position: "top" },
  { month: 30, text: "Pretend play", stage: "toddler", position: "bottom" },
];

interface DevelopmentTimelineProps {
  currentStage: AgeStage;
}

export function DevelopmentTimeline({
  currentStage,
}: DevelopmentTimelineProps) {
  const stages = getAllStageInfo();

  // Calculate positions for each stage segment
  const getStagePosition = (stage: AgeStage) => {
    const positions = {
      newborn: { start: 0, end: 8.33 }, // 0-3 months out of 36 months = 8.33%
      infant: { start: 8.33, end: 33.33 }, // 3-12 months = 25% (8.33 + 25)
      toddler: { start: 33.33, end: 100 }, // 12-36 months = 66.67%
    };
    return positions[stage];
  };

  // Calculate milestone position along timeline (0-36 months)
  const getMilestonePosition = (month: number) => {
    return (month / 36) * 100;
  };

  const stageColors = {
    newborn: "bg-blue-500",
    infant: "bg-green-500",
    toddler: "bg-purple-500",
  };

  const stageBorderColors = {
    newborn: "border-blue-500",
    infant: "border-green-500",
    toddler: "border-purple-500",
  };

  const stageTextColors = {
    newborn: "text-blue-700",
    infant: "text-green-700",
    toddler: "text-purple-700",
  };

  const stageBgColors = {
    newborn: "bg-blue-50",
    infant: "bg-green-50",
    toddler: "bg-purple-50",
  };

  return (
    <section className="mb-12 rounded-lg border bg-white p-8">
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Development Timeline
        </h2>
        <p className="text-gray-600">
          Visual overview of key milestones from birth to 3 years. Your current
          stage is highlighted.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Month Labels */}
        <div className="mb-4 flex justify-between text-xs font-medium text-gray-500">
          <span>Birth</span>
          <span>6mo</span>
          <span>12mo</span>
          <span>18mo</span>
          <span>24mo</span>
          <span>36mo</span>
        </div>

        {/* Timeline Bar and Milestones Container */}
        <div className="relative h-48">
          {/* Centered Timeline Bar */}
          <div className="absolute top-20 left-0 right-0 h-3 w-full overflow-hidden rounded-full bg-gray-200">
            {/* Stage Segments */}
            {stages.map((stage) => {
              const position = getStagePosition(stage.stage);
              const isCurrentStage = stage.stage === currentStage;

              return (
                <div
                  key={stage.stage}
                  className={`absolute h-full ${stageColors[stage.stage]} ${
                    isCurrentStage ? "opacity-100" : "opacity-40"
                  } transition-opacity`}
                  style={{
                    left: `${position.start}%`,
                    width: `${position.end - position.start}%`,
                  }}
                />
              );
            })}
          </div>

          {/* Milestone Markers */}
          {TIMELINE_MILESTONES.map((milestone, index) => {
            const position = getMilestonePosition(milestone.month);
            const isCurrentStage = milestone.stage === currentStage;
            const isTop = milestone.position === "top";

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${position}%`,
                  transform: "translateX(-50%)",
                  top: 0,
                  height: "100%",
                }}
              >
                {/* Milestone Dot on Timeline */}
                <div
                  className={`absolute h-4 w-4 rounded-full border-2 ${
                    isCurrentStage
                      ? `bg-white ${stageBorderColors[milestone.stage]}`
                      : "border-gray-300 bg-white"
                  } z-10`}
                  style={{
                    left: "50%",
                    top: "86px",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                {/* Vertical Line */}
                <div
                  className={`absolute w-0.5 ${
                    isCurrentStage
                      ? stageColors[milestone.stage]
                      : "bg-gray-300"
                  }`}
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: isTop ? "40px" : "86px",
                    height: isTop ? "48px" : "48px",
                  }}
                />

                {/* Milestone Text */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-32 text-center"
                  style={{
                    top: isTop ? "0px" : "140px",
                  }}
                >
                  <div
                    className={`text-xs ${
                      isCurrentStage
                        ? stageTextColors[milestone.stage]
                        : "text-gray-600"
                    } ${isCurrentStage ? "font-semibold" : ""} leading-tight`}
                  >
                    {milestone.text}
                  </div>
                  <div className="text-xs font-medium text-gray-500 mt-0.5">
                    {milestone.month}mo
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stage Legend */}
      <div className="mt-8 flex flex-wrap gap-4">
        {stages.map((stage) => {
          const isCurrentStage = stage.stage === currentStage;

          return (
            <div
              key={stage.stage}
              className={`flex items-center gap-2 rounded-lg border-2 px-4 py-2 ${
                isCurrentStage
                  ? `${stageBorderColors[stage.stage]} ${
                      stageBgColors[stage.stage]
                    }`
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div
                className={`h-3 w-3 rounded-full ${stageColors[stage.stage]} ${
                  isCurrentStage ? "opacity-100" : "opacity-40"
                }`}
              />
              <div>
                <div
                  className={`text-sm font-semibold ${
                    isCurrentStage
                      ? stageTextColors[stage.stage]
                      : "text-gray-700"
                  }`}
                >
                  {stage.label}
                </div>
                <div className="text-xs text-gray-500">{stage.ageRange}</div>
              </div>
              {isCurrentStage && (
                <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-xs font-medium text-gray-700">
                  You are here
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Info Box */}
      <div className="mt-6 rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          <strong>Remember:</strong> This timeline shows typical developmental
          milestones. Every child develops at their own pace within a normal
          range. The highlighted milestones are examples of major achievements
          during each stage, not comprehensive checklists.
        </p>
      </div>
    </section>
  );
}
