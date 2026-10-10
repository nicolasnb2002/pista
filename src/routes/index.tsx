import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/shell";
import { useTrack } from "@/components/progress-hydrator";
import { Button } from "@/components/ui/button";
import { days } from "@/content/curriculum";
import { dayMinutes } from "@/content/types";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { ready, done, reset } = useTrack();
  const [confirmReset, setConfirmReset] = useState(false);
  const [endLabel, setEndLabel] = useState<string | null>(null);

  useEffect(() => {
    const end = new Date();
    end.setDate(end.getDate() + 9);
    setEndLabel(new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long" }).format(end));
  }, []);

  const totalBlocks = days.reduce((sum, day) => sum + day.blocks.length, 0);
  const doneBlocks = days.reduce(
    (sum, day) => sum + day.blocks.filter((block) => done[block.id]).length,
    0,
  );
  const next = days.find((day) => day.blocks.some((block) => !done[block.id]));
  const allDone = ready && !next;

  return (
    <Shell>
      <p className="text-sm font-medium text-brass">10 días · cerca de una hora</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">Pista</h1>
      <p className="mt-4 text-lg">
        Diez jornadas para llegar a AI Engineering leyendo Python y hablando SQL. Sin instalar nada: el
        código corre en este navegador.
      </p>
      <p className="mt-3 text-muted">
        El curso entra a modelos, RAG y APIs. Esto es lo de antes: tipos, funciones, JSON y tablas. Si nunca
        programaste, empezá por el día 1. Si ya programaste en otro lenguaje, vas a ir más rápido: no te
        saltees los días 3, 5 y 9.
      </p>
      {endLabel ? (
        <p className="mt-3 text-sm">
          Un día por jornada, terminás el <span className="font-semibold">{endLabel}</span>.
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        {allDone ? (
          <Button asChild>
            <Link to="/repaso">Abrir la hoja de repaso</Link>
          </Button>
        ) : (
          <Button asChild>
            <Link to="/dia/$n" params={{ n: String((next ?? days[0]).n) }}>
              {doneBlocks === 0 ? "Empezar el día 1" : `Seguir en el día ${(next ?? days[0]).n}`}
            </Link>
          </Button>
        )}
        <Button variant="quiet" asChild>
          <Link to="/repaso">Repaso de una página</Link>
        </Button>
      </div>

      <p className="mt-4 font-mono text-xs text-muted">
        {ready ? `${doneBlocks} de ${totalBlocks} bloques` : `${totalBlocks} bloques`} · el avance queda en
        este navegador
      </p>

      <ol className="mt-8 flex flex-col gap-3">
        {days.map((day) => {
          const complete = day.blocks.every((block) => done[block.id]);
          const current = next?.n === day.n;
          const doneCount = day.blocks.filter((block) => done[block.id]).length;
          return (
            <li key={day.n}>
              <Link
                to="/dia/$n"
                params={{ n: String(day.n) }}
                className={cn(
                  "block rounded-md border bg-card px-4 py-4",
                  current ? "border-brass" : "border-line",
                )}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-mono text-xs text-brass">{String(day.n).padStart(2, "0")}</p>
                  <p className="font-mono text-xs text-muted">{dayMinutes(day)} min</p>
                </div>
                <h2 className="mt-1 text-lg font-semibold tracking-tight">{day.title}</h2>
                <p className="mt-1 text-sm text-muted">{day.outcome}</p>
                {ready && doneCount > 0 ? (
                  <p className="mt-2 font-mono text-xs text-pine">
                    {complete ? "Día cerrado" : `${doneCount} de ${day.blocks.length}`}
                  </p>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ol>

      <section className="mt-4 rounded-md border border-line bg-card p-4">
        <h2 className="font-semibold">Cómo usarla</h2>
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-sm">
          <li>Leé el bloque, corré el código y no pases al siguiente día con checks en rojo.</li>
          <li>La pista y la solución están para destrabarte, no para saltear el ejercicio.</li>
          <li>Una hora alcanza si no adelantás dos días el mismo rato. Si te sobran quince minutos, repasá el bloque que dudaste.</li>
        </ul>
      </section>

      <p className="mt-6 text-sm text-muted">
        Preparación para{" "}
        <a
          href="https://icaro.org.ar/producto/ai-engineering/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-brass underline-offset-4"
        >
          AI Engineering de ICARO
        </a>
        . Python y bases de datos, nada de frameworks todavía.
      </p>

      <div className="mt-6">
        {confirmReset ? (
          <div className="flex flex-wrap gap-2">
            <Button
              variant="quiet"
              onClick={() => {
                reset();
                setConfirmReset(false);
              }}
            >
              Sí, borrar avance
            </Button>
            <Button variant="ghost" onClick={() => setConfirmReset(false)}>
              Cancelar
            </Button>
          </div>
        ) : (
          <Button variant="ghost" onClick={() => setConfirmReset(true)}>
            Borrar avance de este navegador
          </Button>
        )}
      </div>
    </Shell>
  );
}
