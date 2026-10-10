export function CodeEditor({
  value,
  onChange,
  onRun,
  label,
}: {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  label: string;
}) {
  return (
    <textarea
      aria-label={label}
      spellCheck={false}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
          event.preventDefault();
          onRun();
          return;
        }
        if (event.key !== "Tab") return;
        event.preventDefault();
        const target = event.currentTarget;
        const start = target.selectionStart;
        const end = target.selectionEnd;
        const next = `${value.slice(0, start)}    ${value.slice(end)}`;
        onChange(next);
        requestAnimationFrame(() => {
          target.selectionStart = start + 4;
          target.selectionEnd = start + 4;
        });
      }}
      className="min-h-48 w-full resize-y rounded-md border border-line bg-code p-4 font-mono text-base leading-relaxed text-ink"
    />
  );
}
