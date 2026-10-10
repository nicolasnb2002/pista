import { daysA } from "@/content/days-a";
import { daysB } from "@/content/days-b";
import type { Day } from "@/content/types";

export const days: Day[] = [...daysA, ...daysB];

const seen = new Set<string>();
for (const day of days) {
  for (const block of day.blocks) {
    if (seen.has(block.id)) throw new Error(`Bloque duplicado: ${block.id}`);
    seen.add(block.id);
  }
}

export function getDay(n: number): Day | undefined {
  return days.find((day) => day.n === n);
}
