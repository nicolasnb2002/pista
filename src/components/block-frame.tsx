import { Check } from "lucide-react";
import type { ReactNode } from "react";

export function BlockFrame({
  id,
  index,
  total,
  title,
  minutes,
  done,
  children,
}: {
  id: string;
  index: number;
  total: number;
  title: string;
  minutes: number;
  done: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 rounded-md border border-line bg-card p-4 sm:p-6">
      <header className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-brass">
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
            <span className="text-muted"> · {minutes} min</span>
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight">{title}</h2>
        </div>
        {done ? (
          <span className="inline-flex items-center gap-1 font-mono text-xs text-pine">
            <Check className="size-4" aria-hidden="true" />
            listo
          </span>
        ) : null}
      </header>
      {children}
    </section>
  );
}
