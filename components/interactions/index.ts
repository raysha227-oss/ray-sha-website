/** Interactive behavior remains isolated from content and layout. */
export const plannedInteractions = ["connections"] as const;

export type PlannedInteraction = (typeof plannedInteractions)[number];
