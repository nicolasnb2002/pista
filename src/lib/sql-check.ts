export type Cell = string | number | null;

export type TableData = {
  columns: string[];
  rows: Cell[][];
};

export type SqlCompare =
  | { ok: true }
  | { ok: false; message: string; got: TableData; expected: TableData };

function normCol(name: string): string {
  return name.trim().toLowerCase();
}

export function sameCell(got: Cell, expected: Cell): boolean {
  if (typeof got === "number" && typeof expected === "number") {
    return Object.is(got, expected);
  }
  return got === expected;
}

export function tableFromObjects(rows: Record<string, Cell>[]): TableData {
  const columns = rows[0] ? Object.keys(rows[0]) : [];
  return {
    columns,
    rows: rows.map((row) => columns.map((column) => (column in row ? row[column] : null))),
  };
}

export function compareTables(got: TableData, expected: TableData, orderMatters: boolean): SqlCompare {
  const expectedCols = expected.columns.map(normCol);
  const gotCols = got.columns.map(normCol);

  if (got.columns.length === 0) {
    return {
      ok: false,
      message: "La consulta no devolvió una tabla. Tiene que ser un SELECT con las columnas pedidas.",
      got,
      expected,
    };
  }

  const missing = expectedCols.filter((column) => !gotCols.includes(column));
  const extra = gotCols.filter((column) => !expectedCols.includes(column));
  if (missing.length > 0 || extra.length > 0) {
    return {
      ok: false,
      message: `Columnas: esperaba ${expected.columns.join(", ")}. Llegaron ${got.columns.join(", ")}.`,
      got,
      expected,
    };
  }

  const project = (table: TableData, sourceCols: string[]) =>
    table.rows.map((row) => expectedCols.map((column) => row[sourceCols.indexOf(column)] ?? null));

  let gotRows = project(got, gotCols);
  let expectedRows = project(expected, expectedCols);

  if (!orderMatters) {
    const key = (row: Cell[]) => JSON.stringify(row);
    gotRows = [...gotRows].sort((a, b) => key(a).localeCompare(key(b)));
    expectedRows = [...expectedRows].sort((a, b) => key(a).localeCompare(key(b)));
  }

  if (gotRows.length !== expectedRows.length) {
    return {
      ok: false,
      message: `Cantidad de filas: esperaba ${expectedRows.length} y llegaron ${gotRows.length}.`,
      got,
      expected,
    };
  }

  for (let rowIndex = 0; rowIndex < expectedRows.length; rowIndex += 1) {
    for (let colIndex = 0; colIndex < expectedCols.length; colIndex += 1) {
      if (!sameCell(gotRows[rowIndex][colIndex], expectedRows[rowIndex][colIndex])) {
        const where = orderMatters ? `la fila ${rowIndex + 1}` : "una fila";
        return {
          ok: false,
          message: `No coincide ${where}, columna ${expected.columns[colIndex]}.`,
          got,
          expected,
        };
      }
    }
  }

  return { ok: true };
}

export function stripSqlComments(sql: string): string {
  return sql.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/--.*$/gm, " ");
}

export function missingClauses(sql: string, needles: string[]): string[] {
  const bare = stripSqlComments(sql).toLowerCase();
  return needles.filter((needle) => !bare.includes(needle.toLowerCase()));
}
