import type { Cell, TableData } from "@/lib/sql-check";

function show(value: Cell): string {
  if (value === null) return "NULL";
  return String(value);
}

export function DataTable({ table, caption }: { table: TableData; caption?: string }) {
  if (table.columns.length === 0) {
    return <p className="text-sm text-muted">Sin filas.</p>;
  }
  return (
    <div className="max-w-full overflow-x-auto rounded-md border border-line">
      <table className="w-full border-collapse text-left text-sm">
        {caption ? <caption className="px-3 py-2 text-left font-mono text-xs text-muted">{caption}</caption> : null}
        <thead className="bg-paper">
          <tr>
            {table.columns.map((column) => (
              <th key={column} className="border-b border-line px-3 py-2 font-mono text-xs font-medium">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.length === 0 ? (
            <tr>
              <td className="px-3 py-2 text-muted" colSpan={table.columns.length}>
                0 filas
              </td>
            </tr>
          ) : (
            table.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-paper">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border-b border-line px-3 py-2 font-mono text-xs">
                    {show(cell)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
