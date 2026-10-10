import { Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import type { SqlBlock } from "@/content/types";
import { CodeEditor } from "@/components/code-editor";
import { DataTable } from "@/components/data-table";
import { RichText } from "@/components/rich-text";
import { Button } from "@/components/ui/button";
import { compareTables, missingClauses, tableFromObjects, type TableData } from "@/lib/sql-check";
import { execChecked, execSetup, loadSql } from "@/lib/sql-engine";

type Preview = { title: string; table: TableData };

export function SqlLab({ block, onSolved }: { block: SqlBlock; onSolved: () => void }) {
  const storageKey = `pista-code:${block.id}`;
  const [code, setCode] = useState(block.starter);
  const [previews, setPreviews] = useState<Preview[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const [got, setGot] = useState<TableData | null>(null);
  const [expected, setExpected] = useState<TableData | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);
    if (saved != null) setCode(saved);
  }, [storageKey]);

  useEffect(() => {
    sessionStorage.setItem(storageKey, code);
  }, [code, storageKey]);

  useEffect(() => {
    let active = true;
    void (async () => {
      try {
        const SQL = await loadSql();
        const tables = block.previews.map((preview) => ({
          title: preview.title,
          table: execSetup(SQL, block.setup, preview.sql),
        }));
        if (active) setPreviews(tables);
      } catch {
        if (active) setLoadError("No se pudo abrir SQLite en este navegador.");
      }
    })();
    return () => {
      active = false;
    };
  }, [block]);

  async function onRun() {
    setRunning(true);
    setMessage(null);
    setOk(false);
    setGot(null);
    setExpected(null);
    try {
      const SQL = await loadSql();
      const absent = missingClauses(code, block.mustContain);
      const table = execChecked(
        SQL,
        block.setup,
        code,
        block.mode === "mutate" ? block.checkSql : undefined,
      );
      const expectedTable = tableFromObjects(block.expected);
      if (absent.length > 0) {
        setGot(table);
        setExpected(expectedTable);
        setMessage(
          `Esta respuesta tiene que usar ${absent.join(", ")}. No armes el resultado a mano ni te saltees esa cláusula.`,
        );
        return;
      }
      const verdict = compareTables(table, expectedTable, block.orderMatters);
      setGot(table);
      if (verdict.ok) {
        setOk(true);
        setMessage(block.mode === "mutate" ? "Quedó guardado como se pedía." : "La tabla coincide.");
        onSolved();
        return;
      }
      setExpected(verdict.expected);
      setMessage(verdict.message);
    } catch (error) {
      const text = error instanceof Error ? error.message : "Error de SQL";
      setMessage(`SQLite dice: ${text}`);
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <RichText parts={block.prompt} />
      {loadError ? <p className="text-sm text-danger">{loadError}</p> : null}
      {previews ? (
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs text-muted">Datos de partida</p>
          {previews.map((preview) => (
            <DataTable key={preview.title} caption={preview.title} table={preview.table} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">Abriendo la base…</p>
      )}
      <CodeEditor value={code} onChange={setCode} onRun={() => void onRun()} label={block.title} />
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => void onRun()} disabled={running || !!loadError}>
          <Play className="size-4" aria-hidden="true" />
          {running ? "Corriendo" : "Correr"}
        </Button>
        <Button
          variant="quiet"
          onClick={() => {
            setCode(block.starter);
            setMessage(null);
            setGot(null);
            setExpected(null);
            setOk(false);
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
      <p className="text-xs text-muted">Cada corrida parte de los datos de arriba. Ctrl + Enter también corre.</p>
      {showHint ? <p className="rounded-md bg-brass-soft px-3 py-2 text-sm">{block.hint}</p> : null}
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
      {message ? (
        <p
          className={
            ok
              ? "rounded-md bg-pine-soft px-3 py-2 text-sm text-pine"
              : "rounded-md bg-danger-soft px-3 py-2 text-sm text-danger"
          }
        >
          {message}
        </p>
      ) : null}
      {got && got.columns.length > 0 ? (
        <DataTable caption={ok ? "Resultado" : "Tu resultado"} table={got} />
      ) : null}
      {expected && !ok ? <DataTable caption="Esperado" table={expected} /> : null}
    </div>
  );
}
