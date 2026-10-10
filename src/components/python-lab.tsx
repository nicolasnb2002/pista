import { Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import type { PythonBlock } from "@/content/types";
import { CodeEditor } from "@/components/code-editor";
import { RichText } from "@/components/rich-text";
import { Button } from "@/components/ui/button";
import { PythonRunError, runPython, type PyReport, type RunPhase } from "@/lib/python-runner";

export function PythonLab({ block, onSolved }: { block: PythonBlock; onSolved: () => void }) {
  const storageKey = `pista-code:${block.id}`;
  const [code, setCode] = useState(block.starter);
  const [phase, setPhase] = useState<RunPhase | "idle">("idle");
  const [report, setReport] = useState<PyReport | null>(null);
  const [failure, setFailure] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);
    if (saved != null) setCode(saved);
  }, [storageKey]);

  useEffect(() => {
    sessionStorage.setItem(storageKey, code);
  }, [code, storageKey]);

  async function onRun() {
    setPhase("running");
    setFailure(null);
    setReport(null);
    try {
      const next = await runPython(code, block.graded ? block.tests : "", (status) => setPhase(status));
      setReport(next);
      setPhase("idle");
      if (next.ok && !next.error) onSolved();
    } catch (error) {
      setPhase("idle");
      if (error instanceof PythonRunError) setFailure(error.message);
      else setFailure("No se pudo correr Python.");
    }
  }

  const running = phase !== "idle";
  const phaseLabel =
    phase === "loading"
      ? "Cargando Python, la primera vez tarda un poco…"
      : phase === "running"
        ? "Corriendo…"
        : null;

  return (
    <div className="flex flex-col gap-4">
      <RichText parts={block.prompt} />
      <CodeEditor value={code} onChange={setCode} onRun={() => void onRun()} label={block.title} />
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => void onRun()} disabled={running}>
          <Play className="size-4" aria-hidden="true" />
          {running ? "Corriendo" : "Correr"}
        </Button>
        <Button
          variant="quiet"
          onClick={() => {
            setCode(block.starter);
            setReport(null);
            setFailure(null);
          }}
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Restablecer
        </Button>
        <Button variant="ghost" onClick={() => setShowHint((value) => !value)}>
          {showHint ? "Ocultar pista" : "Pista"}
        </Button>
        <Button variant="ghost" onClick={() => setShowSolution((value) => !value)}>
          {showSolution ? "Ocultar solución" : "Ver solución"}
        </Button>
      </div>
      <p className="text-xs text-muted">Ctrl + Enter también corre. Un bucle sin salida se corta solo.</p>
      {phaseLabel ? <p className="text-sm text-muted">{phaseLabel}</p> : null}
      {showHint ? (
        <p className="rounded-md bg-brass-soft px-3 py-2 text-sm">{block.hint}</p>
      ) : null}
      {showSolution ? (
        <div className="flex flex-col gap-2">
          <pre className="max-w-full overflow-x-auto rounded-md border border-line bg-code p-4 font-mono text-sm leading-relaxed text-ink">
            <code>{block.solution}</code>
          </pre>
          <div>
            <Button
              variant="quiet"
              onClick={() => {
                setCode(block.solution);
                setShowSolution(false);
              }}
            >
              Usar esta solución
            </Button>
          </div>
        </div>
      ) : null}
      {failure ? (
        <p className="rounded-md bg-danger-soft px-3 py-2 text-sm text-danger">{failure}</p>
      ) : null}
      {report ? (
        <div className="flex flex-col gap-2">
          <p
            className={
              report.ok && !report.error
                ? "rounded-md bg-pine-soft px-3 py-2 text-sm text-pine"
                : "rounded-md bg-danger-soft px-3 py-2 text-sm text-danger"
            }
          >
            {report.error ? "El código lanzó un error." : report.msg}
          </p>
          {report.stdout ? (
            <pre className="max-w-full overflow-x-auto rounded-md border border-line bg-code p-4 font-mono text-sm leading-relaxed text-ink">
              <code>{report.stdout}</code>
            </pre>
          ) : null}
          {report.error ? (
            <pre className="max-w-full overflow-x-auto whitespace-pre-wrap rounded-md bg-danger-soft p-4 font-mono text-sm leading-relaxed text-danger">
              <code>{report.error}</code>
            </pre>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
