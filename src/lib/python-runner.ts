const PYODIDE = "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/";

const workerSource = `
self.onmessage = async (event) => {
  const data = event.data || {};
  if (data.type !== "run") return;
  const id = data.id;
  try {
    if (!self.__py) {
      self.postMessage({ id: id, status: "loading" });
      importScripts(${JSON.stringify(PYODIDE + "pyodide.js")});
      self.__py = await loadPyodide({ indexURL: ${JSON.stringify(PYODIDE)} });
    }
    self.postMessage({ id: id, status: "running" });
    const py = self.__py;
    py.globals.set("user_code", String(data.userCode || ""));
    py.globals.set("test_code", String(data.testCode || ""));
    const raw = py.runPython(${JSON.stringify(pythonHarness())});
    self.postMessage({ id: id, raw: String(raw) });
  } catch (err) {
    self.postMessage({ id: id, error: String(err && err.message ? err.message : err) });
  }
};
`;

function pythonHarness(): string {
  return `
import json, traceback
from io import StringIO
import sys

ns = {"__name__": "__main__"}
buf = StringIO()
old_out, old_err = sys.stdout, sys.stderr
sys.stdout = buf
sys.stderr = buf
error = None
try:
    exec(compile(user_code, "<tu código>", "exec"), ns, ns)
except Exception:
    error = traceback.format_exc()
ok = False
msg = ""
if error is None and str(test_code).strip():
    try:
        exec(compile(test_code, "<verificación>", "exec"), ns, ns)
        ok = True
        msg = "Correcto."
    except AssertionError as exc:
        msg = str(exc) or "El resultado no es el esperado."
    except Exception:
        error = traceback.format_exc()
elif error is None:
    ok = True
    msg = "Corrió sin errores."
sys.stdout = old_out
sys.stderr = old_err
out = buf.getvalue()
if len(out) > 4000:
    out = out[-4000:]
if error and len(error) > 2500:
    lines = error.strip().splitlines()
    error = "\\n".join(lines[-16:])
json.dumps({"stdout": out, "error": error, "ok": ok, "msg": msg}, ensure_ascii=False)
`;
}

export type PyReport = {
  stdout: string;
  error: string | null;
  ok: boolean;
  msg: string;
};

export type RunPhase = "loading" | "running";

let worker: Worker | null = null;
let generation = 0;
let activeTimer = 0;

function spawnWorker(): Worker {
  const url = URL.createObjectURL(new Blob([workerSource], { type: "text/javascript" }));
  const next = new Worker(url);
  return next;
}

function getWorker(): Worker {
  if (!worker) worker = spawnWorker();
  return worker;
}

function killWorker() {
  worker?.terminate();
  worker = null;
}

export class PythonRunError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PythonRunError";
  }
}

export function runPython(
  userCode: string,
  testCode: string,
  onPhase: (phase: RunPhase) => void,
): Promise<PyReport> {
  const gen = ++generation;
  const id = gen;
  const current = getWorker();
  window.clearTimeout(activeTimer);

  return new Promise((resolve, reject) => {
    const arm = (ms: number) => {
      window.clearTimeout(activeTimer);
      activeTimer = window.setTimeout(() => {
        if (gen !== generation) return;
        killWorker();
        reject(
          new PythonRunError(
            "El código no terminó a tiempo. Revisá que los bucles tengan una salida.",
          ),
        );
      }, ms);
    };

    const fail = (message: string) => {
      if (gen !== generation) return;
      window.clearTimeout(activeTimer);
      reject(new PythonRunError(message));
    };

    current.onerror = () => {
      killWorker();
      fail("No se pudo cargar el intérprete. La primera vez se descarga: revisá la conexión y volvé a correr.");
    };

    current.onmessage = (event: MessageEvent<Record<string, unknown>>) => {
      const data = event.data;
      if (!data || data.id !== id || gen !== generation) return;
      if (data.status === "loading") {
        onPhase("loading");
        arm(90_000);
        return;
      }
      if (data.status === "running") {
        onPhase("running");
        arm(15_000);
        return;
      }
      window.clearTimeout(activeTimer);
      if (typeof data.error === "string") {
        fail(data.error);
        return;
      }
      if (typeof data.raw !== "string") {
        fail("Python no devolvió un resultado.");
        return;
      }
      try {
        resolve(JSON.parse(data.raw) as PyReport);
      } catch {
        fail("No pude leer la salida de Python.");
      }
    };

    arm(90_000);
    current.postMessage({ type: "run", id, userCode, testCode });
  });
}
