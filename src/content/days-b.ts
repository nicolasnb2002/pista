import type { Day } from "@/content/types";
import {
  CHUNK_PREVIEW,
  CHUNKS_SQL,
  COL_PREVIEW,
  COLLECTIONS_SQL,
  DOC_PREVIEW,
  DOCUMENTS_SQL,
} from "@/content/sql-fixtures";

const docs = DOCUMENTS_SQL;
const docsAndCollections = `${DOCUMENTS_SQL}\n${COLLECTIONS_SQL}`;
const docsAndChunks = `${DOCUMENTS_SQL}\n${CHUNKS_SQL}`;

export const daysB: Day[] = [
  {
    n: 6,
    title: "Consultar una tabla",
    outcome: "Leés una tabla con SELECT, WHERE, ORDER BY y LIMIT.",
    blocks: [
      {
        type: "read",
        id: "d6-modelo",
        title: "Una tabla es una lista de hechos parecidos",
        minutes: 10,
        body: [
          {
            kind: "p",
            text: "Una base relacional guarda filas en tablas. Cada fila es un hecho. Cada columna es un campo de ese hecho. La clave primaria (`id`) identifica la fila y no se repite.",
          },
          {
            kind: "ul",
            items: [
              "Tabla: `documentos`.",
              "Fila: un documento concreto.",
              "Columna: `titulo`, `fuente`, `tokens`, `coleccion`.",
              "`NOT NULL` significa que esa columna no puede quedar vacía.",
            ],
          },
          {
            kind: "p",
            text: "SQL le pregunta a esa tabla. No la modifica si solo usás `SELECT`. Cada corrida de estos ejercicios vuelve a los datos de partida: podés probar sin miedo.",
          },
          {
            kind: "note",
            tone: "course",
            title: "Antes del embedding está el filtro",
            text: "En RAG vas a buscar por similitud. Igual, casi siempre filtrás antes: solo documentos internos, solo esta colección, solo lo que entra en el presupuesto de tokens. Ese filtro es SQL, o la misma idea.",
          },
        ],
      },
      {
        type: "read",
        id: "d6-select",
        title: "SELECT elige columnas y filas",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "`SELECT` dice qué columnas querés. `FROM` dice de qué tabla. `WHERE` se queda con algunas filas. `ORDER BY` las ordena. `LIMIT` corta la cantidad. El orden de las palabras es ese, no otro.",
          },
          {
            kind: "code",
            text: `SELECT titulo, tokens
FROM documentos
WHERE coleccion = 'curso'
ORDER BY tokens DESC;`,
          },
          {
            kind: "p",
            text: "En SQL las textos van con comillas simples. `DESC` es de mayor a menor. `ASC` es de menor a mayor y es el orden por defecto. `ORDER BY` no cambia lo que está guardado: solo cómo vuelve la respuesta.",
          },
          {
            kind: "note",
            tone: "tip",
            title: "Pedí las columnas por su nombre",
            text: "Evitá SELECT *. En estos ejercicios el check compara los nombres de columna que pide el enunciado.",
          },
        ],
      },
      {
        type: "sql",
        id: "d6-curso",
        title: "Los del curso, del más largo al más corto",
        minutes: 12,
        prompt: [
          {
            kind: "p",
            text: "Traé `titulo` y `tokens` de los documentos cuya `coleccion` es `curso`. Ordenalos de más tokens a menos.",
          },
        ],
        starter: `SELECT titulo, tokens
FROM documentos
`,
        setup: docs,
        previews: [DOC_PREVIEW],
        mode: "select",
        orderMatters: true,
        mustContain: ["where", "order by"],
        expected: [
          { titulo: "Notas de RAG", tokens: 1500 },
          { titulo: "Manual de onboarding", tokens: 900 },
          { titulo: "Guía de prompts", tokens: 800 },
        ],
        hint: "WHERE coleccion = 'curso' y ORDER BY tokens DESC.",
        solution: `SELECT titulo, tokens
FROM documentos
WHERE coleccion = 'curso'
ORDER BY tokens DESC;
`,
      },
      {
        type: "sql",
        id: "d6-cortos",
        title: "Los dos más cortos",
        minutes: 10,
        prompt: [
          {
            kind: "p",
            text: "Traé `titulo` y `tokens` de los dos documentos con menos tokens, de menor a mayor.",
          },
        ],
        starter: `SELECT titulo, tokens
FROM documentos
`,
        setup: docs,
        previews: [DOC_PREVIEW],
        mode: "select",
        orderMatters: true,
        mustContain: ["order by", "limit"],
        expected: [
          { titulo: "Changelog del modelo", tokens: 300 },
          { titulo: "Precios de APIs", tokens: 400 },
        ],
        hint: "ORDER BY tokens ASC y LIMIT 2. ASC se puede omitir, pero LIMIT no.",
        solution: `SELECT titulo, tokens
FROM documentos
ORDER BY tokens ASC
LIMIT 2;
`,
      },
      {
        type: "sql",
        id: "d6-web",
        title: "Solo lo que vino de la web",
        minutes: 10,
        prompt: [
          {
            kind: "p",
            text: "Traé `titulo` y `fuente` de los documentos con `fuente` igual a `web`, ordenados por título de la A a la Z.",
          },
        ],
        starter: `SELECT titulo, fuente
FROM documentos
`,
        setup: docs,
        previews: [DOC_PREVIEW],
        mode: "select",
        orderMatters: true,
        mustContain: ["where", "order by"],
        expected: [
          { titulo: "Changelog del modelo", fuente: "web" },
          { titulo: "Precios de APIs", fuente: "web" },
        ],
        hint: "WHERE fuente = 'web' y ORDER BY titulo.",
        solution: `SELECT titulo, fuente
FROM documentos
WHERE fuente = 'web'
ORDER BY titulo;
`,
      },
      {
        type: "quiz",
        id: "d6-quiz",
        title: "Cierre del día",
        minutes: 8,
        questions: [
          {
            prompt: "¿Para qué sirve la clave primaria?",
            options: [
              "Para ordenar alfabéticamente",
              "Para identificar cada fila sin repetirse",
              "Para borrar la tabla",
              "Para sumar una columna",
            ],
            answer: 1,
            why: "El id nombra una fila y no se repite.",
          },
          {
            prompt: "¿Qué parte de la consulta elige filas?",
            options: ["SELECT", "WHERE", "ORDER BY", "FROM"],
            answer: 1,
            why: "SELECT elige columnas. WHERE se queda con filas. ORDER BY solo las ordena.",
          },
          {
            prompt: "¿ORDER BY modifica lo que está guardado?",
            options: [
              "Sí, reescribe la tabla",
              "No: solo cambia el orden de esta respuesta",
              "Solo si usás DESC",
              "Solo con LIMIT",
            ],
            answer: 1,
            why: "Es parte de la pregunta, no un cambio de datos.",
          },
          {
            prompt: "¿Qué hace LIMIT 2?",
            options: [
              "Deja dos columnas",
              "Devuelve como máximo dos filas",
              "Borra dos filas",
              "Agrupa de a dos",
            ],
            answer: 1,
            why: "Corta la cantidad de filas de la respuesta, después del orden.",
          },
        ],
      },
    ],
  },
  {
    n: 7,
    title: "Agrupar y unir",
    outcome: "Contás filas por grupo y juntás dos tablas con JOIN.",
    blocks: [
      {
        type: "read",
        id: "d7-filtros",
        title: "Filtros que se combinan",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "`AND` exige las dos condiciones. `OR` alcanza con una. `IN ('a', 'b')` es un OR corto. `LIKE '%RAG%'` busca un texto contenido: los `%` son «cualquier cosa».",
          },
          {
            kind: "code",
            text: `SELECT titulo
FROM documentos
WHERE fuente = 'interno'
  AND tokens > 1000;`,
          },
          {
            kind: "p",
            text: "`COUNT(*)` cuenta filas. `SUM` suma una columna. Solos, resumen toda la tabla. Con `GROUP BY` resumen cada grupo: una fila de resultado por cada valor distinto de esa columna.",
          },
        ],
      },
      {
        type: "read",
        id: "d7-unir",
        title: "JOIN pega tablas por una clave",
        minutes: 10,
        body: [
          {
            kind: "p",
            text: "Si el responsable vive en otra tabla, no lo copies en cada documento. Guardalo una vez y uní. `JOIN` arma filas nuevas combinando las que coinciden.",
          },
          {
            kind: "code",
            text: `SELECT documentos.titulo, colecciones.responsable
FROM documentos
JOIN colecciones ON documentos.coleccion = colecciones.nombre;`,
          },
          {
            kind: "p",
            text: "`ON` es la condición del emparejamiento. No es un WHERE: WHERE filtra después. Si el nombre de columna se repite en las dos tablas, anteponé el nombre de la tabla.",
          },
          {
            kind: "note",
            tone: "course",
            title: "Un chunk no vive solo",
            text: "En RAG el fragmento apunta al documento padre. Para mostrar la fuente al usuario hacés un JOIN: texto del chunk más título del documento. Mañana lo armás vos.",
          },
        ],
      },
      {
        type: "sql",
        id: "d7-grupo",
        title: "Cuántos documentos por colección",
        minutes: 14,
        prompt: [
          {
            kind: "p",
            text: "Devolvé dos columnas: `coleccion` y `cantidad`. `cantidad` es cuántos documentos hay en esa colección. Ordená de más a menos, y si empatan, por el nombre de la colección.",
          },
        ],
        starter: `SELECT coleccion
FROM documentos
`,
        setup: docs,
        previews: [DOC_PREVIEW],
        mode: "select",
        orderMatters: true,
        mustContain: ["group by", "order by"],
        expected: [
          { coleccion: "curso", cantidad: 3 },
          { coleccion: "costos", cantidad: 1 },
          { coleccion: "legal", cantidad: 1 },
          { coleccion: "modelos", cantidad: 1 },
        ],
        hint: "COUNT(*) AS cantidad, GROUP BY coleccion, ORDER BY cantidad DESC, coleccion ASC.",
        solution: `SELECT coleccion, COUNT(*) AS cantidad
FROM documentos
GROUP BY coleccion
ORDER BY cantidad DESC, coleccion ASC;
`,
      },
      {
        type: "sql",
        id: "d7-join",
        title: "Título y responsable, solo internos",
        minutes: 14,
        prompt: [
          {
            kind: "p",
            text: "Uní `documentos` con `colecciones`. Devolvé `titulo` y `responsable`, solo de los documentos con `fuente` igual a `interno`, ordenados por título.",
          },
        ],
        starter: `SELECT documentos.titulo
FROM documentos
`,
        setup: docsAndCollections,
        previews: [DOC_PREVIEW, COL_PREVIEW],
        mode: "select",
        orderMatters: true,
        mustContain: ["join", "where", "order by"],
        expected: [
          { titulo: "Guía de prompts", responsable: "Mora" },
          { titulo: "Manual de onboarding", responsable: "Mora" },
          { titulo: "Notas de RAG", responsable: "Mora" },
          { titulo: "Política de datos", responsable: "Mora" },
        ],
        hint: "JOIN colecciones ON documentos.coleccion = colecciones.nombre. WHERE documentos.fuente = 'interno'. ORDER BY documentos.titulo.",
        solution: `SELECT documentos.titulo, colecciones.responsable
FROM documentos
JOIN colecciones ON documentos.coleccion = colecciones.nombre
WHERE documentos.fuente = 'interno'
ORDER BY documentos.titulo;
`,
      },
      {
        type: "quiz",
        id: "d7-quiz",
        title: "Cierre del día",
        minutes: 8,
        questions: [
          {
            prompt: "¿Qué hace GROUP BY coleccion junto con COUNT(*)?",
            options: [
              "Borra las colecciones repetidas",
              "Devuelve una fila por colección, con su cantidad",
              "Ordena la tabla en disco",
              "Une dos tablas",
            ],
            answer: 1,
            why: "Agrupa y después cuenta dentro de cada grupo.",
          },
          {
            prompt: "¿Qué hace el ON de un JOIN?",
            options: [
              "Dice qué filas de una tabla coinciden con cuáles de la otra",
              "Ordena el resultado",
              "Cuenta filas",
              "Crea una tabla",
            ],
            answer: 0,
            why: "ON es el emparejamiento. WHERE filtra el resultado ya unido.",
          },
          {
            prompt: "¿Qué filas agarra LIKE '%RAG%'?",
            options: [
              "Solo las que empiezan con RAG",
              "Las que contienen RAG en cualquier parte",
              "Solo la columna llamada RAG",
              "Las que son exactamente RAG",
            ],
            answer: 1,
            why: "El % de cada lado significa cualquier texto antes o después.",
          },
          {
            prompt: "¿Por qué el responsable está en otra tabla?",
            options: [
              "Porque SQL no permite texto",
              "Para no copiar el mismo dato en cada documento",
              "Porque JOIN es obligatorio siempre",
              "Porque WHERE no funciona con texto",
            ],
            answer: 1,
            why: "Un dato que se repite vive en un solo lugar y se une por la clave.",
          },
        ],
      },
    ],
  },
  {
    n: 8,
    title: "Guardar y modelar",
    outcome: "Insertás, actualizás y creás una tabla de chunks.",
    blocks: [
      {
        type: "read",
        id: "d8-modelar",
        title: "Diseñar es decidir qué es una fila",
        minutes: 10,
        body: [
          {
            kind: "p",
            text: "Una mala tabla mezcla dos hechos en la misma fila, o parte un hecho en columnas que no significan nada. Una buena fila responde una pregunta: «¿qué es una cosa de estas?».",
          },
          {
            kind: "p",
            text: "Un documento es una cosa. Un fragmento de ese documento es otra. Si metés todo el texto en una sola columna gigante, no podés pedirle «el segundo chunk». Por eso aparece una tabla `chunks` con `documento_id`, `texto` y `posicion`.",
          },
          {
            kind: "ul",
            items: [
              "`INTEGER PRIMARY KEY` identifica la fila.",
              "`TEXT` y `INTEGER` dicen qué tipo de valor entra.",
              "`NOT NULL` obliga a completar ese dato.",
              "La clave que apunta a otra tabla (`documento_id`) es lo que después une el JOIN.",
            ],
          },
        ],
      },
      {
        type: "read",
        id: "d8-escribir",
        title: "INSERT, UPDATE, DELETE",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "`INSERT` agrega una fila. `UPDATE` cambia columnas de las filas que cumplen el `WHERE`. `DELETE` borra filas. Sin `WHERE`, el update y el delete tocan la tabla entera.",
          },
          {
            kind: "code",
            text: `UPDATE documentos
SET tokens = 1000
WHERE id = 4;`,
          },
          {
            kind: "note",
            tone: "warn",
            title: "El WHERE no es opcional cuando escribís",
            text: "Un UPDATE sin WHERE le cambia el precio a todos los productos, no al que tenías en la cabeza. En Pista cada corrida vuelve a empezar. En una base real, no.",
          },
        ],
      },
      {
        type: "sql",
        id: "d8-insert",
        title: "Agregá la bitácora",
        minutes: 10,
        prompt: [
          {
            kind: "p",
            text: "Insertá el documento `7`. Título: `Bitácora de evals`. Fuente: `interno`. Tokens: `600`. Colección: `curso`.",
          },
        ],
        starter: `INSERT INTO documentos (id, titulo, fuente, tokens, coleccion)
VALUES (7, '', '', 0, '');
`,
        setup: docs,
        previews: [DOC_PREVIEW],
        mode: "mutate",
        orderMatters: true,
        checkSql: "SELECT titulo, tokens, fuente, coleccion FROM documentos WHERE id = 7",
        mustContain: ["insert"],
        expected: [{ titulo: "Bitácora de evals", tokens: 600, fuente: "interno", coleccion: "curso" }],
        hint: "Reemplazá los valores vacíos. El orden de las columnas del INSERT tiene que coincidir con el de VALUES.",
        solution: `INSERT INTO documentos (id, titulo, fuente, tokens, coleccion)
VALUES (7, 'Bitácora de evals', 'interno', 600, 'curso');
`,
      },
      {
        type: "sql",
        id: "d8-update",
        title: "Corregí los tokens del 4",
        minutes: 8,
        prompt: [
          {
            kind: "p",
            text: "El documento `4` quedó mal cargado. Dejá sus tokens en `1000`. No toques las demás filas.",
          },
        ],
        starter: `UPDATE documentos
SET tokens = 1500
WHERE id = 4;
`,
        setup: docs,
        previews: [DOC_PREVIEW],
        mode: "mutate",
        orderMatters: true,
        checkSql: "SELECT tokens FROM documentos WHERE id = 4",
        mustContain: ["update", "where"],
        expected: [{ tokens: 1000 }],
        hint: "SET tokens = 1000. El WHERE id = 4 ya está: no lo borres.",
        solution: `UPDATE documentos
SET tokens = 1000
WHERE id = 4;
`,
      },
      {
        type: "sql",
        id: "d8-chunks",
        title: "Creá la tabla de fragmentos",
        minutes: 12,
        prompt: [
          {
            kind: "p",
            text: "Creá `chunks` con las columnas `id` (clave primaria entera), `documento_id` (entero obligatorio), `texto` (texto obligatorio) y `posicion` (entero obligatorio). Insertá una fila: id `1`, documento `4`, posición `0`, texto `RAG busca fragmentos, no documentos enteros.`",
          },
        ],
        starter: `-- CREATE TABLE y después INSERT
`,
        setup: docs,
        previews: [DOC_PREVIEW],
        mode: "mutate",
        orderMatters: true,
        checkSql: "SELECT documento_id, texto, posicion FROM chunks WHERE id = 1",
        mustContain: ["create table", "insert"],
        expected: [
          {
            documento_id: 4,
            texto: "RAG busca fragmentos, no documentos enteros.",
            posicion: 0,
          },
        ],
        hint: "CREATE TABLE chunks (id INTEGER PRIMARY KEY, documento_id INTEGER NOT NULL, texto TEXT NOT NULL, posicion INTEGER NOT NULL); después el INSERT con el texto exacto.",
        solution: `CREATE TABLE chunks (
  id INTEGER PRIMARY KEY,
  documento_id INTEGER NOT NULL,
  texto TEXT NOT NULL,
  posicion INTEGER NOT NULL
);
INSERT INTO chunks (id, documento_id, texto, posicion)
VALUES (1, 4, 'RAG busca fragmentos, no documentos enteros.', 0);
`,
      },
      {
        type: "quiz",
        id: "d8-quiz",
        title: "Cierre del día",
        minutes: 8,
        questions: [
          {
            prompt: "¿Qué hace un UPDATE sin WHERE?",
            options: [
              "No hace nada",
              "Cambia todas las filas",
              "Solo cambia la primera",
              "Borra la tabla",
            ],
            answer: 1,
            why: "Sin filtro, la asignación aplica a la tabla completa.",
          },
          {
            prompt: "¿Para qué sirve NOT NULL?",
            options: [
              "Ordena la columna",
              "Impide guardar una fila sin ese dato",
              "Cuenta los vacíos",
              "Crea la clave primaria por sí solo",
            ],
            answer: 1,
            why: "La fila tiene que traer un valor en esa columna.",
          },
          {
            prompt: "¿Por qué el chunk es otra tabla y no una columna más?",
            options: [
              "Porque un documento tiene muchos fragmentos, y cada uno es una fila",
              "Porque SQL no guarda texto",
              "Porque PRIMARY KEY solo existe en la segunda tabla",
              "Porque INSERT no funciona en documentos",
            ],
            answer: 0,
            why: "Varios hechos del mismo tipo merecen varias filas, no columnas texto1, texto2, texto3.",
          },
          {
            prompt: "¿Qué columna une un chunk con su documento?",
            options: ["posicion", "texto", "documento_id", "fuente"],
            answer: 2,
            why: "documento_id apunta al id del documento. Eso es lo que usa el JOIN.",
          },
        ],
      },
    ],
  },
  {
    n: 9,
    title: "Python habla con datos",
    outcome: "Filtrás filas en Python y armás una consulta sin pegar texto dentro del SQL.",
    blocks: [
      {
        type: "read",
        id: "d9-dos",
        title: "La misma pregunta, dos idiomas",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "SQL pregunta en la base. Cuando las filas ya están en memoria, Python pregunta con un `for` o una comprensión. Es la misma idea: quedate con las que cumplen, y de esas sacá una columna.",
          },
          {
            kind: "code",
            text: `SELECT titulo
FROM documentos
WHERE coleccion = 'curso';`,
          },
          {
            kind: "code",
            text: `[fila["titulo"] for fila in filas if fila["coleccion"] == "curso"]`,
          },
          {
            kind: "p",
            text: "Un driver —el puente entre Python y la base— te devuelve filas como listas, en el orden de las columnas. El paso siguiente es armar el diccionario: cada columna con su valor. Eso es lo que venís leyendo desde el día 3.",
          },
        ],
      },
      {
        type: "read",
        id: "d9-inyeccion",
        title: "No armes SQL pegando texto",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "Esto parece cómodo y es un agujero:",
          },
          {
            kind: "code",
            text: `sql = f"SELECT titulo FROM documentos WHERE coleccion = '{coleccion}'"`,
          },
          {
            kind: "p",
            text: "Si `coleccion` vale `curso' OR '1'='1`, la condición se vuelve siempre verdadera y te llevás la tabla. Se llama inyección. La forma segura es un placeholder y los valores aparte. La base los trata como datos, no como código.",
          },
          {
            kind: "code",
            text: `sql = "SELECT titulo FROM documentos WHERE coleccion = ?"
params = (coleccion,)`,
          },
          {
            kind: "note",
            tone: "course",
            title: "Esto ya es una política de seguridad",
            text: "El curso habla de seguridad, costos y sistemas que no se caen por un input raro. No concatenar SQL es la primera regla, y aplica igual cuando el texto lo escribió un modelo.",
          },
        ],
      },
      {
        type: "python",
        id: "d9-coleccion",
        title: "El WHERE, escrito en Python",
        minutes: 12,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`de_la_coleccion(filas, nombre)` recibe una lista de diccionarios con `titulo` y `coleccion`. Devolvé los títulos de esa colección, en el mismo orden. Si no hay, devolvé una lista vacía.",
          },
        ],
        starter: `def de_la_coleccion(filas, nombre):
    return []
`,
        tests: `fn = globals().get("de_la_coleccion")
assert fn is not None, "Definí de_la_coleccion(filas, nombre)."
filas = [
    {"titulo": "Guía de prompts", "coleccion": "curso"},
    {"titulo": "Precios de APIs", "coleccion": "costos"},
    {"titulo": "Notas de RAG", "coleccion": "curso"},
]
assert fn(filas, "curso") == ["Guía de prompts", "Notas de RAG"]
assert fn(filas, "legal") == []
assert fn([], "curso") == []
`,
        hint: "Recorré filas. Si fila[\"coleccion\"] == nombre, agregá el título a una lista. Devolvé esa lista.",
        solution: `def de_la_coleccion(filas, nombre):
    titulos = []
    for fila in filas:
        if fila["coleccion"] == nombre:
            titulos.append(fila["titulo"])
    return titulos
`,
      },
      {
        type: "python",
        id: "d9-dicts",
        title: "De columnas y valores a diccionarios",
        minutes: 12,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "Así vuelve una consulta: una lista de nombres de columna y una lista de filas. `filas_a_dicts(columnas, valores)` arma la lista de diccionarios. `columnas = [\"titulo\", \"tokens\"]` y `valores = [[\"Guía\", 800]]` dan `[{\"titulo\": \"Guía\", \"tokens\": 800}]`.",
          },
        ],
        starter: `def filas_a_dicts(columnas, valores):
    return []
`,
        tests: `fn = globals().get("filas_a_dicts")
assert fn is not None, "Definí filas_a_dicts(columnas, valores)."
assert fn(["titulo", "tokens"], [["Guía", 800], ["Notas", 1500]]) == [
    {"titulo": "Guía", "tokens": 800},
    {"titulo": "Notas", "tokens": 1500},
]
assert fn(["a"], []) == []
assert fn(["id", "ok"], [[1, True]]) == [{"id": 1, "ok": True}]
`,
        hint: "Por cada fila de valores, armá un dict. enumerate o zip emparejan la columna i con el valor i.",
        solution: `def filas_a_dicts(columnas, valores):
    filas = []
    for valor in valores:
        fila = {}
        for i, columna in enumerate(columnas):
            fila[columna] = valor[i]
        filas.append(fila)
    return filas
`,
      },
      {
        type: "python",
        id: "d9-segura",
        title: "Consulta con placeholder",
        minutes: 12,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`consulta_segura(coleccion)` devuelve dos cosas: el SQL y los parámetros. El SQL pregunta `titulo` en `documentos` filtrando `coleccion`, y usa `?` en vez del valor. Los parámetros son una tupla o una lista con ese valor, solo.",
          },
          {
            kind: "p",
            text: "El valor no puede aparecer escrito dentro del SQL, ni siquiera si trae comillas.",
          },
        ],
        starter: `def consulta_segura(coleccion):
    sql = "SELECT titulo FROM documentos"
    params = ()
    return sql, params
`,
        tests: `fn = globals().get("consulta_segura")
assert fn is not None, "Definí consulta_segura(coleccion)."

def revisar(valor):
    sql, params = fn(valor)
    assert isinstance(sql, str), "sql tiene que ser texto"
    assert isinstance(params, (tuple, list)), "params tiene que ser tupla o lista"
    assert "?" in sql, "Falta el placeholder ?"
    assert valor not in sql, "El valor quedó pegado dentro del SQL: " + sql
    assert list(params) == [valor], "params debería ser el valor solo, llegó " + repr(params)

revisar("curso")
revisar("curso' OR '1'='1")
`,
        hint: "sql = \"SELECT titulo FROM documentos WHERE coleccion = ?\" y params = (coleccion,). La coma en la tupla de un solo elemento es obligatoria.",
        solution: `def consulta_segura(coleccion):
    sql = "SELECT titulo FROM documentos WHERE coleccion = ?"
    params = (coleccion,)
    return sql, params
`,
      },
      {
        type: "quiz",
        id: "d9-quiz",
        title: "Cierre del día",
        minutes: 8,
        questions: [
          {
            prompt: "¿Por qué es peligroso meter una variable dentro del texto SQL?",
            options: [
              "Porque Python no tiene f-strings",
              "Porque el valor puede cambiar el sentido de la consulta",
              "Porque WHERE no acepta texto",
              "Porque las tuplas son lentas",
            ],
            answer: 1,
            why: "Eso es inyección: el dato se vuelve código.",
          },
          {
            prompt: "¿Qué es el ? de una consulta parametrizada?",
            options: [
              "Un error de tipeo",
              "Un lugar que la base rellena con el dato, sin interpretarlo como SQL",
              "Un JOIN",
              "El nombre de la tabla",
            ],
            answer: 1,
            why: "El SQL queda fijo. El valor viaja aparte, en params.",
          },
          {
            prompt: "¿Qué equivale en Python a WHERE coleccion = 'curso'?",
            options: [
              "Quedarte con las filas cuyo campo coleccion es curso",
              "Borrar las otras tablas",
              "Ordenar por curso",
              "Crear la columna coleccion",
            ],
            answer: 0,
            why: "Es un filtro. El for con if, o la comprensión, hacen ese trabajo en memoria.",
          },
          {
            prompt: "¿Cómo conviene convertir las filas crudas del driver?",
            options: [
              "Dejarlas como texto SQL",
              "Emparejar cada columna con su valor y armar diccionarios",
              "Guardarlas en un solo string",
              "Ignorar los nombres de columna",
            ],
            answer: 1,
            why: "El dict es la forma que ya sabés recorrer.",
          },
        ],
      },
    ],
  },
  {
    n: 10,
    title: "Armar contexto",
    outcome: "Juntás SQL y Python para preparar lo que se le mandaría a un modelo.",
    blocks: [
      {
        type: "read",
        id: "d10-mision",
        title: "No le mandes la biblioteca entera",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "Un modelo responde mejor si le pasás poco y relevante. El trabajo de hoy es el esqueleto de un RAG, sin embeddings y sin API: elegir fragmentos con SQL y convertirlos en el texto que iría en el prompt.",
          },
          {
            kind: "p",
            text: "La base tiene documentos y chunks. Un chunk es un pedazo, con posición, que apunta a su documento. Primero preguntás. Después Python da formato.",
          },
          {
            kind: "note",
            tone: "course",
            title: "Lo que el curso agrega encima",
            text: "Embeddings, vectorstores y reranking eligen mejor que un LIKE. La forma no cambia: entran filas, sale un contexto, y una función lo arma.",
          },
        ],
      },
      {
        type: "sql",
        id: "d10-sql",
        title: "Traé los fragmentos que mencionan RAG",
        minutes: 14,
        prompt: [
          {
            kind: "p",
            text: "Uní `chunks` con `documentos`. Devolvé `titulo` y `texto` de los chunks cuyo texto contiene `RAG`. Ordenalos por `posicion`.",
          },
        ],
        starter: `SELECT d.titulo AS titulo, c.texto AS texto
FROM chunks AS c
JOIN documentos AS d ON d.id = c.documento_id
WHERE c.texto LIKE '%prompt%'
ORDER BY c.posicion;
`,
        setup: docsAndChunks,
        previews: [DOC_PREVIEW, CHUNK_PREVIEW],
        mode: "select",
        orderMatters: true,
        mustContain: ["join", "like", "order by"],
        expected: [
          { titulo: "Notas de RAG", texto: "Sin RAG el modelo solo usa su memoria." },
          { titulo: "Notas de RAG", texto: "RAG busca fragmentos, no el documento entero." },
        ],
        hint: "Cambiá el LIKE a '%RAG%'. El JOIN y el ORDER BY del borrador ya sirven. La posición 0 va antes que la 1.",
        solution: `SELECT d.titulo AS titulo, c.texto AS texto
FROM chunks AS c
JOIN documentos AS d ON d.id = c.documento_id
WHERE c.texto LIKE '%RAG%'
ORDER BY c.posicion;
`,
      },
      {
        type: "python",
        id: "d10-contexto",
        title: "Pasá las filas a un prompt",
        minutes: 14,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`armar_contexto(filas, pregunta)` devuelve un string. Primera línea: `Pregunta: ` y la pregunta. Segunda línea: `Contexto:`. Después, una línea por fila: `- `, el título, `: `, el texto. Las líneas van separadas por un salto de línea, sin una línea vacía al final.",
          },
          {
            kind: "p",
            text: "En un proyecto real, `filas` sería el resultado del SELECT de arriba. Acá te llegan ya como diccionarios.",
          },
        ],
        starter: `def armar_contexto(filas, pregunta):
    return ""
`,
        tests: `fn = globals().get("armar_contexto")
assert fn is not None, "Definí armar_contexto(filas, pregunta)."
filas = [
    {"titulo": "Notas de RAG", "texto": "RAG busca fragmentos."},
    {"titulo": "Notas de RAG", "texto": "El modelo responde con ese contexto."},
]
esperado = """Pregunta: ¿qué es RAG?
Contexto:
- Notas de RAG: RAG busca fragmentos.
- Notas de RAG: El modelo responde con ese contexto."""
recibido = fn(filas, "¿qué es RAG?")
assert recibido == esperado, "Quedó así: " + repr(recibido)
assert fn([], "hola") == "Pregunta: hola\\nContexto:"
`,
        hint: "Armá una lista de líneas y unila con \"\\n\".join. La primera es f\"Pregunta: {pregunta}\". La segunda es \"Contexto:\". Cada fila suma f\"- {fila['titulo']}: {fila['texto']}\".",
        solution: `def armar_contexto(filas, pregunta):
    lineas = [f"Pregunta: {pregunta}", "Contexto:"]
    for fila in filas:
        lineas.append(f"- {fila['titulo']}: {fila['texto']}")
    return "\\n".join(lineas)
`,
      },
      {
        type: "read",
        id: "d10-mapa",
        title: "Qué te llevás, y qué todavía no",
        minutes: 10,
        body: [
          {
            kind: "p",
            text: "Si llegaste hasta acá con los checks en verde, podés sentarte en la primera clase sin traducir lo básico. Esto es lo que ya hiciste:",
          },
          {
            kind: "ul",
            items: [
              "Leer una función y decir qué devuelve, no qué imprime.",
              "Recorrer una lista de diccionarios: mensajes, filas, chunks.",
              "Parsear JSON y seguir de largo si viene roto.",
              "Filtrar, ordenar, agrupar y unir tablas.",
              "Pensar una fila nueva antes de crearla.",
              "No pegar variables dentro del SQL.",
            ],
          },
          {
            kind: "p",
            text: "El curso de AI Engineering suma, encima de esto, tokens y costos, pedirle JSON a un modelo, embeddings, LangChain, agentes, FastAPI, Docker y un proyecto con RAG. No hace falta saberlo hoy. Si una tool del agente te parece rara, recordá que es una función. Si un vectorstore te parece magia, recordá que la metadata sigue siendo una tabla.",
          },
          {
            kind: "p",
            text: "El programa está en [ICARO, AI Engineering](https://icaro.org.ar/producto/ai-engineering/). La hoja de repaso junta la sintaxis en una página.",
          },
          {
            kind: "note",
            tone: "tip",
            title: "Si un día quedó flojo",
            text: "Volvé a los días 3, 5 y 9. Son los que más se parecen a lo que vas a leer en código de otras personas.",
          },
        ],
      },
      {
        type: "quiz",
        id: "d10-quiz",
        title: "Último check",
        minutes: 10,
        questions: [
          {
            prompt: "¿Qué le conviene recibir un modelo?",
            options: [
              "La base completa, por las dudas",
              "Pocos fragmentos relevantes, con formato",
              "Solo el CREATE TABLE",
              "El traceback de un error",
            ],
            answer: 1,
            why: "Eso es el contexto: poco, elegido, y escrito para que se pueda leer.",
          },
          {
            prompt: "¿Qué es una tool de un agente, en el fondo?",
            options: ["Una tabla", "Una función con argumentos y un return", "Un JOIN", "Un f-string"],
            answer: 1,
            why: "El modelo decide llamarla. La ejecutás vos, en Python.",
          },
          {
            prompt: "¿Qué problema tiene armar el SQL con un f-string?",
            options: [
              "Es más lento siempre",
              "El dato puede modificar la consulta",
              "Python 3 no tiene f-strings",
              "SQLite no tiene WHERE",
            ],
            answer: 1,
            why: "Por eso el placeholder. El día 9 existe para que esto no se te pase.",
          },
          {
            prompt: "¿Qué todavía no necesitás para empezar el curso?",
            options: [
              "Leer un diccionario",
              "Escribir un SELECT con JOIN",
              "Entrenar un transformer a mano",
              "Saber qué devuelve una función",
            ],
            answer: 2,
            why: "El curso construye encima de Python y datos. El entrenamiento fino viene más adelante, y no es el piso.",
          },
        ],
      },
    ],
  },
];
