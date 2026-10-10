import type { RichPart } from "@/content/types";

function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="rounded-sm bg-brass-soft px-1 font-mono text-sm">
          {part.slice(1, -1)}
        </code>
      );
    }
    const link = /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/.exec(part);
    if (link) {
      return (
        <a
          key={index}
          href={link[2]}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-brass underline-offset-4"
        >
          {link[1]}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

const noteTone = {
  course: { label: "En el curso", box: "border-brass bg-brass-soft" },
  tip: { label: "Detalle", box: "border-pine bg-pine-soft" },
  warn: { label: "Cuidado", box: "border-danger bg-danger-soft" },
} as const;

export function RichText({ parts }: { parts: RichPart[] }) {
  return (
    <div className="flex flex-col gap-4">
      {parts.map((part, index) => {
        if (part.kind === "p") {
          return (
            <p key={index}>
              <Inline text={part.text} />
            </p>
          );
        }
        if (part.kind === "ul") {
          return (
            <ul key={index} className="flex list-disc flex-col gap-2 pl-5">
              {part.items.map((item) => (
                <li key={item}>
                  <Inline text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (part.kind === "code") {
          return (
            <pre
              key={index}
              className="max-w-full overflow-x-auto rounded-md border border-line bg-code p-4 font-mono text-sm leading-relaxed text-ink"
            >
              <code>{part.text}</code>
            </pre>
          );
        }
        const tone = noteTone[part.tone];
        return (
          <aside key={index} className={`rounded-md border-l-4 px-4 py-3 ${tone.box}`}>
            <p className="font-mono text-xs tracking-wide text-ink">{tone.label}</p>
            <p className="mt-1 font-medium">{part.title}</p>
            <p className="mt-1 text-sm">
              <Inline text={part.text} />
            </p>
          </aside>
        );
      })}
    </div>
  );
}
