

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const etatOrigine = {
  tab1: [],
};

export const useStoreTable = create()(
  immer((set) => ({
    ...etatOrigine,
    setTable: (nom, val) => set((state) => { state[nom] = val }),
  }
)));