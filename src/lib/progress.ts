import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  done: Record<string, true>;
  mark: (id: string) => void;
  reset: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      done: {},
      mark: (id) =>
        set((state) => (state.done[id] ? state : { done: { ...state.done, [id]: true } })),
      reset: () => set({ done: {} }),
    }),
    { name: "pista-progress-v1", skipHydration: true, partialize: (state) => ({ done: state.done }) },
  ),
);
