import type { Day } from "@/content/types";

export const daysA: Day[] = [
  {
    n: 1,
    title: "Valores y texto",
    outcome: "Nombrás valores, distinguís tipos y armás un texto con un f-string.",
    blocks: [
      {
        type: "read",
        id: "d1-leer",
        title: "Un nombre, un valor",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "Pista no enseña modelos. Enseña lo que AI Engineering da por sabido: leer Python y pedirle cosas a una tabla. El curso entra a prompts, RAG y APIs. Estas diez jornadas son el piso.",
          },
          {
            kind: "p",
            text: "Python ejecuta una línea y se acuerda de lo que nombraste. Esto no imprime nada: solo guarda.",
          },
          { kind: "code", text: 'nombre = "Luz"\ndias = 10' },
          {
            kind: "p",
            text: "Para ver algo usás `print`. Un f-string mete valores adentro de un texto. La `f` va pegada a la comilla, y las variables van entre llaves.",
          },
          { kind: "code", text: 'print(f"{nombre} tiene {dias} días")' },
          {
            kind: "note",
            tone: "course",
            title: "Casi todo lo que vuelve de un modelo es texto",
            text: "Tokens, precios y temperatura son números. Si sumás texto con texto, `\"2\" + \"2\"` da `\"22\"`, no 4. Ese bug aparece el primer día que parseás una respuesta.",
          },
        ],
      },
      {
        type: "read",
        id: "d1-tipos",
        title: "Cinco tipos alcanzan",
        minutes: 7,
        body: [
          {
            kind: "ul",
            items: [
              "`int`: enteros, como `10`.",
              "`float`: con decimal, como `10.5`. `3.0` también es float.",
              "`str`: texto, siempre entre comillas. `\"10\"` no es el número 10.",
              "`bool`: `True` o `False`, con mayúscula.",
              "`None`: no hay valor. No es cero ni un texto vacío.",
            ],
          },
          {
            kind: "p",
            text: "`type(10)` te dice el tipo. No hace falta declararlo: Python lo mira en el valor.",
          },
          {
            kind: "note",
            tone: "warn",
            title: "True también es un int",
            text: "En Python, `bool` es un caso particular de `int`: `True` vale 1 y `False` vale 0. `isinstance(True, int)` da True. Si clasificás un valor, preguntá por bool antes que por int. En JSON, true y 1 no son lo mismo.",
          },
        ],
      },
      {
        type: "python",
        id: "d1-lab",
        title: "Laboratorio: mirá la salida",
        minutes: 8,
        graded: false,
        prompt: [
          {
            kind: "p",
            text: "Corré esto sin cambiarlo. Compará las dos sumas y los tres `type`.",
          },
        ],
        starter: `print(2 + 2)
print("2" + "2")
print(type(10))
print(type(10.0))
print(type("10"))
nombre = "Luz"
print(f"Hola, {nombre}")
`,
        tests: "",
        hint: "No hay nada que corregir. La primera suma es un número. La segunda pega textos.",
        solution: `print(2 + 2)
print("2" + "2")
print(type(10))
print(type(10.0))
print(type("10"))
nombre = "Luz"
print(f"Hola, {nombre}")
`,
      },
      {
        type: "python",
        id: "d1-mensaje",
        title: "Armá el mensaje",
        minutes: 10,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "Completá `mensaje` con un f-string. Tiene que valer exactamente `Luz tiene 10 días de pista`. Usá las variables que ya están: no escribas el nombre ni el número a mano dentro del texto.",
          },
        ],
        starter: `nombre = "Luz"
dias = 10
mensaje = ""
`,
        tests: `assert "mensaje" in globals(), "Definí la variable mensaje"
assert mensaje == "Luz tiene 10 días de pista", "mensaje vale " + repr(mensaje)
`,
        hint: "El f-string se escribe f\"...{nombre}...{dias}...\". Las llaves no llevan comillas.",
        solution: `nombre = "Luz"
dias = 10
mensaje = f"{nombre} tiene {dias} días de pista"
`,
      },
      {
        type: "python",
        id: "d1-clasificar",
        title: "Clasificá el valor",
        minutes: 12,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "Escribí `clasificar(valor)`. Devolvé `\"int\"`, `\"float\"`, `\"str\"`, `\"bool\"` u `\"otro\"`. `None`, las listas y cualquier otra cosa son `\"otro\"`.",
          },
          {
            kind: "note",
            tone: "tip",
            title: "El orden de las preguntas importa",
            text: "Si preguntás `isinstance(valor, int)` primero, `True` te va a salir como int. Preguntá por bool antes.",
          },
        ],
        starter: `def clasificar(valor):
    return "otro"
`,
        tests: `fn = globals().get("clasificar")
assert fn is not None, "Definí la función clasificar(valor)."
casos = [
    (True, "bool"),
    (False, "bool"),
    (3, "int"),
    (0, "int"),
    (3.0, "float"),
    ("3", "str"),
    ("", "str"),
    (None, "otro"),
    ([1], "otro"),
]
for valor, esperado in casos:
    recibido = fn(valor)
    assert recibido == esperado, "clasificar(" + repr(valor) + ") devolvió " + repr(recibido)
`,
        hint: "isinstance(valor, bool), después int, después float, después str. Al final, return \"otro\".",
        solution: `def clasificar(valor):
    if isinstance(valor, bool):
        return "bool"
    if isinstance(valor, int):
        return "int"
    if isinstance(valor, float):
        return "float"
    if isinstance(valor, str):
        return "str"
    return "otro"
`,
      },
      {
        type: "quiz",
        id: "d1-quiz",
        title: "Cierre del día",
        minutes: 8,
        questions: [
          {
            prompt: '¿Qué imprime print("3" + "4")?',
            options: ["7", '"34"', "Un error", "3.4"],
            answer: 1,
            why: 'Las comillas hacen texto. El + de dos str los pega: "34".',
          },
          {
            prompt: "¿Qué tipo tiene 3.0?",
            options: ["int", "float", "str", "bool"],
            answer: 1,
            why: "Tiene punto decimal, aunque el decimal sea cero. Es float.",
          },
          {
            prompt: "¿Por qué clasificar mira bool antes que int?",
            options: [
              "Porque bool no existe en Python",
              "Porque True y False también cuentan como int",
              "Porque int no se puede comparar",
              "Porque print los convierte en texto",
            ],
            answer: 1,
            why: "bool es una subclase de int. isinstance(True, int) es True.",
          },
          {
            prompt: "¿Qué guarda una variable?",
            options: [
              "Solo números",
              "Un nombre apuntando a un valor",
              "El texto que después imprime print, sí o sí",
              "Una tabla de SQL",
            ],
            answer: 1,
            why: "Asignar no imprime. El nombre queda apuntando al valor hasta que lo pises.",
          },
        ],
      },
    ],
  },
  {
    n: 2,
    title: "Decisiones y bucles",
    outcome: "Escribís un if con tres salidas y un for que acumula.",
    blocks: [
      {
        type: "read",
        id: "d2-if",
        title: "Preguntar y elegir",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "Un programa útil decide. La condición es una expresión que da `True` o `False`. `=` asigna. `==` compara. Confundirlos es el error más común de esta semana.",
          },
          {
            kind: "code",
            text: `score = 72
if score >= 80:
    print("listo")
elif score >= 50:
    print("en camino")
else:
    print("repasar")`,
          },
          {
            kind: "p",
            text: "Python usa la sangría, no las llaves. Todo lo que está más adentro pertenece al `if`. `elif` se lee solo si lo de arriba fue falso. `else` agarra el resto.",
          },
          {
            kind: "p",
            text: "`and`, `or` y `not` combinan condiciones. `>=` incluye el número del borde: 80 entra en `score >= 80`.",
          },
          {
            kind: "note",
            tone: "course",
            title: "Un agente es un if con herramientas",
            text: "Si la tool falló, reintentá. Si alcanzó el tope de tokens, cortá. Si el usuario pidió datos, consultá la base. El curso le pone nombre de grafo: por debajo sigue siendo una decisión.",
          },
        ],
      },
      {
        type: "read",
        id: "d2-bucles",
        title: "Repetir sin copiar",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "`for` recorre una colección. `range(3)` produce 0, 1 y 2: el final no entra. Es la forma de decir «hacé esto por cada elemento».",
          },
          {
            kind: "code",
            text: `for i in range(3):
    print("vuelta", i)`,
          },
          {
            kind: "p",
            text: "`while` repite mientras la condición sea verdadera. Algo adentro tiene que cambiarla, si no el bucle no termina. Pista corta esos casos a los pocos segundos.",
          },
          {
            kind: "code",
            text: `n = 3
while n > 0:
    print(n)
    n = n - 1`,
          },
          {
            kind: "note",
            tone: "warn",
            title: "print no es return",
            text: "Si una función imprime el resultado pero no lo devuelve, para el resto del programa ese resultado es None. Los checks de Pista miran el return, no la pantalla.",
          },
        ],
      },
      {
        type: "python",
        id: "d2-lab",
        title: "Laboratorio: el semáforo en voz alta",
        minutes: 6,
        graded: false,
        prompt: [
          { kind: "p", text: "Corré el ejemplo. Después cambiá `score` a 40 y a 90 y volvé a correr. Fijate qué rama se imprime." },
        ],
        starter: `for i in range(3):
    print("vuelta", i)

score = 72
if score >= 80:
    print("listo")
elif score >= 50:
    print("en camino")
else:
    print("repasar")
`,
        tests: "",
        hint: "No hay trampa. 72 no llega a 80 y sí pasa de 50.",
        solution: `for i in range(3):
    print("vuelta", i)

score = 72
if score >= 80:
    print("listo")
elif score >= 50:
    print("en camino")
else:
    print("repasar")
`,
      },
      {
        type: "python",
        id: "d2-semaforo",
        title: "Función semáforo",
        minutes: 12,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "Escribí `semaforo(score)`. Devolvé `\"listo\"` si el score es 80 o más, `\"en camino\"` si es 50 o más, y `\"repasar\"` en cualquier otro caso. No imprimas: devolvé el texto.",
          },
        ],
        starter: `def semaforo(score):
    return ""
`,
        tests: `fn = globals().get("semaforo")
assert fn is not None, "Definí semaforo(score)."
casos = [(100, "listo"), (80, "listo"), (79, "en camino"), (50, "en camino"), (49, "repasar"), (0, "repasar")]
for score, esperado in casos:
    recibido = fn(score)
    assert recibido == esperado, "semaforo(" + repr(score) + ") devolvió " + repr(recibido)
`,
        hint: "Tres ramas, en ese orden. El 80 y el 50 tienen que entrar en el grupo de arriba, así que usá >=.",
        solution: `def semaforo(score):
    if score >= 80:
        return "listo"
    if score >= 50:
        return "en camino"
    return "repasar"
`,
      },
      {
        type: "python",
        id: "d2-pares",
        title: "Sumar solo los pares",
        minutes: 12,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`sumar_pares(numeros)` recibe una lista de enteros y devuelve la suma de los pares. Un número es par si `n % 2 == 0`. La lista vacía suma 0.",
          },
        ],
        starter: `def sumar_pares(numeros):
    total = 0
    return total
`,
        tests: `fn = globals().get("sumar_pares")
assert fn is not None, "Definí sumar_pares(numeros)."
assert fn([1, 2, 3, 4]) == 6, "sumar_pares([1, 2, 3, 4]) debería ser 6"
assert fn([]) == 0, "la lista vacía suma 0"
assert fn([2, 2, 2]) == 6
assert fn([1, 3, 5]) == 0
`,
        hint: "Arrancá total en 0. Recorré con for. Si es par, sumalo a total. Al final, return total.",
        solution: `def sumar_pares(numeros):
    total = 0
    for n in numeros:
        if n % 2 == 0:
            total = total + n
    return total
`,
      },
      {
        type: "quiz",
        id: "d2-quiz",
        title: "Cierre del día",
        minutes: 8,
        questions: [
          {
            prompt: "¿Qué hace == ?",
            options: ["Asigna un valor", "Compara dos valores", "Imprime", "Define una función"],
            answer: 1,
            why: "= guarda. == pregunta si son iguales.",
          },
          {
            prompt: "¿Qué valores produce range(3)?",
            options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3"],
            answer: 1,
            why: "Empieza en 0 y el final no entra.",
          },
          {
            prompt: "¿Qué le falta a un while que no termina?",
            options: [
              "Un print",
              "Un cambio que vuelva falsa la condición",
              "Un f-string",
              "Una lista",
            ],
            answer: 1,
            why: "Si la condición sigue en True, el bucle no sale.",
          },
          {
            prompt: "Una función imprime 6 y no tiene return. ¿Qué devuelve?",
            options: ["6", "\"6\"", "None", "True"],
            answer: 2,
            why: "Sin return, el valor de la función es None. La pantalla no cuenta.",
          },
        ],
      },
    ],
  },
  {
    n: 3,
    title: "Listas y diccionarios",
    outcome: "Recorrés una lista de diccionarios, que es la forma de los mensajes y de las filas.",
    blocks: [
      {
        type: "read",
        id: "d3-listas",
        title: "Listas: orden y posición",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "Una lista guarda valores en orden. El primero está en la posición 0. El último también se nombra `-1`. Un corte `items[1:3]` incluye el 1 y excluye el 3.",
          },
          {
            kind: "code",
            text: `items = ["a", "b", "c", "d"]
print(items[0])
print(items[-1])
print(items[1:3])
items.append("e")`,
          },
          {
            kind: "p",
            text: "`len(items)` dice cuántos hay. `append` agrega al final. Recorrer es un `for item in items`.",
          },
        ],
      },
      {
        type: "read",
        id: "d3-dicts",
        title: "Diccionarios: un dato con nombre",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "Un diccionario asocia una clave con un valor. `fila[\"titulo\"]` falla si la clave no está. `fila.get(\"titulo\")` devuelve `None` en vez de explotar. Para datos que vienen de afuera, `.get` es más seguro.",
          },
          {
            kind: "code",
            text: `mensaje = {"role": "user", "content": "hola"}
print(mensaje["role"])
print(mensaje.get("tokens"))`,
          },
          {
            kind: "p",
            text: "Una lista de diccionarios es una tabla en memoria. Cada diccionario es una fila. Cada clave es una columna. Los mensajes de un chat tienen exactamente esta forma.",
          },
          {
            kind: "code",
            text: `chat = [
    {"role": "system", "content": "Sos breve."},
    {"role": "user", "content": "Explicá un token."},
]`,
          },
          {
            kind: "note",
            tone: "course",
            title: "Esta estructura no se va más",
            text: "Un mensaje a la API, un chunk de RAG y una fila que vuelve de SQL se leen igual: diccionario, o lista de diccionarios. Si este día queda sólido, el resto del curso se lee.",
          },
        ],
      },
      {
        type: "python",
        id: "d3-lab",
        title: "Laboratorio: un chat chico",
        minutes: 6,
        graded: false,
        prompt: [
          {
            kind: "p",
            text: "Corré y mirá qué imprime `.get` cuando la clave no existe. Después agregá un tercer mensaje y volvé a correr.",
          },
        ],
        starter: `mensaje = {"role": "user", "content": "hola"}
print(mensaje["role"])
print(mensaje.get("tokens"))

chat = [
    {"role": "system", "content": "Sos breve."},
    {"role": "user", "content": "Explicá un token."},
]
for m in chat:
    print(m["role"], "→", m["content"])
`,
        tests: "",
        hint: "tokens no está en el diccionario. get devuelve None y no corta el programa.",
        solution: `mensaje = {"role": "user", "content": "hola"}
print(mensaje["role"])
print(mensaje.get("tokens"))

chat = [
    {"role": "system", "content": "Sos breve."},
    {"role": "user", "content": "Explicá un token."},
]
for m in chat:
    print(m["role"], "→", m["content"])
`,
      },
      {
        type: "python",
        id: "d3-extremos",
        title: "Primero y último",
        minutes: 10,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`primer_y_ultimo(items)` devuelve una lista con el primer elemento y el último. Si hay uno solo, los dos puestos valen ese elemento.",
          },
        ],
        starter: `def primer_y_ultimo(items):
    return []
`,
        tests: `fn = globals().get("primer_y_ultimo")
assert fn is not None, "Definí primer_y_ultimo(items)."
assert fn([1, 2, 3, 4]) == [1, 4]
assert fn(["a"]) == ["a", "a"]
assert fn(["hola", "curso"]) == ["hola", "curso"]
`,
        hint: "El primero es items[0]. El último es items[-1]. Devolvé una lista de dos elementos.",
        solution: `def primer_y_ultimo(items):
    return [items[0], items[-1]]
`,
      },
      {
        type: "python",
        id: "d3-usuario",
        title: "El texto del usuario",
        minutes: 12,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`texto_del_usuario(mensajes)` recibe una lista de diccionarios con `role` y `content`. Devolvé el `content` del primer mensaje cuyo `role` sea `\"user\"`. Si no hay ninguno, devolvé `None`.",
          },
        ],
        starter: `def texto_del_usuario(mensajes):
    return None
`,
        tests: `fn = globals().get("texto_del_usuario")
assert fn is not None, "Definí texto_del_usuario(mensajes)."
base = [
    {"role": "system", "content": "Sos un tutor."},
    {"role": "user", "content": "¿Qué es un token?"},
]
assert fn(base) == "¿Qué es un token?"
assert fn([{"role": "system", "content": "hola"}]) is None
assert fn([
    {"role": "user", "content": "primero"},
    {"role": "user", "content": "segundo"},
]) == "primero"
`,
        hint: "Recorré la lista. Si mensaje.get(\"role\") == \"user\", devolvé el content enseguida. Si el for termina, return None.",
        solution: `def texto_del_usuario(mensajes):
    for mensaje in mensajes:
        if mensaje.get("role") == "user":
            return mensaje.get("content")
    return None
`,
      },
      {
        type: "python",
        id: "d3-tokens",
        title: "Sumar tokens de los chunks",
        minutes: 10,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`total_tokens(chunks)` recibe una lista de diccionarios. Cada uno tiene una clave `tokens` con un entero. Devolvé la suma. Una lista vacía suma 0.",
          },
        ],
        starter: `def total_tokens(chunks):
    return 0
`,
        tests: `fn = globals().get("total_tokens")
assert fn is not None, "Definí total_tokens(chunks)."
assert fn([{"tokens": 10}, {"tokens": 5}]) == 15
assert fn([]) == 0
assert fn([{"texto": "hola", "tokens": 3}]) == 3
`,
        hint: "Igual que sumar pares, pero el número está en chunk[\"tokens\"].",
        solution: `def total_tokens(chunks):
    total = 0
    for chunk in chunks:
        total = total + chunk["tokens"]
    return total
`,
      },
      {
        type: "quiz",
        id: "d3-quiz",
        title: "Cierre del día",
        minutes: 8,
        questions: [
          {
            prompt: "¿Qué posición es items[-1]?",
            options: ["La primera", "La última", "La posición 1", "Siempre da error"],
            answer: 1,
            why: "Los índices negativos cuentan desde el final. -1 es el último.",
          },
          {
            prompt: "¿Qué devuelve fila.get(\"titulo\") si la clave no está?",
            options: ["Un error", "\"\"", "None", "0"],
            answer: 2,
            why: "get evita el KeyError y devuelve None. Los corchetes sí explotan.",
          },
          {
            prompt: "¿Qué es, en la práctica, una lista de diccionarios?",
            options: [
              "Un número",
              "Una tabla: cada dict es una fila",
              "Un archivo SQL",
              "Un bucle",
            ],
            answer: 1,
            why: "Las claves son columnas. El orden de la lista es el orden de las filas.",
          },
          {
            prompt: "¿Qué imprime este corte: [\"a\", \"b\", \"c\"][0:2]?",
            options: ['["a", "b", "c"]', '["a", "b"]', '["b", "c"]', '["a"]'],
            answer: 1,
            why: "El corte incluye el inicio y excluye el fin.",
          },
        ],
      },
    ],
  },
  {
    n: 4,
    title: "Funciones",
    outcome: "Definís funciones con argumentos, valor por defecto y un return claro.",
    blocks: [
      {
        type: "read",
        id: "d4-func",
        title: "Una función es una herramienta con nombre",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "Una función empaqueta un trabajo. Recibe argumentos, hace una cosa y devuelve un valor. Si el nombre dice qué hace y el cuerpo entra en una pantalla, está bien.",
          },
          {
            kind: "code",
            text: `def saludar(nombre, turno="mañana"):
    return f"Hola {nombre}, buen {turno}"

print(saludar("Luz"))
print(saludar("Luz", "tarde"))`,
          },
          {
            kind: "p",
            text: "El argumento con `=` al definir es un valor por defecto. Quien llama puede omitirlo. Los de la izquierda, no.",
          },
          {
            kind: "note",
            tone: "course",
            title: "En el curso, una tool es esto",
            text: "Un agente llama funciones: buscar documentos, calcular un costo, guardar un log. FastAPI también: cada ruta es una función. Hoy el músculo es definirlas chicas y devolver un valor.",
          },
        ],
      },
      {
        type: "read",
        id: "d4-hints",
        title: "Qué entra, qué sale, qué no se ve",
        minutes: 6,
        body: [
          {
            kind: "p",
            text: "Las anotaciones dicen la intención. No las exige Python al correr: si anotás `int` y pasás un texto, no corta solo.",
          },
          {
            kind: "code",
            text: `def costo(tokens: int) -> float:
    return tokens / 1_000_000 * 2.5`,
          },
          {
            kind: "p",
            text: "Una variable creada adentro de la función no existe afuera. Eso es bueno: el desorden no se escapa. Si necesitás el resultado, devolvélo.",
          },
          {
            kind: "p",
            text: "El guion bajo en `1_000_000` es solo visual. Python lo lee como un millón.",
          },
        ],
      },
      {
        type: "python",
        id: "d4-lab",
        title: "Laboratorio: el valor por defecto",
        minutes: 6,
        graded: false,
        prompt: [
          { kind: "p", text: "Corré las dos llamadas. Fijate cuál usó el turno por defecto y cuál lo pisó." },
        ],
        starter: `def saludar(nombre, turno="mañana"):
    return f"Hola {nombre}, buen {turno}"

print(saludar("Luz"))
print(saludar("Luz", "tarde"))
`,
        tests: "",
        hint: "La primera llamada manda un solo argumento. La segunda manda dos.",
        solution: `def saludar(nombre, turno="mañana"):
    return f"Hola {nombre}, buen {turno}"

print(saludar("Luz"))
print(saludar("Luz", "tarde"))
`,
      },
      {
        type: "python",
        id: "d4-costo",
        title: "Estimar un costo",
        minutes: 12,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`costo_estimado(tokens, precio_por_millon=2.5)` devuelve los dólares: tokens dividido un millón, por el precio. Si no te pasan precio, usá 2.5.",
          },
        ],
        starter: `def costo_estimado(tokens, precio_por_millon=2.5):
    return 0
`,
        tests: `fn = globals().get("costo_estimado")
assert fn is not None, "Definí costo_estimado."
assert abs(fn(1_000_000) - 2.5) < 1e-9, "un millón de tokens a 2.5 debería costar 2.5"
assert abs(fn(500_000, 4) - 2.0) < 1e-9, "medio millón a 4 dólares debería costar 2"
assert abs(fn(0) - 0) < 1e-9
`,
        hint: "return tokens / 1_000_000 * precio_por_millon. No redondees.",
        solution: `def costo_estimado(tokens, precio_por_millon=2.5):
    return tokens / 1_000_000 * precio_por_millon
`,
      },
      {
        type: "python",
        id: "d4-fila",
        title: "Resumir una fila",
        minutes: 10,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`resumir_fila(fila)` recibe un diccionario con `titulo` y `tokens`. Devolvé un texto con esta forma exacta: `Notas de RAG (1500 tokens)`.",
          },
        ],
        starter: `def resumir_fila(fila):
    return ""
`,
        tests: `fn = globals().get("resumir_fila")
assert fn is not None, "Definí resumir_fila(fila)."
assert fn({"titulo": "Notas de RAG", "tokens": 1500}) == "Notas de RAG (1500 tokens)"
assert fn({"titulo": "Guía", "tokens": 0, "extra": 1}) == "Guía (0 tokens)"
`,
        hint: "Un f-string alcanza: f\"{fila['titulo']} ({fila['tokens']} tokens)\".",
        solution: `def resumir_fila(fila):
    return f"{fila['titulo']} ({fila['tokens']} tokens)"
`,
      },
      {
        type: "quiz",
        id: "d4-quiz",
        title: "Cierre del día",
        minutes: 8,
        questions: [
          {
            prompt: "¿Qué pasa si una función no tiene return?",
            options: ["Devuelve 0", "Devuelve \"\"", "Devuelve None", "No se puede definir"],
            answer: 2,
            why: "El return ausente vale None.",
          },
          {
            prompt: "¿Para qué sirve un argumento con valor por defecto?",
            options: [
              "Obliga a pasar siempre ese valor",
              "Quien llama puede omitirlo",
              "Convierte el valor en texto",
              "Lo guarda en la base",
            ],
            answer: 1,
            why: "Si no te lo pasan, usás el que escribiste al definir la función.",
          },
          {
            prompt: "¿Python rechaza una llamada si el valor no coincide con la anotación de tipo?",
            options: [
              "Sí, siempre",
              "No: la anotación no se exige al correr",
              "Solo los domingos",
              "Solo si usás print",
            ],
            answer: 1,
            why: "Los hints son para personas y editores. El intérprete no los valida solo.",
          },
          {
            prompt: "¿Dónde se ve una variable creada adentro de una función?",
            options: [
              "En todo el archivo",
              "Solo adentro de esa función, salvo que la devuelvas",
              "En SQL",
              "En el print anterior",
            ],
            answer: 1,
            why: "El interior de la función no se escapa. El return es la puerta.",
          },
        ],
      },
    ],
  },
  {
    n: 5,
    title: "Errores y JSON",
    outcome: "Atrapás un JSON roto y devolvés texto JSON sin perder las tildes.",
    blocks: [
      {
        type: "read",
        id: "d5-errores",
        title: "El programa puede fallar y seguir",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "Cuando algo sale mal, Python corta y muestra un traceback: el tipo de error, el mensaje y la línea. Leelo de abajo hacia arriba. La última línea dice qué pasó. Más arriba, dónde.",
          },
          {
            kind: "p",
            text: "`try` intenta. `except` agarra un tipo de error. Si atrapás todo con un `except` pelado, escondés bugs que no eran ese. Nombrá el error que esperás.",
          },
          {
            kind: "code",
            text: `try:
    data = json.loads(texto)
except json.JSONDecodeError:
    data = None`,
          },
          {
            kind: "note",
            tone: "course",
            title: "Los modelos a veces mandan JSON roto",
            text: "Structured outputs y JSON mode bajan esa chance. No la borran. El curso habla de sistemas que aguantan un error: este try es la versión mínima.",
          },
        ],
      },
      {
        type: "read",
        id: "d5-json",
        title: "JSON es texto con forma de diccionario",
        minutes: 8,
        body: [
          {
            kind: "p",
            text: "JSON viaja como `str`. `json.loads` lo convierte en dict, lista, número, texto, bool o None. `json.dumps` hace el camino inverso: de un valor Python a texto.",
          },
          {
            kind: "ul",
            items: [
              "En JSON las claves van siempre entre comillas dobles.",
              "`true`, `false` y `null` en JSON son `True`, `False` y `None` en Python.",
              "Sin `ensure_ascii=False`, `dumps` escribe `\\u00ed` en vez de `í`.",
            ],
          },
          {
            kind: "code",
            text: `import json
texto = '{"respuesta": "listo", "tokens": 12}'
data = json.loads(texto)
print(data["respuesta"])
print(json.dumps({"respuesta": "día"}, ensure_ascii=False))`,
          },
        ],
      },
      {
        type: "python",
        id: "d5-lab",
        title: "Laboratorio: ida y vuelta",
        minutes: 6,
        graded: false,
        prompt: [
          {
            kind: "p",
            text: "Corré el ejemplo. Después rompé el texto a propósito —sacale una comilla— y mirá el traceback. Volvé a dejarlo bien antes de seguir.",
          },
        ],
        starter: `import json
texto = '{"respuesta": "listo", "tokens": 12}'
data = json.loads(texto)
print(data["respuesta"])
print(json.dumps({"respuesta": "día"}, ensure_ascii=False))
`,
        tests: "",
        hint: "loads entra. dumps sale. La clave se lee como un diccionario común.",
        solution: `import json
texto = '{"respuesta": "listo", "tokens": 12}'
data = json.loads(texto)
print(data["respuesta"])
print(json.dumps({"respuesta": "día"}, ensure_ascii=False))
`,
      },
      {
        type: "python",
        id: "d5-parsear",
        title: "Parsear una respuesta",
        minutes: 12,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`parsear_respuesta(texto)` recibe un string. Si es JSON válido y el valor es un diccionario con la clave `respuesta`, devolvé ese valor. Si el JSON está roto, no es un diccionario o no tiene la clave, devolvé `None`.",
          },
        ],
        starter: `def parsear_respuesta(texto):
    return None
`,
        tests: `fn = globals().get("parsear_respuesta")
assert fn is not None, "Definí parsear_respuesta(texto)."
assert fn('{"respuesta": "hola"}') == "hola"
assert fn('{"respuesta": "día"}') == "día"
assert fn('{"respuesta": 3}') == 3
assert fn("no es json") is None
assert fn('{"otra": 1}') is None
assert fn("[1, 2, 3]") is None
`,
        hint: "import json. try con json.loads. except json.JSONDecodeError: return None. Después preguntá isinstance(data, dict) y si \"respuesta\" in data.",
        solution: `import json

def parsear_respuesta(texto):
    try:
        data = json.loads(texto)
    except json.JSONDecodeError:
        return None
    if isinstance(data, dict) and "respuesta" in data:
        return data["respuesta"]
    return None
`,
      },
      {
        type: "python",
        id: "d5-empaquetar",
        title: "Empaquetar para mandar",
        minutes: 10,
        graded: true,
        prompt: [
          {
            kind: "p",
            text: "`empaquetar(respuesta)` devuelve un string JSON con una sola clave, `respuesta`. Si el valor tiene tildes, el string tiene que mostrarlas: usá `ensure_ascii=False`.",
          },
        ],
        starter: `import json

def empaquetar(respuesta):
    return json.dumps({})
`,
        tests: `import json
fn = globals().get("empaquetar")
assert fn is not None, "Definí empaquetar(respuesta)."
raw = fn("día")
assert isinstance(raw, str), "Tiene que devolver un string, no " + type(raw).__name__
assert "día" in raw, "La tilde se escapó. Usá ensure_ascii=False."
assert json.loads(raw) == {"respuesta": "día"}
assert json.loads(fn(3)) == {"respuesta": 3}
`,
        hint: "return json.dumps({\"respuesta\": respuesta}, ensure_ascii=False).",
        solution: `import json

def empaquetar(respuesta):
    return json.dumps({"respuesta": respuesta}, ensure_ascii=False)
`,
      },
      {
        type: "quiz",
        id: "d5-quiz",
        title: "Cierre del día",
        minutes: 8,
        questions: [
          {
            prompt: "¿Qué hace json.loads?",
            options: [
              "Convierte un valor Python en texto",
              "Convierte texto JSON en un valor Python",
              "Escribe un archivo",
              "Cierra un error",
            ],
            answer: 1,
            why: "loads = load string. dumps hace el camino inverso.",
          },
          {
            prompt: "¿Qué error lanza un JSON inválido?",
            options: ["KeyError", "TypeError", "json.JSONDecodeError", "None"],
            answer: 2,
            why: "Ese es el que tiene sentido atrapar alrededor de loads.",
          },
          {
            prompt: "¿Para qué sirve ensure_ascii=False?",
            options: [
              "Borra las tildes",
              "Deja las tildes visibles en el texto JSON",
              "Ordena las claves",
              "Evita el try",
            ],
            answer: 1,
            why: "Si no, dumps escribe secuencias \\u en vez del carácter.",
          },
          {
            prompt: "¿Por qué no usar un except pelado?",
            options: [
              "Porque no existe",
              "Porque esconde errores que no esperabas",
              "Porque solo sirve en SQL",
              "Porque print no funciona adentro",
            ],
            answer: 1,
            why: "Atrapá el error que sabés manejar. El resto tiene que verse.",
          },
        ],
      },
    ],
  },
];
