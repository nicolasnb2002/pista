export const DOCUMENTS_SQL = `
CREATE TABLE documentos (
  id INTEGER PRIMARY KEY,
  titulo TEXT NOT NULL,
  fuente TEXT NOT NULL,
  tokens INTEGER NOT NULL,
  coleccion TEXT NOT NULL
);
INSERT INTO documentos (id, titulo, fuente, tokens, coleccion) VALUES
  (1, 'Guía de prompts', 'interno', 800, 'curso'),
  (2, 'Precios de APIs', 'web', 400, 'costos'),
  (3, 'Política de datos', 'interno', 1200, 'legal'),
  (4, 'Notas de RAG', 'interno', 1500, 'curso'),
  (5, 'Changelog del modelo', 'web', 300, 'modelos'),
  (6, 'Manual de onboarding', 'interno', 900, 'curso');
`;

export const COLLECTIONS_SQL = `
CREATE TABLE colecciones (
  nombre TEXT PRIMARY KEY,
  responsable TEXT NOT NULL
);
INSERT INTO colecciones (nombre, responsable) VALUES
  ('curso', 'Mora'),
  ('costos', 'Ivan'),
  ('legal', 'Mora'),
  ('modelos', 'Ivan');
`;

export const DOC_PREVIEW = {
  title: "documentos",
  sql: "SELECT id, titulo, fuente, tokens, coleccion FROM documentos ORDER BY id",
};

export const COL_PREVIEW = {
  title: "colecciones",
  sql: "SELECT nombre, responsable FROM colecciones ORDER BY nombre",
};

export const CHUNKS_SQL = `
CREATE TABLE chunks (
  id INTEGER PRIMARY KEY,
  documento_id INTEGER NOT NULL,
  texto TEXT NOT NULL,
  posicion INTEGER NOT NULL
);
INSERT INTO chunks (id, documento_id, texto, posicion) VALUES
  (1, 4, 'RAG busca fragmentos, no el documento entero.', 1),
  (2, 4, 'Sin RAG el modelo solo usa su memoria.', 0),
  (3, 1, 'Un prompt claro pide el formato de salida.', 0),
  (4, 2, 'El costo depende de los tokens de entrada.', 0);
`;

export const CHUNK_PREVIEW = {
  title: "chunks",
  sql: "SELECT id, documento_id, posicion, texto FROM chunks ORDER BY id",
};
