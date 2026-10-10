import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="size-2 rounded-full bg-brass" aria-hidden="true" />
            Pista
          </Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="rounded-md px-3 py-2 hover:bg-card">
              Días
            </Link>
            <Link to="/repaso" className="rounded-md px-3 py-2 hover:bg-card">
              Repaso
            </Link>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-8">{children}</div>
    </div>
  );
}
