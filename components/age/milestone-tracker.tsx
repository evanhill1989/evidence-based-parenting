"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { type AgeStage } from "@/lib/age-utils";
import { getMilestonesForStage, type MilestoneGroup } from "@/lib/milestone-data";

interface MilestoneTrackerProps {
  stage: AgeStage;
}

export function MilestoneTracker({ stage }: MilestoneTrackerProps) {
  const [checkedMilestones, setCheckedMilestones] = useState<Set<string>>(new Set());
  const [expandedDomains, setExpandedDomains] = useState<Set<string>>(new Set(["gross-motor"]));
  const [isClient, setIsClient] = useState(false);

  const milestoneGroups = getMilestonesForStage(stage);
  const totalMilestones = milestoneGroups.reduce(
    (sum, group) => sum + group.milestones.length,
    0
  );
  const checkedCount = checkedMilestones.size;
  const progress = totalMilestones > 0 ? (checkedCount / totalMilestones) * 100 : 0;

  // Load from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const storageKey = `milestone-tracker-${stage}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCheckedMilestones(new Set(parsed));
      } catch (e) {
        console.error("Failed to load milestone data:", e);
      }
    }
  }, [stage]);

  // Save to localStorage when checked milestones change
  useEffect(() => {
    if (isClient) {
      const storageKey = `milestone-tracker-${stage}`;
      localStorage.setItem(
        storageKey,
        JSON.stringify(Array.from(checkedMilestones))
      );
    }
  }, [checkedMilestones, stage, isClient]);

  const toggleMilestone = (milestoneId: string) => {
    setCheckedMilestones((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(milestoneId)) {
        newSet.delete(milestoneId);
      } else {
        newSet.add(milestoneId);
      }
      return newSet;
    });
  };

  const toggleDomain = (domain: string) => {
    setExpandedDomains((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(domain)) {
        newSet.delete(domain);
      } else {
        newSet.add(domain);
      }
      return newSet;
    });
  };

  const getUncheckedRedFlags = () => {
    const redFlags: string[] = [];
    milestoneGroups.forEach((group) => {
      group.milestones.forEach((milestone) => {
        if (milestone.isRedFlag && !checkedMilestones.has(milestone.id)) {
          redFlags.push(milestone.text);
        }
      });
    });
    return redFlags;
  };

  const uncheckedRedFlags = getUncheckedRedFlags();

  return (
    <section className="mb-12 rounded-lg border bg-white p-8">
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Milestone Tracker
        </h2>
        <p className="text-gray-600">
          Track your child&apos;s developmental progress. Check off milestones as they
          achieve them.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-gray-700">
            Progress: {checkedCount} of {totalMilestones} milestones
          </span>
          <span className="font-medium text-primary-600">{Math.round(progress)}%</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-primary-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Red Flag Warning */}
      {uncheckedRedFlags.length > 0 && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600" />
            <div>
              <h3 className="mb-1 font-semibold text-red-900">
                Important Milestones to Watch
              </h3>
              <p className="text-sm text-red-800">
                The following milestones are important developmental markers. If your
                child hasn&apos;t achieved these by the noted age, consider discussing
                with your pediatrician:
              </p>
              <ul className="mt-2 list-inside list-disc text-sm text-red-800">
                {uncheckedRedFlags.slice(0, 3).map((flag, index) => (
                  <li key={index}>{flag}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Milestone Groups */}
      <div className="space-y-4">
        {milestoneGroups.map((group) => {
          const isExpanded = expandedDomains.has(group.domain);
          const groupCheckedCount = group.milestones.filter((m) =>
            checkedMilestones.has(m.id)
          ).length;
          const groupTotal = group.milestones.length;
          const groupProgress = (groupCheckedCount / groupTotal) * 100;

          return (
            <div key={group.domain} className="rounded-lg border">
              {/* Domain Header */}
              <button
                onClick={() => toggleDomain(group.domain)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100">
                    {groupCheckedCount === groupTotal ? (
                      <CheckCircle2 className="h-5 w-5 text-primary-600" />
                    ) : (
                      <span className="text-sm font-semibold text-primary-600">
                        {groupCheckedCount}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{group.label}</h3>
                    <p className="text-sm text-gray-500">
                      {groupCheckedCount} of {groupTotal} completed
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-primary-600 transition-all"
                      style={{ width: `${groupProgress}%` }}
                    />
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Milestone List */}
              {isExpanded && (
                <div className="border-t p-4">
                  <div className="space-y-3">
                    {group.milestones.map((milestone) => {
                      const isChecked = checkedMilestones.has(milestone.id);
                      return (
                        <label
                          key={milestone.id}
                          className="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleMilestone(milestone.id)}
                            className="mt-0.5 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <div className="flex-1">
                            <span
                              className={`${
                                isChecked
                                  ? "text-gray-500 line-through"
                                  : "text-gray-900"
                              }`}
                            >
                              {milestone.text}
                            </span>
                            {milestone.isRedFlag && !isChecked && (
                              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                                <AlertTriangle className="h-3 w-3" />
                                Important
                              </span>
                            )}
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="mt-6 rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> All children develop at their own pace. These
          milestones are guidelines, not deadlines. Variation within the normal range
          is common and expected. If you have concerns about your child&apos;s
          development, consult your pediatrician.
        </p>
      </div>
    </section>
  );
}
