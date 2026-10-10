export type RichPart =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "code"; text: string }
  | { kind: "note"; tone: "course" | "tip" | "warn"; title: string; text: string };

export type QuizQuestion = {
  prompt: string;
  options: string[];
  answer: number;
  why: string;
};

type BlockBase = { id: string; title: string; minutes: number };

export type ReadBlock = BlockBase & { type: "read"; body: RichPart[] };

export type QuizBlock = BlockBase & { type: "quiz"; questions: QuizQuestion[] };

export type PythonBlock = BlockBase & {
  type: "python";
  graded: boolean;
  prompt: RichPart[];
  starter: string;
  tests: string;
  hint: string;
  solution: string;
};

export type SqlBlock = BlockBase & {
  type: "sql";
  prompt: RichPart[];
  starter: string;
  setup: string;
  previews: { title: string; sql: string }[];
  mode: "select" | "mutate";
  expected: Record<string, string | number | null>[];
  orderMatters: boolean;
  checkSql?: string;
  mustContain: string[];
  hint: string;
  solution: string;
};

export type Block = ReadBlock | QuizBlock | PythonBlock | SqlBlock;

export type Day = {
  n: number;
  title: string;
  outcome: string;
  blocks: Block[];
};

export function dayMinutes(day: Day): number {
  return day.blocks.reduce((sum, block) => sum + block.minutes, 0);
}
