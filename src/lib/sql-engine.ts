import type { Database, QueryExecResult, SqlJsStatic, SqlValue } from "sql.js";
import type { Cell, TableData } from "@/lib/sql-check";

let sqlPromise: Promise<SqlJsStatic> | null = null;

export function loadSql(): Promise<SqlJsStatic> {
  if (!sqlPromise) {
    sqlPromise = (async () => {
      const wasmUrl = (await import("sql.js/dist/sql-wasm-browser.wasm?url")).default;
      const mod = await import("sql.js");
      return mod.default({ locateFile: () => wasmUrl });
    })().catch((error: unknown) => {
      sqlPromise = null;
      throw error;
    });
  }
  return sqlPromise;
}

function asCell(value: SqlValue): Cell {
  if (value == null) return null;
  if (typeof value === "bigint") return Number(value);
  if (value instanceof Uint8Array) return new TextDecoder().decode(value);
  return value;
}

function lastTable(results: QueryExecResult[]): TableData {
  const last = results.length > 0 ? results[results.length - 1] : undefined;
  if (!last) return { columns: [], rows: [] };
  return {
    columns: last.columns,
    rows: last.values.map((row) => row.map(asCell)),
  };
}

function withDb<T>(SQL: SqlJsStatic, run: (db: Database) => T): T {
  const db = new SQL.Database();
  try {
    return run(db);
  } finally {
    db.close();
  }
}

export function execSetup(SQL: SqlJsStatic, setup: string, sql: string): TableData {
  return withDb(SQL, (db) => {
    if (setup.trim()) db.exec(setup);
    if (!sql.trim()) return { columns: [], rows: [] };
    return lastTable(db.exec(sql));
  });
}

export function execChecked(
  SQL: SqlJsStatic,
  setup: string,
  userSql: string,
  checkSql: string | undefined,
): TableData {
  return withDb(SQL, (db) => {
    if (setup.trim()) db.exec(setup);
    if (userSql.trim()) db.exec(userSql);
    const probe = checkSql?.trim() ? checkSql : userSql;
    if (!probe.trim()) return { columns: [], rows: [] };
    return lastTable(db.exec(probe));
  });
}
