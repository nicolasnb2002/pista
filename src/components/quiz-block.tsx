import { useEffect, useState } from "react";
import type { QuizBlock } from "@/content/types";
import { cn } from "@/lib/cn";

export function QuizBlockView({ block, onSolved }: { block: QuizBlock; onSolved: () => void }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const solved = block.questions.every((question, index) => picked[index] === question.answer);

  useEffect(() => {
    if (solved) onSolved();
  }, [solved, onSolved]);

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-muted">
        Elegí una opción. Podés cambiarla. El bloque se cierra cuando todas quedan bien.
      </p>
      {block.questions.map((question, questionIndex) => {
        const choice = picked[questionIndex];
        const answered = choice !== undefined;
        return (
          <fieldset key={question.prompt} className="flex flex-col gap-2">
            <legend className="mb-1 font-medium">
              {questionIndex + 1}. {question.prompt}
            </legend>
            {question.options.map((option, optionIndex) => {
              const selected = choice === optionIndex;
              const correct = optionIndex === question.answer;
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setPicked((current) => ({ ...current, [questionIndex]: optionIndex }))}
                  className={cn(
                    "min-h-11 rounded-md border px-3 py-2 text-left text-sm",
                    !selected && "border-line bg-paper",
                    selected && correct && "border-pine bg-pine-soft",
                    selected && !correct && "border-danger bg-danger-soft",
                  )}
                >
                  {option}
                </button>
              );
            })}
            {answered ? (
              <p className={cn("text-sm", choice === question.answer ? "text-pine" : "text-danger")}>
                {question.why}
              </p>
            ) : null}
          </fieldset>
        );
      })}
      {solved ? <p className="font-medium text-pine">Quedó cerrado este bloque.</p> : null}
    </div>
  );
}
