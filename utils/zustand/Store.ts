import { create } from "zustand";

export interface ICounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state: ICounterStore) => ({ count: state.count + 1 })),
  decrement: () => set((state: ICounterStore) => ({ count: state.count - 1 })),
}));
