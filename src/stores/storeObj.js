



import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const etatOrigine = {
  obj1: null,
};

export const useStoreObj = create()(
  immer((set) => ({
    ...etatOrigine,
    setObj: (nom, val) => set((state) => { state[nom] = val}),
  }))
);
