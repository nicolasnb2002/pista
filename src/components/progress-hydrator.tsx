import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useProgress } from "@/lib/progress";

const ProgressReady = createContext(false);

export function ProgressHydrator({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let active = true;
    void Promise.resolve(useProgress.persist.rehydrate()).then(() => {
      if (active) setReady(true);
    });
    return () => {
      active = false;
    };
  }, []);
  return <ProgressReady.Provider value={ready}>{children}</ProgressReady.Provider>;
}

export function useTrack() {
  const ready = useContext(ProgressReady);
  const done = useProgress((state) => state.done);
  const mark = useProgress((state) => state.mark);
  const reset = useProgress((state) => state.reset);
  return { ready, done: ready ? done : {}, mark, reset };
}
