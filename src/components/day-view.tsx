import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlockFrame } from "@/components/block-frame";
import { PythonLab } from "@/components/python-lab";
import { QuizBlockView } from "@/components/quiz-block";
import { ReadBlockView } from "@/components/read-block";
import { Shell } from "@/components/shell";
import { SqlLab } from "@/components/sql-lab";
import { useTrack } from "@/components/progress-hydrator";
import { Button } from "@/components/ui/button";
import type { Day } from "@/content/types";
import { dayMinutes } from "@/content/types";

export function DayView({ day }: { day: Day }) {
  const { done, mark } = useTrack();
  const total = day.blocks.length;
  const finished = day.blocks.filter((block) => done[block.id]).length;
  const minutes = dayMinutes(day);

  return (
    <Shell>
      <Link
        to="/"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-line underline-offset-4 hover:decoration-brass"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Los diez días
      </Link>
      <p className="mt-4 text-sm font-medium text-brass">Día {day.n} de 10</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">{day.title}</h1>
      <p className="mt-3 max-w-2xl text-lg">{day.outcome}</p>
      <p className="mt-2 font-mono text-xs text-muted">
        {minutes} min · {finished} de {total} bloques
      </p>
      <nav className="mt-6 flex gap-2 overflow-x-auto pb-1" aria-label="Bloques del día">
        {day.blocks.map((block, index) => (
          <a
            key={block.id}
            href={`#${block.id}`}
            className="inline-flex min-h-11 shrink-0 items-center rounded-md border border-line bg-card px-3 text-sm"
          >
            <span className="mr-2 font-mono text-xs text-brass">{String(index + 1).padStart(2, "0")}</span>
            {block.title}
          </a>
        ))}
      </nav>
      <div className="mt-6 flex flex-col gap-4">
        {day.blocks.map((block, index) => (
          <BlockFrame
            key={block.id}
            id={block.id}
            index={index + 1}
            total={total}
            title={block.title}
            minutes={block.minutes}
            done={Boolean(done[block.id])}
          >
            {block.type === "read" ? (
              <ReadBlockView block={block} done={Boolean(done[block.id])} onDone={() => mark(block.id)} />
            ) : null}
            {block.type === "quiz" ? <QuizBlockView block={block} onSolved={() => mark(block.id)} /> : null}
            {block.type === "python" ? <PythonLab block={block} onSolved={() => mark(block.id)} /> : null}
            {block.type === "sql" ? <SqlLab block={block} onSolved={() => mark(block.id)} /> : null}
          </BlockFrame>
        ))}
      </div>
      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
        {day.n > 1 ? (
          <Button variant="quiet" asChild>
            <Link to="/dia/$n" params={{ n: String(day.n - 1) }}>
              <ArrowLeft className="size-4" aria-hidden="true" />
              Día {day.n - 1}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {day.n < 10 ? (
          <Button asChild>
            <Link to="/dia/$n" params={{ n: String(day.n + 1) }}>
              Día {day.n + 1}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link to="/repaso">
              Hoja de repaso
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        )}
      </footer>
    </Shell>
  );
}
