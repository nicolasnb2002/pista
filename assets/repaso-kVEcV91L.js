import{a as e,o as t}from"./index-DOwIBola.js";import{t as n}from"./shell-DvWN0HG7.js";var r=t(),i=[{title:`Tipos y texto`,body:`int, float, str, bool, None. bool se pregunta antes que int. El f-string mete valores entre llaves.`,code:`nombre = "Luz"
print(f"{nombre} tiene {10} días")
print("2" + "2")  # "22", no 4`},{title:`Decisiones y bucles`,body:`= asigna. == compara. range(3) es 0, 1, 2. Sin return, la función devuelve None.`,code:`if score >= 80:
    return "listo"
elif score >= 50:
    return "en camino"
else:
    return "repasar"`},{title:`Listas y diccionarios`,body:`El primero es [0] y el último es [-1]. .get evita el error si la clave no está. Una lista de dicts es una tabla.`,code:`mensaje = {"role": "user", "content": "hola"}
mensaje.get("tokens")  # None
[m["content"] for m in chat if m["role"] == "user"]`},{title:`JSON`,body:`loads convierte texto en valor. dumps hace lo contrario. Atrapá JSONDecodeError, no un except pelado.`,code:`import json
data = json.loads(texto)
texto = json.dumps({"respuesta": "día"}, ensure_ascii=False)`},{title:`SELECT`,body:`Columnas, tabla, filtro, orden, tope. En ese orden. Las comillas del texto son simples.`,code:`SELECT titulo, tokens
FROM documentos
WHERE coleccion = 'curso'
ORDER BY tokens DESC
LIMIT 2;`},{title:`Agrupar y unir`,body:`GROUP BY hace una fila por grupo. JOIN empareja tablas con ON. WHERE filtra después.`,code:`SELECT d.titulo, c.texto
FROM chunks AS c
JOIN documentos AS d ON d.id = c.documento_id
WHERE c.texto LIKE '%RAG%'
ORDER BY c.posicion;`},{title:`Escribir`,body:`INSERT agrega. UPDATE y DELETE sin WHERE tocan toda la tabla. Una fila, un hecho.`,code:`UPDATE documentos
SET tokens = 1000
WHERE id = 4;`},{title:`SQL desde Python`,body:`El valor viaja aparte. Si lo pegás en el texto, puede cambiar la consulta.`,code:`sql = "SELECT titulo FROM documentos WHERE coleccion = ?"
params = (coleccion,)`}];function a(){return(0,r.jsxs)(n,{children:[(0,r.jsx)(`p`,{className:`text-sm font-medium text-brass`,children:`Hoja única`}),(0,r.jsx)(`h1`,{className:`mt-2 text-4xl font-semibold tracking-tight`,children:`Repaso`}),(0,r.jsx)(`p`,{className:`mt-4 text-lg`,children:`La sintaxis de las diez jornadas, para el día anterior al curso. Si un bloque no te sale de memoria, volvé al día: esta página no reemplaza el ejercicio.`}),(0,r.jsx)(`div`,{className:`mt-8 flex flex-col gap-4`,children:i.map(e=>(0,r.jsxs)(`section`,{className:`rounded-md border border-line bg-card p-4 sm:p-6`,children:[(0,r.jsx)(`h2`,{className:`text-xl font-semibold tracking-tight`,children:e.title}),(0,r.jsx)(`p`,{className:`mt-2`,children:e.body}),e.code?(0,r.jsx)(`pre`,{className:`mt-4 max-w-full overflow-x-auto rounded-md border border-line bg-code p-4 font-mono text-sm leading-relaxed text-ink`,children:(0,r.jsx)(`code`,{children:e.code})}):null]},e.title))}),(0,r.jsx)(`p`,{className:`mt-8 text-sm`,children:(0,r.jsx)(e,{to:`/`,className:`underline decoration-brass underline-offset-4`,children:`Volver a la pista`})})]})}export{a as component};